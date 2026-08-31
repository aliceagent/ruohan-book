import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_6_4_CORE_VOCAB: VocabItem[] = [
  v("过年", "to spend the New Year"),
  v("加班", "to work overtime"),
  v("塞车〔堵车〕", "traffic jam"),
  v("应付", "to deal with; to cope with"),
  v("心累", "mentally exhausted"),
  v("交往对象", "partner / someone you’re dating"),
  v("年终", "year-end (bonus / period)"),
  v("团圆", "reunion"),
  v("荷包", "wallet; purse"),
  v("失血", "to lose blood; (fig.) to spend heavily"),
  v("老家", "hometown; family home"),
]

export const LESSON_6_4_CHUNKS: VocabItem[] = [
  v("你今年过年也不回家吗", "you’re not going home for New Year this year either"),
  v("没办法，要加班", "no choice — I have to work overtime"),
  v("我跟我妈说要加班，其实是不想回去", "I told Mum I have overtime, but I just don’t want to go back"),
  v("到处塞车〔堵车〕，身体累", "traffic jams everywhere — physically exhausted"),
  v("应付聊天，心累", "dealing with the small talk — mentally exhausted"),
  v("交往对象、结婚生子、薪水年终", "dating, marriage and kids, salary and year-end bonus"),
  v("难得团圆，就不能说些别的话题吗", "it’s a rare reunion — can’t they talk about something else"),
  v("荷包有可能大失血", "the wallet might bleed heavily"),
  v("一年就一次", "it’s only once a year"),
  v("我还是很想回去看看我爸妈", "I still really want to go back and see my parents"),
]

export const LESSON_6_4_FAMILY: VocabItem[] = [
  v("习俗", "custom"),
  v("年菜", "New Year dishes"),
  v("尾牙", "year-end banquet"),
  v("跨年", "to see in the New Year"),
  v("倒数", "countdown"),
  v("烟火", "fireworks"),
  v("红包", "red envelope"),
  v("压岁钱", "New Year money for children"),
]

export const LESSON_6_4_PRACTICE: MiniLessonExample[] = [
  ex("你今年过年也不回家吗？", "You’re not going home for New Year this year either?"),
  ex("没办法，要加班，我家人也理解。", "No choice — I have to work overtime. My family understands."),
  ex("我跟我妈说要加班，其实是不想回去。", "I told Mum I have overtime, but I just don’t want to go back."),
  ex("第一，到处塞车〔堵车〕，身体累；第二，应付聊天，心累。", "First, traffic jams everywhere — body tired. Second, dealing with the chat — mind tired."),
  ex("是不是交往对象、结婚生子、薪水年终？", "Is it dating, getting married and having kids, salary and year-end bonus?"),
  ex("难得团圆，就不能说些别的话题吗？", "It’s a rare reunion — can’t they talk about something else?"),
  ex("我家亲戚小孩超多的，荷包有可能大失血。", "My relatives have so many kids — the wallet might bleed heavily."),
  ex("一年就一次，我还是很想回去看看我爸妈。", "It’s only once a year. I still really want to go back and see my parents."),
]

export const LESSON_6_4_FILL_BLANKS = [
  fb("1", "You’re not going home for New Year this year either?", "你今年过年也不", "吗？", "回家", ["加班", "跨年", "扫墓"]),
  fb("2", "No choice — I have to work overtime.", "没办法，要", "。", "加班", ["放假", "回老家", "抽奖"]),
  fb("3", "I told Mum I have overtime, but I just don’t want to go back.", "我跟我妈说要加班，其实是", "。", "不想回去", ["不想加班", "不想吃饭", "不想聊天"]),
  fb("4", "Traffic jams everywhere — physically exhausted.", "到处", "，身体累。", "塞车〔堵车〕", ["放假", "团圆", "跨年"]),
  fb("5", "Dealing with the small talk — mentally exhausted.", "应付聊天，", "。", "心累", ["身体累", "眼累", "手累"]),
  fb("6", "It’s a rare reunion — can’t they talk about something else?", "难得", "，就不能说些别的话题吗？", "团圆", ["加班", "连假", "尾牙"]),
  fb("7", "The wallet might bleed heavily.", "荷包有可能", "。", "大失血", ["大红包", "大扫除", "大过年"]),
  fb("8", "I still really want to go back and see my parents.", "我还是很想回去看看我", "。", "爸妈", ["老板", "同事", "邻居"]),
]

