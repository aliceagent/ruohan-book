import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_6_5_CORE_VOCAB: VocabItem[] = [
  v("立冬", "Start of Winter (solar term)"),
  v("补冬", "to nourish the body for winter"),
  v("节气", "solar term"),
  v("当归鸭", "angelica duck stew"),
  v("中药包", "Chinese-medicine packet"),
  v("姜片", "ginger slices"),
  v("米酒", "rice wine"),
  v("电锅", "electric rice cooker"),
  v("面线", "thin wheat noodles (misua)"),
  v("特价", "on special; sale price"),
  v("过冬", "to get through winter"),
]

export const LESSON_6_5_CHUNKS: VocabItem[] = [
  v("今天立冬补冬哦", "today is Start of Winter — time to nourish"),
  v("立冬是节气", "Start of Winter is a solar term"),
  v("每一年的 11 月 7 号或 8 号", "every year on November 7 or 8"),
  v("一年有二十四个节气", "there are 24 solar terms in a year"),
  v("就是要吃好一点，营养一点", "it means eat a bit better, a bit more nourishing"),
  v("今天鸡鸭都特价", "chicken and duck are on special today"),
  v("加这一包中药包和姜片、米酒", "add this medicine packet, ginger, and rice wine"),
  v("放到电锅煮就可以了", "put it in the rice cooker and that’s it"),
  v("加面线很好吃", "adding misua noodles is delicious"),
  v("那我要一只，小一点的", "then I’ll take one — a smaller one"),
]

export const LESSON_6_5_FAMILY: VocabItem[] = [
  v("节气", "solar term"),
  v("历法", "calendar system"),
  v("当季", "in season"),
  v("盛产", "to produce in abundance"),
  v("养生之道", "the way of nourishing life"),
  v("补冬", "to nourish for winter"),
  v("夏练三伏", "train through the hottest days"),
  v("冬练三九", "train through the coldest days"),
]

export const LESSON_6_5_PRACTICE: MiniLessonExample[] = [
  ex("哈啰，美女，来哦，今天立冬补冬哦！", "Hello, miss — come on over. Today is Start of Winter: time to nourish!"),
  ex("阿姨，什么冬？", "Auntie, what winter?"),
  ex("立冬是节气，每一年的 11 月 7 号或 8 号。", "Start of Winter is a solar term, every year on November 7 or 8."),
  ex("古时候的人的日历，一年有二十四个节气。", "The old calendar. There are 24 solar terms in a year."),
  ex("补冬，就是要吃好一点，营养一点，准备过冬啊。", "Nourish for winter — eat a bit better, a bit more nourishing, get ready for winter."),
  ex("做个“当归鸭”吧。“当归鸭”（放慢语速）。", "Make angelica duck. “Angelica duck.” (Said slowly.)"),
  ex("买一只鸭，加这一包中药包和姜片、米酒，放到电锅煮就可以了。", "Buy a duck, add this medicine packet, ginger, and rice wine, put it in the rice cooker."),
  ex("好，那我要一只，小一点的。", "Okay — then I’ll take one, a smaller one."),
]

export const LESSON_6_5_FILL_BLANKS = [
  fb("1", "Today is Start of Winter — time to nourish.", "今天立冬", "哦！", "补冬", ["过冬", "立春", "冬至"]),
  fb("2", "Start of Winter is a solar term.", "立冬是", "。", "节气", ["节日", "节庆", "季节"]),
  fb("3", "Every year on November 7 or 8.", "每一年的 11 月 7 号或", "。", "8 号", ["9 号", "1 号", "15 号"]),
  fb("4", "There are 24 solar terms in a year.", "一年有二十四个", "。", "节气", ["节日", "星期", "季节"]),
  fb("5", "It means eat a bit better, a bit more nourishing.", "就是要吃好一点，", "一点。", "营养", ["便宜", "简单", "清淡"]),
  fb("6", "Chicken and duck are on special today.", "今天鸡鸭都", "。", "特价", ["涨价", "免费", "过期"]),
  fb("7", "Put it in the rice cooker and that’s it.", "放到", "煮就可以了。", "电锅", ["烤箱", "冰箱", "微波炉"]),
  fb("8", "Then I’ll take one — a smaller one.", "那我要一只，", "。", "小一点的", ["大一点的", "贵一点的", "辣一点的"]),
]

