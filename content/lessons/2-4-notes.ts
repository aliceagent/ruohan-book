import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_4_CORE_VOCAB: VocabItem[] = [
  v("老公", "husband"),
  v("念", "to attend (a school)"),
  v("国际学校", "international school"),
  v("私立", "private (school)"),
  v("公立", "public (school)"),
  v("学区", "school district"),
  v("迁户口", "to transfer household registration"),
  v("送", "to send (a child to school)"),
  v("夏山学校", "Summerhill School"),
  v("贵族", "elite; aristocratic"),
  v("学费", "tuition"),
  v("几十万", "several hundred thousand"),
  v("勉强", "barely; with difficulty"),
  v("国立大学", "national university"),
  v("时代", "era; these times"),
  v("补习", "cram school; extra tutoring"),
  v("差不了多少", "not much difference"),
  v("教育妈妈", "education mom"),
  v("资料", "materials; information"),
  v("研究研究", "to look into it"),
]

export const LESSON_2_4_CHUNKS: VocabItem[] = [
  v("给儿子念国际学校", "have our son attend an international school"),
  v("那不是私立的吗", "isn’t that a private one?"),
  v("公立的不好吗", "isn’t a public one fine?"),
  v("这个学区不太好", "this school district isn’t great"),
  v("早就迁户口了", "already transferred household registration long ago"),
  v("送小孩念私立的", "send the kids to a private school"),
  v("会念的就会念", "those who can study will study"),
  v("送到哪都一样", "same wherever you send them"),
  v("学费几十万吧", "tuition is a few hundred thousand, right?"),
  v("勉强可以", "we can just barely manage"),
  v("过得这么勉强", "live this tightly"),
  v("学得很好", "can still learn very well"),
  v("另外补习", "extra cram school on the side"),
  v("一路升到大学", "go all the way up to university"),
  v("差不了多少", "not much difference"),
  v("研究研究吧", "look into it"),
]

export const LESSON_2_4_FAMILY: VocabItem[] = [
  v("公立", "public (school)"),
  v("私立", "private (school)"),
  v("国际学校", "international school"),
  v("学区", "school district"),
  v("公立学校", "public school"),
  v("国立大学", "national university"),
  v("补习", "cram school"),
  v("迁户口", "transfer household registration"),
  v("学费", "tuition"),
]

export const LESSON_2_4_PRACTICE: MiniLessonExample[] = [
  ex("老公，我想给儿子念国际学校。", "Honey, I want our son to go to an international school."),
  ex("那不是私立的吗？公立的不好吗？", "Isn’t that private? Isn’t a public school fine?"),
  ex("这个学区不太好，很多人早就迁户口了。", "This district isn’t great. A lot of people already moved their household registration."),
  ex("会念的就会念，送到哪都一样。", "Kids who can study will study. It’s the same wherever you send them."),
  ex("两个人都在工作，我算了一下，学费勉强可以。", "We both work. I did the math — we can just barely cover tuition."),
  ex("公立学校还是可以学得很好的。我都是念公立。", "You can still learn very well at a public school. I went to public school."),
  ex("念公立的还要另外补习，算起来差不了多少。", "Public-school kids still need extra tutoring. When you add it up, it’s not that different."),
  ex("你去要资料来，再研究研究吧。", "Go get the materials, and we’ll look into it."),
]

export const LESSON_2_4_FILL_BLANKS = [
  fb("1", "I want our son to go to an international school.", "我想给儿子念", "。", "国际学校", ["公立医院", "补习班", "幼稚园"]),
  fb("2", "Isn’t that a private school?", "那不是", "吗？", "私立的", ["公立的", "国立的", "附近的"]),
  fb("3", "A lot of people already transferred their household registration.", "很多人早就", "了。", "迁户口", ["改名字", "换工作", "交学费"]),
  fb("4", "Those who can study will study.", "", "，不会念的就不会念。", "会念的就会念", ["会念就不会念", "不会念也会念", "要念的才要念"]),
  fb("5", "I did the math — we can just barely manage.", "我算了一下，", "。", "勉强可以", ["一定可以", "完全不行", "差不多可以"]),
  fb("6", "Public-school kids still need extra tutoring.", "念公立的还要另外", "。", "补习", ["搬家", "放假", "毕业"]),
  fb("7", "When you add it up, it’s not that different.", "算起来", "啦。", "差不了多少", ["差了很多", "差不多贵", "差一点"]),
  fb("8", "Go get the materials and look into it.", "你去要资料来，再", "吧。", "研究研究", ["休息休息", "考虑考虑", "商量商量"]),
]

