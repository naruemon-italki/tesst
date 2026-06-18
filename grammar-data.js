/*
  © 2026 Naruemon Rintha. All rights reserved.
  Original educational work created by Naruemon Rintha (Kroo Apple).
  Unauthorized reproduction, modification, or redistribution is prohibited.

  ---------------------------------------------------------------------------
  GRAMMAR GUIDE DATA
  This file defines one global used by index.html:
    • GRAMMAR_SECTIONS — array of grammar-guide topics shown in the
                          Quick Grammar Guide menu (accordion).
  It MUST be loaded (plain <script src>) BEFORE the main game script in
  index.html, because renderGrammar() reads GRAMMAR_SECTIONS at render time.
  To add or edit grammar topics, edit this file only.

  Each entry: { group, level, id, title, body }
    • group  — category label shown above a run of same-group topics
                (rendered in array order; keep same-group entries adjacent).
    • level  — 1 or 2. In the slim edition (APP_EDITION = 'slim' in
                index.html), level-2 topics are hidden. Level-1 topics always
                show. Default to 1 unless a topic belongs to advanced content.
    • id     — stable unique id (used as the section's data-grammar-id).
    • title  — the header text on the accordion button.
    • body   — the HTML shown when the topic is expanded.
  ---------------------------------------------------------------------------
*/

