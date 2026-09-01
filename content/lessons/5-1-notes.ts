import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_5_1_CORE_VOCAB: VocabItem[] = [
  v("菲律宾", "the Philippines"),
  v("相片", "photo (Taiwan)"),
  v("长滩岛", "Boracay"),
  v("马尼拉", "Manila"),
  v("传统市场", "traditional market"),
  v("小吃", "snack; street food"),
  v("毛蛋", "balut (fertilized duck egg)"),
  v("当地人", "local people"),
  v("孵化", "to hatch"),
  v("反胃", "to feel nauseous"),
  v("东南亚", "Southeast Asia"),
  v("料理", "cuisine; a dish"),
  v("烤蜘蛛", "grilled spider"),
  v("油炸蝙蝠", "deep-fried bat"),
  v("风景照", "landscape photo"),
]

export const LESSON_5_1_CHUNKS: VocabItem[] = [
  v("你去菲律宾回来啦", "you’re back from the Philippines"),
  v("拍得怎么样", "how did the photos turn out"),
  v("运气好，天气都很好", "lucky — the weather was great the whole time"),
  v("看一下相片吧", "let’s look at the photos"),
  v("这是传统市场的小吃", "this is a snack from a traditional market"),
  v("你敢吃毛蛋", "you dared to eat balut"),
  v("当地人都在吃，很好奇", "the locals were all eating it, so I was curious"),
  v("我快反胃了", "I’m about to throw up"),
  v("还有更恐怖的料理", "there are even scarier dishes"),
  v("我刚吃饱。看风景照就好", "I just ate. Let’s stick to the landscape shots"),
]

export const LESSON_5_1_FAMILY: VocabItem[] = [
  v("饮食习惯", "eating habits"),
  v("主食", "staple food"),
  v("拿手菜", "signature dish"),
  v("特色菜", "specialty dish"),
  v("下厨", "to cook; to go into the kitchen"),
  v("讲究", "particular about; particular"),
  v("过敏", "allergy; allergic"),
  v("奇特", "unusual; peculiar"),
]

export const LESSON_5_1_PRACTICE: MiniLessonExample[] = [
  ex("你去菲律宾回来啦？拍得怎么样？", "You’re back from the Philippines? How did the photos turn out?"),
  ex("很不错，运气好，天气都很好。", "Pretty good — lucky, the weather was great the whole time."),
  ex("这是长滩岛，这是马尼拉，这是传统市场的小吃。", "This is Boracay, this is Manila, this is a snack from a traditional market."),
  ex("天啊，你敢吃毛蛋？！", "Oh my god — you dared to eat balut?!"),
  ex("Balut，我看当地人都在吃，很好奇，试了一个。", "Balut. The locals were all eating it, so I was curious and tried one."),
  ex("就一口吸进去啊。", "You just suck it down in one go."),
  ex("我快反胃了。", "I’m about to throw up."),
  ex("OKOK！我刚吃饱。看风景照就好。", "OK OK! I just ate. Let’s stick to the landscape shots."),
]

export const LESSON_5_1_FILL_BLANKS = [
  fb("1", "You’re back from the Philippines?", "你去菲律宾", "？拍得怎么样？", "回来啦", ["出发啦", "加班啦", "搬家啦"]),
  fb("2", "Let’s look at the photos.", "看一下", "吧。", "相片", ["简历", "菜单", "地图"]),
  fb("3", "This is a snack from a traditional market.", "这是传统市场的", "。", "小吃", ["门票", "作业", "面试"]),
  fb("4", "You dared to eat balut?!", "天啊，你敢吃", "？！", "毛蛋", ["臭豆腐", "鸡排", "豆花"]),
  fb("5", "I’m about to throw up.", "我快", "了。", "反胃", ["反悔", "放松", "反思"]),
  fb("6", "There are even scarier dishes.", "东南亚还有更恐怖的", "。", "料理", ["作业", "面试", "会议"]),
  fb("7", "Let’s stick to the landscape shots.", "看", "就好。", "风景照", ["自拍", "证件照", "X光"]),
  fb("8", "The locals were all eating it.", "我看", "都在吃。", "当地人", ["外国人", "同事", "同学"]),
]

