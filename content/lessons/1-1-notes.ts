import { fb } from "@/content/lessons/note-helpers"
import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"

function v(hanzi: string, en: string): VocabItem {
  return { hanzi, en }
}

function ex(hanzi: string, en: string): MiniLessonExample {
  return { hanzi, en }
}

/** Words that actually appear in the 1-1 dialogue (the stretch list is extra). */
export const LESSON_1_1_CORE_VOCAB: VocabItem[] = [
  v("打呵欠", "to yawn"),
  v("一大早", "very early in the morning / first thing in the morning"),
  v("睡好", "sleep well (result: get a good sleep)"),
  v("做梦", "to have a dream"),
  v("恶梦", "nightmare (also written 噩梦)"),
  v("梦见", "dream about / dream that"),
  v("追", "to chase"),
  v("一直", "continuously; keep doing"),
  v("拼命", "desperately; with all one’s strength"),
  v("掉", "to fall; to drop"),
  v("掉进", "to fall into"),
  v("山谷", "valley"),
  v("压力", "pressure; stress"),
  v("平常", "normally; usually"),
  v("睡眠", "sleep (noun)"),
  v("不足", "insufficient; not enough"),
  v("专家", "expert"),
  v("晒太阳", "get sunlight / bask in the sun"),
  v("帮助", "to help"),
  v("可能", "possibly; maybe"),
  v("够", "enough"),
  v("几乎", "almost; nearly"),
  v("分钟", "minute"),
  v("以内", "within (also 内)"),
  v("睡着", "to fall asleep"),
  v("一觉", "one uninterrupted stretch of sleep"),
  v("天亮", "daybreak; dawn"),
  v("羡慕", "envy; admire (often warm, not bitter)"),
]

export const LESSON_1_1_CHUNKS: VocabItem[] = [
  v("一大早", "first thing in the morning"),
  v("打呵欠", "yawn"),
  v("没睡好", "didn’t sleep well"),
  v("做了个恶梦", "had a nightmare"),
  v("梦见有人……", "dream that someone…"),
  v("一直……一直……", "keep doing… and doing…"),
  v("拼命跑", "run like crazy / run for your life"),
  v("掉进……", "fall into…"),
  v("压力太大", "be under too much stress"),
  v("睡得好吗？", "do you sleep well?"),
  v("睡眠不足", "insufficient sleep"),
  v("多晒太阳", "get more sunlight"),
  v("睡不够", "not get enough sleep"),
  v("五分钟内", "within five minutes"),
  v("睡着", "fall asleep"),
  v("睡不着", "can’t fall asleep"),
  v("一觉到天亮", "sleep straight through until morning"),
  v("真羡慕", "I’m so jealous"),
]

export const LESSON_1_1_SLEEP_FAMILY: VocabItem[] = [
  v("睡觉", "sleep / go to bed"),
  v("睡着", "fall asleep"),
  v("睡不着", "can’t fall asleep"),
  v("睡得着", "be able to fall asleep"),
  v("睡得好", "sleep well (how you sleep)"),
  v("没睡好", "didn’t sleep well (result)"),
  v("睡不够", "don’t get enough sleep"),
  v("睡眠不足", "insufficient sleep (a bit more formal)"),
  v("一觉睡到天亮", "sleep straight through until morning"),
]

export const LESSON_1_1_PRACTICE: MiniLessonExample[] = [
  ex(
    "我昨天晚上没睡好，今天一大早就开始打呵欠。",
    "I didn’t sleep well last night, so I started yawning first thing this morning.",
  ),
  ex("我做了个恶梦，梦见有一只大狗在追我。", "I had a nightmare and dreamed that a big dog was chasing me."),
  ex("我一直跑、一直跑，最后跑不动了。", "I kept running and running until eventually I couldn’t run anymore."),
  ex("最近是不是工作压力太大了？", "Could it be that you’ve been under too much pressure at work lately?"),
  ex("我平常睡得不太好，而且常常睡不够。", "I normally don’t sleep very well, and I often don’t get enough sleep."),
  ex("我晚上很累，可是有时候还是睡不着。", "I’m very tired at night, but sometimes I still can’t fall asleep."),
  ex(
    "如果我睡得好，我几乎都是十分钟内睡着。",
    "If I’m sleeping well, I usually fall asleep within ten minutes.",
  ),
  ex("我希望今天晚上可以一觉睡到天亮。", "I hope tonight I can sleep straight through until morning."),
]

