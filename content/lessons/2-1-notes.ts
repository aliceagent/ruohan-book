import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_1_CORE_VOCAB: VocabItem[] = [
  v("下课", "class is over; to get out of class"),
  v("睡着", "to fall asleep"),
  v("有趣", "interesting; fun"),
  v("遇到", "to run into; to meet"),
  v("鼓励", "to encourage"),
  v("影响", "to influence; influence"),
  v("一生", "one’s whole life"),
  v("怪不得", "no wonder"),
  v("特别", "especially; particularly"),
  v("班导", "homeroom teacher"),
  v("温柔", "gentle"),
  v("慈祥", "kindly; benevolent"),
  v("教书", "to teach"),
  v("难管", "hard to manage / discipline"),
  v("家教", "private tutor; tutoring"),
  v("修", "to take (a course); to study"),
  v("教育学分", "education credits"),
  v("中小学", "primary and secondary school"),
]

export const LESSON_2_1_CHUNKS: VocabItem[] = [
  v("终于下课了", "class is finally over"),
  v("都快睡着了", "I was almost falling asleep"),
  v("有趣多了", "much more interesting"),
  v("遇到过最好的", "the best one I’ve ever had"),
  v("教得超好", "teaches extremely well"),
  v("很会鼓励学生", "really knows how to encourage students"),
  v("影响了我的一生", "influenced my whole life"),
  v("怪不得……这么好", "no wonder … is so good"),
  v("特别喜欢的老师", "a teacher you especially like"),
  v("像妈妈一样", "just like a mom"),
  v("现在的学生太难管了", "students nowadays are too hard to manage"),
  v("一直都在当家教", "I’ve been tutoring the whole time"),
  v("修教育学分", "take education credits"),
  v("有机会的话", "if I get the chance"),
  v("一定会是个好老师", "will definitely be a good teacher"),
]

export const LESSON_2_1_FAMILY: VocabItem[] = [
  v("老师", "teacher"),
  v("同学", "classmate"),
  v("班导", "homeroom teacher"),
  v("家教", "tutor"),
  v("小老师", "student helper / “little teacher”"),
  v("模范生", "model student"),
  v("好老师", "a good teacher"),
  v("难管", "hard to manage"),
]

export const LESSON_2_1_PRACTICE: MiniLessonExample[] = [
  ex("终于下课了，我都快睡着了。", "Class is finally over — I was almost falling asleep."),
  ex("去年的老师有趣多了。", "Last year’s teacher was much more interesting."),
  ex("她很会鼓励学生，影响了我的一生。", "She really knows how to encourage students. She influenced my whole life."),
  ex("怪不得你英语这么好。", "No wonder your English is so good."),
  ex("小学的班导很温柔慈祥，像妈妈一样。", "My elementary homeroom teacher was gentle and kindly, like a mom."),
  ex("现在的学生太难管了，我不想教书。", "Students nowadays are too hard to manage. I don’t want to teach."),
  ex("我一直都在当家教，明年想修教育学分。", "I’ve been tutoring all along. Next year I want to take education credits."),
  ex("有机会的话我想教中小学英语。", "If I get the chance, I want to teach English in primary and secondary school."),
]

export const LESSON_2_1_FILL_BLANKS = [
  fb("1", "Class is finally over.", "天啊，", "了！", "终于下课", ["马上上课", "还没下课", "刚刚开学"]),
  fb("2", "Last year’s teacher was much more interesting.", "去年的老师", "！", "有趣多了", ["有趣少了", "有趣一样", "有趣不好"]),
  fb("3", "No wonder your English is so good.", "你英语这么好。", "", "怪不得", ["难道", "何必", "反正"]),
  fb("4", "She influenced my whole life.", "我想她影响了我的", "。", "一生", ["一时", "一下", "一天"]),
  fb("5", "Students nowadays are too hard to manage.", "现在的学生太", "了。", "难管", ["好听", "好找", "好懂"]),
  fb("6", "I’ve been working as a tutor.", "我一直都在当", "。", "家教", ["班导", "校长", "值日生"]),
  fb("7", "I want to take education credits next year.", "明年想修", "。", "教育学分", ["营养午餐", "课外活动", "家庭作业"]),
  fb("8", "You will definitely be a good teacher.", "你以后一定会是个", "！", "好老师", ["坏学生", "老朋友", "小学课"]),
]

