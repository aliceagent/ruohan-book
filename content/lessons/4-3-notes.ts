import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_3_CORE_VOCAB: VocabItem[] = [
  v("真假", "no way; for real?"),
  v("脸书", "Facebook (Taiwan)"),
  v("网友", "online friend"),
  v("一见钟情", "love at first sight"),
  v("登记结婚", "to register a marriage"),
  v("网恋", "online romance"),
  v("远距", "long-distance"),
  v("闪电结婚", "flash marriage"),
  v("大颗", "bold; big-hearted (Taiwan)"),
  v("坠入情网", "to fall in love"),
  v("直觉", "intuition"),
  v("合送", "to give a joint gift"),
  v("防寒", "cold-weather (gear)"),
  v("探听", "to sound out; to fish for info"),
  v("闪婚", "flash marriage"),
  v("闺蜜", "best girl friend"),
]

export const LESSON_4_3_CHUNKS: VocabItem[] = [
  v("你看到了吗", "did you see it?"),
  v("小文要结婚了", "Xiaowen is getting married"),
  v("蛤？真假？！", "huh? for real?!"),
  v("昨天她的脸书你没看吗", "didn’t you see her Facebook yesterday?"),
  v("不是才在网上认识一年多而已", "didn’t they only meet online a year or so ago?"),
  v("两人一见钟情，立刻去登记结婚", "they fell in love at first sight and registered the marriage at once"),
  v("网恋、异国、远距、闪电结婚全都来了", "online, cross-country, long-distance, flash marriage — the full set"),
  v("心脏也真够大颗", "their hearts are really bold"),
  v("如果人类坠入情网", "if humans fall in love"),
  v("我相信她的直觉啦", "I trust her intuition"),
  v("我们要合送什么礼物", "what gift should we give together"),
  v("送个什么防寒的", "send some kind of cold-weather thing"),
  v("先约她出来聊聊", "ask her out to chat first"),
  v("再探听她可能会需要什么", "then sound out what she might need"),
]

export const LESSON_4_3_FAMILY: VocabItem[] = [
  v("恋爱", "to be in love; romance"),
  v("约会", "a date; to date"),
  v("一见钟情", "love at first sight"),
  v("告白", "to confess (love)"),
  v("网恋", "online romance"),
  v("远距离恋爱", "long-distance relationship"),
  v("闪电结婚", "flash marriage"),
  v("秀恩爱", "to show off being in love"),
  v("失恋", "to be dumped; heartbreak"),
  v("暗恋", "secret crush"),
]

export const LESSON_4_3_PRACTICE: MiniLessonExample[] = [
  ex("你看到了吗？小文要结婚了！", "Did you see? Xiaowen is getting married!"),
  ex("蛤？真假？！", "Huh? For real?!"),
  ex("不是才在网上认识一年多而已？", "Didn’t they only meet online a year or so ago?"),
  ex("两人一见钟情，立刻去登记结婚。", "They fell in love at first sight and registered the marriage at once."),
  ex("网恋、异国、远距、闪电结婚全都来了！", "Online, cross-country, long-distance, flash marriage — the full set!"),
  ex("她爸妈心脏也真够大颗！", "Her parents’ hearts are really bold!"),
  ex("如果人类坠入情网，大脑判断功能会降低。", "If humans fall in love, the brain’s judgment drops."),
  ex("我看先约她出来聊聊吧！然后我们再探听她可能会需要什么。", "Let’s ask her out to chat first. Then we can sound out what she might need."),
]

