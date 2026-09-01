import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_3_2_CORE_VOCAB: VocabItem[] = [
  v("心理测验", "psychological / personality quiz"),
  v("三国演义", "Romance of the Three Kingdoms"),
  v("人物", "character; figure"),
  v("传连结", "send (me) the link (Taiwan 连结)"),
  v("做做看", "give it a try"),
  v("敢爱敢恨", "loves and hates without holding back"),
  v("粗鲁莽撞", "rough and reckless"),
  v("算计", "to calculate; to scheme"),
  v("挺准", "pretty accurate"),
  v("冷酷残忍", "cold and cruel"),
  v("生性多疑", "suspicious by nature"),
  v("雄才大略", "great talent and bold vision"),
  v("才智过人", "extraordinarily intelligent"),
  v("料事如神", "uncannily good at predicting things"),
  v("独立思考", "to think independently"),
  v("见解", "view; insight"),
  v("胆识", "courage and judgment"),
  v("人格特质", "personality trait"),
]

export const LESSON_3_2_CHUNKS: VocabItem[] = [
  v("这个心理测验很有意思", "this personality quiz is really interesting"),
  v("你是三国演义中的哪个人物", "which Three Kingdoms character are you?"),
  v("传连结给我", "send me the link"),
  v("我也来做做看", "I’ll try it too"),
  v("敢爱敢恨", "loves and hates out in the open"),
  v("有时粗鲁莽撞，有时懂得算计", "sometimes reckless, sometimes calculating"),
  v("挺准的", "pretty spot-on"),
  v("他冷酷残忍哦", "he’s cold and cruel, you know"),
  v("生性多疑", "suspicious by nature"),
  v("雄才大略、才智过人", "visionary talent, extraordinary mind"),
  v("我要是也料事如神就好了", "if only I could see things coming like that"),
  v("能独立思考，有自己的见解", "can think independently and has their own views"),
  v("有才智，有胆识", "has brains and guts"),
  v("公车〔公交车〕来了", "the bus is here"),
]

export const LESSON_3_2_FAMILY: VocabItem[] = [
  v("人格特质", "personality trait"),
  v("智商", "IQ"),
  v("情商", "EQ"),
  v("财商", "financial intelligence"),
  v("逆境智商", "adversity quotient"),
  v("才智", "talent and intelligence"),
  v("胆识", "courage and judgment"),
  v("领导力", "leadership"),
  v("自信", "self-confidence"),
  v("沟通能力", "communication skill"),
]

export const LESSON_3_2_PRACTICE: MiniLessonExample[] = [
  ex("这个心理测验很有意思——你是三国演义中的哪个人物？", "This personality quiz is fun — which Three Kingdoms character are you?"),
  ex("传连结给我，我也来做做看。", "Send me the link. I’ll try it too."),
  ex("我是张飞，敢爱敢恨，有时粗鲁莽撞，有时懂得算计。", "I’m Zhang Fei: I love and hate out in the open — sometimes reckless, sometimes calculating."),
  ex("挺准的！我是司马懿。", "Pretty accurate! I’m Sima Yi."),
  ex("司马懿？！他冷酷残忍哦。", "Sima Yi?! He’s cold and cruel, you know."),
  ex("生性多疑，但是也是一个雄才大略、才智过人的大将。", "Suspicious by nature — but also a general of great vision and extraordinary mind."),
  ex("当然是诸葛亮，他太聪明了，我要是也料事如神就好了。", "Zhuge Liang, of course. He’s so smart. If only I could see things coming like that."),
  ex("我喜欢赵云，他能独立思考，有自己的见解，有才智，有胆识。", "I like Zhao Yun. He thinks for himself, has his own views, brains, and guts."),
]

export const LESSON_3_2_FILL_BLANKS = [
  fb("1", "Send me the link.", "", "给我，我也来做做看。", "传连结", ["打电话", "寄信", "发红包"]),
  fb("2", "I’ll give it a try too.", "我也来", "。", "做做看", ["看看看", "说说看", "想想看"]),
  fb("3", "Pretty spot-on!", "", "！我是司马懿。", "挺准的", ["挺贵的", "挺远的", "挺难的"]),
  fb("4", "He’s cold and cruel, you know.", "他", "哦。", "冷酷残忍", ["温柔慈祥", "粗鲁莽撞", "才智过人"]),
  fb("5", "Suspicious by nature.", "", "，但是也是一个雄才大略的大将。", "生性多疑", ["生性乐观", "生性害羞", "生性懒惰"]),
  fb("6", "If only I could predict things like a prophet.", "我要是也", "就好了。", "料事如神", ["不知不觉", "自言自语", "一心一意"]),
  fb("7", "He can think independently.", "他能", "，有自己的见解。", "独立思考", ["独立生活", "独立完成", "独立出门"]),
  fb("8", "The bus is here!", "", "来了！", "公车〔公交车〕", ["地铁〔地下铁〕", "出租车", "自行车"]),
]

