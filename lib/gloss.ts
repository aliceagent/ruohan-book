import type { Lesson, VocabItem } from "@/lib/types"

const HANZI_RE = /\p{Script=Han}/u

export function isHanziChar(char: string) {
  return HANZI_RE.test(char)
}

/** Everyday words dialogues use constantly, even when they are not on the stretch list. */
export const COMMON_GLOSSES: VocabItem[] = [
  { hanzi: "我", en: "I / me" },
  { hanzi: "你", en: "you" },
  { hanzi: "您", en: "you (polite)" },
  { hanzi: "他", en: "he / him" },
  { hanzi: "她", en: "she / her" },
  { hanzi: "我们", en: "we / us" },
  { hanzi: "你们", en: "you (plural)" },
  { hanzi: "他们", en: "they / them" },
  { hanzi: "自己", en: "oneself" },
  { hanzi: "大家", en: "everyone" },
  { hanzi: "人", en: "person; people" },
  { hanzi: "谁", en: "who" },
  { hanzi: "什么", en: "what" },
  { hanzi: "哪", en: "which" },
  { hanzi: "哪里", en: "where" },
  { hanzi: "怎么", en: "how; how come" },
  { hanzi: "怎么样", en: "how is it; how about" },
  { hanzi: "为什么", en: "why" },
  { hanzi: "几", en: "how many (small number); a few" },
  { hanzi: "多少", en: "how much / how many" },
  { hanzi: "的", en: "possessive / descriptive particle" },
  { hanzi: "地", en: "adverb particle" },
  { hanzi: "得", en: "must; complement particle" },
  { hanzi: "了", en: "completed action / change-of-state particle" },
  { hanzi: "着", en: "ongoing-state particle" },
  { hanzi: "过", en: "have (ever) done; to pass" },
  { hanzi: "吗", en: "yes-no question particle" },
  { hanzi: "呢", en: "and you?; how about…?" },
  { hanzi: "吧", en: "suggestion / soft-command particle" },
  { hanzi: "啊", en: "softening / surprise particle" },
  { hanzi: "呀", en: "exclamatory particle" },
  { hanzi: "哦", en: "oh (realization)" },
  { hanzi: "噢", en: "oh" },
  { hanzi: "啦", en: "warm finished-particle" },
  { hanzi: "哇", en: "wow" },
  { hanzi: "嗯", en: "mm / uh-huh" },
  { hanzi: "耶", en: "yay" },
  { hanzi: "不", en: "not" },
  { hanzi: "没", en: "not have; have not" },
  { hanzi: "没有", en: "do not have; have not" },
  { hanzi: "很", en: "very; quite" },
  { hanzi: "也", en: "also; too" },
  { hanzi: "都", en: "all; both; always" },
  { hanzi: "就", en: "then; just; only" },
  { hanzi: "还", en: "still; yet; also" },
  { hanzi: "还是", en: "or; still" },
  { hanzi: "还没", en: "not yet" },
  { hanzi: "再", en: "again; then" },
  { hanzi: "才", en: "only then; only as late/few as" },
  { hanzi: "又", en: "again; both… and…" },
  { hanzi: "更", en: "even more" },
  { hanzi: "太", en: "too; so" },
  { hanzi: "最", en: "most; -est" },
  { hanzi: "真", en: "really" },
  { hanzi: "挺", en: "pretty; quite" },
  { hanzi: "比较", en: "relatively; comparatively" },
  { hanzi: "已经", en: "already" },
  { hanzi: "正在", en: "in the middle of doing" },
  { hanzi: "一直", en: "continuously; always" },
  { hanzi: "一起", en: "together" },
  { hanzi: "一下", en: "briefly; give it a try" },
  { hanzi: "和", en: "and; with" },
  { hanzi: "跟", en: "with; and" },
  { hanzi: "或", en: "or" },
  { hanzi: "但是", en: "but" },
  { hanzi: "可是", en: "but" },
  { hanzi: "因为", en: "because" },
  { hanzi: "所以", en: "so; therefore" },
  { hanzi: "如果", en: "if" },
  { hanzi: "要是", en: "if" },
  { hanzi: "的话", en: "if (clause tag)" },
  { hanzi: "虽然", en: "although" },
  { hanzi: "在", en: "at; in; progressive marker" },
  { hanzi: "从", en: "from" },
  { hanzi: "到", en: "to; until; arrive" },
  { hanzi: "对", en: "to / toward; correct" },
  { hanzi: "给", en: "give; for (someone)" },
  { hanzi: "把", en: "ba (disposal); hold" },
  { hanzi: "被", en: "by (passive)" },
  { hanzi: "让", en: "let; make someone do" },
  { hanzi: "比", en: "compared with" },
  { hanzi: "为", en: "for; as" },
  { hanzi: "是", en: "to be" },
  { hanzi: "有", en: "to have; there is" },
  { hanzi: "去", en: "to go" },
  { hanzi: "来", en: "to come" },
  { hanzi: "做", en: "to do; to make" },
  { hanzi: "说", en: "to say; to speak" },
  { hanzi: "看", en: "to look; to see; to watch" },
  { hanzi: "听", en: "to listen" },
  { hanzi: "想", en: "to want to; to think" },
  { hanzi: "要", en: "to want; going to; need" },
  { hanzi: "会", en: "can (skill); will" },
  { hanzi: "能", en: "can (ability / permission)" },
  { hanzi: "可以", en: "may; can; it’s OK" },
  { hanzi: "知道", en: "to know (a fact)" },
  { hanzi: "觉得", en: "to feel; to think" },
  { hanzi: "喜欢", en: "to like" },
  { hanzi: "爱", en: "to love; to be fond of" },
  { hanzi: "请", en: "please; to invite" },
  { hanzi: "谢谢", en: "thank you" },
  { hanzi: "对不起", en: "sorry" },
  { hanzi: "不好意思", en: "excuse me; sorry (mild)" },
  { hanzi: "好", en: "good; OK" },
  { hanzi: "对了", en: "by the way; that’s right" },
  { hanzi: "没问题", en: "no problem" },
  { hanzi: "没关系", en: "it’s all right" },
  { hanzi: "当然", en: "of course" },
  { hanzi: "应该", en: "should" },
  { hanzi: "可能", en: "maybe; possible" },
  { hanzi: "现在", en: "now" },
  { hanzi: "今天", en: "today" },
  { hanzi: "明天", en: "tomorrow" },
  { hanzi: "昨天", en: "yesterday" },
  { hanzi: "时候", en: "time; when" },
  { hanzi: "时间", en: "time" },
  { hanzi: "年", en: "year" },
  { hanzi: "月", en: "month" },
  { hanzi: "点", en: "o’clock; a bit" },
  { hanzi: "早上", en: "morning" },
  { hanzi: "上午", en: "late morning" },
  { hanzi: "中午", en: "noon" },
  { hanzi: "下午", en: "afternoon" },
  { hanzi: "晚上", en: "evening / night" },
  { hanzi: "这个", en: "this one" },
  { hanzi: "那个", en: "that one" },
  { hanzi: "这", en: "this" },
  { hanzi: "那", en: "that" },
  { hanzi: "这里", en: "here" },
  { hanzi: "那里", en: "there" },
  { hanzi: "个", en: "general measure word" },
  { hanzi: "些", en: "some" },
  { hanzi: "一点", en: "a little" },
  { hanzi: "一", en: "one" },
  { hanzi: "二", en: "two" },
  { hanzi: "两", en: "two (with a measure word)" },
  { hanzi: "三", en: "three" },
  { hanzi: "四", en: "four" },
  { hanzi: "五", en: "five" },
  { hanzi: "六", en: "six" },
  { hanzi: "七", en: "seven" },
  { hanzi: "八", en: "eight" },
  { hanzi: "九", en: "nine" },
  { hanzi: "十", en: "ten" },
  { hanzi: "百", en: "hundred" },
  { hanzi: "千", en: "thousand" },
  { hanzi: "万", en: "ten thousand" },
  { hanzi: "多", en: "many; much; more" },
  { hanzi: "少", en: "few; little" },
  { hanzi: "大", en: "big" },
  { hanzi: "小", en: "small" },
  { hanzi: "好了", en: "that’s settled; that’s enough" },
  { hanzi: "然后", en: "then" },
  { hanzi: "最后", en: "finally; in the end" },
  { hanzi: "先", en: "first" },
  { hanzi: "只", en: "only" },
  { hanzi: "只有", en: "only have; only if" },
  { hanzi: "就是", en: "exactly; just is" },
  { hanzi: "还好", en: "luckily; not too bad" },
  { hanzi: "们", en: "plural marker" },
  { hanzi: "子", en: "noun suffix" },
  { hanzi: "孩子", en: "child; children" },
  { hanzi: "小孩", en: "kid; child" },
  { hanzi: "家人", en: "family members" },
  { hanzi: "家庭", en: "family" },
  { hanzi: "结婚", en: "to get married" },
  { hanzi: "婚姻", en: "marriage" },
  { hanzi: "曾经", en: "once; previously" },
  { hanzi: "习惯", en: "habit; to be used to" },
  { hanzi: "学习", en: "to study; to learn" },
  { hanzi: "学校", en: "school" },
  { hanzi: "学生", en: "student" },
  { hanzi: "老师", en: "teacher" },
  { hanzi: "参加", en: "to take part in" },
  { hanzi: "生活", en: "life; to live" },
  { hanzi: "常常", en: "often" },
  { hanzi: "经常", en: "often; regularly" },
  { hanzi: "贵国", en: "your country (polite)" },
  { hanzi: "中国", en: "China" },
  { hanzi: "台湾", en: "Taiwan" },
  { hanzi: "美国", en: "the United States" },
  { hanzi: "国家", en: "country" },
  { hanzi: "东西", en: "thing; stuff" },
  { hanzi: "朋友", en: "friend" },
  { hanzi: "别人", en: "other people" },
  { hanzi: "别人", en: "other people" },
  { hanzi: "购物", en: "shopping" },
  { hanzi: "吃饭", en: "to eat a meal" },
  { hanzi: "工作", en: "work; job" },
  { hanzi: "开始", en: "to start" },
  { hanzi: "周末", en: "weekend" },
  { hanzi: "希望", en: "to hope; a hope" },
  { hanzi: "考虑", en: "to consider" },
  { hanzi: "健康", en: "healthy; health" },
  { hanzi: "完成", en: "to finish; to complete" },
  { hanzi: "交通", en: "traffic; transportation" },
  { hanzi: "男生", en: "boy; guy" },
  { hanzi: "女生", en: "girl" },
  { hanzi: "爸爸", en: "dad" },
  { hanzi: "妈妈", en: "mom" },
  { hanzi: "父亲", en: "father" },
  { hanzi: "母亲", en: "mother" },
  { hanzi: "认识", en: "to know (a person); to recognize" },
  { hanzi: "活动", en: "activity" },
  { hanzi: "最近", en: "recently" },
  { hanzi: "问题", en: "question; problem" },
  { hanzi: "休息", en: "to rest" },
  { hanzi: "睡觉", en: "to sleep" },
  { hanzi: "晚上", en: "evening" },
  { hanzi: "早上", en: "morning" },
  { hanzi: "自己", en: "oneself" },
  { hanzi: "觉得", en: "to feel; to think" },
  { hanzi: "喜欢", en: "to like" },
  { hanzi: "告诉", en: "to tell" },
  { hanzi: "觉得", en: "to feel" },
  { hanzi: "出来", en: "to come out" },
  { hanzi: "回来", en: "to come back" },
  { hanzi: "出去", en: "to go out" },
  { hanzi: "回去", en: "to go back" },
  { hanzi: "起来", en: "to get up; start to" },
  { hanzi: "出来", en: "come out" },
  { hanzi: "以后", en: "after; later" },
  { hanzi: "以前", en: "before; in the past" },
  { hanzi: "以后", en: "later; after" },
  { hanzi: "时候", en: "time; moment" },
  { hanzi: "为什么", en: "why" },
  { hanzi: "怎么样", en: "how is it" },
  { hanzi: "为什么", en: "why" },
  { hanzi: "多少", en: "how much" },
  { hanzi: "一起", en: "together" },
  { hanzi: "一下", en: "a bit" },
  { hanzi: "一样", en: "the same" },
  { hanzi: "一直", en: "always; continuously" },
  { hanzi: "一定", en: "definitely; must" },
  { hanzi: "有的", en: "some" },
  { hanzi: "有人", en: "someone; some people" },
  { hanzi: "有时候", en: "sometimes" },
  { hanzi: "不好意思", en: "excuse me; sorry" },
  { hanzi: "没问题", en: "no problem" },
  { hanzi: "没关系", en: "it’s fine" },
  { hanzi: "怎么样", en: "how about it" },
  { hanzi: "为什么", en: "why" },
  { hanzi: "怎么样", en: "how" },
  { hanzi: "医生", en: "doctor" },
  { hanzi: "太阳", en: "the sun" },
  { hanzi: "总是", en: "always" },
  { hanzi: "不够", en: "not enough" },
  { hanzi: "以内", en: "within" },
  { hanzi: "之内", en: "within" },
  { hanzi: "内", en: "inside; within" },
  { hanzi: "外", en: "outside" },
  { hanzi: "上", en: "on; up; last (week/month)" },
  { hanzi: "下", en: "down; next; get off" },
  { hanzi: "中", en: "middle; in" },
  { hanzi: "里", en: "inside" },
  { hanzi: "前", en: "before; in front" },
  { hanzi: "后", en: "after; behind" },
  { hanzi: "左", en: "left" },
  { hanzi: "右", en: "right" },
  { hanzi: "总", en: "always; overall" },
  { hanzi: "医生", en: "doctor" },
  { hanzi: "阳光", en: "sunlight" },
  { hanzi: "早上", en: "morning" },
  { hanzi: "听", en: "to listen" },
  { hanzi: "说", en: "to say" },
  { hanzi: "听说", en: "to hear that; I heard" },
  { hanzi: "真的", en: "really" },
  { hanzi: "不是", en: "is not" },
  { hanzi: "是不是", en: "is it or not?" },
  { hanzi: "不太", en: "not very" },
  { hanzi: "有人", en: "someone" },
  { hanzi: "一个", en: "one (measure)" },
  { hanzi: "这个", en: "this one" },
  { hanzi: "那个", en: "that one" },
  { hanzi: "什么", en: "what" },
  { hanzi: "晒", en: "to expose to the sun" },
  { hanzi: "怎么了", en: "what happened?" },
  { hanzi: "为什么", en: "why" },
  { hanzi: "敲", en: "to knock; to strike" },
  { hanzi: "敲门", en: "to knock on a door" },
  { hanzi: "外面", en: "outside" },
  { hanzi: "回家", en: "to go home" },
  { hanzi: "出门", en: "to go out" },
  { hanzi: "履历", en: "résumé / CV" },
  { hanzi: "简历", en: "résumé" },
  { hanzi: "经历", en: "experience" },
  { hanzi: "满多", en: "quite a lot" },
  { hanzi: "定居", en: "to settle; take up residence" },
  { hanzi: "永久", en: "permanent; forever" },
  { hanzi: "成家", en: "to start a family" },
  { hanzi: "立业", en: "to establish a career" },
  { hanzi: "外商", en: "foreign business" },
  { hanzi: "企业", en: "enterprise; company" },
  { hanzi: "加班", en: "to work overtime" },
  { hanzi: "介意", en: "to mind; to object to" },
  { hanzi: "接受", en: "to accept" },
  { hanzi: "不曾", en: "have never" },
  { hanzi: "曾经", en: "once; have ever" },
  { hanzi: "谈判", en: "negotiation" },
  { hanzi: "商务", en: "business; commercial" },
  { hanzi: "挑战", en: "challenge" },
  { hanzi: "通勤", en: "to commute" },
  { hanzi: "薪水", en: "salary" },
  { hanzi: "工资", en: "wages" },
  { hanzi: "前景", en: "prospects" },
  { hanzi: "公职", en: "government job" },
  { hanzi: "外资", en: "foreign capital" },
  { hanzi: "业绩", en: "performance; results" },
  { hanzi: "考核", en: "performance review" },
  { hanzi: "雇用", en: "to employ" },
  { hanzi: "终身", en: "lifelong" },
  { hanzi: "出差", en: "business trip" },
  { hanzi: "年资", en: "seniority" },
  { hanzi: "调升", en: "to promote / raise" },
  { hanzi: "职场", en: "workplace" },
  { hanzi: "霸凌", en: "bullying" },
  { hanzi: "言语", en: "speech; verbal" },
  { hanzi: "暴力", en: "violence" },
  { hanzi: "上司", en: "boss; supervisor" },
  { hanzi: "打工", en: "to work a side / part-time job" },
  { hanzi: "创业", en: "to start a business" },
  { hanzi: "贷款", en: "loan" },
  { hanzi: "伴侣", en: "partner (life / romantic)" },
  { hanzi: "连结", en: "link (URL)" },
  { hanzi: "测验", en: "test; quiz" },
  { hanzi: "心理", en: "psychological; mental" },
  { hanzi: "人物", en: "character; figure" },
  { hanzi: "演义", en: "historical novel" },
  { hanzi: "张飞", en: "Zhang Fei" },
  { hanzi: "司马", en: "Sima (surname)" },
  { hanzi: "诸葛", en: "Zhuge (surname)" },
  { hanzi: "亮", en: "bright; Zhuge Liang" },
  { hanzi: "赵云", en: "Zhao Yun" },
  { hanzi: "大将", en: "senior general" },
  { hanzi: "算计", en: "to calculate; to scheme" },
  { hanzi: "冷酷", en: "cold; callous" },
  { hanzi: "残忍", en: "cruel" },
  { hanzi: "生性", en: "by nature; temperament" },
  { hanzi: "多疑", en: "suspicious" },
  { hanzi: "雄才", en: "great talent" },
  { hanzi: "大略", en: "bold vision; strategy" },
  { hanzi: "才智", en: "talent and intelligence" },
  { hanzi: "过人", en: "outstanding; surpassing others" },
  { hanzi: "胆识", en: "courage and judgment" },
  { hanzi: "见解", en: "view; insight" },
  { hanzi: "粗鲁", en: "rough; crude" },
  { hanzi: "鲁莽", en: "reckless" },
  { hanzi: "莽撞", en: "impetuous" },
  { hanzi: "料事", en: "to foresee events" },
  { hanzi: "如神", en: "like a god; uncannily" },
  { hanzi: "智商", en: "IQ" },
  { hanzi: "情商", en: "EQ" },
  { hanzi: "财商", en: "financial intelligence" },
  { hanzi: "逆境", en: "adversity" },
  { hanzi: "敬佩", en: "to admire" },
  { hanzi: "领袖", en: "leader" },
  { hanzi: "先天", en: "inborn; innate" },
  { hanzi: "后天", en: "acquired; after birth" },
  { hanzi: "来世", en: "next life" },
  { hanzi: "自信", en: "self-confidence" },
  { hanzi: "封面", en: "cover (magazine)" },
  { hanzi: "增进", en: "to improve; to increase" },
  { hanzi: "沟通", en: "to communicate" },
  { hanzi: "贵公司", en: "your company (honorific)" },
  { hanzi: "数位", en: "digital (Taiwan)" },
  { hanzi: "行销", en: "marketing (Taiwan)" },
  { hanzi: "营销", en: "marketing" },
  { hanzi: "社群", en: "community; social (Taiwan)" },
  { hanzi: "媒体", en: "media" },
  { hanzi: "成效", en: "results; effectiveness" },
  { hanzi: "贡献", en: "to contribute" },
  { hanzi: "创意", en: "creativity" },
  { hanzi: "热情", en: "passion; enthusiasm" },
  { hanzi: "简报", en: "presentation (Taiwan)" },
  { hanzi: "训练", en: "training" },
  { hanzi: "缺点", en: "weakness; shortcoming" },
  { hanzi: "充实", en: "to enrich; substantial" },
  { hanzi: "尝试", en: "to try; attempt" },
  { hanzi: "职位", en: "position; post" },
  { hanzi: "应征", en: "to apply for a job" },
  { hanzi: "面试", en: "job interview" },
  { hanzi: "面试官", en: "interviewer" },
  { hanzi: "成就", en: "achievement" },
  { hanzi: "福利", en: "benefits" },
  { hanzi: "直属", en: "direct (supervisor / report)" },
  { hanzi: "调职", en: "job transfer" },
  { hanzi: "家属", en: "family dependents" },
  { hanzi: "实质", en: "substance; real" },
  { hanzi: "风格", en: "style" },
  { hanzi: "相似", en: "similar" },
  { hanzi: "热爱", en: "to love passionately" },
  { hanzi: "搜寻", en: "to search" },
  { hanzi: "搜索", en: "to search" },
  { hanzi: "招聘", en: "to recruit" },
  { hanzi: "雇用", en: "to hire" },
  { hanzi: "克服", en: "to overcome" },
  { hanzi: "趋势", en: "trend" },
  { hanzi: "行业", en: "industry" },
  { hanzi: "外地", en: "another region; out of town" },
  { hanzi: "国外", en: "abroad" },
  { hanzi: "体演", en: "to act out; embodied performance" },
  { hanzi: "模拟", en: "to simulate; mock" },
  { hanzi: "求职", en: "to look for a job" },
  { hanzi: "划手机", en: "to scroll on a phone" },
  { hanzi: "站牌", en: "stop sign / bus-stop sign" },
  { hanzi: "公车", en: "bus (Taiwan)" },
  { hanzi: "公交车", en: "bus" },
]