export const LESSON_5_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你去菲律宾回来啦？拍得怎么样？": [
    ml("回来啦", "you’re back", ["啦 marks a warm just-happened return. Pair it with a how-did-it-go question."], {
      examples: [ex("你去菲律宾回来啦？", "You’re back from the Philippines?")],
    }),
    ml("拍得怎么样", "how did the shooting go", ["得 turns 拍 into a result: how did the photos turn out? Photography-club opener."], {
      pattern: "V + 得怎么样",
    }),
  ],
  "很不错，运气好，天气都很好。": [
    ml("很不错", "pretty good", ["A modest win. Then the reason: 运气好 + 天气都很好."]),
    ml("运气好", "lucky", ["Weather luck is a travel cliché. 都很好 = the whole trip, not one afternoon."], {
      examples: [ex("运气好，天气都很好。", "Lucky — the weather was great the whole time.")],
    }),
  ],
  "看一下相片吧。": [
    ml("看一下 + N 吧", "let’s take a look at…", ["一下 softens the ask. 相片 is Taiwan for photo; Mainland often 照片."], {
      pattern: "看一下 + N 吧",
      examples: [ex("看一下相片吧。", "Let’s look at the photos.")],
    }),
  ],
  "这是长滩岛，这是马尼拉，这是传统市场的小吃。": [
    ml("这是 A，这是 B", "this is A, this is B", ["Photo-pointing rhythm. Three 这是… walk through the trip."], {
      examples: [ex("这是长滩岛，这是马尼拉。", "This is Boracay, this is Manila.")],
    }),
    ml("传统市场的小吃", "a traditional-market snack", ["Sets up the shock: not a beach shot — street food."]),
  ],
  "天啊，你敢吃毛蛋？！": [
    ml("天啊", "oh my god", ["A full recoil. Then 敢吃 + the food that caused it."]),
    ml("敢吃 + food", "dare to eat…", ["敢 is courage, not ability. 毛蛋 = balut. ？！ stacks shock on the question."], {
      pattern: "敢吃 + food",
      examples: [ex("你敢吃毛蛋？！", "You dared to eat balut?!")],
    }),
  ],
  "Balut，我看当地人都在吃，很好奇，试了一个。": [
    ml("Balut", "balut", ["Keeps the Tagalog name. Then the excuse: locals were eating it."]),
    ml("很好奇，试了一个", "I was curious, so I tried one", ["好奇 → 试了 is a travel-food story in two beats."], {
      examples: [ex("很好奇，试了一个。", "I was curious, so I tried one.")],
    }),
  ],
  "（惊恐）那里面有刚孵化的小鸭吧？怎么吃啊？！": [
    ml("（惊恐）", "(horrified)", ["Stage direction in the book. Read the line as a recoil, not a calm fact-check."]),
    ml("刚孵化的小鸭", "a duckling that just hatched", ["The horror detail. 怎么吃啊？！ is disgust, not a recipe question."], {
      examples: [ex("怎么吃啊？！", "How do you even eat that?!")],
    }),
  ],
  "就一口吸进去啊。（发出吸的声音）": [
    ml("一口吸进去", "suck it down in one go", ["一口 = in one mouthful. 吸 is the actual eating method for balut."], {
      examples: [ex("就一口吸进去啊。", "You just suck it down in one go.")],
    }),
    ml("（发出吸的声音）", "(makes a sucking sound)", ["The book wants the sound effect. Don’t skip it when you shadow."]),
  ],
  "我快反胃了。": [
    ml("快 + result + 了", "almost / about to…", ["快反胃了 = I’m about to be sick. A complete reaction line."], {
      pattern: "快 + V + 了",
      examples: [ex("我快反胃了。", "I’m about to throw up.")],
    }),
  ],
  "这还好啦，东南亚还有更恐怖的料理，烤蜘蛛啦、油炸蝙蝠啦……": [
    ml("这还好啦", "this is nothing", ["Minimizes balut, then one-ups it with worse dishes."]),
    ml("更恐怖的料理", "even scarier dishes", ["烤蜘蛛啦、油炸蝙蝠啦…… lists with 啦 and an ellipsis — a tease, not a menu."], {
      examples: [ex("还有更恐怖的料理。", "There are even scarier dishes.")],
    }),
  ],
  "OKOK！我刚吃饱。看风景照就好。": [
    ml("OKOK", "OK OK", ["Spoken cutoff. Two Latin OKs = please stop."]),
    ml("看风景照就好", "landscape shots will do", ["就好 = that’s enough. Changes the album topic."], {
      examples: [ex("看风景照就好。", "Let’s stick to the landscape shots.")],
    }),
  ],
}

export const LESSON_5_1_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("敢吃 + food", "Dare to eat…", ["Courage, not ability. Use it for foods that scare people."], {
    pattern: "敢吃 + food",
    examples: [
      ex("你敢吃毛蛋？！", "You dared to eat balut?!"),
      ex("我不敢吃昆虫。", "I don’t dare eat insects."),
      ex("你敢吃臭豆腐吗？", "Do you dare eat stinky tofu?"),
    ],
  }),
  ml("V + 得怎么样", "How did it turn out?", ["Ask about the result of a trip activity: 拍、玩、吃."], {
    pattern: "V + 得怎么样",
    examples: [
      ex("拍得怎么样？", "How did the photos turn out?"),
      ex("玩得怎么样？", "How was the trip?"),
      ex("吃得怎么样？", "How was the food?"),
    ],
  }),
  ml("快 + V + 了", "About to…", ["A change that is almost here. 反胃、吐、晕 all work."], {
    pattern: "快 + V + 了",
    examples: [
      ex("我快反胃了。", "I’m about to throw up."),
      ex("我快走了。", "I’m about to leave."),
      ex("天快黑了。", "It’s getting dark."),
    ],
  }),
  ml("这还好啦", "This is nothing", ["Downplays the shock, then adds a worse example."], {
    pattern: "这还好啦，还有更…",
    examples: [
      ex("这还好啦，还有更恐怖的料理。", "This is nothing — there are scarier dishes."),
      ex("这还好啦，毛蛋更可怕。", "This is nothing — balut is scarier."),
      ex("这还好啦，夜市更挤。", "This is nothing — the night market is more crowded."),
    ],
  }),
  ml("看 N 就好", "N will do / just look at N", ["Closes a topic you don’t want. 就好 = that’s enough."], {
    pattern: "看 + N + 就好",
    examples: [
      ex("看风景照就好。", "Let’s stick to the landscape shots."),
      ex("看菜单就好。", "Just look at the menu."),
      ex("听讲解就好。", "Just listen to the explanation."),
    ],
  }),
]
