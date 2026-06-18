/* =========================================================================
   sentences.js  —  Sentence Builder game data (Thai Beginner Course)
   -------------------------------------------------------------------------
   DATA ONLY. No logic lives here. Loaded BEFORE sentence-builder.js and AFTER
   the main inline script, so it shares the global scope (plain script, no
   modules). To add or edit sentences, edit THIS file only.

   Each record is SELF-CONTAINED:
     th[]   parallel array of Thai word-tokens (each becomes one tappable button)
     rom[]  parallel array of romanizations  (rom[i] matches th[i] by index)
     en     the English prompt shown above the puzzle
     less   lesson number (drives the Sentence Pool lesson chips)
     answers (OPTIONAL) array of acceptable word-orderings written as readable
             Thai token arrays. Absent => the canonical th[] order is the only
             correct answer. Present => player's arrangement is correct if it
             matches ANY listed ordering. Use only for genuinely different valid
             orders a native speaker would actually say.

   Answer checking is STRING-BASED (by displayed word sequence), never by which
   physical button — so duplicate words within a sentence are interchangeable
   automatically with no special handling.
   ========================================================================= */

const sentences = [
  // ===== LESSON 1 =====

  {
    th: ["ผม", "เดวิด", "ครับ"],
    rom: ["pŏm", "David", "kráp"],
    en: "I am David.",
    less: 1
  },
  {
    th: ["ฉัน", "เจนนิเฟอร์", "ค่ะ"],
    rom: ["chăn", "Jennifer", "kâ"],
    en: "I am Jennifer.",
    less: 1
  },
  {
    th: ["ผม", "ชื่อ", "เจมส์", "ครับ"],
    rom: ["pŏm", "chûu", "James", "kráp"],
    en: "My name is James.",
    less: 1
  },
  {
    th: ["ฉัน", "ชื่อ", "แมรี", "ค่ะ"],
    rom: ["chăn", "chûu", "Mary", "kâ"],
    en: "My name is Mary.",
    less: 1
  },
  {
    th: ["คุณ", "ชื่อ", "อะไร", "ครับ/คะ"],
    rom: ["kun", "chûu", "à-rai", "kráp/ká"],
    en: "What's your name?",
    less: 1
  },
  {
    th: ["ยินดี", "ที่", "ได้", "รู้จัก", "ครับ/ค่ะ"],
    rom: ["yin dee", "têe", "dâai", "róo jàk", "kráp/kâ"],
    en: "Nice to meet you.",
    less: 1
  },

  // ===== LESSON 2 =====

  {
    th: ["ผม", "มาจาก", "อเมริกา", "ครับ"],
    rom: ["pŏm", "maa jàak", "à-may-rí-gaa", "kráp"],
    en: "I am from America. (male speaker)",
    less: 2
  },
  {
    th: ["ฉัน", "มาจาก", "ออสเตรเลีย", "ค่ะ"],
    rom: ["chăn", "maa jàak", "òt-dtray-lia", "kâ"],
    en: "I am from Australia. (female speaker)",
    less: 2
  },
  {
    th: ["ผม", "มาจาก", "อังกฤษ", "ครับ"],
    rom: ["pŏm", "maa jàak", "ang-grìt", "kráp"],
    en: "I am from England. (male speaker)",
    less: 2
  },
  {
    th: ["ฉัน", "มาจาก", "ญี่ปุ่น", "ค่ะ"],
    rom: ["chăn", "maa jàak", "yêe-pùn", "kâ"],
    en: "I am from Japan. (female speaker)",
    less: 2
  },
  {
    th: ["ผม", "มาจาก", "ประเทศไทย", "ครับ"],
    rom: ["pŏm", "maa jàak", "bprà-têt Thai", "kráp"],
    en: "I am from Thailand. (male speaker)",
    less: 2
  },
  {
    th: ["คุณ", "มาจาก", "ที่ไหน", "ครับ"],
    rom: ["kun", "maa jàak", "têe năi", "kráp"],
    en: "Where are you from? (male speaker)",
    less: 2
  },
  {
    th: ["คุณ", "มาจาก", "ที่ไหน", "คะ"],
    rom: ["kun", "maa jàak", "têe năi", "ká"],
    en: "Where are you from? (female speaker)",
    less: 2
  },
  {
    th: ["คุณ", "สบายดี", "ไหม", "ครับ/คะ"],
    rom: ["kun", "sà-baai dee", "măi", "kráp/ká"],
    en: "How are you? / Are you fine?",
    less: 2
  },
  {
    th: ["ผม", "สบายดี", "ครับ"],
    rom: ["pŏm", "sà-baai dee", "kráp"],
    en: "I am fine. (male speaker)",
    less: 2
  },
  {
    th: ["ฉัน", "สบายดี", "ค่ะ"],
    rom: ["chăn", "sà-baai dee", "kâ"],
    en: "I am fine. (female speaker)",
    less: 2
  },
  {
    th: ["เขา", "ชื่อ", "เจสสิก้า", "ครับ"],
    rom: ["kăo", "chûu", "Jessica", "kráp"],
    en: "Her name is Jessica. (male speaker)",
    less: 2
  },
  {
    th: ["เขา", "มาจาก", "อเมริกา", "ค่ะ"],
    rom: ["kăo", "maa jàak", "à-may-rí-gaa", "kâ"],
    en: "She/he is from America. (female speaker)",
    less: 2
  },
  {
    th: ["เขา", "ชื่อ", "อะไร", "ครับ"],
    rom: ["kăo", "chûu", "à-rai", "kráp"],
    en: "What's his/her name? (male speaker)",
    less: 2
  },
  {
    th: ["เรา", "มาจาก", "ญี่ปุ่น", "ครับ"],
    rom: ["rao", "maa jàak", "yêe-pùn", "kráp"],
    en: "We are from Japan. (male speaker)",
    less: 2
  },

  // ===== LESSON 3 (Numbers) =====

  {
    th: ["อะไร", "นะ", "ครับ/คะ"],
    rom: ["à-rai", "ná", "kráp/ká"],
    en: "What? / Pardon? (male speaker)",
    less: 3
  },

  // ===== LESSON 4 (Age) =====

  {
    th: ["ผม", "อายุ", "สามสิบห้า", "ปี", "ครับ"],
    rom: ["pŏm", "aa-yú", "săam-sìp-hâa", "bpee", "kráp"],
    en: "I am 35 years old. (male speaker)",
    less: 4
  },
  {
    th: ["ฉัน", "อายุ", "ยี่สิบเจ็ด", "ปี", "ค่ะ"],
    rom: ["chăn", "aa-yú", "yêe-sìp-jèt", "bpee", "kâ"],
    en: "I am 27 years old. (female speaker)",
    less: 4
  },
  {
    th: ["ผม", "อายุ", "ยี่สิบหก", "ปี", "ครับ"],
    rom: ["pŏm", "aa-yú", "yêe-sìp-hòk", "bpee", "kráp"],
    en: "I am 26 years old. (male speaker)",
    less: 4
  },
  {
    th: ["คุณ", "อายุ", "เท่าไหร่", "ครับ"],
    rom: ["kun", "aa-yú", "tâo rai", "kráp"],
    en: "How old are you? (male speaker)",
    less: 4
  },
  {
    th: ["คุณ", "อายุ", "เท่าไหร่", "คะ"],
    rom: ["kun", "aa-yú", "tâo rai", "ká"],
    en: "How old are you? (female speaker)",
    less: 4
  },
  {
    th: ["เขา", "อายุ", "เท่าไหร่", "คะ"],
    rom: ["kăo", "aa-yú", "tâo rai", "ká"],
    en: "How old is he/she? (female speaker)",
    less: 4
  },
  {
    th: ["เขา", "อายุ", "สามสิบหก", "ปี", "ครับ"],
    rom: ["kăo", "aa-yú", "săam-sìp-hòk", "bpee", "kráp"],
    en: "He/she is 36 years old. (male speaker)",
    less: 4
  },
  {
    th: ["เขา", "อายุ", "เจ็ดสิบสอง", "ปี", "ค่ะ"],
    rom: ["kăo", "aa-yú", "jèt-sìp-sŏng", "bpee", "kâ"],
    en: "He/she is 72 years old. (female speaker)",
    less: 4
  },
  {
    th: ["ขอโทษ", "ครับ"],
    rom: ["kŏr tôht", "kráp"],
    en: "Sorry. / Excuse me. (male speaker)",
    less: 4
  },
  {
    th: ["เขา", "มาจาก", "อังกฤษ", "ครับ"],
    rom: ["kăo", "maa jàak", "ang-grìt", "kráp"],
    en: "He/she is from England. (male speaker)",
    less: 4
  },

// ===== LESSON 5 (Simple Sentences) =====

{
  th: ["ผม", "กิน", "ไก่", "ครับ"],
  rom: ["pŏm", "gin", "gài", "kráp"],
  en: "I eat chicken. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "ดื่ม", "น้ำ", "ค่ะ"],
  rom: ["chăn", "dèum", "náam", "kâ"],
  en: "I drink water. (female speaker)",
  less: 5
},
{
  th: ["ผม", "อ่าน", "หนังสือ", "ครับ"],
  rom: ["pŏm", "àan", "năng-sĕu", "kráp"],
  en: "I read a book. (male speaker)",
  less: 5
},
{
  th: ["เขา", "อ่าน", "หนังสือ", "ค่ะ"],
  rom: ["kăo", "àan", "năng-sĕu", "kâ"],
  en: "He/she reads a book. (female speaker)",
  less: 5
},
{
  th: ["เรา", "กิน", "ไก่", "ครับ"],
  rom: ["rao", "gin", "gài", "kráp"],
  en: "We eat chicken. (male speaker)",
  less: 5
},
{
  th: ["พวกเขา", "ดื่ม", "น้ำ"],
  rom: ["pûak kăo", "dèum", "náam"],
  en: "They drink water.",
  less: 5
},
{
  th: ["แมว", "ดื่ม", "นม"],
  rom: ["maew", "dèum", "nom"],
  en: "The cat drinks milk.",
  less: 5
},
{
  th: ["เขา", "ดื่ม", "โค้ก"],
  rom: ["kăo", "dèum", "kóhk"],
  en: "He drinks coke.",
  less: 5
},
{
  th: ["ผม", "กิน", "ยา", "ครับ"],
  rom: ["pŏm", "gin", "yaa", "kráp"],
  en: "I take medicine. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "กิน", "ข้าว", "ค่ะ"],
  rom: ["chăn", "gin", "kâao", "kâ"],
  en: "I eat a meal. (female speaker)",
  less: 5
},
{
  th: ["ผม", "ชอบ", "กิน", "ไก่"],
  rom: ["pŏm", "chôp", "gin", "gài"],
  en: "I like to eat chicken. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "ชอบ", "ดื่ม", "เบียร์"],
  rom: ["chăn", "chôp", "dèum", "bia"],
  en: "I like to drink beer. (female speaker)",
  less: 5
},
{
  th: ["เรา", "ชอบ", "แมว", "ครับ"],
  rom: ["rao", "chôp", "maew", "kráp"],
  en: "We like cats. (male speaker)",
  less: 5
},
{
  th: ["เขา", "ชอบ", "อ่าน", "หนังสือ"],
  rom: ["kăo", "chôp", "àan", "năng-sĕu"],
  en: "He/she likes to read books.",
  less: 5
},
{
  th: ["ผม", "ชอบ", "กิน", "พิซซ่า", "ครับ"],
  rom: ["pŏm", "chôp", "gin", "pít-sâa", "kráp"],
  en: "I like to eat pizza. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "ชอบ", "กิน", "ซูชิ", "ค่ะ"],
  rom: ["chăn", "chôp", "gin", "soo-chí", "kâ"],
  en: "I like to eat sushi. (female speaker)",
  less: 5
},
{
  th: ["ผม", "ชอบ", "ดื่ม", "โค้ก"],
  rom: ["pŏm", "chôp", "dèum", "kóhk"],
  en: "I like to drink coke.",
  less: 5
},
{
  th: ["ผม", "ชอบ", "กิน", "อาหารไทย"],
  rom: ["pŏm", "chôp", "gin", "aa-hăan Thai"],
  en: "I like to eat Thai food. (male speaker)",
  less: 5
},
{
  th: ["เรา", "ชอบ", "กิน", "ผลไม้"],
  rom: ["rao", "chôp", "gin", "pŏn-lá-mái"],
  en: "We like to eat fruit.",
  less: 5
},
{
  th: ["ฉัน", "ชอบ", "กิน", "แอปเปิ้ล"],
  rom: ["chăn", "chôp", "gin", "àep-pên"],
  en: "I like to eat apples. (female speaker)",
  less: 5
},
{
  th: ["ผม", "ทำงาน", "ครับ"],
  rom: ["pŏm", "tam ngaan", "kráp"],
  en: "I work. (male speaker)",
  less: 5
},
{
  th: ["ผม", "ชอบ", "ทำงาน"],
  rom: ["pŏm", "chôp", "tam ngaan"],
  en: "I like to work. (male speaker)",
  less: 5
},
{
  th: ["เขา", "ทำอาหาร", "ค่ะ"],
  rom: ["kăo", "tam aa-hăan", "kâ"],
  en: "He/she cooks. (female speaker)",
  less: 5
},
{
  th: ["ฉัน", "ชอบ", "ทำอาหาร", "ค่ะ"],
  rom: ["chăn", "chôp", "tam aa-hăan", "kâ"],
  en: "I like to cook. (female speaker)",
  less: 5
},
{
  th: ["เรา", "ซื้อ", "ไก่"],
  rom: ["rao", "séu", "gài"],
  en: "We buy chicken.",
  less: 5
},
{
  th: ["เขา", "ซื้อ", "ผลไม้", "ค่ะ"],
  rom: ["kăo", "séu", "pŏn-lá-mái", "kâ"],
  en: "He/she buys fruit. (female speaker)",
  less: 5
},
{
  th: ["ผม", "ซื้อ", "น้ำ"],
  rom: ["pŏm", "séu", "náam"],
  en: "I buy water. (male speaker)",
  less: 5
},
{
  th: ["เขา", "ทำงาน", "ครับ"],
  rom: ["kăo", "tam ngaan", "kráp"],
  en: "He/she works. (male speaker)",
  less: 5
},
{
  th: ["เขา", "ชอบ", "แมว"],
  rom: ["kăo", "chôp", "maew"],
  en: "He/she likes cats.",
  less: 5
},
{
  th: ["ผม", "ไป", "ร้านอาหาร", "ครับ"],
  rom: ["pŏm", "bpai", "ráan aa-hăan", "kráp"],
  en: "I go to a restaurant. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "ไป", "ซูเปอร์มาร์เก็ต", "ค่ะ"],
  rom: ["chăn", "bpai", "soo-bper-maa-gèt", "kâ"],
  en: "I go to a supermarket. (female speaker)",
  less: 5
},
{
  th: ["เรา", "ไป", "ออฟฟิศ"],
  rom: ["rao", "bpai", "óf-fít"],
  en: "We go to the office.",
  less: 5
},
{
  th: ["ผม", "เรียน", "ภาษาไทย", "ครับ"],
  rom: ["pŏm", "rian", "paa-săa Thai", "kráp"],
  en: "I study Thai language. (male speaker)",
  less: 5
},
{
  th: ["ฉัน", "เรียน", "ภาษาไทย", "ค่ะ"],
  rom: ["chăn", "rian", "paa-săa Thai", "kâ"],
  en: "I study Thai language. (female speaker)",
  less: 5
},
{
  th: ["ฉัน", "ซื้อ", "อาหาร"],
  rom: ["chăn", "séu", "aa-hăan"],
  en: "I buy food. (female speaker)",
  less: 5
},
{
  th: ["เขา", "ชอบ", "กิน", "อาหารอเมริกัน"],
  rom: ["kăo", "chôp", "gin", "aa-hăan à-may-rí-gan"],
  en: "He/she likes to eat American food.",
  less: 5
},

// ===== LESSON 6 (Questions) =====
{
  th: ["คุณ", "ชอบ", "แมว", "ไหม"],
  rom: ["kun", "chôp", "maew", "măi"],
  en: "Do you like cats?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "อ่าน", "ไหม"],
  rom: ["kun", "chôp", "àan", "măi"],
  en: "Do you like to read?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ทำอาหาร", "ไหม"],
  rom: ["kun", "chôp", "tam aa-hăan", "măi"],
  en: "Do you like to cook?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "หมา", "ไหม"],
  rom: ["kun", "chôp", "măa", "măi"],
  en: "Do you like dogs?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ออกกำลังกาย", "ไหม"],
  rom: ["kun", "chôp", "òk gam-lang gaai", "măi"],
  en: "Do you like to exercise?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "กิน", "พิซซ่า", "ไหม"],
  rom: ["kun", "chôp", "gin", "pít-sâa", "măi"],
  en: "Do you like to eat pizza?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ดื่ม", "เบียร์", "ไหม"],
  rom: ["kun", "chôp", "dèum", "bia", "măi"],
  en: "Do you like to drink beer?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "กิน", "อาหารไทย", "ไหม", "คะ"],
  rom: ["kun", "chôp", "gin", "aa-hăan Thai", "măi", "ká"],
  en: "Do you like to eat Thai food?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ดูหนัง", "ไหม"],
  rom: ["kun", "chôp", "doo năng", "măi"],
  en: "Do you like to watch movies?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ฟังเพลง", "ไหม"],
  rom: ["kun", "chôp", "fang pleng", "măi"],
  en: "Do you like to listen to music?",
  less: 6
},
{
  th: ["เขา", "ชอบ", "ดื่ม", "เบียร์", "ไหม"],
  rom: ["kăo", "chôp", "dèum", "bia", "măi"],
  en: "Does he/she like to drink beer?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "เล่นโทรศัพท์", "ไหม"],
  rom: ["kun", "chôp", "lên toh-rá-sàp", "măi"],
  en: "Do you like to use your phone?",
  less: 6
},
{
  th: ["คุณ", "ทำ", "อะไร"],
  rom: ["kun", "tam", "à-rai"],
  en: "What do you do?",
  less: 6
},
{
  th: ["คุณ", "กิน", "อะไร"],
  rom: ["kun", "gin", "à-rai"],
  en: "What do you eat?",
  less: 6
},
{
  th: ["คุณ", "ดื่ม", "อะไร"],
  rom: ["kun", "dèum", "à-rai"],
  en: "What do you drink?",
  less: 6
},
{
  th: ["คุณ", "อ่าน", "อะไร"],
  rom: ["kun", "àan", "à-rai"],
  en: "What do you read?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "กิน", "อะไร"],
  rom: ["kun", "chôp", "gin", "à-rai"],
  en: "What do you like to eat?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ดื่ม", "อะไร"],
  rom: ["kun", "chôp", "dèum", "à-rai"],
  en: "What do you like to drink?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ทำ", "อะไร"],
  rom: ["kun", "chôp", "tam", "à-rai"],
  en: "What do you like to do?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "อ่าน", "อะไร"],
  rom: ["kun", "chôp", "àan", "à-rai"],
  en: "What do you like to read?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ดูหนัง", "อะไร"],
  rom: ["kun", "chôp", "doo năng", "à-rai"],
  en: "What kind of movies do you like to watch?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ฟังเพลง", "อะไร"],
  rom: ["kun", "chôp", "fang pleng", "à-rai"],
  en: "What kind of music do you like?",
  less: 6
},
{
  th: ["เขา", "ไป", "ไหน"],
  rom: ["kăo", "bpai", "năi"],
  en: "Where does he/she go?",
  less: 6
},
{
  th: ["คุณ", "ไป", "ไหน"],
  rom: ["kun", "bpai", "năi"],
  en: "Where are you going?",
  less: 6
},
{
  th: ["ผม", "ชอบ", "ดูหนัง", "และ", "ฟังเพลง"],
  rom: ["pŏm", "chôp", "doo năng", "láe", "fang pleng"],
  en: "I like to watch movies and listen to music.",
  less: 6,
  answers: [
    ["ผม", "ชอบ", "ดูหนัง", "และ", "ฟังเพลง"],
    ["ผม", "ชอบ", "ฟังเพลง", "และ", "ดูหนัง"]
  ]
},
{
  th: ["ฉัน", "ชอบ", "หมา", "และ", "แมว"],
  rom: ["chăn", "chôp", "măa", "láe", "maew"],
  en: "I like dogs and cats.",
  less: 6,
  answers: [
    ["ฉัน", "ชอบ", "หมา", "และ", "แมว"],
    ["ฉัน", "ชอบ", "แมว", "และ", "หมา"]
  ]
},
{
  th: ["เรา", "กิน", "ไก่", "และ", "ดื่ม", "เบียร์"],
  rom: ["rao", "gin", "gài", "láe", "dèum", "bia"],
  en: "We eat chicken and drink beer.",
  less: 6,
  answers: [
    ["เรา", "กิน", "ไก่", "และ", "ดื่ม", "เบียร์"],
    ["เรา", "ดื่ม", "เบียร์", "และ", "กิน", "ไก่"]
  ]
},
{
  th: ["ผม", "กิน", "ไก่", "และ", "ดื่ม", "น้ำ"],
  rom: ["pŏm", "gin", "gài", "láe", "dèum", "náam"],
  en: "I eat chicken and drink water.",
  less: 6,
  answers: [
    ["ผม", "กิน", "ไก่", "และ", "ดื่ม", "น้ำ"],
    ["ผม", "ดื่ม", "น้ำ", "และ", "กิน", "ไก่"]
  ]
},
{
  th: ["ฉัน", "ชอบ", "กิน", "อาหารไทย", "และ", "อาหารญี่ปุ่น"],
  rom: ["chăn", "chôp", "gin", "aa-hăan Thai", "láe", "aa-hăan yêe-pùn"],
  en: "I like to eat Thai and Japanese food.",
  less: 6,
  answers: [
    ["ฉัน", "ชอบ", "กิน", "อาหารไทย", "และ", "อาหารญี่ปุ่น"],
    ["ฉัน", "ชอบ", "กิน", "อาหารญี่ปุ่น", "และ", "อาหารไทย"]
  ]
},
{
  th: ["ฉัน", "ซื้อ", "อาหาร", "น้ำ", "และ", "เบียร์"],
  rom: ["chăn", "séu", "aa-hăan", "náam", "láe", "bia"],
  en: "I buy food, water and beer.",
  less: 6,
  answers: [
    ["ฉัน", "ซื้อ", "อาหาร", "น้ำ", "และ", "เบียร์"],
    ["ฉัน", "ซื้อ", "อาหาร", "เบียร์", "และ", "น้ำ"],
    ["ฉัน", "ซื้อ", "น้ำ", "อาหาร", "และ", "เบียร์"],
    ["ฉัน", "ซื้อ", "น้ำ", "เบียร์", "และ", "อาหาร"],
    ["ฉัน", "ซื้อ", "เบียร์", "อาหาร", "และ", "น้ำ"],
    ["ฉัน", "ซื้อ", "เบียร์", "น้ำ", "และ", "อาหาร"]
  ]
},
{
  th: ["คุณ", "ชอบ", "หมา", "ใช่ไหม"],
  rom: ["kun", "chôp", "măa", "châi măi"],
  en: "You like dogs, right?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "ดูหนัง", "ใช่ไหม"],
  rom: ["kun", "chôp", "doo năng", "châi măi"],
  en: "You like to watch movies, right?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "กิน", "อาหารไทย", "ใช่ไหม"],
  rom: ["kun", "chôp", "gin", "aa-hăan Thai", "châi măi"],
  en: "You like to eat Thai food, right?",
  less: 6
},
{
  th: ["คุณ", "มาจาก", "อเมริกา", "ใช่ไหม"],
  rom: ["kun", "maa jàak", "à-may-rí-gaa", "châi măi"],
  en: "You are from America, right?",
  less: 6
},
{
  th: ["คุณ", "อายุ", "สามสิบ", "ปี", "ใช่ไหม"],
  rom: ["kun", "aa-yú", "săam-sìp", "bpee", "châi măi"],
  en: "You are 30 years old, right?",
  less: 6
},
{
  th: ["คุณ", "ชอบ", "อ่าน", "ใช่ไหม"],
  rom: ["kun", "chôp", "àan", "châi măi"],
  en: "You like to read, right?",
  less: 6
},
{
  th: ["เขา", "เล่น", "โทรศัพท์"],
  rom: ["kăo", "lên", "toh-rá-sàp"],
  en: "He/she is using the phone.",
  less: 6
},
{
  th: ["ผม", "ชอบ", "เล่น", "โทรศัพท์"],
  rom: ["pŏm", "chôp", "lên", "toh-rá-sàp"],
  en: "I like to use my phone.",
  less: 6
},
{
  th: ["ฉัน", "ชอบ", "ออกกำลังกาย"],
  rom: ["chăn", "chôp", "òk gam-lang gaai"],
  en: "I like to exercise.",
  less: 6
},