export const LESSON_4_3_FILL_BLANKS = [
  fb("1", "Huh? For real?!", "蛤？", "？！", "真假", ["真好", "真的", "真慢"]),
  fb("2", "Didn’t you see her Facebook yesterday?", "昨天她的", "你没看吗？", "脸书", ["履历", "简报", "考卷"]),
  fb("3", "They fell in love at first sight.", "两人", "，立刻去登记结婚。", "一见钟情", ["重修旧好", "成家立业", "料事如神"]),
  fb("4", "Online, cross-country, long-distance, flash marriage — the full set.", "网恋、异国、远距、闪电结婚", "！", "全都来了", ["都没来", "先来了", "才来了"]),
  fb("5", "Their hearts are really bold.", "她爸妈心脏也真够", "！", "大颗", ["大胆", "大方", "大只"]),
  fb("6", "If humans fall in love…", "如果人类", "，大脑判断功能会降低。", "坠入情网", ["看透人心", "身心平衡", "独立思考"]),
  fb("7", "What gift should we give together?", "我们要", "什么礼物的？", "合送", ["合买", "合租", "合作"]),
  fb("8", "Then sound out what she might need.", "然后我们再", "她可能会需要什么。", "探听", ["打听不到", "介绍", "预约"]),
]

export const LESSON_4_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你看到了吗？小文要结婚了！": [
    ml("你看到了吗", "did you see (it)?", ["Gossip opener. 了 = the news is already out."]),
    ml("要结婚了", "is getting married (soon)", ["要 + V + 了 is imminent change."], {
      examples: [ex("小文要结婚了！", "Xiaowen is getting married!")],
    }),
  ],
  "蛤？真假？！": [
    ml("蛤？", "huh?", ["Taiwan 蛤 is disbelief, longer than 啊. Pair with 真假？！"]),
    ml("真假", "for real?", ["True or fake — spoken shock, not a logic test."], {
      examples: [ex("蛤？真假？！", "Huh? For real?!")],
    }),
  ],
  "昨天她的脸书你没看吗？跟她的网友，挪威人。": [
    ml("脸书", "Facebook", ["Taiwan brand name. Topic-comment: 昨天她的脸书 / 你没看吗？"]),
    ml("跟她的网友，挪威人", "with her online friend — a Norwegian", ["Apposition after the comma: who the spouse is."]),
  ],
  "挪威网友？不是才在网上认识一年多而已？": [
    ml("不是才……而已", "isn’t it only…?", ["才 + short time + 而已 = that’s all. Disbelief at the speed."], {
      pattern: "不是才 + VP + 而已？",
      examples: [ex("不是才在网上认识一年多而已？", "Didn’t they only meet online a year or so ago?")],
    }),
  ],
  "对啊，听说他上星期飞来台湾跟她见面，两人一见钟情，立刻去登记结婚，好像马上要一起去挪威了。": [
    ml("听说 + chain", "I heard…", ["听说 opens the gossip report. Then 一见钟情 → 立刻 → 好像马上."]),
    ml("一见钟情", "love at first sight", ["Four-character spark. 立刻去登记结婚 is the legal next beat."], {
      examples: [ex("两人一见钟情，立刻去登记结婚。", "They fell in love at first sight and registered at once.")],
    }),
    ml("好像马上要 + V + 了", "seems they’re about to…", ["好像 hedges rumor; 马上要……了 is imminent."]),
  ],
  "哇！太浪漫了，网恋、异国、远距、闪电结婚全都来了！她爸妈心脏也真够大颗！": [
    ml("A、B、C 全都来了", "the full set of A, B, C", ["List + 全都来了 = every trope at once."], {
      examples: [ex("网恋、异国、远距、闪电结婚全都来了！", "Online, cross-country, long-distance, flash marriage — all of it!")],
    }),
    ml("心脏也真够大颗", "hearts are really bold", ["Taiwan: 大颗 = gutsy. Parents letting a 闪婚 happen."]),
  ],
  "科学家说如果人类坠入情网，大脑判断功能会降低。不过我相信她的直觉啦。我是来问你我们要合送什么礼物的？": [
    ml("坠入情网", "fall into the love-net", ["Literary-ish 坠入 + 情网. The science line is a setup for 不过."]),
    ml("不过我相信……啦", "but I trust…", ["啦 softens loyalty to the friend."]),
    ml("我是来问你……的", "the (real) reason I called is to ask…", ["是来 + purpose + 的. Gossip was the warmup; 合送 is the ask."], {
      pattern: "我是来 + VP + 的",
      examples: [ex("我是来问你我们要合送什么礼物的？", "I called to ask what gift we should give together.")],
    }),
  ],
  "挪威啊？感觉很冷，送个什么防寒的？": [
    ml("感觉很 + adj", "feels pretty…", ["Place → climate → gift idea. 送个什么 + kind."], {
      examples: [ex("送个什么防寒的？", "Send some kind of cold-weather thing?")],
    }),
  ],
  "防寒的在当地买就好了。我看先约她出来聊聊吧！": [
    ml("在当地买就好了", "just buy it there", ["就好了 = that’s enough / no need."]),
    ml("我看先 + VP + 吧", "I say we first…", ["我看 = I reckon. 先约她出来聊聊 before buying."], {
      examples: [ex("我看先约她出来聊聊吧！", "I say we ask her out to chat first!")],
    }),
  ],
  "对！然后我们再探听她可能会需要什么。": [
    ml("然后……再 + V", "and then (next)…", ["再 sequences the intel step."]),
    ml("探听", "sound out / fish for info", ["Softer than 打听 in this ‘what gift’ plot."], {
      examples: [ex("再探听她可能会需要什么。", "Then sound out what she might need.")],
    }),
  ],
}

