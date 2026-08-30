import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_5_5_CORE_VOCAB: VocabItem[] = [
  v("周年庆", "anniversary (celebration)"),
  v("聚餐", "group meal"),
  v("企划案", "proposal; plan (Taiwan)"),
  v("素食", "vegetarian food"),
  v("杀生", "to take life (Buddhist)"),
  v("饮食习惯", "eating habits"),
  v("灵魂", "soul"),
  v("口腹之欲", "appetite; craving for food"),
  v("牺牲", "to sacrifice"),
  v("圣人", "saint"),
  v("吃荤", "to eat meat"),
  v("吃素", "to eat vegetarian"),
  v("贵贱", "high and low (status)"),
  v("南无阿弥陀佛", "Amitabha (Buddhist invocation)"),
  v("口角", "a quarrel"),
]

export const LESSON_5_5_CHUNKS: VocabItem[] = [
  v("我们今天得交周年庆聚餐企划案", "we have to submit the anniversary-dinner plan today"),
  v("先选餐厅吧", "let’s pick a restaurant first"),
  v("不要杀生啦", "don’t take life"),
  v("可以特别准备一桌素食", "we can specially prepare one vegetarian table"),
  v("你们吃的都是生命", "what you eat is all life"),
  v("植物受伤的时候也有反应", "plants also react when they’re hurt"),
  v("汽油是恐龙的生命换来的", "gasoline is bought with dinosaurs’ lives"),
  v("为了人们的口腹之欲牺牲", "sacrificed for people’s appetite"),
  v("不要讲得像圣人一样", "don’t talk like a saint"),
  v("没有贵贱之分，只是每个人的选择罢了", "no high or low — it’s just each person’s choice"),
]

export const LESSON_5_5_FAMILY: VocabItem[] = [
  v("素食者", "vegetarian"),
  v("纯素主义者", "vegan"),
  v("蛋素", "ovo-vegetarian"),
  v("奶素", "lacto-vegetarian"),
  v("奶蛋素", "lacto-ovo vegetarian"),
  v("锅边素", "eating only the vegetables from a meat dish"),
  v("五辛", "the five pungent plants"),
  v("佛教", "Buddhism"),
]

export const LESSON_5_5_PRACTICE: MiniLessonExample[] = [
  ex("我们今天得交周年庆聚餐企划案。先选餐厅吧。", "We have to submit the anniversary-dinner plan today. Let’s pick a restaurant first."),
  ex("素食餐厅吧，不要杀生啦！", "A vegetarian restaurant — don’t take life!"),
  ex("每个人都有自己的饮食习惯，可以特别准备一桌素食。", "Everyone has their own eating habits. We can specially prepare one vegetarian table."),
  ex("你们吃的都是生命。", "What you eat is all life."),
  ex("你不知道植物受伤的时候也有反应吗？", "Don’t you know plants also react when they’re hurt?"),
  ex("本来活得好好的动物为了人们的口腹之欲牺牲，好可怜！", "Animals that were living just fine are sacrificed for people’s appetite — so sad!"),
  ex("不要讲得像圣人一样，吃荤吃素没有贵贱之分。", "Don’t talk like a saint. Meat or vegetarian — there’s no high or low."),
  ex("南无阿弥陀佛。", "Amitabha."),
]

export const LESSON_5_5_FILL_BLANKS = [
  fb("1", "We have to submit the anniversary-dinner plan today.", "我们今天得交周年庆聚餐", "。", "企划案", ["企划书", "计划表", "菜单"]),
  fb("2", "Don’t take life!", "素食餐厅吧，不要", "啦！", "杀生", ["杀价", "杀菌", "杀青"]),
  fb("3", "We can specially prepare one vegetarian table.", "可以特别准备一桌", "。", "素食", ["荤食", "甜食", "主食"]),
  fb("4", "What you eat is all life.", "你们吃的都是", "。", "生命", ["生意", "生活", "生日"]),
  fb("5", "Gasoline is bought with dinosaurs’ lives.", "你加的汽油是恐龙的生命", "的？", "换来", ["买来", "借来", "拿来"]),
  fb("6", "Sacrificed for people’s appetite.", "为了人们的", "牺牲。", "口腹之欲", ["口角", "口味", "口感"]),
  fb("7", "Don’t talk like a saint.", "不要讲得像", "一样。", "圣人", ["诗人", "商人", "仙人"]),
  fb("8", "It’s just each person’s choice.", "只是每个人的选择", "。", "罢了", ["好了", "算了", "得了"]),
]