// ===== LESSON 7 (Negatives) =====
{
  th: ["ผม", "ไม่", "ชอบ", "กิน", "ปลา"],
  rom: ["pŏm", "mâi", "chôp", "gin", "bplaa"],
  en: "I don't like to eat fish.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "กิน", "เนื้อ"],
  rom: ["chăn", "mâi", "gin", "néuua"],
  en: "I don't eat beef.",
  less: 7
},
{
  th: ["เขา", "ไม่", "ชอบ", "กิน", "หมู"],
  rom: ["kăo", "mâi", "chôp", "gin", "mŏo"],
  en: "He/she doesn't like to eat pork.",
  less: 7
},
{
  th: ["ผม", "ไม่", "ชอบ", "ออกกำลังกาย"],
  rom: ["pŏm", "mâi", "chôp", "òk gam-lang gaai"],
  en: "I don't like to exercise.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "ชอบ", "ทำอาหาร"],
  rom: ["chăn", "mâi", "chôp", "tam aa-hăan"],
  en: "I don't like to cook.",
  less: 7
},
{
  th: ["เขา", "ไม่", "ชอบ", "เรียน"],
  rom: ["kăo", "mâi", "chôp", "rian"],
  en: "He/she doesn't like to study.",
  less: 7
},
{
  th: ["พวกเขา", "ไม่", "ชอบ", "กิน", "อาหารไทย"],
  rom: ["pûak kăo", "mâi", "chôp", "gin", "aa-hăan Thai"],
  en: "They don't like to eat Thai food.",
  less: 7
},
{
  th: ["ผม", "ไม่", "เห็น", "คุณ"],
  rom: ["pŏm", "mâi", "hĕn", "kun"],
  en: "I don't see you.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "ได้ยิน", "คุณ"],
  rom: ["chăn", "mâi", "dâai yin", "kun"],
  en: "I don't hear you.",
  less: 7
},
{
  th: ["คุณ", "เห็น", "ผม", "ไหม"],
  rom: ["kun", "hĕn", "pŏm", "măi"],
  en: "Do you see me?",
  less: 7
},
{
  th: ["คุณ", "ได้ยิน", "ฉัน", "ไหม"],
  rom: ["kun", "dâai yin", "chăn", "măi"],
  en: "Do you hear me?",
  less: 7
},
{
  th: ["เขา", "ไม่", "เห็น", "ผม"],
  rom: ["kăo", "mâi", "hĕn", "pŏm"],
  en: "He/she doesn't see me.",
  less: 7
},
{
  th: ["ผม", "ไม่", "พูด", "ภาษาไทย"],
  rom: ["pŏm", "mâi", "pôot", "paa-săa Thai"],
  en: "I don't speak Thai.",
  less: 7
},
{
  th: ["ฉัน", "พูด", "ภาษาญี่ปุ่น"],
  rom: ["chăn", "pôot", "paa-săa yêe-pùn"],
  en: "I speak Japanese.",
  less: 7
},
{
  th: ["เขา", "ไม่", "พูด", "ภาษาอังกฤษ"],
  rom: ["kăo", "mâi", "pôot", "paa-săa ang-grìt"],
  en: "He/she doesn't speak English.",
  less: 7
},
{
  th: ["ผม", "ไม่", "ชอบ", "คุย"],
  rom: ["pŏm", "mâi", "chôp", "kui"],
  en: "I don't like to talk.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "บอก", "คุณ"],
  rom: ["chăn", "mâi", "bòk", "kun"],
  en: "I won't tell you.",
  less: 7
},
{
  th: ["ผม", "ไม่", "เข้าใจ"],
  rom: ["pŏm", "mâi", "kâo jai"],
  en: "I don't understand.",
  less: 7
},
{
  th: ["คุณ", "เข้าใจ", "ไหม"],
  rom: ["kun", "kâo jai", "măi"],
  en: "Do you understand?",
  less: 7
},
{
  th: ["เขา", "ไม่", "เข้าใจ", "ภาษาไทย"],
  rom: ["kăo", "mâi", "kâo jai", "paa-săa Thai"],
  en: "He/she doesn't understand Thai.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "รู้"],
  rom: ["chăn", "mâi", "róo"],
  en: "I don't know.",
  less: 7
},
{
  th: ["คุณ", "รู้", "ไหม"],
  rom: ["kun", "róo", "măi"],
  en: "Do you know?",
  less: 7
},
{
  th: ["ผม", "รู้จัก", "เขา"],
  rom: ["pŏm", "róo jàk", "kăo"],
  en: "I know him/her.",
  less: 7
},
{
  th: ["เขา", "ไม่", "รู้จัก", "ผม"],
  rom: ["kăo", "mâi", "róo jàk", "pŏm"],
  en: "He/she doesn't know me.",
  less: 7
},
{
  th: ["ฉัน", "รู้จัก", "คุณ", "ใช่ไหม"],
  rom: ["chăn", "róo jàk", "kun", "châi măi"],
  en: "I know you, right?",
  less: 7
},
{
  th: ["ผม", "รัก", "คุณ"],
  rom: ["pŏm", "rák", "kun"],
  en: "I love you.",
  less: 7
},
{
  th: ["ฉัน", "ไม่", "รัก", "เขา"],
  rom: ["chăn", "mâi", "rák", "kăo"],
  en: "I don't love him/her.",
  less: 7
},
{
  th: ["ผม", "ชอบ", "กิน", "แต่", "ไม่", "ชอบ", "ทำอาหาร"],
  rom: ["pŏm", "chôp", "gin", "dtàe", "mâi", "chôp", "tam aa-hăan"],
  en: "I like to eat, but I don't like to cook.",
  less: 7
},
{
  th: ["ฉัน", "ชอบ", "เล่น", "แต่", "ไม่", "ชอบ", "เรียน"],
  rom: ["chăn", "chôp", "lên", "dtàe", "mâi", "chôp", "rian"],
  en: "I like to play, but I don't like to study.",
  less: 7
},
{
  th: ["ผม", "ชอบ", "กิน", "เนื้อ", "แต่", "ไม่", "ชอบ", "กิน", "ไก่"],
  rom: ["pŏm", "chôp", "gin", "néuua", "dtàe", "mâi", "chôp", "gin", "gài"],
  en: "I like to eat beef, but I don't like to eat chicken.",
  less: 7
},
{
  th: ["ฉัน", "ชอบ", "หมา", "แต่", "ไม่", "ชอบ", "แมว"],
  rom: ["chăn", "chôp", "măa", "dtàe", "mâi", "chôp", "maew"],
  en: "I like dogs, but I don't like cats.",
  less: 7
},
{
  th: ["เขา", "รู้จัก", "ผม", "แต่", "ไม่", "ชอบ"],
  rom: ["kăo", "róo jàk", "pŏm", "dtàe", "mâi", "chôp"],
  en: "He/she knows me, but doesn't like me.",
  less: 7
},
{
  th: ["ผม", "ชอบ", "ดื่ม", "เบียร์", "แต่", "ไม่", "ชอบ", "ดื่ม", "นม"],
  rom: ["pŏm", "chôp", "dèum", "bia", "dtàe", "mâi", "chôp", "dèum", "nom"],
  en: "I like to drink beer, but I don't like to drink milk.",
  less: 7
},
{
  th: ["เรา", "ชอบ", "กิน", "ปลา", "และ", "ผัก"],
  rom: ["rao", "chôp", "gin", "bplaa", "láe", "pàk"],
  en: "We like to eat fish and vegetables.",
  less: 7,
  answers: [
    ["เรา", "ชอบ", "กิน", "ปลา", "และ", "ผัก"],
    ["เรา", "ชอบ", "กิน", "ผัก", "และ", "ปลา"]
  ]
},
{
  th: ["เขา", "ไม่", "ชอบ", "กิน", "หมู", "และ", "เนื้อ"],
  rom: ["kăo", "mâi", "chôp", "gin", "mŏo", "láe", "néuua"],
  en: "He/she doesn't like to eat pork and beef.",
  less: 7,
  answers: [
    ["เขา", "ไม่", "ชอบ", "กิน", "หมู", "และ", "เนื้อ"],
    ["เขา", "ไม่", "ชอบ", "กิน", "เนื้อ", "และ", "หมู"]
  ]
},

