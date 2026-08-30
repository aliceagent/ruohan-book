import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_5_4_CORE_VOCAB: VocabItem[] = [
  v("人山人海", "a sea of people; packed"),
  v("排队", "to queue"),
  v("鸡排", "fried chicken cutlet"),
  v("限定", "limited edition"),
  v("毫无招架之力", "no way to resist"),
  v("卤味", "braised snacks"),
  v("豆干", "dried tofu"),
  v("豆花", "tofu pudding"),
  v("冬瓜茶", "winter-melon tea"),
  v("轮到", "to be someone’s turn"),
  v("摊贩", "street vendor"),
  v("夜市", "night market"),
  v("小吃", "snack; street food"),
  v("逛", "to stroll; to browse"),
  v("路边摊", "roadside stall"),
]

export const LESSON_5_4_CHUNKS: VocabItem[] = [
  v("都 10 点半了还人山人海", "it’s already 10:30 and still packed"),
  v("好多人在排队", "so many people queuing"),
  v("排什么去看看", "let’s see what they’re queuing for"),
  v("这么多人在排一定很好吃", "this many people in line — it must be good"),
  v("对“排队的店”和“限定”毫无招架之力", "powerless against shops with queues and limited editions"),
  v("要不我排就好", "how about I queue"),
  v("你先去买别的", "you go buy something else first"),
  v("黑的黄的各一份", "one of the black and one of the yellow"),
  v("冬瓜茶一杯", "one winter-melon tea"),
  v("可能我买回来了还没轮到你", "I’ll probably be back before it’s your turn"),
]

export const LESSON_5_4_FAMILY: VocabItem[] = [
  v("摊贩", "street vendor"),
  v("夜市", "night market"),
  v("小吃", "snack"),
  v("排队", "to queue"),
  v("取缔", "to crack down on; to ban"),
  v("税金", "tax"),
  v("甜度", "sweetness level"),
  v("冰块", "ice cubes"),
]

export const LESSON_5_4_PRACTICE: MiniLessonExample[] = [
  ex("都 10 点半了还人山人海！", "It’s already 10:30 and still packed!"),
  ex("那里好多人在排队啊！排什么去看看！", "So many people queuing over there! Let’s see what it’s for!"),
  ex("鸡排，要排吗？", "Chicken cutlet — want to queue?"),
  ex("这么多人在排一定很好吃，当然要排！", "This many people in line — it must be good. Of course we queue!"),
  ex("你们女人就是好奇，对“排队的店”和“限定”毫无招架之力。", "You women are just curious — powerless against shops with queues and limited editions."),
  ex("要不我排就好，你先去买别的。", "How about I queue, and you go buy something else first."),
  ex("当然是我的最爱——豆干！黑的黄的各一份。", "Of course my favorite — dried tofu! One black and one yellow."),
  ex("不用，冬瓜茶一杯。", "No — one winter-melon tea."),
]

export const LESSON_5_4_FILL_BLANKS = [
  fb("1", "It’s already 10:30 and still packed.", "都 10 点半了还", "！", "人山人海", ["人去楼空", "人来人往", "人声鼎沸"]),
  fb("2", "Let’s see what they’re queuing for.", "那里好多人在排队啊！", "去看看！", "排什么", ["买什么", "吃什么", "做什么"]),
  fb("3", "Chicken cutlet — want to queue?", "", "，要排吗？", "鸡排", ["鸡腿", "鸡汤", "鸡蛋"]),
  fb("4", "Powerless against shops with queues.", "对“排队的店”和“限定”", "。", "毫无招架之力", ["毫无办法", "毫无兴趣", "毫无道理"]),
  fb("5", "How about I queue.", "要不我", "，你先去买别的。", "排就好", ["走就好", "吃就好", "看就好"]),
  fb("6", "I’ll go buy braised snacks first.", "那我先去买", "。", "卤味", ["火锅", "披萨", "便当"]),
  fb("7", "One black and one yellow.", "当然是我的最爱——豆干！黑的黄的", "。", "各一份", ["各一碗", "各一杯", "各一家"]),
  fb("8", "One winter-melon tea.", "不用，", "一杯。", "冬瓜茶", ["珍珠奶茶", "红茶", "咖啡"]),
]

