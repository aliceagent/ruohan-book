import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_3_3_CORE_VOCAB: VocabItem[] = [
  v("模拟求职面试", "mock job interview"),
  v("贵公司", "your company (honorific)"),
  v("数位〔数字〕", "digital"),
  v("行销〔营销〕", "marketing"),
  v("热情", "passion; enthusiasm"),
  v("社群媒体", "social media (Taiwan 社群)"),
  v("成效", "results; effectiveness"),
  v("贡献", "to contribute; contribution"),
  v("创意", "creativity; a creative idea"),
  v("工作目标", "work target / goal"),
  v("充实自己", "to improve / enrich oneself"),
  v("缺点", "weakness; shortcoming"),
  v("简报", "presentation (Taiwan)"),
  v("训练课", "training class"),
  v("创业历史", "founding story / company history"),
  v("职位", "position; post"),
  v("特质", "trait; quality"),
  v("面试官", "interviewer"),
]

export const LESSON_3_3_CHUNKS: VocabItem[] = [
  v("为什么我们公司要用你而不是其他人", "why should we hire you and not someone else?"),
  v("对……领域充满热情及经验", "full of passion and experience in the … field"),
  v("行销〔营销〕人员", "marketing person"),
  v("提升了……24% 的成效", "raised … results by 24%"),
  v("贡献自己的创意与热情", "contribute my creativity and passion"),
  v("如果一直达不到工作目标", "if I keep missing the target"),
  v("寻找有效方法", "look for methods that work"),
  v("充实自己，勇敢尝试", "upskill myself and try bravely"),
  v("你觉得你的缺点是什么", "what do you think your weakness is?"),
  v("简报还做得不够好", "my presentations still aren’t good enough"),
  v("上了很多简报训练课", "took a lot of presentation-training classes"),
  v("创业历史让我很感动", "the founding story really moved me"),
  v("文化与风格跟我个人的态度非常相似", "the culture and style are very like my own attitude"),
  v("对于我们公司或这个职位，你有什么问题", "do you have any questions about us or this role?"),
  v("有什么您正在寻找的特质与能力", "is there a trait or skill you’re looking for"),
  v("是在我身上没看到的吗", "that you haven’t seen in me?"),
]

export const LESSON_3_3_FAMILY: VocabItem[] = [
  v("应征", "apply for (a job)"),
  v("面试", "interview"),
  v("职位", "position"),
  v("上司", "boss; supervisor"),
  v("直属上司", "direct supervisor"),
  v("福利", "benefits"),
  v("成就", "achievement"),
  v("领导力", "leadership"),
  v("管理风格", "management style"),
  v("职业生涯规划", "career planning"),
  v("调职", "job transfer"),
]

export const LESSON_3_3_PRACTICE: MiniLessonExample[] = [
  ex("为什么我们公司要用你而不是其他人？", "Why should our company hire you rather than someone else?"),
  ex("贵公司需要对数位〔数字〕领域充满热情及经验的行销〔营销〕人员。", "Your company needs marketers with passion and experience in the digital field."),
  ex("我成功地提升了公司社群媒体广告24%的成效。", "I successfully raised the company’s social-media ad results by 24%."),
  ex("如果一直达不到工作目标时，我会寻找有效方法，充实自己，勇敢尝试。", "If I keep missing the target, I’ll look for methods that work, upskill, and try bravely."),
  ex("我简报还做得不够好，所以最近上了很多简报训练课。", "My presentations still aren’t good enough, so I’ve been taking a lot of presentation-training classes lately."),
  ex("贵公司的创业历史让我很感动。", "Your company’s founding story really moved me."),
  ex("对于我们公司或这个职位，你有什么问题？", "Do you have any questions about our company or this role?"),
  ex("有什么您正在寻找的特质与能力，是在我身上没看到的吗？", "Is there a trait or skill you’re looking for that you haven’t seen in me?"),
]

export const LESSON_3_3_FILL_BLANKS = [
  fb("1", "Why should we hire you rather than someone else?", "为什么我们公司要用你", "其他人？", "而不是", ["而且还是", "而且不是", "但是是"]),
  fb("2", "I raised social-media ad results by 24%.", "我成功地提升了公司社群媒体广告24%的", "。", "成效", ["成绩", "成功", "效果图"]),
  fb("3", "If I keep missing the work target…", "如果一直", "工作目标时，你会怎么办？", "达不到", ["看得到", "做得到", "听得到"]),
  fb("4", "I’ll upskill myself and try bravely.", "寻找有效方法，", "，勇敢尝试。", "充实自己", ["放弃自己", "批评自己", "介绍自己"]),
  fb("5", "My presentations still aren’t good enough.", "我", "还做得不够好。", "简报", ["报告书", "履历", "面试"]),
  fb("6", "So I’ve been taking a lot of presentation-training classes.", "所以最近上了很多简报", "。", "训练课", ["选修课", "补习班", "家教"]),
  fb("7", "Your company’s founding story really moved me.", "贵公司的创业历史让我很", "。", "感动", ["感冒", "感动过", "动手"]),
  fb("8", "Is there something you’re looking for that you haven’t seen in me?", "有什么您正在寻找的特质与能力，是在我身上", "的吗？", "没看到", ["没听到", "没想到", "没做到"]),
]

