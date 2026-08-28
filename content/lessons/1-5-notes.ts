import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_1_5_CORE_VOCAB: VocabItem[] = [
  v("喂", "hello (on the phone)"),
  v("有空", "to be free"),
  v("带", "to bring"),
  v("庭院", "yard; courtyard"),
  v("烤肉", "to barbecue"),
  v("热闹", "lively; bustling"),
  v("麻烦", "trouble; to trouble (someone)"),
  v("道", "measure word for dishes"),
  v("负责", "to be in charge of"),
  v("拼盘", "platter (assorted)"),
  v("写生", "to sketch from life"),
  v("折纸", "origami"),
  v("积木", "building blocks"),
  v("幼教", "preschool education"),
  v("变魔术", "to do magic tricks"),
]

export const LESSON_1_5_CHUNKS: VocabItem[] = [
  v("下周末有空吗？", "free next weekend?"),
  v("带小孩来我家玩吧", "bring the kids over"),
  v("怎么这么好", "that’s so nice of you"),
  v("在庭院烤肉", "barbecue in the yard"),
  v("人多热闹", "the more people, the livelier"),
  v("你不用太麻烦", "don’t go to too much trouble"),
  v("我带两道菜过去", "I’ll bring two dishes"),
  v("你负责……就好", "just take care of…"),
  v("其他我弄", "I’ll handle the rest"),
  v("最好别打游戏", "better not video games"),
  v("活动就交给你啦", "I’ll leave the activities to you"),
  v("要不也邀请他来？", "how about inviting him too?"),
  v("一定超兴奋的", "they’ll definitely be thrilled"),
  v("近距离地看魔术", "see magic up close"),
]

export const LESSON_1_5_FAMILY: VocabItem[] = [
  v("带小孩来玩", "bring the kids over"),
  v("烤肉", "barbecue"),
  v("热闹", "lively"),
  v("太麻烦", "too much trouble"),
  v("带菜", "bring a dish"),
  v("负责……就好", "just handle this part"),
  v("其他我弄", "I’ll do the rest"),
  v("交给你", "leave it to you"),
  v("邀请", "invite"),
]

export const LESSON_1_5_PRACTICE: MiniLessonExample[] = [
  ex("下周末有空吗？带小孩来我家玩吧！", "Free next weekend? Bring the kids over!"),
  ex("我们在庭院烤肉，人多热闹。", "We’ll barbecue in the yard. The more people, the livelier."),
  ex("你不用太麻烦，我带两道菜过去。", "Don’t go to too much trouble. I’ll bring two dishes."),
  ex("你负责沙拉就好，其他我弄。", "Just take the salad. I’ll handle the rest."),
  ex("最好别打游戏，我想一些创意活动。", "Better not video games. Let me think of some creative activities."),
  ex("你是老师，活动就交给你啦。", "You’re a teacher — I’ll leave the activities to you."),
  ex("要不也邀请他来教魔术？", "How about inviting him too, to teach magic?"),
  ex("小孩们一定超兴奋的！", "The kids will definitely be thrilled!"),
]

export const LESSON_1_5_FILL_BLANKS = [
  fb("1", "Bring the kids over to my place.", "带小孩", "我家玩吧！", "来", ["去", "在", "到"]),
  fb("2", "The more people, the livelier.", "人多", "！", "热闹", ["安静", "麻烦", "无聊"]),
  fb("3", "Don’t go to too much trouble.", "你不用太", "。", "麻烦", ["高兴", "客气", "兴奋"]),
  fb("4", "Just take the salad; I’ll handle the rest.", "你负责沙拉就好，其他我", "。", "弄", ["看", "玩", "请"]),
  fb("5", "Better not play video games.", "", "别打游戏。", "最好", ["已经", "还是", "一起"]),
  fb("6", "I’ll leave the activities to you.", "活动就", "你啦。", "交给", ["送给", "带到", "请到"]),
  fb("7", "How about inviting him too?", "", "也邀请他来？", "要不", ["还没", "已经", "一定"]),
  fb("8", "Free next weekend?", "下周末", "吗？", "有空", ["有名", "有钱", "有事"]),
]

