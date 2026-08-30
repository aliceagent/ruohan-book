import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_3_CORE_VOCAB: VocabItem[] = [
  v("出去", "to go out"),
  v("接", "to pick up (someone)"),
  v("小孩", "child; kid"),
  v("安亲班", "after-school care (Taiwan)"),
  v("报", "to sign up; to enroll"),
  v("才艺班", "talent / enrichment class"),
  v("一周", "one week"),
  v("英语", "English"),
  v("创作思考", "creative thinking (a class)"),
  v("围棋", "Go (board game)"),
  v("课", "class; course"),
  v("说是", "they say; supposedly"),
  v("儿童哲学", "philosophy for children"),
  v("主题", "theme; topic"),
  v("讨论", "to discuss"),
  v("画图", "to draw"),
  v("创作", "to create; to make art"),
  v("听起来", "it sounds (like)"),
  v("有意思", "interesting"),
  v("请教", "to ask (for advice); to consult"),
]

export const LESSON_2_3_CHUNKS: VocabItem[] = [
  v("出去啊？", "heading out?"),
  v("去接小孩", "going to pick up the kid"),
  v("安亲班吗？", "after-school care?"),
  v("给他报了才艺班", "signed him up for a talent class"),
  v("学什么？", "what’s he studying?"),
  v("一周三天", "three days a week"),
  v("上英语", "take English class"),
  v("创作思考和围棋", "creative thinking and Go"),
  v("这么多！", "so many!"),
  v("是什么课？", "what kind of class is that?"),
  v("说是儿童哲学", "they say it’s children’s philosophy"),
  v("每周给一个主题", "each week they give a theme"),
  v("讨论后画图或创作", "after discussing, draw or create"),
  v("听起来很有意思", "sounds really interesting"),
  v("我再跟你请教", "I’ll ask you more later"),
  v("你先去忙吧", "you go ahead and get going"),
]

export const LESSON_2_3_FAMILY: VocabItem[] = [
  v("才艺班", "talent / enrichment class"),
  v("安亲班", "after-school care"),
  v("课外活动", "extracurriculars"),
  v("报班", "enroll in a class"),
  v("英语班", "English class"),
  v("围棋", "Go"),
  v("创作思考", "creative thinking class"),
  v("儿童哲学", "philosophy for children"),
]

export const LESSON_2_3_PRACTICE: MiniLessonExample[] = [
  ex("安安妈妈！出去啊？", "An’an’s mom! Heading out?"),
  ex("对，去接小孩。", "Yeah — going to pick up the kid."),
  ex("安亲班吗？", "After-school care?"),
  ex("不是，我最近给他报了才艺班。", "No, I recently signed him up for a talent class."),
  ex("一周三天，上英语、创作思考和围棋。", "Three days a week: English, creative thinking, and Go."),
  ex("说是儿童哲学，每周给一个主题讨论后画图或创作。", "They say it’s children’s philosophy — each week a theme, then they discuss and draw or create."),
  ex("听起来很有意思，我再跟你请教。", "Sounds really interesting. I’ll ask you more later."),
  ex("好，你先去忙吧。", "Okay — you go ahead and get going."),
]

export const LESSON_2_3_FILL_BLANKS = [
  fb("1", "Heading out?", "安安妈妈！", "？", "出去啊", ["回来啊", "上课啊", "睡觉啊"]),
  fb("2", "Going to pick up the kid.", "去", "。", "接小孩", ["送小孩", "看小孩", "带小孩"]),
  fb("3", "I recently signed him up for a talent class.", "我最近给他", "才艺班。", "报了", ["改了", "退了", "看了"]),
  fb("4", "Three days a week.", "", "，上英语、创作思考和围棋。", "一周三天", ["一天三周", "三天一周", "一周三课"]),
  fb("5", "They say it’s children’s philosophy.", "", "儿童哲学。", "说是", ["要是", "可是", "还是"]),
  fb("6", "Sounds really interesting.", "", "，我再跟你请教。", "听起来很有意思", ["看起来很难过", "吃起来很好吃", "走起来很累"]),
  fb("7", "I’ll ask you more later.", "听起来很有意思，我", "。", "再跟你请教", ["先跟你请假", "再跟你见面", "先跟你说一声"]),
  fb("8", "You go ahead and get going.", "好，", "。", "你先去忙吧", ["你先吃饭吧", "你先坐下吧", "你先睡觉吧"]),
]