// ===== LESSON 8 (To Be: keu / bpen / yòo) =====
{
  th: ["นี่", "คือ", "รถยนต์"],
  rom: ["nêe", "keu", "rót yon"],
  en: "This is a car.",
  less: 8
},
{
  th: ["นั่น", "คือ", "รถมอเตอร์ไซด์"],
  rom: ["nân", "keu", "rót mor-têr sai"],
  en: "That is a motorbike.",
  less: 8
},
{
  th: ["มัน", "คือ", "ผลไม้"],
  rom: ["man", "keu", "pŏn-lá-mái"],
  en: "It is a fruit.",
  less: 8
},
{
  th: ["นี่", "คือ", "ทุเรียน"],
  rom: ["nêe", "keu", "túrian"],
  en: "This is durian.",
  less: 8
},
{
  th: ["นั่น", "คือ", "หมา"],
  rom: ["nân", "keu", "măa"],
  en: "That is a dog.",
  less: 8
},
{
  th: ["มัน", "คือ", "น้ำ"],
  rom: ["man", "keu", "náam"],
  en: "It is water.",
  less: 8
},
{
  th: ["นี่", "คือ", "อะไร", "คะ"],
  rom: ["nêe", "keu", "à-rai", "ká"],
  en: "What is this? (female speaker)",
  less: 8
},
{
  th: ["นั่น", "คือ", "อะไร", "ครับ"],
  rom: ["nân", "keu", "à-rai", "kráp"],
  en: "What is that? (male speaker)",
  less: 8
},
{
  th: ["มัน", "คือ", "อะไร"],
  rom: ["man", "keu", "à-rai"],
  en: "What is it?",
  less: 8
},
{
  th: ["นี่", "คือ", "ไก่", "หรือ", "หมู"],
  rom: ["nêe", "keu", "gài", "rĕu", "mŏo"],
  en: "Is this chicken or pork?",
  less: 8,
  answers: [
    ["นี่", "คือ", "ไก่", "หรือ", "หมู"],
    ["นี่", "คือ", "หมู", "หรือ", "ไก่"]
  ]
},
{
  th: ["นั่น", "คือ", "หมา", "หรือ", "แมว"],
  rom: ["nân", "keu", "măa", "rĕu", "maew"],
  en: "Is that a dog or a cat?",
  less: 8,
  answers: [
    ["นั่น", "คือ", "หมา", "หรือ", "แมว"],
    ["นั่น", "คือ", "แมว", "หรือ", "หมา"]
  ]
},
{
  th: ["คุณ", "กิน", "ไก่", "หรือ", "ปลา"],
  rom: ["kun", "gin", "gài", "rĕu", "bplaa"],
  en: "Do you eat chicken or fish?",
  less: 8,
  answers: [
    ["คุณ", "กิน", "ไก่", "หรือ", "ปลา"],
    ["คุณ", "กิน", "ปลา", "หรือ", "ไก่"]
  ]
},
{
  th: ["นี่", "ไม่ใช่", "รถยนต์"],
  rom: ["nêe", "mâi châi", "rót yon"],
  en: "This is not a car.",
  less: 8
},
{
  th: ["นี่", "ไม่ใช่", "ผลไม้", "นี่", "คือ", "ผัก"],
  rom: ["nêe", "mâi châi", "pŏn-lá-mái", "nêe", "keu", "pàk"],
  en: "This is not a fruit, this is a vegetable.",
  less: 8
},
{
  th: ["มัน", "ไม่ใช่", "หมู", "มัน", "คือ", "เนื้อ"],
  rom: ["man", "mâi châi", "mŏo", "man", "keu", "néuua"],
  en: "It is not pork, it is beef.",
  less: 8
},
{
  th: ["นั่น", "ไม่ใช่", "แท็กซี่"],
  rom: ["nân", "mâi châi", "táek-sêe"],
  en: "That is not a taxi.",
  less: 8
},
{
  th: ["นั่น", "ไม่ใช่", "รถยนต์", "นั่น", "คือ", "รถตุ๊กๆ"],
  rom: ["nân", "mâi châi", "rót yon", "nân", "keu", "rót túk túk"],
  en: "That is not a car, that is a tuk tuk.",
  less: 8
},
{
  th: ["มัน", "ไม่ใช่", "น้ำ", "มัน", "คือ", "เบียร์"],
  rom: ["man", "mâi châi", "náam", "man", "keu", "bia"],
  en: "It is not water, it is beer.",
  less: 8
},
{
  th: ["นั่น", "คือ", "แมว", "ใช่ไหม"],
  rom: ["nân", "keu", "maew", "châi măi"],
  en: "That is a cat, right?",
  less: 8
},
{
  th: ["นี่", "คือ", "เนื้อ", "ใช่ไหม"],
  rom: ["nêe", "keu", "néuua", "châi măi"],
  en: "This is beef, right?",
  less: 8
},
{
  th: ["ผม", "เป็น", "ครู"],
  rom: ["pŏm", "bpen", "kroo"],
  en: "I am a teacher.",
  less: 8
},
{
  th: ["เขา", "อายุ", "30", "ปี", "และ", "เป็น", "คน", "ญี่ปุ่น"],
  rom: ["kăo", "aa-yú", "săam-sìp", "bpee", "láe", "bpen", "kon", "yîi-pùn"],
  en: "He/she is 30 years old and Japanese.",
  less: 8
},
{
  th: ["ฉัน", "เป็น", "พนักงานออฟฟิศ"],
  rom: ["chăn", "bpen", "pá-nák ngaan óf-fít"],
  en: "I am an office worker.",
  less: 8
},
{
  th: ["ผม", "เป็น", "นักธุรกิจ"],
  rom: ["pŏm", "bpen", "nák tú-rá gìt"],
  en: "I am a businessman.",
  less: 8
},
{
  th: ["เขา", "เป็น", "หมอ"],
  rom: ["kăo", "bpen", "mŏr"],
  en: "He/she is a doctor.",
  less: 8
},
{
  th: ["เขา", "ไม่ใช่", "หมอ", "เขา", "เป็น", "ตำรวจ"],
  rom: ["kăo", "mâi châi", "mŏr", "kăo", "bpen", "dtam-rùat"],
  en: "He/she is not a doctor, he/she is a police officer.",
  less: 8
},
{
  th: ["เขา", "เป็น", "ตำรวจ"],
  rom: ["kăo", "bpen", "dtam-rùat"],
  en: "He/she is a police officer.",
  less: 8
},
{
  th: ["ฉัน", "เป็น", "พยาบาล"],
  rom: ["chăn", "bpen", "pá-yaa-baan"],
  en: "I am a nurse.",
  less: 8
},
{
  th: ["ผม", "อายุ", "21", "ปี", "และ", "เป็น", "นักเรียน"],
  rom: ["pŏm", "aa-yú", "yîi-sìp-èt", "bpee", "láe", "bpen", "nák rian"],
  en: "I am 21 years old and a student.",
  less: 8
},
{
  th: ["เขา", "เป็น", "คนขับรถ"],
  rom: ["kăo", "bpen", "kon kàp rót"],
  en: "He/she is a driver.",
  less: 8
},
{
  th: ["คุณ", "ทำงาน", "อะไร"],
  rom: ["kun", "tam ngaan", "à-rai"],
  en: "What do you do for work?",
  less: 8
},
{
  th: ["ผม", "ไม่ใช่", "ครู"],
  rom: ["pŏm", "mâi châi", "kroo"],
  en: "I am not a teacher.",
  less: 8
},
{
  th: ["เขา", "ไม่ใช่", "หมอ", "เขา", "เป็น", "พยาบาล"],
  rom: ["kăo", "mâi châi", "mŏr", "kăo", "bpen", "pá-yaa-baan"],
  en: "He/she is not a doctor, he/she is a nurse.",
  less: 8
},
{
  th: ["เรา", "เป็น", "คน", "อังกฤษ"],
  rom: ["rao", "bpen", "kon", "ang-grìt"],
  en: "We are British.",
  less: 8
},
{
  th: ["ผม", "ชื่อ", "ปีเตอร์", "และ", "เป็น", "โปรแกรมเมอร์"],
  rom: ["pŏm", "chûu", "Peter", "láe", "bpen", "proh-graem-mer"],
  en: "My name is Peter and I am a programmer.",
  less: 8
},
{
  th: ["พวกเขา", "เป็น", "คน", "อเมริกา"],
  rom: ["pûak kăo", "bpen", "kon", "à-may-rí-gaa"],
  en: "They are American.",
  less: 8
},
{
  th: ["เขา", "เป็น", "คน", "ญี่ปุ่น"],
  rom: ["kăo", "bpen", "kon", "yêe-pùn"],
  en: "He/she is Japanese.",
  less: 8
},
{
  th: ["เขา", "ไม่ใช่", "คน", "ไทย"],
  rom: ["kăo", "mâi châi", "kon", "Thai"],
  en: "He/she is not Thai.",
  less: 8
},
{
  th: ["คุณ", "เป็น", "คน", "อังกฤษ", "ใช่ไหม"],
  rom: ["kun", "bpen", "kon", "ang-grìt", "châi măi"],
  en: "You are British, right?",
  less: 8
},
{
  th: ["ผม", "เป็น", "คน", "อังกฤษ", "และ", "เป็น", "ครู"],
  rom: ["pŏm", "bpen", "kon", "ang-grìt", "láe", "bpen", "kroo"],
  en: "I am British and a teacher.",
  less: 8
},
{
  th: ["เขา", "ชื่อ", "เจมส์", "เขา", "เป็น", "นักธุรกิจ"],
  rom: ["kăo", "chûu", "James", "kăo", "bpen", "nák tú-rá gìt"],
  en: "His name is James, he is a businessman.",
  less: 8
},
{
  th: ["เขา", "อายุ", "สี่สิบห้า", "ปี", "และ", "เป็น", "นักธุรกิจ"],
  rom: ["kăo", "aa-yú", "sèe-sìp-hâa", "bpee", "láe", "bpen", "nák tú-rá gìt"],
  en: "He/she is 45 years old and a businessman.",
  less: 8
},
{
  th: ["ผม", "อยู่", "บ้าน"],
  rom: ["pŏm", "yòo", "bâan"],
  en: "I am at home. (male speaker)",
  less: 8
},
{
  th: ["ฉัน", "อยู่", "โรงเรียน", "ค่ะ"],
  rom: ["chăn", "yòo", "rohng rian", "kâ"],
  en: "I am at school. (female speaker)",
  less: 8
},
{
  th: ["เขา", "อยู่", "ออฟฟิศ"],
  rom: ["kăo", "yòo", "óf-fít"],
  en: "He/she is at the office.",
  less: 8
},
{
  th: ["เรา", "อยู่", "ร้านอาหาร"],
  rom: ["rao", "yòo", "ráan aa-hăan"],
  en: "We are at the restaurant.",
  less: 8
},
{
  th: ["คุณ", "อยู่", "ไหน"],
  rom: ["kun", "yòo", "năi"],
  en: "Where are you?",
  less: 8
},
{
  th: ["คุณ", "อยู่", "บ้าน", "ไหม"],
  rom: ["kun", "yòo", "bâan", "măi"],
  en: "Are you at home?",
  less: 8
},
{
  th: ["ผม", "ไม่", "อยู่", "บ้าน"],
  rom: ["pŏm", "mâi", "yòo", "bâan"],
  en: "I am not at home.",
  less: 8
},
{
  th: ["พวกเขา", "ไม่", "อยู่", "บ้าน"],
  rom: ["pûak kăo", "mâi", "yòo", "bâan"],
  en: "They are not at home.",
  less: 8
},
{
  th: ["เขา", "ไม่", "อยู่", "โรงเรียน"],
  rom: ["kăo", "mâi", "yòo", "rohng rian"],
  en: "He/she is not at school.",
  less: 8
},
{
  th: ["ผม", "อยู่", "บ้าน", "และ", "พักผ่อน"],
  rom: ["pŏm", "yòo", "bâan", "láe", "pák pòn"],
  en: "I am at home and relaxing.",
  less: 8
},
{
  th: ["ฉัน", "อยู่", "บ้าน", "และ", "ไม่", "สบาย"],
  rom: ["chăn", "yòo", "bâan", "láe", "mâi", "sà-baai"],
  en: "I am at home and not feeling well.",
  less: 8
},
{
  th: ["เขา", "อยู่", "โรงเรียน", "และ", "เรียน", "ภาษาไทย"],
  rom: ["kăo", "yòo", "rohng rian", "láe", "rian", "paa-săa Thai"],
  en: "He/she is at school and studying Thai.",
  less: 8
},
{
  th: ["คุณ", "อยู่", "บ้าน", "หรือ", "ออฟฟิศ"],
  rom: ["kun", "yòo", "bâan", "rĕu", "óf-fít"],
  en: "Are you at home or at work (office)?",
  less: 8,
  answers: [
    ["คุณ", "อยู่", "บ้าน", "หรือ", "ออฟฟิศ"],
    ["คุณ", "อยู่", "ออฟฟิศ", "หรือ", "บ้าน"]
  ]
},
{
  th: ["ผม", "ชื่อ", "ปีเตอร์", "ผม", "เป็น", "คน", "อังกฤษ"],
  rom: ["pŏm", "chûu", "Peter", "pŏm", "bpen", "kon", "ang-grìt"],
  en: "My name is Peter, I am British.",
  less: 8
},
{
  th: ["เขา", "เป็น", "คน", "ฝรั่งเศส", "และ", "เป็น", "พนักงานออฟฟิศ"],
  rom: ["kăo", "bpen", "kon", "fà-ràng-sèt", "láe", "bpen", "pá-nák ngaan óf-fít"],
  en: "She is French and an office worker.",
  less: 8
},
{
  th: ["เขา", "เป็น", "หมอ", "แต่", "ไม่", "อยู่", "โรงพยาบาล"],
  rom: ["kăo", "bpen", "mŏr", "dtàe", "mâi", "yòo", "rohng pá-yaa-baan"],
  en: "He/she is a doctor but not at the hospital.",
  less: 8
},