export const LESSON_3_3_LINE_NOTES: Record<string, MiniLesson[]> = {
  "为什么我们公司要用你而不是其他人？": [
    ml("为什么要用你而不是其他人", "why you, not someone else?", ["用你 = hire / use you. 而不是 contrasts two options. Classic interview opener."], {
      pattern: "为什么 + VP1 + 而不是 + VP2 / noun",
      examples: [
        ex("为什么要用你而不是其他人？", "Why hire you rather than someone else?"),
        ex("为什么选这家而不是那家？", "Why this company rather than that one?"),
      ],
    }),
  ],
  "贵公司需要对数位〔数字〕领域充满热情及经验的行销〔营销〕人员。在我之前的工作中，我成功地提升了公司社群媒体广告 24% 的成效。因此，我很希望也可以在这里贡献自己的创意与热情。": [
    ml("贵公司", "your company (honorific)", ["贵 + institution is polite interview register: 贵公司、贵校. Never 你的公司 in this slot."], {
      examples: [ex("贵公司需要什么样的人？", "What kind of person does your company need?")],
    }),
    ml("对……充满热情及经验", "full of passion and experience in…", ["对 + field + 充满热情. 及 is a formal ‘and’ pairing 热情 and 经验."], {
      pattern: "对 + field + 充满热情",
      examples: [ex("对数位领域充满热情。", "Full of passion for the digital field.")],
    }),
    ml("数位〔数字〕 / 行销〔营销〕", "digital / marketing", ["Taiwan 数位、行销; mainland notes 数字、营销 in 〔〕. Same jobs, two word-sets."]),
    ml("提升了……的成效", "raised the results of…", ["提升 + number + 的成效 is résumé math. 社群媒体 is Taiwan for social media (mainland 社交媒体)."], {
      examples: [ex("提升了24%的成效。", "Raised results by 24%.")],
    }),
    ml("因此，我很希望也可以……", "therefore I very much hope I can also…", ["因此 is a written hinge. 也可以在这里贡献 copies the last job onto this one."]),
  ],
  "如果一直达不到工作目标时，你会怎么办？": [
    ml("如果一直 + 不 + result + 时", "if you keep failing to…", ["一直 + 达不到 = still can’t reach, ongoing. 时 after the if-clause is a bit formal / written."], {
      pattern: "如果一直 + 不 + V + 时，……？",
      examples: [ex("如果一直达不到工作目标时，你会怎么办？", "If you keep missing the target, what will you do?")],
    }),
    ml("你会怎么办", "what will you do?", ["怎么办 asks for a method, not a feeling. Interviewers want a process."]),
  ],
  "我会花更多的时间，去观察现象、寻找有效方法，充实自己，勇敢尝试。": [
    ml("花更多的时间去 + V", "spend more time to…", ["花 + time + 去 + purpose. Then a list: 观察、寻找、充实、尝试."], {
      examples: [ex("我会花更多的时间去找方法。", "I’ll spend more time looking for a method.")],
    }),
    ml("充实自己", "enrich / upskill yourself", ["充实自己 is interview-safe for study, practice, take a course — fill in the gap yourself."]),
    ml("勇敢尝试", "try bravely", ["Two-character closer. 尝试 = attempt; 勇敢 makes it sound like growth, not recklessness."]),
  ],
  "你觉得你的缺点是什么？": [
    ml("你的缺点是什么", "what’s your weakness?", ["缺点 is the interview noun. 你觉得 softens it so it isn’t a courtroom question."], {
      examples: [ex("你觉得你的缺点是什么？", "What do you think your weakness is?")],
    }),
  ],
  "我简报还做得不够好，所以最近上了很多简报训练课。": [
    ml("还 + V + 得 + 不够 + adj", "still not … enough", ["还 marks the gap is current. 做得不够好 is a safe weakness — fixable skill, not character."], {
      pattern: "还 + V + 得 + 不够 + adj",
      examples: [ex("我简报还做得不够好。", "My presentations still aren’t good enough.")],
    }),
    ml("所以最近上了很多……课", "so lately I’ve been taking a lot of … classes", ["Weakness + 所以 + concrete fix. 简报 is Taiwan for a slide talk; 训练课 is a training class."], {
      examples: [ex("所以最近上了很多简报训练课。", "So lately I’ve taken a lot of presentation-training classes.")],
    }),
  ],
  "为什么想来我们公司？": [
    ml("为什么想来 + place", "why do you want to come to…?", ["想来 = want to come (join). Shorter than 为什么想应征."], {
      examples: [ex("为什么想来我们公司？", "Why do you want to come to our company?")],
    }),
  ],
  "因为贵公司的创业历史让我很感动，还有贵公司的文化与风格跟我个人的态度非常相似，都是热爱帮助他人解决问题。": [
    ml("让我很感动", "really moved me", ["让 + person + 感动. 创业历史 is the founding story, not last quarter’s numbers."], {
      examples: [ex("这段历史让我很感动。", "This history really moved me.")],
    }),
    ml("A 跟 B 非常相似", "A is very similar to B", ["跟…相似. 文化与风格 pairs with 个人的态度 — company fit in one sentence."], {
      pattern: "A 跟 B + 非常相似",
      examples: [ex("你们的风格跟我的态度非常相似。", "Your style is very similar to my attitude.")],
    }),
    ml("都是热爱 + VP", "both are passionate about…", ["都是 points back to 文化 / 风格 and 态度. 热爱帮助他人解决问题 is the shared value."]),
  ],
  "对于我们公司或这个职位，你有什么问题？": [
    ml("对于 A 或 B，你有什么问题", "regarding A or B, what questions do you have?", ["对于 marks the topic. Interviewers hand the floor back with 你有什么问题？"], {
      pattern: "对于 + topic，你有什么问题？",
      examples: [ex("对于这个职位，你有什么问题？", "What questions do you have about this role?")],
    }),
  ],
  "有什么您正在寻找的特质与能力，是在我身上没看到的吗？": [
    ml("您正在寻找的 + noun", "that you are looking for", ["您 is the polite interviewer ‘you’. 正在寻找的特质与能力 is a noun phrase: the traits you’re currently seeking."], {
      examples: [ex("您正在寻找什么样的人？", "What kind of person are you looking for?")],
    }),
    ml("是在我身上没看到的吗", "that you haven’t seen in me?", ["在我身上 = on me / in me. A bold closer: tell me the gap. 没看到的吗 expects a real answer."], {
      examples: [ex("有什么是在我身上没看到的吗？", "Is there something you haven’t seen in me?")],
    }),
  ],
}

