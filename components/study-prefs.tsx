"use client"

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react"

export type StudyPrefs = {
  pinyin: boolean
  english: boolean
  ruby: boolean
}

const DEFAULTS: StudyPrefs = {
  pinyin: true,
  english: true,
  ruby: true,
}

const STORAGE_KEY = "ruohan-study-prefs"
const EVENT = "ruohan-prefs"

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
      return { ...DEFAULTS, ...JSON.parse(raw) }
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
