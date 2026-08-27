"use client"

import { useCallback, useMemo, useSyncExternalStore } from "react"

const STORAGE_KEY = "ruohan-progress"
const EVENT = "ruohan-progress"

type QuizScore = {
  correct: number
  total: number
}

type Progress = {
  completedLessons: string[]
  practicedQuestions: string[]
  knownVocab: string[]
  quizBest: Record<string, QuizScore>
}

const EMPTY: Progress = {
  completedLessons: [],
  practicedQuestions: [],
  knownVocab: [],
  quizBest: {},
}

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? JSON.stringify(EMPTY)
  } catch {
    return JSON.stringify(EMPTY)
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

function parse(raw: string): Progress {
  try {
    const parsed = JSON.parse(raw) as Partial<Progress>
    return {
      ...EMPTY,
      ...parsed,
      quizBest: parsed.quizBest ?? {},
    }
  } catch {
    return EMPTY
  }
}

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id]
}

export function useProgress() {
  const raw = useSyncExternalStore(subscribe, readRaw, () => JSON.stringify(EMPTY))
  const progress = useMemo(() => parse(raw), [raw])

  const update = useCallback((patch: (current: Progress) => Progress) => {
    const next = patch(parse(readRaw()))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return {
    progress,
    toggleLesson: (id: string) =>
      update((current) => ({
        ...current,
        completedLessons: toggle(current.completedLessons, id),
      })),
    toggleQuestion: (id: string) =>
      update((current) => ({
        ...current,
        practicedQuestions: toggle(current.practicedQuestions, id),
      })),
    toggleVocab: (id: string) =>
      update((current) => ({
        ...current,
        knownVocab: toggle(current.knownVocab, id),
      })),
    recordQuiz: (id: string, correct: number, total: number) =>
      update((current) => {
        const previous = current.quizBest[id]
        const better =
          !previous ||
          correct > previous.correct ||
          (correct === previous.correct && total >= previous.total)
        return {
          ...current,
          quizBest: {
            ...current.quizBest,
            [id]: better || !previous ? { correct, total } : previous,
          },
        }
      }),
  }
}

export function questionKey(lessonId: string, n: number) {
  return `${lessonId}-q${n}`
}

export function vocabKey(lessonId: string, hanzi: string) {
  return `${lessonId}:${hanzi}`
}
