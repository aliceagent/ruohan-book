import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_4_CORE_VOCAB: VocabItem[] = [
  v("东方美人茶", "Oriental Beauty tea (Baihao Oolong)"),
  v("最爱", "favorite (thing / person)"),
  v("阳台", "balcony"),
  v("夜景", "night view"),
  v("咖啡因", "caffeine"),
  v("桌巾", "tablecloth"),
  v("青花瓷", "blue-and-white porcelain"),
  v("青色", "blue-green; celadon / porcelain blue"),
  v("柔粉色", "soft pink"),
  v("洋装", "western-style dress"),
  v("显气色", "to make one’s complexion look good"),
  v("土凤梨〔菠萝〕酥", "local pineapple cake"),
  v("品尝", "to taste (carefully)"),
  v("厌恶", "to dislike; loathe"),
]

export const LESSON_4_4_CHUNKS: VocabItem[] = [
  v("我最爱东方美人茶了", "Oriental Beauty is my favorite tea"),
  v("也是我的最爱", "it’s my favorite too"),
  v("一天中我最喜欢的时间", "my favorite time of day"),
  v("坐在阳台喝一杯东方美人看夜景", "sit on the balcony with a cup of Oriental Beauty and watch the night view"),
  v("晚上喝茶不会睡不着吗", "won’t tea at night keep you up?"),
  v("比较没有咖啡因", "has relatively little caffeine"),
  v("你家的桌巾好美哦", "your tablecloth is so pretty"),
  v("青色是我最喜欢的颜色", "that blue is my favorite color"),
  v("很显气色", "really brings out your complexion"),
  v("吃吃看我做的土凤梨〔菠萝〕酥吧", "try the pineapple cake I made"),
  v("搭配东方美人正好", "it goes perfectly with Oriental Beauty"),
  v("好久没吃凤梨〔菠萝〕酥了", "I haven’t had pineapple cake in ages"),
  v("不会太甜，比卖的还好吃", "not too sweet — even better than store-bought"),
]

export const LESSON_4_4_FAMILY: VocabItem[] = [
  v("最爱", "favorite"),
  v("最喜欢", "like the most"),
  v("讨厌", "to hate; can’t stand"),
  v("厌恶", "to loathe"),
  v("受不了", "can’t stand"),
  v("无法忍受", "unable to endure"),
  v("改观", "to change one’s view"),
  v("拉黑", "to block (on social media)"),
]

export const LESSON_4_4_PRACTICE: MiniLessonExample[] = [
  ex("好香啊！我最爱东方美人茶了！", "It smells so good! Oriental Beauty is my favorite tea!"),
  ex("一天中我最喜欢的时间就是晚上洗完澡，坐在阳台喝一杯东方美人看夜景。", "My favorite time of day is after a night shower, on the balcony with Oriental Beauty and the night view."),
  ex("晚上喝茶不会睡不着吗？", "Won’t tea at night keep you up?"),
  ex("不会，东方美人比较没有咖啡因。", "No — Oriental Beauty has relatively little caffeine."),
  ex("青花瓷的青色是我最喜欢的颜色。", "The blue of blue-and-white porcelain is my favorite color."),
  ex("你今天这件粉色洋装很适合你，很显气色。", "That pink dress really suits you today — it brings out your complexion."),
  ex("吃吃看我做的土凤梨〔菠萝〕酥吧，搭配东方美人正好。", "Try the pineapple cake I made. It goes perfectly with Oriental Beauty."),
  ex("Hmm～好厉害！不会太甜，比卖的还好吃！", "Hmm — amazing! Not too sweet. Even better than store-bought!"),
]

export const LESSON_4_4_FILL_BLANKS = [
  fb("1", "Oriental Beauty is my favorite tea.", "我最爱", "了！", "东方美人茶", ["珍珠奶茶", "营养午餐", "商务谈判"]),
  fb("2", "It’s my favorite too.", "也是我的", "。", "最爱", ["最恨", "最近", "最后"]),
  fb("3", "Won’t tea at night keep you up?", "晚上喝茶不会", "吗？", "睡不着", ["吃不下", "看不懂", "坐不住"]),
  fb("4", "It has relatively little caffeine.", "东方美人比较没有", "。", "咖啡因", ["维生素", "蛋白质", "卡路里"]),
  fb("5", "It really brings out your complexion.", "这件洋装很适合你，很", "。", "显气色", ["显年纪", "显眼", "显得"]),
  fb("6", "Try the pineapple cake I made.", "吃吃看我做的", "吧。", "土凤梨〔菠萝〕酥", ["营养午餐", "家乡菜", "便当〔盒饭〕"]),
  fb("7", "I haven’t had pineapple cake in ages.", "好久没吃", "了。", "凤梨〔菠萝〕酥", ["东方美人", "青花瓷", "桌巾"]),
  fb("8", "Even better than store-bought.", "不会太甜，比卖的还", "！", "好吃", ["好看", "好听", "好贵"]),
]

