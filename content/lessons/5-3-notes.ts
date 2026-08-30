import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_5_3_CORE_VOCAB: VocabItem[] = [
  v("闻香杯", "aroma cup"),
  v("盖住", "to cover"),
  v("翻过去", "to flip over"),
  v("回甘", "sweet aftertaste (tea)"),
  v("高山茶", "high-mountain tea"),
  v("红茶", "black tea"),
  v("茶道", "tea ceremony; the way of tea"),
  v("点心", "snacks with tea"),
  v("下午茶", "afternoon tea"),
  v("竖琴", "harp"),
  v("瓜子", "melon seeds"),
  v("花生", "peanuts"),
  v("绿豆糕", "mung-bean cake"),
  v("核桃糕", "walnut cake"),
  v("泡", "to brew (tea)"),
]

export const LESSON_5_3_CHUNKS: VocabItem[] = [
  v("来，请喝", "here — please drink"),
  v("这是闻香杯", "this is an aroma cup"),
  v("盖住，立刻翻过去", "cover it, then flip it over right away"),
  v("先闻这个杯子，再喝", "smell this cup first, then drink"),
  v("嘴巴内很甜", "it’s sweet in the mouth"),
  v("喉咙会一直甜甜的，叫回甘", "the throat stays sweet — that’s 回甘"),
  v("买高山茶回去，泡给我家人喝", "buy high-mountain tea to brew for my family"),
  v("英国人平常喝红茶吧", "the British usually drink black tea, right"),
  v("喝茶吃点心而已", "it’s just tea and snacks"),
  v("你尝尝看", "try some"),
]

export const LESSON_5_3_FAMILY: VocabItem[] = [
  v("泡茶", "to brew tea"),
  v("茶具", "tea ware"),
  v("茶点", "tea snacks"),
  v("茶会", "tea gathering"),
  v("招待", "to host; to treat a guest"),
  v("手冲咖啡", "pour-over coffee"),
  v("挂耳", "drip-bag coffee"),
  v("三合一", "3-in-1 instant coffee"),
]

export const LESSON_5_3_PRACTICE: MiniLessonExample[] = [
  ex("来，请喝。这是闻香杯，这样子，盖住，立刻翻过去，小心。", "Here — please drink. This is an aroma cup. Like this: cover it, flip it right away. Careful."),
  ex("Er……这样……", "Er… like this…"),
  ex("对，很好！先闻这个杯子，再喝。怎么样？", "Yes — good! Smell this cup first, then drink. How is it?"),
  ex("Hmm～好香啊！看起来颜色很浅，可是很香，嘴巴内很甜！", "Hmm — so fragrant! The color looks light, but it smells strong, and it’s sweet in the mouth."),
  ex("我们叫“甘”，吞下后，喉咙会一直甜甜的，叫回甘。", "We call that 甘. After you swallow, the throat stays sweet — that’s 回甘."),
  ex("太赞了，我应该买高山茶回去，泡给我家人喝！", "Amazing. I should buy high-mountain tea and brew it for my family!"),
  ex("英国人平常喝红茶吧？你们也有茶道吗？", "The British usually drink black tea, right? Do you have a tea ceremony too?"),
  ex("你尝尝看，这是瓜子、花生、绿豆糕、核桃糕。", "Try some — melon seeds, peanuts, mung-bean cake, walnut cake."),
]

export const LESSON_5_3_FILL_BLANKS = [
  fb("1", "This is an aroma cup.", "这是", "，这样子，盖住，立刻翻过去。", "闻香杯", ["马克杯", "酒杯", "纸杯"]),
  fb("2", "Smell this cup first, then drink.", "先闻这个杯子，", "。怎么样？", "再喝", ["再吃", "再走", "再睡"]),
  fb("3", "The throat stays sweet — that’s 回甘.", "喉咙会一直甜甜的，叫", "。", "回甘", ["回锅", "回国", "回信"]),
  fb("4", "I should buy high-mountain tea to brew for my family.", "我应该买", "回去。", "高山茶", ["红茶", "咖啡", "汽水"]),
  fb("5", "The British usually drink black tea, right?", "英国人平常喝", "吧？", "红茶", ["绿茶", "普洱", "乌龙"]),
  fb("6", "Do you have a tea ceremony too?", "你们也有", "吗？", "茶道", ["花道", "书道", "剑道"]),
  fb("7", "It’s just tea and snacks.", "就是喝茶吃", "而已。", "点心", ["正餐", "火锅", "宵夜"]),
  fb("8", "Try some.", "你", "，这是瓜子、花生。", "尝尝看", ["看看看", "想想看", "问问看"]),
]