export const LESSON_2_4_LINE_NOTES: Record<string, MiniLesson[]> = {
  "老公，我想给儿子念国际学校。": [
    ml("给儿子念…", "have our son attend…", ["给 + person + 念 + school = enroll them / have them go there. 念 is ‘attend’, not ‘read aloud’."], {
      pattern: "给 + person + 念 + school",
      examples: [ex("给儿子念国际学校", "have our son attend an international school"), ex("给女儿念私立的", "send our daughter to a private school")],
    }),
    ml("国际学校", "international school", ["Often English-medium, expensive, and treated as a kind of 私立 in this dialogue."]),
  ],
  "那不是私立的吗？公立的不好吗？": [
    ml("那不是…吗", "isn’t that…?", ["Rhetorical check. He already thinks he knows: 那不是私立的吗 = that’s private, right?"], {
      pattern: "那不是 + X + 吗",
      examples: [ex("那不是私立的吗？", "Isn’t that a private school?"), ex("那不是太贵了吗？", "Isn’t that too expensive?")],
    }),
    ml("私立 / 公立", "private / public", ["私立 = privately run. 公立 = government-run. The 的 turns them into ‘the private one / the public one’."]),
  ],
  "附近的太太们都说这个学区不太好，很多人早就迁户口了，或者送小孩念私立的。": [
    ml("学区", "school district", ["Where you live decides which 公立 school you get. A ‘bad’ 学区 is the whole argument."]),
    ml("迁户口", "transfer household registration", ["Move the 户口 into a better district so the child can enter that public school. Very Taiwan / China school talk."]),
    ml("送小孩念…", "send the kids to…", ["送 + child + 念 + school. Same family as 给儿子念, a bit more ‘drop them off / place them’."], {
      examples: [ex("送小孩念私立的", "send the kids to a private school")],
    }),
    ml("太太们", "the wives / the ladies nearby", ["附近的太太们 = the neighborhood moms. Sets up 教育妈妈 later."]),
  ],
  "会念的就会念，不会念的就不会念，送到哪都一样。": [
    ml("会V的就会V", "those who can V will V", ["Fatalistic split: the ones who’ve got it, have it. 会念的就会念，不会念的就不会念."], {
      pattern: "会V的就会V，不会V的就不会V",
      examples: [ex("会念的就会念。", "Those who can study will study."), ex("会的就会，不会的就不会。", "If you can, you can; if you can’t, you can’t.")],
    }),
    ml("送到哪都一样", "same wherever you send them", ["疑问词 + 都 = no matter. 哪 + 都一样 = anywhere is the same."], {
      pattern: "V + 到 + 哪 + 都 + 一样",
    }),
  ],
  "你看过《夏山学校》那本书吗？光阳学校就像那样。": [
    ml("《夏山学校》", "Summerhill School", ["A.S. Neill’s free-school book. She is selling a progressive, not just expensive, private school."]),
    ml("就像那样", "just like that", ["就像 + 那样 points back to the book. 光阳学校就像那样 = Guangyang is that kind of place."], {
      examples: [ex("光阳学校就像那样。", "Guangyang School is just like that.")],
    }),
  ],
  "那是贵族小孩念的，学费几十万吧？": [
    ml("贵族小孩", "elite / rich kids", ["贵族 here is social, not royal. ‘That’s for rich kids.’"]),
    ml("学费几十万", "tuition in the hundreds of thousands", ["几十万 = several hundred thousand (TWD). 吧 fishes for confirmation."], {
      examples: [ex("学费几十万吧？", "Tuition is a few hundred thousand, right?")],
    }),
  ],
  "我们两个人都在工作，我算了一下，勉强可以。": [
    ml("勉强可以", "can just barely manage", ["勉强 = only just. 勉强可以 = the budget works, but it’s tight."], {
      pattern: "勉强 + 可以 / 够 / 接受",
      examples: [ex("我算了一下，勉强可以。", "I did the math — we can just barely manage."), ex("时间勉强够。", "There’s just barely enough time.")],
    }),
    ml("算了一下", "I did the math", ["一下 softens 算: a quick calculation, not a spreadsheet speech."]),
  ],
  "为什么我们要过得这么勉强？公立学校还是可以学得很好的，我都是念公立，不也国立大学毕业？": [
    ml("过得这么勉强", "live this tightly", ["过得 + complement = how you live. 这么勉强 echoes 勉强可以 and turns money into a lifestyle complaint."]),
    ml("学得很好", "learn very well", ["还是可以学得很好的 = you can still learn plenty. 得 after 学 is the degree."], {
      pattern: "V + 得 + complement",
    }),
    ml("不也…？", "didn’t I also…?", ["Rhetorical proof: 不也国立大学毕业 = I went public and still graduated from a national university."], {
      examples: [ex("不也国立大学毕业？", "Didn’t I also graduate from a national university?")],
    }),
  ],
  "现在这个时代，念公立的还要另外补习，私立的不用，一路升到大学，算起来差不了多少啦。": [
    ml("差不了多少", "not much difference", ["差不了多少 = the gap won’t be big. 算起来 = when you add it up. 啦 softens the sell."], {
      pattern: "差不了多少",
      examples: [ex("算起来差不了多少啦。", "When you add it up, it’s not that different."), ex("两条路差不了多少。", "The two routes aren’t that different.")],
    }),
    ml("另外补习", "extra tutoring on the side", ["另外 = on top of that. Public school plus 补习 vs. private that carries you 一路升到大学."]),
    ml("一路升到大学", "all the way up to university", ["一路 + V + 到 = go the whole way. The private-school pipeline pitch."]),
    ml("现在这个时代", "in this day and age", ["Frames public school as outdated unless you pay for 补习."]),
  ],
  "哎，你们这群教育妈妈！你去要资料来，再研究研究吧。": [
    ml("研究研究", "look into it", ["Verb reduplication = try it a bit / give it a look. Softer than 研究. 再研究研究吧 postpones the fight."], {
      pattern: "V V / V 一 V",
      examples: [ex("再研究研究吧。", "Look into it a bit more."), ex("我回去考虑考虑。", "I’ll go think it over.")],
    }),
    ml("教育妈妈", "education moms", ["Moms who run the school race. 你们这群 is teasing, a little fed up."]),
    ml("要资料来", "go get the materials", ["要 = ask for. 来 marks bringing them back. Classic kick-the-can close."]),
  ],
}

