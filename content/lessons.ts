import { UNIT_1, lessonVocabulary } from "@/content/unit-1"
import { UNIT_2 } from "@/content/unit-2"
import type { Lesson } from "@/lib/types"

export const ALL_LESSONS: Lesson[] = [...UNIT_1, ...UNIT_2]

export function lessonsForUnit(unitId: number) {
  return ALL_LESSONS.filter((lesson) => lesson.unitId === unitId)
}

export function getLesson(id: string) {
  return ALL_LESSONS.find((lesson) => lesson.id === id)
}

export function getLessonIndex(id: string) {
  return ALL_LESSONS.findIndex((lesson) => lesson.id === id)
}

export function adjacentLessons(id: string) {
  const lesson = getLesson(id)
  if (!lesson) return { prev: undefined, next: undefined }
  const unitLessons = lessonsForUnit(lesson.unitId)
  const index = unitLessons.findIndex((item) => item.id === id)
  return {
    prev: index > 0 ? unitLessons[index - 1] : undefined,
    next: index >= 0 && index < unitLessons.length - 1 ? unitLessons[index + 1] : undefined,
  }
}

export function allVocabulary() {
  return ALL_LESSONS.flatMap((lesson) =>
    lessonVocabulary(lesson).map((item) => ({
      ...item,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    })),
  )
}

export function allQuestions() {
  return ALL_LESSONS.flatMap((lesson) =>
    lesson.questions.map((item) => ({
      ...item,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    })),
  )
}

export function unitStats(unitId?: number) {
  const lessons = unitId ? lessonsForUnit(unitId) : ALL_LESSONS
  return {
    lessons: lessons.length,
    dialogueLines: lessons.reduce((sum, lesson) => sum + lesson.dialogue.length, 0),
    vocabulary: lessons.reduce((sum, lesson) => sum + lessonVocabulary(lesson).length, 0),
    questions: lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0),
  }
}
