import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_5_CORE_VOCAB: VocabItem[] = [
  v("便当〔盒饭〕", "bento; boxed lunch"),
  v("带", "to bring"),
  v("卤", "to braise (in soy sauce / spices)"),
  v("红烧肉", "red-cooked / braised pork belly"),
  v("好好吃", "so delicious"),
  v("配色", "to color-coordinate; color matching"),
  v("五色", "five colors"),
  v("难得", "rarely; it’s rare that"),
  v("卡通图案", "cartoon design / character pattern"),
  v("夸张", "over the top; exaggerated"),
  v("专职", "full-time (occupation)"),
  v("家庭主妇", "homemaker; housewife"),
  v("营养午餐", "school lunch (nutritious lunch)"),
  v("受不了", "can’t stand"),
  v("无法理解", "can’t understand"),
  v("营养不良", "malnutrition; poorly nourished"),
  v("补充", "to supplement; to make up"),
  v("钙质", "calcium"),
  v("罹患", "to suffer from (illness)"),
  v("骨质疏松症", "osteoporosis"),
  v("比例", "rate; proportion"),
  v("反而", "on the contrary; actually"),
  v("豆浆", "soy milk"),
]

export const LESSON_2_5_CHUNKS: VocabItem[] = [
  v("吃饭了", "time to eat"),
  v("你今天带便当啊？", "you brought a bento today?"),
  v("卤了一锅红烧肉", "braised a pot of red-cooked pork"),
  v("看起来好好吃哦", "it looks so good"),
  v("你还配色", "you even color-coordinated it"),
  v("像日本的五色便当一样", "just like a Japanese five-color bento"),
  v("难得做便当啦", "I rarely make a bento"),
  v("我可没时间每天这样搞", "I don’t have time to do this every day"),
  v("卡通图案便当", "cartoon-character bento"),
  v("那要花多久时间做啊", "how long would that take to make?"),
  v("好夸张", "so extra / over the top"),
  v("专职家庭主妇才有办法吧", "only a full-time homemaker could pull that off"),
  v("有营养午餐就好了", "if only there were school lunch"),
  v("我比较喜欢我妈做的便当", "I prefer the bento my mom made"),
  v("我受不了营养午餐配牛奶", "I can’t stand school lunch with milk"),
  v("无法理解为什么吃饭要配牛奶", "can’t understand why a meal comes with milk"),
  v("要补充钙质", "need to supplement calcium"),
  v("比例反而较高", "the rate is actually higher"),
  v("还好我现在都喝豆浆", "good thing I drink soy milk now"),
]

export const LESSON_2_5_FAMILY: VocabItem[] = [
  v("便当〔盒饭〕", "bento / boxed lunch"),
  v("营养午餐", "school lunch"),
  v("带便当", "bring a bento"),
  v("做便当", "make a bento"),
  v("五色便当", "five-color bento"),
  v("卡通图案便当", "cartoon-character bento"),
  v("红烧肉", "braised pork"),
  v("配牛奶", "paired with milk"),
  v("豆浆", "soy milk"),
  v("营养不良", "malnutrition"),
]

export const LESSON_2_5_PRACTICE: MiniLessonExample[] = [
  ex("吃饭了，你今天带便当啊？", "Time to eat — you brought a bento today?"),
  ex("嗯，昨天卤了一锅红烧肉。", "Yeah, I braised a pot of red-cooked pork yesterday."),
  ex("看起来好好吃哦！你还配色！", "It looks so good! You even color-coordinated it!"),
  ex("难得做便当啦，我可没时间每天这样搞。", "I rarely make a bento. I don’t have time to do this every day."),
  ex("卡通图案便当要花好久，好夸张！", "Cartoon bentos take forever — so extra!"),
  ex("公司像小学一样有营养午餐就好了。", "If only companies had school lunch like elementary school."),
  ex("我受不了营养午餐配牛奶。", "I can’t stand school lunch paired with milk."),
  ex("还好我现在都喝豆浆。", "Good thing I drink soy milk now."),
]

