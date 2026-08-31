import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_1_3_CORE_VOCAB: VocabItem[] = [
  v("下班后", "after work"),
  v("喝一杯", "have a drink"),
  v("轮到", "it's (my) turn"),
  v("煮饭", "to cook (rice / a meal)"),
  v("负责", "to be in charge of"),
  v("帮忙", "to help"),
  v("家务", "housework"),
  v("洗碗", "to wash dishes"),
  v("倒垃圾", "to take out the trash"),
  v("洗碗机", "dishwasher"),
  v("熨衣服", "to iron clothes"),
  v("机器人", "robot"),
  v("包办", "to take care of everything"),
]

export const LESSON_1_3_CHUNKS: VocabItem[] = [
  v("下班后去喝一杯吧？", "want to grab a drink after work?"),
  v("今天轮到我煮饭", "it’s my turn to cook today"),
  v("用轮的", "we take turns"),
  v("帮忙家务", "help with housework"),
  v("负责洗碗", "be in charge of the dishes"),
  v("倒垃圾", "take out the trash"),
  v("不爱洗碗", "hate washing dishes"),
  v("买一台洗碗机吧", "how about buying a dishwasher"),
  v("很方便", "very convenient"),
  v("熨衣服", "iron clothes"),
  v("最没有意思的家务", "the most boring chore"),
  v("要是有个机器人就好了", "if only we had a robot"),
  v("扫地机器人", "robot vacuum"),
  v("包办所有的家务", "take over all the housework"),
]

export const LESSON_1_3_FAMILY: VocabItem[] = [
  v("煮饭", "cook a meal"),
  v("洗碗", "wash dishes"),
  v("倒垃圾", "take out the trash"),
  v("熨衣服", "iron clothes"),
  v("扫地", "sweep the floor"),
  v("负责", "be in charge of"),
  v("轮到", "it’s someone’s turn"),
  v("帮忙家务", "help with housework"),
  v("包办", "handle everything"),
]

export const LESSON_1_3_PRACTICE: MiniLessonExample[] = [
  ex("不好意思，今天轮到我煮饭，不能去喝一杯。", "Sorry — it’s my turn to cook today, so I can’t go for a drink."),
  ex("我家用轮的，周末轮到我做家务。", "We take turns at home. Weekends are my housework days."),
  ex("我负责洗碗和倒垃圾，太太喜欢煮饭。", "I do the dishes and take out the trash. My wife likes cooking."),
  ex("她喜欢煮饭，可是不爱洗碗。", "She likes cooking but hates washing dishes."),
  ex("买一台洗碗机吧，很方便。", "Buy a dishwasher. It’s convenient."),
  ex("熨衣服是最没有意思的家务。", "Ironing is the most boring chore."),
  ex("要是有个机器人就好了！", "If only we had a robot!"),
  ex("我希望有机器人包办所有的家务。", "I wish a robot would take over all the housework."),
]

export const LESSON_1_3_FILL_BLANKS = [
  fb("1", "It’s my turn to cook today.", "今天", "我煮饭。", "轮到", ["等到", "找到", "拿到"]),
  fb("2", "I am in charge of the dishes.", "我", "洗碗。", "负责", ["喜欢", "帮忙", "轮到"]),
  fb("3", "Do you help with housework?", "你", "家务吗？", "帮忙", ["负责", "包办", "轮到"]),
  fb("4", "How about buying a dishwasher?", "买一台洗碗机", "。", "吧", ["吗", "呢", "啊"]),
  fb("5", "If only we had a robot.", "要是有个机器人", "！", "就好了", ["才好了", "还好了", "也好了"]),
  fb("6", "Ironing is the most boring chore.", "熨衣服是", "没有意思的家务。", "最", ["很", "太", "更"]),
  fb("7", "I wish a robot would take over all the housework.", "我希望有机器人", "所有的家务。", "包办", ["帮忙", "负责", "轮到"]),
  fb("8", "Neither of us likes ironing.", "我们都", "熨衣服。", "不喜欢", ["很喜欢", "负责", "轮到"]),
]