// ===== LESSON 9 (Adjectives) =====
{
  th: ["อาหารไทย", "เผ็ด", "มาก"],
  rom: ["aa-hăan Thai", "pèt", "mâak"],
  en: "Thai food is very spicy.",
  less: 9
},
{
  th: ["ผม", "ชอบ", "กิน", "อาหาร", "เผ็ด"],
  rom: ["pŏm", "chôp", "gin", "aa-hăan", "pèt"],
  en: "I like to eat spicy food.",
  less: 9
},
{
  th: ["ฉัน", "ไม่", "ชอบ", "กิน", "อาหาร", "เผ็ด"],
  rom: ["chăn", "mâi", "chôp", "gin", "aa-hăan", "pèt"],
  en: "I don't like to eat spicy food.",
  less: 9
},
{
  th: ["เขา", "ใจดี", "มาก"],
  rom: ["kăo", "jai dee", "mâak"],
  en: "He/she is very kind.",
  less: 9
},
{
  th: ["คน", "ไทย", "ใจดี", "มาก"],
  rom: ["kon", "Thai", "jai dee", "mâak"],
  en: "Thai people are very kind.",
  less: 9
},
{
  th: ["เขา", "หล่อ", "มาก", "ค่ะ"],
  rom: ["kăo", "lòr", "mâak", "kâ"],
  en: "He is very handsome. (female speaker)",
  less: 9
},
{
  th: ["คุณ", "ตลก", "มาก", "ค่ะ"],
  rom: ["kun", "dtà-lòk", "mâak", "kâ"],
  en: "You are very funny. (female speaker)",
  less: 9
},
{
  th: ["เขา", "ไม่", "ตลก"],
  rom: ["kăo", "mâi", "dtà-lòk"],
  en: "He/she is not funny.",
  less: 9
},
{
  th: ["พวกเขา", "ไม่", "ฉลาด"],
  rom: ["pûak kăo", "mâi", "chà-làat"],
  en: "They are not smart.",
  less: 9
},
{
  th: ["เขา", "ฉลาด", "และ", "ตลก"],
  rom: ["kăo", "chà-làat", "láe", "dtà-lòk"],
  en: "He/she is smart and funny.",
  less: 9,
  answers: [
    ["เขา", "ฉลาด", "และ", "ตลก"],
    ["เขา", "ตลก", "และ", "ฉลาด"]
  ]
},
{
  th: ["คุณ", "สวย", "และ", "ใจดี"],
  rom: ["kun", "sŭay", "láe", "jai dee"],
  en: "You are beautiful and kind.",
  less: 9,
  answers: [
    ["คุณ", "สวย", "และ", "ใจดี"],
    ["คุณ", "ใจดี", "และ", "สวย"]
  ]
},
{
  th: ["เขา", "สวย", "แต่", "หยาบคาย"],
  rom: ["kăo", "sŭay", "dtàe", "yàap kaai"],
  en: "She is beautiful, but rude.",
  less: 9
},
{
  th: ["อาหาร", "อร่อย", "แต่", "แพง", "มาก"],
  rom: ["aa-hăan", "à-ròi", "dtàe", "paeng", "mâak"],
  en: "The food is delicious, but very expensive.",
  less: 9
},
{
  th: ["ร้านอาหาร", "นี่", "แพง", "มาก"],
  rom: ["ráan aa-hăan", "nêe", "paeng", "mâak"],
  en: "This restaurant is very expensive.",
  less: 9
},
{
  th: ["อาหาร", "ที่", "ร้าน", "นี่", "อร่อย"],
  rom: ["aa-hăan", "têe", "ráan", "nêe", "à-ròi"],
  en: "The food at this restaurant is delicious.",
  less: 9
},
{
  th: ["ผม", "กิน", "พิซซ่า", "อร่อย", "มาก"],
  rom: ["pŏm", "gin", "pít-sâa", "à-ròi", "mâak"],
  en: "I am eating a very delicious pizza.",
  less: 9
},
{
  th: ["อากาศ", "ที่", "กรุงเทพ", "ร้อน", "มาก"],
  rom: ["aa-gàat", "têe", "krung-têp", "rón", "mâak"],
  en: "The weather in Bangkok is very hot.",
  less: 9
},
{
  th: ["อากาศ", "ที่", "ญี่ปุ่น", "หนาว", "มาก"],
  rom: ["aa-gàat", "têe", "yêe-pùn", "năao", "mâak"],
  en: "The weather in Japan is very cold.",
  less: 9
},
{
  th: ["คุณ", "ชอบ", "อากาศ", "ร้อน", "หรือ", "อากาศ", "หนาว"],
  rom: ["kun", "chôp", "aa-gàat", "rón", "rĕu", "aa-gàat", "năao"],
  en: "Do you like hot weather or cold weather?",
  less: 9,
  answers: [
    ["คุณ", "ชอบ", "อากาศ", "ร้อน", "หรือ", "อากาศ", "หนาว"],
    ["คุณ", "ชอบ", "อากาศ", "หนาว", "หรือ", "อากาศ", "ร้อน"]
  ]
},
{
  th: ["ฉัน", "ชอบ", "ชาเย็น", "มาก"],
  rom: ["chăn", "chôp", "chaa yen", "mâak"],
  en: "I like iced tea very much.",
  less: 9
},
{
  th: ["อาหาร", "ที่", "นี่", "ถูก", "และ", "อร่อย"],
  rom: ["aa-hăan", "têe", "nêe", "tòok", "láe", "à-ròi"],
  en: "The food here is cheap and delicious.",
  less: 9,
  answers: [
    ["อาหาร", "ที่", "นี่", "ถูก", "และ", "อร่อย"],
    ["อาหาร", "ที่", "นี่", "อร่อย", "และ", "ถูก"]
  ]
},
{
  th: ["แมว", "นี่", "น่ารัก", "มาก"],
  rom: ["maew", "nêe", "nâa-rák", "mâak"],
  en: "This cat is very cute.",
  less: 9
},
{
  th: ["เขา", "เป็น", "ผู้หญิง", "สวย"],
  rom: ["kăo", "bpen", "pôo yĭng", "sŭay"],
  en: "She is a beautiful woman.",
  less: 9
},
{
  th: ["เขา", "เป็น", "ผู้ชาย", "ฉลาด"],
  rom: ["kăo", "bpen", "pôo chaai", "chà-làat"],
  en: "He is a smart man.",
  less: 9
},
{
  th: ["เขา", "เป็น", "เด็ก", "น่ารัก"],
  rom: ["kăo", "bpen", "dèk", "nâa-rák"],
  en: "He/she is a cute kid.",
  less: 9
},
{
  th: ["ผม", "ชอบ", "ดูหนัง", "ตลก"],
  rom: ["pŏm", "chôp", "doo năng", "dtà-lòk"],
  en: "I like to watch funny movies.",
  less: 9
},
{
  th: ["เขา", "เป็น", "คน", "ตลก"],
  rom: ["kăo", "bpen", "kon", "dtà-lòk"],
  en: "He/she is a funny person.",
  less: 9
},
{
  th: ["คุณ", "เป็น", "คน", "ใจดี", "มาก"],
  rom: ["kun", "bpen", "kon", "jai dee", "mâak"],
  en: "You are a very kind person.",
  less: 9
},
{
  th: ["เขา", "เป็น", "คน", "ฉลาด", "ใช่ไหม"],
  rom: ["kăo", "bpen", "kon", "chà-làat", "châi măi"],
  en: "He/she is a smart person, right?",
  less: 9
},
{
  th: ["ภาษาไทย", "ยาก", "มาก"],
  rom: ["paa-săa Thai", "yâak", "mâak"],
  en: "Thai language is very difficult.",
  less: 9
},
{
  th: ["บทเรียน", "นี่", "ไม่", "ยาก"],
  rom: ["bòt-rian", "nêe", "mâi", "yâak"],
  en: "This lesson is not difficult.",
  less: 9
},
{
  th: ["ภาษาไทย", "ง่าย", "หรือ", "ยาก"],
  rom: ["paa-săa Thai", "ngâai", "rĕu", "yâak"],
  en: "Is Thai language easy or difficult?",
  less: 9,
  answers: [
    ["ภาษาไทย", "ง่าย", "หรือ", "ยาก"],
    ["ภาษาไทย", "ยาก", "หรือ", "ง่าย"]
  ]
},
{
  th: ["ทำไม", "คุณ", "เรียน", "ภาษาไทย"],
  rom: ["tam-mai", "kun", "rian", "paa-săa Thai"],
  en: "Why do you study Thai?",
  less: 9
},
{
  th: ["ทำไม", "คุณ", "ไม่", "กิน"],
  rom: ["tam-mai", "kun", "mâi", "gin"],
  en: "Why don't you eat?",
  less: 9
},
{
  th: ["ผม", "ชอบ", "เขา", "เพราะ", "เขา", "ตลก", "มาก"],
  rom: ["pŏm", "chôp", "kăo", "prór", "kăo", "dtà-lòk", "mâak"],
  en: "I like him/her because he/she is very funny.",
  less: 9
},
{
  th: ["ผม", "เรียน", "ภาษาไทย", "เพราะ", "ผม", "ชอบ", "ประเทศไทย"],
  rom: ["pŏm", "rian", "paa-săa Thai", "prór", "pŏm", "chôp", "bprà-têt Thai"],
  en: "I study Thai because I like Thailand.",
  less: 9
},
{
  th: ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "ฉลาด", "ตลก", "และ", "สวย"],
  rom: ["pŏm", "chôp", "kun", "prór", "kun", "chà-làat", "dtà-lòk", "láe", "sŭay"],
  en: "I like you because you are smart, funny and beautiful.",
  less: 9,
  answers: [
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "ฉลาด", "ตลก", "และ", "สวย"],
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "ฉลาด", "สวย", "และ", "ตลก"],
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "ตลก", "ฉลาด", "และ", "สวย"],
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "ตลก", "สวย", "และ", "ฉลาด"],
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "สวย", "ฉลาด", "และ", "ตลก"],
    ["ผม", "ชอบ", "คุณ", "เพราะ", "คุณ", "สวย", "ตลก", "และ", "ฉลาด"]
  ]
},
{
  th: ["เธอ", "สวย", "และ", "ใจดี", "มาก"],
  rom: ["ter", "sŭay", "láe", "jai dee", "mâak"],
  en: "You are beautiful and very kind. (informal)",
  less: 9
},
{
  th: ["เธอ", "ดู", "เด็ก", "มาก"],
  rom: ["ter", "doo", "dèk", "mâak"],
  en: "You look very young. (informal)",
  less: 9
},

