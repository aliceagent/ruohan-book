import type {
  DialogueLine,
  FillBlankItem,
  MiniLesson,
  MiniLessonExample,
  VocabItem,
} from "@/lib/types"

export function v(hanzi: string, en: string): VocabItem {
  return { hanzi, en }
}

export function ex(hanzi: string, en: string): MiniLessonExample {
  return { hanzi, en }
}

/**
 * Multiple-choice fill-in. `distractors` are wrong answers the learner taps
 * instead of typing. The correct `answer` is prepended; the UI shuffles.
 */
export function fb(
  id: string,
  promptEn: string,
  prefix: string,
  suffix: string,
  answer: string,
  distractors: string[],
): FillBlankItem {
  if (distractors.length < 2) {
    throw new Error(`Fill-blank ${id} needs at least two distractors`)
  }
  if (distractors.includes(answer)) {
    throw new Error(`Fill-blank ${id} distractor duplicates the answer`)
  }
  return {
    id,
    promptEn,
    prefix,
    suffix,
    answer,
    choices: [answer, ...distractors],
  }
}

export function ml(
  title: string,
  titleEn: string,
  body: string[],
  extras: {
    pattern?: string
    examples?: MiniLessonExample[]
    compare?: MiniLesson["compare"]
  } = {}
): MiniLesson {
  return {
    title,
    titleEn,
    body,
    ...extras,
  }
}

/**
 * RULE: every dialogue line in every lesson must have mini lessons.
 * Build lines with notedLine(LESSON_X_Y_LINE_NOTES, speaker, hanzi, en) — never a
 * bare `{ speaker, hanzi, en }` helper. Keys must match the line 汉字 EXACTLY,
 * including punctuation (？！，。) and textbook notes like 〔吸烟〕 / 〔单反相机〕.
 * This throws at module load if a key is missing, so a lesson cannot ship without notes.
 *
 * RULE: every lesson also needs five priority grammar cards (五个优先句型).
 * Export LESSON_X_Y_GRAMMAR_FOCUS with at least five MiniLesson items (title,
 * titleEn, pattern, body, examples) and set lesson.grammarFocus. content/unit-1.ts
 * throws if a lesson ships with fewer than five.
 *
 * RULE: every lesson also needs the four 1-1 extras:
 *   chunks (值得整句记的), expressionFamily (一套说法), practiceSentences (练习句子),
 *   fillBlanks (填空练习, via fb()). content/unit-1.ts throws if any are missing
 *   or too short.
 *
 * RULE: fill-in items are multiple choice, never typed. Build them with fb().
 */
export const GRAMMAR_FOCUS_MIN = 5
export const CHUNKS_MIN = 8
export const FAMILY_MIN = 6
export const PRACTICE_MIN = 6
export const FILL_BLANKS_MIN = 6

export function assertLessonReady(lesson: import("@/lib/types").Lesson) {
  for (const line of lesson.dialogue) {
    if (!line.miniLessons?.length) {
      throw new Error(`Lesson ${lesson.id} is missing mini lessons for: ${line.hanzi}`)
    }
  }
  if ((lesson.grammarFocus?.length ?? 0) < GRAMMAR_FOCUS_MIN) {
    throw new Error(
      `Lesson ${lesson.id} needs ${GRAMMAR_FOCUS_MIN} grammar-focus cards (五个优先句型), got ${lesson.grammarFocus?.length ?? 0}`,
    )
  }
  if ((lesson.chunks?.length ?? 0) < CHUNKS_MIN) {
    throw new Error(
      `Lesson ${lesson.id} needs ${CHUNKS_MIN} chunks (值得整句记的), got ${lesson.chunks?.length ?? 0}`,
    )
  }
  if (!lesson.expressionFamily?.title || (lesson.expressionFamily.items?.length ?? 0) < FAMILY_MIN) {
    throw new Error(
      `Lesson ${lesson.id} needs an expressionFamily with ${FAMILY_MIN}+ items (一套说法)`,
    )
  }
  if ((lesson.practiceSentences?.length ?? 0) < PRACTICE_MIN) {
    throw new Error(
      `Lesson ${lesson.id} needs ${PRACTICE_MIN} practice sentences (练习句子), got ${lesson.practiceSentences?.length ?? 0}`,
    )
  }
  if ((lesson.fillBlanks?.length ?? 0) < FILL_BLANKS_MIN) {
    throw new Error(
      `Lesson ${lesson.id} needs ${FILL_BLANKS_MIN} fill-blanks (填空练习), got ${lesson.fillBlanks?.length ?? 0}`,
    )
  }
  for (const blank of lesson.fillBlanks ?? []) {
    const unique = new Set(blank.choices)
    if (unique.size < 3 || !unique.has(blank.answer)) {
      throw new Error(
        `Lesson ${lesson.id} fill-blank ${blank.id} must be multiple choice (3+ options including the answer)`,
      )
    }
  }
}

export function notedLine(
  notes: Record<string, MiniLesson[]>,
  speaker: DialogueLine["speaker"],
  hanzi: string,
  en: string
): DialogueLine {
  const miniLessons = notes[hanzi]
  if (!miniLessons?.length) {
    throw new Error(`Missing mini lessons for dialogue line: ${hanzi}`)
  }
  return { speaker, hanzi, en, miniLessons }
}