export const LESSON_1_1_FILL_BLANKS = [
  fb("1", "I didn’t sleep well last night.", "昨天晚上我没", "。", "睡好", [
    "睡着",
    "睡够",
    "梦见",
  ]),
  fb("2", "I dreamed that someone was chasing me.", "我", "有人在追我。", "梦见", [
    "睡着",
    "一直",
    "睡好",
  ]),
  fb("3", "He kept running.", "他", "跑。", "一直", ["已经", "还是", "多"]),
  fb("4", "Do you normally sleep well?", "你平常睡", "好吗？", "得", ["的", "地", "着"]),
  fb("5", "I can’t fall asleep.", "我睡", "。", "不着", ["不够", "不好", "不完"]),
  fb("6", "I don’t get enough sleep.", "我睡", "。", "不够", ["不着", "不好", "太多"]),
  fb("7", "Get more sunlight.", "", "晒太阳。", "多", ["少", "很", "太"]),
  fb("8", "I slept straight through until morning.", "我一觉睡", "天亮。", "到", [
    "在",
    "给",
    "得",
  ]),
]

export const LESSON_1_1_GRAMMAR_FOCUS: MiniLesson[] = [
  {
    title: "Verb + 得 + adjective",
    titleEn: "Describe how an action is done",
    pattern: "V + 得 + Adj",
    body: [
      "Use 得 to talk about the manner or quality of an action: 睡得好, 跑得快, 说得清楚. This is how B asks 你平常睡得好吗？",
    ],
    examples: [
      ex("睡得好", "sleep well"),
      ex("跑得快", "run fast"),
      ex("说得清楚", "speak clearly"),
    ],
  },
  {
    title: "Result complements",
    titleEn: "What result the action reached",
    pattern: "V + result",
    body: [
      "Put a verb or adjective after the main verb to show the result: 睡好 (get a good sleep), 睡着 (succeed in falling asleep), 吃完 (finish eating), 听懂 (hear and understand). Past negatives use 没, not 不: 昨天没睡好.",
    ],
    examples: [
      ex("睡好", "get a good sleep"),
      ex("睡着", "fall asleep"),
      ex("吃完", "finish eating"),
      ex("听懂", "understand what you hear"),
    ],
  },
  {
    title: "一直 + verb",
    titleEn: "Keep doing something",
    pattern: "一直 + V",
    body: [
      "一直 means the action continues without stopping. Repeating it (一直追、一直追) makes a story feel dramatic.",
    ],
    examples: [ex("一直跑", "keep running"), ex("一直等", "keep waiting"), ex("一直下雨", "keep raining")],
  },
  {
    title: "多 / 少 + verb",
    titleEn: "Do more or less of something",
    pattern: "多 / 少 + V",
    body: [
      "多晒太阳 is not “lots of sun” as a noun phrase. 多 + verb means “do more of that action.” The opposite is 少 + verb.",
    ],
    examples: [
      ex("多睡觉", "sleep more"),
      ex("多喝水", "drink more water"),
      ex("少喝咖啡", "drink less coffee"),
    ],
  },
  {
    title: "Verb + 不够",
    titleEn: "Not do enough of something",
    pattern: "V + 不够",
    body: [
      "睡不够, 吃不够, 看不够. 时间不够 is a close cousin: 不够 still means “not enough,” even when it follows a noun.",
    ],
    examples: [ex("睡不够", "not sleep enough"), ex("吃不够", "not eat enough"), ex("时间不够", "there isn’t enough time")],
  },
]

function notesForYawns(): MiniLesson[] {
  return [
    {
      title: "打呵欠",
      titleEn: "to yawn",
      pattern: "打 + noun",
      body: [
        "打呵欠 is the standard way to say “yawn.” 打 here does not mean “hit.” Chinese uses 打 in many set actions.",
      ],
      examples: [
        ex("我太累了，一直打呵欠。", "I’m so tired that I keep yawning."),
        ex("打电话", "make a phone call"),
        ex("打篮球", "play basketball"),
        ex("打喷嚏", "sneeze"),
      ],
    },
  ]
}

