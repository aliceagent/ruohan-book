import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_1_7_CORE_VOCAB: VocabItem[] = [
  v("老师好", "hello, teacher"),
  v("派对", "party"),
  v("美食", "good food / cuisine"),
  v("喝酒", "to drink alcohol"),
  v("聊天", "to chat"),
  v("唱歌", "to sing"),
  v("跳舞", "to dance"),
  v("要不", "how about… / otherwise"),
  v("做菜", "to cook"),
  v("刈包", "gua bao (Taiwanese pork bun)"),
  v("珍珠奶茶", "bubble tea / boba"),
  v("炒米粉", "fried rice noodles"),
  v("贡丸汤", "pork-ball soup"),
  v("助手", "helper / assistant"),
]

export const LESSON_1_7_CHUNKS: VocabItem[] = [
  v("老师好！", "hello, teacher!"),
  v("有派对哦！", "there’s a party!"),
  v("台湾美食派对", "Taiwanese food party"),
  v("你喜欢派对吗？", "do you like parties?"),
  v("我不喝酒", "I don’t drink"),
  v("不太会跟别人聊天", "not great at chatting with people"),
  v("没关系", "that’s okay"),
  v("唱歌跳舞", "sing and dance"),
  v("唱歌跳舞都不行", "no good at singing or dancing"),
  v("听别人唱歌", "listen to others sing"),
  v("看别人跳舞", "watch others dance"),
  v("要不你帮忙做菜好了", "how about you help cook then"),
  v("都是我爱吃的", "those are all my favorites"),
  v("老师教我做", "teacher, show me how"),
  v("多一个助手", "an extra helper"),
]

export const LESSON_1_7_FAMILY: VocabItem[] = [
  v("有派对", "there’s a party"),
  v("喜欢派对", "like parties"),
  v("不太会聊天", "not great at chatting"),
  v("没关系", "that’s okay"),
  v("唱歌跳舞都不行", "no good at singing or dancing"),
  v("听别人唱", "listen to others sing"),
  v("看别人跳", "watch others dance"),
  v("帮忙做菜", "help cook"),
  v("教我做", "show me how"),
  v("没问题", "no problem"),
]

export const LESSON_1_7_PRACTICE: MiniLessonExample[] = [
  ex("我喜欢吃，可是我不喝酒，也不太会跟别人聊天。", "I like eating, but I don’t drink, and I’m not great at chatting with people."),
  ex("没关系，还可以唱歌跳舞。", "That’s okay. You can also sing and dance."),
  ex("我唱歌跳舞都不行。", "I’m no good at singing or dancing."),
  ex("我喜欢听别人唱歌、看别人跳舞。", "I like listening to others sing and watching them dance."),
  ex("要不你帮忙做菜好了！", "How about you help cook then!"),
  ex("刈包、珍珠奶茶都是我爱吃的。", "Gua bao and bubble tea are all my favorites."),
  ex("太好了！老师教我做！", "Perfect! Teacher, show me how!"),
  ex("没问题，我也很高兴多一个助手。", "No problem. I’m glad to have an extra helper."),
]

export const LESSON_1_7_FILL_BLANKS = [
  fb("1", "I’m not great at chatting with people.", "我不太会跟别人", "。", "聊天", ["唱歌", "跳舞", "做菜"]),
  fb("2", "I’m no good at singing or dancing.", "我唱歌跳舞都", "。", "不行", ["可以", "喜欢", "爱吃"]),
  fb("3", "I like listening to other people sing.", "我喜欢听别人", "。", "唱歌", ["聊天", "做菜", "喝酒"]),
  fb("4", "How about you help cook then?", "要不你帮忙做菜", "！", "好了", ["就好了", "才好了", "还好了"]),
  fb("5", "Teacher, show me how to make it.", "老师", "做！", "教我", ["帮我", "给我", "让我"]),
  fb("6", "That’s okay.", "", "，还可以唱歌跳舞。", "没关系", ["没问题", "不好意思", "怪不得"]),
  fb("7", "I don’t drink.", "我", "。", "不喝酒", ["不吃饭", "不睡觉", "不唱歌"]),
  fb("8", "I’m glad to have an extra helper.", "我也很高兴多一个", "！", "助手", ["老师", "派对", "爱好"]),
]

