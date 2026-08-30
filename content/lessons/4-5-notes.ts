import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_5_CORE_VOCAB: VocabItem[] = [
  v("新年新希望", "New Year’s resolution"),
  v("立下", "to set (a resolution / vow)"),
  v("减", "to lose (weight)"),
  v("全马", "full marathon"),
  v("半马", "half marathon"),
  v("还行", "pretty OK; not bad"),
  v("放空", "to empty the mind; zone out"),
  v("纾压", "to relieve stress (Taiwan)"),
  v("达标", "to hit the target"),
  v("陪", "to accompany"),
  v("练跑", "to train running"),
  v("许愿", "to make a wish"),
  v("志向", "ambition; aspiration"),
  v("期望", "expectation"),
]

export const LESSON_4_5_CHUNKS: VocabItem[] = [
  v("今年有没有立下新年新希望", "did you set a New Year’s resolution this year?"),
  v("还是跟去年一样", "still the same as last year"),
  v("希望减3公斤", "I hope to lose 3 kilos"),
  v("去年也没成功", "I didn’t succeed last year either"),
  v("3公斤怎么这么难呢", "how can 3 kilos be this hard"),
  v("我想挑战全马", "I want to take on a full marathon"),
  v("你去年只有跑半马", "last year you only ran a half"),
  v("我以为你跑全马了", "I thought you’d already run a full"),
  v("好像还行", "it was pretty OK"),
  v("今年看能不能跑完全马", "this year we’ll see if I can finish a full"),
  v("我完全无法理解跑步的乐趣", "I completely cannot understand the fun of running"),
  v("可以完全放空，很纾压", "you can fully empty your mind — very de-stressing"),
  v("累得半死还纾压咧", "exhausted to death and you call that de-stressing?"),
  v("保证你达标", "I guarantee you’ll hit the target"),
  v("放空肚子就好了", "emptying my stomach is enough"),
]

export const LESSON_4_5_FAMILY: VocabItem[] = [
  v("愿望", "wish"),
  v("许愿", "make a wish"),
  v("新年新希望", "New Year’s resolution"),
  v("志向", "ambition"),
  v("期望", "expectation"),
  v("目标", "goal"),
  v("还愿", "fulfill a vow"),
  v("有志者事竟成", "where there’s a will there’s a way"),
]

export const LESSON_4_5_PRACTICE: MiniLessonExample[] = [
  ex("今年有没有立下“新年新希望”啊？", "Did you set a New Year’s resolution this year?"),
  ex("还是跟去年一样，希望减3公斤，去年也没成功。", "Same as last year: lose 3 kilos. Didn’t succeed last year either."),
  ex("我想挑战全马。", "I want to take on a full marathon."),
  ex("欸？你去年只有跑半马？我以为你跑全马了。", "Wait — last year you only ran a half? I thought you’d done a full."),
  ex("没，去年跑半马，好像还行，今年看能不能跑完全马。", "No. Last year a half, it was pretty OK. This year we’ll see if I can finish a full."),
  ex("我完全无法理解跑步的乐趣。跑步时你们在想什么？", "I completely cannot understand the fun of running. What do you think about while you run?"),
  ex("就是什么都不想，所以可以完全放空，很纾压。", "I think about nothing — so I can fully empty my mind. Very de-stressing."),
  ex("算了，你去跑步放空头脑，我想办法放空肚子就好了。", "Forget it. You go empty your head running. I’ll just find a way to empty my stomach."),
]

export const LESSON_4_5_FILL_BLANKS = [
  fb("1", "Did you set a New Year’s resolution?", "今年有没有立下", "啊？", "新年新希望", ["第一印象", "自我介绍", "开幕优惠"]),
  fb("2", "I hope to lose 3 kilos.", "希望", "3公斤。", "减", ["加", "跑", "练"]),
  fb("3", "I want to take on a full marathon.", "我想挑战", "。", "全马", ["半马", "全职", "全班"]),
  fb("4", "I thought you’d already run a full marathon.", "", "你跑全马了。", "我以为", ["我听说", "我记得", "我希望"]),
  fb("5", "It was pretty OK.", "去年跑半马，好像", "。", "还行", ["还好意思", "还可以", "还没"]),
  fb("6", "You can fully empty your mind — very de-stressing.", "可以完全放空，很", "。", "纾压", ["加班", "预约", "探听"]),
  fb("7", "Exhausted to death and you call that de-stressing?", "累得半死还纾压", "？", "咧", ["呢", "吧", "啊"]),
  fb("8", "Emptying my stomach is enough.", "我想办法", "就好了。", "放空肚子", ["放空头脑", "放空自己", "放空时间"]),
]