function notesForHowCome(): MiniLesson[] {
  return [
    {
      title: "怎么……就……？",
      titleEn: "How come… already / so soon…?",
      pattern: "怎么 + situation + 就 + action？",
      body: [
        "怎么一大早就打呵欠？ is not really asking “how.” 怎么 here means “how come / why are you…?” 就 stresses that it is happening already, so soon, or under these circumstances.",
      ],
      examples: [
        ex("你怎么这么早就回家了？", "How come you went home so early?"),
        ex("你怎么十点就睡觉了？", "How come you’re already going to bed at ten?"),
        ex("你怎么刚吃完饭就饿了？", "How come you’re hungry when you just finished eating?"),
      ],
    },
    {
      title: "一大早",
      titleEn: "first thing in the morning",
      body: [
        "一大早 is more expressive than 早上. It means really early / first thing in the morning. You will often hear 一大早就…….",
      ],
      examples: [
        ex("我早上去跑步。", "I go running in the morning."),
        ex("我一大早就去跑步了。", "I went running first thing in the morning."),
        ex("他一大早就出门了。", "He left home very early in the morning."),
      ],
      compare: [
        { label: "neutral", hanzi: "早上", en: "in the morning" },
        { label: "emphatic", hanzi: "一大早", en: "first thing / very early" },
      ],
    },
  ]
}

function notesForSleepResult(): MiniLesson[] {
  return [
    {
      title: "没睡好",
      titleEn: "didn’t sleep well — a result complement",
      pattern: "V + 好  /  没 + V + 好",
      body: [
        "睡 is the action; 好 is the result: you successfully slept well. This is a result complement, like 吃完, 找到, 听懂, 做好.",
        "For a past failure to reach that result, use 没: 我昨天没睡好. Do not say 不睡好.",
      ],
      examples: [
        ex("我昨天没睡好。", "I didn’t sleep well yesterday."),
        ex("吃完", "finish eating"),
        ex("找到", "successfully find"),
        ex("听懂", "hear and understand"),
      ],
      compare: [
        { label: "use this", hanzi: "昨天没睡好", en: "didn’t manage to sleep well" },
        { label: "not this", hanzi: "昨天不睡好", en: "ungrammatical for a past result" },
      ],
    },
  ]
}

function notesForWhatsWrong(): MiniLesson[] {
  return [
    {
      title: "怎么了？",
      titleEn: "What’s wrong? / What happened?",
      body: [
        "A short, everyday follow-up after someone looks unwell or says something is off. Soft and caring — not a demand for a full explanation.",
      ],
      examples: [
        ex("你看起来不太舒服，怎么了？", "You don’t look well — what’s wrong?"),
        ex("你怎么了？脸色不太好。", "What’s the matter? You look a bit pale."),
      ],
    },
  ]
}

function notesForNightmare(): MiniLesson[] {
  return [
    {
      title: "做了个恶梦",
      titleEn: "had a nightmare",
      pattern: "做了个 + noun",
      body: [
        "The full form is 做了一个恶梦. Conversational Chinese often drops 一: 一个 → 个. You will hear 我买了个手机, 我做了个梦.",
      ],
      examples: [
        ex("我做了个恶梦。", "I had a nightmare."),
        ex("我买了个手机。", "I bought a phone."),
        ex("我认识了个中国人。", "I met a Chinese person."),
      ],
    },
    {
      title: "梦见 / 有人 / 在 + verb",
      titleEn: "dream that someone was doing something",
      pattern: "梦见 + sentence    有人 + 在 + V",
      body: [
        "梦见 can take a person (梦见你了) or a whole clause (梦见有人在追我).",
        "有人 literally “there is a person,” idiomatically “somebody.” 在 marks an action in progress.",
      ],
      examples: [
        ex("我梦见你了。", "I dreamed about you."),
        ex("我梦见我从床上掉下来。", "I dreamed I fell out of bed."),
        ex("我梦见有人在追我。", "I dreamed someone was chasing me."),
        ex("有人在敲门。", "Someone is knocking on the door."),
      ],
    },
    {
      title: "一直追、一直追",
      titleEn: "kept chasing and chasing",
      pattern: "一直 + V，一直 + V",
      body: [
        "一直 means the action continues without stopping. Repeating the phrase is natural when telling a story: 一直跑，一直跑……",
      ],
      examples: [
        ex("他一直说话。", "He keeps talking."),
        ex("雨一直下。", "The rain keeps falling."),
        ex("我一直等你。", "I’ve been waiting for you."),
      ],
    },
    {
      title: "拼命跑",
      titleEn: "ran for my life / ran like crazy",
      pattern: "拼命 + V",
      body: [
        "拼命 has a feeling of risking everything / using all you’ve got. It is stronger than 努力. It does not always involve real danger: 拼命工作, 拼命学习.",
      ],
      examples: [
        ex("我拼命跑。", "I ran desperately."),
        ex("他拼命赚钱。", "He works like crazy to make money."),
        ex("拼命学习", "study like crazy"),
      ],
      compare: [
        { label: "milder", hanzi: "我努力跑。", en: "I tried hard to run." },
        { label: "stronger", hanzi: "我拼命跑。", en: "I ran for my life." },
      ],
    },
    {
      title: "掉进",
      titleEn: "fall into",
      pattern: "掉 + 进 + place",
      body: [
        "掉 is “fall”; 进 gives the inward direction. Compare 掉下来 (fall down), 掉出去 (fall out), 掉进去 (fall inside).",
      ],
      examples: [
        ex("最后掉进一个山谷。", "Finally I fell into a valley."),
        ex("手机掉进水里了。", "My phone fell into the water."),
        ex("他掉进河里了。", "He fell into the river."),
      ],
    },
  ]
}

