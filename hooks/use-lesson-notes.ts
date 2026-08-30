"use client"

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react"

const STORAGE_KEY = "ruohan-lesson-notes"
const EVENT = "ruohan-lesson-notes"

type NotesMap = Record<string, string>

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "{}"
  } catch {
    return "{}"
  }
}

function parse(raw: string): NotesMap {
  try {
    const parsed = JSON.parse(raw) as NotesMap
    return parsed && typeof parsed === "object" ? parsed : {}
  } catch {
    return {}
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

function writeMap(next: NotesMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  window.dispatchEvent(new Event(EVENT))
}

export function useLessonNotes(lessonId: string) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "{}")
  const stored = useMemo(() => parse(raw)[lessonId] ?? "", [raw, lessonId])
  const [draft, setDraft] = useState(stored)

  useEffect(() => {
    setDraft(stored)
  }, [stored, lessonId])

  useEffect(() => {
    const handle = window.setTimeout(() => {
      if (draft === stored) return
      const current = parse(readRaw())
      if (!draft.trim()) {
        if (!(lessonId in current)) return
        const { [lessonId]: _removed, ...rest } = current
        writeMap(rest)
        return
      }
      writeMap({ ...current, [lessonId]: draft })
    }, 250)
    return () => window.clearTimeout(handle)
  }, [draft, lessonId, stored])

  const setNote = useCallback((value: string) => {
    setDraft(value)
  }, [])

  return {
    note: draft,
    setNote,
    hasNote: Boolean(draft.trim()),
  }
}
