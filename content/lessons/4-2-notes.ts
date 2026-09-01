import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_2_CORE_VOCAB: VocabItem[] = [
  v("路口", "intersection"),
  v("开幕", "to open (a business); opening"),
  v("优惠套餐", "promotional set meal"),
  v("大餐", "a big / fancy meal"),
  v("水疗", "spa"),
  v("泡汤", "to soak in a hot spring (Taiwan)"),
  v("自助游", "independent travel"),
  v("疫情", "the pandemic / epidemic"),
  v("闷死了", "suffocatingly bored"),
  v("预约", "to book; reservation"),
  v("热门", "popular; in demand"),
  v("订得到", "can still get a booking"),
  v("好久没", "haven’t … in ages"),
  v("至少", "at least"),
]

export const LESSON_4_2_CHUNKS: VocabItem[] = [
  v("推出开幕优惠套餐呢", "they’re offering an opening set-meal deal"),
  v("我们去吃", "let’s go eat"),
  v("我很久没吃大餐了", "I haven’t had a big meal in a long time"),
  v("大概一年来都没吃大餐了", "I haven’t had a big meal in about a year"),
  v("我也好久没泡汤了", "I haven’t soaked in a hot spring in ages either"),
  v("我上一次泡汤好像是两年前", "last time I soaked was maybe two years ago"),
  v("说到泡汤就想到日本", "speaking of soaking, I think of Japan"),
  v("每年都至少会去一次", "I used to go at least once a year"),
  v("日本很适合自助游", "Japan is great for independent travel"),
  v("疫情前每年都至少去一个国家玩", "before the pandemic I visited at least one country a year"),
  v("不知道这波疫情要到什么时候才会结束", "who knows when this wave will end"),
  v("三年没出国旅行了", "I haven’t traveled abroad in three years"),
  v("希望还订得到", "hope we can still get a booking"),
]

export const LESSON_4_2_FAMILY: VocabItem[] = [
  v("很久没", "haven’t … in a long time"),
  v("好久没", "haven’t … in ages"),
  v("上一次", "the last time"),
  v("最后一次", "the most recent time"),
  v("多久没", "how long since…"),
  v("从来不", "never (do)"),
  v("经常", "often"),
  v("不常", "seldom"),
]

export const LESSON_4_2_PRACTICE: MiniLessonExample[] = [
  ex("路口新开的那家饭店〔酒店〕推出开幕优惠套餐呢！", "The new place at the intersection is offering an opening set-meal deal!"),
  ex("我们去吃！我很久没吃大餐了！", "Let’s go eat! I haven’t had a big meal in a long time!"),
  ex("那家饭店不是还有水疗吗？我也好久没泡汤了。", "Doesn’t that place also have a spa? I haven’t soaked in ages either."),
  ex("我上一次泡汤好像是两年前。", "Last time I soaked was maybe two years ago."),
  ex("说到泡汤就想到日本。以前每年都至少会去一次。", "Speaking of soaking, I think of Japan. I used to go at least once a year."),
  ex("我是疫情前每年都至少去一个国家玩。", "Before the pandemic I visited at least one country a year."),
  ex("不知道这波疫情要到什么时候才会结束，闷死了。", "Who knows when this wave will end. I’m bored to death."),
  ex("快预约吧，新开幕又有优惠，希望还订得到。", "Book it quick — new opening plus a deal. Hope we can still get a table."),
]

