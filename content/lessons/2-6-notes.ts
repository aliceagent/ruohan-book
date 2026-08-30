import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_6_CORE_VOCAB: VocabItem[] = [
  v("法国人", "French person"),
  v("语言交换", "language exchange"),
  v("通过", "to pass (a test / level)"),
  v("程度", "level; proficiency"),
  v("考过", "to have taken (an exam)"),
  v("大概", "about; roughly"),
  v("中级", "intermediate"),
  v("水平", "level; standard"),
  v("第二外语", "second foreign language"),
  v("退步", "to slip; to get rusty"),
  v("法语", "French (the language)"),
  v("自学", "to teach oneself"),
  v("语伴", "language partner"),
  v("好棒", "awesome; well done"),
  v("有空", "to have free time"),
  v("周末", "weekend"),
]

export const LESSON_2_6_CHUNKS: VocabItem[] = [
  v("想学中文", "want to learn Chinese"),
  v("可以跟你语言交换吗", "can I do a language exchange with you?"),
  v("我刚通过A2", "I just passed A2"),
  v("你的中文程度怎么样", "how’s your Chinese?"),
  v("我没考过", "I haven’t taken the exam"),
  v("大概中级水平", "about intermediate"),
  v("你在哪学的中文呢", "where did you learn Chinese?"),
  v("大学时第二外语", "second foreign language in college"),
  v("很久没用，退步了", "haven’t used it in ages — I’ve gotten rusty"),
  v("我自学的", "I taught myself"),
  v("没有语伴", "I don’t have a language partner"),
  v("说得不好", "I don’t speak it well"),
  v("一星期一次", "once a week"),
  v("一人30分钟怎么样", "how about 30 minutes each?"),
  v("30分钟好短", "30 minutes is pretty short"),
  v("我周末比较有空", "I’m freer on weekends"),
  v("那就每周日的这个时间吧", "then let’s do this time every Sunday"),
]

export const LESSON_2_6_FAMILY: VocabItem[] = [
  v("学外语", "learn a foreign language"),
  v("学中文", "learn Chinese"),
  v("语言交换", "language exchange"),
  v("语伴", "language partner"),
  v("自学", "self-study"),
  v("第二外语", "second foreign language"),
  v("程度", "level"),
  v("水平", "level / standard"),
  v("中级水平", "intermediate level"),
  v("通过", "pass (a level)"),
  v("考过", "have taken the exam"),
  v("退步了", "gotten rusty / slipped"),
]

export const LESSON_2_6_PRACTICE: MiniLessonExample[] = [
  ex("你好，我是法国人，想学中文，可以跟你语言交换吗？", "Hi, I’m French and I want to learn Chinese. Can I do a language exchange with you?"),
  ex("我刚通过A2，你的中文程度怎么样？", "I just passed A2. How’s your Chinese?"),
  ex("我没考过，大概中级水平。", "I haven’t taken a test. About intermediate."),
  ex("你在哪学的中文呢？大学时第二外语。", "Where did you learn Chinese? Second foreign language in college."),
  ex("很久没用，退步了。", "I haven’t used it in a long time. I’ve gotten rusty."),
  ex("我自学的，没有语伴，说得不好。", "I taught myself. I don’t have a language partner, so I don’t speak well."),
  ex("那我们一星期一次，一人30分钟怎么样？", "How about once a week, 30 minutes each?"),
  ex("好啊，我周末比较有空。那就每周日的这个时间吧！", "Sure, I’m freer on weekends. Then let’s do this time every Sunday!"),
]

export const LESSON_2_6_FILL_BLANKS = [
  fb("1", "Can I do a language exchange with you?", "可以跟你", "吗？", "语言交换", ["互相帮助", "一起吃饭", "交换电话"]),
  fb("2", "I just passed A2.", "我刚", "A2。", "通过", ["经过", "参加", "考试"]),
  fb("3", "About intermediate level.", "大概", "。", "中级水平", ["初级水平", "高级水平", "入门水平"]),
  fb("4", "Where did you learn Chinese?", "你", "中文呢？", "在哪学的", ["在哪看的", "什么时候学", "跟谁学的"]),
  fb("5", "I haven’t used it in a long time — I’ve gotten rusty.", "很久没用，", "。", "退步了", ["进步了", "毕业了", "忘记了"]),
  fb("6", "I taught myself.", "我", "，没有语伴。", "自学的", ["自学了", "自己学", "学过的"]),
  fb("7", "How about once a week, 30 minutes each?", "那我们", "，一人30分钟怎么样？", "一星期一次", ["一天一次", "一个月一次", "一星期两次"]),
  fb("8", "Then let’s do this time every Sunday.", "", "每周日的这个时间吧！", "那就", ["那么", "然后", "所以"]),
]