export const LESSON_1_7_LINE_NOTES: Record<string, MiniLesson[]> = {
  "老师好！": [
    ml(
      "老师好",
      "hello, teacher",
      [
        "Title + 好 is the default greeting to a teacher, doctor, or manager: 老师好、王老师好、经理好. Warmer and more respectful than a bare 你好.",
      ],
      {
        examples: [
          ex("王老师好！", "Hello, Teacher Wang!"),
          ex("医生好！", "Hello, doctor!"),
          ex("早上好，老师！", "Good morning, teacher!"),
        ],
        compare: [
          { label: "to a teacher", hanzi: "老师好", en: "hello, teacher" },
          { label: "to a peer", hanzi: "你好", en: "hello" },
        ],
      }
    ),
  ],
  "哦，杰克！有派对哦！": [
    ml(
      "语气助词「哦」",
      "the particle 哦",
      [
        "哦 at the start is “oh — I just noticed you.” 哦 at the end is a warm nudge: I’m telling you something you might like. It is friendly, not scolding. Taiwan speech uses it a lot.",
      ],
      {
        examples: [
          ex("有蛋糕哦！", "There’s cake, you know!"),
          ex("小心哦。", "Be careful, okay?"),
          ex("哦，是你啊！", "Oh — it’s you!"),
        ],
        compare: [
          {
            label: "warm news",
            hanzi: "有派对哦！",
            en: "there’s a party! (sharing)",
          },
          { label: "plain", hanzi: "有派对。", en: "there is a party" },
        ],
      }
    ),
  ],
  "派对？什么派对？": [
    ml(
      "回声问句",
      "echo question",
      [
        "Repeat the new word, then ask 什么 + noun？ You buy time and show interest. 派对 is a loanword; some people also say 聚会.",
      ],
      {
        examples: [
          ex("联谊？什么联谊？", "A mixer? What kind of mixer?"),
          ex("刈包？什么刈包？", "Gua bao? What’s that?"),
          ex("明天有考试？什么考试？", "There’s a test tomorrow? What test?"),
        ],
      }
    ),
  ],
  "台湾美食派对。你喜欢派对吗？": [
    ml(
      "美食派对",
      "food party",
      [
        "Noun + 派对 makes a themed party: 生日派对、化妆派对、台湾美食派对. 美食 is “good food / cuisine,” a little fancier than 好吃的东西.",
      ],
      {
        examples: [
          ex("这是一个生日派对。", "This is a birthday party."),
          ex("我喜欢台湾美食。", "I like Taiwanese food."),
          ex("你喜欢什么样的派对？", "What kind of party do you like?"),
        ],
      }
    ),
  ],
  "我喜欢吃！可是我不喝酒，也不太会跟别人聊天。": [
    ml(
      "不太会跟别人…",
      "not that good at … with other people",
      [
        "不太会 + verb = I’m not really skilled at it (ability), softer than 不会. 跟别人聊天 = chat with other people. 也 ties this to 不喝酒: I don’t drink, and I’m also not great at small talk.",
      ],
      {
        pattern: "不太会 + V",
        examples: [
          ex("我不太会唱歌。", "I’m not really good at singing."),
          ex(
            "他不太会跟陌生人说话。",
            "He’s not great at talking with strangers."
          ),
          ex("我不太会做饭。", "I’m not really good at cooking."),
        ],
        compare: [
          {
            label: "soft",
            hanzi: "不太会聊天",
            en: "not that good at chatting",
          },
          { label: "hard no", hanzi: "不会聊天", en: "can’t / don’t chat" },
        ],
      }
    ),
    ml(
      "不喝酒",
      "I don’t drink (alcohol)",
      [
        "喝酒 almost always means alcohol, not water. 我不喝酒 is a complete, polite refusal at parties. Pair with 干杯、喝醉 in the stretch vocab.",
      ],
      {
        examples: [
          ex("谢谢，我不喝酒。", "Thanks — I don’t drink."),
          ex("他喝了一点红酒。", "He had a little red wine."),
          ex("你喝酒吗？", "Do you drink?"),
        ],
      }
    ),
  ],
  "没关系，还可以唱歌跳舞。": [
    ml(
      "没关系，还可以…",
      "that’s okay — you can still…",
      [
        "没关系 answers the worry. 还可以 = there are still other options. 唱歌跳舞 stacked without 和 is spoken and rhythmic.",
      ],
      {
        examples: [
          ex(
            "不会做饭没关系，还可以帮忙洗碗。",
            "It’s okay if you can’t cook — you can still help with dishes."
          ),
          ex(
            "下雨了还可以在家看电影。",
            "If it rains we can still watch a movie at home."
          ),
          ex("不会也没关系。", "It’s okay if you can’t."),
        ],
      }
    ),
  ],
  "我唱歌跳舞都不行，不过我喜欢听别人唱歌、看别人跳舞。": [
    ml(
      "都不行 / 都行",
      "neither works / both are fine",
      [
        "A 和 B 都不行 = I’m no good at either. The positive twin is 都行 (either is fine). 不过 turns the sentence toward what he can enjoy instead.",
      ],
      {
        pattern: "A、B 都不行",
        examples: [
          ex("中文、日文我都不会。", "I can’t do Chinese or Japanese."),
          ex("咖啡、茶都行。", "Coffee or tea — either is fine."),
          ex("这两个时间我都不行。", "Neither of those times works for me."),
        ],
        compare: [
          {
            label: "neither",
            hanzi: "都不行",
            en: "neither is okay / I can’t do either",
          },
          { label: "either", hanzi: "都行", en: "either is fine" },
        ],
      }
    ),
    ml(
      "听别人…，看别人…",
      "listen to others…, watch others…",
      [
        "听 / 看 + 别人 + verb: enjoy someone else’s performance. A polite way to join without being on stage.",
      ],
      {
        pattern: "听 / 看 + 别人 + V",
        examples: [
          ex("我喜欢听别人唱歌。", "I like listening to other people sing."),
          ex("他喜欢看别人打球。", "He likes watching other people play ball."),
          ex(
            "我不做饭，可是喜欢看别人做。",
            "I don’t cook, but I like watching others cook."
          ),
        ],
      }
    ),
  ],
  "也可以啊。要不你帮忙做菜好了！我们要做刈包、珍珠奶茶、炒米粉和贡丸汤。": [
    ml(
      "要不…好了",
      "how about you just… then",
      [
        "要不 introduces a new plan. …好了 decides on the spot — “let’s just go with that.” Together they assign a role without sounding bossy. 也可以啊 accepts the previous idea first.",
      ],
      {
        pattern: "要不 + suggestion + 好了",
        examples: [
          ex("要不我们走路去好了。", "How about we just walk there."),
          ex("要不你先走好了。", "How about you go ahead then."),
          ex("也可以啊，你决定。", "That works too — you decide."),
        ],
      }
    ),
    ml(
      "刈包、珍珠奶茶、炒米粉、贡丸汤",
      "four Taiwanese party foods",
      [
        "刈包 (gua bao): a folded bun with pork. 珍珠奶茶: bubble tea. 炒米粉: fried rice noodles. 贡丸汤: pork-ball soup. Learn them as a set — they are the menu of this party.",
      ],
      {
        examples: [
          ex("我想喝珍珠奶茶。", "I want bubble tea."),
          ex(
            "刈包是台湾很有名的小吃。",
            "Gua bao is a famous Taiwanese snack."
          ),
          ex("冬天喝贡丸汤很舒服。", "Pork-ball soup is comforting in winter."),
        ],
      }
    ),
  ],
  "太好了！都是我爱吃的！老师教我做！": [
    ml(
      "都是我爱吃的",
      "those are all my favorites",
      [
        "太好了 is a happy yes. 都是我爱吃的 = they are all things I love to eat. 的 stands for 东西 / 菜. 爱吃 is warmer than 喜欢吃.",
      ],
      {
        examples: [
          ex("这些都是我爱吃的。", "These are all my favorites."),
          ex("火锅我最爱吃。", "Hotpot is what I love most."),
          ex("太好了，我正好有空。", "Perfect — I’m free anyway."),
        ],
      }
    ),
    ml(
      "老师教我做",
      "teacher, show me how to make it",
      [
        "教 + person + verb: teach someone to do something. Dropping 你 after 老师 is natural when speaking to the teacher. A full version is 老师教我做这些菜.",
      ],
      {
        pattern: "教 + person + V",
        examples: [
          ex("你教我做菜吧。", "Teach me how to cook."),
          ex("谁教你开车的？", "Who taught you to drive?"),
          ex(
            "老师教我们写汉字。",
            "The teacher teaches us to write characters."
          ),
        ],
      }
    ),
  ],
  "没问题，我也很高兴多一个助手！": [
    ml(
      "助手",
      "helper / assistant",
      [
        "助手 is someone who helps you get a job done — here, a kitchen helper. 多一个 = one extra. 我也很高兴… mirrors Jack’s excitement.",
      ],
      {
        examples: [
          ex("我需要一个助手。", "I need an assistant."),
          ex("欢迎多一个帮手。", "Glad to have an extra pair of hands."),
          ex("没有助手我做不完。", "I can’t finish without a helper."),
        ],
      }
    ),
  ],
}