// ===== LESSON 10 (Market, Taxi) =====
{
  th: ["นี่", "เท่าไหร่", "ครับ"],
  rom: ["nêe", "tâo rài", "kráp"],
  en: "How much is this?",
  less: 10
},
{
  th: ["นั่น", "เท่าไหร่", "คะ"],
  rom: ["nân", "tâo rài", "ká"],
  en: "How much is that?",
  less: 10
},
{
  th: ["เสื้อ", "นี่", "เท่าไหร่", "ครับ"],
  rom: ["sêuua", "nêe", "tâo rài", "kráp"],
  en: "How much is this shirt?",
  less: 10
},
{
  th: ["อันนี้", "แพง", "เกินไป"],
  rom: ["an nêe", "paeng", "gern bpai"],
  en: "This one is too expensive.",
  less: 10
},
{
  th: ["แพง", "เกินไป", "ลด", "ได้", "ไหม", "ครับ"],
  rom: ["paeng", "gern bpai", "lót", "dâai", "măi", "kráp"],
  en: "Too expensive. Can you lower the price?",
  less: 10
},
{
  th: ["ลด", "ได้", "ไหม", "คะ"],
  rom: ["lót", "dâai", "măi", "ká"],
  en: "Can you lower the price?",
  less: 10
},
{
  th: ["สอง", "ร้อย", "ได้", "ไหม", "ครับ"],
  rom: ["sŏng", "rói", "dâai", "măi", "kráp"],
  en: "Can you do 200? (bargaining)",
  less: 10
},
{
  th: ["หนึ่ง", "ร้อย", "ห้าสิบ", "บาท", "ได้", "ไหม", "ครับ"],
  rom: ["nèung", "rói", "hâa-sìp", "bàat", "dâai", "măi", "kráp"],
  en: "Can you do 150 baht? (bargaining)",
  less: 10
},
{
  th: ["แปดสิบ", "บาท", "ได้", "ไหม", "คะ"],
  rom: ["bpàet-sìp", "bàat", "dâai", "măi", "ká"],
  en: "Can you do 80 baht? (bargaining)",
  less: 10
},
{
  th: ["ขอโทษ", "ครับ", "นี่", "เท่าไหร่"],
  rom: ["kŏr tôht", "kráp", "nêe", "tâo rài"],
  en: "Excuse me, how much is this?",
  less: 10
},
{
  th: ["ผม", "เอา", "นี่", "ครับ"],
  rom: ["pŏm", "ao", "nêe", "kráp"],
  en: "I'll take this.",
  less: 10
},
{
  th: ["ฉัน", "เอา", "นั่น", "ค่ะ"],
  rom: ["chăn", "ao", "nân", "kâ"],
  en: "I'll take that.",
  less: 10
},
{
  th: ["อาหาร", "นี่", "แพง", "เกินไป"],
  rom: ["aa-hăan", "nêe", "paeng", "gern bpai"],
  en: "This food is too expensive.",
  less: 10
},
{
  th: ["เสื้อ", "นี่", "ถูก", "และ", "สวย"],
  rom: ["sêuua", "nêe", "tòok", "láe", "sŭay"],
  en: "This shirt is cheap and beautiful.",
  less: 10,
  answers: [
    ["เสื้อ", "นี่", "ถูก", "และ", "สวย"],
    ["เสื้อ", "นี่", "สวย", "และ", "ถูก"]
  ]
},
{
  th: ["ผม", "ลอง", "ได้", "ไหม", "ครับ"],
  rom: ["pŏm", "long", "dâai", "măi", "kráp"],
  en: "Can I try it on?",
  less: 10
},
{
  th: ["ผม", "กิน", "เผ็ด", "ไม่", "ได้"],
  rom: ["pŏm", "gin", "pèt", "mâi", "dâai"],
  en: "I can't eat spicy food.",
  less: 10
},
{
  th: ["ฉัน", "กิน", "เผ็ด", "ได้", "ค่ะ"],
  rom: ["chăn", "gin", "pèt", "dâai", "kâ"],
  en: "I can eat spicy food.",
  less: 10
},
{
  th: ["คุณ", "กิน", "เผ็ด", "ได้", "ไหม"],
  rom: ["kun", "gin", "pèt", "dâai", "măi"],
  en: "Can you eat spicy food?",
  less: 10
},
{
  th: ["ผม", "พูด", "ภาษาไทย", "ได้", "นิดหน่อย"],
  rom: ["pŏm", "pôot", "paa-săa Thai", "dâai", "nít nòi"],
  en: "I can speak Thai a little bit.",
  less: 10
},
{
  th: ["ฉัน", "พูด", "ภาษาอังกฤษ", "ได้", "ค่ะ"],
  rom: ["chăn", "pôot", "paa-săa ang-grìt", "dâai", "kâ"],
  en: "I can speak English.",
  less: 10
},
{
  th: ["เขา", "พูด", "ภาษาไทย", "ไม่", "ได้"],
  rom: ["kăo", "pôot", "paa-săa Thai", "mâi", "dâai"],
  en: "He/she can't speak Thai.",
  less: 10
},
{
  th: ["คุณ", "พูด", "ภาษาอังกฤษ", "ได้", "ไหม"],
  rom: ["kun", "pôot", "paa-săa ang-grìt", "dâai", "măi"],
  en: "Can you speak English?",
  less: 10
},
{
  th: ["ฉัน", "ทำอาหาร", "ได้", "อร่อย", "มาก"],
  rom: ["chăn", "tam aa-hăan", "dâai", "à-ròi", "mâak"],
  en: "I can cook very well.",
  less: 10
},
{
  th: ["ผม", "ไป", "ได้", "ครับ"],
  rom: ["pŏm", "bpai", "dâai", "kráp"],
  en: "I can go.",
  less: 10
},
{
  th: ["ฉัน", "ไป", "ไม่", "ได้", "ค่ะ"],
  rom: ["chăn", "bpai", "mâi", "dâai", "kâ"],
  en: "I can't go.",
  less: 10
},
{
  th: ["เขา", "ไป", "ตลาด", "ไม่", "ได้"],
  rom: ["kăo", "bpai", "dtà-làat", "mâi", "dâai"],
  en: "He/she can't go to the market.",
  less: 10
},
{
  th: ["ไป", "วัด", "เท่าไหร่", "ครับ"],
  rom: ["bpai", "wát", "tâo rài", "kráp"],
  en: "How much to go to the temple?",
  less: 10
},
{
  th: ["ไป", "สนามบิน", "เท่าไหร่", "ครับ"],
  rom: ["bpai", "sà-năam bin", "tâo rài", "kráp"],
  en: "How much to go to the airport?",
  less: 10
},
{
  th: ["ไป", "พัทยา", "เท่าไหร่", "คะ"],
  rom: ["bpai", "Pattaya", "tâo rài", "ká"],
  en: "How much to go to Pattaya?",
  less: 10
},
{
  th: ["ไป", "ตลาด", "เท่าไหร่", "ครับ"],
  rom: ["bpai", "dtà-làat", "tâo rài", "kráp"],
  en: "How much to go to the market?",
  less: 10
},
{
  th: ["แพง", "เกินไป", "สอง", "ร้อย", "บาท", "ได้", "ไหม", "ครับ"],
  rom: ["paeng", "gern bpai", "sŏng", "rói", "bàat", "dâai", "măi", "kráp"],
  en: "Too expensive. Can you do 200 baht?",
  less: 10
},
{
  th: ["เลี้ยวซ้าย", "ครับ"],
  rom: ["líao sáai", "kráp"],
  en: "Turn left.",
  less: 10
},
{
  th: ["ตรงไป", "และ", "เลี้ยวขวา"],
  rom: ["dtrong bpai", "láe", "líao kwăa"],
  en: "Go straight and turn right.",
  less: 10
},
{
  th: ["จอด", "ตรงนี่", "ครับ"],
  rom: ["jòt", "dtrong nêe", "kráp"],
  en: "Stop here.",
  less: 10
},
{
  th: ["จอด", "ตรงนั่น", "ค่ะ"],
  rom: ["jòt", "dtrong nân", "kâ"],
  en: "Stop over there.",
  less: 10
},
{
  th: ["คุณ", "อยู่", "ไหน", "ครับ"],
  rom: ["kun", "yòo", "năi", "kráp"],
  en: "Where are you?",
  less: 10
},
{
  th: ["ผม", "อยู่", "ตลาด", "ครับ"],
  rom: ["pŏm", "yòo", "dtà-làat", "kráp"],
  en: "I am at the market.",
  less: 10
},
{
  th: ["ผม", "ซื้อ", "อาหาร", "และ", "เครื่องดื่ม"],
  rom: ["pŏm", "séu", "aa-hăan", "láe", "krêuang dèum"],
  en: "I buy food and drinks.",
  less: 10,
  answers: [
    ["ผม", "ซื้อ", "อาหาร", "และ", "เครื่องดื่ม"],
    ["ผม", "ซื้อ", "เครื่องดื่ม", "และ", "อาหาร"]
  ]
},
{
  th: ["เขา", "อยู่", "ตลาด", "และ", "ซื้อ", "ผลไม้"],
  rom: ["kăo", "yòo", "dtà-làat", "láe", "séu", "pŏn-lá-mái"],
  en: "He/she is at the market and buying fruit.",
  less: 10
},
{
  th: ["อาหาร", "ที่", "ตลาด", "ถูก", "และ", "อร่อย"],
  rom: ["aa-hăan", "têe", "dtà-làat", "tòok", "láe", "à-ròi"],
  en: "The food at the market is cheap and delicious.",
  less: 10,
  answers: [
    ["อาหาร", "ที่", "ตลาด", "ถูก", "และ", "อร่อย"],
    ["อาหาร", "ที่", "ตลาด", "อร่อย", "และ", "ถูก"]
  ]
},

// ===== LESSON 11 (Possession) =====
{
  th: ["รถ", "ของ", "คุณ", "สวย", "มาก"],
  rom: ["rót", "kŏng", "kun", "sŭay", "mâak"],
  en: "Your car is very beautiful.",
  less: 11
},
{
  th: ["หมา", "ของ", "คุณ", "น่ารัก", "มาก"],
  rom: ["măa", "kŏng", "kun", "nâa-rák", "mâak"],
  en: "Your dog is very cute.",
  less: 11
},
{
  th: ["ครู", "ของ", "ผม", "ดี", "มาก"],
  rom: ["kroo", "kŏng", "pŏm", "dee", "mâak"],
  en: "My teacher is very good.",
  less: 11
},
{
  th: ["แม่", "ของ", "ฉัน", "สวย", "มาก"],
  rom: ["mâe", "kŏng", "chăn", "sŭay", "mâak"],
  en: "My mother is very beautiful.",
  less: 11
},
{
  th: ["พ่อ", "ของ", "คุณ", "ตลก", "มาก"],
  rom: ["pôr", "kŏng", "kun", "dtà-lòk", "mâak"],
  en: "Your father is very funny.",
  less: 11
},
{
  th: ["ลูก", "ของ", "คุณ", "น่ารัก", "มาก"],
  rom: ["lôok", "kŏng", "kun", "nâa-rák", "mâak"],
  en: "Your child is very cute.",
  less: 11
},
{
  th: ["พ่อแม่", "ของ", "ผม", "ฉลาด", "และ", "ใจดี"],
  rom: ["pôr mâe", "kŏng", "pŏm", "chà-làat", "láe", "jai dee"],
  en: "My parents are smart and kind.",
  less: 11,
  answers: [
    ["พ่อแม่", "ของ", "ผม", "ฉลาด", "และ", "ใจดี"],
    ["พ่อแม่", "ของ", "ผม", "ใจดี", "และ", "ฉลาด"]
  ]
},
{
  th: ["โทรศัพท์", "ของ", "ฉัน", "ช้า", "มาก"],
  rom: ["toh-rá-sàp", "kŏng", "chăn", "cháa", "mâak"],
  en: "My phone is very slow.",
  less: 11
},
{
  th: ["รถ", "ของ", "ผม", "เร็ว", "มาก"],
  rom: ["rót", "kŏng", "pŏm", "reo", "mâak"],
  en: "My car is very fast.",
  less: 11
},
{
  th: ["บ้าน", "ของ", "คุณ", "ใหญ่", "และ", "สวย", "มาก"],
  rom: ["bâan", "kŏng", "kun", "yài", "láe", "sŭay", "mâak"],
  en: "Your house is big and very beautiful.",
  less: 11,
  answers: [
    ["บ้าน", "ของ", "คุณ", "ใหญ่", "และ", "สวย", "มาก"],
    ["บ้าน", "ของ", "คุณ", "สวย", "และ", "ใหญ่", "มาก"]
  ]
},
{
  th: ["พูด", "ช้าๆ", "ได้", "ไหม"],
  rom: ["pôot", "cháa cháa", "dâai", "măi"],
  en: "Can you speak slowly?",
  less: 11
},
{
  th: ["นี่", "คือ", "รถ", "ของ", "ผม"],
  rom: ["nêe", "keu", "rót", "kŏng", "pŏm"],
  en: "This is my car.",
  less: 11
},
{
  th: ["นั่น", "คือ", "บ้าน", "ของ", "ฉัน"],
  rom: ["nân", "keu", "bâan", "kŏng", "chăn"],
  en: "That is my house.",
  less: 11
},
{
  th: ["เขา", "เป็น", "แฟน", "ผม"],
  rom: ["kăo", "bpen", "faen", "pŏm"],
  en: "She is my girlfriend.",
  less: 11
},
{
  th: ["นี่", "คือ", "โทรศัพท์", "ของ", "คุณ", "ใช่ไหม"],
  rom: ["nêe", "keu", "toh-rá-sàp", "kŏng", "kun", "châi măi"],
  en: "This is your phone, right?",
  less: 11
},
{
  th: ["กุญแจ", "อยู่", "ที่", "ห้อง", "ของ", "ผม"],
  rom: ["gun-jae", "yòo", "têe", "hông", "kŏng", "pŏm"],
  en: "The key is in my room.",
  less: 11
},
{
  th: ["แม่", "ของ", "ฉัน", "ชอบ", "ทำอาหาร"],
  rom: ["mâe", "kŏng", "chăn", "chôp", "tam aa-hăan"],
  en: "My mother likes to cook.",
  less: 11
},
{
  th: ["แฟน", "ของ", "ผม", "อายุ", "ยี่สิบห้า", "ปี"],
  rom: ["faen", "kŏng", "pŏm", "aa-yú", "yêe-sìp-hâa", "bpee"],
  en: "My girlfriend is 25 years old.",
  less: 11
},
{
  th: ["แมว", "ของ", "ฉัน", "ไม่", "ชอบ", "ดื่ม", "นม"],
  rom: ["maew", "kŏng", "chăn", "mâi", "chôp", "dèum", "nom"],
  en: "My cat doesn't like to drink milk.",
  less: 11
},
{
  th: ["ทำไม", "คุณ", "ชอบ", "งาน", "ของ", "คุณ"],
  rom: ["tam-mai", "kun", "chôp", "ngaan", "kŏng", "kun"],
  en: "Why do you like your job?",
  less: 11,
  answers: [
    ["ทำไม", "คุณ", "ชอบ", "งาน", "ของ", "คุณ"],
    ["คุณ", "ชอบ", "งาน", "ของ", "คุณ", "ทำไม"]
  ]
},
{
  th: ["แฟน", "ของ", "ผม", "มาจาก", "อเมริกา"],
  rom: ["faen", "kŏng", "pŏm", "maa jàak", "à-may-rí-gaa"],
  en: "My girlfriend is from America.",
  less: 11
},
{
  th: ["แฟน", "ของ", "ผม", "เป็น", "คน", "อเมริกา"],
  rom: ["faen", "kŏng", "pŏm", "bpen", "kon", "à-may-rí-gan"],
  en: "My girlfriend is American.",
  less: 11
},
{
  th: ["ภรรยา", "ของ", "ผม", "เป็น", "คน", "ไทย"],
  rom: ["pan-rá-yaa", "kŏng", "pŏm", "bpen", "kon", "Thai"],
  en: "My wife is Thai.",
  less: 11
},
{
  th: ["สามี", "ของ", "ฉัน", "เป็น", "คน", "อเมริกา"],
  rom: ["săa-mee", "kŏng", "chăn", "bpen", "kon", "à-may-rí-gan"],
  en: "My husband is American.",
  less: 11
},
{
  th: ["แม่", "ของ", "ผม", "เป็น", "ครู"],
  rom: ["mâe", "kŏng", "pŏm", "bpen", "kroo"],
  en: "My mother is a teacher.",
  less: 11
},
{
  th: ["พ่อ", "ของ", "ฉัน", "เป็น", "หมอ"],
  rom: ["pôr", "kŏng", "chăn", "bpen", "mŏr"],
  en: "My father is a doctor.",
  less: 11
},
{
  th: ["ผม", "รัก", "ภรรยา", "ของ", "ผม"],
  rom: ["pŏm", "rák", "pan-rá-yaa", "kŏng", "pŏm"],
  en: "I love my wife.",
  less: 11
},
{
  th: ["แม่", "ของ", "คุณ", "อายุ", "เท่าไหร่"],
  rom: ["mâe", "kŏng", "kun", "aa-yú", "tâo rài"],
  en: "How old is your mother?",
  less: 11
},
{
  th: ["แม่", "ของ", "คุณ", "ชื่อ", "อะไร"],
  rom: ["mâe", "kŏng", "kun", "chûu", "à-rai"],
  en: "What is your mother's name?",
  less: 11
},
{
  th: ["พ่อ", "ของ", "คุณ", "ชื่อ", "อะไร"],
  rom: ["pôr", "kŏng", "kun", "chûu", "à-rai"],
  en: "What is your father's name?",
  less: 11
},
{
  th: ["แฟน", "ของ", "ผม", "ชื่อ", "โซฟี"],
  rom: ["faen", "kŏng", "pŏm", "chûu", "Sophie"],
  en: "My girlfriend's name is Sophie.",
  less: 11
},
{
  th: ["แล้ว", "แฟน", "ของ", "คุณ", "ล่ะ"],
  rom: ["láew", "faen", "kŏng", "kun", "lâ"],
  en: "And what about your girlfriend?",
  less: 11
},
{
  th: ["แล้ว", "พ่อ", "ของ", "คุณ", "ล่ะ"],
  rom: ["láew", "pôr", "kŏng", "kun", "lâ"],
  en: "And what about your father?",
  less: 11
},
{
  th: ["เพื่อน", "ของ", "ผม", "ใจดี", "และ", "ตลก"],
  rom: ["pêuan", "kŏng", "pŏm", "jai dee", "láe", "dtà-lòk"],
  en: "My friend is kind and funny.",
  less: 11,
  answers: [
    ["เพื่อน", "ของ", "ผม", "ใจดี", "และ", "ตลก"],
    ["เพื่อน", "ของ", "ผม", "ตลก", "และ", "ใจดี"]
  ]
},
{
  th: ["เพื่อน", "ของ", "ฉัน", "พูด", "ภาษาไทย", "ได้"],
  rom: ["pêuan", "kŏng", "chăn", "pôot", "paa-săa Thai", "dâai"],
  en: "My friend can speak Thai.",
  less: 11
},
{
  th: ["พ่อ", "ของ", "แฟน", "ผม", "อายุ", "แปดสิบ", "ปี"],
  rom: ["pôr", "kŏng", "faen", "pŏm", "aa-yú", "bpàet-sìp", "bpee"],
  en: "My girlfriend's father is 80 years old.",
  less: 11
},
{
  th: ["ผม", "ซื้อ", "ของ", "ที่", "ตลาด"],
  rom: ["pŏm", "séu", "kŏng", "têe", "dtà-làat"],
  en: "I buy stuff at the market.",
  less: 11
},
{
  th: ["ครอบครัว", "ของ", "ผม", "อยู่", "ที่", "อเมริกา"],
  rom: ["krôp krua", "kŏng", "pŏm", "yòo", "têe", "à-may-rí-gaa"],
  en: "My family is in America.",
  less: 11
},
{
  th: ["ลูกชาย", "ของ", "ฉัน", "เป็น", "หมอ"],
  rom: ["lôok chaai", "kŏng", "chăn", "bpen", "mŏr"],
  en: "My son is a doctor.",
  less: 11
},
{
  th: ["น้องสาว", "ของ", "ผม", "สวย", "และ", "ฉลาด"],
  rom: ["nóng săao", "kŏng", "pŏm", "sŭay", "láe", "chà-làat"],
  en: "My younger sister is beautiful and smart.",
  less: 11,
  answers: [
    ["น้องสาว", "ของ", "ผม", "สวย", "และ", "ฉลาด"],
    ["น้องสาว", "ของ", "ผม", "ฉลาด", "และ", "สวย"]
  ]
},
{
  th: ["พี่ชาย", "ของ", "ฉัน", "ชอบ", "กิน", "อาหารไทย"],
  rom: ["pêe chaai", "kŏng", "chăn", "chôp", "gin", "aa-hăan Thai"],
  en: "My elder brother likes to eat Thai food.",
  less: 11
},