export const LESSON_1_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "下班后去喝一杯吧？": [
    ml(
      "下班后",
      "after getting off work",
      ["后 after a verb = after doing it. 下班后、吃饭后、下课以后。"],
      {
        pattern: "V + 后",
        examples: [
          ex("吃完后打电话给我。", "Call me after you finish eating."),
        ],
      }
    ),
    ml(
      "喝一杯",
      "have a drink",
      [
        "一杯 is one glass — usually alcohol, casual. 去喝一杯吧 is a classic after-work invite.",
      ],
      {
        examples: [ex("晚上喝一杯？", "Grab a drink tonight?")],
      }
    ),
  ],
  "不好意思，今天轮到我煮饭。": [
    ml("不好意思", "sorry / excuse me", [
      "Polite refusal. Softens saying no to the drink.",
    ]),
    ml(
      "轮到我…",
      "it's my turn to…",
      [
        "轮到 + person + verb. Used for chores, speaking in class, buying coffee.",
      ],
      {
        pattern: "轮到 + person + V",
        examples: [ex("轮到你洗碗。", "It's your turn to do the dishes.")],
      }
    ),
  ],
  "你家用轮的？你负责星期几的？": [
    ml(
      "用轮的",
      "take turns / by rotation",
      [
        "Taiwan spoken pattern: 用 + a one-syllable verb + 的 = do it that way. 用轮的 = take turns (a rotation), not “use a wheel.” Different from 轮到, which names whose turn it is right now.",
      ],
      {
        pattern: "用 + V + 的",
        compare: [
          {
            label: "the system",
            hanzi: "用轮的",
            en: "we take turns (how the house is organized)",
          },
          {
            label: "whose turn",
            hanzi: "轮到我煮饭",
            en: "it’s my turn to cook (I am up now)",
          },
        ],
        examples: [
          ex("家务用轮的。", "We take turns on the chores."),
          ex("洗碗用轮的，煮饭也用轮的。", "We take turns on dishes, and on cooking too."),
        ],
      }
    ),
    ml(
      "负责星期几的",
      "which day's (chores) are you in charge of?",
      ["负责 + time/task. 的 stands for 家务 / 那天的工作."],
      {
        examples: [ex("我负责周一。", "I'm in charge of Mondays.")],
      }
    ),
  ],
  "周末。你呢？你帮忙家务吗？": [
    ml(
      "帮忙家务",
      "help with housework",
      [
        "帮忙 + noun. You can also say 帮忙做家务. 你呢？ turns the question back.",
      ],
      {
        examples: [ex("你帮忙煮饭吗？", "Do you help with cooking?")],
      }
    ),
  ],
  "我负责洗碗和倒垃圾。我太太喜欢煮饭，可是不爱洗碗。": [
    ml("负责 A 和 B", "I'm in charge of A and B", [
      "List chores with 和. 洗碗、倒垃圾 are high-frequency housework verbs.",
    ]),
    ml(
      "喜欢…可是不爱…",
      "likes… but doesn't like…",
      ["不爱 is stronger / more colloquial than 不喜欢 — 'doesn't care for'."],
      {
        examples: [ex("喜欢煮饭，不爱洗碗。", "Likes cooking, doesn’t like doing dishes.")],
      }
    ),
  ],
  "买一台洗碗机吧，很方便。": [
    ml(
      "V + 吧 (suggestion)",
      "why not…",
      [
        "Imperative 吧 after a suggestion. 一台 is the measure word for machines.",
      ],
      {
        examples: [ex("买一台扫地机器人吧。", "How about buying a robot vacuum.")],
      }
    ),
    ml("很方便", "very convenient", [
      "Common follow-up after recommending a gadget or app.",
    ]),
  ],
  "还有我们都不喜欢熨衣服，熨衣服是最没有意思的家务。": [
    ml("还有…", "and also…", [
      "Adds another point in conversation, not 'there still is'.",
    ]),
    ml(
      "最没有意思",
      "the most boring / pointless",
      ["没有意思 = dull, no fun. Superlative 最. 熨衣服 repeats for emphasis."],
      {
        examples: [
          ex("排队最没有意思。", "Waiting in line is the most boring."),
        ],
      }
    ),
  ],
  "我也不喜欢熨衣服，要是有个机器人就好了！": [
    ml(
      "要是…就好了",
      "if only there were…",
      ["Wish. 要是 + unreal + 就好了. Same family as 如果…就好了 in 1-2."],
      {
        pattern: "要是 + situation + 就好了",
        compare: [
          {
            label: "spoken",
            hanzi: "要是有个机器人就好了",
            en: "if only we had a robot (very spoken)",
          },
          {
            label: "textbook",
            hanzi: "如果有个机器人就好了",
            en: "if only we had a robot (a bit more textbook)",
          },
        ],
      }
    ),
  ],
  "应该在不久后的未来就会有了，现在不是已经有扫地机器人、煮饭机器人，和照护老人的机器人了？":
    [
      ml("不久后的未来", "in the not-too-distant future", [
        "不久后 = before long. Stacked with 未来 for 'soon-ish future'.",
      ]),
      ml(
        "现在不是已经有…了？",
        "don't we already have…?",
        ["Rhetorical 不是…吗/了. Lists robot types: 扫地、煮饭、照护老人。"],
        {
          examples: [
            ex(
              "现在不是已经有洗碗机了？",
              "Don’t we already have dishwashers?"
            ),
          ],
        }
      ),
    ],
  "我希望有机器人包办所有的家务！": [
    ml(
      "包办",
      "handle everything (so I don't have to)",
      ["包办 = take the whole job. Stronger than 帮忙. 所有的 = all."],
      {
        examples: [
          ex("我希望机器人包办家务。", "I want a robot to take over the housework."),
          ex("旅行社包办行程。", "The agency handles the whole itinerary."),
        ],
      }
    ),
  ],
}

