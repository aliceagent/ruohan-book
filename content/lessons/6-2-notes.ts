import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_6_2_CORE_VOCAB: VocabItem[] = [
  v("台湾香肠", "Taiwanese sausage"),
  v("热闹", "lively; bustling"),
  v("家家户户", "every household"),
  v("烤肉", "to barbecue"),
  v("中秋节", "Mid-Autumn Festival"),
  v("大街小巷", "every street and alley"),
  v("邻居", "neighbor"),
  v("噪音", "noise"),
  v("火灾", "fire (disaster)"),
  v("麻糬", "mochi"),
  v("柚子", "pomelo / grapefruit-like citrus"),
  v("文旦", "wendan pomelo"),
  v("看月亮", "to gaze at the moon"),
]

export const LESSON_6_2_CHUNKS: VocabItem[] = [
  v("台湾香肠真好吃", "Taiwanese sausage is so good"),
  v("跟日本不一样", "not the same as Japan"),
  v("台湾南北的香肠口味也不太一样", "north and south Taiwan sausages don’t taste the same either"),
  v("家家户户都在烤肉", "every household is barbecuing"),
  v("大街小巷都是烤肉味", "every street smells of barbecue"),
  v("可惜日本不能这样做", "a pity Japan can’t do this"),
  v("大概怕影响邻居吧", "probably afraid of bothering the neighbors"),
  v("我们也会看月亮、吃圆圆的麻糬", "we also gaze at the moon and eat round mochi"),
  v("也叫文旦，这样吃", "also called wendan — eat it like this"),
  v("hmm～好甜", "hmm — so sweet"),
]

export const LESSON_6_2_FAMILY: VocabItem[] = [
  v("中秋", "Mid-Autumn"),
  v("端午", "Dragon Boat Festival"),
  v("清明", "Qingming / Tomb-Sweeping"),
  v("元宵", "Lantern Festival"),
  v("中元", "Ghost Festival"),
  v("七夕", "Qixi / Chinese Valentine’s"),
  v("国庆", "National Day"),
  v("扫墓", "to sweep tombs"),
]

export const LESSON_6_2_PRACTICE: MiniLessonExample[] = [
  ex("谢谢！谢谢！台湾香肠真好吃！跟日本不一样。", "Thank you! Taiwanese sausage is so good — not the same as Japan."),
  ex("其实台湾南北的香肠口味也不太一样。", "Actually north and south Taiwan sausages don’t taste the same either."),
  ex("好热闹啊！家家户户都在烤肉，而且都在门口！", "So lively! Every household is barbecuing — and right at the door!"),
  ex("每到中秋节，大街小巷都是烤肉味。", "Every Mid-Autumn, every street smells of barbecue."),
  ex("大概怕影响邻居吧，味道、噪音什么的，还有怕火灾。", "Probably afraid of bothering the neighbors — the smell, the noise, and fire."),
  ex("我听说日本也有中秋节，你们在中秋节会做什么？", "I heard Japan has Mid-Autumn too. What do you do?"),
  ex("我们也会看月亮、吃圆圆的麻糬。", "We also gaze at the moon and eat round mochi."),
  ex("来，吃这个柚子，也叫文旦，这样吃。", "Here — try this pomelo, also called wendan. Eat it like this."),
]

export const LESSON_6_2_FILL_BLANKS = [
  fb("1", "Taiwanese sausage is so good.", "台湾香肠真", "！跟日本不一样。", "好吃", ["好看", "好听", "好玩"]),
  fb("2", "Every household is barbecuing.", "家家户户都在", "。", "烤肉", ["扫墓", "加班", "跨年"]),
  fb("3", "Every street smells of barbecue.", "大街小巷都是", "。", "烤肉味", ["鞭炮味", "咖啡味", "桂花味"]),
  fb("4", "A pity Japan can’t do this.", "可惜日本不能", "。", "这样做", ["这样说", "这样穿", "这样睡"]),
  fb("5", "Probably afraid of bothering the neighbors.", "大概怕", "吧。", "影响邻居", ["影响考试", "影响生意", "影响睡眠"]),
  fb("6", "We also gaze at the moon and eat round mochi.", "我们也会看月亮、吃圆圆的", "。", "麻糬", ["月饼", "粽子", "汤圆"]),
  fb("7", "It’s also called wendan.", "来，吃这个柚子，也叫", "。", "文旦", ["凤梨", "荔枝", "芒果"]),
  fb("8", "Hmm — so sweet!", "四国有，hmm～", "！", "好甜", ["好咸", "好辣", "好苦"]),
]

