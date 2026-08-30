import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_3_1_CORE_VOCAB: VocabItem[] = [
  v("履历〔简历〕", "résumé / CV"),
  v("经历", "experience; what you’ve been through"),
  v("四国语言", "four languages"),
  v("满多", "quite a lot (spoken 满 = 蛮)"),
  v("永久定居", "to settle permanently"),
  v("成家立业", "to start a family and a career"),
  v("台湾企业", "Taiwanese company"),
  v("外商公司", "foreign company"),
  v("介意", "to mind; to object to"),
  v("加班", "to work overtime"),
  v("可以接受", "acceptable; I can live with that"),
  v("商务谈判", "business negotiation"),
  v("不曾", "have never (formal / written-flavored)"),
  v("挑战", "challenge; to take on a challenge"),
  v("机会", "opportunity"),
  v("职业介绍所", "employment agency"),
  v("职业指导师", "career counselor"),
]

export const LESSON_3_1_CHUNKS: VocabItem[] = [
  v("我看过你的履历〔简历〕了", "I’ve looked over your résumé"),
  v("机会应该满多的", "there should be quite a few opportunities"),
  v("为什么想留在台湾呢", "why do you want to stay in Taiwan?"),
  v("希望能永久定居", "I hope I can settle here for good"),
  v("最好能在这里成家立业", "ideally I could start a family and a career here"),
  v("你比较喜欢哪一个", "which one do you prefer?"),
  v("外商公司也可以考虑", "a foreign company is also on the table"),
  v("你介意加班时间吗", "do you mind overtime hours?"),
  v("一个月15个小时内可以接受", "up to 15 hours a month is acceptable"),
  v("你曾经用中文进行商务谈判吗", "have you ever negotiated business in Chinese?"),
  v("以前中文不好，不曾", "my Chinese wasn’t good before, so no"),
  v("我愿意挑战", "I’m willing to take that on"),
  v("你先看一下，我再跟你介绍", "look them over first, then I’ll walk you through them"),
]

export const LESSON_3_1_FAMILY: VocabItem[] = [
  v("找工作", "look for a job"),
  v("履历〔简历〕", "résumé"),
  v("经历", "experience"),
  v("面试", "interview"),
  v("加班", "overtime"),
  v("薪水〔工资〕", "salary / wages"),
  v("外商公司", "foreign company"),
  v("公职", "civil-service / government job"),
  v("创业", "start a business"),
  v("通勤", "commute"),
]

export const LESSON_3_1_PRACTICE: MiniLessonExample[] = [
  ex("我看过你的履历〔简历〕和经历了，机会应该满多的。", "I’ve looked at your résumé and experience — there should be quite a few openings."),
  ex("我喜欢台湾，希望能永久定居，最好能在这里成家立业。", "I like Taiwan and hope to settle here for good. Ideally I’d start a family and a career here."),
  ex("台湾企业和外商公司，你比较喜欢哪一个？", "Taiwanese companies or foreign ones — which do you prefer?"),
  ex("最好是台湾的，外商公司也可以考虑。", "A Taiwanese one would be best. A foreign company is also worth considering."),
  ex("你介意加班时间吗？一个月15个小时内可以接受。", "Do you mind overtime? Up to 15 hours a month is acceptable."),
  ex("你曾经用中文进行商务谈判吗？以前不曾，现在比较好了。", "Have you ever negotiated in Chinese? Not before. It’s better now."),
  ex("好的，我这里有两个机会，你先看一下，我再跟你介绍。", "Alright — I have two openings here. Look them over first, then I’ll introduce them."),
  ex("我不介意加班，可是我介意没有前景。", "I don’t mind overtime, but I do mind a job with no future."),
]

export const LESSON_3_1_FILL_BLANKS = [
  fb("1", "I’ve looked over your résumé.", "我看过你的", "了。", "履历〔简历〕", ["成绩单", "身份证", "通行证"]),
  fb("2", "There should be quite a few opportunities.", "机会应该", "。", "满多的", ["很少的", "刚好的", "没有的"]),
  fb("3", "Ideally I could start a family and a career here.", "最好能在这里", "。", "成家立业", ["成名立万", "安居乐业", "出人头地"]),
  fb("4", "Do you mind overtime hours?", "你介意", "吗？", "加班时间", ["下班时间", "上课时间", "吃饭时间"]),
  fb("5", "Up to 15 hours a month is acceptable.", "一个月15个小时内", "。", "可以接受", ["不能接受", "必须接受", "已经接受"]),
  fb("6", "Have you ever done business negotiations in Chinese?", "你曾经用中文进行", "吗？", "商务谈判", ["家庭作业", "课外活动", "自我介绍"]),
  fb("7", "Not before — my Chinese wasn’t good.", "以前中文不好，", "。", "不曾", ["已经", "正在", "马上"]),
  fb("8", "Look them over first, then I’ll introduce them.", "你先看一下，我", "。", "再跟你介绍", ["先跟你介绍", "不跟你介绍", "已经介绍"]),
]