export const LESSON_6_5_LINE_NOTES: Record<string, MiniLesson[]> = {
  "哈啰，美女，来哦，今天立冬补冬哦！": [
    ml("哈啰，美女，来哦", "hello, miss — come on over", ["Market call. 哈啰 is spoken hi. 来哦 pulls the customer in."]),
    ml("立冬补冬", "Start of Winter: nourish for winter", ["Two 冬 in a row: the term, then the custom."], {
      examples: [ex("今天立冬补冬哦！", "Today is Start of Winter — time to nourish!")],
    }),
  ],
  "阿姨，什么冬？": [
    ml("什么冬", "what winter?", ["The learner caught 冬 but not 立冬 / 补冬."], {
      examples: [ex("阿姨，什么冬？", "Auntie, what winter?")],
    }),
  ],
  "立冬是节气，每一年的 11 月 7 号或 8 号。": [
    ml("N 是节气", "N is a solar term", ["Defines the word, then the date. Keep spaces around 11 / 7 / 8."], {
      examples: [ex("立冬是节气，每一年的 11 月 7 号或 8 号。", "Start of Winter is a solar term, every year on November 7 or 8.")],
    }),
  ],
  "节气？": [
    ml("节气？", "solar term?", ["Echo to ask for a definition."], {
      examples: [ex("节气？", "Solar term?")],
    }),
  ],
  "古时候的人的日历，日历你知道吗？一年有二十四个节气。": [
    ml("古时候的人的日历", "the calendar of people in old times", ["Then a check: 日历你知道吗？"]),
    ml("一年有二十四个节气", "24 solar terms in a year", ["The core fact of the lesson."], {
      examples: [ex("一年有二十四个节气。", "There are 24 solar terms in a year.")],
    }),
  ],
  "立冬要做什么？": [
    ml("节气要做什么", "what do you do at this solar term", ["Custom question. Sets up 补冬."], {
      examples: [ex("立冬要做什么？", "What do you do at Start of Winter?")],
    }),
  ],
  "补冬，就是要吃好一点，营养一点，准备过冬啊。今天鸡鸭都特价，做个“当归鸭”吧。“当归鸭”（放慢语速）。": [
    ml("就是要 + VP", "it means you should…", ["Defines 补冬 as eating better."], {
      examples: [ex("就是要吃好一点，营养一点。", "It means eat a bit better, a bit more nourishing.")],
    }),
    ml("（放慢语速）", "(said slowly)", ["The stall repeats 当归鸭 slowly so the learner can catch it."]),
  ],
  "我不会。": [
    ml("我不会", "I don’t know how", ["Short refuse. Invites the recipe."], {
      examples: [ex("我不会。", "I don’t know how.")],
    }),
  ],
  "很简单啦，买一只鸭，加这一包中药包和姜片、米酒，放到电锅煮就可以了。可以去对面买一包面线，加面线很好吃！": [
    ml("很简单啦", "it’s easy", ["Recipe as a shopping list: 鸭 + 中药包 + 姜片 + 米酒 + 电锅."], {
      examples: [ex("放到电锅煮就可以了。", "Put it in the rice cooker and that’s it.")],
    }),
    ml("加面线很好吃", "adding misua is delicious", ["对面 = the stall across the aisle. An upsell."]),
  ],
  "好，那我要一只，小一点的。": [
    ml("那我要 + N，adj 一点的", "then I’ll take N — a bit more adj", ["Buys in, then sizes down."], {
      pattern: "那我要 + N，+ adj + 一点的",
      examples: [ex("那我要一只，小一点的。", "Then I’ll take one — a smaller one.")],
    }),
  ],
}

export const LESSON_6_5_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("N 是节气", "N is a solar term", ["Name the term, then the date."], {
    pattern: "N 是节气",
    examples: [
      ex("立冬是节气。", "Start of Winter is a solar term."),
      ex("冬至也是节气。", "Winter Solstice is also a solar term."),
      ex("一年有二十四个节气。", "There are 24 solar terms in a year."),
    ],
  }),
  ml("就是要 + VP", "It means you should…", ["Define a custom in eating words."], {
    pattern: "就是要 + VP",
    examples: [
      ex("补冬就是要吃好一点。", "Nourishing for winter means eat a bit better."),
      ex("就是要营养一点。", "It means a bit more nourishing."),
      ex("就是要准备过冬。", "It means get ready for winter."),
    ],
  }),
  ml("放到电锅煮就可以了", "Put it in the rice cooker and that’s it", ["Market recipe. 就可以了 = no extra steps."], {
    pattern: "放到 + cooker + 煮就可以了",
    examples: [
      ex("放到电锅煮就可以了。", "Put it in the rice cooker and that’s it."),
      ex("加姜片、米酒就可以了。", "Just add ginger and rice wine and that’s it."),
      ex("买一只鸭就可以了。", "Just buy a duck and that’s it."),
    ],
  }),
  ml("adj 一点的", "A bit more adj", ["Size the duck. 小一点的 / 大一点的."], {
    pattern: "adj + 一点的",
    examples: [
      ex("那我要一只，小一点的。", "Then I’ll take one — a smaller one."),
      ex("给我大一点的。", "Give me a bigger one."),
      ex("有没有便宜一点的？", "Is there a cheaper one?"),
    ],
  }),
  ml("来哦 / 补冬哦", "Come on over / time to nourish", ["Market 哦. Softens a sales call."], {
    pattern: "V + 哦",
    examples: [
      ex("来哦，今天立冬补冬哦！", "Come on over — today is Start of Winter: time to nourish!"),
      ex("鸡鸭都特价哦。", "Chicken and duck are on special."),
      ex("加面线很好吃哦。", "Adding misua is delicious."),
    ],
  }),
]
