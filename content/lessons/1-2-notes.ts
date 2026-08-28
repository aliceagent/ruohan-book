import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_1_2_CORE_VOCAB: VocabItem[] = [
  v("交", "to hand in; to submit"),
  v("报告", "report"),
  v("还没", "not yet"),
  v("坏习惯", "bad habit"),
  v("拖", "to delay; to put off"),
  v("最后一刻", "the last minute"),
  v("按时", "on time"),
  v("完成", "to finish; to complete"),
  v("不安心", "uneasy; not at peace"),
  v("结果", "as a result; in the end"),
  v("规划", "to plan; planning"),
  v("记事手册", "planner; notebook"),
  v("手写", "to write by hand"),
  v("有条理", "organized; methodical"),
]

export const LESSON_1_2_CHUNKS: VocabItem[] = [
  v("交报告了吗？", "have you turned in the report?"),
  v("还没", "not yet"),
  v("坏习惯", "bad habit"),
  v("拖到最后一刻", "put it off until the last minute"),
  v("按时完成", "finish on time"),
  v("不早一点做完不安心", "not at ease unless I finish a bit early"),
  v("如果……就好了", "if only…"),
  v("结果……还是……", "and in the end, still…"),
  v("向你学习学习", "I should learn a bit from you"),
  v("规划时间", "plan one’s time"),
  v("时间不够用", "there isn’t enough time"),
  v("记事手册", "paper planner"),
  v("手写", "write by hand"),
  v("真有条理", "so organized"),
  v("用写的比用手机更能提醒自己", "writing it down reminds me more than a phone"),
  v("我也去买一本好了", "I might as well go buy one too"),
]

export const LESSON_1_2_FAMILY: VocabItem[] = [
  v("交了", "already handed it in"),
  v("还没（有）", "not yet"),
  v("拖到最后一刻", "leave it until the last minute"),
  v("按时完成", "finish on time"),
  v("早一点做完", "finish a bit early"),
  v("不安心", "uneasy; not at peace"),
  v("时间不够用", "not enough time"),
  v("规划时间", "plan one’s time"),
  v("向你学习学习", "pick up a few things from you"),
]

export const LESSON_1_2_PRACTICE: MiniLessonExample[] = [
  ex("报告还没交，我又拖到最后一刻了。", "I still haven’t turned in the report — I put it off until the last minute again."),
  ex("我都是按时完成的，不早一点做完不安心。", "I always finish on time. I don’t feel at ease unless I finish a bit early."),
  ex("如果一天有25个小时就好了。", "If only a day had 25 hours."),
  ex("我得向你学习学习，你都怎么规划时间的？", "I should learn from you. How do you plan your time?"),
  ex("我总觉得时间不够用。", "I always feel there isn’t enough time."),
  ex("我习惯用记事手册手写。", "I’m used to writing things by hand in a planner."),
  ex("好像用写的比用手机更能提醒自己。", "Writing it down seems more of a reminder than a phone."),
  ex("结果电影看了，报告还是最后一刻才完成。", "I watched the movie, and the report still got finished at the last minute."),
]

export const LESSON_1_2_FILL_BLANKS = [
  fb("1", "Not yet.", "报告", "交。", "还没", ["已经", "刚刚", "马上"]),
  fb("2", "I put it off until the last minute.", "我总是拖到", "。", "最后一刻", ["明天早上", "下个月", "一年前"]),
  fb("3", "I always finish on time.", "我都是", "完成的。", "按时", ["随便", "慢慢", "一起"]),
  fb("4", "If only a day had 25 hours.", "如果一天有25个小时", "。", "就好了", ["才好了", "也好了", "还好了"]),
  fb("5", "I should learn a bit from you.", "我得向你", "。", "学习学习", ["休息休息", "吃饭吃饭", "看看看"]),
  fb("6", "There isn’t enough time.", "我总觉得时间", "。", "不够用", ["不好用", "不用", "没用"]),
  fb("7", "Writing seems more of a reminder than a phone.", "好像用写的比用手机更能", "自己。", "提醒", ["忘记", "麻烦", "睡觉"]),
  fb("8", "I don’t feel at ease if I don’t finish early.", "不早一点做完我", "。", "不安心", ["不好意思", "不舒服", "不满意"]),
]