export const LESSON_1_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "轮到 + person + verb",
    "It’s someone’s turn to…",
    ["轮到我煮饭 — it’s my turn to cook. Use this for chores, paying, speaking in class, buying coffee."],
    {
      pattern: "轮到 + person + V",
      examples: [
        ex("今天轮到我洗碗。", "It’s my turn to do the dishes today."),
        ex("轮到你了。", "It’s your turn."),
        ex("下个月轮到她开车。", "Next month it’s her turn to drive."),
      ],
    },
  ),
  ml(
    "用 + V + 的",
    "Do it that way (spoken)",
    [
      "用轮的 is this lesson’s example: the house runs on a rotation. Same spoken shape: 用走的 go by walking. Not the same as 轮到, which names who is up right now.",
    ],
    {
      pattern: "用 + V + 的",
      compare: [
        {
          label: "the system",
          hanzi: "用轮的",
          en: "we take turns",
        },
        {
          label: "whose turn",
          hanzi: "轮到我煮饭",
          en: "it’s my turn to cook",
        },
      ],
      examples: [
        ex("家务用轮的。", "We take turns on the chores."),
        ex("洗碗用轮的。", "We take turns washing dishes."),
        ex("去公司用走的。", "I walk to the office."),
      ],
    },
  ),
  ml(
    "负责 + task",
    "Be in charge of…",
    ["负责洗碗和倒垃圾. You can 负责 a chore, a day of the week, or a whole project."],
    {
      pattern: "负责 + noun / V",
      examples: [
        ex("我负责周末。", "I’m in charge of weekends."),
        ex("她负责煮饭。", "She’s in charge of cooking."),
        ex("谁负责倒垃圾？", "Who’s in charge of taking out the trash?"),
      ],
    },
  ),
  ml(
    "V + 吧 (suggestion)",
    "Why not… / how about…",
    ["买一台洗碗机吧 is a suggestion, not an order. 吧 after a verb or a plan softens it."],
    {
      pattern: "V + 吧",
      examples: [
        ex("买一台洗碗机吧。", "How about buying a dishwasher."),
        ex("我们回家吧。", "Let’s go home."),
        ex("先吃饭吧。", "Let’s eat first."),
      ],
    },
  ),
  ml(
    "要是…就好了",
    "If only there were…",
    ["Wish. Same idea as 如果…就好了 in 1-2, but 要是 is very spoken. 要是有个机器人就好了。"],
    {
      pattern: "要是 + situation + 就好了",
      examples: [
        ex("要是有个机器人就好了。", "If only we had a robot."),
        ex("要是今天下雨就好了。", "If only it would rain today."),
        ex("要是你会煮饭就好了。", "If only you could cook."),
      ],
    },
  ),
  ml(
    "最 + adjective",
    "The most…",
    ["熨衣服是最没有意思的家务. 最 + adj (or 没有意思) makes a superlative. 最累, 最方便, 最麻烦。"],
    {
      pattern: "最 + Adj",
      examples: [
        ex("熨衣服最没有意思。", "Ironing is the most boring."),
        ex("洗碗最麻烦。", "Doing dishes is the most annoying."),
        ex("这是最方便的办法。", "This is the most convenient way."),
      ],
    },
  ),
]