export const LESSON_4_5_LINE_NOTES: Record<string, MiniLesson[]> = {
  "今年有没有立下“新年新希望”啊？": [
    ml("立下 + 希望 / 志愿", "set (a resolution)", ["立下 is a bit formal-vow. 新年新希望 is the set phrase. 啊 keeps it casual."], {
      examples: [ex("今年有没有立下新年新希望啊？", "Did you set a New Year’s resolution this year?")],
    }),
  ],
  "还是跟去年一样，希望减 3 公斤，去年也没成功，哎，3 公斤怎么这么难呢？你呢？": [
    ml("还是跟去年一样", "still the same as last year", ["还是 = unchanged. Then the recycled goal."]),
    ml("也没成功", "didn’t succeed either", ["也 pairs this year with last year’s failure."]),
    ml("怎么这么难呢", "how can it be this hard", ["怎么这么 + adj + 呢 is a complaint, not a real how."], {
      examples: [ex("3公斤怎么这么难呢？", "How can 3 kilos be this hard?")],
    }),
  ],
  "我想挑战全马。": [
    ml("挑战 + event", "take on…", ["挑战全马 = attempt a full marathon. Short, ambitious."], {
      examples: [ex("我想挑战全马。", "I want to take on a full marathon.")],
    }),
  ],
  "哇！欸？你去年只有跑半马？我以为你跑全马了。": [
    ml("欸？", "wait / huh?", ["Correction particle. 只有跑半马 = only a half."]),
    ml("我以为 + 了", "I thought (wrongly) that…", ["以为 marks a false belief. 了 = I had you down as already done."], {
      pattern: "我以为 + VP + 了",
      examples: [ex("我以为你跑全马了。", "I thought you’d already run a full marathon.")],
    }),
  ],
  "没，去年跑半马，好像还行，今年看能不能跑完全马。": [
    ml("好像还行", "it was pretty OK", ["还行 = acceptable / not bad. 好像 hedges the boast."]),
    ml("看能不能 + V", "we’ll see if I can…", ["今年看能不能跑完全马. 跑完 = finish the distance."], {
      examples: [ex("今年看能不能跑完全马。", "This year we’ll see if I can finish a full.")],
    }),
  ],
  "我完全无法理解跑步的乐趣，跑步到底有什么乐趣？跑步时你们在想什么？": [
    ml("完全无法理解 + noun", "completely cannot understand…", ["无法理解 + 的乐趣. Then 到底有什么 repeats the attack."], {
      examples: [ex("我完全无法理解跑步的乐趣。", "I completely cannot understand the fun of running.")],
    }),
    ml("到底有什么 + noun", "what … is there, really?", ["到底 pushes for a real answer."]),
  ],
  "就是什么都不想，所以可以完全放空，很纾压。": [
    ml("什么都不想", "think about nothing", ["就是 answers 在想什么 with a refusal to think."]),
    ml("放空 / 纾压", "empty the mind / de-stress", ["放空 is zone-out. 纾压 is Taiwan for relieve pressure (大陆 解压)."], {
      examples: [ex("可以完全放空，很纾压。", "You can fully empty your mind — very de-stressing.")],
    }),
  ],
  "什么啊！累得半死还纾压咧？": [
    ml("什么啊", "what?! / come on", ["Rejects the last line."]),
    ml("还 + claim + 咧", "and you still call that…?", ["咧 is a Taiwan scoff particle. 累得半死是程度补语."], {
      examples: [ex("累得半死还纾压咧？", "Exhausted to death and you call that de-stressing?")],
    }),
  ],
  "你不是想减 3 公斤？陪我去练跑，保证你达标。": [
    ml("你不是想 + VP？", "didn’t you want to…?", ["Uses their goal as leverage."]),
    ml("保证你 + result", "I guarantee you’ll…", ["达标 = hit the mark. 陪我去练跑 is the pitch."], {
      examples: [ex("保证你达标。", "I guarantee you’ll hit the target.")],
    }),
  ],
  "算了，你去跑步放空头脑，我想办法放空肚子就好了。": [
    ml("算了", "forget it", ["Gives up the argument."]),
    ml("放空头脑 / 放空肚子", "empty the head / empty the stomach", ["A joke parallel. 就好了 = that’s enough for me."], {
      examples: [ex("我想办法放空肚子就好了。", "I’ll just find a way to empty my stomach.")],
    }),
  ],
}

export const LESSON_4_5_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("我以为 + 了", "I thought (but I was wrong)", ["以为 is a mistaken belief. Pair with the correction: 没，其实…"], {
    pattern: "我以为 + VP + 了",
    examples: [
      ex("我以为你跑全马了。", "I thought you’d already run a full marathon."),
      ex("我以为你不来了。", "I thought you weren’t coming."),
      ex("我以为今年会成功。", "I thought this year would work."),
    ],
  }),
  ml("看能不能 + V", "We’ll see if I can…", ["A soft 2024-style goal. Not a promise."], {
    pattern: "今年看能不能 + V",
    examples: [
      ex("今年看能不能跑完全马。", "This year we’ll see if I can finish a full."),
      ex("看能不能减3公斤。", "We’ll see if I can lose 3 kilos."),
      ex("看能不能达标。", "We’ll see if I can hit the target."),
    ],
  }),
  ml("完全无法 + V", "Completely cannot…", ["无法理解 / 无法接受. 完全 turns it into a comic wall."], {
    pattern: "完全无法 + V",
    examples: [
      ex("我完全无法理解跑步的乐趣。", "I completely cannot understand the fun of running."),
      ex("我完全无法早起。", "I completely cannot get up early."),
      ex("他完全无法放空。", "He completely cannot empty his mind."),
    ],
  }),
  ml("放空 / 纾压", "Empty out / de-stress", ["放空头脑、放空肚子. 纾压 is the Taiwan wellness verb."], {
    pattern: "放空 + noun",
    examples: [
      ex("可以完全放空，很纾压。", "You can fully empty your mind — very de-stressing."),
      ex("你去跑步放空头脑。", "You go empty your head running."),
      ex("我想办法放空肚子。", "I’ll find a way to empty my stomach."),
    ],
  }),
  ml("你不是想 + VP？", "Didn’t you want to…?", ["Reuse the other person’s wish as a hook."], {
    pattern: "你不是想 + VP？",
    examples: [
      ex("你不是想减3公斤？", "Didn’t you want to lose 3 kilos?"),
      ex("你不是想出国？", "Didn’t you want to go abroad?"),
      ex("你不是想放空？", "Didn’t you want to zone out?"),
    ],
  }),
]