export const LESSON_6_4_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你今年过年也不回家吗？": [
    ml("也不 + V 吗", "…not … either?", ["也 picks up last year’s pattern. 过年也不回家."], {
      examples: [ex("你今年过年也不回家吗？", "You’re not going home for New Year this year either?")],
    }),
  ],
  "没办法，要加班，我家人也理解。你呢？你不用加班吧？": [
    ml("没办法，要 + V", "no choice — have to V", ["Excuse + family reaction. Then 你呢？"], {
      examples: [ex("没办法，要加班。", "No choice — I have to work overtime.")],
    }),
    ml("你不用加班吧", "you don’t have to work overtime, right", ["吧 seeks confirmation."]),
  ],
  "我跟我妈说要加班，其实是不想回去。": [
    ml("跟 N 说要 A，其实是 B", "told N it’s A, but actually B", ["A white lie. 其实是 reveals the real reason."], {
      pattern: "跟 + person + 说要 A，其实是 B",
      examples: [ex("我跟我妈说要加班，其实是不想回去。", "I told Mum I have overtime, but I just don’t want to go back.")],
    }),
  ],
  "不想回去？": [
    ml("不想回去？", "you don’t want to go back?", ["Echo question. Sets up the numbered list."], {
      examples: [ex("不想回去？", "You don’t want to go back?")],
    }),
  ],
  "第一，到处塞车〔堵车〕，身体累；第二，应付聊天，心累。": [
    ml("第一……第二……", "first… second…", ["A list of 累. 塞车〔堵车〕 is the Taiwan / Mainland pair."], {
      pattern: "第一，……；第二，……",
      examples: [ex("第一，身体累；第二，心累。", "First, body tired; second, mind tired.")],
    }),
    ml("应付聊天，心累", "dealing with the chat — mentally exhausted", ["应付 = cope, not enjoy."]),
  ],
  "哈！我知道！是不是交往对象、结婚生子、薪水年终？": [
    ml("是不是 + list", "is it A, B, C?", ["Guesses the 三连问: dating, marriage, money."], {
      examples: [ex("是不是交往对象、结婚生子、薪水年终？", "Is it dating, marriage and kids, salary and year-end bonus?")],
    }),
  ],
  "哎，对啊，压力超大。": [
    ml("压力超大", "the pressure is huge", ["哎 agrees with a sigh. 超大 is spoken."], {
      examples: [ex("哎，对啊，压力超大。", "Sigh — exactly. The pressure is huge.")],
    }),
  ],
  "真的是，难得团圆，就不能说些别的话题吗？": [
    ml("难得 + N", "a rare N", ["难得团圆 = we almost never all meet."]),
    ml("就不能 + V 吗", "can’t they just…?", ["A complaint question."], {
      examples: [ex("就不能说些别的话题吗？", "Can’t they talk about something else?")],
    }),
  ],
  "还有，第三，我家亲戚小孩超多的，荷包有可能大失血。": [
    ml("还有，第三", "and third", ["Continues the numbered list."]),
    ml("荷包……大失血", "the wallet bleeds heavily", ["红包 math. 超多的小孩 = many 压岁钱."], {
      examples: [ex("荷包有可能大失血。", "The wallet might bleed heavily.")],
    }),
  ],
  "虽然如此，我是真的加班没办法，一年就一次，我还是很想回去看看我爸妈。": [
    ml("虽然如此", "even so", ["Pivots from joke to homesickness."]),
    ml("一年就一次，还是很想 + V", "it’s only once a year — I still want to…", ["就一次 makes the trip precious."], {
      examples: [ex("一年就一次，我还是很想回去看看我爸妈。", "It’s only once a year. I still really want to go back and see my parents.")],
    }),
  ],
}

export const LESSON_6_4_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("其实是 + reason", "But actually…", ["A white-lie reveal after 跟 N 说."], {
    pattern: "跟 + person + 说要 A，其实是 B",
    examples: [
      ex("我跟我妈说要加班，其实是不想回去。", "I told Mum I have overtime, but I just don’t want to go back."),
      ex("他说要开会，其实是想睡觉。", "He said he had a meeting, but he actually wanted to sleep."),
      ex("我说来加班，其实是怕塞车〔堵车〕。", "I said I’d work overtime, but I was actually afraid of the traffic."),
    ],
  }),
  ml("第一……第二……", "First… second…", ["Count the 累. Add 还有，第三."], {
    pattern: "第一，……；第二，……",
    examples: [
      ex("第一，身体累；第二，心累。", "First, body tired; second, mind tired."),
      ex("第一，塞车〔堵车〕；第二，应付聊天。", "First, traffic; second, dealing with chat."),
      ex("第一，红包；第二，年菜。", "First, red envelopes; second, New Year dishes."),
    ],
  }),
  ml("就不能 + V 吗", "Can’t they just…?", ["Complaint. Pair with 难得团圆."], {
    pattern: "就不能 + V 吗",
    examples: [
      ex("就不能说些别的话题吗？", "Can’t they talk about something else?"),
      ex("就不能问问工作以外的事吗？", "Can’t they ask about something besides work?"),
      ex("就不能少问薪水吗？", "Can’t they ask less about salary?"),
    ],
  }),
  ml("荷包大失血", "The wallet bleeds", ["New Year 红包 joke. 失血 is figurative spending."], {
    pattern: "荷包 + 大失血",
    examples: [
      ex("荷包有可能大失血。", "The wallet might bleed heavily."),
      ex("过年荷包会失血。", "The wallet bleeds at New Year."),
      ex("红包一发，荷包失血。", "Hand out red envelopes and the wallet bleeds."),
    ],
  }),
  ml("一年就一次", "It’s only once a year", ["Makes going home worth it. Follow with 还是很想."], {
    pattern: "一年就一次，还是很想 + V",
    examples: [
      ex("一年就一次，我还是很想回去。", "It’s only once a year. I still want to go back."),
      ex("一年就一次，还是想看看爸妈。", "It’s only once a year. I still want to see Mum and Dad."),
      ex("团圆一年就一次。", "Reunion is only once a year."),
    ],
  }),
]