export const LESSON_3_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "我看过你的履历〔简历〕和经历了，你会四国语言，机会应该满多的。为什么想留在台湾呢？": [
    ml("履历〔简历〕", "résumé / CV", ["履历 is the Taiwan word; 简历 is the mainland note in 〔〕. Same document: work history on paper."], {
      examples: [ex("请把履历寄给我。", "Please email me your résumé.")],
    }),
    ml("满多的", "quite a lot", ["满 here is spoken 蛮: 满多、满好、满有意思. 机会应该满多的 = there ought to be quite a few chances."], {
      pattern: "满 + adj + 的",
      examples: [ex("机会满多的。", "There are quite a few opportunities."), ex("这里满方便的。", "It’s pretty convenient here.")],
    }),
    ml("为什么想留在……呢", "why stay in…?", ["留在台湾 = remain in Taiwan (not just visit). 呢 softens a real career question."], {
      examples: [ex("为什么想留在这里呢？", "Why do you want to stay here?")],
    }),
  ],
  "我喜欢台湾，希望能永久定居，最好能在这里成家立业。": [
    ml("永久定居", "settle permanently", ["定居 is settle / take up residence. 永久 pushes it past a work visa: I want this to be home."], {
      examples: [ex("他打算在台北永久定居。", "He plans to settle in Taipei for good.")],
    }),
    ml("最好能 + VP", "ideally I could…", ["最好能 is a hope, not a demand. Softens 成家立业 so it doesn’t sound like an ultimatum."], {
      pattern: "最好能 + VP",
      examples: [ex("最好能在这里成家立业。", "Ideally I could start a family and a career here."), ex("最好能下周开始。", "Ideally we could start next week.")],
    }),
    ml("成家立业", "start a family and a career", ["Four-character life goal: marry / make a home + establish a career. Very interview-friendly ambition."]),
  ],
  "台湾企业和外商公司，你比较喜欢哪一个？": [
    ml("A 和 B，你比较喜欢哪一个", "A or B — which do you prefer?", ["Topic first, then 比较喜欢哪一个. 企业 / 公司 both mean company; 外商 is foreign-invested."], {
      pattern: "A 和 B，你比较喜欢哪一个？",
      examples: [ex("咖啡和茶，你比较喜欢哪一个？", "Coffee or tea — which do you prefer?")],
    }),
  ],
  "最好是台湾的，外商公司也可以考虑。": [
    ml("最好是 + choice", "X would be best", ["最好是 picks a first choice. Then 也可以考虑 keeps the door open — classic polite ranking."], {
      examples: [ex("最好是早上，下午也可以考虑。", "Morning would be best; afternoon is also possible.")],
    }),
    ml("也可以考虑", "also worth considering", ["可以考虑 = it’s on the table. Soft yes, not a commitment."]),
  ],
  "你介意加班时间吗？": [
    ml("介意 + noun", "mind / object to…", ["介意 takes a thing you might dislike: 加班时间、抽烟、等人. 不介意 = I don’t mind."], {
      pattern: "介意 + noun / VP + 吗？",
      examples: [ex("你介意加班吗？", "Do you mind overtime?"), ex("我不介意加班。", "I don’t mind overtime.")],
    }),
  ],
  "一个月 15 个小时内可以接受。": [
    ml("……内可以接受", "…or under is acceptable", ["X 内 = within X. 可以接受 is HR language: I can live with that, not I love it."], {
      pattern: "quantity + 内 + 可以接受",
      examples: [ex("一周十个小时内可以接受。", "Up to ten hours a week is acceptable.")],
    }),
  ],
  "你曾经用中文进行商务谈判吗？": [
    ml("曾经 + VP + 吗", "have you ever…?", ["曾经 marks past experience, a bit more formal than 过. Pair with 进行 + formal noun: 进行商务谈判."], {
      pattern: "曾经 + VP + 吗？",
      examples: [ex("你曾经用中文开会吗？", "Have you ever had a meeting in Chinese?")],
    }),
    ml("商务谈判", "business negotiation", ["商务 = commercial / business. 谈判 is negotiate. Interviewers love this collocation."]),
  ],
  "以前中文不好，不曾，现在比较好了，我愿意挑战。": [
    ml("不曾", "never (have)", ["不曾 is the negative of 曾经 — slightly formal, very clean in an interview: I have not (yet)."], {
      examples: [ex("以前不曾，现在愿意试试。", "Not before. I’m willing to try now.")],
    }),
    ml("现在比较好了", "it’s better now", ["比较好了 = comparatively better + 了 change of state. Honest upgrade, not ‘I’m fluent’."]),
    ml("我愿意挑战", "I’m willing to take that on", ["挑战 here is a verb: take the challenge. 愿意 + V is willingness, not ability."], {
      examples: [ex("我愿意挑战这个职位。", "I’m willing to take on this role.")],
    }),
  ],
  "好的，我这里有两个机会，你先看一下，我再跟你介绍。": [
    ml("先…再…", "first… then…", ["先看一下，再介绍 = look first, then I’ll explain. Classic counselor pacing."], {
      pattern: "先 + V1，再 + V2",
      examples: [ex("你先看一下，我再跟你介绍。", "Look them over first, then I’ll walk you through them."), ex("先听再说。", "Listen first, then talk.")],
    }),
    ml("跟你介绍", "walk you through / introduce to you", ["介绍 here is brief someone on the jobs, not introduce a person."]),
  ],
  "好，谢谢。": [
    ml("好，谢谢", "OK — thanks", ["好 accepts the next step. 谢谢 closes a service turn at the agency — short on purpose."], {
      examples: [ex("好，谢谢。", "OK, thank you.")],
    }),
  ],
}

