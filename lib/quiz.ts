import { UNIT_1 } from "@/content/unit-1"
import type { DialogueLine, Lesson, VocabItem } from "@/lib/types"

export type QuizKind = "vocab-en" | "vocab-zh" | "line-en" | "scene"

export type QuizChoice = {
  id: string
  hanzi?: string
  en: string
}

export type QuizItem = {
  id: string
  lessonId: string
  kind: QuizKind
  instruction: string
  instructionEn: string
  stemHanzi?: string
  stemEn?: string
  choices: QuizChoice[]
  correctId: string
}

export type QuizSet = {
  id: string
  title: string
  titleEn: string
  lessonId?: string
  items: QuizItem[]
}

function hashString(value: string) {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function mulberry32(seed: number) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let n = Math.imul(t ^ (t >>> 15), 1 | t)
    n ^= n + Math.imul(n ^ (n >>> 7), 61 | n)
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296
  }
}

function shuffle<T>(items: T[], seed: string) {
  const next = [...items]
  const random = mulberry32(hashString(seed))
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function uniqueBy<T>(items: T[], key: (item: T) => string) {
  const seen = new Set<string>()
  return items.filter((item) => {
    const id = key(item)
    if (!id || seen.has(id)) return false
    seen.add(id)
    return true
  })
}

function spokenLines(lesson: Lesson) {
  return lesson.dialogue.filter(
    (line) => line.speaker !== "stage" && line.hanzi.replace(/[（）()…，。？！、\s]/g, "").length >= 4,
  )
}

function lessonQuizVocab(lesson: Lesson) {
  return uniqueBy([...(lesson.coreVocabulary ?? []), ...lesson.vocabulary], (item) => item.hanzi)
}

function vocabPool(lessons: Lesson[]) {
  return uniqueBy(
    lessons.flatMap((lesson) =>
      lessonQuizVocab(lesson).map((item) => ({ ...item, lessonId: lesson.id })),
    ),
    (item) => item.hanzi,
  )
}

function linePool(lessons: Lesson[]) {
  return uniqueBy(
    lessons.flatMap((lesson) =>
      spokenLines(lesson).map((line) => ({ ...line, lessonId: lesson.id })),
    ),
    (line) => line.hanzi,
  )
}

function withChoices(
  item: Omit<QuizItem, "choices" | "correctId">,
  correct: QuizChoice,
  distractors: QuizChoice[],
): QuizItem | null {
  const uniqueDistractors = uniqueBy(
    distractors.filter((choice) => choice.id !== correct.id),
    (choice) => choice.id,
  )
  if (uniqueDistractors.length < 3) return null
  const picked = shuffle(uniqueDistractors, `${item.id}-d`).slice(0, 3)
  const choices = shuffle([correct, ...picked], `${item.id}-c`)
  return { ...item, choices, correctId: correct.id }
}

function vocabEnItem(lesson: Lesson, item: VocabItem, pool: VocabItem[]): QuizItem | null {
  return withChoices(
    {
      id: `${lesson.id}-vocab-en-${item.hanzi}`,
      lessonId: lesson.id,
      kind: "vocab-en",
      instruction: "选择正确的英文意思",
      instructionEn: "Choose the English meaning",
      stemHanzi: item.hanzi,
    },
    { id: item.en, en: item.en },
    pool.filter((other) => other.hanzi !== item.hanzi).map((other) => ({ id: other.en, en: other.en })),
  )
}

function vocabZhItem(lesson: Lesson, item: VocabItem, pool: VocabItem[]): QuizItem | null {
  return withChoices(
    {
      id: `${lesson.id}-vocab-zh-${item.hanzi}`,
      lessonId: lesson.id,
      kind: "vocab-zh",
      instruction: "选择正确的中文词",
      instructionEn: "Choose the Chinese word",
      stemEn: item.en,
    },
    { id: item.hanzi, hanzi: item.hanzi, en: item.en },
    pool
      .filter((other) => other.hanzi !== item.hanzi)
      .map((other) => ({ id: other.hanzi, hanzi: other.hanzi, en: other.en })),
  )
}

function lineEnItem(lesson: Lesson, line: DialogueLine, pool: DialogueLine[]): QuizItem | null {
  return withChoices(
    {
      id: `${lesson.id}-line-${line.hanzi.slice(0, 12)}`,
      lessonId: lesson.id,
      kind: "line-en",
      instruction: "这句话是什么意思？",
      instructionEn: "What does this line mean?",
      stemHanzi: line.hanzi,
    },
    { id: line.en, en: line.en },
    pool.filter((other) => other.hanzi !== line.hanzi).map((other) => ({ id: other.en, en: other.en })),
  )
}

function sceneItem(lesson: Lesson, field: "location" | "topic", others: Lesson[]): QuizItem | null {
  const prompt =
    field === "location"
      ? { zh: "这段对话发生在哪里？", en: "Where does this conversation take place?" }
      : { zh: "他们在聊什么？", en: "What are they talking about?" }
  const correctHanzi = lesson.scenario[field]
  const correctEn = field === "location" ? lesson.scenario.locationEn : lesson.scenario.topicEn
  return withChoices(
    {
      id: `${lesson.id}-scene-${field}`,
      lessonId: lesson.id,
      kind: "scene",
      instruction: prompt.zh,
      instructionEn: prompt.en,
      stemHanzi: lesson.title,
      stemEn: `${lesson.id} · ${lesson.titleEn}`,
    },
    { id: correctHanzi, hanzi: correctHanzi, en: correctEn },
    others
      .filter((other) => other.id !== lesson.id)
      .map((other) => ({
        id: other.scenario[field],
        hanzi: other.scenario[field],
        en: field === "location" ? other.scenario.locationEn : other.scenario.topicEn,
      })),
  )
}

export function buildLessonQuiz(lesson: Lesson, allLessons: Lesson[] = UNIT_1): QuizItem[] {
  const localVocab = lessonQuizVocab(lesson)
  const unitVocab = vocabPool(allLessons)
  const localLines = spokenLines(lesson)
  const unitLines = linePool(allLessons)

  const vocabEn = shuffle(localVocab, `${lesson.id}-ve`)
    .map((item) => vocabEnItem(lesson, item, unitVocab))
    .filter((item): item is QuizItem => Boolean(item))
    .slice(0, 4)

  const usedHanzi = new Set(vocabEn.map((item) => item.stemHanzi))
  const vocabZh = shuffle(localVocab, `${lesson.id}-vz`)
    .filter((item) => !usedHanzi.has(item.hanzi))
    .map((item) => vocabZhItem(lesson, item, unitVocab))
    .filter((item): item is QuizItem => Boolean(item))
    .slice(0, 2)

  const lines = shuffle(localLines, `${lesson.id}-ln`)
    .map((line) => lineEnItem(lesson, line, unitLines))
    .filter((item): item is QuizItem => Boolean(item))
    .slice(0, 3)

  const sceneField: "location" | "topic" = hashString(lesson.id) % 2 === 0 ? "location" : "topic"
  const scene = sceneItem(lesson, sceneField, allLessons)

  return [...vocabEn, ...vocabZh, ...lines, ...(scene ? [scene] : [])]
}

export function getLessonQuiz(lessonId: string): QuizSet | undefined {
  const lesson = UNIT_1.find((item) => item.id === lessonId)
  if (!lesson) return undefined
  return {
    id: lesson.id,
    title: `${lesson.id} ${lesson.title}`,
    titleEn: lesson.titleEn,
    lessonId: lesson.id,
    items: buildLessonQuiz(lesson),
  }
}

export function getUnitQuiz(): QuizSet {
  const items = UNIT_1.flatMap((lesson) => {
    const quiz = buildLessonQuiz(lesson)
    return shuffle(quiz, `unit-mix-${lesson.id}`).slice(0, 2)
  })
  return {
    id: "unit-1",
    title: "第一单元 综合测验",
    titleEn: "Unit 1 mixed quiz",
    items: shuffle(items, "unit-1-mix").slice(0, 16),
  }
}

export function getQuiz(quizId: string): QuizSet | undefined {
  if (quizId === "unit-1") return getUnitQuiz()
  return getLessonQuiz(quizId)
}

export function allLessonQuizzes() {
  return UNIT_1.map((lesson) => getLessonQuiz(lesson.id)!).filter(Boolean)
}