export const LESSON_1_5_LINE_NOTES: Record<string, MiniLesson[]> = {
  "（电话铃声）": [
    ml("舞台提示", "stage direction", [
      "（） around a sound or action is not spoken as dialogue. 电话铃声 = phone ringing. You can skip reading it aloud.",
    ]),
  ],
  "喂？": [
    ml(
      "喂？",
      "hello? (phone)",
      [
        "First word when you pick up. Rising tone — 'hello?' Waiting to hear who it is.",
      ],
      {
        compare: [
          { label: "on the phone", hanzi: "喂？", en: "hello? (picking up)" },
          { label: "in person", hanzi: "你好", en: "hello (not 喂)" },
        ],
      }
    ),
  ],
  "喂，琳姐，我是小芳。下周末有空吗？带小孩来我家玩吧！": [
    ml(
      "琳姐 / 我是小芳",
      "address + self-intro on the phone",
      [
        "姐 after a name is warm, not always a real sister. 我是 + name is how you identify yourself on a call.",
      ],
      {
        examples: [ex("喂，我是小王。", "Hi, this is Xiao Wang.")],
      }
    ),
    ml(
      "有空吗？带…来…吧",
      "are you free? bring … over",
      [
        "下周末有空吗 is a standard invite opener. 带小孩来我家玩吧 — 带 + person + 来 + place.",
      ],
      {
        pattern: "带 + person + 来 + place",
      }
    ),
  ],
  "哇，怎么这么好！": [
    ml(
      "怎么这么好",
      "that's so nice of you!",
      [
        "怎么 + 这么 + adj = how can it be this…! Delight, not a real question.",
      ],
      {
        examples: [ex("怎么这么贵！", "How is it this expensive!")],
      }
    ),
  ],
  "在我家庭院烤肉，人多热闹！": [
    ml(
      "人多热闹",
      "the more people, the livelier",
      [
        "Two short comments stacked. 热闹 is a key party word — noisy in a good way.",
      ],
      {
        examples: [ex("夜市很热闹。", "The night market is lively.")],
      }
    ),
  ],
  "有大庭院真好！你不用太麻烦，我带两道菜过去吧。": [
    ml("有…真好", "it's so nice to have…", [
      "Compliment the house. 真好 after a noun phrase.",
    ]),
    ml(
      "不用太麻烦",
      "don't go to too much trouble",
      [
        "Guest politeness. Then offers to 带两道菜 — 道 is the measure word for cooked dishes.",
      ],
      {
        examples: [ex("我带一道汤。", "I'll bring a soup.")],
      }
    ),
  ],
  "你负责沙拉和水果拼盘就好，其他我弄。": [
    ml("沙拉 / 色拉 / 沙律", "salad, three writings", [
      "The book notes 沙拉 is also written 色拉 or 沙律. Same word, different regions. Learn 沙拉 as the default in this course.",
    ]),
    ml(
      "…就好，其他我弄",
      "just do …, I'll handle the rest",
      [
        "就好 = that's all you need to do. 弄 = take care of / make, very spoken.",
      ],
      {
        examples: [
          ex(
            "你洗碗就好，其他我弄。",
            "Just do the dishes; I'll handle the rest."
          ),
        ],
      }
    ),
  ],
  "好。饭后给小孩玩什么？": [
    ml(
      "饭后给…玩什么",
      "what should the kids play after the meal?",
      [
        "饭后 = after the meal. 给 + person + 玩 + what. Planning kids' activities.",
      ],
      {
        pattern: "给 + person + V + 什么",
      }
    ),
  ],
  "如果喜欢画图的话，可以在庭院写生。也可以折纸、打牌、玩积木、打游戏。": [
    ml(
      "如果…的话，可以…",
      "if they like…, they can…",
      [
        "的话 tags the if-clause. 写生 = sketch from life, a nice outdoor verb.",
      ],
      {
        pattern: "如果 + situation + 的话，可以 + V",
      }
    ),
    ml("也可以 A、B、C", "they can also…", [
      "List of activities: 折纸、打牌、玩积木、打游戏. 打游戏 = play video games.",
    ]),
  ],
  "最好别打游戏，我想一些创意活动吧。": [
    ml(
      "最好别…",
      "better not…",
      ["Soft prohibition. 别 + verb. 创意活动 = creative activities."],
      {
        examples: [ex("最好别迟到。", "Better not be late.")],
      }
    ),
  ],
  "你是幼教老师，活动就交给你啦。": [
    ml(
      "就交给你啦",
      "I'll leave it to you then",
      [
        "交给 + person. 啦 is warm and final. Because she is a 幼教老师 (preschool teacher).",
      ],
      {
        examples: [ex("这件事交给你。", "I'll leave this to you.")],
      }
    ),
  ],
  "我们学校有个老师会变魔术，要不也邀请他来？教魔术。": [
    ml(
      "要不…？",
      "how about…?",
      [
        "Suggestion. 要不 + idea. 会变魔术 = knows how to do magic. 邀请他来 = invite him over.",
      ],
      {
        examples: [ex("要不明天去？", "How about going tomorrow?")],
      }
    ),
  ],
  "好耶！我不曾这么近距离地看魔术，小孩们一定超兴奋的！": [
    ml("好耶", "yay!", ["Cheerful yes. More excited than 好."]),
    ml(
      "不曾",
      "have never (before)",
      ["A bit literary / Taiwan textbook flavor. Same idea as 从来没有."],
      {
        compare: [
          {
            label: "more written",
            hanzi: "不曾",
            en: "have never (textbook / literary flavor)",
          },
          { label: "more spoken", hanzi: "从来没", en: "have never" },
        ],
      }
    ),
    ml("一定超兴奋", "they'll definitely be super excited", [
      "超 + adj is very spoken 'super'. 近距离地 = from close up (adverb 地).",
    ]),
  ],
}

