import type {
  DialogueLine,
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
 */
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
