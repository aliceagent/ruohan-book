import type { Lesson, VocabItem } from "@/lib/types"
import { UNIT_1_LESSONS } from "@/content/unit-1-part-a"
import { UNIT_1_LESSONS_B } from "@/content/unit-1-part-b"
import { assertLessonReady } from "@/content/lessons/note-helpers"

/**
 * RULE: every dialogue line in every lesson must have mini lessons.
 * RULE: every lesson must have grammarFocus with at least five priority patterns
 * (五个优先句型) — export LESSON_X_Y_GRAMMAR_FOCUS and set lesson.grammarFocus.
 * RULE: every lesson must also ship chunks, expressionFamily, practiceSentences,
 * and fillBlanks (the 1-1 extras). Assemble lines with notedLine(...).
 * Keys are the exact 汉字, including punctuation and textbook 〔〕 notes.
 * This loop throws at import time so a lesson cannot ship without notes or grammar cards.
 * Fill-in items, if present, must be multiple choice (fb()), never a typed blank.
 */
export const UNIT_1: Lesson[] = [...UNIT_1_LESSONS, ...UNIT_1_LESSONS_B]

for (const lesson of UNIT_1) assertLessonReady(lesson)

export function lessonVocabulary(lesson: Lesson): VocabItem[] {
  const seen = new Set<string>()
  return [...(lesson.coreVocabulary ?? []), ...lesson.vocabulary].filter((item) => {
    if (seen.has(item.hanzi)) return false
    seen.add(item.hanzi)
    return true
  })
}