export const LESSON_3_3_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("而不是", "rather than / instead of", ["VP1 而不是 VP2 (or noun) contrasts two options. Stronger and cleaner than 不是…是… in a why-you question."], {
    pattern: "VP / noun + 而不是 + noun",
    examples: [
      ex("为什么要用你而不是其他人？", "Why hire you rather than someone else?"),
      ex("我想应征这个职位而不是那个。", "I want to apply for this role, not that one."),
      ex("我们看成效而不是年资。", "We look at results, not seniority."),
    ],
  }),
  ml("对……充满热情", "full of passion for…", ["对 + field + 充满热情. Add 及经验 when you also want to claim experience in the same breath."], {
    pattern: "对 + noun + 充满热情",
    examples: [
      ex("对数位领域充满热情。", "Full of passion for the digital field."),
      ex("我对数位行销充满热情。", "I’m passionate about digital marketing."),
      ex("他对这份工作充满热情。", "He’s passionate about this job."),
    ],
  }),
  ml("如果一直 + 不 + result", "if you keep failing to…", ["一直 makes the failure ongoing. 达不到工作目标 is HR language for missing KPIs."], {
    pattern: "如果一直 + 不 + V",
    examples: [
      ex("如果一直达不到工作目标，你会怎么办？", "If you keep missing the target, what will you do?"),
      ex("如果一直找不到方法，我就去问同事。", "If I still can’t find a method, I’ll ask a colleague."),
      ex("如果一直加班，身体会受不了。", "If the overtime never stops, the body can’t take it."),
    ],
  }),
  ml("还 + V + 得 + 不够 + adj", "still not … enough", ["A safe weakness frame: the skill is in progress. Pair with 所以 + what you’re doing about it."], {
    pattern: "还 + V + 得 + 不够 + adj",
    examples: [
      ex("我简报还做得不够好。", "My presentations still aren’t good enough."),
      ex("中文还说得不够流利。", "I still don’t speak Chinese fluently enough."),
      ex("我简报还做得不够专业。", "My presentations still aren’t professional enough."),
    ],
  }),
  ml("对于 + topic，你有什么问题？", "Regarding…, what questions do you have?", ["对于 hands over the topic. Learn the candidate’s reverse question too: 有什么您正在寻找的……是在我身上没看到的吗？"], {
    pattern: "对于 + topic，你有什么问题？",
    examples: [
      ex("对于这个职位，你有什么问题？", "What questions do you have about this role?"),
      ex("对于加班，你有什么看法？", "What’s your view on overtime?"),
      ex("对于我们公司，你还想了解什么？", "What else do you want to know about us?"),
    ],
  }),
]
