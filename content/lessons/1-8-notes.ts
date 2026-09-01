import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_1_8_CORE_VOCAB: VocabItem[] = [
  v("王妈妈", "Auntie Wang (neighbor / elder)"),
  v("买东西", "to go shopping / buy things"),
  v("超市", "supermarket"),
  v("大菜市", "big wet market"),
  v("传统市场", "traditional market"),
  v("定价", "set / marked price"),
  v("安心", "at ease; feel safe"),
  v("打折", "to be on sale; discount"),
  v("百货", "department store"),
  v("周年庆", "anniversary sale"),
  v("限定", "limited (edition / item)"),
  v("量贩店", "warehouse store / hypermarket"),
  v("合买", "to buy together / split a bulk pack"),
  v("大包装", "large pack / bulk size"),
  v("出发", "to set off; to leave"),
]

export const LESSON_1_8_CHUNKS: VocabItem[] = [
  v("去买东西啊？", "going shopping?"),
  v("去超市", "go to the supermarket"),
  v("怎么不去大菜市？", "why not the wet market?"),
  v("又新鲜又便宜", "both fresher and cheaper"),
  v("有定价比较安心", "set prices feel safer"),
  v("下次去看看", "I’ll try it next time"),
  v("在打折", "on sale"),
  v("周年庆", "anniversary sale"),
  v("限定的东西", "limited items"),
  v("忙着上班", "busy with work"),
  v("要不要一起去？", "want to go together?"),
  v("我们可以合买", "we can split a bulk pack"),
  v("吃不完用不完", "can’t finish eating or using it"),
  v("在楼下门口等我", "wait for me at the downstairs entrance"),
]

export const LESSON_1_8_FAMILY: VocabItem[] = [
  v("买东西", "go shopping"),
  v("超市", "supermarket"),
  v("传统市场", "traditional / wet market"),
  v("又新鲜又便宜", "fresh and cheap"),
  v("有定价", "has set prices"),
  v("打折", "on sale"),
  v("合买", "buy together / split bulk"),
  v("吃不完", "can’t finish eating it"),
  v("用不完", "can’t use it all"),
  v("要不要一起去", "want to go together?"),
]

export const LESSON_1_8_PRACTICE: MiniLessonExample[] = [
  ex("怎么不去大菜市？传统市场东西多，又新鲜又便宜。", "Why not the wet market? Traditional markets have more, and it’s fresher and cheaper."),
  ex("超市有定价，我感觉比较安心。", "Supermarkets have set prices, so I feel safer."),
  ex("下次去大菜市看看。", "I’ll try the wet market next time."),
  ex("春天百货在打折，还有很多限定的东西。", "Spring Department Store is on sale, with lots of limited items."),
  ex("我每天忙着上班都不知道。", "I’ve been so busy with work I had no idea."),
  ex("明天要去量贩店，要不要一起去？", "I’m going to the warehouse store tomorrow. Want to come?"),
  ex("我们可以合买，大包装一个人吃不完用不完。", "We can split bulk packs. Alone, the big packs never get finished."),
  ex("明天早上9点出发，在楼下门口等我。", "We leave at 9 tomorrow. Wait for me downstairs."),
]

export const LESSON_1_8_FILL_BLANKS = [
  fb("1", "Why not go to the wet market?", "怎么不", "大菜市？", "去", ["买", "看", "等"]),
  fb("2", "It’s both fresher and cheaper.", "", "新鲜又便宜。", "又", ["也", "还", "都"]),
  fb("3", "By the way, the department store is on sale.", "", "，春天百货在打折你知道吗？", "对了", ["还没", "要不", "怪不得"]),
  fb("4", "The big pack never gets finished.", "大包装吃", "用不完。", "不完", ["不到", "不了", "不起"]),
  fb("5", "Want to go together?", "要不要", "去？", "一起", ["自己", "马上", "已经"]),
  fb("6", "We can buy it together and split it.", "我们可以", "。", "合买", ["打折", "出发", "限定"]),
  fb("7", "Set prices make me feel safer.", "超市有定价我感觉比较", "。", "安心", ["不安心", "有意思", "有条理"]),
  fb("8", "Wait for me at the downstairs entrance.", "在楼下门口", "我。", "等", ["接", "送", "找"]),
]