function notesForStressSleep(): MiniLesson[] {
  return [
    {
      title: "是不是……？",
      titleEn: "Could it be that…?",
      pattern: "是不是 + statement？",
      body: [
        "Literally “is it or isn’t it…?” Naturally: a soft guess. Much gentler than 你压力太大了.",
      ],
      examples: [
        ex("是不是你太累了？", "Could it be that you’re too tired?"),
        ex("是不是他忘了？", "Do you think maybe he forgot?"),
        ex("是不是你吃太多了？", "Could it be because you ate too much?"),
      ],
    },
    {
      title: "太……了 / 压力大",
      titleEn: "too / so…",
      pattern: "太 + adjective + 了",
      body: [
        "压力太大了 uses 太……了. Chinese says 压力大 — “pressure is big” — rather than “high stress.”",
      ],
      examples: [
        ex("太累了", "too tired / so tired"),
        ex("太贵了", "too expensive"),
        ex("太晚了", "too late"),
        ex("压力太大了", "too much stress"),
      ],
    },
    {
      title: "睡得好吗？",
      titleEn: "Do you sleep well? — 得 complement",
      pattern: "V + 得 + description",
      body: [
        "得 describes how the action is performed: 睡得好, 跑得快, 说得很好. This is different from result 睡好.",
      ],
      examples: [
        ex("你睡得好吗？", "Do you sleep well?"),
        ex("你中文说得好吗？", "Do you speak Chinese well?"),
        ex("他跑得快吗？", "Does he run fast?"),
      ],
    },
    {
      title: "睡好 vs 睡得好",
      titleEn: "result vs manner",
      body: [
        "睡好: 好 is a result complement — you successfully got a good sleep (often about one night). 睡得好: 得好 describes how you sleep, including a usual habit.",
      ],
      compare: [
        { label: "one night / result", hanzi: "昨天没睡好。", en: "I didn’t sleep well last night." },
        { label: "habit / manner", hanzi: "你平常睡得好吗？", en: "Do you normally sleep well?" },
      ],
    },
    {
      title: "平常",
      titleEn: "normally / usually",
      body: [
        "平常 = in ordinary circumstances. At this level you can treat 平常 and 平时 as very similar. 通常 is another “usually.”",
      ],
      examples: [
        ex("你平常几点睡觉？", "What time do you normally go to bed?"),
        ex("我平常六点起床。", "I normally get up at six."),
      ],
      compare: [
        { label: "similar", hanzi: "平时", en: "normally" },
        { label: "similar", hanzi: "通常", en: "usually" },
      ],
    },
  ]
}

function notesForNotEnoughSleep(): MiniLesson[] {
  return [
    {
      title: "总是觉得……",
      titleEn: "I always feel like…",
      pattern: "总是觉得 + thought / feeling",
      body: ["A very useful conversational frame for a recurring feeling, not a one-off event."],
      examples: [
        ex("我总是觉得很累。", "I always feel tired."),
        ex("我总是觉得时间不够。", "I always feel like there isn’t enough time."),
        ex("我总是觉得我忘了什么。", "I always feel like I’ve forgotten something."),
      ],
    },
    {
      title: "不足 versus 不够",
      titleEn: "insufficient vs not enough",
      body: [
        "不足 is a little more formal: 睡眠不足 sounds like something a doctor might say. 不够 is everyday: 我睡得不够, 钱不够, 时间不够.",
      ],
      compare: [
        { label: "more formal", hanzi: "睡眠不足", en: "insufficient sleep" },
        { label: "conversational", hanzi: "我睡得不够。", en: "I don’t sleep enough." },
        { label: "same idea", hanzi: "经验不足 / 准备不足", en: "not enough experience / preparation" },
      ],
    },
  ]
}

