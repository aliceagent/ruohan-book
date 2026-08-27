import type { Lesson, VocabItem } from "@/lib/types"
import { UNIT_1_LESSONS } from "@/content/unit-1-part-a"
import { UNIT_1_LESSONS_B } from "@/content/unit-1-part-b"

/**
 * RULE: every dialogue line in every lesson must have mini lessons.
 * Assemble lines with notedLine(LESSON_X_Y_LINE_NOTES, speaker, hanzi, en).
 * Keys are the exact 汉字, including punctuation and textbook 〔〕 notes.
 * This loop throws at import time so a lesson cannot ship without notes.
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