export const LESSON_1_8_LINE_NOTES: Record<string, MiniLesson[]> = {
  "王妈妈早。": [
    ml(
      "王妈妈",
      "Auntie Wang — how you address an older neighbor",
      [
        "Surname + 妈妈 is a warm title for a married woman a generation older, not necessarily your mother. Same family: 王阿姨、李伯伯、张老师. In the elevator you greet with 早 rather than a full 早上好.",
      ],
      {
        examples: [
          ex("李妈妈好！", "Hello, Auntie Li!"),
          ex("王阿姨早。", "Good morning, Auntie Wang."),
          ex("张伯伯再见。", "Goodbye, Uncle Zhang."),
        ],
        compare: [
          { label: "elder woman", hanzi: "王妈妈 / 王阿姨", en: "Auntie Wang" },
          {
            label: "by name only",
            hanzi: "王太太",
            en: "Mrs. Wang (more formal)",
          },
        ],
      }
    ),
  ],
  "早，早。去买东西啊？": [
    ml(
      "去…啊？",
      "going to…, are you?",
      [
        "早，早 is a doubled morning greeting — friendly and quick. 去买东西啊？ is not a real demand for an answer. 啊 turns it into a warm confirmation: I can see you’re heading out to shop.",
      ],
      {
        pattern: "去 + activity + 啊？",
        examples: [
          ex("去上课啊？", "Heading to class, are you?"),
          ex("下班了啊？", "Off work, huh?"),
          ex("去吃饭啊？", "Going to eat?"),
        ],
      }
    ),
  ],
  "对，去超市。": [
    ml(
      "对，去…",
      "yes — (I’m) going to…",
      [
        "对 confirms the guess. Spoken Chinese often drops 我: 去超市 = I’m going to the supermarket. Short elevator answers stay this tight.",
      ],
      {
        examples: [
          ex("对，去公司。", "Yes — heading to the office."),
          ex("对，去上课。", "Yes — going to class."),
          ex("不是，去邮局。", "No — to the post office."),
        ],
      }
    ),
  ],
  "怎么不去大菜市？传统市场东西多，又新鲜又便宜。": [
    ml(
      "怎么不…？",
      "why not…?",
      [
        "怎么不 + verb is a suggestion dressed as a question: why don’t you…? Softer than 你应该去. 大菜市 here is the big wet market; 传统市场 is the general word.",
      ],
      {
        pattern: "怎么不 + V？",
        examples: [
          ex("怎么不坐下来？", "Why don’t you sit down?"),
          ex("这么热，怎么不开空调？", "It’s so hot — why not turn on the AC?"),
          ex("怎么不早说？", "Why didn’t you say so earlier?"),
        ],
      }
    ),
    ml(
      "又…又…",
      "both … and …",
      [
        "又 A 又 B stacks two good (or two bad) qualities: 又新鲜又便宜、又高又帅、又累又饿. The two sides should be the same type of comment.",
      ],
      {
        pattern: "又 + Adj + 又 + Adj",
        examples: [
          ex(
            "这件衣服又好看又便宜。",
            "This shirt is both nice-looking and cheap."
          ),
          ex("他又聪明又努力。", "He’s both smart and hardworking."),
          ex("今天又冷又下雨。", "It’s both cold and rainy today."),
        ],
      }
    ),
  ],
  "超市有定价我感觉比较安心。不过大菜市好像真的比较新鲜和便宜，下次去看看。": [
    ml(
      "定价 / 比较安心",
      "set prices / feel more at ease",
      [
        "定价 means the price is marked — no haggling. 安心 is “my mind is at rest.” 比较安心 = relatively more at ease than bargaining at a market. 感觉 makes it personal, not a rule.",
      ],
      {
        examples: [
          ex("有定价比较公平。", "Set prices feel fairer."),
          ex(
            "把门锁好我才安心。",
            "I only feel at ease once the door is locked."
          ),
          ex(
            "在超市买东西我比较安心。",
            "I feel more comfortable shopping at the supermarket."
          ),
        ],
        compare: [
          {
            label: "set price",
            hanzi: "定价",
            en: "marked price, no haggling",
          },
          { label: "bargain", hanzi: "讲价 / 杀价", en: "haggle" },
        ],
      }
    ),
    ml(
      "下次去看看",
      "I’ll try it next time",
      [
        "不过 grants the other person’s point. 好像真的比较… softens agreement. 去看看 = go and have a look — low commitment, very useful.",
      ],
      {
        examples: [
          ex("下次去看看那家店。", "I’ll check out that shop next time."),
          ex(
            "你先去看看，好再买。",
            "Go take a look first; buy it if it’s good."
          ),
          ex("好像真的比较便宜。", "It does seem cheaper, actually."),
        ],
      }
    ),
  ],
  "对了，春天百货在打折你知道吗？周年庆，还有很多限定的东西哦！": [
    ml(
      "对了",
      "by the way / that reminds me",
      [
        "对了 jumps to a new topic you just remembered. Extremely common in spoken Chinese. Then 你知道吗？ checks whether the news is already known.",
      ],
      {
        examples: [
          ex("对了，明天你有空吗？", "By the way, are you free tomorrow?"),
          ex(
            "对了，我把钥匙放桌上了。",
            "Oh right — I left the keys on the table."
          ),
          ex(
            "对了，你知道新店开了吗？",
            "By the way, did you know the new shop opened?"
          ),
        ],
      }
    ),
    ml(
      "打折 / 周年庆 / 限定",
      "on sale / anniversary event / limited",
      [
        "在打折 = currently on sale. 周年庆 is a department-store anniversary campaign — a Taiwan shopping season, not just a birthday. 限定 = limited edition / only-for-this-event items. 哦 at the end sells the excitement.",
      ],
      {
        examples: [
          ex("这双鞋在打折。", "These shoes are on sale."),
          ex(
            "百货公司周年庆人很多。",
            "Department-store anniversary sales are crowded."
          ),
          ex("这是今年的限定口味。", "This is this year’s limited flavor."),
        ],
      }
    ),
  ],
  "真的吗？每天忙着上班都不知道。": [
    ml(
      "忙着…都…",
      "so busy … that I didn’t even…",
      [
        "忙着 + verb = in the middle of being busy with that. 都 + 不知道 = I didn’t even know. The whole line is “work has me so busy I missed the news.”",
      ],
      {
        pattern: "忙着 + V，都 + result",
        examples: [
          ex(
            "我忙着写报告，都忘了吃饭。",
            "I was so busy writing the report I forgot to eat."
          ),
          ex(
            "她每天忙着带小孩，都没时间看电影。",
            "She’s so busy with the kids she has no time for movies."
          ),
          ex(
            "忙着搬家，电话都没接。",
            "Busy moving — I didn’t even pick up the phone."
          ),
        ],
      }
    ),
  ],
  "噢！我明天要去量贩店，要不要一起去？我们可以合买。": [
    ml(
      "量贩店",
      "warehouse store / hypermarket",
      [
        "量贩店 is a big-box store that sells in bulk (Costco-style). 噢！ is another noticing sound. 要不要一起去？ is the same soft invite as in lesson 1-4.",
      ],
      {
        examples: [
          ex(
            "量贩店的东西比较便宜，可是要买很多。",
            "Warehouse stores are cheaper, but you have to buy a lot."
          ),
          ex("要不要一起去超市？", "Want to go to the supermarket together?"),
          ex("我很少去量贩店。", "I rarely go to warehouse stores."),
        ],
      }
    ),
    ml(
      "合买",
      "buy together / split a bulk pack",
      [
        "合 + verb = do it jointly: 合买、合租、合开. Perfect for bulk sizes you cannot finish alone.",
      ],
      {
        pattern: "合 + V",
        examples: [
          ex("我们合买一箱牛奶吧。", "Let’s go in together on a case of milk."),
          ex("我们合买一箱卫生纸吧。", "Let’s split a bulk pack of toilet paper."),
          ex(
            "这张票我们可以合买。",
            "We can split this ticket / buy it together."
          ),
        ],
      }
    ),
  ],
  "太好了，我一直想去量贩店，可是只有我一个人，大包装吃不完用不完。": [
    ml(
      "V不完",
      "can’t finish (eating / using) it",
      [
        "Potential complement: verb + 不 + 完. 吃不完 = can’t eat it all; 用不完 = can’t use it all. The positive is 吃得完 / 用得完. 大包装 is the bulk pack that causes the problem. 一直想去 = I’ve been wanting to go all along.",
      ],
      {
        pattern: "V + 不完  /  V + 得完",
        examples: [
          ex("这么多菜我吃不完。", "I can’t finish this much food."),
          ex("这些洗发精我用不完。", "I can’t use up all this shampoo."),
          ex("这么少，你吃得完吗？", "This little — can you finish it?"),
        ],
        compare: [
          {
            label: "can’t finish",
            hanzi: "吃不完 / 用不完",
            en: "too much to eat / use up",
          },
          {
            label: "can finish",
            hanzi: "吃得完 / 用得完",
            en: "able to finish it",
          },
        ],
      }
    ),
  ],
  "那我们明天早上9点出发，在楼下门口等我。": [
    ml(
      "出发 / 楼下门口",
      "set off / downstairs entrance",
      [
        "出发 = set out (a planned departure). Time + 出发 is a meeting plan. 楼下门口 is the downstairs doorway of the building — a classic apartment meetup spot. 等我 = wait for me (there).",
      ],
      {
        examples: [
          ex("我们七点出发去机场。", "We leave for the airport at seven."),
          ex(
            "我在楼下门口等你。",
            "I’ll wait for you at the downstairs entrance."
          ),
          ex("别晚了，准时出发。", "Don’t be late — we leave on time."),
        ],
      }
    ),
  ],
  "好，谢谢王妈妈！王妈妈再见！": [
    ml(
      "谢谢…再见",
      "thanks + goodbye, with the title repeated",
      [
        "Repeating 王妈妈 is respectful and warm. 好 accepts the plan. Elevator goodbyes often stack 谢谢 and 再见 in one breath.",
      ],
      {
        examples: [
          ex("好，谢谢老师！老师再见！", "Okay, thanks teacher — goodbye!"),
          ex("王妈妈再见，明天见！", "Bye Auntie Wang — see you tomorrow!"),
          ex("谢谢你，再见。", "Thank you — goodbye."),
        ],
      }
    ),
  ],
}