// ===== LESSON 12 (Having) =====
{
  th: ["ผม", "มี", "หมา", "สอง", "ตัว"],
  rom: ["pŏm", "mee", "măa", "sŏng", "dtua"],
  en: "I have two dogs.",
  less: 12
},
{
  th: ["ฉัน", "มี", "แมว", "สาม", "ตัว"],
  rom: ["chăn", "mee", "maew", "săam", "dtua"],
  en: "I have three cats.",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "รถยนต์"],
  rom: ["pŏm", "mâi", "mee", "rót yon"],
  en: "I don't have a car.",
  less: 12
},
{
  th: ["คุณ", "มี", "รถยนต์", "ไหม"],
  rom: ["kun", "mee", "rót yon", "măi"],
  en: "Do you have a car?",
  less: 12
},
{
  th: ["ผม", "มี", "รถยนต์", "สอง", "คัน"],
  rom: ["pŏm", "mee", "rót yon", "sŏng", "kan"],
  en: "I have two cars.",
  less: 12
},
{
  th: ["เขา", "มี", "มอเตอร์ไซค์", "หนึ่ง", "คัน"],
  rom: ["kăo", "mee", "motorsai", "nèung", "kan"],
  en: "He/she has one motorbike.",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "เวลา"],
  rom: ["pŏm", "mâi", "mee", "way-laa"],
  en: "I don't have time.",
  less: 12
},
{
  th: ["คุณ", "มี", "เวลา", "ไหม"],
  rom: ["kun", "mee", "way-laa", "măi"],
  en: "Do you have time?",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "เงิน"],
  rom: ["pŏm", "mâi", "mee", "ngern"],
  en: "I don't have money.",
  less: 12
},
{
  th: ["ผม", "มี", "คำถาม"],
  rom: ["pŏm", "mee", "kam-tăam"],
  en: "I have a question.",
  less: 12
},
{
  th: ["คุณ", "มี", "ปากกา", "ไหม", "ครับ"],
  rom: ["kun", "mee", "pàak gaa", "măi", "kráp"],
  en: "Do you have a pen?",
  less: 12
},
{
  th: ["ฉัน", "ไม่", "มี", "กุญแจ"],
  rom: ["chăn", "mâi", "mee", "gun-jae"],
  en: "I don't have the key.",
  less: 12
},
{
  th: ["แฟน", "ของ", "ผม", "มี", "แมว", "สอง", "ตัว"],
  rom: ["faen", "kŏng", "pŏm", "mee", "maew", "sŏng", "dtua"],
  en: "My girlfriend has two cats.",
  less: 12
},
{
  th: ["เพื่อน", "ของ", "ฉัน", "มี", "มอเตอร์ไซค์"],
  rom: ["pêuan", "kŏng", "chăn", "mee", "motorsai"],
  en: "My friend has a motorbike.",
  less: 12
},
{
  th: ["พ่อแม่", "ของ", "ผม", "ไม่", "มี", "เวลา"],
  rom: ["pôr mâe", "kŏng", "pŏm", "mâi", "mee", "way-laa"],
  en: "My parents don't have time.",
  less: 12
},
{
  th: ["คุณ", "มี", "หมา", "หรือ", "แมว", "ไหม"],
  rom: ["kun", "mee", "măa", "rĕu", "maew", "măi"],
  en: "Do you have a dog or a cat?",
  less: 12,
  answers: [
    ["คุณ", "มี", "หมา", "หรือ", "แมว", "ไหม"],
    ["คุณ", "มี", "แมว", "หรือ", "หมา", "ไหม"]
  ]
},
{
  th: ["คุณ", "มี", "แฟน", "ไหม", "คะ"],
  rom: ["kun", "mee", "faen", "măi", "ká"],
  en: "Do you have a boyfriend/girlfriend?",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "รถยนต์", "แต่", "มี", "มอเตอร์ไซค์"],
  rom: ["pŏm", "mâi", "mee", "rót yon", "dtàe", "mee", "motorsai"],
  en: "I don't have a car, but I have a motorbike.",
  less: 12
},
{
  th: ["คุณ", "มี", "หมา", "กี่", "ตัว"],
  rom: ["kun", "mee", "măa", "gèe", "dtua"],
  en: "How many dogs do you have?",
  less: 12
},
{
  th: ["คุณ", "มี", "รถยนต์", "กี่", "คัน"],
  rom: ["kun", "mee", "rót yon", "gèe", "kan"],
  en: "How many cars do you have?",
  less: 12
},
{
  th: ["คุณ", "มี", "ลูก", "กี่", "คน"],
  rom: ["kun", "mee", "lôok", "gèe", "kon"],
  en: "How many children do you have?",
  less: 12
},
{
  th: ["คุณ", "มี", "พี่น้อง", "กี่", "คน"],
  rom: ["kun", "mee", "pêe nóng", "gèe", "kon"],
  en: "How many siblings do you have?",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "พี่น้อง"],
  rom: ["pŏm", "mâi", "mee", "pêe nóng"],
  en: "I don't have any siblings.",
  less: 12
},
{
  th: ["ฉัน", "มี", "พี่ชาย", "หนึ่ง", "คน"],
  rom: ["chăn", "mee", "pêe chaai", "nèung", "kon"],
  en: "I have one elder brother.",
  less: 12
},
{
  th: ["ผม", "มี", "พี่สาว", "สอง", "คน"],
  rom: ["pŏm", "mee", "pêe săao", "sŏng", "kon"],
  en: "I have two elder sisters.",
  less: 12
},
{
  th: ["คุณ", "มี", "หมา", "น่ารัก", "มาก"],
  rom: ["kun", "mee", "măa", "nâa-rák", "mâak"],
  en: "You have a very cute dog.",
  less: 12
},
{
  th: ["ผม", "มี", "นัด"],
  rom: ["pŏm", "mee", "nát"],
  en: "I have an appointment.",
  less: 12
},
{
  th: ["ผม", "มี", "ประชุม", "สำคัญ"],
  rom: ["pŏm", "mee", "prà-chum", "săm-kan"],
  en: "I have an important meeting.",
  less: 12
},
{
  th: ["ขอโทษ", "ครับ", "ผม", "มี", "ประชุม", "สำคัญ"],
  rom: ["kŏr tôht", "kráp", "pŏm", "mee", "prà-chum", "săm-kan"],
  en: "Sorry, I have an important meeting.",
  less: 12
},
{
  th: ["เขา", "มี", "รถยนต์", "สี่", "คัน"],
  rom: ["kăo", "mee", "rót yon", "sèe", "kan"],
  en: "He/she has four cars.",
  less: 12
},
{
  th: ["ทำไม", "เขา", "มี", "รถยนต์", "สี่", "คัน"],
  rom: ["tam-mai", "kăo", "mee", "rót yon", "sèe", "kan"],
  en: "Why does he have four cars?",
  less: 12,
  answers: [
    ["ทำไม", "เขา", "มี", "รถยนต์", "สี่", "คัน"],
    ["เขา", "มี", "รถยนต์", "สี่", "คัน", "ทำไม"]
  ]
},
{
  th: ["เพราะ", "เขา", "รวย", "และ", "ชอบ", "รถยนต์"],
  rom: ["prór", "kăo", "ruay", "láe", "chôp", "rót yon"],
  en: "Because he is rich and likes cars.",
  less: 12
},
{
  th: ["เพื่อน", "ของ", "ฉัน", "มี", "หมา", "น่ารัก", "สาม", "ตัว"],
  rom: ["pêuan", "kŏng", "chăn", "mee", "măa", "nâa-rák", "săam", "dtua"],
  en: "My friend has three very cute dogs.",
  less: 12
},
{
  th: ["พ่อแม่", "ของ", "คุณ", "มี", "รถยนต์", "กี่", "คัน"],
  rom: ["pôr mâe", "kŏng", "kun", "mee", "rót yon", "gèe", "kan"],
  en: "How many cars do your parents have?",
  less: 12
},
{
  th: ["แฟน", "ของ", "ฉัน", "มี", "พี่น้อง", "สอง", "คน"],
  rom: ["faen", "kŏng", "chăn", "mee", "pêe nóng", "sŏng", "kon"],
  en: "My boyfriend has two siblings.",
  less: 12
},
{
  th: ["เรา", "มี", "ลูกชาย", "สอง", "คน", "และ", "ลูกสาว", "หนึ่ง", "คน"],
  rom: ["rao", "mee", "lôok chaai", "sŏng", "kon", "láe", "lôok săao", "nèung", "kon"],
  en: "We have two sons and one daughter.",
  less: 12,
  answers: [
    ["เรา", "มี", "ลูกชาย", "สอง", "คน", "และ", "ลูกสาว", "หนึ่ง", "คน"],
    ["เรา", "มี", "ลูกสาว", "หนึ่ง", "คน", "และ", "ลูกชาย", "สอง", "คน"]
  ]
},
{
  th: ["เรา", "มี", "บ้าน", "หนึ่ง", "หลัง", "และ", "รถยนต์", "สอง", "คัน"],
  rom: ["rao", "mee", "bâan", "nèung", "lăng", "láe", "rót yon", "sŏng", "kan"],
  en: "We have one house and two cars.",
  less: 12,
  answers: [
    ["เรา", "มี", "บ้าน", "หนึ่ง", "หลัง", "และ", "รถยนต์", "สอง", "คัน"],
    ["เรา", "มี", "รถยนต์", "สอง", "คัน", "และ", "บ้าน", "หนึ่ง", "หลัง"]
  ]
},
{
  th: ["เขา", "มี", "รถยนต์", "แพง", "ห้า", "คัน"],
  rom: ["kăo", "mee", "rót yon", "paeng", "hâa", "kan"],
  en: "He/she has five expensive cars.",
  less: 12
},
{
  th: ["พ่อ", "ของ", "ผม", "มี", "เงิน", "มาก"],
  rom: ["pôr", "kŏng", "pŏm", "mee", "ngern", "mâak"],
  en: "My father has a lot of money.",
  less: 12
},
{
  th: ["คุณ", "มี", "ใหญ่", "กว่า", "นี้", "ไหม", "ครับ"],
  rom: ["kun", "mee", "yài", "gwàa", "née", "măi", "kráp"],
  en: "Do you have a bigger size?",
  less: 12
},
{
  th: ["เขา", "เป็น", "คน", "รวย", "และ", "มี", "บ้าน", "ใหญ่"],
  rom: ["kăo", "bpen", "kon", "ruay", "láe", "mee", "bâan", "yài"],
  en: "He/she is a rich person and has a big house.",
  less: 12
},
{
  th: ["ผม", "ไม่", "มี", "เงิน", "และ", "ไม่", "มี", "เวลา"],
  rom: ["pŏm", "mâi", "mee", "ngern", "láe", "mâi", "mee", "way-laa"],
  en: "I don't have money and I don't have time.",
  less: 12
},
{
  th: ["พวกเขา", "มี", "ลูก", "สาม", "คน", "และ", "บ้าน", "ใหญ่"],
  rom: ["pûak kăo", "mee", "lôok", "săam", "kon", "láe", "bâan", "yài"],
  en: "They have three children and a big house.",
  less: 12
},
{
  th: ["พวกเขา", "ไม่", "มี", "รถยนต์", "แต่", "มี", "มอเตอร์ไซค์", "สอง", "คัน"],
  rom: ["pûak kăo", "mâi", "mee", "rót yon", "dtàe", "mee", "motorsai", "sŏng", "kan"],
  en: "They don't have a car, but they have two motorbikes.",
  less: 12
},
{
  th: ["เรา", "มี", "เพื่อน", "ที่", "ญี่ปุ่น", "สาม", "คน"],
  rom: ["rao", "mee", "pêuan", "têe", "yêe-pùn", "săam", "kon"],
  en: "We have three friends in Japan.",
  less: 12
},
{
  th: ["เรา", "ไม่", "มี", "เวลา", "เพราะ", "เรา", "มี", "ประชุม", "สำคัญ"],
  rom: ["rao", "mâi", "mee", "way-laa", "prór", "rao", "mee", "prà-chum", "săm-kan"],
  en: "We don't have time because we have an important meeting.",
  less: 12
},
{
  th: ["เธอ", "มี", "พี่น้อง", "กี่", "คน"],
  rom: ["ter", "mee", "pêe nóng", "gèe", "kon"],
  en: "How many siblings do you have? (informal)",
  less: 12
},
{
  th: ["เธอ", "มี", "หมา", "น่ารัก", "มาก", "และ", "ผม", "ชอบ", "มัน"],
  rom: ["ter", "mee", "măa", "nâa-rák", "mâak", "láe", "pŏm", "chôp", "man"],
  en: "You have a very cute dog and I like it. (informal)",
  less: 12
},