export const LESSON_3_1_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("满 + adj + 的", "Quite / pretty…", ["Spoken 满 = 蛮. 满多的、满好的、满有意思. Softens a claim so it doesn’t sound like a statistic."], {
    pattern: "满 + adj + 的",
    examples: [
      ex("机会应该满多的。", "There should be quite a few opportunities."),
      ex("这份工作满有挑战的。", "This job is pretty challenging."),
      ex("通勤满方便的。", "The commute is pretty convenient."),
    ],
  }),
  ml("最好能 / 最好是", "Ideally…", ["最好能 + verb is a hope. 最好是 + noun picks a first choice, then you can add 也可以考虑."], {
    pattern: "最好能 + VP / 最好是 + noun",
    examples: [
      ex("最好能在这里成家立业。", "Ideally I could start a family and a career here."),
      ex("最好是台湾的。", "A Taiwanese one would be best."),
      ex("最好能下周入职。", "Ideally I could start next week."),
    ],
  }),
  ml("介意 + noun", "Mind / object to…", ["介意 asks whether something bothers you. Answer with 不介意 or X 内可以接受."], {
    pattern: "（不）介意 + noun / VP",
    examples: [
      ex("你介意加班时间吗？", "Do you mind overtime hours?"),
      ex("我不介意出差。", "I don’t mind business trips."),
      ex("他很介意薪水。", "He really cares about the salary."),
    ],
  }),
  ml("曾经 / 不曾", "Have (never) ever…", ["曾经 + VP for interview experience. 不曾 is the neat negative — a bit more formal than 没…过."], {
    pattern: "曾经 + VP / 不曾",
    examples: [
      ex("你曾经用中文进行商务谈判吗？", "Have you ever negotiated business in Chinese?"),
      ex("以前不曾。", "Not before."),
      ex("我曾经在外商公司工作。", "I once worked at a foreign company."),
    ],
  }),
  ml("先…再…", "First… then…", ["Order two steps. 先看一下，我再跟你介绍 is how you hand someone a file and stay in control of the meeting."], {
    pattern: "先 + V1，（我）再 + V2",
    examples: [
      ex("你先看一下，我再跟你介绍。", "Look them over first, then I’ll introduce them."),
      ex("先面试，再谈薪水。", "Interview first, then talk salary."),
      ex("你先考虑，我再打电话给你。", "Think it over first, then I’ll call you."),
    ],
  }),
]