export const LESSON_2_5_FILL_BLANKS = [
  fb("1", "You brought a bento today?", "你今天", "便当啊？", "带", ["做", "买", "吃"]),
  fb("2", "I braised a pot of red-cooked pork.", "昨天卤了一锅", "。", "红烧肉", ["营养午餐", "豆浆", "钙质"]),
  fb("3", "It looks so delicious.", "看起来", "哦！", "好好吃", ["好吃好", "不好吃", "吃得好"]),
  fb("4", "I rarely make a bento.", "", "做便当啦。", "难得", ["经常", "总是", "已经"]),
  fb("5", "I don’t have time to do this every day.", "我", "时间每天这样搞。", "可没", ["可有", "没有不", "才没"]),
  fb("6", "If only the company had school lunch.", "公司有营养午餐", "。", "就好了", ["才好了", "只好了", "还好了"]),
  fb("7", "I can’t stand school lunch with milk.", "我", "营养午餐配牛奶。", "受不了", ["受得了", "看不到", "听不懂"]),
  fb("8", "The osteoporosis rate is actually higher.", "罹患骨质疏松症的比例", "较高。", "反而", ["当然", "一直", "顺便"]),
]

export const LESSON_2_5_LINE_NOTES: Record<string, MiniLesson[]> = {
  "吃饭了，你今天带便当〔盒饭〕啊？": [
    ml("吃饭了", "time to eat", ["吃饭了 is a lunchtime call, not ‘have you eaten?’ as a greeting. 了 = it’s that time now."], {
      examples: [ex("吃饭了！过来吧。", "Food’s ready — come over.")],
    }),
    ml("带便当啊？", "you brought a bento, huh?", ["带 + packed food. 啊？ turns a notice into a warm check: I see you brought lunch."], {
      pattern: "带 + noun + 啊？",
      examples: [ex("你带伞啊？", "You brought an umbrella?"), ex("今天带便当啊？", "You brought a bento today?")],
    }),
    ml("便当〔盒饭〕", "bento / boxed lunch", ["Dialogue uses 便当 (Taiwan / Japanese). Textbook notes 〔盒饭〕 — the Mainland name. Same lunchbox."], {
      compare: [
        { label: "Taiwan / this course", hanzi: "便当", en: "bento" },
        { label: "textbook 〔〕 note", hanzi: "盒饭", en: "boxed lunch (Mainland)" },
      ],
    }),
  ],
  "嗯，昨天卤了一锅红烧肉。": [
    ml("卤", "to braise", ["卤 is slow-cooking in soy sauce and spices. 卤蛋、卤味. Yesterday’s pot becomes today’s lunch."], {
      examples: [ex("她卤了一锅牛肉。", "She braised a pot of beef.")],
    }),
    ml("一锅 + dish", "a whole pot of…", ["锅 is the pot as a measure. 一锅红烧肉 = a whole pot, enough to pack for days."], {
      examples: [ex("煮了一锅汤。", "I made a pot of soup.")],
    }),
    ml("红烧肉", "red-cooked pork", ["Classic home dish: pork belly in soy, sugar, and spice until glossy red-brown. Packed in a 便当 it looks rich."]),
  ],
  "看起来好好吃哦！你还配色！像日本的五色便当〔盒饭〕一样！": [
    ml("好好吃", "so delicious", ["好好 + adj is warm emphasis: 好好吃、好好看、好好玩. More gushy than 很好吃."], {
      pattern: "好好 + adj",
      examples: [ex("看起来好好吃。", "It looks so good."), ex("这部好好看。", "This one’s so good.")],
    }),
    ml("配色", "color-coordinate", ["还 = you even… 配色 is matching colors on purpose — greens, reds, yellows in the box, not just leftover meat."], {
      examples: [ex("这便当配色很漂亮。", "This bento’s colors are pretty.")],
    }),
    ml("五色便当", "five-color bento", ["Japanese-style box aiming at five colors (white, black/brown, yellow, red, green) for balance. 像……一样 compares the look."], {
      examples: [ex("像日本的便当一样精致。", "As refined as a Japanese bento.")],
    }),
  ],
  "难得做便当〔盒饭〕啦，我可没时间每天这样搞。": [
    ml("难得…啦", "I rarely… / this is a rare treat", ["难得 + V + 啦 = I don’t usually do this, so don’t expect it daily. Soft excuse, a little proud."], {
      pattern: "难得 + V + 啦",
      examples: [ex("难得做一次便当啦。", "I rarely make a bento."), ex("难得出来吃饭啦。", "We rarely go out to eat.")],
    }),
    ml("我可没…", "I certainly don’t have…", ["可 stresses the denial: don’t get the wrong idea. 我可没时间 = I really don’t have that kind of time."], {
      pattern: "我可没 + noun / VP",
      examples: [ex("我可没那么闲。", "I’m not that free."), ex("我可没说过这话。", "I never said that.")],
    }),
    ml("这样搞", "do all this / go to this trouble", ["搞 is casual ‘do / handle’. 每天这样搞 = go through this production every day."]),
  ],
  "我在网上看过卡通图案便当〔盒饭〕，每次都想那要花多久时间做啊，好夸张！": [
    ml("卡通图案便当", "cartoon-character bento", ["图案 = design / picture. Cute rice art kids take to school. 在网上看过 = I’ve seen them online."], {
      examples: [ex("她会做卡通便当。", "She can make character bentos.")],
    }),
    ml("花多久时间", "how long does it take", ["花 + time + 做. 那要…啊 is a wondering aside: that must take forever."], {
      pattern: "花 + duration + (时间) + V",
      examples: [ex("那要花多久？", "How long would that take?"), ex("花了两小时做便当。", "It took two hours to make the bento.")],
    }),
    ml("好夸张", "so extra / over the top", ["夸张 is ‘exaggerated’. As a reaction: that’s a bit much. 好 + adj, same family as 好好吃."], {
      examples: [ex("每天做那个，好夸张。", "Doing that every day is so extra.")],
    }),
  ],
  "专职家庭主妇才有办法吧。公司像小学一样有营养午餐就好了。": [
    ml("专职家庭主妇", "full-time homemaker", ["专职 = that’s the job. 才有办法 = only then could you pull it off. 吧 softens: ‘a full-time homemaker, I guess.’"], {
      examples: [ex("专职才有时间吧。", "Only a full-time person would have the time, I guess.")],
    }),
    ml("营养午餐", "school lunch", ["Taiwan elementary 营养午餐 is the set cafeteria meal. Here: if only the office worked like school."]),
    ml("…就好了", "if only… / that’d be great", ["Wish for a simpler world. 有营养午餐就好了 = I wish there were a set lunch."], {
      pattern: "clause + 就好了",
      examples: [ex("有人做饭就好了。", "If only someone cooked."), ex("能再睡一会就好了。", "If only I could sleep a bit more.")],
    }),
  ],
  "你喜欢小学的营养午餐？我比较喜欢我妈做的便当〔盒饭〕。我受不了营养午餐配牛奶，无法理解为什么吃饭要配牛奶。": [
    ml("比较喜欢", "prefer", ["比较喜欢 A = I like A more (than the thing you just praised). Soft disagreement."], {
      examples: [ex("我比较喜欢自己做。", "I prefer making it myself.")],
    }),
    ml("受不了", "can’t stand", ["受不了 + situation. Potential complement: 受 + 不了. Opposite: 受得了."], {
      pattern: "受不了 + noun / VP",
      examples: [ex("我受不了这么吵。", "I can’t stand this noise."), ex("热我受不了。", "I can’t stand the heat.")],
    }),
    ml("无法理解", "can’t understand", ["Stronger than 不理解: I truly cannot see the logic. 为什么吃饭要配牛奶 = why a meal has to come with milk."], {
      examples: [ex("我无法理解他为什么生气。", "I can’t understand why he’s angry.")],
    }),
    ml("配 + drink / side", "paired with…", ["配牛奶 = served alongside milk. 配色 was colors; 配 here is food pairing."], {
      compare: [
        { label: "colors", hanzi: "便当配色很漂亮", en: "the bento’s colors look pretty" },
        { label: "food pairing", hanzi: "配牛奶", en: "served with milk" },
      ],
    }),
  ],
  "大概是怕我们营养不良，要补充钙质吧。": [
    ml("大概是…吧", "probably…, I guess", ["Guessing the school’s reason. 怕我们… = they were afraid we’d… 吧 keeps it tentative."], {
      examples: [ex("大概是忘了吧。", "They probably forgot.")],
    }),
    ml("营养不良", "malnutrition / poorly nourished", ["营养 + 不良. School-health wording: not getting enough from meals alone."]),
    ml("补充钙质", "supplement calcium", ["补充 + nutrient. 钙质 is calcium as a dietary topic. Milk is the usual fix they have in mind."], {
      examples: [ex("冬天要补充维生素D。", "In winter you need extra vitamin D.")],
    }),
  ],
  "听说牛奶喝得最多的国家，罹患骨质疏松症的比例反而较高呢！": [
    ml("听说", "I heard…", ["听说 + claim. Sets up a counter-fact, not something the speaker witnessed."], {
      examples: [ex("听说他搬家了。", "I heard he moved.")],
    }),
    ml("罹患骨质疏松症", "suffer from osteoporosis", ["罹患 is formal ‘contract / suffer from’. 骨质疏松症 is the medical name. Keeps the ‘I read this’ tone."]),
    ml("反而", "on the contrary / actually", ["反而 flags the opposite of what you’d expect: drink the most milk → higher osteoporosis rates."], {
      pattern: "expected，反而 + unexpected",
      examples: [ex("越休息反而越累。", "The more I rest, the more tired I get."), ex("便宜的反而比较好吃。", "The cheap one actually tastes better.")],
    }),
    ml("比例较高", "the rate is higher", ["比例 = rate / proportion. 较 is a bit written: 较高 = relatively high. 呢！ pushes the surprise."]),
  ],
  "还好我现在都喝豆浆。": [
    ml("还好", "good thing / luckily", ["还好 + current habit. Relief after the scary statistic: at least I drink soy milk now."], {
      examples: [ex("还好我带了伞。", "Good thing I brought an umbrella."), ex("还好你提醒我。", "Good thing you reminded me.")],
    }),
    ml("豆浆", "soy milk", ["Plant milk, everyday in Taiwan breakfast shops. 都喝 = that’s what I drink (as a rule now)."], {
      compare: [
        { label: "dairy", hanzi: "牛奶", en: "cow’s milk" },
        { label: "soy", hanzi: "豆浆", en: "soy milk" },
      ],
    }),
  ],
}

