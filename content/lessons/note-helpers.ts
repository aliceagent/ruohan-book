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
 * RULE: fill-in items are multiple choice, never typed. Build them with fb().
 */
export const GRAMMAR_FOCUS_MIN = 5

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