function isCleanWord(hanzi: string) {
  if (!hanzi) return false
  if (/[….+／/＝=]/.test(hanzi)) return false
  return Array.from(hanzi).every((char) => HANZI_RE.test(char))
}

/** Words worth highlighting — skip long sentence-like chunks. */
function isHoverLexeme(hanzi: string) {
  if (!isCleanWord(hanzi)) return false
  const len = Array.from(hanzi).length
  if (len > 4) return false
  if (len >= 3 && /[的了吗呢吧啊]/.test(hanzi)) return false
  return true
}

export function collectLessonGlosses(lesson: Lesson): VocabItem[] {
  const items = [
    ...(lesson.coreVocabulary ?? []),
    ...lesson.vocabulary,
    ...(lesson.chunks ?? []),
    ...(lesson.expressionFamily?.items ?? []),
  ]
  for (const line of lesson.dialogue) {
    for (const mini of line.miniLessons ?? []) {
      items.push({ hanzi: mini.title, en: mini.titleEn })
    }
  }
  return items.filter((item) => isHoverLexeme(item.hanzi))
}

export function mergeGlosses(lists: VocabItem[][]): Map<string, string> {
  const map = new Map<string, string>()
  for (const list of lists) {
    for (const item of list) {
      if (!isCleanWord(item.hanzi)) continue
      if (Array.from(item.hanzi).length > 6) continue
      if (!map.has(item.hanzi)) map.set(item.hanzi, item.en)
    }
  }
  return map
}

