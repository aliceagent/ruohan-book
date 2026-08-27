"use client"

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react"

import { parsePlaybackRate, type PlaybackRate } from "@/lib/playback-rate"

export type TextSize = "sm" | "md" | "lg"

export type StudyPrefs = {
  pinyin: boolean
  english: boolean
  ruby: boolean
  textSize: TextSize
  questionSize: TextSize
  playbackRate: PlaybackRate
}

const DEFAULTS: StudyPrefs = {
  pinyin: true,
  english: true,
  ruby: true,
  textSize: "sm",
  questionSize: "sm",
  playbackRate: 1,
}

const STORAGE_KEY = "ruohan-study-prefs"
const EVENT = "ruohan-prefs"

function parseTextSize(value: unknown): TextSize {
  return value === "md" || value === "lg" ? value : "sm"
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

const StudyPrefsContext = createContext<{
  prefs: StudyPrefs
  setPrefs: (next: Partial<StudyPrefs>) => void
} | null>(null)

export function StudyPrefsProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => JSON.stringify(DEFAULTS))
  const prefs = useMemo<StudyPrefs>(() => {
    try {
      const parsed = JSON.parse(raw) as Partial<StudyPrefs>
      const textSize = parseTextSize(parsed.textSize)
      const questionSize = parseTextSize(parsed.questionSize)
      const playbackRate = parsePlaybackRate(parsed.playbackRate)
      return { ...DEFAULTS, ...parsed, textSize, questionSize, playbackRate }
    } catch {
      return DEFAULTS
    }
  }, [raw])

  const setPrefs = useCallback(
    (next: Partial<StudyPrefs>) => {
      const merged = { ...prefs, ...next }
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