// ===== LESSON 13 (Restaurant, Cafe) =====
{
  th: ["ขอ", "เมนู", "ครับ"],
  rom: ["kŏr", "menu", "kráp"],
  en: "I would like a menu.",
  less: 13
},
{
  th: ["ขอ", "ผัดไทย", "กุ้ง", "ครับ"],
  rom: ["kŏr", "pàt thai", "gûng", "kráp"],
  en: "I would like a shrimp Pad Thai.",
  less: 13
},
{
  th: ["เอา", "ผัดไทย", "ไก่", "ครับ"],
  rom: ["ao", "pàt thai", "gài", "kráp"],
  en: "I want a chicken Pad Thai.",
  less: 13
},
{
  th: ["ขอ", "ต้มยำ", "กุ้ง", "ค่ะ"],
  rom: ["kŏr", "tôm yam", "gûng", "kâ"],
  en: "I would like a shrimp Tom Yum.",
  less: 13
},
{
  th: ["ขอ", "ส้มตำ", "ไม่", "เผ็ด", "ค่ะ"],
  rom: ["kŏr", "sôm-tam", "mâi", "pèt", "kâ"],
  en: "I would like a papaya salad, not spicy.",
  less: 13
},
{
  th: ["ขอ", "ผัดกระเพรา", "หมู", "ไม่", "เผ็ด", "ครับ"],
  rom: ["kŏr", "pàt grà prao", "mŏo", "mâi", "pèt", "kráp"],
  en: "I would like pork stir-fried basil, not spicy.",
  less: 13
},
{
  th: ["เอา", "ผัดกระเพรา", "ไก่", "ครับ"],
  rom: ["ao", "pàt grà prao", "gài", "kráp"],
  en: "I want chicken stir-fried basil.",
  less: 13
},
{
  th: ["ขอ", "ผัดซีอิ๊ว", "กลับบ้าน", "ครับ"],
  rom: ["kŏr", "pàt-see-íw", "glàp bâan", "kráp"],
  en: "I would like a pad see ew for takeaway.",
  less: 13
},
{
  th: ["ขอ", "อัน", "นี้", "ครับ"],
  rom: ["kŏr", "an", "née", "kráp"],
  en: "I would like this one.",
  less: 13
},
{
  th: ["เอา", "อัน", "นั้น", "ค่ะ"],
  rom: ["ao", "an", "nán", "kâ"],
  en: "I would like that one.",
  less: 13
},
{
  th: ["ขอ", "ผัดไทย", "กุ้ง", "กลับบ้าน", "ครับ"],
  rom: ["kŏr", "pàt thai", "gûng", "glàp bâan", "kráp"],
  en: "I would like a shrimp Pad Thai for takeaway.",
  less: 13
},
{
  th: ["ขอ", "ส้มตำ", "สอง", "จาน", "ค่ะ"],
  rom: ["kŏr", "sôm-tam", "sŏng", "jaan", "kâ"],
  en: "I would like two plates of papaya salad.",
  less: 13
},
{
  th: ["เอา", "ก๋วยเตี๋ยว", "สาม", "ชาม", "ครับ"],
  rom: ["ao", "kŭay-tĭeow", "săam", "chaam", "kráp"],
  en: "I want three bowls of boat noodles.",
  less: 13
},
{
  th: ["ขอ", "กาแฟ", "สี่", "แก้ว", "ค่ะ"],
  rom: ["kŏr", "kaa-fae", "sèe", "gâew", "kâ"],
  en: "I would like four cups of coffee.",
  less: 13
},
{
  th: ["เอา", "เบียร์", "สอง", "ขวด", "ครับ"],
  rom: ["ao", "bia", "sŏng", "kùat", "kráp"],
  en: "I want two bottles of beer.",
  less: 13
},
{
  th: ["ขอ", "น้ำ", "หนึ่ง", "ขวด", "ค่ะ"],
  rom: ["kŏr", "náam", "nèung", "kùat", "kâ"],
  en: "I would like one bottle of water.",
  less: 13
},
{
  th: ["เอา", "ไวน์แดง", "สอง", "แก้ว", "ครับ"],
  rom: ["ao", "wai daeng", "sŏng", "gâew", "kráp"],
  en: "I want two glasses of red wine.",
  less: 13
},
{
  th: ["ขอ", "ผัดซีอิ๊ว", "สอง", "จาน", "ครับ"],
  rom: ["kŏr", "pàt-see-íw", "sŏng", "jaan", "kráp"],
  en: "I would like two plates of pad see ew.",
  less: 13
},
{
  th: ["ขอ", "ต้มยำ", "ไก่", "สาม", "ชาม", "ค่ะ"],
  rom: ["kŏr", "tôm yam", "gài", "săam", "chaam", "kâ"],
  en: "I would like three bowls of chicken Tom Yum.",
  less: 13
},
{
  th: ["ขอ", "แกงเขียวหวาน", "ไก่", "ครับ"],
  rom: ["kŏr", "gaeng kĭeow wăan", "gài", "kráp"],
  en: "I would like chicken green curry.",
  less: 13
},
{
  th: ["เอา", "แกงมัสมั่น", "เนื้อ", "สอง", "ถ้วย", "ครับ"],
  rom: ["ao", "gaeng má-sà-màn", "néua", "sŏng", "tûay", "kráp"],
  en: "I want two bowls of beef massaman curry.",
  less: 13
},
{
  th: ["ขอ", "ข้าวเหนียวมะม่วง", "สอง", "จาน", "ค่ะ"],
  rom: ["kŏr", "kâao nĭeow má-mûang", "sŏng", "jaan", "kâ"],
  en: "I would like two plates of mango sticky rice.",
  less: 13
},
{
  th: ["ขอ", "ผัดไทย", "สอง", "กล่อง", "ครับ"],
  rom: ["kŏr", "pàt thai", "sŏng", "glòng", "kráp"],
  en: "I would like two boxes of Pad Thai for takeaway.",
  less: 13
},
{
  th: ["เอา", "ต้มยำ", "ไก่", "สาม", "ถุง", "ครับ"],
  rom: ["ao", "tôm yam", "gài", "săam", "tŭng", "kráp"],
  en: "I want three bags of chicken Tom Yum for takeaway.",
  less: 13
},
{
  th: ["ขอ", "ข้าวเหนียวมะม่วง", "สาม", "กล่อง", "กลับบ้าน", "ค่ะ"],
  rom: ["kŏr", "kâao nĭeow má-mûang", "săam", "glòng", "glàp bâan", "kâ"],
  en: "I would like three boxes of mango sticky rice for takeaway.",
  less: 13
},
{
  th: ["ขอ", "แกงเขียวหวาน", "ไก่", "และ", "ข้าวสวย", "ครับ"],
  rom: ["kŏr", "gaeng kĭeow wăan", "gài", "láe", "kâao sŭay", "kráp"],
  en: "I would like chicken green curry and steamed rice.",
  less: 13,
  answers: [
    ["ขอ", "แกงเขียวหวาน", "ไก่", "และ", "ข้าวสวย", "ครับ"],
    ["ขอ", "ข้าวสวย", "และ", "แกงเขียวหวาน", "ไก่", "ครับ"]
  ]
},
{
  th: ["ขอ", "กาแฟ", "หนึ่ง", "แก้ว", "และ", "น้ำ", "สอง", "ขวด", "ครับ"],
  rom: ["kŏr", "kaa-fae", "nèung", "gâew", "láe", "náam", "sŏng", "kùat", "kráp"],
  en: "I would like one cup of coffee and two bottles of water.",
  less: 13,
  answers: [
    ["ขอ", "กาแฟ", "หนึ่ง", "แก้ว", "และ", "น้ำ", "สอง", "ขวด", "ครับ"],
    ["ขอ", "น้ำ", "สอง", "ขวด", "และ", "กาแฟ", "หนึ่ง", "แก้ว", "ครับ"]
  ]
},
{
  th: ["ขอ", "ผัดไทย", "และ", "ต้มยำ", "ไก่", "ครับ"],
  rom: ["kŏr", "pàt thai", "láe", "tôm yam", "gài", "kráp"],
  en: "I would like a Pad Thai and a chicken Tom Yum.",
  less: 13,
  answers: [
    ["ขอ", "ผัดไทย", "และ", "ต้มยำ", "ไก่", "ครับ"],
    ["ขอ", "ต้มยำ", "ไก่", "และ", "ผัดไทย", "ครับ"]
  ]
},
{
  th: ["เอา", "แฮมเบอร์เกอร์", "และ", "โค้ก", "ครับ"],
  rom: ["ao", "haem ber-gêr", "láe", "kóhk", "kráp"],
  en: "I want a hamburger and a coke.",
  less: 13,
  answers: [
    ["เอา", "แฮมเบอร์เกอร์", "และ", "โค้ก", "ครับ"],
    ["เอา", "โค้ก", "และ", "แฮมเบอร์เกอร์", "ครับ"]
  ]
},
{
  th: ["ขอ", "เอสเพรสโซ", "ร้อน", "ครับ"],
  rom: ["kŏr", "espresso", "rón", "kráp"],
  en: "I would like a hot espresso.",
  less: 13
},
{
  th: ["ขอ", "เอสเพรสโซ", "ร้อน", "กลับบ้าน", "ครับ"],
  rom: ["kŏr", "espresso", "rón", "glàp bâan", "kráp"],
  en: "I would like a hot espresso for takeaway.",
  less: 13
},
{
  th: ["ขอ", "คาปูชิโน่", "เย็น", "สอง", "แก้ว", "ค่ะ"],
  rom: ["kŏr", "cappuccino", "yen", "sŏng", "gâew", "kâ"],
  en: "I would like two cups of iced cappuccino.",
  less: 13
},
{
  th: ["เอา", "คาปูชิโน่", "เย็น", "สอง", "แก้ว", "กลับบ้าน", "ครับ"],
  rom: ["ao", "cappuccino", "yen", "sŏng", "gâew", "glàp bâan", "kráp"],
  en: "I want two cups of iced cappuccino for takeaway.",
  less: 13
},
{
  th: ["ขอ", "กาแฟ", "ร้อน", "หนึ่ง", "แก้ว", "ค่ะ"],
  rom: ["kŏr", "kaa-fae", "rón", "nèung", "gâew", "kâ"],
  en: "I would like one cup of hot coffee.",
  less: 13
},
{
  th: ["ผม", "แพ้", "นม", "ครับ"],
  rom: ["pŏm", "páe", "nom", "kráp"],
  en: "I'm allergic to milk.",
  less: 13
},
{
  th: ["ฉัน", "แพ้", "ถั่วลิสง", "ค่ะ"],
  rom: ["chăn", "páe", "tùa-lí-sŏng", "kâ"],
  en: "I'm allergic to peanuts.",
  less: 13
},
{
  th: ["ผม", "กิน", "เผ็ด", "ไม่", "ได้", "ขอ", "ผัดไทย", "ไม่", "เผ็ด", "ครับ"],
  rom: ["pŏm", "gin", "pèt", "mâi", "dâai", "kŏr", "pàt thai", "mâi", "pèt", "kráp"],
  en: "I can't eat spicy food. I would like a Pad Thai, not spicy.",
  less: 13
},
{
  th: ["ขอโทษ", "ครับ", "ขอ", "เมนู", "หน่อย", "ครับ"],
  rom: ["kŏr tôht", "kráp", "kŏr", "menu", "nòi", "kráp"],
  en: "Excuse me, may I have a menu please.",
  less: 13
},
{
  th: ["อาหาร", "ที่", "ร้าน", "นี่", "อร่อย", "และ", "ไม่", "แพง"],
  rom: ["aa-hăan", "têe", "ráan", "nêe", "à-ròi", "láe", "mâi", "paeng"],
  en: "The food at this restaurant is delicious and not expensive.",
  less: 13,
  answers: [
    ["อาหาร", "ที่", "ร้าน", "นี่", "อร่อย", "และ", "ไม่", "แพง"],
    ["อาหาร", "ที่", "ร้าน", "นี่", "ไม่", "แพง", "และ", "อร่อย"]
  ]
},
{
  th: ["ผม", "ชอบ", "กิน", "ผัดกระเพรา", "หมู", "มาก", "ครับ"],
  rom: ["pŏm", "chôp", "gin", "pàt grà prao", "mŏo", "mâak", "kráp"],
  en: "I really like to eat pork stir-fried basil.",
  less: 13
},
{
  th: ["คุณ", "ชอบ", "กิน", "อาหาร", "ไทย", "เผ็ด", "ไหม", "คะ"],
  rom: ["kun", "chôp", "gin", "aa-hăan", "Thai", "pèt", "măi", "ká"],
  en: "Do you like to eat spicy Thai food?",
  less: 13
},