function notesForSunAdvice(): MiniLesson[] {
  return [
    {
      title: "我听……说",
      titleEn: "I heard [someone] say…",
      pattern: "我听 + person + 说……",
      body: [
        "Name the source when it matters. If the person is not important, use 听说…… instead.",
      ],
      compare: [
        { label: "named source", hanzi: "我听医生说…", en: "I heard the doctor say…" },
        { label: "hearsay", hanzi: "听说明天会下雨。", en: "I heard it’ll rain tomorrow." },
      ],
      examples: [
        ex("我听老师说，明天没有课。", "I heard the teacher say there isn’t class tomorrow."),
        ex("我听朋友说，这家饭店很好吃。", "I heard my friend say this restaurant is very good."),
        ex("听说明天会下雨。", "I heard it’s going to rain tomorrow."),
      ],
    },
    {
      title: "晒太阳",
      titleEn: "get some sun",
      body: [
        "晒 means expose something to sunlight. 晒太阳 is “sit / get out in the sun,” not a word-for-word English calque. Doubling 晒晒 makes it casual and short.",
      ],
      examples: [
        ex("出去晒晒太阳吧。", "Go outside and get some sun."),
        ex("早上晒太阳对身体很好。", "Getting morning sunlight is good for your body."),
      ],
    },
    {
      title: "多 + verb",
      titleEn: "do more of something",
      pattern: "多 + V    少 + V",
      body: [
        "早上多晒太阳 means “get more sunlight in the morning,” not “lots of sun” as a thing. Doctors love this pair: 多运动，少吃甜的.",
      ],
      examples: [
        ex("多喝水。", "Drink more water."),
        ex("多休息。", "Rest more."),
        ex("少喝咖啡。", "Drink less coffee."),
        ex("少玩手机。", "Use your phone less."),
      ],
    },
    {
      title: "可以帮助……",
      titleEn: "can help…",
      pattern: "A 可以帮助 B",
      body: ["可以帮助睡眠 = can help with sleep. The helper can be a thing, a habit, or a person."],
      examples: [
        ex("运动可以帮助睡眠。", "Exercise can help with sleep."),
        ex("多晒太阳可以帮助睡眠。", "Getting more sun can help with sleep."),
        ex("每天练习可以帮助你进步。", "Practicing every day can help you improve."),
      ],
    },
  ]
}

function notesForNotEnoughSun(): MiniLesson[] {
  return [
    {
      title: "太阳晒不够 / Verb + 不够",
      titleEn: "not get enough sun — potential / degree",
      pattern: "V + 不够",
      body: [
        "我可能真的太阳晒不够 is a tight spoken form. You may also hear 晒太阳晒得不够 or 晒太阳晒得太少了. The useful everyday pattern is Verb + 不够: 睡不够, 吃不够, 看不够.",
      ],
      examples: [
        ex("我大概真的太阳晒不够。", "I probably don’t get enough sun."),
        ex("我每天都睡不够。", "I never get enough sleep. (same 不够)"),
        ex("看不够", "can’t watch enough of it"),
      ],
    },
    {
      title: "都 as “generally / every time”",
      titleEn: "habitual 都",
      body: [
        "你都睡得好吗？ Here 都 is not simply “all.” It gives a “generally / usually / every time” feeling.",
      ],
      compare: [
        { label: "plain", hanzi: "你睡得好吗？", en: "Do you sleep well?" },
        { label: "habitual", hanzi: "你都睡得好吗？", en: "Do you generally sleep well?" },
      ],
      examples: [ex("你每天都几点起床？", "What time do you usually get up every day?")],
    },
  ]
}

