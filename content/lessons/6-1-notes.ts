import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_6_1_CORE_VOCAB: VocabItem[] = [
  v("万圣节", "Halloween"),
  v("化妆舞会", "costume / masquerade party"),
  v("打扮", "to dress up"),
  v("旗袍", "qipao / cheongsam"),
  v("面具", "mask"),
  v("紧身", "tight-fitting"),
  v("开高衩", "high slit (on a dress)"),
  v("牺牲色相", "to show off one’s looks (self-teasing)"),
  v("大卖场", "hypermarket / big-box store"),
  v("巫婆", "witch"),
  v("仙女", "fairy"),
  v("南瓜装", "pumpkin costume"),
  v("南瓜灯", "jack-o’-lantern"),
  v("场合", "occasion"),
]

export const LESSON_6_1_CHUNKS: VocabItem[] = [
  v("你要打扮成什么", "what are you going to dress as"),
  v("还没想到", "I haven’t thought of it yet"),
  v("有什么就穿什么", "I’ll wear whatever I have"),
  v("可能会穿旗袍戴面具吧", "maybe a qipao and a mask"),
  v("跟平常“不一样”就好了", "just “different from usual” is enough"),
  v("平常不敢穿", "I wouldn’t dare wear it normally"),
  v("只有这种场合敢牺牲色相", "only this kind of occasion I’d dare show off"),
  v("最简单的方法就是去大卖场买一套", "the easiest way is to buy a set at a hypermarket"),
  v("身体就像一个万圣节南瓜灯", "the body is just like a Halloween pumpkin lantern"),
  v("就它了！谢啦", "that’s the one — thanks"),
]

export const LESSON_6_1_FAMILY: VocabItem[] = [
  v("节日庆典", "festival celebration"),
  v("假日", "holiday"),
  v("连假", "long weekend / consecutive holidays"),
  v("连休", "to take consecutive days off"),
  v("请假", "to ask for leave"),
  v("弹性放假", "bridge / flexible holiday"),
  v("嘉年华会", "carnival"),
  v("祭典", "festival rite; matsuri"),
]

export const LESSON_6_1_PRACTICE: MiniLessonExample[] = [
  ex("陈哥家的万圣节化妆舞会，你要打扮成什么？", "Chen-ge’s Halloween costume party — what are you dressing as?"),
  ex("还没想到，你呢？", "Haven’t thought of it yet. You?"),
  ex("我懒得去买，有什么就穿什么，可能会穿旗袍戴面具吧。", "I can’t be bothered to shop. I’ll wear whatever I have — maybe a qipao and a mask."),
  ex("没人说一定要穿得很可怕啊，跟平常“不一样”就好了。", "Nobody said it has to be scary. Just “different from usual” is enough."),
  ex("我那件旗袍是紧身开高衩的，平常不敢穿。", "That qipao of mine is tight with a high slit — I wouldn’t dare wear it normally."),
  ex("最简单的方法就是去大卖场买一套巫婆、仙女、南瓜装什么的。", "The easiest way is to buy a witch, fairy, or pumpkin set at a hypermarket."),
  ex("南瓜装？听起来很可爱！穿起来像南瓜吗？", "A pumpkin costume? That sounds cute! Do you look like a pumpkin in it?"),
  ex("就它了！谢啦！", "That’s the one! Thanks!"),
]

export const LESSON_6_1_FILL_BLANKS = [
  fb("1", "What are you dressing as?", "万圣节化妆舞会，你要", "什么？", "打扮成", ["化妆成", "扮演成", "变成"]),
  fb("2", "I haven’t thought of it yet.", "", "，你呢？", "还没想到", ["还没回家", "还没加班", "还没吃饭"]),
  fb("3", "I’ll wear whatever I have.", "有什么就", "。", "穿什么", ["吃什么", "买什么", "说什么"]),
  fb("4", "Just “different from usual” is enough.", "跟平常“不一样”", "。", "就好了", ["就完了", "就惨了", "就迟了"]),
  fb("5", "Only this kind of occasion I’d dare show off.", "只有这种场合敢", "。", "牺牲色相", ["牺牲睡眠", "牺牲假期", "牺牲薪水"]),
  fb("6", "The easiest way is to buy a set at a hypermarket.", "最简单的方法就是去", "买一套。", "大卖场", ["夜市", "书店", "健身房"]),
  fb("7", "The body is just like a Halloween pumpkin lantern.", "身体就像一个万圣节", "。", "南瓜灯", ["南瓜派", "南瓜汤", "南瓜籽"]),
  fb("8", "That’s the one! Thanks!", "", "！谢啦！", "就它了", ["就算了", "就走了", "就完了"]),
]