export const LESSON_3_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "这个心理测验很有意思——你是三国演义中的哪个人物？": [
    ml("很有意思——", "really interesting —", ["有意思 is interesting / fun, not ‘meaningful.’ The dash jumps straight into the quiz hook."], {
      examples: [ex("这个心理测验很有意思。", "This personality quiz is really interesting.")],
    }),
    ml("……中的哪个人物", "which character in…", ["X 中的哪个人物 = which figure in X. 三国演义 is the novel title, used as a set."], {
      pattern: "X 中的哪个 + noun",
      examples: [ex("你是三国演义中的哪个人物？", "Which Three Kingdoms character are you?")],
    }),
  ],
  "传连结给我，我也来做做看。": [
    ml("传连结给我", "send me the link", ["传 = pass / send. 连结 is the Taiwan word for link (mainland 链接). Very phone-in-hand."], {
      examples: [ex("把连结传给我。", "Send me the link.")],
    }),
    ml("V + 做看 / 做做看", "give it a try", ["看看、做做看、想想看: reduplicate + 看 = try and see. 我也来 + VP joins the activity."], {
      pattern: "来 + VV + 看",
      examples: [ex("我也来做做看。", "I’ll try it too."), ex("你先试试看。", "You try it first.")],
    }),
  ],
  "我是张飞，敢爱敢恨，有时粗鲁莽撞，有时懂得算计。": [
    ml("敢爱敢恨", "love and hate without holding back", ["敢 + V 敢 + V: dares to do both. A personality slogan, not literal romance advice."]),
    ml("有时 A，有时 B", "sometimes A, sometimes B", ["A tidy contrast pair. Here: reckless vs calculating — both ‘Zhang Fei’ flavors."], {
      pattern: "有时 + A，有时 + B",
      examples: [ex("有时粗鲁莽撞，有时懂得算计。", "Sometimes reckless, sometimes calculating.")],
    }),
    ml("懂得算计", "knows how to calculate / scheme", ["懂得 + skill. 算计 can be clever planning or being calculating — tone depends on the speaker."]),
  ],
  "挺准的！我是司马懿。": [
    ml("挺准的", "pretty accurate", ["挺 + adj + 的 is spoken praise. 准 = on target — the quiz ‘got them right’."], {
      examples: [ex("这个测验挺准的。", "This quiz is pretty accurate.")],
    }),
  ],
  "司马懿？！他冷酷残忍哦。": [
    ml("Name？！", "wait — that person?!", ["Repeat the name + ？！ is disbelief. Then a snap judgment: 冷酷残忍."], {
      examples: [ex("司马懿？！", "Sima Yi?!")],
    }),
    ml("……哦", "you know / I tell you", ["哦 at the end is a warning-flavored particle: he’s cold and cruel, I’m telling you."]),
  ],
  "生性多疑，但是也是一个雄才大略、才智过人的大将。": [
    ml("生性 + adj", "by nature…", ["生性 + trait: inborn temperament. 多疑 = quick to suspect."], {
      pattern: "生性 + adj",
      examples: [ex("他生性多疑。", "He’s suspicious by nature."), ex("她生性乐观。", "She’s optimistic by nature.")],
    }),
    ml("但是也是一个……的 + noun", "but is also a…", ["但是也是 repairs the insult: cruel, yes — and a 雄才大略、才智过人的大将."], {
      examples: [ex("但是也是一个才智过人的大将。", "But he’s also a general of extraordinary mind.")],
    }),
    ml("雄才大略 / 才智过人", "visionary talent / extraordinary intelligence", ["Two four-character compliments often paired in historical talk. 过人 = surpasses other people."]),
  ],
  "三国演义中你最喜欢谁？": [
    ml("X 中你最喜欢谁", "who do you like most in X?", ["Same 中 as the quiz, now about preference, not result."], {
      examples: [ex("三国演义里你最喜欢谁？", "Who’s your favorite in Romance of the Three Kingdoms?")],
    }),
  ],
  "当然是诸葛亮，他太聪明了，我要是也料事如神就好了。": [
    ml("当然是 + name", "X, of course", ["当然是 locks the answer as obvious. Then the reason: 他太聪明了."]),
    ml("我要是也 + VP + 就好了", "if only I could… too", ["要是…就好了 is a wish about an unreal present. 也 copies Zhuge Liang’s skill."], {
      pattern: "我要是也 + VP + 就好了",
      examples: [
        ex("我要是也料事如神就好了。", "If only I could see things coming like that too."),
        ex("我要是也会说中文就好了。", "If only I could speak Chinese too."),
      ],
    }),
    ml("料事如神", "predict things like a god", ["料事 = foresee events. 如神 = as if divine. Stock praise for Zhuge Liang."]),
  ],
  "我喜欢赵云，他能独立思考，有自己的见解，有才智，有胆识。": [
    ml("能独立思考", "can think independently", ["能 + 独立思考 is a modern résumé virtue put on a historical hero."], {
      examples: [ex("他能独立思考。", "He can think independently.")],
    }),
    ml("有自己的见解", "has their own views", ["见解 is a considered opinion, stronger than 想法. 自己的 stresses it’s not copied."]),
    ml("有才智，有胆识", "has brains, has guts", ["Parallel 有 + noun, 有 + noun. 才智 = smarts; 胆识 = courage plus judgment."], {
      pattern: "有 A，有 B",
      examples: [ex("有才智，有胆识。", "Has intelligence and guts.")],
    }),
  ],
  "公车〔公交车〕来了！": [
    ml("X 来了", "X is here / X has come", ["来了 marks arrival right now. 公车 is Taiwan; 〔公交车〕 is the mainland gloss. Scene-ender."], {
      examples: [ex("公车来了！", "The bus is here!"), ex("老师来了！", "The teacher’s here!")],
    }),
  ],
}