export const LESSON_1_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你交报告了吗？": [
    ml(
      "交 + 作业 / 报告",
      "hand in homework or a report",
      [
        "交 means to submit something you were supposed to finish. 交作业、交报告、交税。",
      ],
      {
        pattern: "交 + noun",
        examples: [
          ex("交作业", "hand in homework"),
          ex("交报告了吗？", "Have you handed in the report?"),
        ],
      }
    ),
  ],
  "还没，我的坏习惯，都要拖到最后一刻。你呢？": [
    ml(
      "还没",
      "not yet",
      [
        "Short for 还没有. Very common when someone asks if you have finished something.",
      ],
      {
        examples: [ex("吃了吗？还没。", "Have you eaten? Not yet.")],
      }
    ),
    ml(
      "拖到最后一刻",
      "put off until the last minute",
      [
        "拖 = drag / delay. 最后一刻 is the last moment. A very useful phrase for procrastination.",
      ],
      {
        pattern: "拖到 + time",
        examples: [ex("别拖到明天。", "Don't put it off until tomorrow.")],
      }
    ),
    ml(
      "都要…",
      "always have to… (bad habit)",
      ["都 here means 'always / every time', not 'all of us'."],
      {
        examples: [ex("他都要迟到。", "He always ends up being late.")],
      }
    ),
  ],
  "交了。我都是按时完成的，不早一点做完不安心。": [
    ml(
      "按时完成",
      "finish on time",
      ["按时 = according to the scheduled time. Pair with 完成."],
      {
        examples: [ex("请按时到。", "Please arrive on time.")],
      }
    ),
    ml(
      "不…不…",
      "not at peace unless…",
      [
        "不早一点做完不安心 = if I don't finish a bit early, I can't relax. Two 不's lock the condition together.",
      ],
      {
        pattern: "不 A 不 B",
        examples: [
          ex("不见不散", "don't leave until we meet"),
          ex("不早一点做完不安心", "can't relax unless I finish a bit early"),
        ],
      }
    ),
  ],
  "如果一天有25个小时就好了。": [
    ml(
      "如果…就好了",
      "if only…",
      [
        "Wish for something that is not true. Softer than 要是…就好了, same idea.",
      ],
      {
        pattern: "如果 + unreal situation + 就好了",
        examples: [ex("如果会飞就好了。", "If only I could fly.")],
      }
    ),
  ],
  "如果一天有25个小时，你要用多的那一小时做什么？": [
    ml(
      "多的那一小时",
      "that extra hour",
      [
        "多的 = the extra one. 那一小时 points to the extra hour from the 25-hour day.",
      ],
      {
        examples: [ex("多的钱存起来。", "Save the extra money.")],
      }
    ),
  ],
  "可以看电影、睡觉。": [
    ml(
      "可以 + activities",
      "could (do these things)",
      [
        "Here 可以 is 'I could / I would', listing uses for the extra hour. Pause between options.",
      ],
      {
        examples: [ex("可以喝茶、聊天。", "We could drink tea and chat.")],
      }
    ),
  ],
  "结果报告还是最后一刻才完成？": [
    ml(
      "结果…还是…",
      "and in the end… still…",
      [
        "结果 introduces the actual outcome. 还是 + 才 = still only at the last minute.",
      ],
      {
        examples: [ex("结果还是迟到了。", "In the end (he) was still late.")],
      }
    ),
  ],
  "我得向你学习学习。你都怎么规划时间的？我总觉得时间不够用。": [
    ml(
      "向…学习学习",
      "I should learn from you",
      [
        "向 + person + 学习. Reduplicating 学习 softens it — 'pick up a few things from you'.",
      ],
      {
        pattern: "向 + person + 学习（学习）",
        examples: [ex("向老师学习", "learn from the teacher")],
      }
    ),
    ml(
      "总觉得…不够用",
      "I always feel there isn't enough…",
      ["总觉得 = I always have this feeling that… 不够用 = not enough to use."],
      {
        examples: [
          ex("总觉得钱不够用。", "I always feel there isn't enough money."),
        ],
      }
    ),
    ml("规划时间", "plan one's time", [
      "规划 is a bit more formal than 安排. Good for schedules and life plans.",
    ]),
  ],
  "我习惯用记事手册手写，你看。": [
    ml(
      "习惯用…",
      "be used to using…",
      ["习惯 + 用 + tool. 手写 emphasizes handwriting vs phone."],
      {
        pattern: "习惯 + V",
        examples: [ex("我习惯走路上班。", "I'm used to walking to work.")],
      }
    ),
    ml("记事手册", "planner / notebook", [
      "A paper calendar or diary you write in. 你看 = look (showing it).",
    ]),
  ],
  "真有条理，好像用写的比用手机更能提醒自己。我也去买一本好了。": [
    ml("真有条理", "so organized", [
      "有条理 = methodical, everything in order. High-praise for someone with a system.",
    ]),
    ml(
      "好像 A 比 B 更能…",
      "it seems A is better than B at…",
      [
        "好像 softens the comparison. 用写的 vs 用手机. 更能提醒自己 = better at reminding you.",
      ],
      {
        pattern: "好像 A 比 B 更能 + V",
      }
    ),
    ml(
      "我也去…好了",
      "I might as well go… too",
      ["好了 here decides on the spot. Same as 我去买一本好了."],
      {
        examples: [ex("我也报名好了。", "I might as well sign up too.")],
      }
    ),
  ],
}