function notesForSleepThrough(): MiniLesson[] {
  return [
    {
      title: "几乎都是……",
      titleEn: "almost always…",
      pattern: "几乎都是……",
      body: [
        "几乎 = almost / nearly. 几乎都是5分钟内睡着 = I almost always fall asleep within five minutes. A high-value combo is 几乎每天都……",
      ],
      examples: [
        ex("我几乎每天都运动。", "I exercise almost every day."),
        ex("他几乎从来不迟到。", "He’s almost never late."),
        ex("我们几乎到了。", "We’re almost there."),
      ],
    },
    {
      title: "时间 + 内",
      titleEn: "within…",
      pattern: "number + time unit + 内",
      body: ["5分钟内 = within five minutes. Also 以内."],
      examples: [
        ex("十分钟内", "within ten minutes"),
        ex("一个小时内", "within one hour"),
        ex("三天内", "within three days"),
        ex("我十分钟内回来。", "I’ll be back within ten minutes."),
      ],
    },
    {
      title: "睡着 / 睡不着",
      titleEn: "fall asleep / can’t fall asleep",
      pattern: "睡着  zháo     睡不着",
      body: [
        "睡着 does not simply mean “sleep.” It means successfully entering sleep. 着 is zháo, not zhe. 睡觉 = go to bed / sleep; 睡着 = fall asleep. Once you know 睡着, you get 睡不着 (can’t fall asleep) and 睡得着 (able to fall asleep).",
      ],
      examples: [
        ex("我十一点睡觉。", "I go to bed at 11."),
        ex("我十二点才睡着。", "I didn’t actually fall asleep until midnight."),
        ex("昨天晚上我睡不着。", "I couldn’t fall asleep last night."),
        ex("这么吵，你睡得着吗？", "It’s so noisy — can you actually fall asleep?"),
      ],
      compare: [
        { label: "go to bed", hanzi: "睡觉", en: "sleep / go to bed" },
        { label: "succeed", hanzi: "睡着", en: "fall asleep" },
        { label: "fail", hanzi: "睡不着", en: "can’t fall asleep" },
      ],
    },
    {
      title: "一觉到天亮",
      titleEn: "sleep straight through until morning",
      pattern: "一觉（睡）到天亮",
      body: [
        "Memorize this as a chunk. 觉 is jiào: a period of sleep. A fuller version is 一觉睡到天亮; 睡 can drop in speech. 到 here means “all the way until.”",
      ],
      examples: [
        ex("我昨天一觉睡了十个小时。", "Yesterday I slept ten hours straight."),
        ex("我很久没有一觉睡到天亮了。", "I haven’t slept straight through the night in a long time."),
        ex("我今天睡到十点。", "I slept until 10 today."),
        ex("我昨晚一觉睡到天亮。", "Last night I slept straight through until morning."),
      ],
    },
  ]
}

function notesForJealous(): MiniLesson[] {
  return [
    {
      title: "真 + reaction",
      titleEn: "really / so…",
      pattern: "真 + adjective / verb",
      body: ["真 often marks a genuine reaction: 真漂亮, 真好吃, 真可惜, 真羡慕."],
      examples: [
        ex("真漂亮！", "So beautiful!"),
        ex("真好吃！", "So delicious!"),
        ex("真可惜！", "What a shame!"),
        ex("真羡慕你！", "I’m really jealous of you!"),
      ],
    },
    {
      title: "羡慕",
      titleEn: "envy without needing to be bitter",
      body: [
        "Chinese uses 羡慕 where English might say “Lucky you!” or “I wish I could do that.” It is not necessarily the negative feeling of “envy.”",
      ],
      examples: [ex("你每年都去旅行？真羡慕！", "You travel every year? I’m jealous!")],
    },
  ]
}

export const LESSON_1_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "（打呵欠）": notesForYawns(),
  "怎么一大早就打呵欠？": notesForHowCome(),
  "昨天没睡好。": notesForSleepResult(),
  "怎么了？": notesForWhatsWrong(),
  "我做了个恶梦，梦见有人在追我，一直追、一直追，我拼命跑，最后掉进一个山谷。": notesForNightmare(),
  "是不是压力太大了？你平常睡得好吗？": notesForStressSleep(),
  "不太好，总是觉得睡眠不足。": notesForNotEnoughSleep(),
  "我听一个睡眠专家的医生说，早上多晒太阳，可以帮助睡眠。": notesForSunAdvice(),
  "真的吗？我可能真的太阳晒不够。你呢？你都睡得好吗？": notesForNotEnoughSun(),
  "几乎都是5分钟内睡着，一觉到天亮。": notesForSleepThrough(),
  "真羡慕！": notesForJealous(),
}
