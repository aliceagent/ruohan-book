import type { MiniLesson, MiniLessonExample, VocabItem } from "@/lib/types"
import { ex, fb, ml, v } from "./note-helpers"

export const LESSON_2_2_CORE_VOCAB: VocabItem[] = [
  v("学校作业", "school homework"),
  v("写完", "to finish writing"),
  v("脏", "dirty; messy (handwriting)"),
  v("擦干净", "to erase / wipe clean"),
  v("重写", "to rewrite"),
  v("安亲班", "after-school care (Taiwan)"),
  v("参考书", "workbook; supplementary book"),
  v("页", "page"),
  v("玩游戏", "to play games"),
  v("月考", "monthly exam"),
  v("加油", "to work harder; come on"),
  v("小声", "in a low voice"),
  v("嘀咕", "to mutter; to grumble"),
  v("说话不算话", "to go back on one’s word"),
]

export const LESSON_2_2_CHUNKS: VocabItem[] = [
  v("学校作业写完了吗？", "have you finished your school homework?"),
  v("写完了", "I’ve finished writing it"),
  v("怎么这么脏", "why is this so messy"),
  v("擦干净一点重写", "erase it a bit cleaner and rewrite"),
  v("安亲班有作业吗？", "is there homework from after-school care?"),
  v("做这个参考书", "do this workbook"),
  v("从这里到第30页", "from here to page 30"),
  v("哪有这样子的", "that’s not how it works / you can’t do that"),
  v("做完就可以玩游戏", "you can play games once you finish"),
  v("要月考了", "the monthly exam is coming"),
  v("加油一点", "try a bit harder"),
  v("小声嘀咕", "mutter under one’s breath"),
  v("说话不算话", "go back on one’s word"),
  v("你说……就可以……", "you said I could… once…"),
]

export const LESSON_2_2_FAMILY: VocabItem[] = [
  v("写作业", "do written homework"),
  v("做功课", "do homework (general)"),
  v("写完作业", "finish writing homework"),
  v("交作业", "hand in homework"),
  v("改作业", "correct / mark homework"),
  v("学校作业", "homework from school"),
  v("安亲班作业", "homework from after-school care"),
  v("家庭作业", "homework to do at home"),
]

export const LESSON_2_2_PRACTICE: MiniLessonExample[] = [
  ex("学校作业写完了吗？", "Have you finished your school homework?"),
  ex("写完了，可是妈妈说太脏，要擦干净一点重写。", "I finished, but Mom said it was too messy and I have to erase it and rewrite."),
  ex("安亲班今天没有作业。", "There’s no homework from after-school care today."),
  ex("那做这个参考书，从这里到第30页。", "Then do this workbook, from here to page 30."),
  ex("哪有这样子的！你说做完学校作业就可以玩游戏的！", "That’s not fair! You said I could play games after I finished school homework!"),
  ex("要月考了，加油一点！", "The monthly exam is coming. Try a bit harder!"),
  ex("他小声嘀咕：说话不算话！", "He muttered, “You don’t keep your word!”"),
  ex("我先写完作业再玩游戏。", "I’ll finish my homework first, then play games."),
]

export const LESSON_2_2_FILL_BLANKS = [
  fb("1", "Have you finished writing it?", "学校作业", "？", "写完了吗", ["写好了呢", "写过了吧", "写完了啊"]),
  fb("2", "Erase it a bit cleaner.", "这里太脏，", "一点。", "擦干净", ["擦好看", "擦清楚", "擦漂亮"]),
  fb("3", "Rewrite it.", "擦干净以后", "。", "重写", ["重看", "重玩", "重听"]),
  fb("4", "Is there homework from after-school care?", "今天", "有作业吗？", "安亲班", ["补习班", "体育课", "营养午餐"]),
  fb("5", "Then do this workbook.", "那做这个", "。", "参考书", ["笔记本", "漫画书", "联络簿"]),
  fb("6", "That’s not how it works!", "", "！你说做完就可以玩游戏的。", "哪有这样子的", ["哪有这么好", "怎么这样说", "有没有搞错"]),
  fb("7", "The monthly exam is coming.", "要", "了，加油一点！", "月考", ["期中", "暑假", "下课"]),
  fb("8", "You don’t keep your word!", "你又", "！", "说话不算话", ["自言自语", "胡说八道", "话里有话"]),
]

