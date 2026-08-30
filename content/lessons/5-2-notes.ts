import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_5_2_CORE_VOCAB: VocabItem[] = [
  v("外送", "delivery"),
  v("披萨", "pizza"),
  v("买二送一", "buy two, get one free"),
  v("凤梨〔菠萝〕", "pineapple"),
  v("夏威夷", "Hawaiian (pizza)"),
  v("热带风情", "tropical vibe"),
  v("珍珠奶茶披萨", "bubble-tea pizza"),
  v("受不了", "can’t stand it"),
  v("当地特色", "local specialty"),
  v("食物犯罪", "a food crime"),
  v("文化挪用", "cultural appropriation"),
  v("神经质", "neurotic; overly sensitive"),
  v("合格", "up to standard"),
  v("意大利面", "pasta"),
  v("便当〔盒饭〕", "bento / boxed lunch"),
]

export const LESSON_5_2_CHUNKS: VocabItem[] = [
  v("我们一起叫外送吧", "let’s order delivery together"),
  v("这家披萨怎么样", "how about this pizza place"),
  v("买二送一呢", "it’s buy-two-get-one-free"),
  v("居然有凤梨〔菠萝〕披萨", "there’s actually pineapple pizza"),
  v("很有热带风情吧", "very tropical, right"),
  v("这怎么能叫“披萨”", "how can this be called pizza"),
  v("料不同而已", "just different toppings"),
  v("这是食物犯罪", "this is a food crime"),
  v("外国所谓的中国料理没几家合格的", "hardly any so-called Chinese places abroad are authentic"),
  v("我们叫便当〔盒饭〕好了", "let’s just order boxed lunches"),
]

export const LESSON_5_2_FAMILY: VocabItem[] = [
  v("披萨", "pizza"),
  v("薄皮", "thin crust"),
  v("厚皮", "thick crust"),
  v("口味", "flavor; topping"),
  v("馅料", "filling; topping"),
  v("叫外送", "to order delivery"),
  v("创意", "creative; creativity"),
  v("正宗", "authentic"),
]

export const LESSON_5_2_PRACTICE: MiniLessonExample[] = [
  ex("午餐吃什么？我们一起叫外送吧？", "What for lunch? Shall we order delivery together?"),
  ex("好啊，这家披萨怎么样？买二送一呢！", "Sure — how about this pizza place? It’s buy two, get one free!"),
  ex("天啊，网上说的是真的，居然有凤梨〔菠萝〕披萨！", "Oh my god — what they say online is true. There’s actually pineapple pizza!"),
  ex("叫“夏威夷”，很有热带风情吧！", "It’s called Hawaiian — very tropical, right?"),
  ex("我受不了，这怎么能叫“披萨”？这不是披萨！", "I can’t stand it. How can this be called pizza? This is not pizza!"),
  ex("看起来像披萨啊，料不同而已，这是当地特色。", "It looks like pizza — just different toppings. It’s a local specialty."),
  ex("这是食物犯罪！Cultural Appropriation，“文化挪用”？", "This is a food crime! Cultural appropriation?"),
  ex("算了，我们叫便当〔盒饭〕好了。", "Forget it. Let’s just order boxed lunches."),
]

export const LESSON_5_2_FILL_BLANKS = [
  fb("1", "Shall we order delivery together?", "我们一起叫", "吧？", "外送", ["外卖单", "外快", "外交"]),
  fb("2", "It’s buy two, get one free.", "这家披萨怎么样？", "呢！", "买二送一", ["买一送一", "买三送三", "免费试吃"]),
  fb("3", "There’s actually pineapple pizza!", "居然有", "披萨！", "凤梨〔菠萝〕", ["香菜", "臭豆腐", "鸡排"]),
  fb("4", "I can’t stand it.", "我", "，这怎么能叫“披萨”？", "受不了", ["忘不了", "吃不了", "走不了"]),
  fb("5", "Just different toppings.", "看起来像披萨啊，", "而已。", "料不同", ["皮不同", "店不同", "人不同"]),
  fb("6", "This is a food crime!", "这是", "！", "食物犯罪", ["文化考试", "交通违规", "食物中毒"]),
  fb("7", "You guys are too sensitive.", "你们太", "了。", "神经质", ["神经痛", "神经病", "神经刀"]),
  fb("8", "Let’s just order boxed lunches.", "我们叫", "好了。", "便当〔盒饭〕", ["披萨", "火锅", "自助餐"]),
]