// ===== LESSON 14 (Future Tense) =====
{
  th: ["พรุ่งนี้", "ผม", "จะ", "ไปเยี่ยม", "พ่อแม่"],
  rom: ["prûng-née", "pŏm", "jà", "bpai yîam", "pôr mâe"],
  en: "Tomorrow I will visit my parents.",
  less: 14,
  answers: [
    ["พรุ่งนี้", "ผม", "จะ", "ไปเยี่ยม", "พ่อแม่"],
    ["ผม", "จะ", "ไปเยี่ยม", "พ่อแม่", "พรุ่งนี้"]
  ]
},
{
  th: ["คืนนี้", "ฉัน", "จะ", "โทรหา", "แฟน"],
  rom: ["keun née", "chăn", "jà", "toh hăa", "faen"],
  en: "Tonight I will call my boyfriend.",
  less: 14,
  answers: [
    ["คืนนี้", "ฉัน", "จะ", "โทรหา", "แฟน"],
    ["ฉัน", "จะ", "โทรหา", "แฟน", "คืนนี้"]
  ]
},
{
  th: ["ปีหน้า", "ผม", "จะ", "ไป", "ประเทศไทย", "กับ", "ครอบครัว"],
  rom: ["bpee nâa", "pŏm", "jà", "bpai", "bprà-têt Thai", "găp", "krôp krua"],
  en: "Next year I will go to Thailand with my family.",
  less: 14,
  answers: [
    ["ปีหน้า", "ผม", "จะ", "ไป", "ประเทศไทย", "กับ", "ครอบครัว"],
    ["ผม", "จะ", "ไป", "ประเทศไทย", "กับ", "ครอบครัว", "ปีหน้า"]
  ]
},
{
  th: ["เดือนหน้า", "ฉัน", "จะ", "ไปเยี่ยม", "เพื่อน", "ที่", "ญี่ปุ่น"],
  rom: ["deuan nâa", "chăn", "jà", "bpai yîam", "pêuan", "têe", "yêe-pùn"],
  en: "Next month I will visit my friends in Japan.",
  less: 14,
  answers: [
    ["เดือนหน้า", "ฉัน", "จะ", "ไปเยี่ยม", "เพื่อน", "ที่", "ญี่ปุ่น"],
    ["ฉัน", "จะ", "ไปเยี่ยม", "เพื่อน", "ที่", "ญี่ปุ่น", "เดือนหน้า"]
  ]
},
{
  th: ["คุณ", "จะ", "ทำ", "อะไร", "คืนนี้"],
  rom: ["kun", "jà", "tam", "à-rai", "keun née"],
  en: "What will you do tonight?",
  less: 14,
  answers: [
    ["คุณ", "จะ", "ทำ", "อะไร", "คืนนี้"],
    ["คืนนี้", "คุณ", "จะ", "ทำ", "อะไร"]
  ]
},
{
  th: ["คุณ", "จะ", "ไป", "พัทยา", "กับ", "ใคร"],
  rom: ["kun", "jà", "bpai", "Pattaya", "găp", "krai"],
  en: "Who will you go to Pattaya with?",
  less: 14
},
{
  th: ["ฉัน", "จะ", "ไป", "คนเดียว"],
  rom: ["chăn", "jà", "bpai", "kon dieow"],
  en: "I will go alone.",
  less: 14
},
{
  th: ["เสาร์อาทิตย์", "นี้", "คุณ", "จะ", "ทำ", "อะไร"],
  rom: ["săo aa-tít", "née", "kun", "jà", "tam", "à-rai"],
  en: "What will you do this weekend?",
  less: 14
},
{
  th: ["ผม", "จะ", "ไป", "พักผ่อน", "และ", "กิน", "อาหารทะเล"],
  rom: ["pŏm", "jà", "bpai", "pák pòn", "láe", "gin", "aa hăan tá-lay"],
  en: "I will go relax and eat seafood.",
  less: 14,
  answers: [
    ["ผม", "จะ", "ไป", "พักผ่อน", "และ", "กิน", "อาหารทะเล"],
    ["ผม", "จะ", "กิน", "อาหารทะเล", "และ", "ไป", "พักผ่อน"]
  ]
},
{
  th: ["อาทิตย์หน้า", "ฉัน", "จะ", "ไป", "ภูเก็ต", "กับ", "แฟน"],
  rom: ["aa-tít nâa", "chăn", "jà", "bpai", "Phuket", "găp", "faen"],
  en: "Next week I will go to Phuket with my girlfriend.",
  less: 14,
  answers: [
    ["อาทิตย์หน้า", "ฉัน", "จะ", "ไป", "ภูเก็ต", "กับ", "แฟน"],
    ["ฉัน", "จะ", "ไป", "ภูเก็ต", "กับ", "แฟน", "อาทิตย์หน้า"]
  ]
},
{
  th: ["ผม", "จะ", "ไปเจอ", "เพื่อน", "และ", "ดื่ม", "เบียร์"],
  rom: ["pŏm", "jà", "bpai jer", "pêuan", "láe", "dèum", "bia"],
  en: "I will go meet my friends and drink beer.",
  less: 14
},
{
  th: ["พรุ่งนี้", "ผม", "จะ", "ซื้อ", "รถ", "ใหม่"],
  rom: ["prûng-née", "pŏm", "jà", "séu", "rót", "mài"],
  en: "Tomorrow I will buy a new car.",
  less: 14,
  answers: [
    ["พรุ่งนี้", "ผม", "จะ", "ซื้อ", "รถ", "ใหม่"],
    ["ผม", "จะ", "ซื้อ", "รถ", "ใหม่", "พรุ่งนี้"]
  ]
},
{
  th: ["ฉัน", "จะ", "ไม่", "ไป", "ปาร์ตี้", "คืนนี้"],
  rom: ["chăn", "jà", "mâi", "bpai", "paa-têe", "keun née"],
  en: "I won't go to the party tonight.",
  less: 14,
  answers: [
    ["ฉัน", "จะ", "ไม่", "ไป", "ปาร์ตี้", "คืนนี้"],
    ["คืนนี้", "ฉัน", "จะ", "ไม่", "ไป", "ปาร์ตี้"]
  ]
},
{
  th: ["ผม", "จะ", "ส่งข้อความหา", "คุณ", "พรุ่งนี้"],
  rom: ["pŏm", "jà", "sòng kòr kwaam hăa", "kun", "prûng-née"],
  en: "I will text you tomorrow.",
  less: 14,
  answers: [
    ["ผม", "จะ", "ส่งข้อความหา", "คุณ", "พรุ่งนี้"],
    ["พรุ่งนี้", "ผม", "จะ", "ส่งข้อความหา", "คุณ"]
  ]
},
{
  th: ["เพื่อน", "ของ", "ผม", "จะ", "มา", "ปาร์ตี้"],
  rom: ["pêuan", "kŏng", "pŏm", "jà", "maa", "paa-têe"],
  en: "My friends will come to the party.",
  less: 14
},
{
  th: ["แฟน", "ของ", "ผม", "จะ", "มาเยี่ยม", "ผม", "พรุ่งนี้"],
  rom: ["faen", "kŏng", "pŏm", "jà", "maa yîam", "pŏm", "prûng-née"],
  en: "My girlfriend will come visit me tomorrow.",
  less: 14,
  answers: [
    ["แฟน", "ของ", "ผม", "จะ", "มาเยี่ยม", "ผม", "พรุ่งนี้"],
    ["พรุ่งนี้", "แฟน", "ของ", "ผม", "จะ", "มาเยี่ยม", "ผม"]
  ]
},
{
  th: ["วันศุกร์", "หน้า", "ผม", "จะ", "ไปเจอ", "เพื่อน"],
  rom: ["wan sùk", "nâa", "pŏm", "jà", "bpai jer", "pêuan"],
  en: "Next Friday I will meet my friends.",
  less: 14,
  answers: [
    ["วันศุกร์", "หน้า", "ผม", "จะ", "ไปเจอ", "เพื่อน"],
    ["ผม", "จะ", "ไปเจอ", "เพื่อน", "วันศุกร์", "หน้า"]
  ]
},
{
  th: ["วันอาทิตย์", "ฉัน", "จะ", "พักผ่อน", "อยู่", "บ้าน"],
  rom: ["wan aa-tít", "chăn", "jà", "pák pòn", "yòo", "bâan"],
  en: "On Sunday I will relax at home.",
  less: 14,
  answers: [
    ["วันอาทิตย์", "ฉัน", "จะ", "พักผ่อน", "อยู่", "บ้าน"],
    ["ฉัน", "จะ", "พักผ่อน", "อยู่", "บ้าน", "วันอาทิตย์"]
  ]
},
{
  th: ["พรุ่งนี้", "เช้า", "ผม", "จะ", "ไป", "วิ่ง"],
  rom: ["prûng-née", "cháo", "pŏm", "jà", "bpai", "wîng"],
  en: "Tomorrow morning I will go for a run.",
  less: 14,
  answers: [
    ["พรุ่งนี้", "เช้า", "ผม", "จะ", "ไป", "วิ่ง"],
    ["ผม", "จะ", "ไป", "วิ่ง", "พรุ่งนี้", "เช้า"]
  ]
},
{
  th: ["คืนพรุ่งนี้", "ฉัน", "จะ", "ออกกำลังกาย", "ที่", "บ้าน"],
  rom: ["keun prûng-née", "chăn", "jà", "òk gam-lang gaai", "têe", "bâan"],
  en: "Tomorrow night I will exercise at home.",
  less: 14,
  answers: [
    ["คืนพรุ่งนี้", "ฉัน", "จะ", "ออกกำลังกาย", "ที่", "บ้าน"],
    ["ฉัน", "จะ", "ออกกำลังกาย", "ที่", "บ้าน", "คืนพรุ่งนี้"]
  ]
},
{
  th: ["ผู้หญิง", "คน", "นั้น", "คือ", "ใคร"],
  rom: ["pôo yĭng", "kon", "nán", "keu", "krai"],
  en: "Who is that woman?",
  less: 14
},
{
  th: ["เขา", "คือ", "แฟน", "ใหม่", "ของ", "ปีเตอร์"],
  rom: ["kăo", "keu", "faen", "mài", "kŏng", "Peter"],
  en: "She is Peter's new girlfriend.",
  less: 14
},
{
  th: ["ผู้ชาย", "คน", "นั้น", "หล่อ", "มาก"],
  rom: ["pôo chaai", "kon", "nán", "lòr", "mâak"],
  en: "That man is very handsome.",
  less: 14
},
{
  th: ["หมา", "ตัว", "นั้น", "น่ารัก", "มาก"],
  rom: ["măa", "dtua", "nán", "nâa-rák", "mâak"],
  en: "That dog is very cute.",
  less: 14
},
{
  th: ["รถ", "คัน", "นี้", "แพง", "มาก"],
  rom: ["rót", "kan", "née", "paeng", "mâak"],
  en: "This car is very expensive.",
  less: 14
},
{
  th: ["เด็ก", "คน", "นั้น", "เสียงดัง", "มาก"],
  rom: ["dèk", "kon", "nán", "sĭang dang", "mâak"],
  en: "That kid is very loud.",
  less: 14
},
{
  th: ["ผู้ชาย", "คน", "นั้น", "น่ารำคาญ", "มาก"],
  rom: ["pôo chaai", "kon", "nán", "nâa ram-kaan", "mâak"],
  en: "That man is very annoying.",
  less: 14
},
{
  th: ["ผม", "เรียน", "ภาษาไทย", "เพราะ", "ปีหน้า", "ผม", "จะ", "ไป", "ประเทศไทย"],
  rom: ["pŏm", "rian", "paa-săa Thai", "prór", "bpee nâa", "pŏm", "jà", "bpai", "bprà-têt Thai"],
  en: "I study Thai because next year I will go to Thailand.",
  less: 14
},
{
  th: ["คืนนี้", "ฉัน", "จะ", "เรียน", "ภาษาอังกฤษ", "และ", "ดูหนัง"],
  rom: ["keun née", "chăn", "jà", "rian", "paa-săa ang-grìt", "láe", "doo năng"],
  en: "Tonight I will study English and watch movies.",
  less: 14,
  answers: [
    ["คืนนี้", "ฉัน", "จะ", "เรียน", "ภาษาอังกฤษ", "และ", "ดูหนัง"],
    ["ฉัน", "จะ", "เรียน", "ภาษาอังกฤษ", "และ", "ดูหนัง", "คืนนี้"],
    ["คืนนี้", "ฉัน", "จะ", "ดูหนัง", "และ", "เรียน", "ภาษาอังกฤษ"],
    ["ฉัน", "จะ", "ดูหนัง", "และ", "เรียน", "ภาษาอังกฤษ", "คืนนี้"]
  ]
},
{
  th: ["เรา", "จะ", "ดื่ม", "เบียร์", "และ", "ดู", "ฟุตบอล"],
  rom: ["rao", "jà", "dèum", "bia", "láe", "doo", "fút bon"],
  en: "We will drink beer and watch football.",
  less: 14,
  answers: [
    ["เรา", "จะ", "ดื่ม", "เบียร์", "และ", "ดู", "ฟุตบอล"],
    ["เรา", "จะ", "ดู", "ฟุตบอล", "และ", "ดื่ม", "เบียร์"]
  ]
},
{
  th: ["เสาร์", "นี้", "ฉัน", "จะ", "ไป", "คอนเสิร์ต", "กับ", "แฟน"],
  rom: ["săo", "née", "chăn", "jà", "bpai", "kon-sèrt", "găp", "faen"],
  en: "This Saturday I will go to a concert with my boyfriend.",
  less: 14,
  answers: [
    ["เสาร์", "นี้", "ฉัน", "จะ", "ไป", "คอนเสิร์ต", "กับ", "แฟน"],
    ["ฉัน", "จะ", "ไป", "คอนเสิร์ต", "กับ", "แฟน", "เสาร์", "นี้"]
  ]
},
{
  th: ["เดือนหน้า", "ผม", "จะ", "ไป", "อิตาลี", "กับ", "ภรรยา"],
  rom: ["deuan nâa", "pŏm", "jà", "bpai", "Italy", "găp", "pan-rá-yaa"],
  en: "Next month I will go to Italy with my wife.",
  less: 14,
  answers: [
    ["เดือนหน้า", "ผม", "จะ", "ไป", "อิตาลี", "กับ", "ภรรยา"],
    ["ผม", "จะ", "ไป", "อิตาลี", "กับ", "ภรรยา", "เดือนหน้า"]
  ]
},
{
  th: ["พรุ่งนี้", "ผม", "จะ", "โทรหา", "แม่", "ของ", "ผม"],
  rom: ["prûng-née", "pŏm", "jà", "toh hăa", "mâe", "kŏng", "pŏm"],
  en: "Tomorrow I will call my mother.",
  less: 14,
  answers: [
    ["พรุ่งนี้", "ผม", "จะ", "โทรหา", "แม่", "ของ", "ผม"],
    ["ผม", "จะ", "โทรหา", "แม่", "ของ", "ผม", "พรุ่งนี้"]
  ]
},
{
  th: ["ผม", "จะ", "ไม่", "ทำงาน", "วันเสาร์", "และ", "วันอาทิตย์"],
  rom: ["pŏm", "jà", "mâi", "tam ngaan", "wan săo", "láe", "wan aa-tít"],
  en: "I won't work on Saturday and Sunday.",
  less: 14,
  answers: [
    ["ผม", "จะ", "ไม่", "ทำงาน", "วันเสาร์", "และ", "วันอาทิตย์"],
    ["ผม", "จะ", "ไม่", "ทำงาน", "วันอาทิตย์", "และ", "วันเสาร์"]
  ]
},
{
  th: ["วันจันทร์", "หน้า", "ฉัน", "จะ", "มี", "ประชุม", "สำคัญ"],
  rom: ["wan jan", "nâa", "chăn", "jà", "mee", "prà-chum", "săm-kan"],
  en: "Next Monday I will have an important meeting.",
  less: 14,
  answers: [
    ["วันจันทร์", "หน้า", "ฉัน", "จะ", "มี", "ประชุม", "สำคัญ"],
    ["ฉัน", "จะ", "มี", "ประชุม", "สำคัญ", "วันจันทร์", "หน้า"]
  ]
},
{
  th: ["ผม", "จะ", "เรียน", "ภาษาไทย", "อยู่", "บ้าน", "คืนนี้"],
  rom: ["pŏm", "jà", "rian", "paa-săa Thai", "yòo", "bâan", "keun née"],
  en: "I will study Thai at home tonight.",
  less: 14,
  answers: [
    ["ผม", "จะ", "เรียน", "ภาษาไทย", "อยู่", "บ้าน", "คืนนี้"],
    ["คืนนี้", "ผม", "จะ", "เรียน", "ภาษาไทย", "อยู่", "บ้าน"]
  ]
},
{
  th: ["พรุ่งนี้", "ผม", "จะ", "ไป", "ตลาด", "และ", "ซื้อ", "ผลไม้"],
  rom: ["prûng-née", "pŏm", "jà", "bpai", "dtà-làat", "láe", "séu", "pŏn-lá-mái"],
  en: "Tomorrow I will go to the market and buy fruit.",
  less: 14
},
{
  th: ["เขา", "จะ", "ไม่", "มา", "เพราะ", "เขา", "ไม่", "สบาย"],
  rom: ["kăo", "jà", "mâi", "maa", "prór", "kăo", "mâi", "sà-baai"],
  en: "He/she won't come because he/she is not feeling well.",
  less: 14
},
{
  th: ["คืนนี้", "คุณ", "จะ", "ไปเจอ", "เพื่อน", "ที่ไหน"],
  rom: ["keun née", "kun", "jà", "bpai jer", "pêuan", "têe năi"],
  en: "Where will you meet your friends tonight?",
  less: 14,
  answers: [
    ["คืนนี้", "คุณ", "จะ", "ไปเจอ", "เพื่อน", "ที่ไหน"],
    ["คุณ", "จะ", "ไปเจอ", "เพื่อน", "ที่ไหน", "คืนนี้"]
  ]
},
{
  th: ["อาทิตย์หน้า", "ผม", "จะ", "ไป", "กรุงเทพ", "กับ", "เพื่อน"],
  rom: ["aa-tít nâa", "pŏm", "jà", "bpai", "krung-thep", "găp", "pêuan"],
  en: "Next week I will go to Bangkok with my friends.",
  less: 14,
  answers: [
    ["อาทิตย์หน้า", "ผม", "จะ", "ไป", "กรุงเทพ", "กับ", "เพื่อน"],
    ["ผม", "จะ", "ไป", "กรุงเทพ", "กับ", "เพื่อน", "อาทิตย์หน้า"]
  ]
},
{
  th: ["คุณ", "จะ", "คุย", "กับ", "ใคร"],
  rom: ["kun", "jà", "kui", "găp", "krai"],
  en: "Who will you talk with?",
  less: 14
},
{
  th: ["พรุ่งนี้", "เช้า", "ผม", "จะ", "ไปเจอ", "หมอ"],
  rom: ["prûng-née", "cháo", "pŏm", "jà", "bpai jer", "mŏr"],
  en: "Tomorrow morning I will go see the doctor.",
  less: 14,
  answers: [
    ["พรุ่งนี้", "เช้า", "ผม", "จะ", "ไปเจอ", "หมอ"],
    ["ผม", "จะ", "ไปเจอ", "หมอ", "พรุ่งนี้", "เช้า"]
  ]
},
{
  th: ["เธอ", "จะ", "มาเยี่ยม", "ผม", "อาทิตย์หน้า", "ใช่ไหม"],
  rom: ["ter", "jà", "maa yîam", "pŏm", "aa-tít nâa", "châi măi"],
  en: "You will come visit me next week, right?",
  less: 14
}
];
