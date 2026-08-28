import type { Lesson, VocabItem } from "@/lib/types"
import { UNIT_1_LESSONS } from "@/content/unit-1-part-a"
import { UNIT_1_LESSONS_B } from "@/content/unit-1-part-b"
import { CHUNKS_MIN, FAMILY_MIN, FILL_BLANKS_MIN, GRAMMAR_FOCUS_MIN, PRACTICE_MIN } from "@/content/lessons/note-helpers"

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

for (const lesson of UNIT_1) {
  for (const line of lesson.dialogue) {
    if (!line.miniLessons?.length) {
      throw new Error(
        `Lesson ${lesson.id} is missing mini lessons for: ${line.hanzi}`,
      )
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

export function lessonVocabulary(lesson: Lesson): VocabItem[] {
  const seen = new Set<string>()
  return [...(lesson.coreVocabulary ?? []), ...lesson.vocabulary].filter((item) => {
    if (seen.has(item.hanzi)) return false
    seen.add(item.hanzi)
    return true
  })
}

export function getLesson(id: string) {
  return UNIT_1.find((lesson) => lesson.id === id)
}

export function getLessonIndex(id: string) {
  return UNIT_1.findIndex((lesson) => lesson.id === id)
}

export function adjacentLessons(id: string) {
  const index = getLessonIndex(id)
  return {
    prev: index > 0 ? UNIT_1[index - 1] : undefined,
    next: index >= 0 && index < UNIT_1.length - 1 ? UNIT_1[index + 1] : undefined,
  }
}

export function allVocabulary() {
  return UNIT_1.flatMap((lesson) =>
    lessonVocabulary(lesson).map((item) => ({
      ...item,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    })),
  )
}

export function allQuestions() {
  return UNIT_1.flatMap((lesson) =>
    lesson.questions.map((item) => ({
      ...item,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    })),
  )
}

export function unitStats() {
  return {
    lessons: UNIT_1.length,
    dialogueLines: UNIT_1.reduce((sum, lesson) => sum + lesson.dialogue.length, 0),
    vocabulary: UNIT_1.reduce((sum, lesson) => sum + lessonVocabulary(lesson).length, 0),
    questions: UNIT_1.reduce((sum, lesson) => sum + lesson.questions.length, 0),
  }
}