export const LESSON_1_7_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "不太会跟别人…",
    "Not very good at … with other people",
    ["不太会跟别人聊天. 不太会 = not really able / not great at. 跟别人 + verb."],
    {
      pattern: "不太会跟别人 + V",
      examples: [
        ex("我不太会跟别人聊天。", "I’m not great at chatting with people."),
        ex("他不太会跟陌生人说话。", "He’s not great at talking to strangers."),
        ex("我不太会唱歌。", "I’m not great at singing."),
      ],
    },
  ),
  ml(
    "V + 都不行",
    "No good at either…",
    ["我唱歌跳舞都不行. A 都 B 不行 / A、B 都不行 = bad at both."],
    {
      pattern: "A B 都不行",
      examples: [
        ex("我唱歌跳舞都不行。", "I’m no good at singing or dancing."),
        ex("游泳跑步我都不行。", "I’m no good at swimming or running."),
        ex("这个我真的不行。", "I really can’t do this."),
      ],
    },
  ),
  ml(
    "听别人… / 看别人…",
    "Listen to others … / watch others …",
    ["我喜欢听别人唱歌、看别人跳舞. 听 / 看 + 别人 + V: enjoy it as an audience, not a performer."],
    {
      pattern: "听 / 看 + 别人 + V",
      examples: [
        ex("我喜欢听别人唱歌。", "I like listening to other people sing."),
        ex("我喜欢看别人跳舞。", "I like watching other people dance."),
        ex("他爱看别人做饭。", "He loves watching other people cook."),
      ],
    },
  ),
  ml(
    "要不…好了",
    "How about you just… then",
    ["要不你帮忙做菜好了. 要不 introduces a new plan; 好了 decides on the spot."],
    {
      pattern: "要不 + V + 好了",
      examples: [
        ex("要不你帮忙做菜好了。", "How about you help cook then."),
        ex("要不明天再看好了。", "Let’s just look tomorrow then."),
        ex("要不我先回去好了。", "I’ll just head back then."),
      ],
    },
  ),
  ml(
    "教我 + verb",
    "Show me how to…",
    ["老师教我做！ 教 + person + verb. Very useful at a food party: 教我做刈包。"],
    {
      pattern: "教 + person + V",
      examples: [
        ex("老师教我做。", "Teacher, show me how."),
        ex("你教我唱歌吧。", "Teach me to sing."),
        ex("谁教你做刈包的？", "Who taught you to make gua bao?"),
      ],
    },
  ),
]