export const LESSON_4_2_FILL_BLANKS = [
  fb("1", "They’re offering an opening set-meal deal.", "推出开幕", "呢！", "优惠套餐", ["营养午餐", "商务谈判", "自我介绍"]),
  fb("2", "I haven’t had a big meal in a long time.", "我很久没吃", "了！", "大餐", ["便当", "点心", "早餐"]),
  fb("3", "I haven’t soaked in a hot spring in ages either.", "我也好久没", "了。", "泡汤", ["加班", "考试", "搬家"]),
  fb("4", "Last time I soaked was maybe two years ago.", "我", "泡汤好像是两年前。", "上一次", ["下一次", "每一次", "这一次"]),
  fb("5", "Speaking of soaking, I think of Japan.", "", "泡汤就想到日本。", "说到", ["听到", "看到", "想到"]),
  fb("6", "Japan is great for independent travel.", "日本很适合", "。", "自助游", ["语言交换", "模拟面试", "快速约会"]),
  fb("7", "I’m bored / suffocating to death.", "这波疫情还没结束，", "。", "闷死了", ["饿死了", "冻死了", "笑死了"]),
  fb("8", "Hope we can still get a booking.", "希望还", "。", "订得到", ["看得到", "吃得到", "听得到"]),
]

export const LESSON_4_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "路口新开的那家饭店〔酒店〕推出开幕优惠套餐呢！": [
    ml("新开的那家", "that newly opened…", ["新开的 + 那家 + place. 饭店 here is a hotel-restaurant; 〔酒店〕 is the mainland note."]),
    ml("推出 + deal", "roll out (a promotion)", ["推出开幕优惠套餐. 呢！ is news you just spotted."], {
      examples: [ex("推出开幕优惠套餐呢！", "They’re offering an opening set-meal deal!")],
    }),
  ],
  "我们去吃！我很久没吃大餐了！": [
    ml("我们去吃", "let’s go eat", ["Short plan. 去 + V is a move, not a discussion."]),
    ml("很久没 + V + 了", "haven’t … in a long time", ["很久没吃大餐了. 了 marks the stretch of time as current."], {
      pattern: "很久没 + V + 了",
      examples: [ex("我很久没吃大餐了！", "I haven’t had a big meal in a long time!")],
    }),
  ],
  "我也是，大概一年来都没吃大餐了。": [
    ml("大概 + duration + 都没 + V + 了", "for about … I haven’t…", ["一年来都没 = the whole year through. 大概 softens the count."], {
      examples: [ex("大概一年来都没吃大餐了。", "I haven’t had a big meal in about a year.")],
    }),
  ],
  "那家饭店不是还有水疗吗？我也好久没泡汤了。": [
    ml("不是还有……吗", "doesn’t it also have…?", ["Rhetorical add-on. 水疗 is spa; 泡汤 is the Taiwan soak word."], {
      examples: [ex("那家不是还有水疗吗？", "Doesn’t that place also have a spa?")],
    }),
    ml("好久没 + V + 了", "haven’t … in ages", ["好久 is more spoken-sigh than 很久. Same grammar family."], {
      pattern: "好久没 + V + 了",
    }),
  ],
  "我上一次泡汤好像是两年前。我们可以下午先去泡。": [
    ml("上一次 + V 好像是 + time", "last time was maybe…", ["好像是 hedges the memory."], {
      examples: [ex("我上一次泡汤好像是两年前。", "Last time I soaked was maybe two years ago.")],
    }),
    ml("先去泡", "go soak first", ["先 + purpose. 泡 drops 汤 once the topic is set."]),
  ],
  "说到泡汤就想到日本。以前每年都至少会去一次。": [
    ml("说到 A 就想到 B", "speaking of A, I think of B", ["A conversation jump. Very spoken."], {
      pattern: "说到 + A + 就想到 + B",
      examples: [ex("说到泡汤就想到日本。", "Speaking of soaking, I think of Japan.")],
    }),
    ml("每年都至少会 + V + 一次", "used to … at least once a year", ["以前 + 每年都至少. 会 here is habit, not future."]),
  ],
  "日本很适合自助游。我是疫情前每年都至少去一个国家玩。": [
    ml("很适合 + activity", "is great for…", ["适合自助游 = good for independent travel."]),
    ml("我是 + time + habit", "I (for my part) used to…", ["我是疫情前…… frames your own routine against 日本."], {
      examples: [ex("我是疫情前每年都至少去一个国家玩。", "Before the pandemic I visited at least one country a year.")],
    }),
  ],
  "不知道这波疫情要到什么时候才会结束，闷死了。": [
    ml("不知道……要到什么时候才会 + V", "who knows when … will finally…", ["要到什么时候才会结束 = when on earth will it end."], {
      pattern: "不知道 + topic + 要到什么时候才会 + V",
    }),
    ml("闷死了", "bored / suffocating to death", ["闷 is cabin-fever. 死了 is the spoken extreme."]),
  ],
  "对啊，三年没出国旅行了。": [
    ml("duration + 没 + V + 了", "haven’t … for (duration)", ["三年没出国旅行了. Same family as 很久没."], {
      examples: [ex("三年没出国旅行了。", "I haven’t traveled abroad in three years.")],
    }),
  ],
  "快预约吧，新开幕又有优惠，一定很热门，希望还订得到。": [
    ml("快 + V + 吧", "hurry and…", ["快预约吧 is a push. 又有优惠 stacks reasons."]),
    ml("还 + V + 得到", "can still manage to…", ["订得到 = succeed in booking. 还 = still (in time)."], {
      pattern: "还 + V + 得到",
      examples: [ex("希望还订得到。", "Hope we can still get a booking.")],
    }),
  ],
}