export const LESSON_2_6_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你好，我是法国人，想学中文，可以跟你语言交换吗？": [
    ml("我是 + nationality", "I’m…", ["我是法国人 = I’m French. 人 after the country is the default identity: 美国人、日本人、台湾人。"], {
      examples: [ex("我是法国人。", "I’m French."), ex("她是日本人。", "She’s Japanese.")],
    }),
    ml("想学中文", "want to learn Chinese", ["想 + V is a soft want. 学中文 / 学外语 is the study verb, not 读 here."]),
    ml("跟你语言交换", "do a language exchange with you", ["跟 + person + 语言交换. 可以……吗 turns it into a polite ask."], {
      pattern: "可以跟你 + V 吗",
      examples: [ex("可以跟你语言交换吗？", "Can I do a language exchange with you?"), ex("可以跟你练习吗？", "Can I practice with you?")],
    }),
  ],
  "你好，可以。我刚通过A2，你的中文程度怎么样？": [
    ml("刚通过", "just passed", ["刚 + V = just now / freshly done. 通过A2 is pass the CEFR A2 level. No space: 通过A2。"], {
      pattern: "刚 + V",
      examples: [ex("我刚通过A2。", "I just passed A2."), ex("他刚考完。", "He just finished the exam.")],
    }),
    ml("程度怎么样", "how’s your level?", ["程度 is proficiency. 你的中文程度怎么样？ is the standard level-check."], {
      examples: [ex("你的法语程度怎么样？", "How’s your French?")],
    }),
    ml("A2", "CEFR A2", ["European framework level. Spoken as A2, written tight against 通过: 刚通过A2。"]),
  ],
  "我没考过，大概中级水平。": [
    ml("没考过", "haven’t taken the exam", ["没 + V + 过 = no experience of that exam. Different from 没通过 (took it, failed)."], {
      examples: [ex("我没考过HSK。", "I’ve never taken the HSK.")],
    }),
    ml("大概 + estimate", "about…", ["大概中级水平 hedges: I guess intermediate, no certificate."], {
      examples: [ex("大概中级水平。", "About intermediate."), ex("大概半小时。", "About half an hour.")],
    }),
    ml("中级水平", "intermediate level", ["水平 and 程度 both mean level. 初级 / 中级 / 高级 is the usual three-step scale."]),
  ],
  "你在哪学的中文呢？": [
    ml("在哪学的", "where did you learn it?", ["在哪 + V + 的 looks back at the place the learning happened. 的 marks the past fact."], {
      pattern: "在哪 + V + 的",
      examples: [ex("你在哪学的中文？", "Where did you learn Chinese?"), ex("这件衣服在哪买的？", "Where did you buy this?")],
    }),
    ml("呢", "and…? / what about…", ["Soft follow-up. 你在哪学的中文呢？ is warmer than a bare 吗。"]),
  ],
  "大学时第二外语，很久没用，退步了。你呢？你的法语在哪学的？": [
    ml("大学时 + noun", "back in college…", ["时 after a period: 大学时、小时候、高中时. Then the role: 第二外语。"], {
      examples: [ex("大学时第二外语。", "Second foreign language in college."), ex("小时候学过钢琴。", "I studied piano as a kid.")],
    }),
    ml("第二外语", "second foreign language", ["Required extra language at university, not the major. Often rusty later."]),
    ml("很久没用，退步了", "haven’t used it in ages — rusty", ["很久没 + V, then 退步了 as the result. Opposite of 进步了。"], {
      pattern: "很久没 + V，退步了",
      examples: [ex("很久没用，退步了。", "Haven’t used it in ages — I’ve gotten rusty."), ex("很久没练，退步了。", "Haven’t practiced in ages — I’ve slipped.")],
    }),
    ml("你呢？", "what about you?", ["Hands the same question back. Then 你的法语在哪学的？ recycles 在哪学的。"]),
  ],
  "我自学的，没有语伴，说得不好。": [
    ml("自学的", "taught myself", ["自学 = self-study. Sentence-final 的 frames it as the way it happened: 我自学的。"], {
      examples: [ex("我自学的。", "I taught myself."), ex("他是自学的。", "He’s self-taught.")],
    }),
    ml("语伴", "language partner", ["The person you swap languages with. 没有语伴 explains why speaking is weak."]),
    ml("说得不好", "don’t speak well", ["V + 得 + complement. 说得不好 is modest; pair with 说得很好。"], {
      pattern: "V + 得 + adj",
      examples: [ex("说得不好。", "I don’t speak well."), ex("说得很流利。", "Speaks very fluently.")],
    }),
  ],
  "自学？好棒！那我们一星期一次，一人30分钟怎么样？": [
    ml("好棒", "awesome", ["Warm praise. Echo 自学？ then 好棒！ — you did that on your own? Nice."], {
      examples: [ex("自学？好棒！", "Self-taught? Awesome!")],
    }),
    ml("一星期一次", "once a week", ["Duration + 一次 = frequency. 一星期一次、一个月两次。"], {
      pattern: "一 + period + 一次",
      examples: [ex("一星期一次。", "Once a week."), ex("一个月两次。", "Twice a month.")],
    }),
    ml("一人30分钟怎么样", "how about 30 minutes each?", ["一人 + time is a per-person split. 怎么样 softens the plan into a suggestion. No space: 一人30分钟。"], {
      pattern: "一人 + time + 怎么样",
      examples: [ex("一人30分钟怎么样？", "How about 30 minutes each?"), ex("一人15分钟好吗？", "15 minutes each, okay?")],
    }),
  ],
  "45分钟也可以，30分钟好短。": [
    ml("也可以", "…is also fine", ["Counter-offer: 45分钟也可以. Keep the number tight: 45分钟, 30分钟。"], {
      examples: [ex("明天也可以。", "Tomorrow’s also fine.")],
    }),
    ml("好短", "pretty short", ["好 + adj is spoken ‘really / pretty’. 30分钟好短 = 30 minutes is pretty short."], {
      examples: [ex("这条路好长。", "This road is really long.")],
    }),
  ],
  "好啊，我周末比较有空。": [
    ml("好啊", "sure / okay", ["Bright yes. Opens the door to the schedule."]),
    ml("比较有空", "freer / more available", ["比较 + adj softens: not ‘totally free’, just freer than weekdays. 有空 is have time."], {
      examples: [ex("我周末比较有空。", "I’m freer on weekends."), ex("晚上比较有空。", "I’m freer in the evening.")],
    }),
  ],
  "那就每周日的这个时间吧！": [
    ml("那就…吧", "then let’s just…", ["那就 locks the plan after both sides agree. 吧 makes it a joint decision, not an order."], {
      pattern: "那就 + plan + 吧",
      examples: [ex("那就每周日的这个时间吧！", "Then let’s do this time every Sunday!"), ex("那就明天吧。", "Then tomorrow, then.")],
    }),
    ml("每周日的这个时间", "this time every Sunday", ["每 + day + 的这个时间 pins a recurring slot. 周日 is Sunday."], {
      examples: [ex("每周三晚上。", "Every Wednesday evening.")],
    }),
  ],
}

