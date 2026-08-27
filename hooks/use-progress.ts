"use client"

import { useCallback, useMemo, useSyncExternalStore } from "react"

import {
  DAY_MS,
  STARTING_EASE,
  review,
  seedKnown,
  type SrsCard,
  type SrsGrade,
} from "@/lib/srs"

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
  srs: Record<string, SrsCard>
}

const EMPTY: Progress = {
  completedLessons: [],
  practicedQuestions: [],
  knownVocab: [],
  quizBest: {},
  srs: {},
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
      srs: parsed.srs ?? {},
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
    const current = parse(readRaw())
    const next = patch(current)
    if (next === current) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event(EVENT))
  }, [])

  const hydrateSrs = useCallback(() => {
    update((current) => {
      const srs = seedKnown(current.srs, current.knownVocab, Date.now())
      if (srs === current.srs) return current
      return { ...current, srs }
    })
  }, [update])

  const reviewSrs = useCallback(
    (id: string, grade: SrsGrade) =>
      update((current) => {
        const now = Date.now()
        const srs = seedKnown(current.srs, current.knownVocab, now)
        const nextCard = review(srs[id], grade, now)
        const known = new Set(current.knownVocab)
        if (grade === "again") known.delete(id)
        if (grade === "good" || grade === "easy") known.add(id)
        return {
          ...current,
          srs: { ...srs, [id]: nextCard },
          knownVocab: [...known],
        }
      }),
    [update],
  )

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
      update((current) => {
        const known = current.knownVocab.includes(id)
        const now = Date.now()
        if (known) {
          return {
            ...current,
            knownVocab: current.knownVocab.filter((item) => item !== id),
            srs: {
              ...current.srs,
              [id]: {
                due: now,
                interval: 0,
                ease: current.srs[id]?.ease ?? STARTING_EASE,
                reps: 0,
                lapses: current.srs[id]?.lapses ?? 0,
                firstReviewed: current.srs[id]?.firstReviewed,
              },
            },
          }
        }
        return {
          ...current,
          knownVocab: [...current.knownVocab, id],
          srs: {
            ...current.srs,
            [id]: {
              due: now + 4 * DAY_MS,
              interval: 4,
              ease: current.srs[id]?.ease ?? STARTING_EASE,
              reps: Math.max(2, current.srs[id]?.reps ?? 0),
              lapses: current.srs[id]?.lapses ?? 0,
              firstReviewed: current.srs[id]?.firstReviewed ?? now - 7 * DAY_MS,
            },
          },
        }
      }),
    hydrateSrs,
    reviewSrs,
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
