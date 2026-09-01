import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_1_CORE_VOCAB: VocabItem[] = [
  v("高就", "where one works (polite)"),
  v("健身教练", "fitness trainer"),
  v("健美", "fit; bodybuilding-beautiful"),
  v("曲线", "curves; body line"),
  v("心理师", "psychologist / counselor"),
  v("重修旧好", "to make up; to reconcile"),
  v("看透人心", "to see through people"),
  v("预言师", "prophet; fortune-teller"),
  v("身心平衡", "mind–body balance"),
  v("很赞", "awesome (spoken)"),
  v("合作", "to cooperate"),
  v("照照相", "to take some photos"),
  v("兜风", "to go for a drive"),
  v("快速约会", "speed dating"),
  v("相亲对象", "blind-date partner"),
]

export const LESSON_4_1_CHUNKS: VocabItem[] = [
  v("你在哪里高就", "where do you work? (polite)"),
  v("专门塑造健美的曲线", "I specialize in sculpting a fit body line"),
  v("帮他们重修旧好", "help them make up"),
  v("能看透人心的心理师", "a psychologist who can see through people"),
  v("我是心理师不是预言师", "I’m a psychologist, not a prophet"),
  v("身心平衡，好像很赞", "mind–body balance — that sounds great"),
  v("可以合作哦", "we could work together"),
  v("你平时都在运动", "you work out all the time"),
  v("周末上网、看电影", "on weekends I go online and watch movies"),
  v("出去走走、照照相", "go for walks and take photos"),
  v("下次可以一起去兜风", "next time we can go for a drive"),
]

export const LESSON_4_1_FAMILY: VocabItem[] = [
  v("自我介绍", "self-introduction"),
  v("第一印象", "first impression"),
  v("长处", "strength"),
  v("短处", "weakness"),
  v("幽默", "humor"),
  v("座右铭", "motto"),
  v("特殊技能", "special skill"),
  v("亲密", "close; intimate"),
]

export const LESSON_4_1_PRACTICE: MiniLessonExample[] = [
  ex("你在哪里高就？我是健身教练。", "Where do you work? I’m a fitness trainer."),
  ex("我是心理师，负责帮情侣重修旧好。", "I’m a psychologist. I help couples make up."),
  ex("呵呵，我是心理师不是预言师。", "Ha — I’m a psychologist, not a prophet."),
  ex("健身中心请一个心理师，身心平衡，好像很赞。", "A psychologist at a gym — mind–body balance. Sounds great."),
  ex("可以合作哦。你平时都在运动，周末也会运动吗？", "We could work together. You work out all the time — weekends too?"),
  ex("没，周末上网、看电影。", "No. Weekends I go online and watch movies."),
  ex("我周末喜欢出去走走、照照相。", "On weekends I like to walk around and take photos."),
  ex("下次可以一起去兜风！", "Next time we can go for a drive!"),
]

export const LESSON_4_1_FILL_BLANKS = [
  fb("1", "Where do you work? (polite)", "你在哪里", "？", "高就", ["高升", "高考", "高中"]),
  fb("2", "I’m a fitness trainer.", "我是", "，专门塑造健美的曲线。", "健身教练", ["心理师", "预言师", "家教"]),
  fb("3", "I help them make up.", "我负责帮他们", "。", "重修旧好", ["成家立业", "料事如神", "独立思考"]),
  fb("4", "I’m a psychologist, not a prophet.", "我是心理师不是", "。", "预言师", ["健身教练", "面试官", "班导"]),
  fb("5", "Mind–body balance — that sounds great.", "身心平衡，好像", "！", "很赞", ["很难", "很烦", "很冷"]),
  fb("6", "We could work together.", "", "哦。", "可以合作", ["可以加班", "可以介意", "可以辞职"]),
  fb("7", "On weekends I like to walk around and take photos.", "我周末喜欢出去走走、", "。", "照照相", ["吃吃饭", "睡睡觉", "看看书"]),
  fb("8", "Next time we can go for a drive.", "下次可以一起去", "！", "兜风", ["加班", "面试", "泡汤"]),
]