export const LESSON_5_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "午餐吃什么？我们一起叫外送吧？": [
    ml("午餐吃什么", "what for lunch", ["Open with the meal, then the plan."]),
    ml("叫外送", "order delivery", ["叫 + 外送 is Taiwan. Mainland often 点外卖."], {
      pattern: "叫外送 / 点外卖",
      examples: [ex("我们一起叫外送吧？", "Shall we order delivery together?")],
    }),
  ],
  "好啊，这家披萨怎么样？买二送一呢！": [
    ml("这家 + N 怎么样", "how about this…", ["Picks a shop, then the deal."]),
    ml("买二送一", "buy two, get one free", ["呢 sells the offer. A classic promo chunk."], {
      examples: [ex("买二送一呢！", "It’s buy two, get one free!")],
    }),
  ],
  "好，我看。天啊，网上说的是真的，居然有凤梨〔菠萝〕披萨！": [
    ml("网上说的是真的", "what they say online is true", ["Confirms a rumor. Then 居然 drops the shock."]),
    ml("居然有 + N", "there’s actually…", ["居然 = I didn’t think this was real. 凤梨〔菠萝〕 is the Taiwan / Mainland pair."], {
      pattern: "居然有 + N",
      examples: [ex("居然有凤梨〔菠萝〕披萨！", "There’s actually pineapple pizza!")],
    }),
  ],
  "叫“夏威夷”，很有热带风情吧！还有其他台湾特色披萨哦，这个，珍珠奶茶披萨……": [
    ml("叫“夏威夷”", "it’s called Hawaiian", ["Names the flavor, then jokes 热带风情."]),
    ml("台湾特色披萨", "Taiwan-specialty pizza", ["珍珠奶茶披萨 is the one-up. 哦 + 这个 points at the menu."], {
      examples: [ex("还有其他台湾特色披萨哦。", "There are other Taiwan-specialty pizzas too.")],
    }),
  ],
  "我受不了，这怎么能叫“披萨”？这不是披萨！": [
    ml("我受不了", "I can’t stand it", ["A hard no. Then the identity fight: 怎么能叫 / 这不是."], {
      examples: [ex("这怎么能叫“披萨”？", "How can this be called pizza?")],
    }),
    ml("这不是 + N", "this is not…", ["Defines the real thing by refusing the name."]),
  ],
  "看起来像披萨啊，料不同而已，这是当地特色，很正常吧？": [
    ml("看起来像 + N", "it looks like…", ["Defends the shape. 料不同而已 = only the toppings changed."], {
      pattern: "看起来像 + N，……而已",
      examples: [ex("看起来像披萨啊，料不同而已。", "It looks like pizza — just different toppings.")],
    }),
    ml("当地特色", "local specialty", ["Turns the ‘crime’ into culture. 很正常吧？ seeks agreement."]),
  ],
  "这是食物犯罪！Cultural Appropriation，“文化挪用”？": [
    ml("食物犯罪", "a food crime", ["A joke charge, then the English term and its Chinese gloss."]),
    ml("文化挪用", "cultural appropriation", ["The book keeps the English first. ？ makes it a challenge, not a lecture."], {
      examples: [ex("这是食物犯罪！", "This is a food crime!")],
    }),
  ],
  "你们太神经质了，这么严格的话，要我说外国所谓的中国料理没几家合格的。": [
    ml("太神经质了", "too neurotic / oversensitive", ["Pushes back on purity tests."]),
    ml("所谓的 + N", "so-called…", ["外国所谓的中国料理 = ‘Chinese food’ abroad. 没几家合格的 flips the authenticity fight."], {
      pattern: "所谓的 + N",
      examples: [ex("外国所谓的中国料理没几家合格的。", "Hardly any so-called Chinese places abroad are authentic.")],
    }),
  ],
  "还有你们煮的意大利面也不及格！": [
    ml("也不及格", "doesn’t pass either", ["Returns fire: your pasta is also a fail."], {
      examples: [ex("你们煮的意大利面也不及格！", "The pasta you cook doesn’t pass either!")],
    }),
  ],
  "算了，我们叫便当〔盒饭〕好了。": [
    ml("算了", "forget it", ["Ends the fight. Then a safer order."]),
    ml("叫 N 好了", "let’s just order N", ["好了 = decision made. 便当〔盒饭〕 is the Taiwan / Mainland pair."], {
      pattern: "算了，……好了",
      examples: [ex("算了，我们叫便当〔盒饭〕好了。", "Forget it. Let’s just order boxed lunches.")],
    }),
  ],
}

export const LESSON_5_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("叫外送", "Order delivery", ["Taiwan 叫外送 ≈ Mainland 点外卖. Add 吧 for a joint plan."], {
    pattern: "叫外送 / 点外卖",
    examples: [
      ex("我们一起叫外送吧？", "Shall we order delivery together?"),
      ex("我叫了披萨外送。", "I ordered pizza delivery."),
      ex("别叫外送了，自己煮。", "Don’t order delivery — cook."),
    ],
  }),
  ml("居然有 + N", "There’s actually…", ["Shock at a menu item you thought was a rumor."], {
    pattern: "居然有 + N",
    examples: [
      ex("居然有凤梨〔菠萝〕披萨！", "There’s actually pineapple pizza!"),
      ex("居然有珍珠奶茶披萨。", "There’s actually bubble-tea pizza."),
      ex("居然有买二送一。", "There’s actually a buy-two-get-one deal."),
    ],
  }),
  ml("这怎么能叫 + N", "How can this be called…", ["Identity fight. Follow with 这不是 + N."], {
    pattern: "这怎么能叫 + N？这不是 + N！",
    examples: [
      ex("这怎么能叫“披萨”？这不是披萨！", "How can this be called pizza? This is not pizza!"),
      ex("这怎么能叫茶？这不是茶！", "How can this be called tea? This is not tea!"),
      ex("这怎么能叫意大利面？", "How can this be called pasta?"),
    ],
  }),
  ml("所谓的 + N", "So-called…", ["Puts quotes around someone else’s label. Often a counterattack."], {
    pattern: "所谓的 + N",
    examples: [
      ex("外国所谓的中国料理没几家合格的。", "Hardly any so-called Chinese places abroad are authentic."),
      ex("所谓的健康餐也不一定健康。", "So-called healthy meals aren’t always healthy."),
      ex("所谓的正宗很难定义。", "So-called authentic is hard to define."),
    ],
  }),
  ml("算了，……好了", "Forget it — let’s just…", ["Ends an argument with a fallback plan."], {
    pattern: "算了，……好了",
    examples: [
      ex("算了，我们叫便当〔盒饭〕好了。", "Forget it. Let’s just order boxed lunches."),
      ex("算了，我们吃面好了。", "Forget it. Let’s just eat noodles."),
      ex("算了，你点你的，我点我的。", "Forget it — you order yours, I’ll order mine."),
    ],
  }),
]
