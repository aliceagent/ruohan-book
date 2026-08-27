import type { MiniLesson, VocabItem } from "@/lib/types"
import { ex, ml, v } from "./note-helpers"

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
      "do you take turns?",
      ["用 + method + 的. 用轮的 = using a rotation system. Casual, spoken."],
      {
        examples: [ex("房租用分的。", "We split the rent.")],
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
        examples: [ex("你帮忙做饭吗？", "Do you help with cooking?")],
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
        examples: [ex("爱吃不爱做。", "Loves eating, doesn't love cooking.")],
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
        examples: [ex("买一台新手机吧。", "Buy a new phone.")],
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
              "现在不是已经有高铁了？",
              "Don't we already have high-speed rail?"
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
    "负责 + task",
    "Be in charge of…",
    ["负责洗碗和倒垃圾. You can 负责 a chore, a day of the week, or a whole project."],
    {
      pattern: "负责 + noun / V",
      examples: [
        ex("我负责周末。", "I’m in charge of weekends."),
        ex("她负责做饭。", "She’s in charge of cooking."),
        ex("谁负责带饮料？", "Who’s in charge of bringing drinks?"),
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
        ex("要是你会做饭就好了。", "If only you could cook."),
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