export const LESSON_2_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "安安妈妈！出去啊？": [
    ml("安安妈妈", "An’an’s mom", ["Call another parent 小孩名字 + 妈妈 / 爸爸. You may not know her name — you know the kid’s."], {
      examples: [ex("小明爸爸在吗？", "Is Xiaoming’s dad around?")],
    }),
    ml("出去啊？", "heading out?", ["A casual check, not a real question. 啊 softens it: I see you leaving — going out?"], {
      pattern: "V + 啊？",
      examples: [ex("回家啊？", "Heading home?"), ex("下班啊？", "Done with work?")],
    }),
  ],
  "去接小孩。": [
    ml("接小孩", "pick up the kid", ["接 is collect someone. 去接小孩 is the whole errand in three syllables."], {
      examples: [ex("我三点去接他。", "I’ll pick him up at three.")],
    }),
    ml("bare verb phrase", "dropping 我", ["No 我. The short answer matches the short check: 出去啊？→ 去接小孩。"]),
  ],
  "安亲班吗？": [
    ml("安亲班", "after-school care", ["Taiwan word: a place that watches kids after school until parents finish work. Not a talent class."], {
      examples: [ex("他四点从安亲班回来。", "He gets back from after-school care at four.")],
    }),
    ml("X 吗？", "guessing", ["Rising 吗 after a noun: ‘after-school care, I’m guessing?’ Same shape as 家教吗？"]),
  ],
  "不是，我最近给他报了才艺班。": [
    ml("给 + person + 报了", "signed someone up", ["报 = enroll. 给他报了才艺班 = I signed him up. 给 marks who benefits."], {
      pattern: "给 + person + 报了 + class",
      examples: [ex("我给她报了英语班。", "I signed her up for English class."), ex("你给小孩报了什么？", "What did you enroll the kid in?")],
    }),
    ml("才艺班", "talent / enrichment class", ["才艺班 is piano, Go, English, art — skills. 安亲班 is childcare. This line corrects the guess."]),
    ml("最近", "recently", ["最近 + 了 = a new setup, not a long-standing habit."]),
  ],
  "才艺班？学什么？": [
    ml("echo + 学什么", "talent class? studying what?", ["Repeat the new word, then ask 学什么. Two short beats — very spoken."], {
      examples: [ex("家教？教什么？", "Tutoring? Teaching what?")],
    }),
  ],
  "一周三天，上英语、创作思考和围棋。": [
    ml("一周三天", "three days a week", ["一 + period + number + measure. 一周两次、一个月三次. How often, not how long."], {
      pattern: "一 + period + number + measure",
      examples: [ex("一周两次。", "Twice a week."), ex("一个月四次。", "Four times a month.")],
    }),
    ml("上 + class", "take / attend a class", ["上英语、上围棋. 上 is the everyday verb for going to a lesson."], {
      examples: [ex("他星期二上围棋。", "He has Go on Tuesdays.")],
    }),
    ml("创作思考、围棋", "course names", ["创作思考 is an enrichment class (creative thinking). 围棋 is Go. Listed with 和 like a schedule."]),
  ],
  "这么多！创作思考是什么课？": [
    ml("这么多", "so many", ["A reaction first: three classes a week is a lot. Then the real question."], {
      examples: [ex("这么多作业！", "So much homework!")],
    }),
    ml("是什么课？", "what kind of class?", ["X 是什么课 asks for the type, not the timetable. 创作思考 is a name she doesn’t know."], {
      examples: [ex("书法是什么课？", "What kind of class is calligraphy?")],
    }),
  ],
  "说是儿童哲学，每周给一个主题讨论后画图或创作。": [
    ml("说是…", "they say / supposedly", ["说是 hedges: that’s what they call it. You didn’t name it yourself."], {
      pattern: "说是 + noun / clause",
      examples: [ex("说是儿童哲学。", "They say it’s children’s philosophy."), ex("说是很好玩。", "They say it’s really fun.")],
    }),
    ml("每周给一个主题", "each week they give a theme", ["给 here is ‘assign / hand out’. 每周 + 给 + theme = the weekly prompt."]),
    ml("讨论后 + V", "after discussing, then…", ["后 stacks the next step: discuss, then draw or create. 或 = or."], {
      examples: [ex("吃完后去接小孩。", "After eating, go pick up the kid.")],
    }),
  ],
  "听起来很有意思，我再跟你请教，你先去忙吧。": [
    ml("听起来", "it sounds…", ["听起来 + adj. You haven’t seen the class — only heard the description."], {
      examples: [ex("听起来不错。", "Sounds pretty good.")],
    }),
    ml("再跟你请教", "I’ll ask you more later", ["再 = another time. 请教 is polite ‘consult you’. A warm postpone, not a brush-off."], {
      pattern: "再跟你请教",
      examples: [ex("这个我再跟你请教。", "I’ll ask you more about this later.")],
    }),
    ml("你先去忙吧", "you go ahead and get going", ["先 + 去忙 + 吧 lets the other person leave. 吧 makes it a nudge, not an order."], {
      pattern: "你先 + V + 吧",
      examples: [ex("你先去忙吧。", "You go ahead and get going."), ex("你先走吧。", "You go ahead.")],
    }),
  ],
  "好，Bye Bye!": [
    ml("好", "okay", ["好 takes the whole close: the invite-later and the ‘go be busy’."]),
    ml("Bye Bye", "bye bye", ["English goodbye is common in Taiwan parent small talk. Same slot as 拜拜。"]),
  ],
}