export const LESSON_1_8_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "怎么不…",
    "Why not…? / How come you don’t…?",
    ["怎么不去大菜市？ is a real suggestion dressed as a question. 怎么不 + verb."],
    {
      pattern: "怎么不 + V",
      examples: [
        ex("怎么不去大菜市？", "Why not go to the wet market?"),
        ex("怎么不早说？", "Why didn’t you say so earlier?"),
        ex("怎么不一起去？", "Why not go together?"),
      ],
    },
  ),
  ml(
    "又 A 又 B",
    "Both A and B",
    ["又新鲜又便宜. Two good (or two bad) qualities stacked. 又累又饿, 又便宜又好吃。"],
    {
      pattern: "又 + Adj + 又 + Adj",
      examples: [
        ex("又新鲜又便宜。", "Fresh and cheap."),
        ex("又好吃又好看。", "Tasty and pretty."),
        ex("又忙又累。", "Busy and tired."),
      ],
    },
  ),
  ml(
    "对了",
    "By the way…",
    ["对了，春天百货在打折. 对了 jumps to a new topic you just remembered — not “that’s correct.”"],
    {
      pattern: "对了，+ new topic",
      examples: [
        ex("对了，你明天有空吗？", "By the way, are you free tomorrow?"),
        ex("对了，百货公司在打折。", "By the way, the department store is on sale."),
        ex("对了，我有件事忘了说。", "By the way, I forgot to mention something."),
      ],
    },
  ),
  ml(
    "V 不完",
    "Can’t finish (using / eating) it",
    ["大包装吃不完用不完. Potential complement: V + 不 + 完 = can’t get through it all."],
    {
      pattern: "V + 不完",
      examples: [
        ex("吃不完。", "I can’t finish eating it."),
        ex("用不完。", "I can’t use it all up."),
        ex("看不完。", "I can’t finish watching it."),
      ],
    },
  ),
  ml(
    "要不要一起…",
    "Want to go together?",
    ["要不要一起去？我们可以合买. Same invite pattern as 1-4, here for shopping and splitting bulk packs."],
    {
      pattern: "要不要一起 + V",
      examples: [
        ex("要不要一起去？", "Want to go together?"),
        ex("我们可以合买。", "We can split the bulk pack."),
        ex("要不要一起逛逛？", "Want to wander around together?"),
      ],
    },
  ),
]