export const LESSON_2_6_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("跟你语言交换", "Do a language exchange with you", ["跟 + person + 语言交换. Wrap with 可以……吗 to ask. The opening move of this lesson."], {
    pattern: "可以跟你 + 语言交换 + 吗",
    examples: [
      ex("可以跟你语言交换吗？", "Can I do a language exchange with you?"),
      ex("我想跟你语言交换。", "I’d like to do a language exchange with you."),
      ex("可以跟你练习口语吗？", "Can I practice speaking with you?"),
    ],
  }),
  ml("刚通过", "Just passed", ["刚 + V is freshly done. 通过 + level / exam: 刚通过A2, 刚通过考试. No extra space before A2."], {
    pattern: "刚 + 通过 + level",
    examples: [
      ex("我刚通过A2。", "I just passed A2."),
      ex("她刚通过驾照考试。", "She just passed her driving test."),
      ex("他刚通过面试。", "He just got through the interview."),
    ],
  }),
  ml("在哪学的", "Where did you learn it?", ["在哪 + V + 的 asks where a past action happened. 的 marks it as a fact already done."], {
    pattern: "在哪 + V + 的",
    examples: [
      ex("你在哪学的中文呢？", "Where did you learn Chinese?"),
      ex("你的法语在哪学的？", "Where did you learn French?"),
      ex("这碗面在哪吃的？", "Where did you have this noodle soup?"),
    ],
  }),
  ml("很久没用，退步了", "Haven’t used it — gotten rusty", ["很久没 + V, then 退步了 as the result. Skills fade. Opposite: 进步了。"], {
    pattern: "很久没 + V，退步了",
    examples: [
      ex("很久没用，退步了。", "Haven’t used it in ages — I’ve gotten rusty."),
      ex("很久没说，退步了。", "Haven’t spoken it in ages — I’ve slipped."),
      ex("很久没练钢琴，退步了。", "Haven’t practiced piano in ages — I’ve gone backwards."),
    ],
  }),
  ml("一星期一次 / 一人30分钟怎么样", "Once a week, 30 minutes each?", ["Frequency (一星期一次) plus a per-person split (一人30分钟), then 怎么样 to propose. Close with 那就…吧。"], {
    pattern: "一星期一次，一人 + time + 怎么样",
    examples: [
      ex("一星期一次，一人30分钟怎么样？", "Once a week, 30 minutes each — how about that?"),
      ex("两星期一次，一人45分钟怎么样？", "Once every two weeks, 45 minutes each?"),
      ex("那就每周日的这个时间吧！", "Then let’s do this time every Sunday!"),
    ],
  }),
]