export const LESSON_2_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("出去啊？", "Heading out? (casual check)", ["Verb + 啊？ is a soft check when you already see what’s happening. Not asking for new information."], {
    pattern: "V + 啊？",
    examples: [
      ex("出去啊？", "Heading out?"),
      ex("接小孩啊？", "Picking up the kid?"),
      ex("下班啊？", "Done with work?"),
    ],
  }),
  ml("给 + person + 报了", "signed someone up", ["报 is enroll. 给 marks who you signed up. 了 says the signup is done."], {
    pattern: "给 + person + 报了 + class",
    examples: [
      ex("我最近给他报了才艺班。", "I recently signed him up for a talent class."),
      ex("我给她报了英语班。", "I signed her up for English class."),
      ex("你给小孩报了围棋吗？", "Did you enroll the kid in Go?"),
    ],
  }),
  ml("一周三天", "three days a week", ["一 + time period + number + measure. Frequency, not duration. Swap the number: 一周两天、一周五天。"], {
    pattern: "一 + period + number + measure",
    examples: [
      ex("一周三天，上英语、创作思考和围棋。", "Three days a week: English, creative thinking, and Go."),
      ex("她一周两天上安亲班。", "She goes to after-school care two days a week."),
      ex("围棋班一周一次。", "Go class is once a week."),
    ],
  }),
  ml("说是…", "They say / supposedly", ["说是 reports a label you didn’t invent. Soft and a little distant: that’s what they call it."], {
    pattern: "说是 + noun / clause",
    examples: [
      ex("说是儿童哲学。", "They say it’s children’s philosophy."),
      ex("说是才艺班，其实比较像安亲班。", "They say it’s a talent class — it’s more like after-school care."),
      ex("说是很好玩，我还没看过。", "They say it’s really fun. I haven’t seen it yet."),
    ],
  }),
  ml("再跟你请教 / 你先去忙吧", "Ask later / you go be busy", ["A two-beat close: 再跟你请教 parks the topic, 你先去忙吧 frees the other person. Both are polite exits."], {
    pattern: "再跟你请教，你先去忙吧",
    examples: [
      ex("我再跟你请教，你先去忙吧。", "I’ll ask you more later — you go ahead and get going."),
      ex("这个我再跟你请教。", "I’ll ask you more about this later."),
      ex("好，你先去忙吧。", "Okay — you go ahead and get going."),
    ],
  }),
]