export const LESSON_2_4_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("给儿子念…", "Have (our) son attend…", ["给 + person + 念 + school. 给 marks who you’re placing; 念 is attend, not ‘read’."], {
    pattern: "给 + person + 念 + school",
    examples: [
      ex("我想给儿子念国际学校。", "I want our son to go to an international school."),
      ex("他们给女儿念私立的。", "They’re sending their daughter to a private school."),
      ex("你打算给小孩念哪里？", "Where are you planning to send the kids?"),
    ],
  }),
  ml("那不是…吗", "Isn’t that…?", ["A rhetorical check, not a real question. 那不是私立的吗 = you already think it is."], {
    pattern: "那不是 + X + 吗",
    examples: [
      ex("那不是私立的吗？", "Isn’t that a private school?"),
      ex("那不是太贵了吗？", "Isn’t that too expensive?"),
      ex("那不是你的书吗？", "Isn’t that your book?"),
    ],
  }),
  ml("会V的就会V", "Those who can V will V", ["Splits people into two camps. Often fatalistic: school choice won’t change who studies."], {
    pattern: "会V的就会V，不会V的就不会V",
    examples: [
      ex("会念的就会念，不会念的就不会念。", "Those who can study will study; those who can’t, won’t."),
      ex("会的就会，不会的就不会。", "If you can, you can; if you can’t, you can’t."),
      ex("该来的就会来。", "What is meant to come will come."),
    ],
  }),
  ml("勉强可以", "Can just barely manage", ["勉强 = only just. Money, time, or energy that works — barely."], {
    pattern: "勉强 + 可以 / 够 / 接受",
    examples: [
      ex("我算了一下，勉强可以。", "I did the math — we can just barely manage."),
      ex("时间勉强够。", "There’s just barely enough time."),
      ex("这个价钱勉强可以接受。", "This price is just about acceptable."),
    ],
  }),
  ml("差不了多少", "Not much difference", ["The gap won’t be big. Pair with 算起来 when you are adding up costs."], {
    pattern: "差不了多少",
    examples: [
      ex("算起来差不了多少啦。", "When you add it up, it’s not that different."),
      ex("两条路差不了多少。", "The two routes aren’t that different."),
      ex("价格差不了多少。", "The prices aren’t that different."),
    ],
  }),
]