const GRAMMAR_SECTIONS = [
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-1',
      title: 'Lesson 1',
      body: `
        <p>In this lesson, you learned two important Thai features that may feel unusual to English speakers: <strong>gender-based pronouns</strong> and <strong>gender-based polite particles</strong>.</p>
        <p>When speaking Thai, the words you use depend on <em>your own gender</em>, not the gender of the person you are talking to.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผม pŏm</span> → I / me <em>(commonly used by men)</em><br>
        <span class="th-particle">ฉัน chăn</span> → I / me <em>(commonly used by women)</em><br>
        <span class="th-particle">ครับ kráp</span> → polite particle <em>(used by men)</em><br>
        <span class="th-particle">ค่ะ kâ</span> → polite particle <em>(used by women)</em>
        </p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมทอมครับ pŏm Tom kráp</span> → I am Tom. <em>(male speaker)</em><br>
        <span class="th-particle">ฉันแมรี่ค่ะ chăn Mary kâ</span> → I am Mary. <em>(female speaker)</em>
        </p>
        <p>The polite particles <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span> appear constantly in everyday Thai. They make your speech sound polite and respectful, especially when speaking to strangers, customers, older people, or anyone you do not know well.</p>
        <p>For simplicity, this course teaches <span class="th-particle">ผม pŏm</span> as the male word for "I" and <span class="th-particle">ฉัน chăn</span> as the female word for "I." In reality, Thai has several ways to say "I," and the usage of <span class="th-particle">ฉัน chăn</span> is more nuanced. For a deeper explanation, see <strong>The Pronoun ฉัน chăn</strong> in the <strong>Language Patterns</strong> category.</p>`
    },
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-2',
      title: 'Lesson 2',
      body: `
        <p>In this lesson, you learned several important Thai sentence patterns and question structures. One of the biggest differences from English is that Thai often forms questions by adding a question word or question particle at the end of the sentence.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณชื่ออะไร kun chûu à-rai</span> → What's your name?<br>
        <span class="th-particle">คุณมาจากที่ไหน kun maa jàak têe năi</span> → Where are you from?
        </p>

        <p>Notice that the question words <span class="th-particle">อะไร à-rai</span> (what?) and <span class="th-particle">ไหน năi</span> (where?) come at the end of the sentence. This is very common in Thai.</p>

        <p>You also learned the question particle <span class="th-particle">ไหม măi</span>, which turns a statement into a yes-or-no question.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">สบายดี sà-baai dee</span> → I am fine.<br>
        <span class="th-particle">สบายดีไหม sà-baai dee măi</span> → Are you fine? / How are you?
        </p>

        <p>Another useful pattern introduced in this lesson is <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span>, which means "What about you?" or "How about you?" It is a simple way to return a question and keep a conversation going.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมาจากอังกฤษ pŏm maa jàak ang-grìt</span> → I am from England.<br>
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you?
        </p>

        <p>Finally, you learned that Thai often omits personal pronouns when the meaning is clear from the context. This makes everyday Thai sound shorter and more natural.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมาจากอเมริกา pŏm maa jàak America</span> → I am from America.<br>
        <span class="th-particle">มาจากอเมริกา maa jàak America</span> → I am from America.
        </p>

        <p>
        Both sentences are correct. ✅
        </p>

        <p>
        Thai speakers often drop words that can be understood from the context, and you will notice this in real-life conversations.
        Don't worry if this feels unusual at first. As you continue learning Thai, you'll quickly get used to it.
        </p>`
    },
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-4',
      title: 'Lesson 4',
      body: `
        <p>In this lesson, you learned how to talk about age in Thai and were introduced to the five Thai tones.</p>

        <p>To say your age, use the following pattern:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมอายุ ... ปี pŏm aa-yú ... pī</span> → I am ... years old. <em>(male speaker)</em><br>
        <span class="th-particle">ฉันอายุ ... ปี chăn aa-yú ... pī</span> → I am ... years old. <em>(female speaker)</em>
        </p>

        <p>To ask someone about their age, use:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณอายุเท่าไหร่ kun aa-yú tâo rài</span><br>
        → How old are you?
        </p>

        <p>The word <span class="th-particle">อายุ aa-yú</span> means "age," while <span class="th-particle">ปี pī</span> means "year."</p>

        <p>As with many things in Thai, words are often omitted when the meaning is clear from the context. For example, when someone asks about your age, it is perfectly natural to reply with just the number rather than a complete sentence.</p>

        <p style="margin-left:0.8rem">
        A: <span class="th-particle">คุณอายุเท่าไหร่คะ kun aa-yú tâo rài ká</span> → How old are you?<br>
        B: <span class="th-particle">สามสิบหกครับ săam-sìb-hòk kráp</span> → 36.<br>
        </p>

        <p>This lesson also introduced the five Thai tones:</p>

        <p style="margin-left:0.8rem">
        Mid tone<br>
        Low tone<br>
        High tone<br>
        Falling tone<br>
        Rising tone
        </p>

        <p>Because Thai is a tonal language, changing the tone can change the meaning of a word:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">มา maa</span> → to come<br>
        <span class="th-particle">หมา măa</span> → dog<br>
        <span class="th-particle">ม้า máa</span> → horse
        </p>

        <p>Tones are an important part of Thai pronunciation. However, do not worry if your tones are not perfect yet. For practical advice on how beginners should approach tones, see the <strong>Tones</strong> grammar topic.</p>`
    },
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-5-7',
      title: 'Lesson 5-7',
      body: `
        <p>Thai sentences are wonderfully simple to build. In this review we will look at the three basic sentence types from Lessons 5 to 7: <strong>statements</strong>, <strong>questions</strong>, and <strong>negatives</strong>. Once you master these, you can already have small conversations in Thai.</p>

        <p><strong>1. Statements</strong></p>

        <p>The word order is the same as in English: <em>subject + verb + object</em>. There are no verb changes (e.g. eat/eats), no articles (a, an, the), and no plural endings (e.g. cat/cats).</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมกินไก่ pŏm gin gài</span> → I eat chicken.<br>
        <span class="th-particle">เขากินแฮมเบอร์เกอร์ kăo gin hamburger</span> → He eats hamburger.<br>
        <span class="th-particle">เราชอบแมว rao chôp maew</span> → We like cats.<br>
        <span class="th-particle">พวกเขาอ่านหนังสือ pûak kăo àan năng-sĕu</span> → They read books.
        </p>

        <p>Notice that the verb stays the same for every subject. <span class="th-particle">กิน gin</span> is "eat" whether the subject is I, you, he, or they. Unlike English, there are no verb conjugations such as "I eat" but "he/she eats".<br>
        Personal pronouns are also often dropped when the meaning is clear from context.</p>

        <p><strong>2. Questions</strong></p>

        <p>Thai has no question mark. Instead, you add a <strong>question particle</strong> at the end of the sentence. The most common one is <span class="th-particle">ไหม măi</span>, which turns any statement into a simple yes-or-no question.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณชอบแมว kun chôp maew</span> → You like cats. <em>(statement)</em><br>
        <span class="th-particle">คุณชอบแมวไหม kun chôp maew măi</span> → Do you like cats? <em>(question)</em>
        </p>

        <p>For open-ended questions, use <span class="th-particle">อะไร à-rai</span> ("what?"), also placed at the end:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณกินอะไร kun gin à-rai</span> → What do you eat?<br>
        <span class="th-particle">คุณชอบดื่มอะไร kun chôp dèum à-rai</span> → What do you like to drink?
        </p>

        <p>Other useful question words that go at the end of the sentence are <span class="th-particle">ไหน năi</span> ("where?") and <span class="th-particle">เท่าไร tâo rai</span> ("how much / how old?"):</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไปไหน bpai năi</span> → Where are you going?<br>
        <span class="th-particle">คุณอายุเท่าไร kun aa-yú tâo rai</span> → How old are you?
        </p>

        <p>To answer yes-or-no questions, you can simply use <span class="th-particle">ใช่ châi</span> (yes), <span class="th-particle">ไม่ mâi</span> (no), or <span class="th-particle">นิดหน่อย nít nòi</span> (a little bit).</p>

        <p>There is also the <strong>tag question</strong> <span class="th-particle">ใช่ไหม châi măi</span> ("..., right?"), used to confirm something you already believe is true:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณชอบดูหนังใช่ไหม kun chôp doo năng châi măi</span> → You like watching movies, right?
        </p>

        <p>For a deeper look at this useful phrase, see the separate <span class="th-particle">ใช่ไหม châi măi</span> topic.</p>

        <p><strong>3. Negatives</strong></p>

        <p>Making a sentence negative is the easiest part of all. Just place <span class="th-particle">ไม่ mâi</span> ("not") <strong>directly before the verb</strong>.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบประเทศไทย pŏm chôp bprà-têt Thai</span> → I like Thailand.<br>
        <span class="th-particle">ผมไม่ชอบประเทศไทย pŏm mâi chôp bprà-têt Thai</span> → I don't like Thailand.
        </p>

        <p>More examples:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมไม่กินหมู pŏm mâi gin mŏo</span> → I don't eat pork.<br>
        <span class="th-particle">เขาไม่ชอบเรียน kăo mâi chôp rian</span> → He/she doesn't like to study.<br>
        <span class="th-particle">ผมไม่เห็นคุณ pŏm mâi hĕn kun</span> → I don't see you.
        </p>

        <p><strong>A quick tone warning:</strong> be careful not to confuse <span class="th-particle">ไม่ mâi</span> (falling tone, "no / not") with the question particle <span class="th-particle">ไหม măi</span> (rising tone). They look almost identical but do very different jobs.</p>

        <p><strong>Basic conjunction words</strong></p>

        <p>You can connect ideas with <span class="th-particle">และ láe</span> ("and") and <span class="th-particle">แต่ dtàe</span> ("but"):</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันชอบหมาและแมว chăn chôp măa láe maew</span> → I like dogs and cats.<br>
        <span class="th-particle">ฉันชอบหมาแต่ไม่ชอบแมว chăn chôp măa dtàe mâi chôp maew</span> → I like dogs, but I don't like cats.
        </p>

        <p>With statements, questions, and negatives mastered, you now have all the building blocks for basic Thai conversation. Practice mixing them and you'll be chatting in no time.</p>`
    },
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-8',
      title: 'Lesson 8',
      body: `
        <p>Thai has three common "to be" verbs, and each one is used in a different situation:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คือ keu</span> → used for identification ("X is Y")<br>
        <span class="th-particle">เป็น bpen</span> → used for descriptions, occupations, and nationalities<br>
        <span class="th-particle">อยู่ yòo</span> → used for location ("to be somewhere")
        </p>

        <p>Think of <span class="th-particle">คือ keu</span> as an equals sign (=). It is used when identifying what something is:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">นี่คือผลไม้ nêe keu pŏn-lá-mái</span> → This is a fruit.<br>
        <span class="th-particle">นั่นคือรถยนต์ nân keu rót yon</span> → That is a car.<br>
        <span class="th-particle">นี่คืออะไร nêe keu à-rai</span> → What is this?
        </p>

        <p><span class="th-particle">เป็น bpen</span> is used when describing people. Beginners will most often use it for occupations and nationalities:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมเป็นครู pŏm bpen kroo</span> → I am a teacher.<br>
        <span class="th-particle">ฉันเป็นคนอเมริกา chăn bpen kon America</span> → I am American.<br>
        <span class="th-particle">เขาเป็นนักเรียน kăo bpen nák rian</span> → He/She is a student.
        </p>

        <p><span class="th-particle">อยู่ yòo</span> is used when talking about location. If you want to say where someone or something is, use <span class="th-particle">อยู่ yòo</span>:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมอยู่บ้าน pŏm yòo bâan</span> → I am at home.<br>
        <span class="th-particle">ฉันอยู่โรงเรียน chăn yòo rohng rian</span> → I am at school.<br>
        <span class="th-particle">คุณอยู่ไหน kun yòo năi</span> → Where are you?
        </p>`
    },
    {
      group: 'Lessons',
      level: 2,
      id: 'lesson-10',
      title: 'Lesson 10',
      body: `
        <p>This lesson focused on practical Thai for shopping, bargaining, transportation, and talking about locations. It also introduced several useful grammar patterns that appear frequently in everyday conversations.</p>

        <p>One of the most useful question phrases in Thai is <span class="th-particle">เท่าไหร่ tâo rài</span>, meaning <em>how much?</em></p>

        <p>It can be used on its own:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เท่าไหร่ครับ tâo rài kráp</span> → How much?
        </p>

        <p>Or combined with demonstratives:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">นี่เท่าไหร่ nêe tâo rài</span> → How much is this?<br>
        <span class="th-particle">นั่นเท่าไหร่ nân tâo rài</span> → How much is that?
        </p>

        <p>This lesson also introduced the demonstratives <span class="th-particle">นี่ nêe</span> (this) and <span class="th-particle">นั่น nân</span> (that). These words are used to point to people or things.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เอานี่ ao nêe</span> → I'll take this.<br>
        <span class="th-particle">เอานั่น ao nân</span> → I'll take that.
        </p>

        <p>To sound more natural when talking about objects, Thai often uses <span class="th-particle">อัน an</span>, a classifier for small objects:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">อันนี้ an nêe</span> → this one<br>
        <span class="th-particle">อันนั้น an nân</span> → that one
        </p>

        <p>Another important grammar point is the use of <span class="th-particle">ได้ dâai</span> to express ability or possibility. Unlike English, <span class="th-particle">ได้ dâai</span> comes after the verb.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมไปได้ pŏm bpai dâai</span> → I can go.<br>
        <span class="th-particle">ผมพูดภาษาไทยได้ pŏm pôot paa-săa Thai dâai</span> → I can speak Thai.
        </p>

        <p>If the verb has an object, <span class="th-particle">ได้ dâai</span> comes after the object:</p>

        <p>To make the sentence negative, use <span class="th-particle">ไม่ได้ mâi dâai</span>:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมพูดภาษาจีนไม่ได้ pŏm pôot paa-săa jeen mâi dâai</span><br>
        → I can't speak Chinese.
        </p>

        <p>To ask a question, simply add <span class="th-particle">ไหม măi</span> at the end:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณกินเผ็ดได้ไหม kun gin pèt dâai măi</span><br>
        → Can you eat spicy food?<br>
        <span class="th-particle">คุณพูดภาษาอังกฤษได้ไหม kun pôot paa-săa ang-grìt dâai măi</span><br>
        → Can you speak English?
        </p>

        <p>This lesson also introduced the expression <span class="th-particle">เกินไป gern bpai</span>, meaning <em>too</em>. In Thai, it comes after an adjective.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">แพง paeng</span> → expensive<br>
        <span class="th-particle">แพงมาก paeng mâak</span> → very expensive<br>
        <span class="th-particle">แพงเกินไป paeng gern bpai</span> → too expensive
        </p>

        <p>The same pattern works with other adjectives:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เผ็ดเกินไป pèt gern bpai</span> → too spicy<br>
        <span class="th-particle">ยากเกินไป yâak gern bpai</span> → too difficult
        </p>

        <p>When bargaining, a very useful pattern is:</p>

        <p style="margin-left:0.8rem">
        price + can?
        </p>

        <p>This is used to suggest a new price:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ร้อยบาทได้ไหม rói baht dâai măi</span><br>
        → Can you do 100 Baht?<br><br>

        <span class="th-particle">สามร้อยบาทได้ไหม săam rói baht dâai măi</span><br>
        → Can you do 300 Baht?
        </p>

        <p>The question word <span class="th-particle">ไหน năi</span> means <em>where?</em> It is commonly used with movement verbs and location expressions.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณอยู่ไหน kun yòo năi</span> → Where are you?<br>
        <span class="th-particle">ไปไหน bpai năi</span> → Where are you going?
        </p>

        <p>To talk about location, Thai uses the verb <span class="th-particle">อยู่ yòo</span>, meaning <em>to be located</em>:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันอยู่บ้าน chăn yòo bâan</span> → I am at home.<br>
        <span class="th-particle">ผมอยู่ตลาด pŏm yòo dtà-làat</span> → I am at the market.
        </p>

        <p>Notice that <span class="th-particle">อยู่ yòo</span> comes before the location.</p>

        <p>Finally, this lesson introduced a useful travel pattern for asking transportation prices:</p>

        <p style="margin-left:0.8rem">
        go + place + how much?
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไปพัทยาเท่าไหร่ bpai Pattaya tâo rài</span><br>
        → How much to Pattaya?<br><br>

        <span class="th-particle">ไปสนามบินสุวรรณภูมิเท่าไหร่ bpai sà-năam bin sù-wan-na poom tâo rài</span><br>
        → How much to Suvarnabhumi Airport?
        </p>

        <p>Let's summarize everything:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เท่าไหร่ tâo rài</span> → asking prices<br>
        <span class="th-particle">อันนี้ an née</span> / <span class="th-particle">อันนั้น an nán</span> → this one and that one<br>
        <span class="th-particle">verb + ได้ dâai</span> → can, be able to<br>
        <span class="th-particle">adjective + เกินไป gern bpai</span> → too ... (e.g. too expensive)<br>
        <span class="th-particle">อยู่ yòo</span> → talking about locations (to be at)
        </p>`
    },
    {
      group: 'Lessons',
      level: 2,
      id: 'lesson-12',
      title: 'Lesson 12',
      body: `
        <p>This lesson introduced the verb <span class="th-particle">มี mee</span>, which means <em>to have</em>. It is used to talk about possession and follows the same basic pattern as English:</p>

        <p style="margin-left:0.8rem">
        Subject + have (มี mee) + object
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันมีแมว chăn mee maew</span> → I have a cat.<br>
        <span class="th-particle">ผมมีแฟน pŏm mee faen</span> → I have a girlfriend.
        </p>

        <p>To make the sentence negative, simply place <span class="th-particle">ไม่ mâi</span> before <span class="th-particle">มี mee</span>:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมไม่มีรถ pŏm mâi mee rót</span> → I don't have a car.<br>
        <span class="th-particle">เราไม่มีเวลา rao mâi mee way-laa</span> → We don't have time.
        </p>

        <p>To ask a yes/no question, add <span class="th-particle">ไหม măi</span> at the end of the sentence:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณมีเงินไหม kun mee ngern măi</span> → Do you have money?<br>
        <span class="th-particle">คุณมีบ้านไหม kun mee bâan măi</span> → Do you have a house?<br>
        <span class="th-particle">เขามีมอเตอร์ไซค์ไหม kăo mee mor-dtêr-sai măi</span> → Does he/she have a motorbike?
        </p>

        <p>Another important topic in this lesson is <strong>classifiers</strong>. In Thai, whenever you count or specify a quantity, you normally need a classifier. The basic pattern is:</p>

        <p style="margin-left:0.8rem">
        noun + number + classifier
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">รถยนต์สองคัน rót-yon sŏng kan</span> → two cars<br>
        <span class="th-particle">หมาสามตัว măa săam dtua</span> → three dogs<br>
        <span class="th-particle">นักเรียนสี่คน nák rian sèe kon</span> → four students<br>
        <span class="th-particle">ผู้หญิงห้าคน pôo yĭng hâa kon</span> → five women
        </p>

        <p>The most important classifiers introduced in this lesson are:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คน kon</span> → people<br>
        <span class="th-particle">ตัว dtua</span> → animals<br>
        <span class="th-particle">คัน kan</span> → vehicles<br>
        <span class="th-particle">อัน an</span> → small objects<br>
        <span class="th-particle">หลัง lăng</span> → houses and buildings
        </p>

        <p>Now let's combine the verb <span class="th-particle">มี mee</span> with classifiers. Whenever you want to say how many things someone has, you'll need to add a classifier after the number.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันมีลูกสองคน chăn mee lôok sŏng kon</span> → I have two children.<br>
        <span class="th-particle">พวกเขามีแมวห้าตัว pûak kăo mee maew hâa dtua</span> → They have five cats.
        </p>

        <p>This lesson also introduced the question word <span class="th-particle">กี่ gèe</span>, meaning <em>how many?</em> When using <span class="th-particle">กี่ gèe</span>, a classifier must follow it:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">noun + how many (กี่ gèe) + classifier</span>
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณมีรถกี่คัน kun mee rót gèe kan</span> → How many cars do you have?<br>
        <span class="th-particle">คุณมีพี่น้องกี่คน kun mee pêe nóng gèe kon</span> → How many siblings do you have?
        </p>

        <p>Compare these two questions:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณมีพี่น้องไหม kun mee pêe nóng măi</span> → Do you have siblings?<br>
        <span class="th-particle">คุณมีพี่น้องกี่คน kun mee pêe nóng gèe kon</span> → How many siblings do you have?
        </p>

        <p>Finally, remember that Thai adjectives come <strong>after</strong> the noun they describe. If a sentence contains possession, adjectives, and classifiers, the adjective stays with the noun, while the quantity and classifier remain at the end:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เขามีรถแพง kăo mee rót paeng</span> → He has an expensive car.<br>
        <span class="th-particle">เขามีรถแพงห้าคัน kăo mee rót paeng hâa kan</span> → He has five expensive cars.
        </p>

        <p>In short, this lesson teaches three key patterns:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">มี mee</span> → to have<br>
        <span class="th-particle">noun + number + classifier</span> → counting things<br>
        <span class="th-particle">noun + กี่ gèe + classifier</span> → asking "how many?"
        </p>`
    },
    {
      group: 'Lessons',
      level: 2,
      id: 'lesson-13',
      title: 'Lesson 13',
      body: `
        <p>This lesson introduced two extremely useful verbs for ordering food and drinks: <span class="th-particle">ขอ kŏr</span> and <span class="th-particle">เอา ao</span>.</p>

        <p>Both can be translated as "I would like" or "I want", but they have slightly different tones. <span class="th-particle">ขอ kŏr</span> sounds more polite and formal, while <span class="th-particle">เอา ao</span> is more casual and direct.</p>

        <p>To order something, simply place the dish or drink after the verb:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอผัดไทยกุ้ง kŏr pàt thai gûng</span> → I would like a shrimp Pad Thai.<br>
        <span class="th-particle">เอาต้มยำกุ้ง ao tôm yam gûng</span> → I want a shrimp Tom Yum soup.
        </p>

        <p>You can also use the same pattern for things other than food:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอเมนู kŏr menu</span> → I would like a menu.<br>
        <span class="th-particle">เอานี้ ao née</span> → I'll take this.
        </p>

        <p>When ordering several items, simply connect them with <span class="th-particle">และ láe</span>, meaning "and":</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอผัดไทยและต้มยำไก่ kŏr pàt thai láe tôm yam gài</span><br>
        → I would like a Pad Thai and a chicken Tom Yum.
        </p>

        <p>A useful thing to remember is that Thai usually places the type of meat after the dish name:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผัดไทยไก่ pàt thai gài</span> → chicken Pad Thai<br>
        <span class="th-particle">ผัดไทยกุ้ง pàt thai gûng</span> → shrimp Pad Thai<br>
        <span class="th-particle">ต้มยำไก่ tôm yam gài</span> → chicken Tom Yum
        </p>

        <p>If you want your order as takeaway, simply add <span class="th-particle">กลับบ้าน glàp bâan</span>, literally meaning "go home":</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอผัดไทยกุ้งกลับบ้าน kŏr pàt thai gûng glàp bâan</span><br>
        → I would like a shrimp Pad Thai for takeaway.
        </p>

        <p>This lesson also expanded our knowledge of classifiers. In restaurants and cafés, different foods and drinks use different classifiers depending on how they are served.</p>

        <p>The most common ones are:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">จาน jaan</span> → plate, dish<br>
        <span class="th-particle">ชาม chaam</span> → bowl<br>
        <span class="th-particle">ถ้วย tûay</span> → small bowl<br>
        <span class="th-particle">แก้ว gâew</span> → cup, glass, mug<br>
        <span class="th-particle">ขวด kùat</span> → bottle
        </p>

        <p>As always, the pattern is:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">noun + number + classifier</span>
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">น้ำหนึ่งขวด náam nèung kùat</span> → one bottle of water<br>
        <span class="th-particle">กาแฟสองแก้ว kaa-fae sŏng gâew</span> → two cups of coffee<br>
        <span class="th-particle">ก๋วยเตี๋ยวสามชาม kŭay tĭeow săam chaam</span> → three bowls of noodle soup
        </p>

        <p>When ordering takeaway in larger quantities, Thai often switches to the container rather than the food itself. The most common takeaway classifiers are:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">กล่อง glòng</span> → box<br>
        <span class="th-particle">ถุง tŭng</span> → bag
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอผัดไทยสองกล่อง kŏr pàt thai sŏng glòng</span><br>
        → I would like two boxes of Pad Thai.<br><br>

        <span class="th-particle">เอาต้มยำไก่สามถุง ao tôm yam gài săam tŭng</span><br>
        → I want three bags of chicken Tom Yum.
        </p>

        <p>Notice that once you specify a box or bag, <span class="th-particle">กลับบ้าน glàp bâan</span> is often omitted because takeaway is already understood.</p>

        <p>Two other very practical restaurant phrases are:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไม่เผ็ด mâi pèt</span> → not spicy<br>
        <span class="th-particle">แพ้ páe</span> → to be allergic to
        </p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอผัดไทยไม่เผ็ด kŏr pàt thai mâi pèt</span><br>
        → I would like a Pad Thai, not spicy.<br><br>

        <span class="th-particle">ผมแพ้ถั่วลิสง pŏm páe tùa-lí-sŏng</span><br>
        → I'm allergic to peanuts.
        </p>

        <p>Finally, when you're ready to leave, these two expressions are commonly used to ask for the bill:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เช็คบิล chék bin</span> → Check, please.<br>
        <span class="th-particle">เก็บตังค์ gèp tang</span> → Please bring the bill.
        </p>

        <p>In short, the three key patterns:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ขอ kŏr</span> / <span class="th-particle">เอา ao</span> → ordering food and drinks<br>
        <span class="th-particle">noun + number + classifier</span> → specifying quantities<br>
        <span class="th-particle">กลับบ้าน glàp bâan</span> → ordering takeaway
        </p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-ror',
      title: 'The Particle หรอ rŏr',
      body: `
        <p><span class="th-particle">หรอ rŏr</span> is a very common question particle used to ask for confirmation, show surprise, or react to new information. Officially, this particle is written as <span class="th-particle">เหรอ rŏr</span>, but in everyday Thai people very often write it as <span class="th-particle">หรอ rŏr</span>, which is simply a shorter, more informal spelling. Both forms are pronounced the same.</p>

        <p>Unlike <span class="th-particle">ไหม măi</span>, which is used to ask a neutral question, <span class="th-particle">หรอ rŏr</span> is often used when the speaker has just learned something, is surprised, or wants to confirm what they think they heard.</p>

        <p>Compare the following:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณเป็นครูไหม kun bpen kroo măi</span> → Are you a teacher? <em>(neutral question)</em><br>
        <span class="th-particle">คุณเป็นครูหรอ kun bpen kroo rŏr</span> → Oh, you're a teacher? <em>(confirmation, surprise, or interest)</em>
        </p>

        <p><span class="th-particle">หรอ rŏr</span> is extremely common in spoken Thai and can be used after almost any statement that you want to confirm:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">วันนี้หยุดหรอ wan-níi yùt rŏr</span> → Today's a holiday?<br>
        <span class="th-particle">คุณมาจากอเมริกาหรอ khun maa jàak America rŏr</span> → You're from America?<br>
        <span class="th-particle">เขามีแฟนแล้วหรอ khăo mii faen láew rŏr</span> → He already has a girlfriend?
        </p>

        <p><span class="th-particle">หรอ rŏr</span> overlaps somewhat with <span class="th-particle">ใช่ไหม châi măi</span>, as both can be used to ask for confirmation. However, <span class="th-particle">ใช่ไหม châi măi</span> is often used when the speaker already believes something is true and wants to check, while <span class="th-particle">หรอ rŏr</span> is more commonly used when reacting to new information with surprise, interest, or curiosity.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณมีลูกใช่ไหม kun mee lôok châi măi</span> → You have children, right? <em>(I think you do.)</em><br>
        <span class="th-particle">คุณมีลูกหรอ kun mee lôok rŏr</span> → Oh, you have children? <em>(I didn't know that.)</em>
        </p>

        <p>A very common expression is <span class="th-particle">จริงหรอ jing rŏr</span>, which means "Really?" or "Is that true?" and is one of the most frequently used reactions in everyday conversation.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">A: ฉันถูกลอตเตอรี่ chăn tòok lottery</span> → I won the lottery.<br>
        <span class="th-particle">B: จริงหรอ jing rŏr</span> → Really?
        </p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-la',
      title: 'The Particle ล่ะ lâ',
      body: `
        <p><span class="th-particle">ล่ะ lâ</span> is a common sentence-ending particle used to shift the focus of a conversation. It often means something like "what about...?", "how about...?", or "as for..." depending on the context.</p>

        <p>You probably remember this sentence from Lesson 2:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you? / How about you?
        </p>

        <p>In this sentence, <span class="th-particle">ล่ะ lâ</span> shifts the conversation to the other person. After hearing about someone else's situation, thoughts, or preferences, it is often used to ask about yours.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบกาแฟ pŏm chôp kaa-fae</span> → I like coffee.<br>
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you?
        </p>

        <p><span class="th-particle">ล่ะ lâ</span> is also commonly used when changing the topic or moving the conversation to something else.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">แล้วงานล่ะ láew ngaan lâ</span> → What about work?<br>
        <span class="th-particle">แล้วพรุ่งนี้ล่ะ láew prûng-née lâ</span> → What about tomorrow?
        </p>

        <p>Another very common use is when ending a conversation or announcing what you are about to do.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไปล่ะนะ bpai lâ ná</span> → I'm off now.<br>
        <span class="th-particle">นอนล่ะนะ non lâ ná</span> → I'm going to sleep now.
        </p>

        <p>A useful way to think about <span class="th-particle">ล่ะ lâ</span> is that it often signals a shift. The speaker is shifting the focus to another person, another topic, or the next thing that is about to happen.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-loei',
      title: 'The Particle เลย loie',
      body: `
        <p><span class="th-particle">เลย loie</span> is an intensifier that adds extra emphasis to what is being said. It often makes a statement sound stronger, more sincere, or more emotional. Depending on the context, it can be translated as "really," "so," "very," or sometimes left untranslated in natural English.</p>
        <p><span class="th-particle">เลย loie</span> is commonly placed at the end of a sentence or phrase. It is especially common after words such as <span class="th-particle">มาก mâak</span> (very) and <span class="th-particle">จัง jang</span> (so much), where it adds even more emphasis.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">คิดถึง kít tĕung</span> → Miss you.<br>
        <span class="th-particle">คิดถึงจัง kít tĕung jang</span> → Miss you so much.<br>
        <span class="th-particle">คิดถึงจังเลย kít tĕung jang loie</span> → Miss you sooo much. / I really, really miss you.
        </p>
        <p><span class="th-particle">เลย loie</span> can also be used with commands and suggestions, where it often means "go ahead," "right away," or "just do it."</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเลย gin loie</span> → Go ahead and eat.<br>
        <span class="th-particle">ไปเลย bpai loie</span> → Go ahead. / Just go.<br>
        <span class="th-particle">เริ่มเลย rêrm loie</span> → Start right away.
        </p>
        <p>In this context, <span class="th-particle">เลย loie</span> is similar to <span class="th-particle">สิ sì</span>, but the two have different focuses. <span class="th-particle">เลย loie</span> signals immediacy — it implies the action is obvious or available, and the person should simply do it now. <span class="th-particle">สิ sì</span>, on the other hand, is more like saying "come on" in English — it nudges or coaxes someone who seems to be hesitating.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเลย gin loie</span> → Go ahead and eat. <em>(don't wait; eat now)</em><br>
        <span class="th-particle">กินสิ gin sì</span> → Just eat! <em>(come on, stop hesitating)</em>
        </p>
        <p>Unlike particles such as <span class="th-particle">ครับ kráp</span>, <span class="th-particle">ค่ะ kâ</span>, <span class="th-particle">นะ ná</span>, and <span class="th-particle">จ๊ะ já</span>, <span class="th-particle">เลย loie</span> does not express politeness or the speaker's attitude. Instead, its primary role is to strengthen or intensify the meaning of the sentence.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-na',
      title: 'The Particle นะ ná',
      body: `
        <p><span class="th-particle">นะ ná</span> is one of the most common Thai sentence-ending particles. It softens what is being said and makes it sound friendlier, warmer, and less direct. Depending on the situation, it can add a sense of politeness, encouragement, persuasion, or emotional connection.</p>
        <p>Thai speakers often use <span class="th-particle">นะ ná</span> when talking to friends, family members, partners, coworkers, and even strangers. It helps make requests, suggestions, and statements sound more natural and pleasant. Without <span class="th-particle">นะ ná</span>, a sentence may sound more neutral, blunt, or matter-of-fact.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">รอแป๊บนึง ror bpáep neung</span> → Wait a moment. <em>(neutral)</em><br>
        <span class="th-particle">รอแป๊บนึงนะ ror bpáep neung ná</span> → Wait a moment, okay? <em>(softer, friendlier)</em>
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเยอะๆ gin yúh yúh</span> → Eat a lot. <em>(direct)</em><br>
        <span class="th-particle">กินเยอะๆนะ gin yúh yúh ná</span> → Eat plenty, okay? <em>(caring, encouraging)</em>
        </p>
        <p><span class="th-particle">นะ ná</span> is also commonly combined with polite particles such as <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span>, making the sentence sound both polite and friendly:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ระวังนะ rá wang ná</span> → Be careful. <em>(friendly warning)</em><br>
        <span class="th-particle">ระวังนะครับ rá wang ná kráp</span> → Be careful. <em>(polite and friendly)</em>
        </p>
        <p>Because it is so versatile, <span class="th-particle">นะ ná</span> appears constantly in everyday Thai. If you are unsure whether to use it, adding <span class="th-particle">นะ ná</span> will often make your Thai sound more natural, approachable, and less abrupt.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-a',
      title: 'The Particle อะ à',
      body: `
        <p><span class="th-particle">อะ à</span> is an informal sentence-ending particle often used in casual conversation. It makes speech sound relaxed, natural, and conversational. Unlike polite particles such as <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span>, <span class="th-particle">อะ à</span> is not polite and is mainly used with friends, family, or people you know well.</p>

        <p><span class="th-particle">อะ à</span> is commonly added to statements, answers, and opinions. It softens the sentence slightly, but in a casual rather than polite way.</p>

        <p>Compare the following:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไม่รู้ครับ mâi róo kráp</span> → I don't know. <em>(polite)</em><br>
        <span class="th-particle">ไม่รู้อะ mâi róo à</span> → I dunno. <em>(casual)</em>
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ทำอะไรครับ tam à-rai kráp</span> → What are you doing? <em>(polite)</em><br>
        <span class="th-particle">ทำอะไรอะ tam à-rai à</span> → Whatcha doing? <em>(casual)</em>
        </p>

        <p>Many learners first notice <span class="th-particle">อะ à</span> in everyday speech because native speakers use it frequently when talking with friends. It does not have a specific meaning by itself; its main purpose is to make the sentence sound more natural and informal.</p>

        <p>Common examples:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เหนื่อยอะ nùeai à</span> → I'm tired.<br>
        <span class="th-particle">หิวอะ hǐu à</span> → I'm hungry.<br>
        <span class="th-particle">สวยอะ sŭay à</span> → It's pretty.
        </p>

        <p>Learners often confuse <span class="th-particle">อะ à</span> and <span class="th-particle">นะ ná</span> because both make a sentence sound less abrupt. However, they do this in different ways. <span class="th-particle">นะ ná</span> makes a sentence softer, friendlier, or more considerate toward the listener, while <span class="th-particle">อะ à</span> mainly makes the sentence sound more casual and conversational.</p>

        <p>Compare these sentences:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไม่รู้นะ mâi róo ná</span> → I don't know. <em>(softer, friendlier)</em><br>
        <span class="th-particle">ไม่รู้อะ mâi róo à</span> → I dunno. <em>(casual, conversational)</em>
        </p>

        <p>Unlike <span class="th-particle">อะ à</span>, the particle <span class="th-particle">นะ ná</span> can still be used politely, together with <span class="th-particle">ครับ kráp</span> or <span class="th-particle">ค่ะ kâ</span>. <span class="th-particle">อะ à</span>, on the other hand, is informal and is usually reserved for conversations with friends, family, and people you know well.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-ja',
      title: 'The Particle จ๊ะ já',
      body: `
        <p><span class="th-particle">จ๊ะ já</span> is a warm and friendly sentence-ending particle that adds a gentle, caring, and affectionate tone to what is being said. <span class="th-particle">จ๊ะ já</span> is often combined with <span class="th-particle">นะ ná</span>, which softens the sentence and makes it sound even friendlier and more natural.</p>
        <p>Unlike <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span>, <span class="th-particle">จ๊ะ já</span> is not tied to the speaker's gender, although it is used much more often by women than men. Because of its sweet and intimate tone, <span class="th-particle">จ๊ะ já</span> is usually used with family, friends, children, or anyone you want to speak to warmly. It is generally not used in formal situations or when speaking to strangers.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">โชคดีค่ะ chôhk dee kâ</span> → Good luck. <em>(formal, respectful)</em><br>
        <span class="th-particle">โชคดีนะคะ chôhk dee ná kâ</span> → Good luck. <em>(friendlier, softer)</em><br>
        <span class="th-particle">โชคดีนะจ๊ะ chôhk dee ná já</span> → Good luck, dear. <em>(warm, sweet, caring)</em>
        </p>
        <p>A related particle is <span class="th-particle">จ๋า jăa</span>, which sounds even more affectionate. If someone calls your name, you can reply with <span class="th-particle">จ๋า? jăa</span> meaning something like "Yes?" in a warm, loving way. It is also commonly used when calling loved ones:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">แม่ mâe</span> → Mother!<br>
        <span class="th-particle">แม่จ๋า mâe jăa</span> → Mommy!
        </p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-si',
      title: 'The Particle สิ sì',
      body: `
        <p><span class="th-particle">สิ sì</span> is a sentence-ending particle that adds emphasis and certainty to what is being said. It is often used when giving suggestions, encouragement, instructions, or when pointing out something that seems obvious. Depending on the context, it can sound persuasive, reassuring, or mildly insistent.</p>
        <p>Unlike <span class="th-particle">นะ ná</span>, which softens a sentence, <span class="th-particle">สิ sì</span> usually makes it stronger and more direct. It is very common in everyday conversations between friends, family members, and people who know each other well.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ลองดู long doo</span> → Try it. <em>(neutral)</em><br>
        <span class="th-particle">ลองดูสิ long doo sì</span> → Go ahead and try it. <em>(encouraging, persuasive)</em>
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ถามเขา tăam kăo</span> → Ask him. <em>(neutral instruction)</em><br>
        <span class="th-particle">ถามเขาสิ tăam kăo sì</span> → Ask him! <em>(suggesting the obvious solution)</em>
        </p>
        <p><span class="th-particle">สิ sì</span> is also frequently used when reminding someone of something they already know or should know:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">จำได้ไหม jam dâai măi</span> → Do you remember?<br>
        <span class="th-particle">จำได้สิ jam dâai sì</span> → Of course I remember! <em>(certain, emphatic)</em>
        </p>
        <p>Because <span class="th-particle">สิ sì</span> adds emphasis, it can sometimes sound too direct if used with strangers or in formal situations. It is most natural in casual conversations where the speaker wants to encourage, persuade, reassure, or point out what seems like an obvious answer or course of action.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-di',
      title: 'The Particle ดิ di',
      body: `
        <p><span class="th-particle">ดิ di</span> is a casual version of <span class="th-particle">สิ sì</span>. It has the same meaning and is used in the same situations, but sounds more informal.</p>

        <p>If you have already read <span class="th-particle">The Particle สิ sì</span> topic, you can think of <span class="th-particle">ดิ di</span> as simply the everyday spoken version of <span class="th-particle">สิ sì</span> that many Thais use with friends, family, and people they know well.</p>

        <p>A good example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ลองดูสิ long doo sì</span> → Go ahead and try it. <em>(encouraging)</em><br>
        <span class="th-particle">ลองดูดิ long doo di</span> → Come on, try it! <em>(same meaning, but more informal)</em>
        </p>

        <p>Because <span class="th-particle">ดิ di</span> is very casual, it is generally used only with friends, family members, and people you are comfortable with. In more polite situations, <span class="th-particle">สิ sì</span> is the safer choice.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'pronoun-chan',
      title: 'The Pronoun ฉัน chăn',
      body: `
        <p><span class="th-particle">ฉัน chăn</span> is a first-person pronoun meaning "I" or "me." It is mostly used by women in everyday conversation and is one of the first Thai pronouns that beginners learn.</p>
        <p>For simplicity, many beginner lessons, including our Lesson 1, teach <span class="th-particle">ผม pŏm</span> as the male word for "I" and <span class="th-particle">ฉัน chăn</span> as the female word for "I." While this is a useful starting point, the real picture is a bit more nuanced.</p>
        <p>In casual conversation, most men use <span class="th-particle">ผม pŏm</span>, while most women use <span class="th-particle">ฉัน chăn</span>:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชื่อสมชายครับ pŏm chûu Sŏm-chaai kráp</span> → My name is Somchai. <em>(male speaker)</em><br>
        <span class="th-particle">ฉันชื่อพลอย chăn chûu Ploy kâ</span> → My name is Ploy. <em>(female speaker)</em>
        </p>
        <p>However, <span class="th-particle">ฉัน chăn</span> is not exclusively a female pronoun. Men occasionally use it as well, especially in songs, poetry, romantic language, and other expressive forms of speech. Because of this, you may hear a male singer repeatedly use <span class="th-particle">ฉัน chăn</span> when singing about love, emotions, or relationships.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมรักคุณ pŏm rák kun</span> → I love you. <em>(typical male speech)</em><br>
        <span class="th-particle">ฉันรักคุณ chăn rák kun</span> → I love you. <em>(common for women, but also often heard in songs sung by men)</em>
        </p>
        <p>Thai actually has many different ways to say "I," and the choice depends on factors such as gender, age, social status, formality, and the relationship between the speakers. As you continue learning Thai, you will encounter other pronouns such as <span class="th-particle">พี่ pêe</span>, <span class="th-particle">น้อง nóng</span>, <span class="th-particle">หนู nŏo</span>, and several others.</p>
        <p>For now, the easiest rule to remember is: use <span class="th-particle">ผม pŏm</span> if you are a man, and <span class="th-particle">ฉัน chăn</span> if you are a woman. You will sound natural in most everyday situations.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'pronoun-pom',
      title: 'The Pronoun ผม pŏm',
      body: `
        <p>Did you know that the male first-person pronoun <span class="th-particle">ผม pŏm</span> also means <b>hair</b>?</p>

        <p>Yes, the exact same word, spelling, and tone can mean either <b>"I"</b> (when used by a male speaker) or <b>"hair."</b> The meaning depends entirely on context.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชื่อเดวิด pŏm chûu David</span> → My name is David.<br>
        <span class="th-particle">ผมยาว pŏm yaao</span> → long hair
        </p>

        <p>Don't worry about mixing them up. In real conversations, the intended meaning is usually obvious.</p>

        <p>For example, when someone says:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบอาหารไทย pŏm chôp aa-hăan thai</span>
        </p>

        <p>No Thai person will think, "Oh, this person's hair likes Thai food!" It's obvious that in this context <span class="th-particle">ผม pŏm</span> means <b>"I."</b></p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'pronoun-ter',
      title: 'The Pronoun เธอ ter',
      body: `
        <p><span class="th-particle">เธอ ter</span> is a pronoun that most commonly means "you." It is often used between friends, classmates, romantic partners, or when speaking to someone younger. Compared to <span class="th-particle">คุณ kun</span>, which is polite and neutral, <span class="th-particle">เธอ ter</span> sounds more informal and personal.</p>

        <p><span class="th-particle">เธอ ter</span> is especially common in songs, movies, and romantic situations, where it often sounds similar to "you" or "dear" in English. Because of this, learners will encounter it very frequently even if they do not hear it as often in everyday conversations with strangers.</p>

        <p>Compare these sentences:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คิดถึงคุณ kít tĕung kun</span> → I miss you. <em>(polite, respectful)</em><br>
        <span class="th-particle">คิดถึงเธอ kít tĕung ter</span> → I miss you. <em>(friendly, affectionate, often romantic)</em>
        </p>

        <p>One thing that confuses many learners is that <span class="th-particle">เธอ ter</span> can sometimes refer to a third person, similar to "she" in English. Native speakers understand the intended meaning from the context.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันเห็นเธอ chǎn hěn ter</span> → I saw you. [1] / I saw her. [2]<br>
        <span class="th-particle">เธอบอกว่าจะมาพรุ่งนี้ ter bòk wâa jà maa prûng-née</span> → She said she will come tomorrow.
        </p>

        <p>However, this third-person use of <span class="th-particle">เธอ ter</span> is uncommon in everyday spoken Thai. In normal conversation, Thai speakers usually use <span class="th-particle">เขา kăo</span> to mean "he" or "she." For beginners, <span class="th-particle">เขา kăo</span> is the third-person pronoun to learn and use.</p>

        <p>As a rule of thumb, use <span class="th-particle">คุณ kun</span> when speaking to strangers, customers, coworkers, or anyone you want to address politely. Use <span class="th-particle">เธอ ter</span> mainly with friends, romantic partners, people you are close to, or when you encounter it in songs, movies, and other media.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'phrase-chai-mai',
      title: 'The Phrase ใช่ไหม châi măi',
      body: `
        <p><span class="th-particle">ใช่ไหม châi măi</span> is a question ending used to confirm something you already believe to be true. It works much like a tag question in English ("..., right?" or "..., isn't it?"). You make a statement, add <span class="th-particle">ใช่ไหม châi măi</span> at the end, and you turn it into a request for confirmation.</p>
        <p>Literally, <span class="th-particle">ใช่ châi</span> means "yes" and <span class="th-particle">ไหม măi</span> is the general question particle. Together they ask "is that correct?" Because you are checking an assumption rather than asking from zero, <span class="th-particle">ใช่ไหม châi măi</span> implies you expect the answer to be "yes."</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณเป็นคนไทย kun bpen kon thai</span> → You are Thai. <em>(statement)</em><br>
        <span class="th-particle">คุณเป็นคนไทยไหม kun bpen kon thai măi</span> → Are you Thai? <em>(genuine question, no assumption)</em><br>
        <span class="th-particle">คุณเป็นคนไทยใช่ไหม kun bpen kon thai châi măi</span> → You're Thai, right? <em>(confirming)</em>
        </p>
        <p>To answer, use <span class="th-particle">ใช่ châi</span> for "yes, that's right" or <span class="th-particle">ไม่ใช่ mâi châi</span> for "no, that's not right."</p>
        <p>In everyday speech and casual texting, <span class="th-particle">ใช่ไหม châi măi</span> is often written as <span class="th-particle">ใช่มั้ย châi măi</span>. The meaning and pronunciation are essentially the same. <span class="th-particle">ใช่มั้ย châi măi</span> is simply a more informal spelling.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'phrase-mai-chai',
      title: 'The Phrase ไม่ใช่ mâi châi',
      body: `
        <p><span class="th-particle">ไม่ใช่ mâi châi</span> is one of the most common phrases in Thai. It literally means "not yes", but in practice it is used to mean <em>no</em>, <em>not</em>, <em>is not</em>, or <em>that's not correct</em>, depending on the situation.</p>

        <p>1. No / That's not right</p>

        <p><span class="th-particle">ไม่ใช่ mâi châi</span> is often used to disagree with a statement or correct incorrect information:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">A: คุณเป็นครูใช่ไหม kun bpen kroo châi măi</span> → You're a teacher, right?<br>
        <span class="th-particle">B: ไม่ใช่ mâi châi</span> → No, I'm not.
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">A: คุณมาจากจีนใช่ไหม kun maa jàak jeen châi măi</span> → You're from China, right?<br>
        <span class="th-particle">B: ไม่ใช่ mâi châi</span> → No.
        </p>

        <p>2. Not a / Not the</p>

        <p><span class="th-particle">ไม่ใช่ mâi châi</span> can also be placed before a noun to mean "is not" or "is not a":</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมไม่ใช่หมอ pŏm mâi châi mŏr</span> → I'm not a doctor.<br>
        <span class="th-particle">อันนี่ไม่ใช่ของผม an nêe mâi châi kŏng pŏm</span> → This isn't mine.
        </p>

        <p>3. Not like that</p>

        <p>These are useful everyday phrases to learn:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไม่ใช่แบบนั้น mâi châi bàep nán</span> → Not like that.<br>
        <span class="th-particle">ไม่ใช่อย่างนั้น mâi châi yàng nán</span> → That's not what I mean.
        </p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'nee-vs-an-nee',
      title: 'นี้ née vs อันนี้ an née',
      body: `
        <p><span class="th-particle">นี้ née</span> means "this" and is placed after a noun. It points to something that is close to the speaker.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">หนังสือนี้ năng-sĕu née</span> → this book<br>
        <span class="th-particle">ร้านนี้ ráan née</span> → this shop
        </p>

        <p><span class="th-particle">อันนี้ an née</span> means "this one". It can be used by itself when the noun is already understood or does not need to be stated.</p>

        <p>Compare the following:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผักนี้ pàk née</span> → this vegetable<br>
        <span class="th-particle">อันนี้ an née</span> → this one
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบหนังสือนี้ pŏm chôp năng-sĕu née</span> → I like this book.<br>
        <span class="th-particle">ผมชอบอันนี้ pŏm chôp an née</span> → I like this one.
        </p>

        <p>The opposite is <span class="th-particle">นั้น nán</span> ("that") and <span class="th-particle">อันนั้น an nán</span> ("that one"):</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">รถคันนั้น rót kan nán</span> → that car<br>
        <span class="th-particle">อันนั้น an nán</span> → that one
        </p>
		
		<p>You may have noticed the word <span class="th-particle">คัน kan</span> in <span class="th-particle">รถคันนั้น rót kan nán</span>. <span class="th-particle">คัน kan</span> is the classifier used for vehicles. In Thai, nouns often require a classifier before <span class="th-particle">นี้ née</span> and <span class="th-particle">นั้น nán</span>. Different nouns use different classifiers, and we'll cover this topic in Lesson 12. One advantage of <span class="th-particle">อันนี้ an née</span> and <span class="th-particle">อันนั้น an nán</span> is that they let you say "this one" and "that one" without having to worry about classifiers.</p>

        <p>In everyday conversation, <span class="th-particle">อันนี้ an née</span> and <span class="th-particle">อันนั้น an nán</span> are extremely common when pointing at objects, so learn these phrases well.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'adverb-jang',
      title: 'The Adverb จัง jang',
      body: `
        <p><span class="th-particle">จัง jang</span> is an intensifier that expresses a strong feeling or reaction. It is often similar to saying "so..." or "so much!" in English. It is commonly used when talking about emotions, opinions, or personal experiences.</p>

        <p><span class="th-particle">จัง jang</span> is usually placed at the end of a sentence or phrase. It makes what you say sound more expressive, emotional, and conversational.</p>

        <p>Compare the following:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">อร่อย aròi</span> → It's delicious.<br>
        <span class="th-particle">อร่อยจัง aròi jang</span> → It's so delicious!
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เหนื่อย nèuay</span> → I'm tired.<br>
        <span class="th-particle">เหนื่อยจัง nèuay jang</span> → I'm so tired!
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คิดถึง kít tĕung</span> → Miss you.<br>
        <span class="th-particle">คิดถึงจัง kít tĕung jang</span> → Miss you so much!
        </p>

        <p><span class="th-particle">จัง jang</span> is often compared with <span class="th-particle">มาก mâak</span>, since both can make something stronger. However, they are not exactly the same.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">อร่อยมาก aròi mâak</span> → It's very delicious.<br>
        <span class="th-particle">อร่อยจัง aròi jang</span> → It's so delicious!
        </p>

        <p><span class="th-particle">มาก mâak</span> usually describes a high degree of something, while <span class="th-particle">จัง jang</span> expresses a stronger personal feeling or reaction. A useful way to remember the difference is:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">มาก mâak</span> → very / very much<br>
        <span class="th-particle">จัง jang</span> → so / so much
        </p>

        <p><span class="th-particle">จัง jang</span> is very common in casual conversations with friends, family, and people you know well. It helps make your Thai sound more natural, expressive, and friendly.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'word-took',
      title: 'The Word ถูก tòok',
      body: `
        <p><span class="th-particle">ถูก tòok</span> is a very common Thai word with several different meanings. The most important meanings for beginners are <em>cheap</em>, <em>correct</em>, and <em>to be affected by something</em> (similar to "to get" in English).</p>

        <p>1. One common meaning of <span class="th-particle">ถูก tòok</span>, as we learned in Lesson 9, is <em>cheap</em>:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ถูกมาก tòok mâak</span> → Very cheap.<br>
        <span class="th-particle">ที่นี่ของถูก têe nêe kŏng tòok</span> → Things here are cheap.<br>
        <span class="th-particle">อันนี้ถูกกว่า an née tòok gwàa</span> → This one is cheaper.
        </p>

        <p>2. Another very common meaning is <em>correct</em> or <em>right</em>. You will often hear it when someone is confirming that information is correct:</p>

        <p>These phrases are very useful to learn:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ถูกแล้ว tòok láew</span> → That's right.<br>
        <span class="th-particle">ถูกต้อง tòok dtông</span> → Correct.<br>
        <span class="th-particle">คุณเดาถูก kun dao tòok</span> → You guessed right.
        </p>

        <p>3. When <span class="th-particle">ถูก tòok</span> appears before a verb or noun, it usually means that something happens to someone. In this usage, it is similar to English expressions such as "to get" or "to be" something:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ถูกจับ tòok jàp</span> → To get arrested.<br>
        <span class="th-particle">ถูกตี tòok dtii</span> → To get hit.<br>
        <span class="th-particle">ถูกลอตเตอรี่ tòok lottery</span> → To win the lottery.
        </p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'words-pee-nong',
      title: 'The Words พี่ pêe and น้อง nóng',
      body: `
        <p><span class="th-particle">พี่ pêe</span> and <span class="th-particle">น้อง nóng</span> are two of the most common words in everyday Thai. While they literally mean "older sibling" and "younger sibling," they are also widely used when speaking to people who are not family members.</p>

        <p>Thai culture places a strong emphasis on age and social relationships. Because of this, Thai speakers often use <span class="th-particle">พี่ pêe</span> and <span class="th-particle">น้อง nóng</span> instead of names or pronouns such as "I" and "you."</p>

        <p>The basic idea is simple:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">พี่ pêe</span> → someone older than you<br>
        <span class="th-particle">น้อง nóng</span> → someone younger than you
        </p>

        <p>For example, if you are talking to a friend who is older than you, you might call them <span class="th-particle">พี่ pêe</span>. If you are talking to someone younger, you might call them <span class="th-particle">น้อง nóng</span>.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">พี่สบายดีไหม pêe sabaai dee mái</span><br>
        → How are you? <em>(speaking to someone older)</em><br><br>
        <span class="th-particle">น้องสบายดีไหม nóng sabaai dee mái</span><br>
        → How are you? <em>(speaking to someone younger)</em>
        </p>

        <p><span class="th-particle">พี่ pêe</span> and <span class="th-particle">น้อง nóng</span> can also be used to refer to yourself, similar to the English pronoun "I". This is very common in everyday Thai.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">พี่ไปก่อนนะ pêe bpai gòn ná</span><br>
        → I'll go first. <em>(spoken by an older person)</em><br><br>
        <span class="th-particle">น้องหิวมาก nóng hĭw mâak</span><br>
        → I'm hungry. <em>(spoken by a younger person)</em>
        </p>

        <p>These words can refer to both the speaker and the listener. The meaning depends on who is older and who is younger.</p>

        <p>Do not worry too much about using <span class="th-particle">พี่ pêe</span> and <span class="th-particle">น้อง nóng</span> perfectly. As a beginner, understanding them is more important than using them yourself. When in doubt, using someone's name or the polite pronoun <span class="th-particle">คุณ kun</span> is always safe.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'tones',
      title: 'Tones',
      body: `
        <p>Thai is a tonal language, which means the tone you use can change the meaning of a word.</p>

        <p>However, many learners worry too much about producing every tone perfectly. In real conversations, Thai speakers do not listen to individual words in isolation. They also use the context, the topic of the conversation, and the surrounding words to understand what you mean.</p>

        <p>For example, if you use the correct vocabulary and grammar but pronounce a few tones incorrectly, native speakers will usually still understand you</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมไปตลาดเมื่อวาน pŏm bpai dtà-làat mêua waan</span><br>
        → I went to the market yesterday.
        </p>

        <p>Even if some tones are not perfect, the meaning of the sentence is usually clear from the context.</p>

        <p>For beginners who want to communicate effectively, vocabulary and grammar are more important than perfect tones. A useful order of priorities is:</p>

        <p style="margin-left:0.8rem">
        1. Vocabulary<br>
        2. Grammar<br>
        3. Clear pronunciation of consonants and vowels<br>
        4. Tones
        </p>

        <p>This does not mean tones are unimportant, only that a learner with good vocabulary and basic grammar can have successful conversations even if their tones are not yet perfect.</p>

        <p>Tones become more important in very short sentences, like when saying a single word. In these situations, there may not be enough context to help the listener understand what you intended to say.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">หมา măa</span> → dog<br>
        <span class="th-particle">ม้า máa</span> → horse<br>
        <span class="th-particle">มา maa</span> → come
        </p>

        <p>As a rule of thumb, do not ignore tones, but do not obsess over them either. Focus on learning useful vocabulary, grammar, and clear pronunciation while steadily improving your tones over time. Communication is more important than perfection.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'emotions',
      title: 'Emotions',
      body: `
        <p>Talking about emotions in Thai is straightforward. In most cases, emotion words work just like other verbs. You can place them after the subject.</p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมีความสุข pŏm mee kwaam sùk</span> → I am happy.<br>
        <span class="th-particle">คุณโกรธไหม kun gròht măi</span> → Are you angry?<br>
        <span class="th-particle">ฉันไม่กลัว chăn mâi glua</span> → I am not scared.
        </p>
        <p>Unlike English, Thai usually does not need a separate word equivalent to "am," "is," or "are." Simply say the subject followed by the emotion.</p>
        <p>Many emotion words can also be turned into adjectives by adding <span class="th-particle">น่า nâa</span> in front of them.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กลัว glua</span> → to be scared [verb]<br>
        <span class="th-particle">น่ากลัว nâa glua</span> → scary [adjective]
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">เบื่อ bèua</span> → to be bored [verb]<br>
        <span class="th-particle">น่าเบื่อ nâa bèua</span> → boring [adjective]
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">สนใจ sŏn jai</span> → to be interested [verb]<br>
        <span class="th-particle">น่าสนใจ nâa sŏn jai</span> → interesting [adjective]
        </p>
        <p>This is similar to the difference between "I am bored" and "This movie is boring" in English:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมเบื่อ pŏm bèua</span> → I am bored.<br>
        <span class="th-particle">หนังเรื่องนี้น่าเบื่อ năng rêuang née nâa bèua</span> → This movie is boring.
        </p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'happy-sad',
      title: 'Happy & Sad',
      body: `
        <p>Thai has two common ways to express happiness and two common ways to express sadness. The key difference is that some words describe a general emotional state, while others describe a reaction to a specific event.</p>
        <p><span class="th-particle">มีความสุข mee kwaam sùk</span> means "to be happy" in a general sense. It describes an ongoing feeling of happiness, satisfaction, or well-being. It is commonly used when talking about your life, a period of time, a relationship, or your overall mood.</p>
        <p><span class="th-particle">ดีใจ dee jai</span> means "to be glad" or "pleased." Unlike <span class="th-particle">มีความสุข mee kwaam sùk</span>, it is usually a reaction to something specific that happened. It is often followed by <span class="th-particle">ที่ têe</span> ("that") to explain the reason.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันมีความสุข chǎn mee kwaam sùk</span> → I'm happy. <em>(general emotional state)</em><br>
        <span class="th-particle">ฉันมีความสุขกับชีวิตของฉัน chăn mee kwaam sùk gàp chee-wít kŏng chăn</span> → I'm happy with my life. <em>(overall satisfaction)</em><br>
        <span class="th-particle">ดีใจที่ได้เจอคุณ dee jai têe dâai jer kun</span> → I'm glad to meet you. <em>(reaction to a specific event)</em>
        </p>
        <p>The same distinction exists with sadness.</p>
        <p><span class="th-particle">เศร้า sâo</span> means "sad" and describes a general feeling or emotional state. It can be used for a person's mood, a sad movie, a sad song, or a sad situation.</p>
        <p><span class="th-particle">เสียใจ sǐa jai</span> means "to feel sad, upset, disappointed, or regretful because of something." Like <span class="th-particle">ดีใจ dee jai</span>, it usually refers to a specific cause or event and is often followed by <span class="th-particle">ที่ têe</span>.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ฉันเศร้า chǎn sâo</span> → I'm sad. <em>(general emotional state)</em><br>
        <span class="th-particle">เขาดูเศร้า kăo doo sâo</span> → He looks sad. <em>(describing a mood)</em><br>
        <span class="th-particle">ผมเสียใจที่ผมสอบตก pŏm sĭa jai têe pŏm sòp dtòk</span> → I'm disappointed that I failed the exam. <em>(reaction to a specific event)</em>
        </p>
        <p>A useful shortcut is to think of <span class="th-particle">ดีใจ dee jai</span> and <span class="th-particle">เสียใจ sǐa jai</span> as emotional reactions, while <span class="th-particle">มีความสุข mee kwaam sùk</span> and <span class="th-particle">เศร้า sâo</span> describe a person's general emotional state.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">มีความสุข mee kwaam sùk</span> → happy <em>(in general)</em><br>
        <span class="th-particle">ดีใจ dee jai</span> → happy; glad <em>(because something good happened)</em><br>
        <span class="th-particle">เศร้า sâo</span> → sad <em>(in general)</em><br>
        <span class="th-particle">เสียใจ sǐa jai</span> → sad; upset, or disappointed <em>(because something happened)</em>
        </p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'colors',
      title: 'Colors',
      body: `
        <p>Colors in Thai are usually very easy to use. In many situations, the color word behaves like an adjective and comes directly <strong>after</strong> the noun it describes.</p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ไวน์แดง wai daeng</span> → red wine<br>
        <span class="th-particle">แอปเปิ้ลเขียว àep-pên kĭao</span> → green apple<br>
        <span class="th-particle">ชาดำ chaa dam</span> → black tea
        </p>
        <p>However, when talking about a color itself as a concept rather than describing an object, we usually add the word <span class="th-particle">สี sĕe</span>, meaning "color."</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">แดง daeng</span> → red<br>
        <span class="th-particle">สีแดง sĕe daeng</span> → red color; the color red
        </p>
        <p>When referring to a color itself, the <span class="th-particle">สี sĕe</span> form is the one we use:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ชอบสีแดง chôp sĕe daeng</span> → I like red color.<br>
        </p>
        <p>As a general rule, use the color word by itself when describing a noun, and add <span class="th-particle">สี sĕe</span> when talking about the color itself.</p>
        <p>However, there are also exceptions, situations where even though we are describing something, the <span class="th-particle">สี sĕe</span> form is preferred, for example when talking about eye colors.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ตาสีฟ้า dtaa sĕe fáa</span> → blue eyes<br>
        </p>
        <p>And there are situations where both forms are acceptable.
        Native speakers frequently use the <span class="th-particle">สี sĕe</span> form when describing the color of hair, cars and clothes for example.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">รถดำ rót dam</span> → black car<br>
        <span class="th-particle">รถสีดำ rót sĕe dam</span> → black car<br>
        <span class="th-particle">ผมน้ำตาล pŏm nám dtaan</span> → brown hair<br>
        <span class="th-particle">ผมสีน้ำตาล pŏm sĕe nám dtaan</span> → brown hair<br>
        <span class="th-particle">เสื้อเหลือง sêua lĕuang</span> → yellow shirt<br>
        <span class="th-particle">เสื้อสีเหลือง sêua sĕe lĕuang</span> → yellow shirt
        </p>
        <p>In these situations, both versions are fine. ✅
        </p>`
    }
];