export const LESSON_5_5_LINE_NOTES: Record<string, MiniLesson[]> = {
  "我们今天得交周年庆聚餐企划案。先选餐厅吧。": [
    ml("得交 + document", "have to submit…", ["得 = must. 企划案 is Taiwan for a proposal."], {
      examples: [ex("我们今天得交周年庆聚餐企划案。", "We have to submit the anniversary-dinner plan today.")],
    }),
    ml("先选餐厅吧", "let’s pick a restaurant first", ["先 + V 吧 starts the meeting with one decision."]),
  ],
  "素食餐厅吧，不要杀生啦！": [
    ml("N 吧", "how about N", ["Suggests the whole restaurant, not one dish."]),
    ml("不要杀生啦", "don’t take life", ["杀生 is Buddhist. 啦 softens a hard moral line."], {
      examples: [ex("不要杀生啦！", "Don’t take life!")],
    }),
  ],
  "每个人都有自己的饮食习惯，可以特别准备一桌素食。": [
    ml("每个人都有自己的 + N", "everyone has their own…", ["A compromise frame."]),
    ml("特别准备一桌素食", "specially prepare one vegetarian table", ["一桌 = one table’s worth. Keeps meat for others."], {
      examples: [ex("可以特别准备一桌素食。", "We can specially prepare one vegetarian table.")],
    }),
  ],
  "你们吃的都是生命。": [
    ml("吃的都是 + N", "what you eat is all…", ["都是 upgrades a diet into a moral claim."], {
      examples: [ex("你们吃的都是生命。", "What you eat is all life.")],
    }),
  ],
  "你不知道植物受伤的时候也有反应吗？": [
    ml("你不知道……吗", "don’t you know…?", ["A counter-question, not a request for information."], {
      pattern: "你不知道 + clause + 吗",
      examples: [ex("你不知道植物受伤的时候也有反应吗？", "Don’t you know plants also react when they’re hurt?")],
    }),
  ],
  "你们吃的都是有灵魂的。": [
    ml("都是有灵魂的", "all have souls", ["Repeats the 都是 frame with a stronger noun."], {
      examples: [ex("你们吃的都是有灵魂的。", "What you eat all have souls.")],
    }),
  ],
  "你知不知道你加的汽油是恐龙的生命换来的？": [
    ml("你知不知道", "do you even know", ["A sharper 你不知道. 知不知道 stacks pressure."], {
      pattern: "你知不知道 + clause",
      examples: [ex("你知不知道汽油是恐龙的生命换来的？", "Do you even know gasoline is bought with dinosaurs’ lives?")],
    }),
    ml("是 A 换来的", "is obtained in exchange for A", ["换来的 = the hidden cost."]),
  ],
  "本来活得好好的动物为了人们的口腹之欲牺牲，好可怜！": [
    ml("本来活得好好的", "that were living just fine", ["好好的 + 动物 paints the before-picture."]),
    ml("为了 + N + 牺牲", "sacrificed for…", ["口腹之欲 is the craving. 好可怜！ is the verdict."], {
      examples: [ex("为了人们的口腹之欲牺牲。", "Sacrificed for people’s appetite.")],
    }),
  ],
  "我们不反对你们吃素，但不要讲得像圣人一样，吃荤吃素没有贵贱之分，只是每个人的选择罢了。": [
    ml("不反对……但不要…", "we don’t oppose… but don’t…", ["A concession, then a boundary."], {
      pattern: "不反对 + VP，但不要 + VP",
      examples: [ex("我们不反对你们吃素，但不要讲得像圣人一样。", "We don’t oppose you eating vegetarian, but don’t talk like a saint.")],
    }),
    ml("没有贵贱之分，只是……罢了", "no high or low — it’s just…", ["罢了 shrinks the fight to a personal choice."]),
  ],
  "南无阿弥陀佛。": [
    ml("南无阿弥陀佛", "Amitabha", ["A Buddhist close. Here it can sound like a sigh, a blessing, or a last word."], {
      examples: [ex("南无阿弥陀佛。", "Amitabha.")],
    }),
  ],
}

export const LESSON_5_5_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("得 + V", "Have to…", ["Meeting deadline. 得交 / 得选 / 得吃."], {
    pattern: "得 + V",
    examples: [
      ex("我们今天得交企划案。", "We have to submit the proposal today."),
      ex("得先选餐厅。", "We have to pick a restaurant first."),
      ex("得准备一桌素食。", "We have to prepare one vegetarian table."),
    ],
  }),
  ml("你不知道……吗 / 你知不知道", "Don’t you know…?", ["Argument questions. 知不知道 is sharper."], {
    pattern: "你不知道 + clause + 吗",
    examples: [
      ex("你不知道植物也有反应吗？", "Don’t you know plants also react?"),
      ex("你知不知道汽油是恐龙换来的？", "Do you even know gasoline comes from dinosaurs?"),
      ex("你不知道每个人选择不同吗？", "Don’t you know everyone chooses differently?"),
    ],
  }),
  ml("为了 N 牺牲", "Sacrificed for N", ["Moral cause-and-effect. Pair with 口腹之欲 or 健康."], {
    pattern: "为了 + N + 牺牲",
    examples: [
      ex("为了人们的口腹之欲牺牲。", "Sacrificed for people’s appetite."),
      ex("为了健康牺牲口味。", "Sacrifice flavor for health."),
      ex("不要为了口角牺牲友谊。", "Don’t sacrifice friendship over a quarrel."),
    ],
  }),
  ml("讲得像 N 一样", "Talk as if you were N", ["得 + 像 compares tone, not facts."], {
    pattern: "讲得像 + N + 一样",
    examples: [
      ex("不要讲得像圣人一样。", "Don’t talk like a saint."),
      ex("你讲得像老师一样。", "You talk like a teacher."),
      ex("别讲得像命令一样。", "Don’t talk like it’s an order."),
    ],
  }),
  ml("只是……罢了", "It’s just…", ["Shrinks a moral fight to a choice. Soft landing."], {
    pattern: "只是 + N + 罢了",
    examples: [
      ex("只是每个人的选择罢了。", "It’s just each person’s choice."),
      ex("只是饮食习惯罢了。", "It’s just eating habits."),
      ex("只是口角罢了。", "It’s just a quarrel."),
    ],
  }),
]