export const LESSON_4_4_LINE_NOTES: Record<string, MiniLesson[]> = {
  "好香啊！我最爱东方美人茶了！": [
    ml("好香啊", "it smells so good", ["好 + adj + 啊 on walking in. Sensory opener."]),
    ml("我最爱 + noun + 了", "…is my favorite", ["最爱 is stronger than 最喜欢. 了 warms it."], {
      pattern: "我最爱 + noun + 了",
      examples: [ex("我最爱东方美人茶了！", "Oriental Beauty is my favorite tea!")],
    }),
  ],
  "也是我的最爱。一天中我最喜欢的时间就是晚上洗完澡，坐在阳台喝一杯东方美人看夜景。": [
    ml("也是我的最爱", "it’s my favorite too", ["最爱 as a noun: my favorite (thing)."]),
    ml("一天中我最喜欢的时间就是…", "my favorite time of day is…", ["中 marks the set. 就是 locks the scene: shower → balcony → tea → night view."], {
      examples: [ex("一天中我最喜欢的时间就是晚上洗完澡。", "My favorite time of day is after the evening shower.")],
    }),
  ],
  "晚上喝茶不会睡不着吗？": [
    ml("不会 + result + 吗", "won’t that…?", ["睡不着 is the feared result. A care question, not a challenge."], {
      pattern: "不会 + result + 吗？",
      examples: [ex("晚上喝茶不会睡不着吗？", "Won’t tea at night keep you up?")],
    }),
  ],
  "不会，东方美人比较没有咖啡因。": [
    ml("比较没有 + noun", "has relatively little…", ["比较没有咖啡因 = less caffeine than you think. Soft science."], {
      examples: [ex("比较没有咖啡因。", "It has relatively little caffeine.")],
    }),
  ],
  "你家的桌巾好美哦！": [
    ml("好 + adj + 哦", "so…!", ["桌巾 is tablecloth. 哦 is warm notice, like Unit 2’s 带便当啊？"]),
  ],
  "青花瓷的青色是我最喜欢的颜色。你最喜欢什么颜色？": [
    ml("X 是我最喜欢的 + noun", "X is my favorite…", ["青花瓷的青色 = the blue of that porcelain."], {
      examples: [ex("青色是我最喜欢的颜色。", "That blue is my favorite color.")],
    }),
  ],
  "我喜欢柔粉色。": [
    ml("柔粉色", "soft pink", ["柔 + color. A short preference answer — then the compliment comes."]),
  ],
  "你今天这件粉色洋装很适合你，很显气色。": [
    ml("很适合你", "really suits you", ["这件 + clothes. 洋装 is a western dress."]),
    ml("很显气色", "brings out your complexion", ["显 + quality: 显瘦、显白、显气色. Taiwan compliment."], {
      examples: [ex("很显气色。", "It really brings out your complexion.")],
    }),
  ],
  "谢谢。吃吃看我做的土凤梨〔菠萝〕酥吧，搭配东方美人正好。": [
    ml("吃吃看", "try a bite", ["VV + 看 = try. 土凤梨酥 is Taiwan pineapple cake; 〔菠萝〕 is the mainland fruit name."]),
    ml("搭配 + A + 正好", "goes perfectly with A", ["正好 = just right as a pair."], {
      examples: [ex("搭配东方美人正好。", "It goes perfectly with Oriental Beauty.")],
    }),
  ],
  "好久没吃凤梨〔菠萝〕酥了。（品尝后）Hmm～好厉害！不会太甜，比卖的还好吃！": [
    ml("好久没 + V + 了", "haven’t … in ages", ["Same family as 4-2. Then stage direction （品尝后）."]),
    ml("比卖的还好吃", "even better than store-bought", ["卖的 = the ones they sell. 还 marks the surprise extra."], {
      pattern: "比 + noun + 还 + adj",
      examples: [ex("比卖的还好吃！", "Even better than store-bought!")],
    }),
  ],
}

export const LESSON_4_4_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("我最爱 + noun + 了", "…is my favorite", ["最爱 as a verb. Stronger, warmer than 最喜欢."], {
    pattern: "我最爱 + noun + 了",
    examples: [
      ex("我最爱东方美人茶了！", "Oriental Beauty is my favorite tea!"),
      ex("我最爱这件洋装了。", "I love this dress most."),
      ex("这也是我的最爱。", "This is my favorite too."),
    ],
  }),
  ml("不会 + result + 吗", "Won’t that…?", ["A worried check. Answer with 不会 + reason."], {
    pattern: "不会 + result + 吗？",
    examples: [
      ex("晚上喝茶不会睡不着吗？", "Won’t tea at night keep you up?"),
      ex("这么甜不会腻吗？", "Won’t something this sweet get cloying?"),
      ex("现在出发不会迟到吗？", "Won’t we be late if we leave now?"),
    ],
  }),
  ml("很显 + quality", "Really brings out…", ["显气色、显瘦、显白. Clothes-and-face compliments."], {
    pattern: "很显 + quality",
    examples: [
      ex("很显气色。", "It really brings out your complexion."),
      ex("这件很显瘦。", "This one is slimming."),
      ex("这个颜色很显白。", "This color makes you look brighter."),
    ],
  }),
  ml("VV + 看", "Give it a try", ["吃吃看、喝喝看. Same family as 3-2 做做看."], {
    pattern: "VV + 看",
    examples: [
      ex("吃吃看我做的土凤梨酥吧。", "Try the pineapple cake I made."),
      ex("喝喝看。", "Have a taste."),
      ex("穿穿看。", "Try it on."),
    ],
  }),
  ml("比 + noun + 还 + adj", "Even more adj than…", ["还 pushes past the comparison. 比卖的还好吃."], {
    pattern: "比 + noun + 还 + adj",
    examples: [
      ex("比卖的还好吃！", "Even better than store-bought!"),
      ex("比去年还香。", "Even more fragrant than last year."),
      ex("比我想的还美。", "Even prettier than I thought."),
    ],
  }),
]
