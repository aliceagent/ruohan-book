import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_7_CORE_VOCAB: VocabItem[] = [
  v("周游", "to travel around"),
  v("极光", "the aurora / northern lights"),
  v("请长假", "to take a long leave"),
  v("有点类似", "somewhat similar"),
  v("南极", "Antarctica"),
  v("存钱", "to save money"),
  v("成就", "achievement"),
  v("程式〔程序〕", "program (software)"),
  v("高价买下", "bought at a high price"),
  v("勉强算", "barely counts as"),
  v("出书", "to publish a book"),
  v("华语教学", "Chinese-language teaching"),
  v("真诚", "sincere; sincerity"),
  v("背叛", "to betray; betrayal"),
  v("一期一会", "one encounter, one meeting (ichigo ichie)"),
  v("珍惜", "to cherish"),
]

export const LESSON_4_7_CHUNKS: VocabItem[] = [
  v("我一直想去北欧周游和看极光", "I’ve always wanted to travel Northern Europe and see the aurora"),
  v("很难请长假去", "it’s hard to take a long leave to go"),
  v("有点类似", "somewhat similar"),
  v("得努力存钱", "I have to work hard to save money"),
  v("我开发的一个新程式〔程序〕被高价买下", "a new program I built was bought at a high price"),
  v("我好像没有这么大的成就", "I don’t seem to have an achievement that big"),
  v("出过两本书，勉强算成就吧", "I’ve published two books — that barely counts"),
  v("出书是大成就啊", "publishing a book is a big achievement"),
  v("哪一方面的书", "what kind of books"),
  v("有关华语教学的", "ones about teaching Chinese"),
  v("下次我有外国客户要学华语介绍给你", "next time I have a foreign client who wants Chinese I’ll send them to you"),
  v("友情中最重视的是什么", "what do you value most in friendship"),
  v("你先说吧", "you go first"),
  v("真诚、不背叛、会互相帮助", "sincerity, no betrayal, and helping each other"),
  v("我珍惜相处的每一个瞬间", "I cherish every moment we spend together"),
]

export const LESSON_4_7_FAMILY: VocabItem[] = [
  v("陌生", "unfamiliar; a stranger"),
  v("一见钟情", "love at first sight"),
  v("坦露自我", "to reveal oneself"),
  v("快速升温", "to heat up quickly"),
  v("尴尬", "awkward"),
  v("萍水之交", "a chance acquaintance"),
  v("三观相合", "values align"),
  v("脱单", "to stop being single"),
  v("一期一会", "treasure this meeting"),
]

export const LESSON_4_7_PRACTICE: MiniLessonExample[] = [
  ex("14题，我一直想去北欧周游和看极光！可是很难请长假去。", "Question 14: I’ve always wanted to travel Northern Europe and see the aurora. But it’s hard to take a long leave."),
  ex("有点类似，我想去南极，得努力存钱。", "Somewhat similar. I want to go to Antarctica. I have to save hard."),
  ex("最大的成就，应该是我开发的一个新程式〔程序〕被高价买下。", "Greatest achievement: a new program I built was bought at a high price."),
  ex("出过两本书，勉强算成就吧。", "I’ve published two books. That barely counts as an achievement."),
  ex("出书是大成就啊！哪一方面的书？", "Publishing a book is a big achievement! What kind?"),
  ex("有关华语教学的。", "Ones about teaching Chinese."),
  ex("我最重视的是真诚、不背叛、会互相帮助。", "What I value most is sincerity, no betrayal, and helping each other."),
  ex("我最喜欢的一句话是“一期一会”，我珍惜相处的每一个瞬间。", "My favorite line is “一期一会.” I cherish every moment together."),
]

export const LESSON_4_7_FILL_BLANKS = [
  fb("1", "I’ve always wanted to travel Northern Europe and see the aurora.", "我一直想去北欧周游和看", "！", "极光", ["月光", "灯光", "阳光"]),
  fb("2", "It’s hard to take a long leave to go.", "可是很难", "去。", "请长假", ["请病假", "请年假", "请事假"]),
  fb("3", "Somewhat similar.", "", "，我想去南极。", "有点类似", ["有点意思", "有点麻烦", "有点后悔"]),
  fb("4", "I have to work hard to save money.", "得努力", "。", "存钱", ["花钱", "借钱", "赚钱少"]),
  fb("5", "A new program I built was bought at a high price.", "我开发的一个新程式〔程序〕被", "。", "高价买下", ["低价卖掉", "免费送出", "高价租下"]),
  fb("6", "That barely counts as an achievement.", "出过两本书，", "成就吧。", "勉强算", ["一定是", "不算", "正好是"]),
  fb("7", "You go first.", "友情中最重视的是什么，hmm，", "。", "你先说吧", ["我先走吧", "你先走吧", "我们再说"]),
  fb("8", "I cherish every moment we spend together.", "我珍惜相处的每一个", "。", "瞬间", ["小时", "星期", "世纪"]),
]

