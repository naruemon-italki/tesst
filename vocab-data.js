/*
  © 2026 Naruemon Rintha. All rights reserved.
  Original educational work created by Naruemon Rintha (Kroo Apple).
  Unauthorized reproduction, modification, or redistribution is prohibited.

  ---------------------------------------------------------------------------
  VOCABULARY & CHARACTER DIALOGUE DATA
  This file defines two globals used by index.html:
    • VOCAB           — array of all vocabulary entries (course + extra pack)
    • CHARACTER_LINES — CPU opponent dialogue lines, keyed by character id
  It MUST be loaded (plain <script src>) BEFORE the main game script in
  index.html, because the game builds COURSE_VOCAB / CHARACTERS / LEVELS from
  these at load time. To add or edit words, edit this file only.
  ---------------------------------------------------------------------------
*/

const VOCAB = [
  // Phrases
  { en: "Hello.", th: "สวัสดี", rom: "sà-wàt-dee", cat: "Phrases", lesson: 1 },
  { en: "See you.", th: "เจอกัน", rom: "jer gan", cat: "Phrases", lesson: 1 },
  { en: "Yes.", th: "ใช่", rom: "châi", cat: "Phrases", lesson: 2 },
  { en: "No.", th: "ไม่", rom: "mâi", cat: "Phrases", lesson: 2 },
  { en: "Thank you.", th: "ขอบคุณ", rom: "kòp kun (kráp/kâ)", cat: "Phrases", lesson: 1 },
  { en: "Sorry.", th: "ขอโทษ", rom: "kŏr tôht (kráp/kâ)", cat: "Phrases", lesson: 4 },
  { en: "Nice to meet you.", th: "ยินดีที่ได้รู้จัก", rom: "yin dee têe dâai róo jàk", cat: "Phrases", lesson: 1 },
  { en: "You are welcome.", th: "ยินดี", rom: "yin dee", cat: "Phrases", lesson: 4 },
  { en: "Are you fine?", th: "สบายดีไหม", rom: "sà-baai dee măi", cat: "Phrases", lesson: 2 },
  { en: "I'm fine.", th: "สบายดี", rom: "sà-baai dee", cat: "Phrases", lesson: 2 },
  { en: "What? / Pardon?", th: "อะไรนะ", rom: "à-rai ná (kráp/ká)", cat: "Phrases", lesson: 3 },
  { en: "Where?", th: "ที่ไหน", rom: "têe năi", cat: "Phrases", lesson: 2 },
  { en: "And you?", th: "แล้วคุณล่ะ", rom: "láew kun lâ", cat: "Phrases", lesson: 2 },
  { en: "Where are you from?", th: "คุณมาจากที่ไหน", rom: "kun maa jàak têe năi", cat: "Phrases", lesson: 2 },
  { en: "How old are you?", th: "คุณอายุเท่าไร", rom: "kun aa-yú tâo rai", cat: "Phrases", lesson: 4 },
  { en: "Very good.", th: "ดีมาก", rom: "dee mâak", cat: "Phrases", lesson: 1 },
  { en: "What's your name?", th: "คุณชื่ออะไร", rom: "kun chûu à rai", cat: "Phrases", lesson: 1 },
  { en: "to use the phone", th: "เล่นโทรศัพท์", rom: "lên toh-rá-sàp", cat: "Phrases", lesson: 6 },
  { en: "a little bit", th: "นิดหน่อย", rom: "nít nòi", cat: "Adverbs", lesson: 6 },
  { en: "Just a moment.", th: "แป๊บหนึ่ง", rom: "bpáep nèung", cat: "Phrases", lesson: 6 },
  { en: "Really?", th: "จริงเหรอ", rom: "jing rŏr", cat: "Phrases", lesson: 7 },
  { en: "Really!", th: "จริงๆ", rom: "jing jing", cat: "Phrases", lesson: 7 },
  { en: "I don't like.", th: "ไม่ชอบ", rom: "mâi chôp", cat: "Phrases", lesson: 7 },
  { en: "I don't understand.", th: "ไม่เข้าใจ", rom: "mâi kâo jai", cat: "Phrases", lesson: 7 },
  { en: "Do you understand?", th: "เข้าใจไหม", rom: "kâo jai măi", cat: "Phrases", lesson: 7 },
  { en: "I don't know.", th: "ไม่รู้", rom: "mâi róo", cat: "Phrases", lesson: 7 },
  { en: "Do you know?", th: "รู้ไหม", rom: "róo măi", cat: "Phrases", lesson: 7 },
  { en: "What's the matter?", th: "เป็นอะไร", rom: "bpen à-rai", cat: "Phrases", lesson: 8 },
  { en: "Why?", th: "ทำไม", rom: "tam-mai", cat: "Phrases", lesson: 9 },
  { en: "likewise", th: "เช่นกัน", rom: "chên gan", cat: "Phrases", lesson: 9 },
  { en: "here", th: "ที่นี่", rom: "têe nêe", cat: "Phrases", lesson: 9 },
  { en: "there", th: "ที่นั่น", rom: "têe nân", cat: "Phrases", lesson: 9 },
  { en: "it's okay; no problem", th: "ไม่เป็นไร", rom: "mâi bpen rai", cat: "Phrases", lesson: 9 },
  { en: "Right?", th: "ใช่ไหม", rom: "châi măi", cat: "Phrases", lesson: 6 },
  { en: "no; not correct; is not", th: "ไม่ใช่", rom: "mâi châi", cat: "Phrases", lesson: 8 },
  { en: "very", th: "มาก", rom: "mâak", cat: "Phrases", lesson: 9 },

  // Pronouns
  { en: "I (male)", th: "ผม", rom: "pŏm", cat: "Pronouns", lesson: 1 },
  { en: "I (female)", th: "ฉัน", rom: "chăn", cat: "Pronouns", lesson: 1 },
  { en: "I (female, formal)", th: "ดิฉัน", rom: "dì-chăn", cat: "Pronouns", lesson: 1 },
  { en: "you", th: "คุณ", rom: "kun", cat: "Pronouns", lesson: 1 },
  { en: "he; she", th: "เขา", rom: "kăo", cat: "Pronouns", lesson: 2 },
  { en: "it", th: "มัน", rom: "man", cat: "Pronouns", lesson: 2 },
  { en: "us", th: "เรา", rom: "rao", cat: "Pronouns", lesson: 2 },
  { en: "they", th: "พวกเขา", rom: "pûak kăo", cat: "Pronouns", lesson: 5 },
  { en: "you (informal); her", th: "เธอ", rom: "ter", cat: "Pronouns", lesson: 9 },

  // Numbers
  { en: "zero (0)", th: "ศูนย์", rom: "sŏon", cat: "Numbers", lesson: 3 },
  { en: "one (1)", th: "หนึ่ง", rom: "nèung", cat: "Numbers", lesson: 3 },
  { en: "two (2)", th: "สอง", rom: "sŏng", cat: "Numbers", lesson: 3 },
  { en: "three (3)", th: "สาม", rom: "săam", cat: "Numbers", lesson: 3 },
  { en: "four (4)", th: "สี่", rom: "sèe", cat: "Numbers", lesson: 3 },
  { en: "five (5)", th: "ห้า", rom: "hâa", cat: "Numbers", lesson: 3 },
  { en: "six (6)", th: "หก", rom: "hòk", cat: "Numbers", lesson: 3 },
  { en: "seven (7)", th: "เจ็ด", rom: "jèt", cat: "Numbers", lesson: 3 },
  { en: "eight (8)", th: "แปด", rom: "bpàet", cat: "Numbers", lesson: 3 },
  { en: "nine (9)", th: "เก้า", rom: "gâo", cat: "Numbers", lesson: 3 },
  { en: "ten (10)", th: "สิบ", rom: "sìb", cat: "Numbers", lesson: 3 },
  { en: "eleven (11)", th: "สิบเอ็ด", rom: "sìb èt", cat: "Numbers", lesson: 3 },
  { en: "twelve (12)", th: "สิบสอง", rom: "sìb sŏng", cat: "Numbers", lesson: 3 },
  { en: "thirteen (13)", th: "สิบสาม", rom: "sìb săam", cat: "Numbers", lesson: 3 },
  { en: "fourteen (14)", th: "สิบสี่", rom: "sìb sèe", cat: "Numbers", lesson: 3 },
  { en: "fifteen (15)", th: "สิบห้า", rom: "sìb hâa", cat: "Numbers", lesson: 3 },
  { en: "sixteen (16)", th: "สิบหก", rom: "sìb hòk", cat: "Numbers", lesson: 3 },
  { en: "seventeen (17)", th: "สิบเจ็ด", rom: "sìb jèt", cat: "Numbers", lesson: 3 },
  { en: "eighteen (18)", th: "สิบแปด", rom: "sìb bpàet", cat: "Numbers", lesson: 3 },
  { en: "nineteen (19)", th: "สิบเก้า", rom: "sìb gâo", cat: "Numbers", lesson: 3 },
  { en: "twenty (20)", th: "ยี่สิบ", rom: "yêe-sìb", cat: "Numbers", lesson: 3 },
  { en: "twenty one (21)", th: "ยี่สิบเอ็ด", rom: "yêe-sìb èt", cat: "Numbers", lesson: 3 },
  { en: "thirty (30)", th: "สามสิบ", rom: "săam-sìb", cat: "Numbers", lesson: 3 },
  { en: "thirty-five (35)", th: "สามสิบห้า", rom: "săam-sìb hâa", cat: "Numbers", lesson: 3 },
  { en: "fifty (50)", th: "ห้าสิบ", rom: "hâa-sìb", cat: "Numbers", lesson: 3 },
  { en: "sixty (60)", th: "หกสิบ", rom: "hòk-sìb", cat: "Numbers", lesson: 3 },
  { en: "sixty-seven (67)", th: "หกสิบเจ็ด", rom: "hòk-sìb jèt", cat: "Numbers", lesson: 3 },
  { en: "eighty (80)", th: "แปดสิบ", rom: "bpàet-sìb", cat: "Numbers", lesson: 3 },
  { en: "eighty-eight (88)", th: "แปดสิบแปด", rom: "bpàet-sìb bpàet", cat: "Numbers", lesson: 3 },
  { en: "ninety nine (99)", th: "เก้าสิบเก้า", rom: "gâo-sìb gâo", cat: "Numbers", lesson: 3 },
  { en: "hundred (100)", th: "ร้อย", rom: "rói", cat: "Numbers", lesson: 3 },
  { en: "two hundred and forty (240)", th: "สองร้อยสี่สิบ", rom: "sŏng-rói sèe-sìb", cat: "Numbers", lesson: 3 },
  { en: "four hundred and eighteen (418)", th: "สี่ร้อยสิบแปด", rom: "sèe-rói sìb-bpàet", cat: "Numbers", lesson: 3 },
  { en: "six hundred and ninety (690)", th: "หกร้อยเก้าสิบ", rom: "hòk-rói gâo-sìb", cat: "Numbers", lesson: 3 },
  { en: "thousand (1,000)", th: "พัน", rom: "pan", cat: "Numbers", lesson: 3 },
  { en: "one thousand two hundred and fifty (1,250)", th: "หนึ่งพันสองร้อยห้าสิบ", rom: "nèung-pan sŏng-rói hâa-sìb", cat: "Numbers", lesson: 3 },
  { en: "four thousand one hundred (4,100)", th: "สี่พันหนึ่งร้อย", rom: "sèe-pan nèung-rói", cat: "Numbers", lesson: 3 },
  { en: "six thousand seven hundred and fifty (6,750)", th: "หกพันเจ็ดร้อยห้าสิบ", rom: "hòk-pan jèt-rói hâa-sìb", cat: "Numbers", lesson: 3 },
  { en: "ten thousand (10,000)", th: "หมื่น", rom: "mèun", cat: "Numbers", lesson: 3 },
  { en: "fifteen thousand four hundred (15,400)", th: "หนึ่งหมื่นห้าพันสี่ร้อย", rom: "nèung-mèun hâa-pan sèe-rói", cat: "Numbers", lesson: 3 },
  { en: "seventy thousand (70,000)", th: "เจ็ดหมื่น", rom: "jèt mèun", cat: "Numbers", lesson: 3 },
  { en: "eighty-five thousand three hundred (85,300)", th: "แปดหมื่นห้าพันสามร้อย", rom: "bpàet-mèun hâa-pan săam-rói", cat: "Numbers", lesson: 3 },
  { en: "hundred thousand (100,000)", th: "แสน", rom: "săen", cat: "Numbers", lesson: 3 },
  { en: "five hundred and forty thousand (540,000)", th: "ห้าแสนสี่หมื่น", rom: "hâa-săen sèe-mèun", cat: "Numbers", lesson: 3 },
  { en: "million (1,000,000)", th: "ล้าน", rom: "láan", cat: "Numbers", lesson: 3 },

  // Nouns
  { en: "country", th: "ประเทศ", rom: "bprà-têt", cat: "Nouns", lesson: 2 },
  { en: "Thailand", th: "ประเทศไทย", rom: "bprà-têt Thai", cat: "Nouns", lesson: 2 },
  { en: "France", th: "ประเทศฝรั่งเศส", rom: "bprà-têt fà-ràng-sèt", cat: "Nouns", lesson: 2 },
  { en: "Japan", th: "ประเทศญี่ปุ่น", rom: "bprà-têt yêe-bpùn", cat: "Nouns", lesson: 2 },
  { en: "China", th: "ประเทศจีน", rom: "bprà-têt jeen", cat: "Nouns", lesson: 2 },
  { en: "dog", th: "หมา", rom: "măa", cat: "Nouns", lesson: 4 },
  { en: "horse", th: "ม้า", rom: "máa", cat: "Nouns", lesson: 4 },
  { en: "year", th: "ปี", rom: "bpee", cat: "Nouns", lesson: 4 },
  { en: "age", th: "อายุ", rom: "aa-yú", cat: "Nouns", lesson: 4 },
  { en: "food", th: "อาหาร", rom: "aa-hăan", cat: "Nouns", lesson: 5 },
  { en: "Thai food", th: "อาหารไทย", rom: "aa-hăan Thai", cat: "Nouns", lesson: 5 },
  { en: "chicken", th: "ไก่", rom: "gài", cat: "Nouns", lesson: 5 },
  { en: "water", th: "น้ำ", rom: "náam", cat: "Nouns", lesson: 5 },
  { en: "milk", th: "นม", rom: "nom", cat: "Nouns", lesson: 5 },
  { en: "beer", th: "เบียร์", rom: "bia", cat: "Nouns", lesson: 5 },
  { en: "fruit", th: "ผลไม้", rom: "pŏn-lá-mái", cat: "Nouns", lesson: 5 },
  { en: "apple", th: "แอปเปิล", rom: "àep-pên", cat: "Nouns", lesson: 5 },
  { en: "restaurant", th: "ร้านอาหาร", rom: "ráan aa-hăan", cat: "Nouns", lesson: 5 },
  { en: "job", th: "งาน", rom: "ngaan", cat: "Nouns", lesson: 5 },
  { en: "cat", th: "แมว", rom: "maew", cat: "Nouns", lesson: 5 },
  { en: "book", th: "หนังสือ", rom: "năng-sĕu", cat: "Nouns", lesson: 5 },
  { en: "medicine", th: "ยา", rom: "yaa", cat: "Nouns", lesson: 5 },
  { en: "Thai language", th: "ภาษาไทย", rom: "paa-săa Thai", cat: "Nouns", lesson: 5 },
  { en: "English language", th: "ภาษาอังกฤษ", rom: "paa-săa ang-grìt", cat: "Nouns", lesson: 5 },
  { en: "name", th: "ชื่อ", rom: "chûu", cat: "Nouns", lesson: 1 },
  { en: "movie", th: "หนัง", rom: "năng", cat: "Nouns", lesson: 6 },
  { en: "song", th: "เพลง", rom: "pleng", cat: "Nouns", lesson: 6 },
  { en: "phone", th: "โทรศัพท์", rom: "toh-rá-sàp", cat: "Nouns", lesson: 6 },
  { en: "beef", th: "เนื้อ", rom: "néua", cat: "Nouns", lesson: 7 },
  { en: "pork", th: "หมู", rom: "mŏo", cat: "Nouns", lesson: 7 },
  { en: "fish", th: "ปลา", rom: "bplaa", cat: "Nouns", lesson: 7 },
  { en: "vegetable", th: "ผัก", rom: "pàk", cat: "Nouns", lesson: 7 },
  { en: "this", th: "นี่", rom: "nêe", cat: "Nouns", lesson: 8 },
  { en: "that", th: "นั่น", rom: "nân", cat: "Nouns", lesson: 8 },
  { en: "home; house", th: "บ้าน", rom: "bâan", cat: "Nouns", lesson: 8 },
  { en: "school", th: "โรงเรียน", rom: "rohng rian", cat: "Nouns", lesson: 8 },
  { en: "teacher", th: "ครู", rom: "kroo", cat: "Nouns", lesson: 8 },
  { en: "office worker", th: "พนักงานออฟฟิศ", rom: "pá-nák ngaan óf-fít", cat: "Nouns", lesson: 8 },
  { en: "businessman", th: "นักธุรกิจ", rom: "nák tú-rá gìt", cat: "Nouns", lesson: 8 },
  { en: "car", th: "รถยนต์", rom: "rót yon", cat: "Nouns", lesson: 8 },
  { en: "motorbike", th: "รถมอเตอร์ไซค์", rom: "rót motorsai", cat: "Nouns", lesson: 8 },
  { en: "tuk-tuk", th: "รถตุ๊ก ๆ", rom: "rót túk túk", cat: "Nouns", lesson: 8 },
  { en: "durian", th: "ทุเรียน", rom: "tú-rian", cat: "Nouns", lesson: 8 },
  { en: "vehicle", th: "รถ", rom: "rót", cat: "Nouns", lesson: 8 },
  { en: "police", th: "ตำรวจ", rom: "dtam-rùat", cat: "Nouns", lesson: 8 },
  { en: "doctor", th: "หมอ", rom: "mŏr", cat: "Nouns", lesson: 8 },
  { en: "waiter; waitress", th: "พนักงานเสิร์ฟ", rom: "pá-nák ngaan sèrf", cat: "Nouns", lesson: 8 },
  { en: "receptionist", th: "พนักงานต้อนรับ", rom: "pá-nák ngaan dtôn ráp", cat: "Nouns", lesson: 8 },
  { en: "staff; employee", th: "พนักงาน", rom: "pá-nák ngaan", cat: "Nouns", lesson: 8 },
  { en: "driver", th: "คนขับรถ", rom: "kon kàp rót", cat: "Nouns", lesson: 8 },
  { en: "vendor", th: "คนขาย", rom: "kon kăai", cat: "Nouns", lesson: 8 },
  { en: "nurse", th: "พยาบาล", rom: "pá-yaa-baan", cat: "Nouns", lesson: 8 },
  { en: "student", th: "นักเรียน", rom: "nák rian", cat: "Nouns", lesson: 8 },
  { en: "hospital", th: "โรงพยาบาล", rom: "rohng pá-yaa-baan", cat: "Nouns", lesson: 8 },
  { en: "pharmacy", th: "ร้านขายยา", rom: "ráan kăai yaa", cat: "Nouns", lesson: 8 },
  { en: "shop; store", th: "ร้าน", rom: "ráan", cat: "Nouns", lesson: 8 },
  { en: "cinema", th: "โรงหนัง", rom: "rohng năng", cat: "Nouns", lesson: 8 },
  { en: "department store; mall", th: "ห้าง", rom: "hâang", cat: "Nouns", lesson: 8 },
  { en: "hotel", th: "โรงแรม", rom: "rohng raem", cat: "Nouns", lesson: 8 },
  { en: "convenience store", th: "ร้านสะดวกซื้อ", rom: "ráan sà-dùak séu", cat: "Nouns", lesson: 8 },
  { en: "woman", th: "ผู้หญิง", rom: "pôo yĭng", cat: "Nouns", lesson: 9 },
  { en: "man", th: "ผู้ชาย", rom: "pôo chaai", cat: "Nouns", lesson: 9 },
  { en: "person", th: "คน", rom: "kon", cat: "Nouns", lesson: 9 },
  { en: "kid", th: "เด็ก", rom: "dèk", cat: "Nouns", lesson: 9 },
  { en: "lesson", th: "บทเรียน", rom: "bòt rian", cat: "Nouns", lesson: 9 },
  { en: "bird", th: "นก", rom: "nók", cat: "Nouns", lesson: 9 },
  { en: "weather", th: "อากาศ", rom: "aa-gàat", cat: "Nouns", lesson: 9 },
  { en: "Bangkok", th: "กรุงเทพ", rom: "krung têp", cat: "Nouns", lesson: 9 },

  // Verbs
  { en: "to come", th: "มา", rom: "maa", cat: "Verbs", lesson: 4 },
  { en: "to come from", th: "มาจาก", rom: "maa jàak", cat: "Verbs", lesson: 2 },
  { en: "to like", th: "ชอบ", rom: "chôp", cat: "Verbs", lesson: 5 },
  { en: "to eat", th: "กิน", rom: "gin", cat: "Verbs", lesson: 5 },
  { en: "to drink", th: "ดื่ม", rom: "dèum", cat: "Verbs", lesson: 5 },
  { en: "to read", th: "อ่าน", rom: "àan", cat: "Verbs", lesson: 5 },
  { en: "to buy", th: "ซื้อ", rom: "séu", cat: "Verbs", lesson: 5 },
  { en: "to do", th: "ทำ", rom: "tam", cat: "Verbs", lesson: 5 },
  { en: "to work", th: "ทำงาน", rom: "tam ngaan", cat: "Verbs", lesson: 5 },
  { en: "to cook", th: "ทำอาหาร", rom: "tam aa-hăan", cat: "Verbs", lesson: 5 },
  { en: "to go", th: "ไป", rom: "bpai", cat: "Verbs", lesson: 5 },
  { en: "to study", th: "เรียน", rom: "rian", cat: "Verbs", lesson: 5 },
  { en: "to exercise", th: "ออกกำลังกาย", rom: "òk gam-lang gaai", cat: "Verbs", lesson: 6 },
  { en: "to watch; look", th: "ดู", rom: "doo", cat: "Verbs", lesson: 6 },
  { en: "to listen", th: "ฟัง", rom: "fang", cat: "Verbs", lesson: 6 },
  { en: "to watch a movie", th: "ดูหนัง", rom: "doo năng", cat: "Verbs", lesson: 6 },
  { en: "to listen to music", th: "ฟังเพลง", rom: "fang pleng", cat: "Verbs", lesson: 6 },
  { en: "to play", th: "เล่น", rom: "lên", cat: "Verbs", lesson: 6 },
  { en: "to see", th: "เห็น", rom: "hĕn", cat: "Verbs", lesson: 7 },
  { en: "to hear", th: "ได้ยิน", rom: "dâai yin", cat: "Verbs", lesson: 7 },
  { en: "to speak", th: "พูด", rom: "pôot", cat: "Verbs", lesson: 7 },
  { en: "to tell", th: "บอก", rom: "bòk", cat: "Verbs", lesson: 7 },
  { en: "to talk", th: "คุย", rom: "kui", cat: "Verbs", lesson: 7 },
  { en: "to know", th: "รู้", rom: "róo", cat: "Verbs", lesson: 7 },
  { en: "to know someone", th: "รู้จัก", rom: "róo jàk", cat: "Verbs", lesson: 7 },
  { en: "to understand", th: "เข้าใจ", rom: "kâo jai", cat: "Verbs", lesson: 7 },
  { en: "to love", th: "รัก", rom: "rák", cat: "Verbs", lesson: 7 },
  { en: "to be; is (equal)", th: "คือ", rom: "keu", cat: "Verbs", lesson: 8 },
  { en: "to be (descriptive)", th: "เป็น", rom: "bpen", cat: "Verbs", lesson: 8 },
  { en: "to be at (location)", th: "อยู่", rom: "yòo", cat: "Verbs", lesson: 8 },
  { en: "to rest", th: "พักผ่อน", rom: "pák pòn", cat: "Verbs", lesson: 8 },
  { en: "to sell", th: "ขาย", rom: "kăai", cat: "Verbs", lesson: 8 },
  { en: "to drive", th: "ขับรถ", rom: "kàp rót", cat: "Verbs", lesson: 8 },

  // Adjectives
  { en: "smart", th: "ฉลาด", rom: "chà-làat", cat: "Adjectives", lesson: 9 },
  { en: "funny", th: "ตลก", rom: "dtà-lòk", cat: "Adjectives", lesson: 9 },
  { en: "beautiful", th: "สวย", rom: "sŭay", cat: "Adjectives", lesson: 9 },
  { en: "handsome", th: "หล่อ", rom: "lòr", cat: "Adjectives", lesson: 9 },
  { en: "kind", th: "ใจดี", rom: "jai dee", cat: "Adjectives", lesson: 9 },
  { en: "good", th: "ดี", rom: "dee", cat: "Adjectives", lesson: 9 },
  { en: "rude", th: "หยาบคาย", rom: "yàap kaai", cat: "Adjectives", lesson: 9 },
  { en: "delicious", th: "อร่อย", rom: "à-ròi", cat: "Adjectives", lesson: 9 },
  { en: "spicy", th: "เผ็ด", rom: "pèt", cat: "Adjectives", lesson: 9 },
  { en: "cute", th: "น่ารัก", rom: "nâa rák", cat: "Adjectives", lesson: 9 },
  { en: "hot", th: "ร้อน", rom: "rón", cat: "Adjectives", lesson: 9 },
  { en: "cool; cold", th: "เย็น", rom: "yen", cat: "Adjectives", lesson: 9 },
  { en: "cold", th: "หนาว", rom: "năao", cat: "Adjectives", lesson: 9 },
  { en: "difficult", th: "ยาก", rom: "yâak", cat: "Adjectives", lesson: 9 },
  { en: "easy", th: "ง่าย", rom: "ngâai", cat: "Adjectives", lesson: 9 },
  { en: "cheap", th: "ถูก", rom: "tòok", cat: "Adjectives", lesson: 9 },
  { en: "fun", th: "สนุก", rom: "sà-nùk", cat: "Adjectives", lesson: 9 },
  { en: "expensive", th: "แพง", rom: "paeng", cat: "Adjectives", lesson: 9 },

  // Conjunction
  { en: "and", th: "และ", rom: "láe", cat: "Conjunction", lesson: 6 },
  { en: "but", th: "แต่", rom: "dtàe", cat: "Conjunction", lesson: 7 },
  { en: "or", th: "หรือ", rom: "rĕu", cat: "Conjunction", lesson: 8 },
  { en: "because", th: "เพราะ", rom: "prór", cat: "Conjunction", lesson: 9 },

  // Function
  { en: "at; that; which; who", th: "ที่", rom: "têe", cat: "Function", lesson: 8 },
  { en: "also; then", th: "ก็", rom: "gôr", cat: "Function", lesson: 9 },
  // Emotions
  { en: "happy", th: "มีความสุข", rom: "mee kwaam sùk", cat: "Emotions", lesson: 7 },
  { en: "glad; pleased", th: "ดีใจ", rom: "dee jai", cat: "Emotions", lesson: 7 },
  { en: "sad", th: "เศร้า", rom: "sâo", cat: "Emotions", lesson: 7 },
  { en: "excited", th: "ตื่นเต้น", rom: "dtèun dtên", cat: "Emotions", lesson: 7 },
  { en: "tired", th: "เหนื่อย", rom: "nèuay", cat: "Emotions", lesson: 7 },
  { en: "angry", th: "โกรธ", rom: "gròht", cat: "Emotions", lesson: 7 },
  { en: "scared", th: "กลัว", rom: "glua", cat: "Emotions", lesson: 7 },
  { en: "worried", th: "กังวล", rom: "gang-won", cat: "Emotions", lesson: 7 },
  // ===== Lessons 10-12 additions (+ Adverbs/Classifiers, and 'very') =====
  { en: "very", th: "มาก", rom: "mâak", cat: "Adverbs", lesson: 7 },
  { en: "How much?", th: "เท่าไหร่", rom: "tâo rài", cat: "Phrases", lesson: 10 },
  { en: "How much is this?", th: "นี่เท่าไหร่", rom: "nêe tâo rài", cat: "Phrases", lesson: 10 },
  { en: "How much is that?", th: "นั่นเท่าไหร่", rom: "nân tâo rài", cat: "Phrases", lesson: 10 },
  { en: "Very expensive.", th: "แพงมาก", rom: "paeng mâak", cat: "Phrases", lesson: 10 },
  { en: "Too expensive.", th: "แพงเกินไป", rom: "paeng gern bpai", cat: "Phrases", lesson: 10 },
  { en: "too much; excessively", th: "เกินไป", rom: "gern bpai", cat: "Adverbs", lesson: 10 },
  { en: "Can you lower (the price)?", th: "ลดได้ไหม", rom: "lót dâai măi", cat: "Phrases", lesson: 10 },
  { en: "to lower; reduce", th: "ลด", rom: "lót", cat: "Verbs", lesson: 10 },
  { en: "can", th: "ได้", rom: "dâai", cat: "Function", lesson: 10 },
  { en: "Can you speak English?", th: "พูดภาษาอังกฤษได้ไหม", rom: "pôot paa-săa ang-grìt dâai măi", cat: "Phrases", lesson: 10 },
  { en: "to take; to bring", th: "เอา", rom: "ao", cat: "Verbs", lesson: 10 },
  { en: "I take/buy this.", th: "เอานี้", rom: "ao née", cat: "Phrases", lesson: 10 },
  { en: "I take/buy that.", th: "เอานั้น", rom: "ao nán", cat: "Phrases", lesson: 10 },
  { en: "temple", th: "วัด", rom: "wát", cat: "Nouns", lesson: 10 },
  { en: "airport", th: "สนามบิน", rom: "sà-năam bin", cat: "Nouns", lesson: 10 },
  { en: "Turn left.", th: "เลี้ยวซ้าย", rom: "líeow sáai", cat: "Phrases", lesson: 10 },
  { en: "Turn right.", th: "เลี้ยวขวา", rom: "líeow kwăa", cat: "Phrases", lesson: 10 },
  { en: "to turn", th: "เลี้ยว", rom: "líeow", cat: "Verbs", lesson: 10 },
  { en: "left", th: "ซ้าย", rom: "sáai", cat: "Nouns", lesson: 10 },
  { en: "right", th: "ขวา", rom: "kwăa", cat: "Nouns", lesson: 10 },
  { en: "Go straight ahead.", th: "ตรงไป", rom: "dtrong bpai", cat: "Phrases", lesson: 10 },
  { en: "Stop here.", th: "จอดตรงนี่", rom: "jòt dtrong nêe", cat: "Phrases", lesson: 10 },
  { en: "Stop over there.", th: "จอดตรงนั่น", rom: "jòt dtrong nân", cat: "Phrases", lesson: 10 },
  { en: "to stop; park", th: "จอด", rom: "jòt", cat: "Verbs", lesson: 10 },
  { en: "market", th: "ตลาด", rom: "dtà-làat", cat: "Nouns", lesson: 10 },
  { en: "Where are you?", th: "อยู่ไหน", rom: "(kun) yòo năi", cat: "Phrases", lesson: 10 },
  { en: "I'm at home.", th: "อยู่บ้าน", rom: "(pŏm/chăn) yòo bâan", cat: "Phrases", lesson: 10 },
  { en: "drink; beverage", th: "เครื่องดื่ม", rom: "krêuang dèum", cat: "Nouns", lesson: 10 },
  { en: "Can I try it on?", th: "ลองได้ไหม", rom: "long dâai măi", cat: "Phrases", lesson: 10 },
  { en: "to try", th: "ลอง", rom: "long", cat: "Verbs", lesson: 10 },
  { en: "I can speak Thai a little bit.", th: "พูดภาษาไทยได้นิดหน่อย", rom: "pôot paa-săa tai dâai nít nòi", cat: "Phrases", lesson: 10 },
  { en: "thing; stuff; item", th: "ของ", rom: "kŏng", cat: "Nouns", lesson: 11 },
  { en: "of; belonging to (possession)", th: "ของ", rom: "kŏng", cat: "Function", lesson: 11 },
  { en: "father", th: "พ่อ", rom: "pôr", cat: "Nouns", lesson: 11 },
  { en: "mother", th: "แม่", rom: "mâe", cat: "Nouns", lesson: 11 },
  { en: "parents", th: "พ่อแม่", rom: "pôr mâe", cat: "Nouns", lesson: 11 },
  { en: "child", th: "ลูก", rom: "lôok", cat: "Nouns", lesson: 11 },
  { en: "wife", th: "ภรรยา", rom: "pan-rá-yaa", cat: "Nouns", lesson: 11 },
  { en: "husband", th: "สามี", rom: "săa-mee", cat: "Nouns", lesson: 11 },
  { en: "wifey (informal)", th: "เมีย", rom: "mia", cat: "Nouns", lesson: 11 },
  { en: "hubby (informal)", th: "ผัว", rom: "pŭa", cat: "Nouns", lesson: 11 },
  { en: "girlfriend; boyfriend", th: "แฟน", rom: "faen", cat: "Nouns", lesson: 11 },
  { en: "friend", th: "เพื่อน", rom: "pêuan", cat: "Nouns", lesson: 11 },
  { en: "fast", th: "เร็ว", rom: "reo", cat: "Adjectives", lesson: 11 },
  { en: "slow", th: "ช้า", rom: "cháa", cat: "Adjectives", lesson: 11 },
  { en: "key", th: "กุญแจ", rom: "gun-jae", cat: "Nouns", lesson: 11 },
  { en: "room", th: "ห้อง", rom: "hông", cat: "Nouns", lesson: 11 },
  { en: "family", th: "ครอบครัว", rom: "krôp krua", cat: "Nouns", lesson: 11 },
  { en: "son", th: "ลูกชาย", rom: "lôok chaai", cat: "Nouns", lesson: 11 },
  { en: "daughter", th: "ลูกสาว", rom: "lôok săao", cat: "Nouns", lesson: 11 },
  { en: "sibling", th: "พี่น้อง", rom: "pêe nóng", cat: "Nouns", lesson: 11 },
  { en: "elder brother", th: "พี่ชาย", rom: "pêe chaai", cat: "Nouns", lesson: 11 },
  { en: "younger brother", th: "น้องชาย", rom: "nóng chaai", cat: "Nouns", lesson: 11 },
  { en: "elder sister", th: "พี่สาว", rom: "pêe săao", cat: "Nouns", lesson: 11 },
  { en: "younger sister", th: "น้องสาว", rom: "nóng săao", cat: "Nouns", lesson: 11 },
  { en: "grandfather (paternal)", th: "ปู่", rom: "bpòo", cat: "Nouns", lesson: 11 },
  { en: "grandmother (paternal)", th: "ย่า", rom: "yâa", cat: "Nouns", lesson: 11 },
  { en: "grandfather (maternal)", th: "ตา", rom: "dtaa", cat: "Nouns", lesson: 11 },
  { en: "grandmother (maternal)", th: "ยาย", rom: "yaai", cat: "Nouns", lesson: 11 },
  { en: "to have", th: "มี", rom: "mee", cat: "Verbs", lesson: 12 },
  { en: "do not have", th: "ไม่มี", rom: "mâi mee", cat: "Verbs", lesson: 12 },
  { en: "pen", th: "ปากกา", rom: "bpàak gaa", cat: "Nouns", lesson: 12 },
  { en: "time", th: "เวลา", rom: "way-laa", cat: "Nouns", lesson: 12 },
  { en: "money", th: "เงิน", rom: "ngern", cat: "Nouns", lesson: 12 },
  { en: "money (informal)", th: "ตังค์", rom: "dtang", cat: "Nouns", lesson: 12 },
  { en: "question", th: "คำถาม", rom: "kam tăam", cat: "Nouns", lesson: 12 },
  { en: "appointment", th: "นัด", rom: "nát", cat: "Nouns", lesson: 12 },
  { en: "to hold a meeting", th: "ประชุม", rom: "bprà-chum", cat: "Verbs", lesson: 12 },
  { en: "important", th: "สำคัญ", rom: "săm-kan", cat: "Adjectives", lesson: 12 },
  { en: "car, vehicle (classifier)", th: "คัน", rom: "kan", cat: "Classifiers", lesson: 12 },
  { en: "person (classifier)", th: "คน", rom: "kon", cat: "Classifiers", lesson: 12 },
  { en: "animal (classifier)", th: "ตัว", rom: "dtua", cat: "Classifiers", lesson: 12 },
  { en: "house (classifier)", th: "หลัง", rom: "lăng", cat: "Classifiers", lesson: 12 },
  { en: "small object (classifier)", th: "อัน", rom: "an", cat: "Classifiers", lesson: 12 },
  { en: "public bus", th: "รถเมล์", rom: "rót may", cat: "Nouns", lesson: 12 },
  { en: "coach bus; intercity bus", th: "รถบัส", rom: "rót bàt", cat: "Nouns", lesson: 12 },
  { en: "rich", th: "รวย", rom: "ruay", cat: "Adjectives", lesson: 12 },
  { en: "How many? How much?", th: "กี่", rom: "gèe", cat: "Function", lesson: 12 },
  { en: "Farewell.", th: "ลาก่อน", rom: "laa gòn", cat: "Phrases", lesson: 12 },
  { en: "Do you have a smaller size?", th: "คุณมีเล็กกว่านี้ไหม", rom: "kun mee lék gwàa née măi", cat: "Phrases", lesson: 12 },
  { en: "Do you have a bigger size?", th: "คุณมีใหญ่กว่านี้ไหม", rom: "kun mee yài gwàa née măi", cat: "Phrases", lesson: 12 },
  { en: "more; more than", th: "กว่า", rom: "gwàa", cat: "Adverbs", lesson: 12 },
  { en: "small", th: "เล็ก", rom: "lék", cat: "Adjectives", lesson: 12 },
  { en: "big", th: "ใหญ่", rom: "yài", cat: "Adjectives", lesson: 11 },
  { en: "smaller", th: "เล็กกว่า", rom: "lék gwàa", cat: "Phrases", lesson: 12 },
  { en: "bigger", th: "ใหญ่กว่า", rom: "yài gwàa", cat: "Phrases", lesson: 12 },
  { en: "this one", th: "อันนี้", rom: "an née", cat: "Phrases", lesson: 12 },
  { en: "that one", th: "อันนั่น", rom: "an nân", cat: "Phrases", lesson: 12 },
  // ===== Lessons 13-15 additions (+ Lesson 9 'unfortunate') =====
  { en: "unfortunate", th: "ซวย", rom: "suay", cat: "Adjectives", lesson: 9 },
  { en: "to ask for; request for", th: "ขอ", rom: "kŏr", cat: "Verbs", lesson: 13 },
  { en: "I would like the menu.", th: "ขอเมนู", rom: "kŏr may-noo", cat: "Phrases", lesson: 13 },
  { en: "shrimp", th: "กุ้ง", rom: "gûng", cat: "Nouns", lesson: 13 },
  { en: "papaya salad", th: "ส้มตำ", rom: "sôm dtam", cat: "Nouns", lesson: 13 },
  { en: "stir fried basil", th: "ผัดกะเพรา", rom: "pàt gà prao", cat: "Nouns", lesson: 13 },
  { en: "to return home; for takeaway", th: "กลับบ้าน", rom: "glàp bâan", cat: "Phrases", lesson: 13 },
  { en: "plate, dish (classifier)", th: "จาน", rom: "jaan", cat: "Classifiers", lesson: 13 },
  { en: "bowl (classifier)", th: "ชาม", rom: "chaam", cat: "Classifiers", lesson: 13 },
  { en: "small bowl (classifier)", th: "ถ้วย", rom: "tûay", cat: "Classifiers", lesson: 13 },
  { en: "cup, glass (classifier)", th: "แก้ว", rom: "gâew", cat: "Classifiers", lesson: 13 },
  { en: "bottle (classifier)", th: "ขวด", rom: "kùat", cat: "Classifiers", lesson: 13 },
  { en: "noodle soup; noodle", th: "ก๋วยเตี๋ยว", rom: "kŭay-dtĭeow", cat: "Nouns", lesson: 13 },
  { en: "elephant", th: "ช้าง", rom: "cháng", cat: "Nouns", lesson: 13 },
  { en: "red wine", th: "ไวน์แดง", rom: "wai daeng", cat: "Nouns", lesson: 13 },
  { en: "red", th: "แดง", rom: "daeng", cat: "Adjectives", lesson: 13 },
  { en: "green", th: "เขียว", rom: "kĭeow", cat: "Adjectives", lesson: 13 },
  { en: "rice; meal", th: "ข้าว", rom: "kâao", cat: "Nouns", lesson: 13 },
  { en: "steamed rice", th: "ข้าวสวย", rom: "kâao sŭay", cat: "Nouns", lesson: 13 },
  { en: "sticky rice", th: "ข้าวเหนียว", rom: "kâao nĭeow", cat: "Nouns", lesson: 13 },
  { en: "sweet", th: "หวาน", rom: "wăan", cat: "Adjectives", lesson: 13 },
  { en: "curry; stew", th: "แกง", rom: "gaeng", cat: "Nouns", lesson: 13 },
  { en: "green curry", th: "แกงเขียวหวาน", rom: "gaeng kĭeow wăan", cat: "Nouns", lesson: 13 },
  { en: "mango sticky rice", th: "ข้าวเหนียวมะม่วง", rom: "kâao nĭeow má-mûang", cat: "Nouns", lesson: 13 },
  { en: "mango", th: "มะม่วง", rom: "má-mûang", cat: "Nouns", lesson: 13 },
  { en: "bag (classifier)", th: "ถุง", rom: "tŭng", cat: "Classifiers", lesson: 13 },
  { en: "box (classifier)", th: "กล่อง", rom: "glòng", cat: "Classifiers", lesson: 13 },
  { en: "to be allergic to (1); to lose (2)", th: "แพ้", rom: "páe", cat: "Verbs", lesson: 13 },
  { en: "The bill please.", th: "เช็คบิล", rom: "chék bin", cat: "Phrases", lesson: 13 },
  { en: "Looks tasty.", th: "น่ากิน", rom: "nâa gin", cat: "Phrases", lesson: 13 },
  { en: "Cheers.", th: "ชนแก้ว", rom: "chon gâew", cat: "Phrases", lesson: 13 },
  { en: "Enjoy your meal.", th: "กินให้อร่อยนะ", rom: "gin hâi à-ròi ná", cat: "Phrases", lesson: 13 },
  { en: "I'm full.", th: "อิ่มแล้ว", rom: "ìm láew", cat: "Phrases", lesson: 13 },
  { en: "will (future tense marker)", th: "จะ", rom: "jà", cat: "Function", lesson: 14 },
  { en: "tonight", th: "คืนนี้", rom: "keun née", cat: "Adverbs", lesson: 14 },
  { en: "to meet", th: "เจอ", rom: "jer", cat: "Verbs", lesson: 14 },
  { en: "new", th: "ใหม่", rom: "mài", cat: "Adjectives", lesson: 14 },
  { en: "to call someone", th: "โทรหา", rom: "toh hăa", cat: "Verbs", lesson: 14 },
  { en: "to visit someone", th: "ไปเยี่ยม", rom: "bpai yîam", cat: "Verbs", lesson: 14 },
  { en: "to text someone", th: "ส่งข้อความหา", rom: "sòng kôr kwaam hăa", cat: "Verbs", lesson: 14 },
  { en: "with", th: "กับ", rom: "gàp", cat: "Function", lesson: 14 },
  { en: "today", th: "วันนี้", rom: "wan née", cat: "Adverbs", lesson: 14 },
  { en: "tomorrow", th: "พรุ่งนี้", rom: "prûng-née", cat: "Adverbs", lesson: 14 },
  { en: "next week", th: "อาทิตย์หน้า", rom: "aa-tít nâa", cat: "Adverbs", lesson: 14 },
  { en: "next month", th: "เดือนหน้า", rom: "deuan nâa", cat: "Adverbs", lesson: 14 },
  { en: "next year", th: "ปีหน้า", rom: "bpee nâa", cat: "Adverbs", lesson: 14 },
  { en: "day", th: "วัน", rom: "wan", cat: "Nouns", lesson: 14 },
  { en: "week", th: "อาทิตย์", rom: "aa-tít", cat: "Nouns", lesson: 14 },
  { en: "month", th: "เดือน", rom: "deuan", cat: "Nouns", lesson: 14 },
  { en: "alone", th: "คนเดียว", rom: "kon dieow", cat: "Adverbs", lesson: 14 },
  { en: "seafood", th: "อาหารทะเล", rom: "aa hăan tá-lay", cat: "Nouns", lesson: 14 },
  { en: "sea; ocean", th: "ทะเล", rom: "tá-lay", cat: "Nouns", lesson: 14 },
  { en: "loud; noisy", th: "เสียงดัง", rom: "sĭang dang", cat: "Adjectives", lesson: 14 },
  { en: "annoying", th: "น่ารำคาญ", rom: "nâa ram-kaan", cat: "Adjectives", lesson: 14 },
  { en: "Have fun.", th: "ขอให้สนุกน่ะ", rom: "kŏr hâi sà-nùk nâ", cat: "Phrases", lesson: 14 },
  { en: "Have a nice trip.", th: "เที่ยวให้สนุกน่ะ", rom: "tîeow hâi sà-nùk nâ", cat: "Phrases", lesson: 14 },
  { en: "Monday", th: "วันจันทร์", rom: "wan jan", cat: "Days and Months", lesson: 14 },
  { en: "Tuesday", th: "วันอังคาร", rom: "wan ang-kaan", cat: "Days and Months", lesson: 14 },
  { en: "Wednesday", th: "วันพุธ", rom: "wan pút", cat: "Days and Months", lesson: 14 },
  { en: "Thursday", th: "วันพฤหัสบดี", rom: "wan pá-réu-hàt-sà-bor-dee", cat: "Days and Months", lesson: 14 },
  { en: "Friday", th: "วันศุกร์", rom: "wan sùk", cat: "Days and Months", lesson: 14 },
  { en: "Saturday", th: "วันเสาร์", rom: "wan săo", cat: "Days and Months", lesson: 14 },
  { en: "Sunday", th: "วันอาทิตย์", rom: "wan aa-tít", cat: "Days and Months", lesson: 14 },
  { en: "Weekend", th: "เสาร์อาทิตย์", rom: "săo aa-tít", cat: "Days and Months", lesson: 14 },
  { en: "to want", th: "อยาก", rom: "yàak", cat: "Verbs", lesson: 15 },
  { en: "to travel; to hang out", th: "ไปเที่ยว", rom: "bpai tîeow", cat: "Verbs", lesson: 15 },
  { en: "culture", th: "วัฒนธรรม", rom: "wát-tá-ná-tam", cat: "Nouns", lesson: 15 },
  { en: "interesting", th: "น่าสนใจ", rom: "nâa sŏn jai", cat: "Adjectives", lesson: 15 },
  { en: "story; matter; topic (classifier)", th: "เรื่อง", rom: "rêuang", cat: "Classifiers", lesson: 15 },
  { en: "lonely", th: "เหงา", rom: "ngăo", cat: "Adjectives", lesson: 15 },
  { en: "must; have to", th: "ต้อง", rom: "dtông", cat: "Adverbs", lesson: 15 },
  { en: "boss", th: "เจ้านาย", rom: "jâo naai", cat: "Nouns", lesson: 15 },
  { en: "to wake up", th: "ตื่น", rom: "dtèun", cat: "Verbs", lesson: 15 },
  { en: "morning", th: "เช้า", rom: "cháo", cat: "Nouns", lesson: 15 },
  { en: "early morning", th: "แต่เช้า", rom: "dtàe cháo", cat: "Adverbs", lesson: 15 },
  { en: "for; in order to", th: "เพื่อ", rom: "pêua", cat: "Function", lesson: 15 },
  { en: "Good idea.", th: "เป็นความคิดที่ดี", rom: "bpen kwaam kít têe dee", cat: "Phrases", lesson: 15 },
  { en: "idea; thought", th: "ความคิด", rom: "kwaam kít", cat: "Nouns", lesson: 15 },
  { en: "to search for", th: "หา", rom: "hăa", cat: "Verbs", lesson: 15 },
  { en: "What are you looking for?", th: "คุณหาอะไร", rom: "kun hăa à-rai", cat: "Phrases", lesson: 15 },
  { en: "together", th: "ด้วยกัน", rom: "dûay gan", cat: "Adverbs", lesson: 15 },
  { en: "to massage", th: "นวด", rom: "nûat", cat: "Verbs", lesson: 15 },
  { en: "Thai massage", th: "นวดไทย", rom: "nûat tai", cat: "Nouns", lesson: 15 },
  { en: "to stop", th: "หยุด", rom: "yùt", cat: "Verbs", lesson: 15 },
  { en: "holiday", th: "วันหยุด", rom: "wan yùt", cat: "Nouns", lesson: 15 },
  { en: "to choose", th: "เลือก", rom: "lêuak", cat: "Verbs", lesson: 15 },
  { en: "hot season", th: "หน้าร้อน", rom: "nâa rón", cat: "Nouns", lesson: 15 },
  { en: "rainy season", th: "หน้าฝน", rom: "nâa fŏn", cat: "Nouns", lesson: 15 },
  { en: "cold season", th: "หน้าหนาว", rom: "nâa năao", cat: "Nouns", lesson: 15 },
  { en: "to need; to require", th: "ต้องการ", rom: "dtông gaan", cat: "Verbs", lesson: 15 },
  { en: "shoes", th: "รองเท้า", rom: "rong táo", cat: "Nouns", lesson: 15 },
  { en: "help; assistance", th: "ความช่วยเหลือ", rom: "kwaam chûay lĕua", cat: "Nouns", lesson: 15 },
  { en: "to help", th: "ช่วย", rom: "chûay", cat: "Verbs", lesson: 15 },
  // ===== Lessons 16-18 additions =====
  { en: "over there (very far)", th: "ที่โน่น", rom: "têe nôhn", cat: "Phrases", lesson: 16 },
  { en: "flea market; weekend market", th: "ตลาดนัด", rom: "dtà-làat nát", cat: "Nouns", lesson: 16 },
  { en: "zoo", th: "สวนสัตว์", rom: "sŭan sàt", cat: "Nouns", lesson: 16 },
  { en: "animal", th: "สัตว์", rom: "sàt", cat: "Nouns", lesson: 16 },
  { en: "older sibling; older person", th: "พี่", rom: "pêe", cat: "Nouns", lesson: 16 },
  { en: "younger sibling; younger person", th: "น้อง", rom: "nóng", cat: "Nouns", lesson: 16 },
  { en: "to be sure", th: "แน่ใจ", rom: "nâe jai", cat: "Verbs", lesson: 16 },
  { en: "to live", th: "อาศัย", rom: "aa-săi", cat: "Verbs", lesson: 16 },
  { en: "now", th: "ตอนนี้", rom: "dton-née", cat: "Adverbs", lesson: 16 },
  { en: "more than", th: "มากกว่า", rom: "mâak gwàa", cat: "Adverbs", lesson: 16 },
  { en: "too; as well", th: "ด้วย", rom: "dûay", cat: "Adverbs", lesson: 16 },
  { en: "Let's ...", th: "กันเถอะ", rom: "gan tùh", cat: "Phrases", lesson: 16 },
  { en: "Lumpini park", th: "สวนลุมพินี", rom: "sŭan lum-pí-nee", cat: "Nouns", lesson: 16 },
  { en: "park; garden", th: "สวน", rom: "sŭan", cat: "Nouns", lesson: 16 },
  { en: "monitor lizard", th: "ตัวเหี้ย", rom: "dtua hîa", cat: "Nouns", lesson: 16 },
  { en: "a lot; much", th: "เยอะ", rom: "yúh", cat: "Adverbs", lesson: 16 },
  { en: "Come here!", th: "มานี่สิ", rom: "maa nêe sì", cat: "Phrases", lesson: 16 },
  { en: "Look!", th: "ดูสิ", rom: "doo sì", cat: "Phrases", lesson: 16 },
  { en: "accident", th: "อุบัติเหตุ", rom: "ù-bàt-dtì-hèt", cat: "Nouns", lesson: 16 },
  { en: "scary", th: "น่ากลัว", rom: "nâa glua", cat: "Adjectives", lesson: 16 },
  { en: "not at all", th: "ไม่เลย", rom: "mâi loie", cat: "Phrases", lesson: 16 },
  { en: "to miss", th: "คิดถึง", rom: "kít tĕung", cat: "Verbs", lesson: 16 },
  { en: "very much; really", th: "จัง", rom: "jang", cat: "Adverbs", lesson: 16 },
  { en: "in", th: "ใน", rom: "nai", cat: "Function", lesson: 16 },
  { en: "bathroom; toilet", th: "ห้องน้ำ", rom: "hông náam", cat: "Nouns", lesson: 16 },
  { en: "entrance", th: "ทางเข้า", rom: "taang kâo", cat: "Nouns", lesson: 16 },
  { en: "exit", th: "ทางออก", rom: "taang òk", cat: "Nouns", lesson: 16 },
  { en: "sick; ill", th: "ป่วย", rom: "bpùay", cat: "Adjectives", lesson: 17 },
  { en: "poor", th: "จน", rom: "jon", cat: "Adjectives", lesson: 17 },
  { en: "to get married", th: "แต่งงาน", rom: "dtàeng ngaan", cat: "Verbs", lesson: 17 },
  { en: "and then; after that", th: "แล้วก็", rom: "láew gôr", cat: "Conjunction", lesson: 17 },
  { en: "whole day", th: "ทั้งวัน", rom: "táng wan", cat: "Adverbs", lesson: 17 },
  { en: "to sleep", th: "นอนหลับ", rom: "non làp", cat: "Verbs", lesson: 17 },
  { en: "that (conjunction)", th: "ว่า", rom: "wâa", cat: "Conjunction", lesson: 17 },
  { en: "already ate; have eaten already", th: "กินแล้ว", rom: "gin láew", cat: "Phrases", lesson: 17 },
  { en: "dessert; sweets", th: "ของหวาน", rom: "kŏng wăan", cat: "Nouns", lesson: 17 },
  { en: "to finish", th: "เสร็จ", rom: "sèt", cat: "Verbs", lesson: 17 },
  { en: "to forget", th: "ลืม", rom: "leum", cat: "Verbs", lesson: 17 },
  { en: "fat", th: "อ้วน", rom: "ûan", cat: "Adjectives", lesson: 17 },
  { en: "to do housework", th: "ทำงานบ้าน", rom: "tam ngaan bâan", cat: "Verbs", lesson: 17 },
  { en: "to do homework", th: "ทำการบ้าน", rom: "tam gaan bâan", cat: "Verbs", lesson: 17 },
  { en: "girl; young woman", th: "สาว", rom: "săao", cat: "Nouns", lesson: 17 },
  { en: "awkward", th: "น่าอึดอัด", rom: "nâa èut àt", cat: "Adjectives", lesson: 17 },
  { en: "to know the truth", th: "รู้ความจริง", rom: "róo kwaam jing", cat: "Verbs", lesson: 17 },
  { en: "How's it going?", th: "เป็นยังไงบ้าง", rom: "bpen yang ngai bâang", cat: "Phrases", lesson: 17 },
  { en: "how?; in what way?", th: "ยังไง", rom: "yang ngai", cat: "Function", lesson: 17 },
  { en: "by; with", th: "โดย", rom: "doi", cat: "Adverbs", lesson: 17 },
  { en: "airplane", th: "เครื่องบิน", rom: "krêuang bin", cat: "Nouns", lesson: 17 },
  { en: "to retire", th: "เกษียณ", rom: "gà-sĭan", cat: "Verbs", lesson: 17 },
  { en: "used to; have ever", th: "เคย", rom: "koie", cat: "Function", lesson: 17 },
  { en: "to smoke", th: "สูบบุหรี่", rom: "sòop bù-rèe", cat: "Verbs", lesson: 17 },
  { en: "all night", th: "ทั้งคืน", rom: "táng keun", cat: "Adverbs", lesson: 17 },
  { en: "It's up to you.", th: "แล้วแต่คุณ", rom: "láew dtàe kun", cat: "Phrases", lesson: 17 },
  { en: "for a long time", th: "นาน", rom: "naan", cat: "Adverbs", lesson: 17 },
  { en: "Long time no see.", th: "ไม่ได้เจอกันนานเลยนะ", rom: "mâi dâai jer gan naan loie ná", cat: "Phrases", lesson: 17 },
  { en: "January", th: "มกราคม", rom: "mók-gà-raa kom", cat: "Days and Months", lesson: 17 },
  { en: "February", th: "กุมภาพันธ์", rom: "gum-paa pan", cat: "Days and Months", lesson: 17 },
  { en: "March", th: "มีนาคม", rom: "mee-naa kom", cat: "Days and Months", lesson: 17 },
  { en: "April", th: "เมษายน", rom: "may-săa-yon", cat: "Days and Months", lesson: 17 },
  { en: "May", th: "พฤษภาคม", rom: "préut-sà-paa kom", cat: "Days and Months", lesson: 17 },
  { en: "June", th: "มิถุนายน", rom: "mí-tù-naa-yon", cat: "Days and Months", lesson: 17 },
  { en: "July", th: "กรกฎาคม", rom: "gà-rá-gà-daa-kom", cat: "Days and Months", lesson: 17 },
  { en: "August", th: "สิงหาคม", rom: "sĭng-hăa kom", cat: "Days and Months", lesson: 17 },
  { en: "September", th: "กันยายน", rom: "gan-yaa-yon", cat: "Days and Months", lesson: 17 },
  { en: "October", th: "ตุลาคม", rom: "dtù-laa kom", cat: "Days and Months", lesson: 17 },
  { en: "November", th: "พฤศจิกายน", rom: "préut-sà-jì-gaa-yon", cat: "Days and Months", lesson: 17 },
  { en: "December", th: "ธันวาคม", rom: "tan-waa kom", cat: "Days and Months", lesson: 17 },
  { en: "present continuous marker (...ing)", th: "กำลัง", rom: "gam-lang", cat: "Function", lesson: 18 },
  { en: "to sit", th: "นั่ง", rom: "nâng", cat: "Verbs", lesson: 18 },
  { en: "news", th: "ข่าว", rom: "kàao", cat: "Nouns", lesson: 18 },
  { en: "busy", th: "ยุ่ง", rom: "yûng", cat: "Adjectives", lesson: 18 },
  { en: "white", th: "ขาว", rom: "kăao", cat: "Adjectives", lesson: 18 },
  { en: "Have you eaten yet?", th: "กินข้าวรึยัง", rom: "gin kâao réu yang", cat: "Phrases", lesson: 18 },
  { en: "to take a shower", th: "อาบน้ำ", rom: "àap náam", cat: "Verbs", lesson: 18 },
  { en: "to wait", th: "รอ", rom: "ror", cat: "Verbs", lesson: 18 },
  { en: "to call back", th: "โทรกลับ", rom: "toh glàp", cat: "Verbs", lesson: 18 },
  { en: "never", th: "ไม่เคย", rom: "mâi koie", cat: "Function", lesson: 18 },
  { en: "time; occasion", th: "ครั้ง", rom: "kráng", cat: "Nouns", lesson: 18 },
  { en: "many times", th: "หลายครั้ง", rom: "lăai kráng", cat: "Nouns", lesson: 18 },
  { en: "to answer; reply", th: "ตอบ", rom: "dtòp", cat: "Verbs", lesson: 18 },
  { en: "or not?", th: "หรือเปล่า", rom: "rĕu bplào", cat: "Function", lesson: 18 },
  // ===== EXTRA PACK (beyond the Beginner Course) =====
  // --- Colors ---
  { en: "color", th: "สี", rom: "sĕe", cat: "Colors - Level 1", pack: "extra" },
  { en: "red", th: "แดง", rom: "daeng", cat: "Colors - Level 1", pack: "extra" },
  { en: "blue", th: "น้ำเงิน", rom: "náam ngern", cat: "Colors - Level 1", pack: "extra" },
  { en: "green", th: "เขียว", rom: "kĭeow", cat: "Colors - Level 1", pack: "extra" },
  { en: "yellow", th: "เหลือง", rom: "lĕuang", cat: "Colors - Level 1", pack: "extra" },
  { en: "orange", th: "ส้ม", rom: "sôm", cat: "Colors - Level 1", pack: "extra" },
  { en: "purple", th: "ม่วง", rom: "mûang", cat: "Colors - Level 1", pack: "extra" },
  { en: "pink", th: "ชมพู", rom: "chom-poo", cat: "Colors - Level 1", pack: "extra" },
  { en: "brown", th: "น้ำตาล", rom: "nám dtaan", cat: "Colors - Level 1", pack: "extra" },
  { en: "black", th: "ดำ", rom: "dam", cat: "Colors - Level 1", pack: "extra" },
  { en: "white", th: "ขาว", rom: "kăao", cat: "Colors - Level 1", pack: "extra" },
  { en: "gray", th: "เทา", rom: "tao", cat: "Colors - Level 1", pack: "extra" },
  { en: "gold", th: "ทอง", rom: "tong", cat: "Colors - Level 2", pack: "extra" },
  { en: "silver", th: "เงิน", rom: "ngern", cat: "Colors - Level 2", pack: "extra" },
  { en: "light blue", th: "สีฟ้า", rom: "sĕe fáa", cat: "Colors - Level 2", pack: "extra" },
  { en: "navy blue", th: "กรมท่า", rom: "grom-má-tâa", cat: "Colors - Level 2", pack: "extra" },
  { en: "cream", th: "ครีม", rom: "kreem", cat: "Colors - Level 2", pack: "extra" },
  { en: "dark", th: "เข้ม", rom: "kêm", cat: "Colors - Level 2", pack: "extra" },
  { en: "light", th: "อ่อน", rom: "òn", cat: "Colors - Level 2", pack: "extra" },
  { en: "dark blue", th: "น้ำเงินเข้ม", rom: "náam ngern kêm", cat: "Colors - Level 2", pack: "extra" },
  { en: "dark green", th: "เขียวเข้ม", rom: "kĭeow kêm", cat: "Colors - Level 2", pack: "extra" },
  { en: "dark brown", th: "น้ำตาลเข้ม", rom: "nám dtaan kêm", cat: "Colors - Level 2", pack: "extra" },
  { en: "light green", th: "เขียวอ่อน", rom: "kĭeow òn", cat: "Colors - Level 2", pack: "extra" },
  // --- Sports & Hobbies ---
  { en: "sport", th: "กีฬา", rom: "gee-laa", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "hobby", th: "งานอดิเรก", rom: "ngaan à-dì-rèk", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "free time", th: "เวลาว่าง", rom: "way-laa wâang", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "football / soccer", th: "ฟุตบอล", rom: "fút bon", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "swimming", th: "ว่ายน้ำ", rom: "wâai náam", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "running", th: "วิ่ง", rom: "wîng", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "reading", th: "อ่านหนังสือ", rom: "àan năng-sĕu", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "cooking", th: "ทำอาหาร", rom: "tam aa-hăan", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "listening to music", th: "ฟังเพลง", rom: "fang pleng", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "singing", th: "ร้องเพลง", rom: "róng pleng", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "watching movies", th: "ดูหนัง", rom: "doo năng", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "watching TV", th: "ดูทีวี", rom: "doo tee wee", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "watching YouTube", th: "ดูยูทูบ", rom: "doo youtube", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "playing video games", th: "เล่นเกม", rom: "lên gem", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "traveling", th: "ท่องเที่ยว", rom: "tông tîeow", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "shopping", th: "ช้อปปิ้ง", rom: "chóp-bpîng", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "studying", th: "เรียน", rom: "rian", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "learning languages", th: "เรียนภาษา", rom: "rian paa-săa", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "walking", th: "เดินเล่น", rom: "dern lên", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "exercising", th: "ออกกำลังกาย", rom: "òk gam-lang gaai", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "relaxing", th: "พักผ่อน", rom: "pák pòn", cat: "Sports & Hobbies - Level 1", pack: "extra" },
  { en: "basketball", th: "บาสเกตบอล", rom: "bâat-gèt-bon", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "cycling", th: "ปั่นจักรยาน", rom: "bpàn jàk-grà-yaan", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "weight lifting", th: "ยกน้ำหนัก", rom: "yók náam nàk", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "tennis", th: "เทนนิส", rom: "ten-nít", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "Thai boxing", th: "มวยไทย", rom: "muay tai", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "writing", th: "เขียนหนังสือ", rom: "kĭan năng-sĕu", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "drawing", th: "วาดรูป", rom: "wâat rôop", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "painting", th: "วาดภาพ", rom: "wâat pâap", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "photography", th: "ถ่ายรูป", rom: "tàai rôop", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "gardening", th: "ทำสวน", rom: "tam sŭan", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "playing guitar", th: "เล่นกีตาร์", rom: "lên gee-dtâa", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "playing piano", th: "เล่นเปียโน", rom: "lên bpia-noh", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "dancing", th: "เต้น", rom: "dtên", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "board games", th: "บอร์ดเกม", rom: "bòt gem", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "meditate", th: "นั่งสมาธิ", rom: "nâng sà-maa-tí", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  { en: "yoga", th: "โยคะ", rom: "yoh-ká", cat: "Sports & Hobbies - Level 2", pack: "extra" },
  // --- Animals ---
  { en: "animal", th: "สัตว์", rom: "sàt", cat: "Animals - Level 1", pack: "extra" },
  { en: "pet", th: "สัตว์เลี้ยง", rom: "sàt líang", cat: "Animals - Level 1", pack: "extra" },
  { en: "dog", th: "หมา", rom: "măa", cat: "Animals - Level 1", pack: "extra" },
  { en: "cat", th: "แมว", rom: "maew", cat: "Animals - Level 1", pack: "extra" },
  { en: "fish", th: "ปลา", rom: "bplaa", cat: "Animals - Level 1", pack: "extra" },
  { en: "bird", th: "นก", rom: "nók", cat: "Animals - Level 1", pack: "extra" },
  { en: "chicken", th: "ไก่", rom: "gài", cat: "Animals - Level 1", pack: "extra" },
  { en: "duck", th: "เป็ด", rom: "bpèt", cat: "Animals - Level 1", pack: "extra" },
  { en: "pig", th: "หมู", rom: "mŏo", cat: "Animals - Level 1", pack: "extra" },
  { en: "cow", th: "วัว", rom: "wuua", cat: "Animals - Level 1", pack: "extra" },
  { en: "horse", th: "ม้า", rom: "máa", cat: "Animals - Level 1", pack: "extra" },
  { en: "elephant", th: "ช้าง", rom: "cháng", cat: "Animals - Level 1", pack: "extra" },
  { en: "tiger", th: "เสือ", rom: "sĕua", cat: "Animals - Level 1", pack: "extra" },
  { en: "lion", th: "สิงโต", rom: "sĭng-dtoh", cat: "Animals - Level 1", pack: "extra" },
  { en: "monkey", th: "ลิง", rom: "ling", cat: "Animals - Level 1", pack: "extra" },
  { en: "snake", th: "งู", rom: "ngoo", cat: "Animals - Level 1", pack: "extra" },
  { en: "mouse; rat", th: "หนู", rom: "nŏo", cat: "Animals - Level 2", pack: "extra" },
  { en: "rabbit", th: "กระต่าย", rom: "grà-dtàai", cat: "Animals - Level 2", pack: "extra" },
  { en: "goat", th: "แพะ", rom: "páe", cat: "Animals - Level 2", pack: "extra" },
  { en: "buffalo", th: "ควาย", rom: "kwaai", cat: "Animals - Level 2", pack: "extra" },
  { en: "bear", th: "หมี", rom: "mĕe", cat: "Animals - Level 2", pack: "extra" },
  { en: "deer", th: "กวาง", rom: "gwaang", cat: "Animals - Level 2", pack: "extra" },
  { en: "fox", th: "สุนัขจิ้งจอก", rom: "sù-nák jîng-jòk", cat: "Animals - Level 2", pack: "extra" },
  { en: "crocodile", th: "จระเข้", rom: "jor-rá-kây", cat: "Animals - Level 2", pack: "extra" },
  { en: "gecko", th: "ตุ๊กแก", rom: "dtúk-gae", cat: "Animals - Level 2", pack: "extra" },
  { en: "turtle", th: "เต่า", rom: "dtào", cat: "Animals - Level 2", pack: "extra" },
  { en: "frog", th: "กบ", rom: "gòp", cat: "Animals - Level 2", pack: "extra" },
  { en: "mosquito", th: "ยุง", rom: "yung", cat: "Animals - Level 2", pack: "extra" },
  { en: "ant", th: "มด", rom: "mót", cat: "Animals - Level 2", pack: "extra" },
  { en: "fly", th: "แมลงวัน", rom: "má-laeng wan", cat: "Animals - Level 2", pack: "extra" },
  { en: "bee", th: "ผึ้ง", rom: "pêung", cat: "Animals - Level 2", pack: "extra" },
  { en: "butterfly", th: "ผีเสื้อ", rom: "pĕe sêua", cat: "Animals - Level 2", pack: "extra" },
  // --- Emotions+ ---
  { en: "happy", th: "มีความสุข", rom: "mee kwaam sùk", cat: "Emotions - Level 1", pack: "extra" },
  { en: "glad; pleased", th: "ดีใจ", rom: "dee jai", cat: "Emotions - Level 1", pack: "extra" },
  { en: "sad", th: "เศร้า", rom: "sâo", cat: "Emotions - Level 1", pack: "extra" },
  { en: "excited", th: "ตื่นเต้น", rom: "dtùen dtên", cat: "Emotions - Level 1", pack: "extra" },
  { en: "tired", th: "เหนื่อย", rom: "nèuay", cat: "Emotions - Level 1", pack: "extra" },
  { en: "sleepy", th: "ง่วง", rom: "ngûang", cat: "Emotions - Level 1", pack: "extra" },
  { en: "angry", th: "โกรธ", rom: "gròht", cat: "Emotions - Level 1", pack: "extra" },
  { en: "scared", th: "กลัว", rom: "glua", cat: "Emotions - Level 1", pack: "extra" },
  { en: "worried; anxious", th: "กังวล", rom: "gang-won", cat: "Emotions - Level 1", pack: "extra" },
  { en: "hungry", th: "หิว", rom: "hĭw", cat: "Emotions - Level 1", pack: "extra" },
  { en: "thirsty", th: "กระหาย", rom: "grà-hăai", cat: "Emotions - Level 1", pack: "extra" },
  { en: "bored", th: "เบื่อ", rom: "bèua", cat: "Emotions - Level 1", pack: "extra" },
  { en: "lonely", th: "เหงา", rom: "ngăo", cat: "Emotions - Level 1", pack: "extra" },
  { en: "disappointed", th: "ผิดหวัง", rom: "pìt wăng", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to be fine", th: "สบายดี", rom: "sà-baai dee", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to smile", th: "ยิ้ม", rom: "yím", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to laugh", th: "ขำ", rom: "kăm", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to cry", th: "ร้องไห้", rom: "róng hâi", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to feel", th: "รู้สึก", rom: "róo sèuk", cat: "Emotions - Level 1", pack: "extra" },
  { en: "to feel terrible", th: "รู้สึกแย่", rom: "róo sèuk yâe", cat: "Emotions - Level 1", pack: "extra" },
  { en: "hate", th: "เกลียด", rom: "glìat", cat: "Emotions - Level 2", pack: "extra" },
  { en: "proud", th: "ภูมิใจ", rom: "poom jai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "upset; hurt; heartbroken", th: "เสียใจ", rom: "sĭa jai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "stressed", th: "เครียด", rom: "krîat", cat: "Emotions - Level 2", pack: "extra" },
  { en: "shocked; surprised", th: "ตกใจ", rom: "dtòk jai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "jealous", th: "หึง", rom: "hĕung", cat: "Emotions - Level 2", pack: "extra" },
  { en: "envious", th: "อิจฉา", rom: "ìt-chăa", cat: "Emotions - Level 2", pack: "extra" },
  { en: "guilty", th: "รู้สึกผิด", rom: "róo sèuk pìt", cat: "Emotions - Level 2", pack: "extra" },
  { en: "shy", th: "อาย", rom: "aai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "confident", th: "มั่นใจ", rom: "mân jai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "hopeful", th: "มีความหวัง", rom: "mee kwaam wăng", cat: "Emotions - Level 2", pack: "extra" },
  { en: "relaxed", th: "ผ่อนคลาย", rom: "pòn klaai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "satisfied", th: "พอใจ", rom: "por jai", cat: "Emotions - Level 2", pack: "extra" },
  { en: "weak; exhausted", th: "อ่อนเพลีย", rom: "òn plia", cat: "Emotions - Level 2", pack: "extra" },
  { en: "energetic", th: "กระปรี้กระเปร่า", rom: "grà-bprêe-grà-bprào", cat: "Emotions - Level 2", pack: "extra" },
  // --- Body ---
  { en: "body", th: "ร่างกาย", rom: "râang gaai", cat: "Body", pack: "extra" },
  { en: "head", th: "หัว", rom: "hŭa", cat: "Body", pack: "extra" },
  { en: "hair", th: "ผม", rom: "pŏm", cat: "Body", pack: "extra" },
  { en: "face", th: "หน้า", rom: "nâa", cat: "Body", pack: "extra" },
  { en: "eye", th: "ตา", rom: "dtaa", cat: "Body", pack: "extra" },
  { en: "ear", th: "หู", rom: "hŏo", cat: "Body", pack: "extra" },
  { en: "nose", th: "จมูก", rom: "jà-mòok", cat: "Body", pack: "extra" },
  { en: "mouth", th: "ปาก", rom: "bpàak", cat: "Body", pack: "extra" },
  { en: "tooth", th: "ฟัน", rom: "fan", cat: "Body", pack: "extra" },
  { en: "neck", th: "คอ", rom: "kor", cat: "Body", pack: "extra" },
  { en: "shoulder", th: "ไหล่", rom: "lài", cat: "Body", pack: "extra" },
  { en: "arm", th: "แขน", rom: "kăen", cat: "Body", pack: "extra" },
  { en: "hand", th: "มือ", rom: "meu", cat: "Body", pack: "extra" },
  { en: "stomach", th: "ท้อง", rom: "tóng", cat: "Body", pack: "extra" },
  { en: "back", th: "หลัง", rom: "lăng", cat: "Body", pack: "extra" },
  { en: "leg", th: "ขา", rom: "kăa", cat: "Body", pack: "extra" },
  { en: "foot", th: "เท้า", rom: "táao", cat: "Body", pack: "extra" },
  { en: "knee", th: "เข่า", rom: "kào", cat: "Body", pack: "extra" },
  // --- Health & Symptoms ---
  { en: "pain", th: "เจ็บ", rom: "jèp", cat: "Health & Symptoms", pack: "extra" },
  { en: "headache", th: "ปวดหัว", rom: "bpùat hŭa", cat: "Health & Symptoms", pack: "extra" },
  { en: "stomach ache", th: "ปวดท้อง", rom: "bpùat tóng", cat: "Health & Symptoms", pack: "extra" },
  { en: "back pain", th: "ปวดหลัง", rom: "bpùat lăng", cat: "Health & Symptoms", pack: "extra" },
  { en: "knee pain", th: "ปวดเข่า", rom: "bpùat kào", cat: "Health & Symptoms", pack: "extra" },
  { en: "sick", th: "ป่วย", rom: "bpùay", cat: "Health & Symptoms", pack: "extra" },
  { en: "fever", th: "ไข้", rom: "kâi", cat: "Health & Symptoms", pack: "extra" },
  { en: "to have a fever", th: "เป็นไข้", rom: "bpen kâi", cat: "Health & Symptoms", pack: "extra" },
  { en: "dizzy", th: "เวียนหัว", rom: "wian hŭa", cat: "Health & Symptoms", pack: "extra" },
  { en: "nauseous", th: "คลื่นไส้", rom: "klêun sâi", cat: "Health & Symptoms", pack: "extra" },
  { en: "cough", th: "ไอ", rom: "ai", cat: "Health & Symptoms", pack: "extra" },
  { en: "runny nose", th: "น้ำมูก", rom: "náam môok", cat: "Health & Symptoms", pack: "extra" },
  { en: "medicine", th: "ยา", rom: "yaa", cat: "Health & Symptoms", pack: "extra" },
  { en: "pharmacy", th: "ร้านขายยา", rom: "ráan kăai yaa", cat: "Health & Symptoms", pack: "extra" },
  { en: "hospital", th: "โรงพยาบาล", rom: "rohng pá-yaa-baan", cat: "Health & Symptoms", pack: "extra" },
  { en: "doctor", th: "หมอ", rom: "mŏr", cat: "Health & Symptoms", pack: "extra" },
  // --- Daily Activities ---
  { en: "to sleep", th: "นอน", rom: "non", cat: "Daily Activities", pack: "extra" },
  { en: "to wake up", th: "ตื่น", rom: "dtèun", cat: "Daily Activities", pack: "extra" },
  { en: "to shower; bathe", th: "อาบน้ำ", rom: "àap náam", cat: "Daily Activities", pack: "extra" },
  { en: "to brush the teeth", th: "แปรงฟัน", rom: "bpraeng fan", cat: "Daily Activities", pack: "extra" },
  { en: "to get dressed", th: "แต่งตัว", rom: "dtàeng dtua", cat: "Daily Activities", pack: "extra" },
  { en: "to eat a meal", th: "กินข้าว", rom: "gin kâao", cat: "Daily Activities", pack: "extra" },
  { en: "to drink water", th: "ดื่มน้ำ", rom: "dèum náam", cat: "Daily Activities", pack: "extra" },
  { en: "to cook", th: "ทำอาหาร", rom: "tam aa-hăan", cat: "Daily Activities", pack: "extra" },
  { en: "to work", th: "ทำงาน", rom: "tam ngaan", cat: "Daily Activities", pack: "extra" },
  { en: "to study", th: "เรียน", rom: "rian", cat: "Daily Activities", pack: "extra" },
  { en: "to go home", th: "กลับบ้าน", rom: "glàp bâan", cat: "Daily Activities", pack: "extra" },
  { en: "to wash dishes", th: "ล้างจาน", rom: "láang jaan", cat: "Daily Activities", pack: "extra" },
  { en: "to do laundry", th: "ซักผ้า", rom: "sák pâa", cat: "Daily Activities", pack: "extra" },
  { en: "to clean", th: "ทำความสะอาด", rom: "tam kwaam sà-àat", cat: "Daily Activities", pack: "extra" },
  { en: "to do housework", th: "ทำงานบ้าน", rom: "tam ngaan bâan", cat: "Daily Activities", pack: "extra" },
  { en: "to do homework", th: "ทำการบ้าน", rom: "tam gaan bâan", cat: "Daily Activities", pack: "extra" },
  { en: "to shop; buy things", th: "ซื้อของ", rom: "séu kŏng", cat: "Daily Activities", pack: "extra" },
  { en: "to walk", th: "เดิน", rom: "dern", cat: "Daily Activities", pack: "extra" },
  { en: "to run", th: "วิ่ง", rom: "wîng", cat: "Daily Activities", pack: "extra" },
  { en: "to exercise", th: "ออกกำลังกาย", rom: "òk gam-lang gaai", cat: "Daily Activities", pack: "extra" },
  { en: "to rest", th: "พักผ่อน", rom: "pák pòn", cat: "Daily Activities", pack: "extra" },
  // --- Countries & Languages ---
  { en: "country", th: "ประเทศ", rom: "bprà-têt", cat: "Countries & Languages", pack: "extra" },
  { en: "language", th: "ภาษา", rom: "paa-săa", cat: "Countries & Languages", pack: "extra" },
  { en: "person", th: "คน", rom: "kon", cat: "Countries & Languages", pack: "extra" },
  { en: "Thai", th: "ไทย", rom: "thai", cat: "Countries & Languages", pack: "extra" },
  { en: "China", th: "จีน", rom: "jeen", cat: "Countries & Languages", pack: "extra" },
  { en: "Japan", th: "ญี่ปุ่น", rom: "yêe-bpùn", cat: "Countries & Languages", pack: "extra" },
  { en: "Korea", th: "เกาหลี", rom: "gao-lĕe", cat: "Countries & Languages", pack: "extra" },
  { en: "South Korea", th: "เกาหลีใต้", rom: "gao-lĕe dtâi", cat: "Countries & Languages", pack: "extra" },
  { en: "North Korea", th: "เกาหลีเหนือ", rom: "gao-lĕe nĕuua", cat: "Countries & Languages", pack: "extra" },
  { en: "India", th: "อินเดีย", rom: "in-diia", cat: "Countries & Languages", pack: "extra" },
  { en: "Vietnam", th: "เวียดนาม", rom: "wîat-naam", cat: "Countries & Languages", pack: "extra" },
  { en: "Singapore", th: "สิงคโปร์", rom: "sĭng-ká-bpoh", cat: "Countries & Languages", pack: "extra" },
  { en: "Malaysia", th: "มาเลเซีย", rom: "maa-lay-siia", cat: "Countries & Languages", pack: "extra" },
  { en: "Indonesia", th: "อินโดนีเซีย", rom: "in-doh-nee-siia", cat: "Countries & Languages", pack: "extra" },
  { en: "England; Britain", th: "อังกฤษ", rom: "ang-grìt", cat: "Countries & Languages", pack: "extra" },
  { en: "France", th: "ฝรั่งเศส", rom: "fà-ràng-sèt", cat: "Countries & Languages", pack: "extra" },
  { en: "Germany", th: "เยอรมนี", rom: "yer-rá-má-nee", cat: "Countries & Languages", pack: "extra" },
  { en: "Italy", th: "อิตาลี", rom: "ì-dtaa-lee", cat: "Countries & Languages", pack: "extra" },
  { en: "Spain", th: "สเปน", rom: "sà-bpen", cat: "Countries & Languages", pack: "extra" },
  { en: "Russia", th: "รัสเซีย", rom: "rát-siia", cat: "Countries & Languages", pack: "extra" },
  { en: "Netherlands", th: "เนเธอร์แลนด์", rom: "nay-ter-laen", cat: "Countries & Languages", pack: "extra" },
  { en: "Switzerland", th: "สวิตเซอร์แลนด์", rom: "sà-wìt-sêr-laen", cat: "Countries & Languages", pack: "extra" },
  { en: "America", th: "อเมริกา", rom: "à-may-rí-gaa", cat: "Countries & Languages", pack: "extra" },
  { en: "Canada", th: "แคนาดา", rom: "kae-naa-daa", cat: "Countries & Languages", pack: "extra" },
  { en: "Mexico", th: "เม็กซิโก", rom: "mék-sí-goh", cat: "Countries & Languages", pack: "extra" },
  { en: "Australia", th: "ออสเตรเลีย", rom: "òt-dtray-liia", cat: "Countries & Languages", pack: "extra" },
  { en: "New Zealand", th: "นิวซีแลนด์", rom: "niw-see-laen", cat: "Countries & Languages", pack: "extra" },
  { en: "Brazil", th: "บราซิล", rom: "braa-sin", cat: "Countries & Languages", pack: "extra" },
  { en: "Argentina", th: "อาร์เจนตินา", rom: "aa-jen-dtì-naa", cat: "Countries & Languages", pack: "extra" },
  { en: "South Africa", th: "แอฟริกาใต้", rom: "àef-rí-gaa dtâi", cat: "Countries & Languages", pack: "extra" },
  { en: "Saudi Arabia", th: "ซาอุดีอาระเบีย", rom: "saa-ù-dee-aa-rá-biia", cat: "Countries & Languages", pack: "extra" },
  { en: "Egypt", th: "อียิปต์", rom: "ee-yíp", cat: "Countries & Languages", pack: "extra" },
  { en: "Turkey", th: "ตุรกี", rom: "dtù-rá-gee", cat: "Countries & Languages", pack: "extra" },
  // --- Common Foods ---
  { en: "rice; meal", th: "ข้าว", rom: "kâao", cat: "Common Foods", pack: "extra" },
  { en: "noodles", th: "ก๋วยเตี๋ยว", rom: "kŭay-dtĭeow", cat: "Common Foods", pack: "extra" },
  { en: "bread", th: "ขนมปัง", rom: "kà-nŏm bpang", cat: "Common Foods", pack: "extra" },
  { en: "egg", th: "ไข่", rom: "kài", cat: "Common Foods", pack: "extra" },
  { en: "fried egg", th: "ไข่ดาว", rom: "kài daao", cat: "Common Foods", pack: "extra" },
  { en: "scrambled egg", th: "ไข่คน", rom: "kài kon", cat: "Common Foods", pack: "extra" },
  { en: "omelet", th: "ไข่เจียว", rom: "kài jieow", cat: "Common Foods", pack: "extra" },
  { en: "potato", th: "มันฝรั่ง", rom: "man fà-ràng", cat: "Common Foods", pack: "extra" },
  { en: "French fries", th: "เฟรนช์ฟรายส์", rom: "fren-fraai", cat: "Common Foods", pack: "extra" },
  { en: "chicken", th: "ไก่", rom: "gài", cat: "Common Foods", pack: "extra" },
  { en: "pork", th: "หมู", rom: "mŏo", cat: "Common Foods", pack: "extra" },
  { en: "beef", th: "เนื้อ", rom: "néua", cat: "Common Foods", pack: "extra" },
  { en: "fish", th: "ปลา", rom: "bplaa", cat: "Common Foods", pack: "extra" },
  { en: "shrimp", th: "กุ้ง", rom: "gûng", cat: "Common Foods", pack: "extra" },
  { en: "tofu", th: "เต้าหู้", rom: "dtâo-hôo", cat: "Common Foods", pack: "extra" },
  { en: "vegetables", th: "ผัก", rom: "pàk", cat: "Common Foods", pack: "extra" },
  { en: "tomato", th: "มะเขือเทศ", rom: "má-kĕua têt", cat: "Common Foods", pack: "extra" },
  { en: "onion", th: "หอมใหญ่", rom: "hŏm yài", cat: "Common Foods", pack: "extra" },
  { en: "garlic", th: "กระเทียม", rom: "grà-tiam", cat: "Common Foods", pack: "extra" },
  { en: "cucumber", th: "แตงกวา", rom: "dtaeng-gà-waa", cat: "Common Foods", pack: "extra" },
  { en: "carrot", th: "แครอท", rom: "kae-rôt", cat: "Common Foods", pack: "extra" },
  { en: "mushroom", th: "เห็ด", rom: "hèt", cat: "Common Foods", pack: "extra" },
  { en: "chilli", th: "พริก", rom: "prík", cat: "Common Foods", pack: "extra" },
  { en: "fruit", th: "ผลไม้", rom: "pŏn-lá-mái", cat: "Common Foods", pack: "extra" },
  { en: "banana", th: "กล้วย", rom: "glûay", cat: "Common Foods", pack: "extra" },
  { en: "mango", th: "มะม่วง", rom: "má-mûaang", cat: "Common Foods", pack: "extra" },
  { en: "orange", th: "ส้ม", rom: "sôm", cat: "Common Foods", pack: "extra" },
  { en: "watermelon", th: "แตงโม", rom: "dtaeng moh", cat: "Common Foods", pack: "extra" },
  { en: "apple", th: "แอปเปิล", rom: "àep-bpêun", cat: "Common Foods", pack: "extra" },
  { en: "pineapple", th: "สับปะรด", rom: "sàp-bpà-rót", cat: "Common Foods", pack: "extra" },
  { en: "grape", th: "องุ่น", rom: "à-ngùn", cat: "Common Foods", pack: "extra" },
  { en: "guava", th: "ฝรั่ง", rom: "fà-ràng", cat: "Common Foods", pack: "extra" },
  { en: "water", th: "น้ำ", rom: "náam", cat: "Common Foods", pack: "extra" },
  { en: "coffee", th: "กาแฟ", rom: "kaa-fae", cat: "Common Foods", pack: "extra" },
  { en: "green tea", th: "ชาเขียว", rom: "chaa kĭeow", cat: "Common Foods", pack: "extra" },
  { en: "black tea", th: "ชาดำ", rom: "chaa dam", cat: "Common Foods", pack: "extra" },
  { en: "milk", th: "นม", rom: "nom", cat: "Common Foods", pack: "extra" },
  { en: "fruit juice", th: "น้ำผลไม้", rom: "náam pŏn-lá-mái", cat: "Common Foods", pack: "extra" },
  { en: "beer", th: "เบียร์", rom: "bia", cat: "Common Foods", pack: "extra" },
  { en: "red wine", th: "ไวน์แดง", rom: "wai daeng", cat: "Common Foods", pack: "extra" },
  { en: "white wine", th: "ไวน์ขาว", rom: "wai kăao", cat: "Common Foods", pack: "extra" },
  { en: "dessert; sweets", th: "ของหวาน", rom: "kŏng wăan", cat: "Common Foods", pack: "extra" },
  { en: "sugar", th: "น้ำตาล", rom: "nám dtaan", cat: "Common Foods", pack: "extra" },
  { en: "salt", th: "เกลือ", rom: "gleua", cat: "Common Foods", pack: "extra" },
  { en: "pepper", th: "พริกไทย", rom: "prík-tai", cat: "Common Foods", pack: "extra" },
];


/* ========= CHARACTER DIALOGUE LINES =========
   Slots per character:
     - choose:       shown when the character is selected in the cpu menu
     - gameStart:    short greeting shortly after a vs-CPU game starts
     - selfStreak:   CPU got a match streak (≥2 in a row)
     - playerStreak: PLAYER got a match streak (≥2 in a row)
     - selfMatch:    CPU made a regular (non-streak) match
     - playerMatch:  PLAYER made a regular (non-streak) match
     - selfMiss:     CPU made a wrong-pair guess
     - playerMiss:   PLAYER made a wrong-pair guess
     - win:          shown in the end-game modal when CPU won (player lost)
     - lose:         shown in the end-game modal when CPU lost (player won)
     - draw:         shown in the end-game modal on a tie
   Each slot is an array of variants. When firing, a random variant is picked.
   Empty arrays = no dialogue for that slot (character stays silent).
   In-game popup probabilities for each slot live in CPU_CHAT_PROB. */
const CHARACTER_LINES = {
  grandma: {
    choose: [
      { th: 'ยายพร้อมแล้วจ้ะ', rom: 'yaai próm láew jâ', en: "Grandma's ready!" },
	  { th: 'ไม่ต้องรีบนะจ๊ะ', rom: 'mâi dtông rêep ná já', en: "No need to hurry." },
	  { th: 'หนูอายุเท่าไหร่แล้วจ๊ะ', rom: 'nŏo aa-yú tâo rài láew já', en: "How old are you, dear?" }
    ],
    win: [
      { th: 'อ้าว... ยายชนะเหรอจ๊ะ', rom: 'oh! yaai chá-ná rŏr já', en: 'Oh... Did Grandma win?' }
    ],
    lose: [
      { th: 'อุ๊ย ตายแล้ว', rom: 'úi dtaai láew', en: 'Oh dear!' },
	  { th: 'เสียดายจัง', rom: 'sĭa daai jang', en: 'What a pity.' },
      { th: 'บ้าเอ้ย', rom: 'bâa ôie', en: 'Damn!' }
    ],
    gameStart: [
      { th: 'โชคดีนะจ๊ะ', rom: 'chôhk dee ná já', en: "Good luck, dear." },
	  { th: 'ช้า ๆ นะจ๊ะ', rom: 'cháa cháa ná já', en: "Take it slow, please." }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'ไม่มีใครแพ้จ้ะ', rom: 'mâi mee krai páe jâ', en: 'Nobody lost.' }
    ]
  },
  tuktuk: {
    choose: [
      { th: 'ไปกันเลย', rom: 'bpai gan loie', en: "Let's go." },
	  { th: 'วันนี้ฝนจะตกนะครับ', rom: 'wan née fŏn jà dtòk ná kráp', en: "It will rain today." },
	  { th: 'วันนี้รถติดนะครับ', rom: 'wan née rót-dtìt ná kráp', en: "Traffic is bad today." },
      { th: 'ไปไหนครับ', rom: 'bpai năi kráp', en: 'Where are you going?' }
    ],
    win: [
      { th: 'วันนี้โชคดีมาก', rom: 'wan née chôhk dee mâak', en: "I'm really lucky today." },
	  { th: 'อย่าเสียใจนะ', rom: 'yàa sĭa jai ná', en: "Don't be sad." },
      { th: 'ดีใจมากเลยครับ', rom: 'dee jai mâak loie kráp', en: "I'm so happy!" }
    ],
    lose: [
      { th: 'ไม่เป็นไรครับ', rom: 'mâi bpen rai kráp', en: 'No worries.' },
	  { th: 'เอ๊ะ ทำไมล่ะ', rom: 'eh... tam-mai lâ', en: 'Huh? Why?' },
	  { th: 'เกมสูสีมาก', rom: 'gem sŏo-sĕe mâak', en: 'That was a very close game.' },
      { th: 'สนุกมากครับ', rom: 'sà-nùk mâak kráp', en: 'That was fun.' }
    ],
    gameStart: [
      { th: 'ขอให้สนุกนะ', rom: 'kŏr hâi sà-nùk ná', en: "Have fun." },
	  { th: 'ปะ', rom: 'bpà', en: "Let's go. (casual)" }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'สูสีกันเลยครับ', rom: 'sŏo-sĕe gan loie kráp', en: 'That was close!' }
    ]
  },
  fighter: {
    choose: [
      { th: 'มาเลยครับ', rom: 'maa loie kráp', en: 'Bring it on!' },
      { th: 'พร้อมยังครับ', rom: 'próm yang kráp', en: 'Are you ready?' },
	  { th: 'เป็นไงบ้าง', rom: 'bpen ngai bâang', en: "How's it going?" },
	  { th: 'เร็ว ๆ หน่อยครับ ผมยุ่งมาก', rom: 'reo reo nòi kráp · pŏm yûng mâak', en: "Hurry up, I'm very busy." }
    ],
    win: [
      { th: 'ชนะแล้วครับ', rom: 'chá-ná láew kráp', en: 'I won!' },
	  { th: 'เจ็บไหมครับ', rom: 'jèp măi kráp', en: 'Did that hurt?' },
      { th: 'ไม่ยากเลยครับ', rom: 'mâi yâak loie kráp', en: 'Not difficult at all.' },
      { th: 'สุดยอด', rom: 'sùt yôt', en: 'Awesome!' }
    ],
    lose: [
      { th: 'เอาอีกสักรอบไหม', rom: 'ao èek sàk rôp măi', en: 'How about another round?' },
      { th: 'น่าเบื่อจังเลย', rom: 'nâa bèua jang loie', en: 'So boring!' },
      { th: 'ไม่น่าเชื่อเลย', rom: 'mâi nâa chêua loie', en: 'Unbelievable!' },
      { th: 'ยินดีด้วย คุณชนะแล้ว', rom: 'yin dee dûay · kun chá-ná láew', en: 'Congratulations, you won!' }
    ],
    gameStart: [
      { th: 'พร้อมแล้ว', rom: 'próm láew', en: "I'm ready." },
	  { th: 'มาสู้กัน', rom: 'maa sôo gan', en: "Come on, let's fight." }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'เก่งเหมือนกันครับ', rom: 'gèng mĕuan gan kráp', en: "You're good too." }
    ]
  },
  student: {
    choose: [
      { th: 'เริ่มได้เลยค่ะ', rom: 'rêrm dâai loie kâ', en: 'We can start now.' },
      { th: 'อยากเล่นกับฉันไหมคะ', rom: 'yàak lên gàp chăn măi ká', en: 'You wanna play with me?' },
	  { th: 'ฉันน่ารักไหม', rom: 'chăn nâa rák măi', en: 'Am I cute?' },
      { th: 'ว่าไง?', rom: 'wâa ngai', en: "What's up?" }
    ],
    win: [
      { th: 'ง่ายกว่าที่คิดนะเนี่ย', rom: 'ngâai gwàa têe kít ná nîa', en: 'Easier than I thought.' },
      { th: 'เล่นอีกไหมคะ', rom: 'lên èek măi ká', en: 'Shall we play again?' },
	  { th: 'อย่าเกลียดฉันนะคะ', rom: 'yàa glìat chăn ná ká', en: "Please don't hate me." },
      { th: 'ง่ายจังเลย', rom: 'ngâai jang loie', en: "It's so easy." }
    ],
    lose: [
      { th: 'ต้องฝึกบ่อยๆแล้วหล่ะ', rom: 'dtông fèuk bòi bòi láew là', en: 'I need to practice more.' },
      { th: 'ได้ไงอ่ะ', rom: 'dâai ngai à', en: 'How?!' },
      { th: 'ยอมแล้ว', rom: 'yom láew', en: 'I give up.' }
    ],
    gameStart: [
      { th: 'ตื่นเต้นจังเลย', rom: 'dtèun dtên jang loie', en: "I'm so excited!" },
	  { th: 'มาเริ่มกันเถอะ', rom: 'maa rêrm gan tùh', en: "Let's start." }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'เสมอกันเลยค่ะ', rom: 'sà-mĕr gan loie kâ', en: "It's a tie." }
    ]
  },
  lawyer: {
    choose: [
      { th: 'เชิญเลยครับ', rom: 'chern loie kráp', en: 'Please, go ahead.' },
	  { th: 'วันนี้ร้อนมากเลยครับ', rom: 'wan née rón mâak loie kráp', en: "Today's very hot." },
	  { th: 'หิวมากเลยครับ', rom: 'hĭw mâak loie kráp', en: "I'm so hungry." },
      { th: 'กินข้าวหรือยังครับ', rom: 'gin kâao rĕu yang kráp', en: 'Have you eaten yet?' }
    ],
    win: [
      { th: 'ตามที่คาดไว้', rom: 'dtaam têe kâat wái', en: 'As expected.' },
      { th: 'ขอบคุณสำหรับความสนุก', rom: 'kòp kun săm-ràp kwaam sà-nùk', en: 'Thank you for the fun.' },
      { th: 'ผมรู้อยู่แล้ว', rom: 'pŏm róo yòo láew', en: 'I knew it.' }
    ],
    lose: [
      { th: 'ขอคัดค้านนะ', rom: 'kŏr kát káan ná', en: 'I object!' },
      { th: 'ไม่จริงนะ', rom: 'mâi jing ná', en: "That can't be!" },
      { th: 'ดวงไม่ดี', rom: 'duang mâi dee', en: 'Bad luck.' }
    ],
    gameStart: [
      { th: 'คุณก่อนเลยครับ', rom: 'kun gòn loie kráp', en: "You first." },
	  { th: 'ผมไม่รีบครับ', rom: 'pŏm mâi rêep kráp', en: "I'm in no hurry." }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'ยุติธรรมดีครับ', rom: 'yút-dtì tam dee kráp', en: 'Fair enough.' }
    ]
  },
  teacher: {
    choose: [
      { th: 'พร้อมเรียนหรือยังคะ', rom: 'próm rian rĕu yang ká', en: 'Are you ready to study?' },
	  { th: 'สบายดีไหมคะ', rom: 'sà-baai dee măi ká', en: 'How are you?' },
	  { th: 'มีคำถามไหมคะ', rom: 'mee kam tăam măi ká', en: 'Do you have any question?' },
	  { th: 'วันนี้อากาศเป็นยังไงบ้างคะ', rom: 'wan née aa-gàat bpen yang ngai bâang ká', en: "How's the weather today?" },
	  { th: 'ตั้งใจนะคะ', rom: 'dtâng jai ná ká', en: 'Pay attention.' }
    ],
    win: [
      { th: 'เข้าใจแล้วใช่ไหมคะ', rom: 'kâo jai láew châi măi ká', en: 'You understand now, right?' },
      { th: 'สนุกไหม', rom: 'sà-nùk măi', en: 'Did you have fun?' },
      { th: 'สู้ ๆ นะคะ', rom: 'sôo sôo ná ká', en: 'Keep going!' }
    ],
    lose: [
      { th: 'เก่งมากเลยค่ะ', rom: 'gèng mâak loie kâ', en: 'Well done!' },
      { th: 'ครูภูมิใจในตัวเธอนะ', rom: 'kroo poom jai nai dtuua ter ná', en: "I'm proud of you." }
    ],
    gameStart: [
      { th: 'ขอให้สนุกนะคะ', rom: 'kŏr hâi sà-nùk ná ká', en: "Have fun." },
	  { th: 'โชคดีนะคะ', rom: 'chôhk dee ná ká', en: "Good luck." }
	  // Lines spoken shortly after the game starts.
      // Add { th, rom, en } entries here; if empty (or all entries are blank), no popup will appear.
    ],
    selfStreak: [
      // Lines spoken when THIS character gets a match streak (proud / smug reactions).
    ],
    playerStreak: [
      // Lines spoken when the PLAYER gets a match streak (CPU reacts).
    ],
    selfMatch: [
      // Lines spoken after THIS character makes a regular (non-streak) match.
    ],
    playerMatch: [
      // Lines spoken after the PLAYER makes a regular (non-streak) match.
    ],
    selfMiss: [
      // Lines spoken after THIS character makes a wrong-pair guess.
    ],
    playerMiss: [
      // Lines spoken after the PLAYER makes a wrong-pair guess.
    ],
    draw: [
      { th: 'เกือบชนะครูแล้วนะคะ', rom: 'gèuap chá-ná kroo láew ná ká', en: 'You almost beat me.' }
    ]
  }
};