export const LESSON_2_2_LINE_NOTES: Record<string, MiniLesson[]> = {
  "学校作业写完了吗？": [
    ml("写完了吗", "have you finished writing it?", ["V + 完 + 了 + 吗 checks whether the action is done. 写完了吗 = have you finished writing (it)?"], {
      pattern: "V + 完了吗",
      examples: [ex("吃完了吗？", "Have you finished eating?"), ex("写完了吗？", "Have you finished writing it?")],
    }),
    ml("学校作业", "school homework", ["学校作业 is homework from school, as opposed to 安亲班作业. Parents often ask this first."]),
  ],
  "写完了。": [
    ml("写完了", "I’ve finished writing it", ["Drop 吗 and keep 了: a finished result. Short answer to 写完了吗？"], {
      examples: [ex("吃完了。", "I’ve finished eating."), ex("做完了。", "I’ve finished doing it.")],
    }),
  ],
  "我看。这里怎么这么脏？擦干净一点重写。": [
    ml("怎么这么 + adj", "why is it this…", ["怎么这么脏 = how come it’s this messy. 这么 + adj is ‘this / so’."], {
      examples: [ex("怎么这么慢？", "How come it’s so slow?")],
    }),
    ml("擦干净一点重写", "erase it cleaner and rewrite", ["擦干净 is a result complement: wipe / erase until clean. 一点 softens the demand. 重写 = write it again."], {
      pattern: "V + 干净一点 + 重 + V",
      examples: [ex("擦干净一点重写。", "Erase it a bit cleaner and rewrite."), ex("洗干净一点再穿。", "Wash it a bit cleaner before wearing it.")],
    }),
    ml("我看", "let me see", ["Parent takes the notebook. 我看 = let me take a look (not “hand it over”)."]),
  ],
  "Hmm": [
    ml("Hmm", "reluctant pause", ["English stall in the script. Same job as 嗯…… — the kid is not happy and not answering yet."], {
      examples: [ex("嗯……好吧。", "Hmm… fine.")],
    }),
  ],
  "安亲班有作业吗？": [
    ml("安亲班", "after-school care", ["Taiwan word: a place kids stay after school so parents can work. Homework, snacks, a bit of review. Not the same as 补习班 (cram school)."], {
      examples: [ex("我三点去安亲班。", "I go to after-school care at three.")],
    }),
    ml("有作业吗？", "is there homework?", ["有 + noun + 吗 asks whether that homework exists today. Pair with 没有。"]),
  ],
  "没有。": [
    ml("没有", "no / there isn’t", ["Short answer to 有……吗？ Means none today, not ‘I didn’t do it’."], {
      examples: [ex("有糖吗？没有。", "Got any candy? No.")],
    }),
  ],
  "那做这个参考书，从这里到第30页。": [
    ml("那 + command", "then… (new assignment)", ["那 picks up after 没有: if school / 安亲班 is done, here’s extra work."], {
      examples: [ex("那先洗手。", "Then wash your hands first.")],
    }),
    ml("参考书", "workbook / supplementary book", ["In this house, extra practice — not just a dictionary. Parents assign pages from it."]),
    ml("从……到第 N 页", "from here to page N", ["从这里到第30页 is a page range. 第 + number + 页."], {
      pattern: "从 + start + 到 + 第 + N + 页",
      examples: [ex("从第10页到第20页。", "From page 10 to page 20.")],
    }),
  ],
  "哪有这样子的！你说做完学校作业就可以玩游戏的！": [
    ml("哪有这样子的", "that’s not how it works", ["Protest: you can’t change the deal. 哪有 + situation + 的. Very spoken, a bit pouty."], {
      pattern: "哪有 + situation + 的",
      examples: [ex("哪有这样子的！", "You can’t do that!"), ex("哪有这么便宜的。", "There’s no way it’s that cheap.")],
    }),
    ml("你说……就可以……", "you said I could… once…", ["Quotes the parent’s earlier deal. 做完学校作业就可以玩游戏 = finish school homework, then games."], {
      pattern: "做完 + N + 就可以 + V",
      examples: [ex("做完就可以玩。", "You can play once you finish.")],
    }),
    ml("的！", "you did say that", ["Sentence-final 的 insists the promise was real: 就可以玩游戏的。"]),
  ],
  "要月考了，加油一点！": [
    ml("要月考了", "the monthly exam is coming", ["要 + event + 了 = it’s about to happen. 月考 is a monthly test, common in Taiwan schools."], {
      pattern: "要 + event + 了",
      examples: [ex("要月考了。", "The monthly exam is coming."), ex("要下雨了。", "It’s about to rain.")],
    }),
    ml("加油一点", "try a bit harder", ["加油 is cheer / effort. 一点 softens it: a bit more, not a lecture."], {
      examples: [ex("再加油一点。", "Put in a bit more effort.")],
    }),
  ],
  "（小声嘀咕）说话不算话！": [
    ml("说话不算话", "go back on one’s word", ["Literally ‘saying it doesn’t count as saying it.’ The kid’s charge: you promised, then changed it."], {
      pattern: "说话不算话",
      examples: [ex("说话不算话！", "You don’t keep your word!"), ex("他常常说话不算话。", "He often goes back on his word.")],
    }),
    ml("（小声嘀咕）", "muttering under one’s breath", ["Stage direction. 嘀咕 is a low grumble — said so the parent might still hear it."]),
  ],
}

