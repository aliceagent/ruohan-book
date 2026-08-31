import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_6_3_CORE_VOCAB: VocabItem[] = [
  v("肯德基", "KFC"),
  v("炸鸡", "fried chicken"),
  v("圣诞节", "Christmas"),
  v("口号", "slogan"),
  v("行销〔营销〕", "marketing"),
  v("预订", "to pre-order"),
  v("全家桶", "family bucket"),
  v("夸张", "over the top; exaggerated"),
  v("赠品", "free gift with purchase"),
  v("断舍离", "declutter (dan-sha-ri)"),
  v("全鸡", "whole chicken"),
  v("小家庭", "small nuclear family"),
  v("沙拉", "salad"),
]

export const LESSON_6_3_CHUNKS: VocabItem[] = [
  v("肯德基怎么这么多人", "why are there so many people at KFC"),
  v("他们在排队买炸鸡，过圣诞节", "they’re queuing for fried chicken for Christmas"),
  v("日本人圣诞节吃炸鸡", "Japanese people eat fried chicken at Christmas"),
  v("把“圣诞节就是要吃炸鸡”当作口号", "they used “Christmas means fried chicken” as a slogan"),
  v("两个月前就开始预订", "they start pre-ordering two months ahead"),
  v("每年都为了赠品买炸鸡", "every year he buys fried chicken just for the free gifts"),
  v("超占空间的", "takes up so much space"),
  v("还要断舍离，麻烦", "then you have to declutter — what a hassle"),
  v("我们去买全鸡回家烤吧", "let’s buy a whole chicken and roast it at home"),
  v("你烤鸡，我做蛋糕", "you roast the chicken, I’ll make a cake"),
]

export const LESSON_6_3_FAMILY: VocabItem[] = [
  v("圣诞节", "Christmas"),
  v("圣诞老人", "Santa Claus"),
  v("贺卡", "greeting card"),
  v("装饰", "to decorate; decoration"),
  v("礼物", "gift"),
  v("火鸡", "turkey"),
  v("姜饼人", "gingerbread man"),
  v("点灯", "to light up; illuminations"),
]

export const LESSON_6_3_PRACTICE: MiniLessonExample[] = [
  ex("欸？肯德基怎么这么多人？在排什么啊？", "Eh? Why so many people at KFC? What are they queuing for?"),
  ex("他们在排队买炸鸡，过圣诞节。", "They’re queuing for fried chicken for Christmas."),
  ex("日本人圣诞节吃炸鸡？！", "Japanese people eat fried chicken at Christmas?!"),
  ex("他们把“圣诞节就是要吃炸鸡”当作口号，成功行销〔营销〕。", "They used “Christmas means fried chicken” as a slogan and marketed it well."),
  ex("两个月前就开始预订？夸张！", "Pre-ordering two months ahead? That’s over the top!"),
  ex("每年都为了赠品买炸鸡，我最受不了那个附赠的盘子。", "Every year he buys fried chicken just for the free gifts. I can’t stand those extra plates."),
  ex("不用的东西放在家里还要断舍离，麻烦！", "Keeping unused stuff at home means you have to declutter. What a hassle!"),
  ex("你烤鸡，我做蛋糕！", "You roast the chicken, I’ll make a cake!"),
]

export const LESSON_6_3_FILL_BLANKS = [
  fb("1", "Why so many people at KFC?", "欸？", "怎么这么多人？", "肯德基", ["星巴克", "便利店", "健身房"]),
  fb("2", "They’re queuing for fried chicken for Christmas.", "他们在排队买", "，过圣诞节。", "炸鸡", ["火鸡", "蛋糕", "沙拉"]),
  fb("3", "They used it as a slogan.", "把“圣诞节就是要吃炸鸡”当作", "。", "口号", ["口令", "口音", "口味"]),
  fb("4", "People start pre-ordering family buckets.", "就有人开始预订", "了。", "全家桶", ["全家福", "全鸡", "全套"]),
  fb("5", "That’s over the top!", "两个月前就开始预订？", "！", "夸张", ["夸张化", "夸口", "夸奖"]),
  fb("6", "Every year he buys fried chicken just for the free gifts.", "每年都为了", "买炸鸡。", "赠品", ["奖金", "红包", "压岁钱"]),
  fb("7", "Then you have to declutter.", "不用的东西放在家里还要", "，麻烦！", "断舍离", ["大扫除", "加班", "跨年"]),
  fb("8", "You roast the chicken, I’ll make a cake.", "你烤鸡，我", "！", "做蛋糕", ["做沙拉", "做饺子", "做汤圆"]),
]