export const LESSON_2_1_LINE_NOTES: Record<string, MiniLesson[]> = {
  "天啊，终于下课了，我都快睡着了！": [
    ml("终于 + result", "finally", ["终于 is relief after waiting. 终于下课了 = class is finally over."], {
      pattern: "终于 + V + 了",
      examples: [ex("终于下课了。", "Class is finally over."), ex("终于到了。", "We’re finally here.")],
    }),
    ml("都快 + V + 了", "almost / nearly", ["都快睡着了 = I was this close to falling asleep. 都 adds ‘already / to the point that’."], {
      examples: [ex("我都快饿死了。", "I’m almost starving.")],
    }),
  ],
  "真的！去年的老师有趣多了！": [
    ml("A 多了", "much more A", ["有趣多了 compares with this year’s teacher without saying 比. Very spoken."], {
      pattern: "adj + 多了",
      examples: [ex("这个有趣多了。", "This is much more interesting."), ex("今天冷多了。", "It’s much colder today.")],
    }),
  ],
  "去年的不错，但是我遇到过最好的英语老师是高中时的，教得超好，而且很会鼓励学生，我想她影响了我的一生。": [
    ml("遇到过最好的", "the best I’ve ever met", ["遇到过 + 最好的 + noun. 过 marks experience."], {
      examples: [ex("她是我遇到过最好的老师。", "She’s the best teacher I’ve ever had.")],
    }),
    ml("教得 + complement", "teaches (to a degree)", ["得 after 教 turns the rest into how well they teach. 超好 is strongly spoken."], {
      pattern: "V + 得 + complement",
      examples: [ex("教得超好", "teaches extremely well"), ex("说得很清楚", "explains very clearly")],
    }),
    ml("很会 + V", "really knows how to…", ["会 here is skill, not future. 很会鼓励学生 = good at encouraging students."], {
      examples: [ex("他很会说话。", "He’s good with words.")],
    }),
    ml("影响了……的一生", "influenced someone’s whole life", ["一生 is one’s entire life. Strong praise for a teacher."]),
  ],
  "怪不得你英语这么好。我都没遇到过好的英语老师。": [
    ml("怪不得", "no wonder", ["怪不得 + observation. You just heard the reason."], {
      examples: [ex("怪不得你累了，昨天没睡。", "No wonder you’re tired — you didn’t sleep yesterday.")],
    }),
    ml("都没 + V + 过", "have never even…", ["都 here is ‘even / at all’. 都没遇到过 = I never once ran into…"]),
  ],
  "你没有特别喜欢的老师吗？": [
    ml("特别喜欢的 + noun", "one you especially like", ["特别喜欢的老师 is a noun phrase: a teacher you especially like."], {
      examples: [ex("你有特别想去的地方吗？", "Is there a place you especially want to go?")],
    }),
  ],
  "小学的班导吧，很温柔慈祥，像妈妈一样照顾学生。": [
    ml("班导", "homeroom teacher", ["Short for 班主任 / 班级导师. Everyday Taiwan school word."]),
    ml("像……一样", "just like…", ["像妈妈一样照顾学生 = looks after students the way a mom would."], {
      pattern: "像 + noun + 一样 + V",
      examples: [ex("像朋友一样聊天。", "Chat like friends.")],
    }),
    ml("……吧", "I’d say… / probably…", ["吧 softens the pick: ‘the elementary homeroom teacher, I guess.’"]),
  ],
  "你以后想教书吗？": [
    ml("教书", "to teach (as a job)", ["教书 is the occupation. 教英语 is teach English as a subject."], {
      examples: [ex("他想回国教书。", "He wants to go home and teach.")],
    }),
  ],
  "不想，现在的学生太难管了。你呢？": [
    ml("太 + adj + 了", "too…", ["太难管了 = too hard to keep in line. 管 is manage / discipline."], {
      examples: [ex("这班太难管了。", "This class is too hard to manage.")],
    }),
  ],
  "我一直都在当家教，明年想修教育学分，有机会的话想教中小学英语。": [
    ml("一直都在 + V", "have been doing all along", ["一直都在当家教 = I’ve been a tutor the whole time (and still am)."], {
      pattern: "一直都在 + V",
    }),
    ml("当 + role", "work as…", ["当家教、当老师、当值日生. 当 + identity."], {
      examples: [ex("她当了三年家教。", "She tutored for three years.")],
    }),
    ml("修 + course / credits", "take (a course)", ["修课、修学分. School register language."], {
      examples: [ex("我想修教育学分。", "I want to take education credits.")],
    }),
    ml("有机会的话", "if I get the chance", ["的话 marks the if-clause. Soft plan, not a promise."], {
      examples: [ex("有空的话来坐坐。", "If you’re free, come sit a while.")],
    }),
  ],
  "你以后一定会是个好老师！": [
    ml("一定会", "definitely will", ["一定 + 会 is a warm prediction. 是个好老师 uses 个 with 老师."], {
      examples: [ex("你一定会喜欢的。", "You’ll definitely like it.")],
    }),
  ],
}

export const LESSON_2_1_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("终于 + V + 了", "Finally…", ["终于 is the sigh after waiting. Pair it with 了 for a finished relief: 终于下课了。"], {
    pattern: "终于 + V + 了",
    examples: [
      ex("终于下课了。", "Class is finally over."),
      ex("终于放假了。", "Vacation is finally here."),
      ex("我终于想起来了。", "I finally remembered."),
    ],
  }),
  ml("adj + 多了", "much more…", ["A compact comparison. 有趣多了 skips 比 when the other side is obvious."], {
    pattern: "adj + 多了",
    examples: [
      ex("去年的老师有趣多了。", "Last year’s teacher was much more interesting."),
      ex("今天舒服多了。", "I feel much better today."),
      ex("这个简单多了。", "This one is much easier."),
    ],
  }),
  ml("怪不得", "No wonder", ["Say 怪不得 after you hear the reason. Then add the thing that now makes sense."], {
    pattern: "怪不得 + observation",
    examples: [
      ex("怪不得你英语这么好。", "No wonder your English is so good."),
      ex("怪不得他没来，他生病了。", "No wonder he didn’t come — he’s sick."),
      ex("怪不得这么香。", "No wonder it smells so good."),
    ],
  }),
  ml("像……一样", "Just like…", ["像 + noun + 一样 + verb/adj. The 一样 can drop in speech: 像妈妈。"], {
    pattern: "像 + noun + 一样 + V/adj",
    examples: [
      ex("像妈妈一样照顾学生。", "Looks after students like a mom."),
      ex("像朋友一样说话。", "Talk like friends."),
      ex("像家一样舒服。", "As comfortable as home."),
    ],
  }),
  ml("有机会的话", "If I get the chance", ["的话 turns a condition into a soft plan. Same family as 有空的话、方便的话。"], {
    pattern: "有机会的话 + clause",
    examples: [
      ex("有机会的话想教中小学英语。", "If I get the chance, I want to teach school English."),
      ex("有机会的话再来。", "Come again if you get the chance."),
      ex("有空的话一起吃饭。", "If you’re free, let’s eat together."),
    ],
  }),
]