export const LESSON_1_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "还没",
    "Not yet",
    ["还没 is short for 还没有. Use it when someone asks if you have finished something. Pair it with 了 in the question: 交了吗？还没。"],
    {
      pattern: "还没（有）",
      examples: [
        ex("吃了吗？还没。", "Have you eaten? Not yet."),
        ex("报告还没交。", "I haven’t turned in the report yet."),
        ex("我还没想好。", "I haven’t decided yet."),
      ],
    },
  ),
  ml(
    "拖到 + time",
    "Put it off until…",
    ["拖 is “drag / delay.” 拖到最后一刻 is the last-minute habit in this dialogue. You can also 拖到明天, 拖到周末。"],
    {
      pattern: "拖到 + time",
      examples: [
        ex("别拖到明天。", "Don’t put it off until tomorrow."),
        ex("作业拖到周日晚上。", "The homework got dragged to Sunday night."),
        ex("我总是拖到最后一刻。", "I always leave it until the last minute."),
      ],
    },
  ),
  ml(
    "如果…就好了",
    "If only…",
    ["A wish for something that is not true. 如果一天有25个小时就好了. Same family as 要是…就好了 — 要是 is a bit more spoken."],
    {
      pattern: "如果 + unreal + 就好了",
      examples: [
        ex("如果会飞就好了。", "If only I could fly."),
        ex("如果今天放假就好了。", "If only today were a day off."),
        ex("要是有更多时间就好了。", "If only I had more time."),
      ],
    },
  ),
  ml(
    "向…学习学习",
    "I should pick this up from you",
    ["向 + person + 学习. Doubling 学习 softens it: “learn a bit from you,” not a formal course."],
    {
      pattern: "向 + person + 学习（学习）",
      examples: [
        ex("我得向你学习学习。", "I should learn a thing or two from you."),
        ex("向老师学习。", "Learn from the teacher."),
        ex("多向同事学习。", "Learn more from colleagues."),
      ],
    },
  ),
  ml(
    "好像 A 比 B 更能…",
    "A seems better than B at…",
    ["好像 softens the comparison. 用写的比用手机更能提醒自己 — handwriting seems better than a phone at reminding you."],
    {
      pattern: "好像 A 比 B 更能 + V",
      examples: [
        ex("好像走路比开车更健康。", "Walking seems healthier than driving."),
        ex("好像手写比打字记得更牢。", "Handwriting seems to stick better than typing."),
        ex("好像早起比熬夜更有效。", "Getting up early seems more effective than staying up late."),
      ],
    },
  ),
]