export const LESSON_5_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "来，请喝。这是闻香杯，这样子，盖住，立刻翻过去，小心。": [
    ml("来，请喝", "here — please drink", ["A host opener. Then the tool name and the moves."]),
    ml("这样子，盖住，立刻翻过去", "like this: cover, flip right away", ["这样子 is the demo word. 立刻 keeps the aroma in the cup."], {
      pattern: "这样子，V，立刻 + V",
      examples: [ex("这样子，盖住，立刻翻过去。", "Like this: cover it, flip it right away.")],
    }),
  ],
  "Er……这样……": [
    ml("Er……这样……", "er… like this…", ["Learner English filler + 这样. The guest is copying the move, not answering yet."], {
      examples: [ex("Er……这样……", "Er… like this…")],
    }),
  ],
  "对，很好！先闻这个杯子，再喝。怎么样？": [
    ml("先 V，再 V", "first… then…", ["Tea sequence: smell the aroma cup, then drink."], {
      pattern: "先 + V，再 + V",
      examples: [ex("先闻这个杯子，再喝。", "Smell this cup first, then drink.")],
    }),
    ml("怎么样？", "how is it?", ["Hands the tasting turn to the guest."]),
  ],
  "Hmm～好香啊！看起来颜色很浅，可是很香，嘴巴内很甜！": [
    ml("Hmm～好香啊", "hmm — so fragrant", ["Latin Hmm plus 好香啊. Same taste-noise as Unit 4’s cake line."]),
    ml("看起来……可是……", "it looks… but…", ["Light color vs strong aroma and sweetness."], {
      examples: [ex("看起来颜色很浅，可是很香。", "The color looks light, but it smells strong.")],
    }),
  ],
  "我们叫“甘”，吞下后，喉咙会一直甜甜的，叫回甘。": [
    ml("我们叫“甘”", "we call that 甘", ["Teaches the tea word, then the longer name 回甘."]),
    ml("回甘", "sweet aftertaste", ["吞下后，喉咙会一直甜甜的 is the definition. Keep both names."], {
      examples: [ex("喉咙会一直甜甜的，叫回甘。", "The throat stays sweet — that’s 回甘.")],
    }),
  ],
  "太赞了，我应该买高山茶回去，泡给我家人喝！": [
    ml("太赞了", "amazing", ["Spoken praise. Then a take-home plan."]),
    ml("买 N 回去，泡给 + person + 喝", "buy N to take home and brew for…", ["回去 = take it back. 泡 is brew, not soak here."], {
      pattern: "买 + N + 回去，泡给 + person + 喝",
      examples: [ex("买高山茶回去，泡给我家人喝。", "Buy high-mountain tea and brew it for my family.")],
    }),
  ],
  "英国人平常喝红茶吧？你们也有茶道吗？": [
    ml("平常喝 + drink", "usually drink…", ["A culture guess with 吧."]),
    ml("也有茶道吗", "do you also have a tea ceremony", ["也 compares Chinese gongfu tea with British tea."], {
      examples: [ex("你们也有茶道吗？", "Do you have a tea ceremony too?")],
    }),
  ],
  "没有，就是喝茶吃点心而已，有的高级餐厅在下午茶时间会有竖琴演奏。": [
    ml("就是……而已", "it’s just…", ["Downplays 茶道. Afternoon tea = snacks + maybe a harp."], {
      pattern: "就是 + VP + 而已",
      examples: [ex("就是喝茶吃点心而已。", "It’s just tea and snacks.")],
    }),
    ml("下午茶时间", "afternoon-tea time", ["竖琴演奏 is the fancy extra, not the everyday home."]),
  ],
  "我们也有点心，跟你们不一样。你尝尝看，这是瓜子、花生、绿豆糕、核桃糕。": [
    ml("跟你们不一样", "different from yours", ["Same word 点心, different plate."]),
    ml("你尝尝看", "try some", ["尝尝看 = give it a taste. Then a 顿号 list."], {
      examples: [ex("你尝尝看，这是瓜子、花生。", "Try some — melon seeds, peanuts.")],
    }),
  ],
}

export const LESSON_5_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("先 V，再 V", "First… then…", ["Host a tasting in order. Smell, then sip."], {
    pattern: "先 + V，再 + V",
    examples: [
      ex("先闻这个杯子，再喝。", "Smell this cup first, then drink."),
      ex("先盖住，再翻过去。", "Cover it first, then flip it."),
      ex("先泡茶，再吃点心。", "Brew the tea first, then eat snacks."),
    ],
  }),
  ml("回甘", "Sweet aftertaste", ["A tea-tasting noun. Teach it with the throat staying sweet."], {
    pattern: "叫回甘",
    examples: [
      ex("喉咙会一直甜甜的，叫回甘。", "The throat stays sweet — that’s 回甘."),
      ex("这杯茶很回甘。", "This tea has a strong sweet aftertaste."),
      ex("回甘比第一口还甜。", "The aftertaste is even sweeter than the first sip."),
    ],
  }),
  ml("买 N 回去", "Buy N to take home", ["Travel-shopping plan. Add 泡给…喝 for tea."], {
    pattern: "买 + N + 回去",
    examples: [
      ex("买高山茶回去，泡给我家人喝。", "Buy high-mountain tea and brew it for my family."),
      ex("买茶具回去。", "Buy tea ware to take home."),
      ex("买点心回去给妈妈。", "Buy snacks to take home for Mum."),
    ],
  }),
  ml("就是……而已", "It’s just…", ["Softens a big word like 茶道 into everyday tea."], {
    pattern: "就是 + VP + 而已",
    examples: [
      ex("就是喝茶吃点心而已。", "It’s just tea and snacks."),
      ex("就是普通红茶而已。", "It’s just ordinary black tea."),
      ex("就是招待客人而已。", "It’s just hosting guests."),
    ],
  }),
  ml("尝尝看", "Give it a taste", ["Reduplicated 尝 + 看. A host’s offer."], {
    pattern: "尝尝看",
    examples: [
      ex("你尝尝看。", "Try some."),
      ex("尝尝看这杯高山茶。", "Try this high-mountain tea."),
      ex("点心也尝尝看。", "Try the snacks too."),
    ],
  }),
]