export const LESSON_4_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("很久没 / 好久没 + V + 了", "Haven’t … in a long time", ["The core pattern of this lesson. 很久 is a span; 好久 is a sigh. Always pair with 了."], {
    pattern: "很久／好久没 + V + 了",
    compare: [
      { label: "span", hanzi: "我很久没吃大餐了", en: "I haven’t had a big meal in a long time (how long)" },
      { label: "sigh", hanzi: "我也好久没泡汤了", en: "I haven’t soaked in ages either (I miss it)" },
    ],
    examples: [
      ex("我很久没吃大餐了。", "I haven’t had a big meal in a long time."),
      ex("我也好久没泡汤了。", "I haven’t soaked in ages either."),
      ex("我很久没出国了。", "I haven’t left the country in a long time."),
    ],
  }),
  ml("上一次 + V 好像是…", "Last time was maybe…", ["上一次 names the last occasion. 好像是 hedges when you don’t remember the date."], {
    pattern: "上一次 + V + 好像是 + time",
    examples: [
      ex("我上一次泡汤好像是两年前。", "Last time I soaked was maybe two years ago."),
      ex("上一次见面好像是去年。", "Last time we met was maybe last year."),
      ex("上一次吃大餐是过年。", "The last big meal was New Year."),
    ],
  }),
  ml("说到 A 就想到 B", "Speaking of A, I think of B", ["How spoken Chinese changes topic without a meeting agenda."], {
    pattern: "说到 + A + 就想到 + B",
    examples: [
      ex("说到泡汤就想到日本。", "Speaking of soaking, I think of Japan."),
      ex("说到日本就想到泡汤。", "Speaking of Japan, I think of hot springs."),
      ex("说到优惠就想到要预约。", "Speaking of deals, I think we should book."),
    ],
  }),
  ml("每年都至少 + V + 一次", "At least once a year", ["Habit frequency. 以前 puts it in the old normal."], {
    pattern: "每年都至少 + V + 一次",
    examples: [
      ex("以前每年都至少会去一次。", "I used to go at least once a year."),
      ex("每年都至少去一个国家玩。", "Visit at least one country a year."),
      ex("每个月至少见一次面。", "Meet at least once a month."),
    ],
  }),
  ml("V + 得到", "Succeed in / manage to V", ["得到 after a verb is potential: 订得到、买得到、看得到. 还 = still in time."], {
    pattern: "还 + V + 得到",
    examples: [
      ex("希望还订得到。", "Hope we can still get a booking."),
      ex("现在还买得到吗？", "Can you still buy it now?"),
      ex("票还抢得到吗？", "Can we still grab tickets?"),
    ],
  }),
]