export type GlossToken = {
  kind: "word" | "text"
  hanzi: string
  en?: string
}

export function inspectableHanzi(lesson: Lesson) {
  const texts: string[] = [
    lesson.scenario.time,
    lesson.scenario.location,
    lesson.scenario.participants,
    lesson.scenario.topic,
  ]
  for (const line of lesson.dialogue) {
    texts.push(line.hanzi)
    for (const mini of line.miniLessons ?? []) {
      texts.push(...(mini.examples ?? []).map((item) => item.hanzi))
      texts.push(...(mini.compare ?? []).map((item) => item.hanzi))
    }
  }
  for (const mini of lesson.grammarFocus ?? []) {
    texts.push(...(mini.examples ?? []).map((item) => item.hanzi))
    texts.push(...(mini.compare ?? []).map((item) => item.hanzi))
  }
  for (const item of lesson.practiceSentences ?? []) texts.push(item.hanzi)
  for (const item of lesson.questions) texts.push(item.hanzi)
  return texts
}

export function tokenizeHanzi(text: string, glossary: Map<string, string>): GlossToken[] {
  const chars = Array.from(text)
  const maxWord = Math.max(1, ...[...glossary.keys()].map((word) => Array.from(word).length))
  const tokens: GlossToken[] = []
  let index = 0

  while (index < chars.length) {
    const char = chars[index]

    if (char === "〔") {
      let end = index + 1
      while (end < chars.length && chars[end] !== "〕") end += 1
      tokens.push({ kind: "text", hanzi: chars.slice(index, Math.min(end + 1, chars.length)).join("") })
      index = end + 1
      continue
    }

    if (!HANZI_RE.test(char)) {
      let end = index + 1
      while (end < chars.length && !HANZI_RE.test(chars[end]) && chars[end] !== "〔") end += 1
      tokens.push({ kind: "text", hanzi: chars.slice(index, end).join("") })
      index = end
      continue
    }

    let matched = char
    const limit = Math.min(maxWord, chars.length - index)
    for (let len = limit; len >= 2; len -= 1) {
      const slice = chars.slice(index, index + len)
      if (slice.some((item) => !HANZI_RE.test(item))) continue
      const word = slice.join("")
      if (glossary.has(word)) {
        matched = word
        break
      }
    }

    tokens.push({
      kind: "word",
      hanzi: matched,
      en: glossary.get(matched),
    })
    index += Array.from(matched).length
  }

  return tokens
}
