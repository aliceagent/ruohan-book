import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_4_6_CORE_VOCAB: VocabItem[] = [
  v("好久不见", "long time no see"),
  v("优秀学生", "outstanding student"),
  v("公司职员", "office worker"),
  v("行销〔营销〕", "marketing"),
  v("名片", "business card"),
  v("外商", "foreign firm"),
  v("后悔", "to regret"),
  v("贸易公司", "trading company"),
  v("班导", "homeroom teacher"),
  v("时光倒流", "time flowing backward"),
  v("调皮", "naughty; mischievous"),
  v("惹生气", "to make (someone) angry"),
  v("探望", "to visit (someone who is ill / elderly)"),
  v("校友会", "alumni gathering"),
]

export const LESSON_4_6_CHUNKS: VocabItem[] = [
  v("真的好久不见了，二十年了", "it really has been a long time — twenty years"),
  v("我记得你以前吉他弹得超好", "I remember you used to play guitar extremely well"),
  v("现在还弹吗", "do you still play?"),
  v("歌偶尔会唱", "I still sing now and then"),
  v("你一直都是优秀学生", "you were always an outstanding student"),
  v("很普通的公司职员而已", "just an ordinary office worker"),
  v("负责行销〔营销〕业务", "in charge of marketing"),
  v("这是我的名片", "here’s my card"),
  v("一点都不普通", "not ordinary at all"),
  v("我真后悔以前没好好学英语", "I really regret I didn’t study English properly"),
  v("你更厉害，自己开公司", "you’re even more impressive — you started a company"),
  v("小贸易公司而已", "just a small trading company"),
  v("如果时光可以倒流", "if time could run backward"),
  v("我一定会对她好一点", "I would definitely treat her better"),
  v("常惹她生气", "often made her angry"),
  v("不知道能不能去探望她", "I wonder if we can go visit her"),
]

export const LESSON_4_6_FAMILY: VocabItem[] = [
  v("记忆", "memory"),
  v("往事", "the past; old times"),
  v("后悔", "regret"),
  v("骄傲", "pride; proud"),
  v("值得纪念", "worth remembering"),
  v("时光倒流", "turn back time"),
  v("墓志铭", "epitaph"),
  v("命名", "to name; naming"),
]

export const LESSON_4_6_PRACTICE: MiniLessonExample[] = [
  ex("真的好久不见了，二十年了！", "It really has been a long time — twenty years!"),
  ex("我记得你以前吉他弹得超好，现在还弹吗？", "I remember you used to play guitar extremely well. Do you still?"),
  ex("不弹了，歌偶尔会唱，跟同事去KTV。", "Not anymore. I still sing now and then — KTV with colleagues."),
  ex("很普通的公司职员而已，负责行销〔营销〕业务。这是我的名片。", "Just an ordinary office worker, in charge of marketing. Here’s my card."),
  ex("外商！一点都不普通！我真后悔以前没好好学英语！", "A foreign firm! Not ordinary at all. I really regret I didn’t study English properly."),
  ex("你更厉害，自己开公司？！", "You’re even more impressive — you started a company?!"),
  ex("如果时光可以倒流，我一定会对她好一点。", "If time could run backward, I would definitely treat her better."),
  ex("我们以前太调皮了，常惹她生气。", "We were too naughty before. We often made her angry."),
]

export const LESSON_4_6_FILL_BLANKS = [
  fb("1", "It really has been a long time — twenty years.", "真的", "了，二十年了！", "好久不见", ["好聚好散", "不好意思", "好不容易"]),
  fb("2", "I remember you used to play guitar extremely well.", "我记得你以前吉他", "。", "弹得超好", ["说得超好", "跑得超快", "长得超像"]),
  fb("3", "Just an ordinary office worker.", "很普通的", "而已。", "公司职员", ["健身教练", "心理师", "面试官"]),
  fb("4", "Here’s my business card.", "这是我的", "。", "名片", ["名片夹", "履历", "成绩单"]),
  fb("5", "Not ordinary at all.", "外商！一点都", "！", "不普通", ["不后悔", "不调皮", "不优秀"]),
  fb("6", "I really regret I didn’t study English properly.", "我真后悔以前没", "英语！", "好好学", ["好好看", "好好吃", "好好唱"]),
  fb("7", "If time could run backward…", "如果", "，我一定会对她好一点。", "时光可以倒流", ["一年没出国", "周末去兜风", "身心平衡"]),
  fb("8", "We often made her angry.", "我们以前太调皮了，常", "。", "惹她生气", ["看透人心", "重修旧好", "放空头脑"]),
]