export const LESSON_4_7_LINE_NOTES: Record<string, MiniLesson[]> = {
  "14 题，我一直想去北欧周游和看极光！可是很难请长假去，你呢？": [
    ml("N 题，+ answer", "question N — here’s my answer", ["They are working through the 36 questions out loud. 14 题 is the prompt label."], {
      examples: [ex("14题，我一直想去北欧周游和看极光！", "Question 14: I’ve always wanted to travel Northern Europe and see the aurora!")],
    }),
    ml("一直想 + VP", "have always wanted to…", ["一直想去 marks a long-held dream. 周游 + 看极光 is the pair."]),
    ml("很难请长假", "hard to take a long leave", ["请 + 假. 长假 is the blocker, not money — yet."]),
  ],
  "有点类似，我想去南极，得努力存钱。": [
    ml("有点类似", "somewhat similar", ["Awards the overlap, then shifts the destination."], {
      examples: [ex("有点类似，我想去南极。", "Somewhat similar — I want to go to Antarctica.")],
    }),
    ml("得 + VP", "have to…", ["得努力存钱. 得 is must (děi)."]),
  ],
  "15 题，最大的成就，hmm，应该是我开发的一个新程式〔程序〕被高价买下。": [
    ml("hmm，应该是…", "hmm — it should be…", ["hmm buys thinking time. 应该是 hedges a boast."]),
    ml("程式〔程序〕", "program / software", ["程式 is Taiwan; 〔程序〕 is the mainland note. 被高价买下 is the achievement math."], {
      examples: [ex("一个新程式被高价买下。", "A new program was bought at a high price.")],
    }),
  ],
  "好酷，我好像没有这么大的成就，出过两本书，勉强算成就吧。": [
    ml("好酷", "so cool", ["Praise first, then 谦虚."]),
    ml("勉强算 + noun + 吧", "that barely counts as…", ["勉强算成就吧 talks a real win down. Same family as 4-6 而已."], {
      examples: [ex("出过两本书，勉强算成就吧。", "I’ve published two books — that barely counts.")],
    }),
  ],
  "出书是大成就啊！哪一方面的书？": [
    ml("出书是大成就啊", "publishing is a big achievement", ["Rejects the 勉强. 啊 is warm insistence."]),
    ml("哪一方面的 + noun", "what kind / field of…", ["哪一方面的书 asks for the subject, not the title."]),
  ],
  "有关华语教学的。": [
    ml("有关 + field + 的", "(ones) related to…", ["的 stands for 书. Short answer, then the job-offer."], {
      examples: [ex("有关华语教学的。", "Ones about teaching Chinese.")],
    }),
  ],
  "厉害！下次我有外国客户要学华语介绍给你。": [
    ml("下次我有 + person + 介绍给你", "next time I have a … I’ll send them to you", ["A real-world 一期一会 offer — the mixer becomes a referral."], {
      examples: [ex("下次我有外国客户要学华语介绍给你。", "Next time I have a foreign client who wants Chinese, I’ll send them to you.")],
    }),
  ],
  "好啊！谢谢。16 题，友情中最重视的是什么，hmm，你先说吧。": [
    ml("N 题，+ prompt，你先说吧", "question N — you go first", ["Passes the floor. 最重视的是什么 is the book’s wording."], {
      examples: [ex("你先说吧。", "You go first.")],
    }),
  ],
  "我最重视的是真诚、不背叛、会互相帮助。你呢？": [
    ml("我最重视的是 + list", "what I value most is…", ["Stack virtues with 顿号. 不背叛 is a negated noun."], {
      examples: [ex("我最重视的是真诚、不背叛、会互相帮助。", "What I value most is sincerity, no betrayal, and helping each other.")],
    }),
  ],
  "我最喜欢的一句话是“一期一会”，我珍惜相处的每一个瞬间。": [
    ml("一期一会", "one encounter, one meeting", ["Japanese 一期一会 via Chinese. This meeting will not repeat — so treat it as the only one."], {
      examples: [ex("我最喜欢的一句话是“一期一会”。", "My favorite line is “一期一会.”")],
    }),
    ml("珍惜 + 每一个瞬间", "cherish every moment", ["相处的每一个瞬间. A 36-question closer."]),
  ],
}

export const LESSON_4_7_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("一直想 + VP", "Have always wanted to…", ["A long-held wish. Pair with 可是 + blocker."], {
    pattern: "一直想 + VP，可是…",
    examples: [
      ex("我一直想去北欧周游和看极光。", "I’ve always wanted to travel Northern Europe and see the aurora."),
      ex("我一直想出书，可是没时间。", "I’ve always wanted to publish, but I have no time."),
      ex("他一直想去南极。", "He’s always wanted to go to Antarctica."),
    ],
  }),
  ml("勉强算 + noun", "That barely counts as…", ["Talks a success down so you can keep talking. Reunion / mixer humility."], {
    pattern: "VP，勉强算 + noun + 吧",
    examples: [
      ex("出过两本书，勉强算成就吧。", "I’ve published two books — that barely counts."),
      ex("跑完半马，勉强算运动吧。", "Finishing a half barely counts as sport."),
      ex("会一点中文，勉强算会说吧。", "A little Chinese — that barely counts as speaking it."),
    ],
  }),
  ml("有关 + field + 的", "(Ones) related to…", ["的 stands for the noun already in play: 书、工作、人."], {
    pattern: "有关 + noun + 的",
    examples: [
      ex("有关华语教学的。", "Ones about teaching Chinese."),
      ex("有关旅行的书。", "Books about travel."),
      ex("有关工作的事。", "Matters related to work."),
    ],
  }),
  ml("你先说吧", "You go first", ["Hands a hard 36-question prompt across the table. Soft 吧."], {
    pattern: "（题目），你先说吧",
    examples: [
      ex("你先说吧。", "You go first."),
      ex("这个问题你先答。", "You answer this one first."),
      ex("我先听你说。", "I’ll listen to you first."),
    ],
  }),
  ml("一期一会", "Treasure this unrepeatable meeting", ["A borrowed Japanese four-character. Use it when a first meeting might also be the last."], {
    pattern: "一期一会",
    examples: [
      ex("我最喜欢的一句话是“一期一会”。", "My favorite line is “一期一会.”"),
      ex("我珍惜相处的每一个瞬间。", "I cherish every moment together."),
      ex("今晚也是一期一会。", "Tonight is also a once-only meeting."),
    ],
  }),
]