export const LESSON_5_4_LINE_NOTES: Record<string, MiniLesson[]> = {
  "都 10 点半了还人山人海！": [
    ml("都 + time + 了还…", "it’s already… and still…", ["都…了 marks lateness. 还 + crowded is the surprise. Keep the spaces around 10."], {
      pattern: "都 + time + 了还 + situation",
      examples: [ex("都 10 点半了还人山人海！", "It’s already 10:30 and still packed!")],
    }),
    ml("人山人海", "a sea of people", ["Four-character packed crowd. Night-market weather report."]),
  ],
  "那里好多人在排队啊！排什么去看看！": [
    ml("好多人在排队", "so many people queuing", ["在 + V for the scene you can see."]),
    ml("排什么去看看", "let’s see what the queue is for", ["排什么 = queue for what. 去看看 is the move."], {
      examples: [ex("排什么去看看！", "Let’s see what they’re queuing for!")],
    }),
  ],
  "鸡排，要排吗？": [
    ml("N，要 V 吗", "N — want to V?", ["Names the stall, then a yes-no. 鸡排 is the Taiwan night-market star."], {
      examples: [ex("鸡排，要排吗？", "Chicken cutlet — want to queue?")],
    }),
  ],
  "这么多人在排一定很好吃，当然要排！": [
    ml("这么多人在排一定 + adj", "this many people in line — it must be…", ["Queue as proof of taste."], {
      pattern: "这么多人在排一定 + adj",
      examples: [ex("这么多人在排一定很好吃。", "This many people in line — it must be good.")],
    }),
    ml("当然要排", "of course we queue", ["当然 locks the decision."]),
  ],
  "你们女人就是好奇，对“排队的店”和“限定”毫无招架之力。要排很久啊！": [
    ml("就是好奇", "just curious", ["A teasing stereotype. Keep it as the book’s joke, then the real grammar."]),
    ml("对 N 毫无招架之力", "powerless against N", ["毫无招架之力 = no defense. “排队的店”和“限定” are the temptations."], {
      pattern: "对 + N + 毫无招架之力",
      examples: [ex("对“限定”毫无招架之力。", "Powerless against limited editions.")],
    }),
  ],
  "要不我排就好，你先去买别的。": [
    ml("要不 + plan", "how about…", ["Splits the work. 就好 = I’ll handle just this part."], {
      pattern: "要不 + S + 就好",
      examples: [ex("要不我排就好。", "How about I queue.")],
    }),
    ml("你先去买别的", "you go buy something else first", ["先… splits the night-market run."]),
  ],
  "那我先去买卤味。你要什么？": [
    ml("那我先去 + V", "then I’ll go … first", ["Accepts the split. 卤味 is the second stall."], {
      examples: [ex("那我先去买卤味。", "Then I’ll go buy braised snacks first.")],
    }),
    ml("你要什么", "what do you want", ["Order-taking between friends."]),
  ],
  "当然是我的最爱——豆干！黑的黄的各一份。": [
    ml("我的最爱——N", "my favorite — N", ["The long dash names the craving."], {
      examples: [ex("当然是我的最爱——豆干！", "Of course my favorite — dried tofu!")],
    }),
    ml("黑的黄的各一份", "one black and one yellow", ["各一份 = one portion of each. Night-market ordering math."]),
  ],
  "豆花要不要？": [
    ml("N 要不要", "want N or not", ["A second offer. Short and stall-fast."], {
      pattern: "N + 要不要",
      examples: [ex("豆花要不要？", "Want tofu pudding?")],
    }),
  ],
  "不用，冬瓜茶一杯。": [
    ml("不用，+ order", "no — (just) …", ["Refuses 豆花, then a drink order."], {
      examples: [ex("不用，冬瓜茶一杯。", "No — one winter-melon tea.")],
    }),
  ],
  "好，可能我买回来了还没轮到你。": [
    ml("买回来了还没轮到你", "I’ll be back before it’s your turn", ["可能 + 还没 = a tease about how long the 鸡排 line is."], {
      examples: [ex("可能我买回来了还没轮到你。", "I’ll probably be back before it’s your turn.")],
    }),
  ],
}

export const LESSON_5_4_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("都 + time + 了还…", "Already… and still…", ["Late + unexpected scene. Keep spaces around 10."], {
    pattern: "都 + time + 了还 + situation",
    examples: [
      ex("都 10 点半了还人山人海！", "It’s already 10:30 and still packed!"),
      ex("都十二点了还在排队。", "It’s already 12 and we’re still queuing."),
      ex("都打烊了还这么多人。", "They’re already closing and it’s still this crowded."),
    ],
  }),
  ml("对 N 毫无招架之力", "Powerless against N", ["A joke confession. Works for queues, sales, and desserts."], {
    pattern: "对 + N + 毫无招架之力",
    examples: [
      ex("对“排队的店”毫无招架之力。", "Powerless against shops with queues."),
      ex("我对甜食毫无招架之力。", "I’m powerless against sweets."),
      ex("她对限定毫无招架之力。", "She’s powerless against limited editions."),
    ],
  }),
  ml("要不 + plan", "How about…", ["Split a night-market run without a fight."], {
    pattern: "要不 + S + 就好",
    examples: [
      ex("要不我排就好。", "How about I queue."),
      ex("要不你去买饮料。", "How about you go buy drinks."),
      ex("要不我们换一家。", "How about we switch stalls."),
    ],
  }),
  ml("N 要不要", "Want N?", ["Fast stall offer. Answer with 要 / 不用 + order."], {
    pattern: "N + 要不要",
    examples: [
      ex("豆花要不要？", "Want tofu pudding?"),
      ex("冰块要不要？", "Want ice?"),
      ex("辣椒要不要？", "Want chili?"),
    ],
  }),
  ml("各一份", "One of each", ["Ordering two kinds. Pair with colors or flavors."], {
    pattern: "A 的 B 的各一份",
    examples: [
      ex("黑的黄的各一份。", "One black and one yellow."),
      ex("甜的咸的各一份。", "One sweet and one savory."),
      ex("大的小的各一份。", "One large and one small."),
    ],
  }),
]