export const LESSON_4_6_LINE_NOTES: Record<string, MiniLesson[]> = {
  "真的好久不见了，二十年了！": [
    ml("好久不见了", "long time no see", ["真的 + 了 makes the cliché feel earned. 二十年了 is the measure."], {
      examples: [ex("真的好久不见了，二十年了！", "It really has been a long time — twenty years!")],
    }),
  ],
  "是啊，我记得你以前吉他弹得超好，现在还弹吗？": [
    ml("我记得你以前 + V + 得 + complement", "I remember you used to … so well", ["以前 + 得超好. Reunion compliment."], {
      examples: [ex("我记得你以前吉他弹得超好。", "I remember you used to play guitar extremely well.")],
    }),
    ml("现在还 + V + 吗", "do you still…?", ["还 = still. Checks if the old talent survived."]),
  ],
  "不弹了，歌偶尔会唱，跟同事去 KTV。你呢，你一直都是优秀学生，成绩很好，现在在哪工作？": [
    ml("不 + V + 了", "don’t … anymore", ["不弹了 closes the guitar. 偶尔会唱 keeps a leftover."]),
    ml("你一直都是 + role", "you were always…", ["一直都是优秀学生. Then the now-question: 现在在哪工作？"], {
      examples: [ex("你一直都是优秀学生。", "You were always an outstanding student.")],
    }),
  ],
  "很普通的公司职员而已，负责行销〔营销〕业务。这是我的名片。": [
    ml("很普通的……而已", "just an ordinary…", ["而已 talks the job down. Reunion modesty."], {
      pattern: "很普通的 + noun + 而已",
      examples: [ex("很普通的公司职员而已。", "Just an ordinary office worker.")],
    }),
    ml("这是我的名片", "here’s my card", ["Physical move. 行销〔营销〕 is Taiwan / mainland."]),
  ],
  "外商！一点都不普通！我真后悔以前没好好学英语！": [
    ml("一点都不 + adj", "not … at all", ["一点都不普通 rejects the 而已."], {
      examples: [ex("一点都不普通！", "Not ordinary at all!")],
    }),
    ml("我真后悔以前没 + VP", "I really regret I didn’t…", ["后悔 + 没好好学. Classic reunion line."], {
      pattern: "我真后悔以前没 + VP",
      examples: [ex("我真后悔以前没好好学英语！", "I really regret I didn’t study English properly!")],
    }),
  ],
  "你更厉害，自己开公司？！": [
    ml("你更厉害", "you’re even more impressive", ["更 compares after 外商. 自己开公司？！ is shock-praise."]),
  ],
  "小贸易公司而已。": [
    ml("小……而已", "just a small…", ["Same 而已 humility as 普通职员."], {
      examples: [ex("小贸易公司而已。", "Just a small trading company.")],
    }),
  ],
  "听说班导这几年身体不好，来不了。如果时光可以倒流，我一定会对她好一点。": [
    ml("来不了", "can’t make it", ["身体不好，来不了. Potential 不了."]),
    ml("如果时光可以倒流", "if time could run backward", ["Set wish-frame. Then 一定会对她好一点."], {
      examples: [ex("如果时光可以倒流，我一定会对她好一点。", "If time could run backward, I would treat her better.")],
    }),
  ],
  "是啊，我们以前太调皮了，常惹她生气，说不定是几十年来被学生气出病的。": [
    ml("太调皮了", "too naughty", ["调皮 is kid-mischief, not evil."]),
    ml("惹她生气", "make her angry", ["惹 + person + 生气."]),
    ml("气出病", "make (someone) sick from anger", ["被学生气出病. 出 marks the resulting illness. 说不定 hedges the joke."], {
      examples: [ex("说不定是被学生气出病的。", "Maybe students made her ill from anger.")],
    }),
  ],
  "不知道能不能去探望她。": [
    ml("不知道能不能 + V", "I wonder if we can…", ["探望 is visit the ill / elderly. Soft close."], {
      examples: [ex("不知道能不能去探望她。", "I wonder if we can go visit her.")],
    }),
  ],
}

export const LESSON_4_6_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("现在还 + V + 吗", "Do you still…?", ["Reunion check. 还 asks whether the old habit survived."], {
    pattern: "现在还 + V + 吗？",
    examples: [
      ex("现在还弹吗？", "Do you still play?"),
      ex("现在还住在老家吗？", "Do you still live in the old hometown?"),
      ex("现在还联系吗？", "Are you still in touch?"),
    ],
  }),
  ml("……而已", "Just / merely…", ["Talks a success down. 普通职员而已、小公司而已."], {
    pattern: "noun / VP + 而已",
    examples: [
      ex("很普通的公司职员而已。", "Just an ordinary office worker."),
      ex("小贸易公司而已。", "Just a small trading company."),
      ex("偶尔唱唱歌而已。", "I just sing now and then."),
    ],
  }),
  ml("我真后悔以前没 + VP", "I really regret I didn’t…", ["后悔 + 没 + past duty. Reunion English-class regret is the stock example."], {
    pattern: "我真后悔以前没 + VP",
    examples: [
      ex("我真后悔以前没好好学英语！", "I really regret I didn’t study English properly!"),
      ex("我后悔以前没对她好一点。", "I regret I didn’t treat her better."),
      ex("后悔没去探望。", "Regret not going to visit."),
    ],
  }),
  ml("如果时光可以倒流", "If time could run backward", ["A set wish. Follow with 一定会 + counterfactual."], {
    pattern: "如果时光可以倒流，一定 + VP",
    examples: [
      ex("如果时光可以倒流，我一定会对她好一点。", "If time could run backward, I would treat her better."),
      ex("如果时光可以倒流，我想再读一次高中。", "If time could run backward, I’d do high school again."),
      ex("时光不能倒流。", "Time cannot run backward."),
    ],
  }),
  ml("惹 + person + 生气", "Make someone angry", ["惹生气 / 气出病. Kid-to-teacher reunion talk."], {
    pattern: "惹 + person + 生气",
    examples: [
      ex("常惹她生气。", "Often made her angry."),
      ex("别惹妈妈生气。", "Don’t make Mom angry."),
      ex("被学生气出病。", "Made ill from students’ anger."),
    ],
  }),
]
