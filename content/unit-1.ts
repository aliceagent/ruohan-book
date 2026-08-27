import type { Lesson } from "@/lib/types"
import { UNIT_1_LESSONS } from "@/content/unit-1-part-a"
import { UNIT_1_LESSONS_B } from "@/content/unit-1-part-b"

export const UNIT_1: Lesson[] = [...UNIT_1_LESSONS, ...UNIT_1_LESSONS_B]

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
    lesson.vocabulary.map((item) => ({
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
    vocabulary: UNIT_1.reduce((sum, lesson) => sum + lesson.vocabulary.length, 0),
    questions: UNIT_1.reduce((sum, lesson) => sum + lesson.questions.length, 0),
  }
}