export const LESSON_3_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("VV + 看 / 做做看", "Give it a try", ["Reduplicate the verb and add 看: try and see what happens. 做做看、试试看、想想看."], {
    pattern: "来 + VV + 看",
    examples: [
      ex("我也来做做看。", "I’ll try it too."),
      ex("你先试试看。", "Try it first."),
      ex("我们想想看。", "Let’s think it over."),
    ],
  }),
  ml("有时 A，有时 B", "Sometimes A, sometimes B", ["Two sides of one personality. Keep A and B parallel — both adjectives or both verb phrases."], {
    pattern: "有时 + A，有时 + B",
    examples: [
      ex("有时粗鲁莽撞，有时懂得算计。", "Sometimes reckless, sometimes calculating."),
      ex("他有时很严，有时很温柔。", "Sometimes he’s strict, sometimes gentle."),
      ex("我有时加班，有时很早下班。", "Sometimes I work late, sometimes I leave early."),
    ],
  }),
  ml("生性 + trait", "By nature…", ["生性 names temperament as if it came with the person. Useful for 人格特质 talk."], {
    pattern: "生性 + adj / VP",
    examples: [
      ex("生性多疑。", "Suspicious by nature."),
      ex("她生性乐观。", "She’s optimistic by nature."),
      ex("他生性安静。", "He’s quiet by nature."),
    ],
  }),
  ml("要是…就好了", "If only…", ["A wish, not a real plan. 我要是也料事如神就好了 copies someone else’s strength."], {
    pattern: "（我）要是 + VP + 就好了",
    examples: [
      ex("我要是也料事如神就好了。", "If only I could see things coming like that too."),
      ex("要是能早点下班就好了。", "If only we could leave earlier."),
      ex("要是我有他的胆识就好了。", "If only I had his guts."),
    ],
  }),
  ml("有 A，有 B", "Has A, has B", ["Stack virtues without 和: 有才智，有胆识。 Same rhythm as résumé talk and hero praise."], {
    pattern: "有 + noun，有 + noun",
    examples: [
      ex("有才智，有胆识。", "Has brains and guts."),
      ex("有热情，有经验。", "Has passion and experience."),
      ex("有想法，有行动。", "Has ideas and follow-through."),
    ],
  }),
]