export const LESSON_4_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你在哪里高就？": [
    ml("高就", "where one works (polite)", ["高就 is a polite, slightly old-fashioned ‘where do you work?’ — common at 相亲 and speed dating. Not 高考."], {
      examples: [ex("你在哪里高就？", "Where do you work?")],
    }),
  ],
  "我是健身教练，专门塑造健美的曲线。你呢？": [
    ml("专门 + VP", "specialize in…", ["专门 marks what your job is for. 塑造健美的曲线 is a sales-y job line."], {
      pattern: "专门 + VP",
      examples: [ex("我专门塑造健美的曲线。", "I specialize in sculpting a fit body line.")],
    }),
    ml("你呢？", "and you?", ["Hands the same question back. Speed-dating rhythm."]),
  ],
  "我是心理师，当情侣吵架时会来找我，我负责帮他们重修旧好。": [
    ml("心理师", "psychologist / counselor", ["Taiwan job title. Mainland often 心理咨询师. Same idea: talk-therapy, not a medical 医生."]),
    ml("当……时", "when…", ["当情侣吵架时 = when couples fight. Sets the client scene."], {
      pattern: "当 + situation + 时，……",
    }),
    ml("重修旧好", "make up / reconcile", ["Four-character fix-the-relationship. 负责帮他们 + idiom is a clean job summary."], {
      examples: [ex("我负责帮他们重修旧好。", "I’m in charge of helping them make up.")],
    }),
  ],
  "能看透人心的心理师！那你知道我现在在想什么吗？": [
    ml("能看透人心的 + noun", "a … who can see through people", ["的 turns the skill into a label, half praise, half tease."]),
    ml("那你知道……吗", "so do you know…?", ["那 picks up the label and flips it into a flirt question."], {
      examples: [ex("那你知道我现在在想什么吗？", "So do you know what I’m thinking right now?")],
    }),
  ],
  "呵呵，我是心理师不是预言师。": [
    ml("呵呵", "ha / polite laugh", ["A soft deflect. Not a big 哈哈."]),
    ml("是 A 不是 B", "I’m A, not B", ["Sets a boundary with humor: counselor ≠ fortune-teller."], {
      pattern: "是 + A + 不是 + B",
      examples: [ex("我是心理师不是预言师。", "I’m a psychologist, not a prophet.")],
    }),
  ],
  "我在想我的健身中心如果请一个心理师，身心平衡，好像很赞！": [
    ml("我在想 + clause", "I was thinking…", ["Answers the tease with a business pitch."]),
    ml("如果请一个……", "if (we) hired a…", ["请 here is hire. 身心平衡 is the slogan; 好像很赞 is spoken praise."], {
      examples: [ex("好像很赞！", "That sounds great!")],
    }),
  ],
  "可以合作哦。你平时都在运动，周末也会运动吗？": [
    ml("可以合作哦", "we could work together", ["哦 warms the offer. Then a new 自我介绍 topic: weekend habits."]),
    ml("平时都在 + V，周末也会……吗", "you always … — weekends too?", ["平时 vs 周末 contrast. 都在运动 = constantly working out."], {
      examples: [ex("你平时都在运动，周末也会运动吗？", "You work out all the time — weekends too?")],
    }),
  ],
  "没，周末上网、看电影。你呢？": [
    ml("没，+ routine", "no — I …", ["没 is a full answer. Then a weekend list with 顿号."], {
      examples: [ex("没，周末上网、看电影。", "No. Weekends I go online and watch movies.")],
    }),
  ],
  "我周末喜欢出去走走、照照相。": [
    ml("VV / 照照相", "do a bit of…", ["走走、照照相 are light activities — reduplication keeps them casual."], {
      examples: [ex("出去走走、照照相。", "Walk around and take some photos.")],
    }),
  ],
  "我也喜欢照相，我知道很多好地方，下次可以一起去兜风！": [
    ml("我也喜欢 + overlap", "I like that too", ["Finds common ground, then offers a next date: 兜风."]),
    ml("下次可以一起 + V", "next time we can … together", ["A speed-date closer. 兜风 is a drive for fun, not a commute."], {
      examples: [ex("下次可以一起去兜风！", "Next time we can go for a drive!")],
    }),
  ],
}

export const LESSON_4_1_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("高就", "Where do you work? (polite)", ["A 相亲 / formal first-meeting question. Pair with a short job line: 我是 + title."], {
    pattern: "你在哪里高就？",
    examples: [
      ex("你在哪里高就？", "Where do you work?"),
      ex("我在台北高就。", "I work in Taipei."),
      ex("还在找，还没高就。", "I’m still looking — no post yet."),
    ],
  }),
  ml("是 A 不是 B", "I’m A, not B", ["A joke boundary. 心理师不是预言师 keeps the flirt from becoming magic."], {
    pattern: "是 + A + 不是 + B",
    examples: [
      ex("我是心理师不是预言师。", "I’m a psychologist, not a prophet."),
      ex("我是教练不是医生。", "I’m a trainer, not a doctor."),
      ex("这是介绍不是面试。", "This is an intro, not an interview."),
    ],
  }),
  ml("专门 + VP", "Specialize in…", ["Job-pitch grammar. 专门 + what you do all day."], {
    pattern: "专门 + VP",
    examples: [
      ex("专门塑造健美的曲线。", "Specialize in sculpting a fit body line."),
      ex("我专门教口语。", "I specialize in teaching speaking."),
      ex("她专门帮人重修旧好。", "She specializes in helping people reconcile."),
    ],
  }),
  ml("VV：走走、照照相", "Do a bit of…", ["Reduplicate for a light weekend hobby. 照照相 = take a few pictures, not a photo job."], {
    pattern: "VV / 照照相",
    examples: [
      ex("出去走走、照照相。", "Walk around and take some photos."),
      ex("周末看看电影。", "Watch a movie on the weekend."),
      ex("晚上喝喝茶。", "Have some tea in the evening."),
    ],
  }),
  ml("下次可以一起 + V", "Next time we can … together", ["A soft next-date. 可以 keeps it optional; 一起 makes it a pair plan."], {
    pattern: "下次可以一起 + V",
    examples: [
      ex("下次可以一起去兜风！", "Next time we can go for a drive!"),
      ex("下次可以一起吃饭。", "Next time we can eat together."),
      ex("下次可以一起去照相。", "Next time we can go take photos."),
    ],
  }),
]