export const LESSON_2_2_GRAMMAR_FOCUS: MiniLesson[] = [
  ml("写完了吗", "Have you finished writing it?", ["V + 完 + 了 + 吗 asks if the action is done. 写完了吗 is the homework check. Answer 写完了 or 还没。"], {
    pattern: "V + 完了吗",
    examples: [
      ex("学校作业写完了吗？", "Have you finished your school homework?"),
      ex("饭吃完了吗？", "Have you finished the meal?"),
      ex("报告写完了吗？", "Have you finished writing the report?"),
    ],
  }),
  ml("擦干净一点重写", "Erase it cleaner and rewrite", ["Result complement 干净 + 一点, then 重 + V to do it again. Parent talk for messy work."], {
    pattern: "V + 干净一点 + 重 + V",
    examples: [
      ex("擦干净一点重写。", "Erase it a bit cleaner and rewrite."),
      ex("洗干净一点再用。", "Wash it a bit cleaner before using it again."),
      ex("写清楚一点重抄。", "Write it a bit clearer and copy it again."),
    ],
  }),
  ml("哪有这样子的", "That’s not how it works", ["A spoken protest when someone changes the deal. 哪有 + situation + 的. Often starts a complaint."], {
    pattern: "哪有 + situation + 的",
    examples: [
      ex("哪有这样子的！", "You can’t do that!"),
      ex("哪有说完就反悔的。", "You can’t take it back right after you say it."),
      ex("哪有这么忙还加班的。", "There’s no way we’re working overtime when we’re already this busy."),
    ],
  }),
  ml("说话不算话", "Go back on one’s word", ["The charge after a broken promise. Pair with 你说……就可以…… to quote the original deal."], {
    pattern: "说话不算话",
    examples: [
      ex("说话不算话！", "You don’t keep your word!"),
      ex("你又说话不算话了。", "You went back on your word again."),
      ex("大人最讨厌说话不算话。", "Grown-ups hate it most when you don’t keep your word."),
    ],
  }),
  ml("要月考了", "The monthly exam is coming", ["要 + event + 了 marks something just ahead. 月考 is a monthly school test. Often followed by 加油一点。"], {
    pattern: "要 + event + 了",
    examples: [
      ex("要月考了，加油一点！", "The monthly exam is coming. Try a bit harder!"),
      ex("要开学了。", "School is about to start."),
      ex("要迟到了。", "We’re about to be late."),
    ],
  }),
]