export const LESSON_4_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("不是才……而已", "Isn’t it only…?", ["才 + small amount + 而已. Shock that a year online became a wedding."], {
    pattern: "不是才 + VP + 而已？",
    examples: [
      ex("不是才在网上认识一年多而已？", "Didn’t they only meet online a year or so ago?"),
      ex("不是才见面一次而已？", "Didn’t they only meet once?"),
      ex("不是才认识三个月而已？", "Haven’t they only known each other three months?"),
    ],
  }),
  ml("一见钟情", "Love at first sight", ["A set four-character. Often followed by 立刻 / 马上."], {
    pattern: "一见钟情，（立刻 + VP）",
    examples: [
      ex("两人一见钟情，立刻去登记结婚。", "They fell in love at first sight and registered at once."),
      ex("你相信一见钟情吗？", "Do you believe in love at first sight?"),
      ex("他们见面就一见钟情。", "They fell for each other at first sight."),
    ],
  }),
  ml("全都来了", "The full set showed up", ["List tropes, then 全都来了. Spoken summary of a wild story."], {
    pattern: "A、B、C 全都来了",
    examples: [
      ex("网恋、异国、远距、闪电结婚全都来了！", "Online, cross-country, long-distance, flash marriage — all of it!"),
      ex("网恋、异国、闪婚全都来了。", "Online dating, cross-border, flash marriage — the full set."),
      ex("雨、风、迟到全都来了。", "Rain, wind, and being late — all at once."),
    ],
  }),
  ml("我是来……的", "The reason I came / called is…", ["是来 + purpose + 的 names the real agenda after the gossip."], {
    pattern: "我是来 + VP + 的",
    examples: [
      ex("我是来问你我们要合送什么礼物的？", "I called to ask what gift we should give together."),
      ex("我是来跟你商量的。", "I came to talk it over with you."),
      ex("我不是来吵架的。", "I didn’t come to fight."),
    ],
  }),
  ml("先……再……", "First… then…", ["先约出来聊聊，再探听. Same sequencing as Unit 3’s 先看一下，再介绍."], {
    pattern: "先 + V1，再 + V2",
    examples: [
      ex("先约她出来聊聊，再探听她需要什么。", "Ask her out to chat first, then sound out what she needs."),
      ex("先听她说，再决定礼物。", "Listen to her first, then decide the gift."),
      ex("先见面，再谈结婚。", "Meet first, then talk marriage."),
    ],
  }),
]