export const LESSON_6_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "陈哥家的万圣节化妆舞会，你要打扮成什么？": [
    ml("陈哥家的 + event", "Chen-ge’s …", ["哥 is a friendly older-brother title. The party belongs to his house."]),
    ml("打扮成什么", "dress up as what", ["打扮成 + costume. Halloween opener."], {
      pattern: "打扮成 + N",
      examples: [ex("你要打扮成什么？", "What are you dressing as?")],
    }),
  ],
  "还没想到，你呢？": [
    ml("还没想到", "haven’t thought of it yet", ["A full answer. Then 你呢？ hands it back."], {
      examples: [ex("还没想到，你呢？", "Haven’t thought of it yet. You?")],
    }),
  ],
  "我懒得去买，有什么就穿什么，可能会穿旗袍戴面具吧。": [
    ml("懒得 + V", "can’t be bothered to…", ["懒得去买 = shopping is too much effort."], {
      pattern: "懒得 + V",
      examples: [ex("我懒得去买。", "I can’t be bothered to shop.")],
    }),
    ml("有什么就穿什么", "wear whatever I have", ["A + 就 + A: use what’s on hand. Then a maybe-plan with 吧."]),
  ],
  "旗袍不可怕啊。": [
    ml("N 不可怕啊", "N isn’t scary", ["Pushes back on the Halloween-must-be-scary idea."], {
      examples: [ex("旗袍不可怕啊。", "A qipao isn’t scary.")],
    }),
  ],
  "没人说一定要穿得很可怕啊，跟平常“不一样”就好了，我那件旗袍是紧身开高衩的，平常不敢穿，也大概只有这种场合敢牺牲色相。": [
    ml("没人说一定要…", "nobody said you have to…", ["Kills the rule. Then the real bar: 跟平常“不一样”就好了."], {
      examples: [ex("没人说一定要穿得很可怕啊。", "Nobody said it has to be scary.")],
    }),
    ml("牺牲色相", "show off one’s looks (self-teasing)", ["A joke about daring to look hot. 开高衩 + 平常不敢穿 sets it up."]),
  ],
  "你身材好！我第一次参加，没点子，帮我想一下吧。": [
    ml("你身材好", "you have a great figure", ["Compliment, then a request."]),
    ml("帮我想一下吧", "help me think of something", ["没点子 = no ideas. 一下 softens the ask."], {
      examples: [ex("帮我想一下吧。", "Help me think of something.")],
    }),
  ],
  "如果没有什么特别的衣服，又懒得做的话，最简单的方法就是去大卖场买一套巫婆、仙女、南瓜装什么的。": [
    ml("如果……的话，最简单的方法就是…", "if… the easiest way is…", ["A ready-made plan for people with no costume."], {
      pattern: "如果……的话，最简单的方法就是…",
      examples: [ex("最简单的方法就是去大卖场买一套。", "The easiest way is to buy a set at a hypermarket.")],
    }),
    ml("巫婆、仙女、南瓜装什么的", "a witch, fairy, pumpkin costume, that kind of thing", ["什么的 = etc. A store rack, not a custom build."]),
  ],
  "南瓜装？听起来很可爱！穿起来像南瓜吗？": [
    ml("听起来很 + adj", "sounds…", ["Echoes the name, then a how-it-looks check."], {
      examples: [ex("听起来很可爱！", "That sounds cute!")],
    }),
    ml("穿起来像 + N", "looks like N when worn", ["起来 after 穿 is the result of putting it on."]),
  ],
  "对，身体就像一个万圣节南瓜灯，还有帽子。": [
    ml("就像 + N", "just like…", ["Explains the costume. 还有帽子 adds the accessory."], {
      examples: [ex("身体就像一个万圣节南瓜灯。", "The body is just like a Halloween pumpkin lantern.")],
    }),
  ],
  "就它了！谢啦！": [
    ml("就它了", "that’s the one", ["Decision locked. 谢啦 is casual thanks."], {
      examples: [ex("就它了！谢啦！", "That’s the one! Thanks!")],
    }),
  ],
}

export const LESSON_6_1_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("打扮成 + N", "Dress up as…", ["Costume talk. 成 marks the result look."], {
    pattern: "打扮成 + N",
    examples: [
      ex("你要打扮成什么？", "What are you dressing as?"),
      ex("我想打扮成巫婆。", "I want to dress as a witch."),
      ex("她打扮成南瓜。", "She dressed as a pumpkin."),
    ],
  }),
  ml("懒得 + V", "Can’t be bothered to…", ["Spoken skip. Pair with a fallback plan."], {
    pattern: "懒得 + V",
    examples: [
      ex("我懒得去买。", "I can’t be bothered to shop."),
      ex("又懒得做的话，去大卖场买一套。", "If you can’t be bothered to make one, buy a set."),
      ex("我懒得加班。", "I can’t be bothered to work overtime."),
    ],
  }),
  ml("有 A 就 V A", "Whatever A there is, just V it", ["Use what’s on hand. 有什么就穿什么."], {
    pattern: "有 + N + 就 + V + N",
    examples: [
      ex("有什么就穿什么。", "I’ll wear whatever I have."),
      ex("有什么就吃什么。", "Eat whatever there is."),
      ex("有旗袍就穿旗袍。", "If I’ve got a qipao, I’ll wear the qipao."),
    ],
  }),
  ml("最简单的方法就是…", "The easiest way is…", ["Advice after 如果. Points at the store rack."], {
    pattern: "最简单的方法就是 + VP",
    examples: [
      ex("最简单的方法就是去大卖场买一套。", "The easiest way is to buy a set at a hypermarket."),
      ex("最简单的方法就是戴面具。", "The easiest way is to wear a mask."),
      ex("最简单的方法就是问陈哥。", "The easiest way is to ask Chen-ge."),
    ],
  }),
  ml("就它了", "That’s the one", ["Picks the last option. Close with 谢啦."], {
    pattern: "就它了",
    examples: [
      ex("就它了！谢啦！", "That’s the one! Thanks!"),
      ex("南瓜装？就它了。", "Pumpkin costume? That’s the one."),
      ex("这件旗袍，就它了。", "This qipao — that’s the one."),
    ],
  }),
]