export const LESSON_6_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "欸？肯德基怎么这么多人？在排什么啊？": [
    ml("欸？", "eh?", ["Street surprise. Then 怎么这么多人."]),
    ml("在排什么啊", "what are they queuing for", ["啊 keeps it casual."], {
      examples: [ex("在排什么啊？", "What are they queuing for?")],
    }),
  ],
  "他们在排队买炸鸡，过圣诞节。": [
    ml("在排队买 + N", "queuing to buy…", ["Purpose of the line. 过圣诞节 is why."], {
      examples: [ex("他们在排队买炸鸡，过圣诞节。", "They’re queuing for fried chicken for Christmas.")],
    }),
  ],
  "日本人圣诞节吃炸鸡？！": [
    ml("N + festival + 吃 + food？！", "N eat food at festival?!", ["Shock question. ？！ stacks disbelief."], {
      examples: [ex("日本人圣诞节吃炸鸡？！", "Japanese people eat fried chicken at Christmas?!")],
    }),
  ],
  "听说是肯德基在 1974 年推出的。他们把“圣诞节就是要吃炸鸡”当作口号，成功行销〔营销〕。现在每到圣诞节的前两个月，就有人开始预订全家桶了。": [
    ml("把 X 当作口号", "use X as a slogan", ["Keep spaces around 1974. 行销〔营销〕 is the Taiwan / Mainland pair."], {
      pattern: "把 + slogan + 当作口号",
      examples: [ex("把“圣诞节就是要吃炸鸡”当作口号。", "Use “Christmas means fried chicken” as a slogan.")],
    }),
    ml("预订全家桶", "pre-order a family bucket", ["每到……前两个月 sets how early."]),
  ],
  "两个月前就开始预订？夸张！": [
    ml("就开始 + V？夸张", "they already V? over the top", ["Echoes the time, then the verdict."], {
      examples: [ex("两个月前就开始预订？夸张！", "Pre-ordering two months ahead? That’s over the top!")],
    }),
  ],
  "我老公很无聊，每年都为了赠品买炸鸡，我最受不了那个附赠的盘子，超占空间的。": [
    ml("为了赠品买 + N", "buy N just for the free gift", ["动机是赠品，不是鸡."], {
      examples: [ex("每年都为了赠品买炸鸡。", "Every year he buys fried chicken just for the free gifts.")],
    }),
    ml("超占空间的", "takes up so much space", ["超 + V. 附赠的盘子 is the leftover object."]),
  ],
  "真的是！不用的东西放在家里还要断舍离，麻烦！": [
    ml("真的是", "tell me about it", ["Agrees, then the cost of keeping junk."]),
    ml("还要断舍离", "and then you have to declutter", ["断舍离 is the Japanese dan-sha-ri loan. 麻烦！ closes it."], {
      examples: [ex("还要断舍离，麻烦！", "Then you have to declutter — what a hassle!")],
    }),
  ],
  "我们去买全鸡回家烤吧，平常超市都买不到整只鸡。": [
    ml("去买 N 回家 + V 吧", "let’s buy N and V it at home", ["A counter-plan to KFC."], {
      examples: [ex("我们去买全鸡回家烤吧。", "Let’s buy a whole chicken and roast it at home.")],
    }),
    ml("都买不到整只鸡", "you can’t even find a whole chicken", ["平常 supermarket limit."]),
  ],
  "日本小家庭，整只鸡吃不完吧。你烤鸡，我做蛋糕！": [
    ml("吃不完吧", "probably can’t finish it", ["小家庭 = small household size."]),
    ml("你 V，我 V", "you V, I’ll V", ["Splits the menu."], {
      pattern: "你 + V，我 + V",
      examples: [ex("你烤鸡，我做蛋糕！", "You roast the chicken, I’ll make a cake!")],
    }),
  ],
  "好，再做个沙拉就可以了。": [
    ml("再做个 N 就可以了", "and just make a N and we’re done", ["就可以了 = that’s enough of a meal."], {
      examples: [ex("再做个沙拉就可以了。", "And just make a salad and we’re done.")],
    }),
  ],
}

export const LESSON_6_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("把 X 当作口号", "Use X as a slogan", ["Marketing grammar. X is often a quote."], {
    pattern: "把 + X + 当作口号",
    examples: [
      ex("把“圣诞节就是要吃炸鸡”当作口号。", "Use “Christmas means fried chicken” as a slogan."),
      ex("他们把这句话当作口号。", "They used that line as a slogan."),
      ex("别把加班当作口号。", "Don’t use overtime as a slogan."),
    ],
  }),
  ml("为了 N 买 N", "Buy N just for N", ["Motive first. 赠品 / 红包 / 优惠."], {
    pattern: "为了 + N + 买 + N",
    examples: [
      ex("为了赠品买炸鸡。", "Buy fried chicken just for the free gifts."),
      ex("为了盘子买全家桶。", "Buy a family bucket just for the plate."),
      ex("别为了赠品买没用的东西。", "Don’t buy junk just for the free gift."),
    ],
  }),
  ml("还要断舍离", "And then you have to declutter", ["Loanword 断舍离. Pair with 麻烦."], {
    pattern: "还要 + V，麻烦",
    examples: [
      ex("还要断舍离，麻烦！", "Then you have to declutter — what a hassle!"),
      ex("还要大扫除，麻烦。", "Then you have to deep-clean — a hassle."),
      ex("还要排队，麻烦。", "Then you have to queue — a hassle."),
    ],
  }),
  ml("你 V，我 V", "You V, I’ll V", ["Split a meal plan. Equal work."], {
    pattern: "你 + V，我 + V",
    examples: [
      ex("你烤鸡，我做蛋糕！", "You roast the chicken, I’ll make a cake!"),
      ex("你买鸡，我买菜。", "You buy the chicken, I’ll buy the vegetables."),
      ex("你排队，我去订位。", "You queue, I’ll get a table."),
    ],
  }),
  ml("就可以了", "And that’s enough", ["Closes the menu. 再做个沙拉就可以了."], {
    pattern: "再 + V + 就可以了",
    examples: [
      ex("再做个沙拉就可以了。", "And just make a salad and we’re done."),
      ex("再买个蛋糕就可以了。", "And just buy a cake and we’re done."),
      ex("再点个汤就可以了。", "And just order a soup and we’re done."),
    ],
  }),
]
