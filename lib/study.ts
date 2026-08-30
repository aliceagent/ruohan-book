import { ALL_LESSONS, getLesson } from "@/content/lessons"
import { lessonVocabulary } from "@/content/unit-1"
import { vocabKey } from "@/hooks/use-progress"
import { LEARNING_GRACE_MS, isLearning, type SrsCard } from "@/lib/srs"
import { rubyToPhrase, rubyTokens } from "@/lib/pinyin"

export type StudyTab = "review" | "words" | "cards"
export type WordStatus = "new" | "learning" | "due" | "known"
export type UnitFilter = "all" | number
export type SessionSize = 10 | 20 | 0

export type StudyWord = {
  key: string
  hanzi: string
  en: string
  lessonId: string
  lessonTitle: string
  unitId: number
}

export const LIVE_UNIT_IDS = [...new Set(ALL_LESSONS.map((lesson) => lesson.unitId))].sort(
  (a, b) => a - b,
)

export const STUDY_WORDS: StudyWord[] = ALL_LESSONS.flatMap((lesson) =>
  lessonVocabulary(lesson).map((item) => ({
    ...item,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    unitId: lesson.unitId,
    key: vocabKey(lesson.id, item.hanzi),
  })),
)

export function parseStudyTab(value: string | null): StudyTab {
  return value === "words" || value === "cards" ? value : "review"
}

export function parseUnitFilter(value: string | null, fallback: number): UnitFilter {
  if (value === "all") return "all"
  const id = Number.parseInt(value ?? "", 10)
  return Number.isInteger(id) && LIVE_UNIT_IDS.includes(id) ? id : fallback
}

export function parseSessionSize(value: string | null): SessionSize {
  if (value === "20") return 20
  if (value === "all" || value === "0") return 0
  return 10
}

export function parseWordStatus(value: string | null): WordStatus | "all" {
  return value === "new" || value === "learning" || value === "due" || value === "known"
    ? value
    : "all"
}

export function pinyinPlain(hanzi: string) {
  return rubyToPhrase(rubyTokens(hanzi))
    .toLowerCase()
    .replace(/[^a-züv0-9]/g, "")
}

export function wordMatchesQuery(word: StudyWord, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const compact = q.replace(/\s+/g, "")
  return (
    word.hanzi.includes(query.trim()) ||
    word.en.toLowerCase().includes(q) ||
    word.lessonId.toLowerCase().includes(q) ||
    word.lessonTitle.includes(query.trim()) ||
    pinyinPlain(word.hanzi).includes(compact)
  )
}

export function wordStatus(
  srs: Record<string, SrsCard>,
  knownVocab: string[],
  key: string,
  now: number,
): WordStatus {
  const card = srs[key]
  if (!card) return knownVocab.includes(key) ? "known" : "new"
  if (isLearning(card)) return "learning"
  if (card.due <= now + LEARNING_GRACE_MS) return "due"
  return "known"
}

export function filterStudyWords(
  words: StudyWord[],
  opts: {
    unit: UnitFilter
    lessonId: string
    status: WordStatus | "all"
    query: string
    srs: Record<string, SrsCard>
    knownVocab: string[]
    now: number
  },
) {
  return words.filter((word) => {
    if (opts.unit !== "all" && word.unitId !== opts.unit) return false
    if (opts.lessonId !== "all" && word.lessonId !== opts.lessonId) return false
    if (!wordMatchesQuery(word, opts.query)) return false
    if (opts.status !== "all" && wordStatus(opts.srs, opts.knownVocab, word.key, opts.now) !== opts.status) {
      return false
    }
    return true
  })
}

export function groupWordsByLesson(words: StudyWord[]) {
  const groups: { lessonId: string; lessonTitle: string; unitId: number; items: StudyWord[] }[] = []
  const index = new Map<string, number>()
  for (const word of words) {
    const existing = index.get(word.lessonId)
    if (existing == null) {
      index.set(word.lessonId, groups.length)
      groups.push({
        lessonId: word.lessonId,
        lessonTitle: word.lessonTitle,
        unitId: word.unitId,
        items: [word],
      })
    } else {
      groups[existing].items.push(word)
    }
  }
  return groups
}

export function exampleLineFor(word: StudyWord) {
  const lesson = getLesson(word.lessonId)
  return lesson?.dialogue.find((line) => line.hanzi.includes(word.hanzi))
}

export function lessonsForFilter(unit: UnitFilter) {
  return unit === "all" ? ALL_LESSONS : ALL_LESSONS.filter((lesson) => lesson.unitId === unit)
}