export const LESSON_6_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "谢谢！谢谢！台湾香肠真好吃！跟日本不一样。": [
    ml("真 + adj", "so…", ["Guest praise. 跟日本不一样 is the comparison that opens the topic."], {
      examples: [ex("台湾香肠真好吃！", "Taiwanese sausage is so good!")],
    }),
  ],
  "对，这是台湾特色，其实台湾南北的香肠口味也不太一样。": [
    ml("这是台湾特色", "this is a Taiwan specialty", ["Names the culture, then a north–south split."]),
    ml("南北……也不太一样", "north and south aren’t quite the same either", ["也不太一样 stacks a second difference."], {
      examples: [ex("台湾南北的香肠口味也不太一样。", "North and south Taiwan sausages don’t taste the same either.")],
    }),
  ],
  "好热闹啊！家家户户都在烤肉，而且都在门口！": [
    ml("家家户户都在 + V", "every household is …ing", ["Reduplicated 家户 = the whole neighborhood."], {
      pattern: "家家户户都在 + V",
      examples: [ex("家家户户都在烤肉。", "Every household is barbecuing.")],
    }),
    ml("而且都在门口", "and right at the door", ["而且 adds the surprise location."]),
  ],
  "对啊，这也是台湾特色，每到中秋节，大街小巷都是烤肉味。": [
    ml("每到 + festival", "every time + festival comes", ["Sets a calendar trigger."], {
      pattern: "每到 + festival，……",
      examples: [ex("每到中秋节，大街小巷都是烤肉味。", "Every Mid-Autumn, every street smells of barbecue.")],
    }),
    ml("大街小巷都是 + N", "every street is full of…", ["Smell as city weather."]),
  ],
  "真好玩，可惜日本不能这样做。": [
    ml("可惜 + clause", "a pity that…", ["Praise, then the home-country limit."], {
      examples: [ex("可惜日本不能这样做。", "A pity Japan can’t do this.")],
    }),
  ],
  "日本不能在家门口烤肉吗？为什么？": [
    ml("不能在 + place + V 吗", "you can’t V at + place?", ["Echoes the limit as a check question."], {
      examples: [ex("日本不能在家门口烤肉吗？", "Japan can’t barbecue at the door?")],
    }),
  ],
  "大概怕影响邻居吧，味道、噪音什么的，还有怕火灾。": [
    ml("大概怕 + VP 吧", "probably afraid of…", ["Soft reason. 什么的 lists extras."], {
      pattern: "大概怕 + VP 吧",
      examples: [ex("大概怕影响邻居吧。", "Probably afraid of bothering the neighbors.")],
    }),
    ml("还有怕火灾", "and also fire", ["还有 adds the last fear."]),
  ],
  "我听说日本也有中秋节，你们在中秋节会做什么？": [
    ml("我听说 + clause", "I heard that…", ["Turns the visit into a culture swap."], {
      examples: [ex("我听说日本也有中秋节。", "I heard Japan has Mid-Autumn too.")],
    }),
  ],
  "我们也会看月亮、吃圆圆的麻糬。": [
    ml("也会 + list", "we also…", ["Matches Taiwan’s moon with Japan’s mochi."], {
      examples: [ex("我们也会看月亮、吃圆圆的麻糬。", "We also gaze at the moon and eat round mochi.")],
    }),
  ],
  "来，吃这个柚子，也叫文旦，这样吃。你们有柚子吗？": [
    ml("也叫 + name", "also called…", ["柚子 = 文旦 here. 这样吃 is the demo."], {
      examples: [ex("也叫文旦，这样吃。", "Also called wendan — eat it like this.")],
    }),
  ],
  "我那里没有，四国有，hmm～好甜！": [
    ml("我那里没有，N 有", "we don’t have it there; N does", ["四国 is Shikoku. Then the taste noise."]),
    ml("hmm～好甜", "hmm — so sweet", ["Latin hmm like Unit 4. Taste, not a word."], {
      examples: [ex("hmm～好甜！", "Hmm — so sweet!")],
    }),
  ],
}

export const LESSON_6_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("家家户户都在 + V", "Every household is …ing", ["Neighborhood scene. Pair with 门口 / 大街小巷."], {
    pattern: "家家户户都在 + V",
    examples: [
      ex("家家户户都在烤肉。", "Every household is barbecuing."),
      ex("家家户户都在放鞭炮。", "Every household is setting off firecrackers."),
      ex("家家户户都在扫墓。", "Every household is tomb-sweeping."),
    ],
  }),
  ml("每到 + festival", "Every time the festival comes…", ["Calendar habit. Follow with 都是 / 都会."], {
    pattern: "每到 + festival，……",
    examples: [
      ex("每到中秋节，大街小巷都是烤肉味。", "Every Mid-Autumn, every street smells of barbecue."),
      ex("每到端午，家家户户都包粽子。", "Every Dragon Boat Festival, every household wraps zongzi."),
      ex("每到清明，大家去扫墓。", "Every Qingming, people go tomb-sweeping."),
    ],
  }),
  ml("可惜 + clause", "A pity that…", ["Likes the scene, names the limit."], {
    pattern: "可惜 + S + 不能 + VP",
    examples: [
      ex("可惜日本不能这样做。", "A pity Japan can’t do this."),
      ex("可惜不能在门口烤肉。", "A pity we can’t barbecue at the door."),
      ex("可惜没有柚子。", "A pity there’s no pomelo."),
    ],
  }),
  ml("大概怕 + VP 吧", "Probably afraid of…", ["Soft reason for a rule."], {
    pattern: "大概怕 + VP 吧",
    examples: [
      ex("大概怕影响邻居吧。", "Probably afraid of bothering the neighbors."),
      ex("大概怕火灾吧。", "Probably afraid of fire."),
      ex("大概怕噪音吧。", "Probably afraid of the noise."),
    ],
  }),
  ml("也叫 + name", "Also called…", ["Teach a second name, then demo 这样吃."], {
    pattern: "也叫 + N",
    examples: [
      ex("柚子也叫文旦。", "Pomelo is also called wendan."),
      ex("中秋也叫八月十五。", "Mid-Autumn is also called the 15th of the 8th month."),
      ex("便当也叫盒饭。", "Bento is also called boxed lunch."),
    ],
  }),
]
