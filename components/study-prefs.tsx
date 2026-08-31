"use client"

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react"

import { parsePlaybackRate, type PlaybackRate } from "@/lib/playback-rate"

export type TextSize = "sm" | "md" | "lg"

export const SECTION_IDS = [
  "scenario",
  "dialogue",
  "coreVocab",
  "family",
  "chunks",
  "grammar",
  "practice",
  "fillBlanks",
  "stretchVocab",
  "quiz",
  "questions",
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export type StudyPrefs = {
  pinyin: boolean
  english: boolean
  ruby: boolean
  sectionSize: Record<SectionId, TextSize>
  playbackRate: PlaybackRate
}

const DEFAULT_SECTION_SIZE: Record<SectionId, TextSize> = {
  scenario: "sm",
  dialogue: "sm",
  coreVocab: "sm",
  family: "sm",
  chunks: "sm",
  grammar: "sm",
  practice: "sm",
  fillBlanks: "sm",
  stretchVocab: "sm",
  quiz: "sm",
  questions: "sm",
}

const DEFAULTS: StudyPrefs = {
  pinyin: true,
  english: true,
  ruby: true,
  sectionSize: DEFAULT_SECTION_SIZE,
  playbackRate: 1,
}

const STORAGE_KEY = "ruohan-study-prefs"
const EVENT = "ruohan-prefs"

function parseTextSize(value: unknown): TextSize {
  return value === "md" || value === "lg" ? value : "sm"
}

function parseSectionSize(parsed: {
  sectionSize?: Partial<Record<SectionId, unknown>>
  textSize?: unknown
  questionSize?: unknown
}): Record<SectionId, TextSize> {
  const vocab = parseTextSize(parsed.textSize)
  const questions = parseTextSize(parsed.questionSize)
  const stored = parsed.sectionSize ?? {}
  const next = { ...DEFAULT_SECTION_SIZE }
  for (const id of SECTION_IDS) {
    const value = stored[id]
    if (value === "sm" || value === "md" || value === "lg") {
      next[id] = value
    } else if (id === "coreVocab" || id === "family" || id === "chunks" || id === "stretchVocab") {
      next[id] = vocab
    } else if (id === "questions") {
      next[id] = questions
    }
  }
  return next
}

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? JSON.stringify(DEFAULTS)
  } catch {
    return JSON.stringify(DEFAULTS)
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

type StudyPrefsPatch = Omit<Partial<StudyPrefs>, "sectionSize"> & {
  sectionSize?: Partial<Record<SectionId, TextSize>>
}

const StudyPrefsContext = createContext<{
  prefs: StudyPrefs
  setPrefs: (next: StudyPrefsPatch) => void
} | null>(null)

export function StudyPrefsProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => JSON.stringify(DEFAULTS))
  const prefs = useMemo<StudyPrefs>(() => {
    try {
      const parsed = JSON.parse(raw) as Partial<StudyPrefs> & {
        textSize?: unknown
        questionSize?: unknown
      }
      const playbackRate = parsePlaybackRate(parsed.playbackRate)
      const sectionSize = parseSectionSize(parsed)
      return { ...DEFAULTS, ...parsed, sectionSize, playbackRate }
    } catch {
      return DEFAULTS
    }
  }, [raw])

  const setPrefs = useCallback(
    (next: StudyPrefsPatch) => {
      const merged: StudyPrefs = {
        ...prefs,
        ...next,
        sectionSize: { ...prefs.sectionSize, ...(next.sectionSize ?? {}) },
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
      window.dispatchEvent(new Event(EVENT))
    },
    [prefs],
  )

  const value = useMemo(() => ({ prefs, setPrefs }), [prefs, setPrefs])

  return <StudyPrefsContext.Provider value={value}>{children}</StudyPrefsContext.Provider>
}

export function useStudyPrefs() {
  const ctx = useContext(StudyPrefsContext)
  if (!ctx) {
    throw new Error("useStudyPrefs must be used inside StudyPrefsProvider")
  }
  return ctx
}

export function useSectionSize(id: SectionId) {
  const { prefs, setPrefs } = useStudyPrefs()
  const onChange = useCallback(
    (size: TextSize) => setPrefs({ sectionSize: { ...prefs.sectionSize, [id]: size } }),
    [id, prefs.sectionSize, setPrefs],
  )
  return [prefs.sectionSize[id], onChange] as const
}
