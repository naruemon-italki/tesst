/* =========================================================================
   TONE TRAINER  (Thai tone visualizer — Phases 1 & 2)
   -------------------------------------------------------------------------
   ES module. Imports Pitchy locally (offline-friendly, precached) and exposes
   enterTone()/teardownTone() on window so the app's non-module navigate() /
   navigate-teardown code can call them via the same `typeof fn === 'function'`
   pattern it uses for Sentence Builder.

   Pipeline: getUserMedia -> AudioContext -> AnalyserNode. Each animation frame
   we pull a time-domain buffer, run Pitchy's McLeod Pitch Method to get
   [freqHz, clarity], apply octave-error correction + median filtering, convert
   to SEMITONES relative to the speaker's CALIBRATED centre (per voice profile)
   so the five Thai tones land at their true height, and draw on a canvas. The
   audio never leaves the AnalyserNode — nothing is uploaded or stored.

   Talks to the rest of the app through exactly three window touchpoints:
     window.state, window.saveStorage, window.tts
   and exposes exactly two hooks back: window.enterTone, window.teardownTone.
   ========================================================================= */

import { PitchDetector } from './pitchy.js';

(function () {
  'use strict';

  // ---- Config ----
  const FFT_SIZE = 2048;             // analyser window (~46ms @ 44.1kHz): good for voice F0
  const CLARITY_MIN = 0.80;          // Pitchy clarity gate. Lower than before: tense/high
                                     // phonation has lower clarity, so 0.90 was rejecting
                                     // legitimate high-tone frames and thinning the line.
  const F0_MIN = 70;                 // Hz — below this is almost certainly not voiced speech
  const F0_MAX = 600;                // Hz — generous ceiling; octave-up glitches are now
                                     // corrected (halved) rather than discarded, so we no
                                     // longer need a tight cap to throw frames away.
  const SEMITONE_SPAN = 18;          // total vertical range shown, in semitones (±9 around centre)
  const MAX_GAP_MS = 200;            // unvoiced gap longer than this breaks the contour line.
                                     // Widened so brief clarity dips mid-syllable don't shatter
                                     // the line into dots.
  const AUTO_STOP_SILENCE_MS = 1400; // auto-stop after this much trailing silence (once speech began)
  const MAX_CAPTURE_MS = 8000;       // hard cap on a single capture
  const MEDIAN_WINDOW = 5;           // median filter width (odd) for de-glitching F0
  const OCTAVE_TOLERANCE = 3;        // semitones — how close to an exact octave a jump must be
                                     // to be treated as an octave error and folded back.
  const MAX_PROFILES = 5;            // cap on saved voice profiles
  const CAL_MIN_SAMPLES = 25;        // minimum accepted pitch frames for a valid calibration

  // Master switch for the in-trainer debug tools (the "🐞 Debug mode" toggle and
  // its panel). false => the whole debug section is hidden and never wired, so
  // it doesn't appear in the live trainer. Flip to true to restore it exactly as
  // before (capture logging, intended-tone picker, copy/download log).
  const SHOW_DEBUG = false;

  // ---- Voice Activity Detection (VAD) ----
  // We only keep frames that are actually SPEECH. A frame counts as speech when
  // its RMS energy is clearly above the room's noise floor AND it passes the
  // pitch clarity/range checks. This replaces the old fixed edge-trim: instead
  // of blindly cutting 70ms off each end, we find where speech actually is and
  // discard everything else (the breathy dying tail and any silence both fall
  // below the energy floor, so they're excluded automatically).
  const NOISE_SAMPLE_MS = 180;       // measure ambient level for this long before speech
  const ENERGY_MARGIN_DB = 9;        // a frame must be this many dB above the noise floor
  const MIN_FLOOR_RMS = 0.004;       // absolute floor so a dead-silent room doesn't set ~0
  const SPEECH_START_FRAMES = 2;     // consecutive speech frames needed to confirm onset
  const SPEECH_END_MS = 180;         // sustained sub-threshold time that ends a speech segment
  const MIN_SPEECH_MS = 120;         // a valid utterance must have at least this much speech
  const MAX_SEMITONE_STEP = 4;       // velocity gate: max plausible pitch change per frame (~16ms).
                                     // A real voice glides; jumps beyond this are tracker glitches
                                     // (octave errors, end-of-word boundary garbage) and are dropped.
  const TERMINAL_STEP = 2.5;         // stricter gate applied ONLY to the final frame(s): a last-frame
                                     // lurch this large (even if under MAX_SEMITONE_STEP) is a boundary
                                     // glitch, not real phonation. Trimming it stops a single garbage
                                     // end-frame from poisoning the contour's endpoint/slope (it was
                                     // hiding genuine rising tones that recover late). Up to 2 frames.

  // Tone-balanced calibration sentence: a spread of all five tones so the MEDIAN
  // pitch lands at a true mid-level (not skewed by tone-heavy text). Short enough
  // to read in a few seconds. Romanization + gloss shown to the learner.
  // Calibration uses THREE isolated mid-tone words, captured the SAME way the game
  // captures words (tap once, auto-stop on end-of-word). This is the key fix: the
  // detection engine measures every contour in semitones relative to centreHz, so
  // centreHz must be the speaker's MID-TONE-IN-ISOLATION level — exactly the zero
  // point the game's single-word contours are judged against. Calibrating on a
  // connected sentence put centreHz in the wrong register (a real speaker measured
  // ~195 Hz from a sentence, then had nearly every isolated word misdetected).
  // Three clean mid-tone words, said in isolation, give a centre that mirrors how
  // people actually speak in these modes. All are basic, familiar words.
  const CAL_WORDS = [
    { thai: 'มา',  rom: 'maa',  gloss: '“to come”' },
    { thai: 'ครู', rom: 'kroo', gloss: '“teacher”' },
    { thai: 'ดี',  rom: 'dee',  gloss: '“good”' }
  ];
  const CAL_WORD_COUNT = CAL_WORDS.length;

  // The five Thai tones as normalized semitone contours, derived from Abramson's
  // classic F0 measurements of Standard Thai tones (A.S. Abramson, 1962). Values
  // are semitones relative to the speaker's mid-level (0), sampled evenly across
  // normalized syllable duration (left = onset, right = offset). These are the
  // citation-form ("dictionary") shapes for an isolated syllable.
  //   mid     : starts near mid, drifts gently down
  //   low     : sits low, sags slightly
  //   falling : rises to a peak early, then falls steeply
  //   high    : climbs steadily, peaks late, tiny final drop
  //   rising  : dips low first, then sweeps up at the end
  const TONE_REFS = {
    mid:     { label: 'Mid',     th: 'สามัญ',  shape: [0.3, 0.2, 0.0, -0.4, -0.9, -1.4] },
    low:     { label: 'Low',     th: 'เอก',    shape: [-2.0, -2.5, -3.0, -3.4, -3.8, -4.2] },
    falling: { label: 'Falling', th: 'โท',     shape: [1.5, 3.5, 4.2, 2.5, -1.0, -5.0] },
    high:    { label: 'High',    th: 'ตรี',    shape: [-0.5, 0.5, 1.8, 3.2, 4.4, 4.0] },
    rising:  { label: 'Rising',  th: 'จัตวา',  shape: [-1.5, -2.6, -3.0, -2.2, 0.5, 3.8] }
  };
  const TONE_ORDER = ['mid', 'low', 'falling', 'high', 'rising'];

  // ---- State ----
  let detector = null;               // Pitchy PitchDetector (lazily built for FFT_SIZE)
  let inputBuf = null;               // Float32Array reused for analyser reads
  let audioCtx = null;
  let micStream = null;
  let sourceNode = null;
  let analyser = null;
  let rafId = null;
  let running = false;

  let selectedTone = 'none';         // 'none' or a tone key — OPTIONAL visual guide overlay
  let points = [];                   // captured contour: {t, hz} or {gap:true}
  let recentHz = [];                 // recent accepted F0 (octave ref + final centre)
  let medianBuf = [];                // small ring for median filtering raw F0
  let captureCentre = 0;             // fixed semitone reference (Hz) for the whole contour
  let trimmedPoints = null;          // speech-only contour used for the frozen draw + classify
  let detectedTone = null;           // result of classifying the last capture
  let startTime = 0;
  let lastVoicedTime = 0;
  let everVoiced = false;
  let frozen = false;                // a finished capture is on screen

  // VAD (voice activity detection) runtime state
  let noiseFloorRms = 0;             // measured ambient RMS (set during the noise-sample window)
  let floorSamples = [];             // RMS samples collected while measuring the floor
  let speechThresholdRms = 0;        // noiseFloor * margin — frames above this are "loud enough"
  let inSpeech = false;              // currently inside a confirmed speech segment
  let speechRunFrames = 0;           // consecutive loud frames (to confirm onset)
  let lastLoudTime = 0;              // last time energy was above threshold

  // Profile / mode state
  let activeProfile = null;          // the selected profile object (drives the centre)
  let selectedProfileId = null;      // selected in the picker (may differ until Start)
  let mode = 'trainer';              // 'trainer' | 'calibrate' — what the mic loop is doing
  let calWordIdx = 0;                // which calibration WORD we're on (0..N-1)
  let calWordMedians = [];           // per-word median Hz (one entry per finished word)
  let calAllFrames = [];             // all cleaned frames across words (for the 10/90 range)
  let calName = '';                  // name entered for the new profile
  let calRecalId = null;             // when recalibrating, the existing profile id
  let calOnDone = null;              // optional callback fired when the cal modal closes,
                                     // used by external callers (e.g. Tone Challenge) so
                                     // they can refresh THEIR own profile picker instead
                                     // of the trainer's. null => trainer-initiated.

  // Debug mode: when on, each capture appends a structured record so detection
  // can be analysed against real voices. Off by default; nothing uploaded.
  let debugOn = false;
  let debugLog = [];                 // array of per-attempt records
  let debugIntended = 'unknown';     // the tone the user says they're attempting

  // DOM (resolved on first enter)
  let elCanvas, elCtx, elHint, elStatus, elMicBtn, elClearBtn, elRefToggle;
  let dpr = 1;
  let built = false;

  function $(id) { return document.getElementById(id); }

  function buildRefToggle() {
    elRefToggle.innerHTML = '';
    // First option: turn the guide off entirely (default).
    const noneBtn = document.createElement('button');
    noneBtn.type = 'button';
    noneBtn.className = 'tone-ref-opt' + (selectedTone === 'none' ? ' active' : '');
    noneBtn.dataset.tone = 'none';
    noneBtn.innerHTML = 'Off<span class="tone-ref-th">no guide</span>';
    noneBtn.addEventListener('click', () => selectGuide('none'));
    elRefToggle.appendChild(noneBtn);

    TONE_ORDER.forEach(key => {
      const ref = TONE_REFS[key];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tone-ref-opt' + (key === selectedTone ? ' active' : '');
      btn.dataset.tone = key;
      btn.innerHTML = ref.label + '<span class="tone-ref-th">' + ref.th + '</span>';
      btn.addEventListener('click', () => selectGuide(key));
      elRefToggle.appendChild(btn);
    });
  }

  function selectGuide(key) {
    selectedTone = key;
    elRefToggle.querySelectorAll('.tone-ref-opt').forEach(b =>
      b.classList.toggle('active', b.dataset.tone === key));
    draw(); // re-render overlay immediately
  }

  function resolveDom() {
    elCanvas = $('tone-canvas');
    elCtx = elCanvas.getContext('2d');
    elHint = $('tone-canvas-hint');
    elStatus = $('tone-status');
    elMicBtn = $('tone-mic-btn');
    elClearBtn = $('tone-clear-btn');
    elRefToggle = $('tone-ref-toggle');
  }

  function wireOnce() {
    if (built) return;
    built = true;
    resolveDom();
    buildRefToggle();
    elMicBtn.addEventListener('click', onMicTap);
    elClearBtn.addEventListener('click', () => clearCapture());
    window.addEventListener('resize', onResize);

    // Setup screen
    $('tone-start-btn').addEventListener('click', startTrainer);

    // Calibration modal
    const nameInput = $('tone-cal-name');
    nameInput.addEventListener('input', () => {
      $('tone-cal-name-next').disabled = nameInput.value.trim().length === 0;
    });
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && nameInput.value.trim().length > 0) calGotoRecord();
    });
    $('tone-cal-name-next').addEventListener('click', calGotoRecord);
    $('tone-cal-name-cancel').addEventListener('click', () => finishCalModal());
    $('tone-cal-rec-cancel').addEventListener('click', () => { stopCalibration(true); finishCalModal(); });
    $('tone-cal-rec-btn').addEventListener('click', onCalRecordTap);
    $('tone-cal-listen').addEventListener('click', () => {
      try {
        if (window.tts) window.tts.speak(CAL_WORDS[calWordIdx].thai, $('tone-cal-listen'));
      } catch (e) {}
    });
    $('tone-cal-done-ok').addEventListener('click', () => finishCalModal());

    // The calibration word text is set per-word by renderCalWord(), since
    // calibration cycles through CAL_WORDS. Nothing to seed statically here.

    // Tap-to-hear any Thai text in the view (subtitle ฝึกวรรณยุกต์ + practice words).
    const view = $('view-tone');
    if (view && typeof window.wireThaiTapToSpeak === 'function') {
      window.wireThaiTapToSpeak(view, '.th');
    }

    // How-to accordion: restore saved open/closed state, wire toggles that persist.
    wireHowtoAccordion();

    // Debug mode controls.
    wireDebugControls();
  }

  function wireDebugControls() {
    const toggle = $('tone-debug-toggle');
    if (!toggle) return;
    // Hidden by default (SHOW_DEBUG=false): hide the whole section and don't wire
    // anything. Flip SHOW_DEBUG to true to bring the debug tools back unchanged.
    if (!SHOW_DEBUG) {
      const section = toggle.closest('.tone-debug-section');
      if (section) section.hidden = true;
      const panel = $('tone-debug-panel');
      if (panel) panel.hidden = true;
      debugOn = false;
      return;
    }
    toggle.addEventListener('click', () => {
      debugOn = !debugOn;
      toggle.textContent = '🐞 Debug mode: ' + (debugOn ? 'ON' : 'off');
      toggle.classList.toggle('on', debugOn);
      $('tone-debug-panel').hidden = !debugOn;
    });

    // Intended-tone selector (so the log knows what the user was attempting).
    const intendedWrap = $('tone-debug-intended');
    const opts = [['unknown', '—'], ['mid', 'Mid'], ['low', 'Low'],
                  ['falling', 'Falling'], ['high', 'High'], ['rising', 'Rising']];
    debugIntended = 'unknown';
    intendedWrap.innerHTML = '';
    opts.forEach(([key, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tone-ref-opt' + (key === debugIntended ? ' active' : '');
      b.dataset.intended = key;
      b.textContent = label;
      b.addEventListener('click', () => {
        debugIntended = key;
        intendedWrap.querySelectorAll('.tone-ref-opt').forEach(x =>
          x.classList.toggle('active', x.dataset.intended === key));
      });
      intendedWrap.appendChild(b);
    });

    $('tone-debug-copy').addEventListener('click', copyDebugLog);
    $('tone-debug-download').addEventListener('click', downloadDebugLog);
    $('tone-debug-clear').addEventListener('click', () => {
      debugLog = [];
      updateDebugCount();
      setDebugStatus('Log cleared.');
    });
  }

  function updateDebugCount() {
    const el = $('tone-debug-count');
    if (el) el.textContent = debugLog.length + ' attempt' + (debugLog.length === 1 ? '' : 's') + ' logged';
  }
  function setDebugStatus(msg) {
    const el = $('tone-debug-status');
    if (el) { el.textContent = msg; if (msg) setTimeout(() => { if (el.textContent === msg) el.textContent = ''; }, 3000); }
  }

  // Append a record of the current capture to the debug log.
  function logDebugAttempt(core, result) {
    if (!debugOn || !result) return;
    const m = result.m || {};
    const r1 = (x) => (typeof x === 'number' ? Math.round(x * 100) / 100 : x);
    // The full pitch contour in Hz and in semitones-vs-centre (rounded).
    const hz = core.map(p => Math.round(p.hz));
    const semis = core.map(p => r1(12 * Math.log2(p.hz / m.centreHz)));
    debugLog.push({
      time: new Date().toISOString(),
      profile: activeProfile ? activeProfile.name : '(none)',
      centreHz: r1(m.centreHz),
      intended: debugIntended,
      detected: result.tone,
      correct: (debugIntended !== 'unknown') ? (debugIntended === result.tone) : null,
      confidence: r1(result.confidence),
      features: {
        first: r1(m.first), last: r1(m.last), mean: r1(m.mean),
        net: r1(m.net), minV: r1(m.minV), maxV: r1(m.maxV),
        maxAt: r1(m.maxAt), range: r1(m.range), points: m.n
      },
      hz, semis
    });
    updateDebugCount();
  }

  function buildDebugText() {
    const header = {
      app: 'Thai Tone Trainer debug log',
      exported: new Date().toISOString(),
      attempts: debugLog.length,
      note: 'features in semitones vs centreHz. net=last-first. maxAt=0..1 peak position.'
    };
    return JSON.stringify({ header, log: debugLog }, null, 2);
  }

  async function copyDebugLog() {
    if (!debugLog.length) { setDebugStatus('Nothing to copy yet.'); return; }
    const text = buildDebugText();
    try {
      await navigator.clipboard.writeText(text);
      setDebugStatus('Copied ' + debugLog.length + ' attempts to clipboard.');
    } catch (e) {
      // Fallback for browsers/contexts where clipboard API is blocked.
      try {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.focus(); ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        setDebugStatus('Copied to clipboard.');
      } catch (e2) {
        setDebugStatus('Copy failed — use Download instead.');
      }
    }
  }

  function downloadDebugLog() {
    if (!debugLog.length) { setDebugStatus('Nothing to download yet.'); return; }
    try {
      const blob = new Blob([buildDebugText()], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tone-debug-' + Date.now() + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDebugStatus('Downloaded.');
    } catch (e) {
      setDebugStatus('Download failed — try Copy instead.');
    }
  }

  // The Getting Started accordion (How to use / Useful words). Sections default
  // OPEN until the learner has tapped "Tap to speak" at least once (tracked in
  // state.toneTrainerSpoke); after that they default CLOSED. The open/closed
  // state is NOT persisted per-section — only the one-time "spoke" flag drives
  // the default. Within a visit the learner can still freely toggle each header.
  // wireHowtoAccordion() attaches the header listeners once; applyHowtoDefaults()
  // (re)applies the open/closed default and is called on every entry.
  function applyHowtoDefaults() {
    const view = $('view-tone');
    if (!view) return;
    const st = window.state || {};
    const open = !st.toneTrainerSpoke;   // open until first mic tap, then closed
    view.querySelectorAll('.tone-howto-section').forEach(section => {
      section.classList.toggle('open', open);
    });
  }

  function wireHowtoAccordion() {
    const view = $('view-tone');
    if (!view) return;
    applyHowtoDefaults();
    view.querySelectorAll('.tone-howto-section').forEach(section => {
      const header = section.querySelector('.howto-header');
      if (header && !header._wired) {
        header._wired = true;
        header.addEventListener('click', () => {
          // Visual toggle for this visit only (not persisted).
          section.classList.toggle('open', !section.classList.contains('open'));
        });
      }
    });
  }

  function setStatus(text, cls) {
    if (!elStatus) return;
    elStatus.textContent = text;
    elStatus.className = 'tone-status' + (cls ? ' ' + cls : '');
  }

  function showHint(show) {
    if (elHint) elHint.classList.toggle('hidden-hint', !show);
  }

  // Size the canvas backing store to its CSS box for crisp HiDPI rendering.
  function sizeCanvas() {
    if (!elCanvas) return;
    const rect = elCanvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 3));
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);
    if (elCanvas.width !== w || elCanvas.height !== h) {
      elCanvas.width = w;
      elCanvas.height = h;
    }
  }

  function onResize() {
    if (currentlyOnToneView()) { sizeCanvas(); draw(); }
  }
  function currentlyOnToneView() {
    const v = $('view-tone');
    return v && !v.classList.contains('hidden');
  }

  // Read a CSS variable from the themed root so canvas matches light/dark/sepia.
  function cssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  function median(arr) {
    if (!arr.length) return 0;
    const s = arr.slice().sort((a, b) => a - b);
    const m = s.length >> 1;
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  // If `f` is roughly an octave (or two) away from reference `ref`, fold it back
  // toward ref. This corrects the classic autocorrelation octave error where a
  // frame reads as 2x or 0.5x the true pitch. Returns the corrected frequency.
  function foldOctave(f, ref) {
    if (f <= 0 || ref <= 0) return f;
    let best = f;
    let bestDist = Math.abs(12 * Math.log2(f / ref));
    // Try shifting f by ±1 and ±2 octaves; keep whichever lands closest to ref.
    for (const mult of [0.25, 0.5, 2, 4]) {
      const cand = f * mult;
      const dist = Math.abs(12 * Math.log2(cand / ref));
      if (dist < bestDist) { bestDist = dist; best = cand; }
    }
    // Only accept the fold if the original was genuinely near an octave boundary
    // (i.e. far from ref) and the fold brings it much closer. This avoids nudging
    // legitimate large-but-sub-octave movements.
    const origDist = Math.abs(12 * Math.log2(f / ref));
    if (origDist > 12 - OCTAVE_TOLERANCE && bestDist < OCTAVE_TOLERANCE * 2) {
      return best;
    }
    return f;
  }

  // ---- Capture lifecycle ----
  async function onMicTap() {
    if (running) { stopCapture(); return; }
    // First tap-to-speak ever: flag it so future visits default the how-to
    // accordions to CLOSED. One-time, persisted.
    try {
      if (window.state && !window.state.toneTrainerSpoke) {
        window.state.toneTrainerSpoke = true;
        if (window.saveStorage) window.saveStorage();
      }
    } catch (e) {}
    await startCapture();
  }

  // Shared mic acquisition. Creates/resumes the AudioContext inside the user
  // gesture (iOS requirement), opens the stream, and wires source -> analyser.
  // Returns true on success. Sets up detector + inputBuf sized to the analyser.
  async function acquireMic() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') {
      try { await audioCtx.resume(); } catch (e) {}
    }
    micStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      video: false
    });
    sourceNode = audioCtx.createMediaStreamSource(micStream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = FFT_SIZE;
    sourceNode.connect(analyser);
    // Not connected to destination — no audible feedback.
    if (!detector || detector.inputLength !== analyser.fftSize) {
      detector = PitchDetector.forFloat32Array(analyser.fftSize);
      detector.clarityThreshold = CLARITY_MIN;
    }
    inputBuf = new Float32Array(analyser.fftSize);
    return true;
  }

  // Read one frame: compute RMS energy AND pitch. Returns { hz, rms }.
  //   hz  = octave-corrected, median-filtered pitch, or 0 if clarity/range fail
  //   rms = root-mean-square amplitude of the frame (the loudness signal for VAD)
  // The SPEECH decision (energy gate + segmentation) lives in the loops, which
  // own the VAD state. This keeps pitch extraction and voice-activity separate.
  function readPitchFrame() {
    analyser.getFloatTimeDomainData(inputBuf);

    // RMS energy of this frame.
    let sumSq = 0;
    for (let i = 0; i < inputBuf.length; i++) sumSq += inputBuf[i] * inputBuf[i];
    const rms = Math.sqrt(sumSq / inputBuf.length);

    let [freq, clarity] = detector.findPitch(inputBuf, audioCtx.sampleRate);
    if (freq > 0 && recentHz.length >= 3) {
      freq = foldOctave(freq, median(recentHz));
    }
    const pitched = clarity >= CLARITY_MIN && freq >= F0_MIN && freq <= F0_MAX;
    if (!pitched) { medianBuf = []; return { hz: 0, rms }; }
    medianBuf.push(freq);
    if (medianBuf.length > MEDIAN_WINDOW) medianBuf.shift();
    const f = median(medianBuf);
    recentHz.push(f);
    if (recentHz.length > 120) recentHz.shift();
    return { hz: f, rms };
  }

  // dB helper for the energy gate.
  function rmsToDb(rms) { return 20 * Math.log10(Math.max(1e-9, rms)); }

  async function startCapture() {
    clearCapture(true); // reset data but keep frozen flag handling internal
    try {
      await acquireMic();

      mode = 'trainer';
      running = true;
      frozen = false;
      points = [];
      recentHz = [];
      medianBuf = [];
      everVoiced = false;
      startTime = performance.now();
      lastVoicedTime = startTime;
      resetVad();

      sizeCanvas();
      showHint(false);
      elClearBtn.hidden = true;
      elMicBtn.classList.add('recording');
      elMicBtn.querySelector('.tone-mic-label').textContent = 'Tap to stop';
      setStatus('Listening…', 'recording');

      loop();
    } catch (err) {
      handleMicError(err);
    }
  }

  function handleMicError(err) {
    running = false;
    elMicBtn.classList.remove('recording');
    elMicBtn.querySelector('.tone-mic-label').textContent = 'Tap to speak';
    let msg = 'Could not access the microphone.';
    if (err && (err.name === 'NotAllowedError' || err.name === 'SecurityError')) {
      msg = 'Microphone permission was blocked. Enable it in your browser settings.';
    } else if (err && err.name === 'NotFoundError') {
      msg = 'No microphone was found on this device.';
    }
    setStatus(msg, 'error');
    showHint(points.length === 0);
    releaseMic();
  }

  function resetVad() {
    noiseFloorRms = 0;
    floorSamples = [];
    speechThresholdRms = 0;
    inSpeech = false;
    speechRunFrames = 0;
    lastLoudTime = 0;
  }

  // Update VAD with this frame's energy. Returns one of:
  //   'measuring' — still sampling the ambient noise floor (ignore pitch)
  //   'silence'   — below threshold and not in a speech segment
  //   'speech'    — inside a confirmed speech segment (keep this frame)
  //   'ended'     — a speech segment just ended (sustained quiet after speech)
  function updateVad(rms, now) {
    const elapsed = now - startTime;

    // Phase 1: measure the room's noise floor before treating anything as speech.
    if (noiseFloorRms === 0) {
      floorSamples.push(rms);
      if (elapsed < NOISE_SAMPLE_MS) return 'measuring';
      // Finalize floor = median of samples, with an absolute minimum so a very
      // quiet room doesn't produce a near-zero threshold that noise spikes beat.
      const f = Math.max(MIN_FLOOR_RMS, median(floorSamples));
      noiseFloorRms = f;
      // Threshold = floor lifted by the dB margin.
      speechThresholdRms = f * Math.pow(10, ENERGY_MARGIN_DB / 20);
      return 'silence';
    }

    const loud = rms >= speechThresholdRms;
    if (loud) lastLoudTime = now;

    if (!inSpeech) {
      // Waiting for onset: need a few consecutive loud frames to confirm.
      if (loud) {
        speechRunFrames++;
        if (speechRunFrames >= SPEECH_START_FRAMES) {
          inSpeech = true;
          everVoiced = true;
          return 'speech';
        }
      } else {
        speechRunFrames = 0;
      }
      return 'silence';
    }

    // In a speech segment: it ends when energy stays low for SPEECH_END_MS.
    if (!loud && (now - lastLoudTime) > SPEECH_END_MS) {
      inSpeech = false;
      return 'ended';
    }
    return 'speech';
  }

  function loop() {
    if (!running) return;
    const now = performance.now();

    const { hz, rms } = readPitchFrame();
    const vad = updateVad(rms, now);

    if (vad === 'measuring') {
      setStatus('Listening…', 'recording');
    } else if (vad === 'speech') {
      lastVoicedTime = now;
      // Only record a point if we ALSO have a valid pitch this frame (voiced).
      // Loud-but-unpitched frames (e.g. a consonant burst) advance VAD but don't
      // draw a pitch point.
      if (hz > 0) {
        const t = now - startTime;
        const last = points[points.length - 1];
        if (last && !last.gap && (t - last.t) > MAX_GAP_MS) {
          points.push({ gap: true });
        }
        points.push({ t, hz, rms });
      }
      setStatus('Listening… (speaking)', 'recording');
    } else if (vad === 'ended') {
      // A real end-of-word. Finalize immediately — no need for the user to tap.
      stopCapture();
      return;
    } else {
      // 'silence' before speech, or between onset attempts.
      // Auto-stop if the user tapped but never actually spoke for a while.
      if (everVoiced && (now - lastVoicedTime) > AUTO_STOP_SILENCE_MS) {
        stopCapture();
        return;
      }
    }

    // Hard cap.
    if ((now - startTime) > MAX_CAPTURE_MS) { stopCapture(); return; }

    draw();
    rafId = requestAnimationFrame(loop);
  }

  function stopCapture() {
    if (!running) return;
    running = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    releaseMic();

    elMicBtn.classList.remove('recording');
    elMicBtn.querySelector('.tone-mic-label').textContent = 'Tap to speak';

    // Clean the captured speech in three stages:
    //   1. Endpoint energy trim — drop trailing (and leading) frames whose energy
    //      has collapsed toward the noise floor. The boundary window that produces
    //      the garbage terminal frame is low-energy, so this removes it first.
    //   2. Light onset cleanup — drop the first couple of transition frames.
    //   3. Velocity gate — reject ANY frame that jumps faster than a human voice
    //      physically can (direction-agnostic), which kills terminal spikes up OR
    //      down and any mid-contour glitch, while leaving gradual glides intact.
    let real = points.filter(p => !p.gap);
    real = trimLowEnergyEnds(real);
    if (real.length >= 5) {
      const drop = Math.min(2, Math.floor(real.length * 0.1));
      let core = real.slice(drop);                 // trim onset transition
      if (core.length < 4) core = real;            // safety for very short words

      core = velocityGate(core);                   // remove implausibly fast jumps

      trimmedPoints = core;

      // Centre on the speaker's calibrated mid-level so tones land at true height.
      captureCentre = (activeProfile && activeProfile.centerHz > 0)
        ? activeProfile.centerHz
        : median(core.map(p => p.hz));

      detectedTone = classifyTone(core, captureCentre);
      frozen = true;
      elClearBtn.hidden = false;
      reportDetection();
      logDebugAttempt(core, detectedTone);
    } else {
      trimmedPoints = null;
      detectedTone = null;
      setStatus('Didn\u2019t catch clear speech. Try again, a little louder.', '');
      showHint(true);
    }
    draw();
  }

  // Stage 1: trim frames at the START and END whose RMS energy has fallen back
  // near the noise floor — the voice has essentially died there, so the pitch is
  // unreliable. We keep the contiguous high-energy core. Threshold is a bit below
  // the VAD speech threshold so we don't over-trim the natural quiet edges of a word.
  function trimLowEnergyEnds(pts) {
    if (pts.length < 5 || !speechThresholdRms) return pts;
    const gate = speechThresholdRms * 0.85;
    let lo = 0, hi = pts.length - 1;
    while (lo < hi && (pts[lo].rms || 0) < gate) lo++;
    while (hi > lo && (pts[hi].rms || 0) < gate) hi--;
    const trimmed = pts.slice(lo, hi + 1);
    return trimmed.length >= 4 ? trimmed : pts;
  }

  // Stage 3: velocity gate. A human voice cannot change pitch faster than roughly
  // MAX_SEMITONE_STEP semitones per frame; anything beyond that is a tracker
  // glitch (octave error, boundary garbage). We walk the contour keeping a
  // "trusted" last value, and drop any frame whose jump from it exceeds the limit.
  // Direction-agnostic, so terminal spikes UP or DOWN are both removed, as are
  // mid-contour glitches. Gradual tone glides never exceed the limit, so real
  // falling/rising contours pass untouched.
  function velocityGate(core) {
    if (core.length < 4) return core;
    const out = [core[0]];
    let lastGood = core[0].hz;
    for (let i = 1; i < core.length; i++) {
      const step = Math.abs(12 * Math.log2(core[i].hz / lastGood));
      if (step <= MAX_SEMITONE_STEP) {
        out.push(core[i]);
        lastGood = core[i].hz;
      }
      // else: skip this frame as a glitch; keep lastGood as the trusted anchor.
    }
    // If the gate removed the trailing frames (a terminal spike), out simply ends
    // at the last trustworthy point — exactly what we want.
    return terminalTrim(out.length >= 4 ? out : core);
  }

  // Stricter END-only trim: the velocity gate's MAX_SEMITONE_STEP (4 st) is loose
  // enough that a final boundary frame can lurch ~3.8 st and still pass. At the
  // very end of a word that single garbage frame crashes the contour's last value,
  // which flips the start-to-end slope and masks genuine late-recovering rising
  // tones. Here we remove up to 2 trailing frames whose jump from their neighbour
  // exceeds TERMINAL_STEP. Applied only at the tail, only to large jumps, so real
  // tone glides (which never lurch this hard frame-to-frame) are untouched.
  function terminalTrim(core) {
    let c = core;
    for (let k = 0; k < 2; k++) {
      if (c.length < 6) break;
      const a = c[c.length - 1].hz, b = c[c.length - 2].hz;
      const step = Math.abs(12 * Math.log2(a / b));
      if (step >= TERMINAL_STEP) c = c.slice(0, -1);
      else break;
    }
    return c;
  }

  // PURE capture cleaner (no module state). Runs the same three stages stopCapture
  // uses, but with the energy threshold passed in, so external callers (Tone
  // Challenge) get a contour cleaned identically to the Tone Trainer. Returns the
  // cleaned `core` array, or null if there isn't enough clear speech (< 5 frames).
  function cleanCaptureCore(realPoints, thresholdRms) {
    let real = realPoints.filter(p => !p.gap);
    // Stage 1: endpoint energy trim (parameterized copy of trimLowEnergyEnds).
    if (real.length >= 5 && thresholdRms) {
      const gate = thresholdRms * 0.85;
      let lo = 0, hi = real.length - 1;
      while (lo < hi && (real[lo].rms || 0) < gate) lo++;
      while (hi > lo && (real[hi].rms || 0) < gate) hi--;
      const trimmed = real.slice(lo, hi + 1);
      if (trimmed.length >= 4) real = trimmed;
    }
    if (real.length < 5) return null;
    // Stage 2: light onset cleanup.
    const drop = Math.min(2, Math.floor(real.length * 0.1));
    let core = real.slice(drop);
    if (core.length < 4) core = real;
    // Stage 3: velocity gate (shared, pure).
    core = velocityGate(core);
    return core.length >= 4 ? core : null;
  }

  // Classify a trimmed contour into one of the five Thai tones.
  //
  // TWO-STAGE decision (this is the key design):
  //   Stage 1 — is this a CONTOUR tone or a LEVEL tone? Decided by how much the
  //     pitch MOVES (net slope from start to end). Substantial directed movement
  //     means rising/falling, judged by direction and shape — ABSOLUTE HEIGHT IS
  //     IGNORED here, so a low->mid rise is still "rising" even if it never goes
  //     above the centre.
  //   Stage 2 — only for relatively FLAT contours, use HEIGHT relative to the
  //     calibrated centre to pick low / mid / high, with a downward-DRIFT tiebreaker:
  //     Thai low tone sags slightly, mid stays flat. So a below-centre line that
  //     drifts down reads as low; a below-centre line that stays flat reads as mid.
  //
  // Drift is calibration-independent (a sag is a sag regardless of centre), which
  // makes the low/mid call less fragile to an imperfect calibration centre.
  function classifyTone(core, centreHz) {
    if (!core || core.length < 4) return null;
    const { sc, m } = computeToneScores(core, centreHz);

    // Pick the winner and compute confidence from the margin to the runner-up.
    const ranked = Object.keys(sc).sort((a, b) => sc[b] - sc[a]);
    const tone = ranked[0];
    const topScore = sc[tone];
    const margin = topScore - sc[ranked[1]];
    // Confidence blends absolute fit (topScore) with how decisively it beat #2.
    const confidence = clamp01(0.45 * clamp01(topScore) + 0.85 * clamp01(margin));

    return {
      tone, confidence,
      runnerUp: ranked[1],
      // Diagnostics (used by debug mode to understand misclassifications):
      m: Object.assign({}, m, {
        scores: { mid: +sc.mid.toFixed(2), low: +sc.low.toFixed(2),
                  falling: +sc.falling.toFixed(2), high: +sc.high.toFixed(2),
                  rising: +sc.rising.toFixed(2) } })
    };
  }

  // PURE scoring core (no DOM, no module-mutable state). Given a cleaned contour
  // `core` ([{hz}, ...]) and the speaker's centre pitch, returns the per-tone
  // match scores `sc` plus the derived features `m`. This is the single source of
  // truth for the acoustic model: classifyTone() (Tone Trainer) and
  // scoreToneAttempt() (Tone Challenge) both build on it, so the two modes can
  // never disagree about what a contour looks like.
  function computeToneScores(core, centreHz) {
    const semis = core.map(p => 12 * Math.log2(p.hz / centreHz));
    const n = semis.length;

    // Robust endpoints: average the first/last ~20% so a single frame doesn't
    // define the slope. mean = overall height. net = directed movement (drift).
    const head = Math.max(1, Math.round(n * 0.2));
    const first = avg(semis.slice(0, head));
    const last  = avg(semis.slice(n - head));
    const mean  = avg(semis);
    const net   = last - first;                  // + rises, - falls (also = drift)
    const maxV  = Math.max(...semis), minV = Math.min(...semis);
    const maxAt = semis.indexOf(maxV) / (n - 1);  // 0..1 position of the peak
    const minAt = semis.indexOf(minV) / (n - 1);  // 0..1 position of the trough
    const range = maxV - minV;                    // total excursion
    const drop  = first - last;                   // + when the contour falls overall

    // Extra features for two native shapes the endpoint-only model misses:
    //  • back-half recovery — a rising tone that DIPS in the body then sweeps up,
    //    ending near where it started (net ~ 0, so 'net' alone can't see it). We
    //    measure the climb from the trough to the highest point AFTER it; using the
    //    true post-trough peak (not the smeared 20% tail average) keeps a late
    //    one-frame sweep visible.
    //  • body level/flatness — a MID tone whose body sits flat near centre but
    //    plunges only at the very end (final declination). Whole-contour mean sags
    //    into the low band, so we look at the BODY (first 70%) separately.
    const troughIdx = semis.indexOf(minV);
    const afterTrough = semis.slice(troughIdx);
    const backPeak = Math.max(...afterTrough);
    const backPeakAt = (troughIdx + afterTrough.indexOf(backPeak)) / (n - 1);
    const recovery = backPeak - minV;             // how far it climbed up from the trough
    const bodyN = Math.max(2, Math.round(n * 0.70));
    const body = semis.slice(0, bodyN);
    const bodyMean = avg(body);
    const bodyRange = Math.max(...body) - Math.min(...body);

    const sc = { mid: 0, low: 0, falling: 0, high: 0, rising: 0 };

    // --- FALLING: a real downward drop, not a gentle drift. Requires a meaningfully
    //     negative net AND a start clearly ABOVE centre. A real falling tone begins
    //     high (first20% well above 0) and drops through/below centre. Native MID
    //     tones decline steeply at the very end (normal final declination) but start
    //     AT centre, so gating on first >= +0.3 keeps that sag out of falling. ---
    if (net <= -1.5 && first >= 0.3) {
      sc.falling = clamp01((-net - 1.5) / 3.5)               // drop beyond the drift band
                 + clamp01(first / 3) * 0.5                  // started above centre
                 + (maxAt <= 0.6 ? 0.2 : 0);                 // peak early-ish
    }

    // --- RISING: upward movement that comes FROM a low body (dips low then climbs).
    //     A contour that merely rises but sits high is a HIGH tone, not rising — so
    //     rising requires a low-ish mean / low trough, not just positive net. ---
    if (net >= 1.5) {
      sc.rising = clamp01((net - 1.0) / 3.5)                 // upward movement
                + (minAt <= 0.6 ? 0.2 : 0)                   // trough early (dip then rise)
                + clamp01((-mean - 0.5) / 3) * 0.6           // body sits low (key vs. high)
                + (minV <= -1.5 ? 0.25 : 0);                 // genuinely dipped low
    } else if (minAt >= 0.30 && minAt <= 0.80 && recovery >= 2.5 &&
               backPeakAt >= 0.85 && minV <= -2.5 && backPeak > minV) {
      // VALLEY RISE: a natural native rising that dips low in the body then sweeps
      // up LATE, ending near its start (so net ~ 0 and the gate above never fires).
      // Tight conditions — trough in the body, a real recovery (>=2.5 st) peaking
      // at the very end, from a genuinely low trough — so a flat LOW tail or a
      // FALLING contour (which keeps dropping) cannot trigger it.
      sc.rising = clamp01((recovery - 2.0) / 3.5)
                + 0.35
                + clamp01((-mean - 0.5) / 3) * 0.4;
    }

    // --- HIGH: sits in the upper part of the range. A high tone may rise INTO the
    //     high range, but its body ends/sits high (mean and last both up). ---
    sc.high = clamp01((mean - 0.3) / 3)                      // height above centre
            + clamp01((last - 0.5) / 3) * 0.5                // ends high
            + (Math.abs(net) < 3 ? 0.1 : 0)                 // not a wild contour
            - clamp01((-net) / 4) * 0.5;                     // penalise big falls

    // NATIVE LEVEL-HIGH: a native high tone in everyday speech is often spoken
    // almost flat, sitting only slightly above the centre rather than climbing
    // 3+ semitones. The height-based term above barely registers for such a
    // contour, so it loses to MID (which scores high near the centre). Detect the
    // signature — body at/above centre, never sagging into the low band, and not
    // falling — and give HIGH a decisive bump while damping MID so a level-high
    // isn't swallowed by mid's centre score. Forceful textbook highs already win,
    // so this only changes the previously-misread gentle native case.
    const levelHigh = (mean >= -0.4 && minV >= -1.6 && drop < 1.5 && maxV >= 0);
    if (levelHigh) sc.high += 0.6;

    // --- LOW: sits in the lower part of the range, flat or gently sagging. ---
    sc.low = clamp01((-mean - 0.8) / 3)                      // height below centre
           + (net <= 0.5 ? 0.15 : 0)                         // not rising
           - clamp01(net / 4) * 0.5;                         // penalise big rises

    // --- MID: near the centre, only gentle movement. Tolerates the small downward
    //     drift that a natural mid tone has (so a -1.5 drift still reads mid). ---
    sc.mid = clamp01(1 - Math.abs(mean) / 2.4)               // close to centre
           * clamp01(1 - Math.max(0, Math.abs(net) - 1.0) / 2.5); // allow gentle drift
    if (levelHigh) sc.mid *= 0.55;                           // yield to a level-high

    // MID WITH FINAL DECLINATION: a native mid often holds flat near centre for the
    // body of the syllable, then drops steeply only at the very end. That terminal
    // plunge drags the whole-contour mean down into the low band, so the height-
    // based mid/low scores misread it. When the BODY (first 70%) is flat and sits
    // near centre, and the trough is right at the END (the drop is terminal, not
    // throughout), score it as the mid it is — judged on the body, not the tail.
    if (bodyRange <= 1.5 && bodyMean >= -1.1 && bodyMean <= 0.6 &&
        minAt >= 0.85 && first >= -0.8) {
      sc.mid = Math.max(sc.mid, clamp01(1 - Math.abs(bodyMean) / 2.4) * 0.9);
    }

    // NOTE: individual scores are intentionally left UN-clamped here (FALLING /
    // RISING / HIGH can sum slightly above 1). classifyTone()'s winner selection
    // and confidence math already handle that exactly as before; callers that need
    // bounded values (scoreToneAttempt) clamp locally. This keeps the Tone
    // Trainer's behaviour bit-for-bit identical to before the refactor.
    return { sc, m: { first, last, mean, net, minV, maxV, maxAt, minAt, range, drop,
                      recovery, backPeakAt, bodyMean, bodyRange, n, centreHz } };
  }

  // Score how well a contour matches a SPECIFIC target tone (for Tone Challenge).
  // Returns { percent (0..100), tone (winner), isTarget, runnerUp, m }.
  //
  // The percent blends three things, so it means "how convincingly did you
  // produce the target tone":
  //   • absolute fit  — how strongly the target tone itself scored (0..1)
  //   • won?          — whether the target was the top-scoring tone
  //   • margin        — how decisively the target beat (or lost to) the next tone
  // A clean on-target tone that clearly wins reads high; an ambiguous one that
  // barely loses reads mid; a contour dominated by a different tone reads low.
  function scoreToneAttempt(core, centreHz, targetTone) {
    if (!core || core.length < 4 || !TONE_REFS[targetTone]) {
      return { percent: 0, tone: null, isTarget: false, runnerUp: null, m: null };
    }
    const { sc, m } = computeToneScores(core, centreHz);
    const ranked = Object.keys(sc).sort((a, b) => sc[b] - sc[a]);
    const winner = ranked[0];
    const isTarget = (winner === targetTone);

    const targetScore = clamp01(sc[targetTone]);
    // Margin of the target vs. its strongest competitor (positive if target wins).
    const best = sc[winner];
    const secondBest = sc[ranked[1]];
    const competitor = isTarget ? secondBest : best;
    const margin = sc[targetTone] - competitor;       // + when target leads

    // Blend: absolute fit dominates, margin sharpens it. A won attempt gets the
    // full positive margin bonus; a lost attempt is pulled down by the (negative)
    // margin so a clearly-wrong tone can't score high just by having some fit.
    let raw = 0.6 * targetScore + 0.55 * clamp01(0.5 + margin);
    raw = clamp01(raw);
    const percent = Math.round(raw * 100);

    return { percent, tone: winner, isTarget, runnerUp: ranked[1], m };
  }

  function reportDetection() {
    if (!detectedTone) { setStatus('', ''); return; }
    const ref = TONE_REFS[detectedTone.tone];
    const c = detectedTone.confidence;

    // Three confidence tiers from the score margin.
    //   >= 0.6  Clear   — confident
    //   >= 0.35 Likely  — probable but not certain
    //   <  0.35 Unsure  — ambiguous; the contour didn't strongly favour one tone
    let tier, tierClass;
    if (c >= 0.6)      { tier = 'Clear';  tierClass = 'conf-clear'; }
    else if (c >= 0.35){ tier = 'Likely'; tierClass = 'conf-likely'; }
    else               { tier = 'Unsure'; tierClass = 'conf-unsure'; }

    // Big readout: the tone name, ONCE (with the Thai name).
    const big = $('tone-detected');
    if (big) {
      big.textContent = ref.label + '  ' + ref.th;
      big.className = 'tone-detected show' + (c < 0.35 ? ' uncertain' : '');
    }

    // Second line: confidence, not a repeat of the tone.
    if (c < 0.35) {
      setStatus('Confidence: ' + tier + ' — could also be ' +
        TONE_REFS[detectedTone.runnerUp].label.toLowerCase() + '. Try again?', tierClass);
    } else {
      setStatus('Confidence: ' + tier, tierClass);
    }
  }

  function avg(a) { return a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0; }
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }

  // Stop and fully release the mic (turns off the OS mic indicator).
  function releaseMic() {
    try { if (sourceNode) sourceNode.disconnect(); } catch (e) {}
    sourceNode = null;
    analyser = null;
    if (micStream) {
      micStream.getTracks().forEach(tr => { try { tr.stop(); } catch (e) {} });
      micStream = null;
    }
    // Keep audioCtx alive (cheap) for fast restart; it's suspended when idle.
    if (audioCtx && audioCtx.state === 'running') {
      try { audioCtx.suspend(); } catch (e) {}
    }
  }

  function clearCapture(internal) {
    points = [];
    recentHz = [];
    medianBuf = [];
    captureCentre = 0;
    trimmedPoints = null;
    detectedTone = null;
    everVoiced = false;
    frozen = false;
    if (elClearBtn) elClearBtn.hidden = true;
    const big = $('tone-detected');
    if (big) big.className = 'tone-detected';
    if (!internal) {
      setStatus('Ready', '');
      showHint(true);
      draw();
    }
  }

  // ---- Drawing ----
  function semiToY(semi, h) {
    // 0 semitones (centre) maps to vertical middle; +span/2 at top.
    const half = SEMITONE_SPAN / 2;
    const clamped = Math.max(-half, Math.min(half, semi));
    return h / 2 - (clamped / half) * (h / 2 - h * 0.08);
  }

  function draw() {
    if (!elCtx || !elCanvas) return;
    const w = elCanvas.width, h = elCanvas.height;
    if (w === 0 || h === 0) return;
    elCtx.clearRect(0, 0, w, h);

    const ink = cssVar('--ink', '#2b2418');
    const inkSoft = cssVar('--ink-soft', '#6b5d44');
    const accent = cssVar('--accent', '#b8893a');
    const border = cssVar('--card-face-border', '#d4b87a');

    // Centre line (the speaker's mid level).
    elCtx.strokeStyle = border;
    elCtx.globalAlpha = 0.5;
    elCtx.lineWidth = 1 * dpr;
    elCtx.beginPath();
    elCtx.moveTo(0, h / 2);
    elCtx.lineTo(w, h / 2);
    elCtx.stroke();
    elCtx.globalAlpha = 1;

    // Reference tone overlay (faint guide).
    const ref = TONE_REFS[selectedTone];
    if (ref) {
      elCtx.strokeStyle = accent;
      elCtx.globalAlpha = 0.35;
      elCtx.lineWidth = 6 * dpr;
      elCtx.lineCap = 'round';
      elCtx.lineJoin = 'round';
      elCtx.setLineDash([2 * dpr, 6 * dpr]);
      elCtx.beginPath();
      const n = ref.shape.length;
      for (let i = 0; i < n; i++) {
        const x = (i / (n - 1)) * w;
        const y = semiToY(ref.shape[i], h);
        if (i === 0) elCtx.moveTo(x, y); else elCtx.lineTo(x, y);
      }
      elCtx.stroke();
      elCtx.setLineDash([]);
      elCtx.globalAlpha = 1;
    }

    // User contour. When frozen, draw the edge-trimmed core (what we classified),
    // so the displayed line matches the detection and excludes the breathy tail.
    const source = (frozen && trimmedPoints && trimmedPoints.length >= 2)
      ? trimmedPoints
      : points;
    const real = source.filter(p => !p.gap);
    if (real.length >= 2) {
      // Centre reference. Prefer the calibrated profile mid-level (stable, so the
      // line sits at its true height even live). When frozen use the fixed
      // captureCentre; otherwise fall back to the running median if no profile.
      const profileCentre = (activeProfile && activeProfile.centerHz > 0) ? activeProfile.centerHz : 0;
      const centre = (frozen && captureCentre > 0)
        ? captureCentre
        : (profileCentre || (recentHz.length ? median(recentHz) : real[real.length - 1].hz));

      // Map captured time range across full width.
      const tEnd = real[real.length - 1].t;
      const tStart = real[0].t;
      const span = Math.max(1, tEnd - tStart);

      elCtx.strokeStyle = ink;
      elCtx.lineWidth = 3.5 * dpr;
      elCtx.lineCap = 'round';
      elCtx.lineJoin = 'round';
      elCtx.beginPath();
      let penDown = false;
      for (let i = 0; i < source.length; i++) {
        const p = source[i];
        if (p.gap) { penDown = false; continue; }
        const semi = 12 * Math.log2(p.hz / centre);
        const x = ((p.t - tStart) / span) * w;
        const y = semiToY(semi, h);
        if (!penDown) { elCtx.moveTo(x, y); penDown = true; }
        else elCtx.lineTo(x, y);
      }
      elCtx.stroke();
    }
  }

  // =========================================================
  //  PROFILES + SETUP / TRAINER MODE SWITCHING
  // =========================================================
  function getProfiles() {
    const st = window.state;
    return (st && Array.isArray(st.toneProfiles)) ? st.toneProfiles : [];
  }
  function persist() {
    try { if (typeof window.saveStorage === 'function') window.saveStorage(); } catch (e) {}
  }

  function setMode(m) {
    const view = $('view-tone');
    if (!view) return;
    view.classList.toggle('tone-mode-trainer', m === 'trainer');
    view.classList.toggle('tone-mode-setup', m === 'setup');
  }

  function renderProfileList() {
    const list = $('tone-profile-list');
    if (!list) return;
    list.innerHTML = '';
    const profiles = getProfiles();

    // If nothing is selected yet, default to last-used (or first).
    if (!selectedProfileId || !profiles.some(p => p.id === selectedProfileId)) {
      const st = window.state;
      const last = st && st.toneLastProfileId;
      selectedProfileId = (last && profiles.some(p => p.id === last))
        ? last
        : (profiles[0] ? profiles[0].id : null);
    }

    profiles.forEach(p => {
      const chip = document.createElement('div');
      chip.className = 'tone-profile-chip' + (p.id === selectedProfileId ? ' selected' : '');

      const avatar = document.createElement('div');
      avatar.className = 'tone-chip-avatar';
      avatar.textContent = p.name.charAt(0) || '?';

      const body = document.createElement('button');
      body.type = 'button';
      body.className = 'tone-chip-body';
      body.style.cssText = 'background:none;border:none;text-align:left;cursor:pointer;color:inherit;';
      body.innerHTML = '<div class="tone-chip-name"></div>' +
                       '<div class="tone-chip-meta">~' + Math.round(p.centerHz) + ' Hz centre</div>';
      body.querySelector('.tone-chip-name').textContent = p.name;
      body.addEventListener('click', () => { selectedProfileId = p.id; renderProfileList(); refreshStart(); });

      const recal = document.createElement('button');
      recal.type = 'button';
      recal.className = 'tone-chip-recal';
      recal.textContent = 'Recalibrate';
      recal.addEventListener('click', (e) => { e.stopPropagation(); openCalModal(p.id); });

      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'tone-chip-delete';
      del.setAttribute('aria-label', 'Delete profile');
      del.textContent = '×';
      del.addEventListener('click', (e) => { e.stopPropagation(); deleteProfile(p.id); });

      chip.appendChild(avatar);
      chip.appendChild(body);
      chip.appendChild(recal);
      chip.appendChild(del);

      // Make the whole chip selectable too (clicking padding).
      chip.addEventListener('click', () => { selectedProfileId = p.id; renderProfileList(); refreshStart(); });

      list.appendChild(chip);
    });

    // Add-profile button (hidden once at the cap).
    if (profiles.length < MAX_PROFILES) {
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'tone-add-profile';
      add.innerHTML = '<span>＋</span> Add profile';
      add.addEventListener('click', () => openCalModal(null));
      list.appendChild(add);
    } else {
      const note = document.createElement('div');
      note.className = 'tone-chip-meta';
      note.style.textAlign = 'center';
      note.textContent = 'Maximum of ' + MAX_PROFILES + ' profiles. Delete one to add another.';
      list.appendChild(note);
    }

    refreshStart();
  }

  function refreshStart() {
    const btn = $('tone-start-btn');
    const msg = $('tone-start-msg');
    if (!btn || !msg) return;
    const profiles = getProfiles();
    if (profiles.length === 0) {
      btn.disabled = true;
      msg.textContent = 'Add a voice profile to begin.';
    } else if (!selectedProfileId) {
      btn.disabled = true;
      msg.textContent = 'Select a profile to start.';
    } else {
      btn.disabled = false;
      msg.textContent = '';
    }
  }

  function deleteProfile(id) {
    const st = window.state;
    if (!st) return;
    st.toneProfiles = getProfiles().filter(p => p.id !== id);
    if (st.toneLastProfileId === id) st.toneLastProfileId = null;
    if (selectedProfileId === id) selectedProfileId = null;
    persist();
    renderProfileList();
  }

  function startTrainer() {
    const profiles = getProfiles();
    activeProfile = profiles.find(p => p.id === selectedProfileId) || null;
    if (!activeProfile) { refreshStart(); return; }
    // Remember last-used.
    const st = window.state;
    if (st) {
      st.toneLastProfileId = activeProfile.id;
      // Mark that the learner has actually STARTED a Tone Trainer session (not
      // merely opened the menu). This unlocks the Tone Challenge game mode.
      st.toneTrainerUsed = true;
      persist();
      // Re-evaluate the main-menu gate so the Tone Challenge button unlocks
      // immediately (it will apply on the next visit to the menu regardless).
      if (typeof window.applyToneChallengeGate === 'function') {
        try { window.applyToneChallengeGate(); } catch (e) {}
      }
    }
    // Reflect in trainer header.
    const nameEl = $('tone-active-name');
    if (nameEl) nameEl.textContent = activeProfile.name;
    clearCapture();
    setStatus('Ready', '');
    showHint(true);
    setMode('trainer');
    requestAnimationFrame(() => { sizeCanvas(); draw(); });
  }

  function backToSetup() {
    // If recording, stop first.
    if (running) { window.teardownTone(); }
    setMode('setup');
    renderProfileList();
  }
  // Exposed so the app's footer "Back" button can return to the setup/calibration
  // screen when the trainer is in its live sub-screen (see index.html).
  window.backToToneSetup = backToSetup;

  // =========================================================
  //  CALIBRATION FLOW (modal)
  // =========================================================
  function openCalModal(recalId, onDone) {
    calRecalId = recalId || null;
    calOnDone = (typeof onDone === 'function') ? onDone : null;
    calName = '';
    // Fresh calibration run: start at word 1 with empty accumulators.
    calWordIdx = 0;
    calWordMedians = [];
    calAllFrames = [];
    // Reset steps.
    $('tone-cal-step-name').classList.toggle('hidden', !!recalId);
    $('tone-cal-step-record').classList.toggle('hidden', !recalId);
    $('tone-cal-step-done').classList.add('hidden');
    const nameInput = $('tone-cal-name');
    if (recalId) {
      const p = getProfiles().find(x => x.id === recalId);
      calName = p ? p.name : '';
    } else {
      nameInput.value = '';
      $('tone-cal-name-next').disabled = true;
    }
    renderCalWord();
    resetCalRecordBtn();
    $('tone-cal-modal').classList.remove('hidden');
    if (!recalId) setTimeout(() => { try { nameInput.focus(); } catch (e) {} }, 50);
  }

  // Paint the current calibration WORD (Thai/rom/gloss), the progress label
  // ("Word 1 of 3"), and the prompt. Called on open and after each word finishes.
  // The Thai is wrapped in .th-particle so it's tap-to-hear where the device has
  // Thai TTS (graceful no-op otherwise).
  function renderCalWord() {
    const w = CAL_WORDS[calWordIdx];
    if (!w) return;
    const thaiEl = $('tone-cal-thai');
    if (thaiEl) {
      thaiEl.innerHTML = '<span class="th-particle">' + w.thai + '</span>';
      try {
        if (typeof window.wireThaiTapToSpeak === 'function') {
          window.wireThaiTapToSpeak(thaiEl, '.th-particle');
        }
      } catch (e) {}
    }
    const romEl = $('tone-cal-rom'); if (romEl) romEl.textContent = w.rom;
    const glossEl = $('tone-cal-gloss'); if (glossEl) glossEl.textContent = w.gloss;
    const prog = $('tone-cal-progress');
    if (prog) prog.textContent = 'Word ' + (calWordIdx + 1) + ' of ' + CAL_WORD_COUNT;
    setCalStatus('Tap once and say the word — it stops on its own.', '');
  }

  function closeCalModal() {
    stopCalibration(true);
    $('tone-cal-modal').classList.add('hidden');
    try { if (window.tts && window.tts.supported) window.speechSynthesis.cancel(); } catch (e) {}
  }

  // Close the modal and refresh whichever picker opened it. When an external
  // caller (Tone Challenge) supplied a callback, fire that so ITS list updates;
  // otherwise refresh the trainer's own list. The callback is one-shot.
  function finishCalModal() {
    const cb = calOnDone;
    calOnDone = null;
    closeCalModal();
    if (cb) { try { cb(); } catch (e) {} }
    else { renderProfileList(); }
  }

  function calGotoRecord() {
    const nameInput = $('tone-cal-name');
    calName = nameInput.value.trim().slice(0, 10);
    if (!calName) return;
    // Begin the word cycle fresh from the first one.
    calWordIdx = 0;
    calWordMedians = [];
    calAllFrames = [];
    $('tone-cal-step-name').classList.add('hidden');
    $('tone-cal-step-record').classList.remove('hidden');
    renderCalWord();
    resetCalRecordBtn();
  }

  function setCalStatus(text, cls) {
    const el = $('tone-cal-status');
    if (el) { el.textContent = text; el.className = 'tone-cal-status' + (cls ? ' ' + cls : ''); }
  }
  function resetCalRecordBtn() {
    const b = $('tone-cal-rec-btn');
    if (b) { b.classList.remove('recording'); b.innerHTML = '<span class="tone-mic-icon">🎤</span> Record'; }
  }

  async function onCalRecordTap() {
    if (mode === 'calibrate' && running) { stopCalibration(false); return; }
    await startCalibration();
  }

  async function startCalibration() {
    try {
      await acquireMic();
      mode = 'calibrate';
      running = true;
      // Capture this word EXACTLY like the game does: collect into `points`, let
      // the VAD auto-stop on end-of-word. The per-word result is cleaned and
      // medianed; medians accumulate across the 3 words (calWordMedians).
      points = [];
      recentHz = [];
      medianBuf = [];
      everVoiced = false;
      startTime = performance.now();
      lastVoicedTime = startTime;
      resetVad();
      const b = $('tone-cal-rec-btn');
      // The button stays available purely as a manual safety stop (same as the
      // in-game mic button); normally the word auto-stops on its own.
      if (b) { b.classList.add('recording'); b.innerHTML = '<span class="tone-mic-icon">⏺</span> Stop'; }
      setCalStatus('Listening… say the word.', 'recording');
      calLoop();
    } catch (err) {
      mode = 'trainer';
      running = false;
      let msg = 'Could not access the microphone.';
      if (err && (err.name === 'NotAllowedError' || err.name === 'SecurityError')) {
        msg = 'Microphone permission was blocked. Enable it in your browser settings.';
      } else if (err && err.name === 'NotFoundError') {
        msg = 'No microphone was found on this device.';
      }
      setCalStatus(msg, '');
      resetCalRecordBtn();
      releaseMic();
    }
  }

  // Mirrors the in-game loop()'s capture + auto-stop, minus the canvas drawing:
  // measure noise floor, wait for onset, record voiced points, and auto-stop the
  // instant the word ends ('ended'). This makes a calibration word behave — and be
  // measured — identically to a word said during Tone Trainer / Tone Challenge.
  function calLoop() {
    if (!running || mode !== 'calibrate') return;
    const now = performance.now();
    const { hz, rms } = readPitchFrame();
    const vad = updateVad(rms, now);

    if (vad === 'speech') {
      lastVoicedTime = now;
      if (hz > 0) {
        const t = now - startTime;
        const last = points[points.length - 1];
        if (last && !last.gap && (t - last.t) > MAX_GAP_MS) points.push({ gap: true });
        points.push({ t, hz, rms });
      }
      setCalStatus('Listening… (speaking)', 'recording');
    } else if (vad === 'ended') {
      stopCalibration(false);   // end-of-word: finalize this word automatically
      return;
    } else if (everVoiced && (now - lastVoicedTime) > AUTO_STOP_SILENCE_MS) {
      stopCalibration(false);
      return;
    }
    if ((now - startTime) > MAX_CAPTURE_MS) { stopCalibration(false); return; }
    rafId = requestAnimationFrame(calLoop);
  }

  // cancelled=true: user backed out, discard everything. cancelled=false: this
  // word finished (auto-stop or manual) — clean it like a game capture, record its
  // median, then advance to the next word or finalize after the third.
  function stopCalibration(cancelled) {
    if (mode !== 'calibrate') { if (cancelled) { /* nothing */ } return; }
    running = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    releaseMic();
    mode = 'trainer';
    resetCalRecordBtn();
    if (cancelled) return;

    // Clean this word the SAME way the game cleans a capture (cleanCaptureCore:
    // energy-end trim, onset trim, velocity gate + terminal trim). The cleaned
    // frames' median is this word's mid level — exactly the value the game would
    // measure for this word.
    let cleaned = null;
    try {
      cleaned = cleanCaptureCore(points.slice(), speechThresholdRms);
    } catch (e) { cleaned = null; }

    // Need a usable capture; if not, re-prompt THIS word (don't advance, don't
    // discard the earlier good words).
    if (!cleaned || cleaned.length < 6) {
      setCalStatus('Didn\u2019t catch that clearly. Tap once and say the word again.', '');
      return;
    }

    const hzFrames = cleaned.map(p => p.hz);
    const wordMedian = median(hzFrames.slice().sort((a, b) => a - b));
    calWordMedians.push(wordMedian);
    calAllFrames = calAllFrames.concat(hzFrames);

    // More words to go? Advance and prompt for the next one.
    if (calWordIdx < CAL_WORD_COUNT - 1) {
      calWordIdx++;
      renderCalWord();
      const n = CAL_WORD_COUNT, i = calWordIdx + 1;
      setCalStatus('Got it! Word ' + i + ' of ' + n + ' — tap once and say it.', '');
      return;
    }

    // That was the final word: finalize from the per-word medians.
    finalizeCalibration();
  }

  // Compute the profile from the per-word medians. Centre = median of the three
  // word medians (robust to one off word). Range = 10th/90th percentile of all
  // cleaned frames pooled, for the visual reference band.
  function finalizeCalibration() {
    if (calWordMedians.length < CAL_WORD_COUNT || calAllFrames.length < CAL_MIN_SAMPLES) {
      // Something went thin overall — restart the whole short set (3 words).
      calWordIdx = 0;
      calWordMedians = [];
      calAllFrames = [];
      renderCalWord();
      setCalStatus('Didn\u2019t catch enough clear speech. Let\u2019s try the words again.', '');
      return;
    }

    const centerHz = median(calWordMedians.slice().sort((a, b) => a - b));
    const sorted = calAllFrames.slice().sort((a, b) => a - b);
    const pct = (q) => sorted[Math.min(sorted.length - 1, Math.max(0, Math.floor(q * (sorted.length - 1))))];
    const lowHz = pct(0.10);
    const highHz = pct(0.90);

    const st = window.state;
    if (!st) return;
    if (calRecalId) {
      const p = getProfiles().find(x => x.id === calRecalId);
      if (p) { p.centerHz = centerHz; p.lowHz = lowHz; p.highHz = highHz; }
    } else {
      if (getProfiles().length >= MAX_PROFILES) { finishCalModal(); return; }
      const prof = {
        id: 'tp_' + Math.random().toString(36).slice(2, 9),
        name: calName,
        centerHz, lowHz, highHz,
        createdAt: Date.now()
      };
      st.toneProfiles = getProfiles().concat([prof]);
      selectedProfileId = prof.id;
      st.toneLastProfileId = prof.id;
    }
    persist();

    // Show success step.
    $('tone-cal-step-record').classList.add('hidden');
    $('tone-cal-step-done').classList.remove('hidden');
    const msg = $('tone-cal-done-msg');
    if (msg) msg.textContent = (calRecalId ? 'Updated' : 'Saved') +
      ' “' + calName + '”. Centre pitch ~' + Math.round(centerHz) + ' Hz.';
  }

  // ---- Public hooks (called by the app's navigate machinery) ----
  window.enterTone = function () {
    wireOnce();
    applyHowtoDefaults();           // re-apply open/closed default each entry
    selectedProfileId = null;       // re-resolve to last-used on each entry
    activeProfile = null;
    clearCapture();
    setStatus('Ready', '');
    setMode('setup');               // always land on the profile picker
    renderProfileList();
  };

  // Shared calibration entry point for OTHER features (e.g. Tone Challenge) that
  // reuse the same voice profiles + calibration modal. Ensures the modal's
  // controls are wired (the trainer may never have been opened this session),
  // then opens it. `onDone` fires once when the modal closes so the caller can
  // refresh its own profile picker. recalId is a profile id to recalibrate, or
  // null to add a new profile.
  window.openToneCalibration = function (recalId, onDone) {
    try { wireOnce(); } catch (e) {}
    openCalModal(recalId || null, onDone);
  };

  // Shared, DOM-free DSP toolkit so the Tone Challenge can reuse the exact same
  // pitch model as the Tone Trainer (one source of truth — the two modes can
  // never drift apart). The Challenge owns its own thin mic loop + canvas (the
  // mechanical, low-risk plumbing) and calls these pure functions for the
  // accuracy-critical parts. Nothing here touches the trainer's DOM or state.
  window.toneDsp = {
    // Acoustic model
    computeScores: computeToneScores,     // (core, centreHz) -> { sc, m }
    classify: classifyTone,               // (core, centreHz) -> { tone, confidence, ... }
    scoreAttempt: scoreToneAttempt,       // (core, centreHz, targetTone) -> { percent, tone, isTarget, ... }
    // Capture cleaning (same 3 stages as the trainer), parameterized threshold
    cleanCapture: cleanCaptureCore,       // (realPoints, thresholdRms) -> core | null
    foldOctave: foldOctave,               // (f, ref) -> corrected hz
    median: median,
    // Pitch detector factory (Pitchy is a module import, unreachable from a
    // classic script; this lets the Challenge build a detector identically).
    createDetector: function (fftSize) {
      var det = PitchDetector.forFloat32Array(fftSize);
      det.clarityThreshold = CLARITY_MIN;
      return det;
    },
    // Reference shapes + ordering + tuning constants (kept in lockstep)
    TONE_REFS: TONE_REFS,
    TONE_ORDER: TONE_ORDER,
    config: {
      FFT_SIZE, CLARITY_MIN, F0_MIN, F0_MAX, SEMITONE_SPAN, MAX_GAP_MS,
      AUTO_STOP_SILENCE_MS, MAX_CAPTURE_MS, MEDIAN_WINDOW,
      NOISE_SAMPLE_MS, ENERGY_MARGIN_DB, MIN_FLOOR_RMS,
      SPEECH_START_FRAMES, SPEECH_END_MS, MIN_SPEECH_MS, MAX_SEMITONE_STEP
    }
  };

  window.teardownTone = function () {
    // Stop whichever loop is live and release the mic.
    if (running) {
      running = false;
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      releaseMic();
      if (elMicBtn) {
        elMicBtn.classList.remove('recording');
        const lbl = elMicBtn.querySelector('.tone-mic-label');
        if (lbl) lbl.textContent = 'Tap to speak';
      }
      resetCalRecordBtn();
    } else {
      releaseMic();
    }
    mode = 'trainer';
    // Close the calibration modal if it was open.
    const m = $('tone-cal-modal');
    if (m) m.classList.add('hidden');
  };
})();