export const LESSON_2_5_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("带便当啊？", "You brought a bento, huh?", ["带 + packed food. 啊？ is a warm notice, not a real information question — you can already see the box."], {
    pattern: "带 + noun + 啊？",
    examples: [
      ex("你今天带便当啊？", "You brought a bento today?"),
      ex("你带伞啊？", "You brought an umbrella?"),
      ex("他又带咖啡啊？", "He brought coffee again?"),
    ],
  }),
  ml("好好吃", "So delicious", ["好好 + adj gushes more than 很. 好好吃、好好看、好好玩. 看起来好好吃哦 is about the look, not a bite yet."], {
    pattern: "好好 + adj",
    examples: [
      ex("看起来好好吃哦！", "It looks so good!"),
      ex("这件好好看。", "This one’s so pretty."),
      ex("昨天玩得好好玩。", "Yesterday was so fun."),
    ],
  }),
  ml("难得…啦", "I rarely…", ["难得 + V + 啦: this is a rare treat, don’t expect it every day. Softens pride and excuse at once."], {
    pattern: "难得 + V + 啦",
    examples: [
      ex("难得做便当啦。", "I rarely make a bento."),
      ex("难得见一次面啦。", "We rarely get to meet."),
      ex("难得放假啦，睡晚一点。", "A rare day off — sleep in a bit."),
    ],
  }),
  ml("我可没…", "I certainly don’t…", ["可 puts a firm line under the denial. 我可没时间每天这样搞 = don’t picture me doing this as a habit."], {
    pattern: "我可没 + noun / VP",
    examples: [
      ex("我可没时间每天这样搞。", "I don’t have time to do this every day."),
      ex("我可没那么多钱。", "I don’t have that kind of money."),
      ex("我可没说过要去。", "I never said I’d go."),
    ],
  }),
  ml("反而", "On the contrary", ["反而 introduces the opposite of the expected result. Here: countries that drink the most milk have higher osteoporosis rates."], {
    pattern: "situation，反而 + unexpected result",
    examples: [
      ex("牛奶喝得最多的国家，比例反而较高。", "The countries that drink the most milk actually have higher rates."),
      ex("越帮忙他反而越生气。", "The more I help, the angrier he gets."),
      ex("便宜的反而比较好吃。", "The cheap one actually tastes better."),
    ],
  }),
]