export const LESSON_1_5_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "带 + person + 来 + place",
    "Bring someone over",
    ["带小孩来我家玩吧. 带 + person + 来 + place is the standard invite to come along."],
    {
      pattern: "带 + person + 来 + place",
      examples: [
        ex("带小孩来我家玩吧。", "Bring the kids over to my place."),
        ex("带朋友来吃饭。", "Bring a friend to eat."),
        ex("下次带你弟弟来。", "Bring your little brother next time."),
      ],
    },
  ),
  ml(
    "…就好，其他我弄",
    "Just do this; I’ll handle the rest",
    ["你负责沙拉和水果拼盘就好，其他我弄. 就好 = that’s all you need to do. 弄 is spoken “take care of.”"],
    {
      pattern: "你 + V + 就好，其他我弄",
      examples: [
        ex("你洗碗就好，其他我弄。", "Just do the dishes; I’ll handle the rest."),
        ex("你带饮料就好。", "Just bring drinks — that’s enough."),
        ex("其他我弄。", "I’ll take care of the rest."),
      ],
    },
  ),
  ml(
    "最好别…",
    "Better not…",
    ["最好别打游戏 is a soft prohibition. 最好 + 别 + verb."],
    {
      pattern: "最好别 + V",
      examples: [
        ex("最好别打游戏。", "Better not play video games."),
        ex("最好别迟到。", "Better not be late."),
        ex("最好别跟他说。", "Better not tell him."),
      ],
    },
  ),
  ml(
    "交给 + person",
    "Leave it to someone",
    ["活动就交给你啦. 交给 + person = I’ll leave this in your hands. 啦 is warm and final."],
    {
      pattern: "就交给 + person",
      examples: [
        ex("这件事交给你。", "I’ll leave this to you."),
        ex("活动就交给你啦。", "I’ll leave the activities to you then."),
        ex("做饭交给我。", "Leave the cooking to me."),
      ],
    },
  ),
  ml(
    "要不…？",
    "How about…?",
    ["要不也邀请他来？ is a suggestion. 要不 + idea. Often a new option in the middle of a plan."],
    {
      pattern: "要不 + suggestion",
      examples: [
        ex("要不明天去？", "How about going tomorrow?"),
        ex("要不也邀请他来？", "How about inviting him too?"),
        ex("要不我们先吃饭？", "How about we eat first?"),
      ],
    },
  ),
]

