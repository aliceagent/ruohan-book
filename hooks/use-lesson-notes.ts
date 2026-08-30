"use client"

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"

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

function persist(lessonId: string, draft: string) {
  if (!lessonId) return
  const current = parse(readRaw())
  const previous = current[lessonId] ?? ""
  if (draft === previous) return
  if (!draft) {
    if (!(lessonId in current)) return
    const { [lessonId]: _removed, ...rest } = current
    writeMap(rest)
    return
  }
  writeMap({ ...current, [lessonId]: draft })
}

export function useLessonNotes(lessonId: string) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "{}")
  const stored = useMemo(() => (lessonId ? parse(raw)[lessonId] ?? "" : ""), [raw, lessonId])
  const [draft, setDraft] = useState(stored)
  const draftRef = useRef(draft)
  draftRef.current = draft

  useEffect(() => {
    setDraft(stored)
  }, [stored, lessonId])

  useEffect(() => {
    if (!lessonId) return
    const handle = window.setTimeout(() => persist(lessonId, draft), 250)
    return () => window.clearTimeout(handle)
  }, [draft, lessonId])

  useEffect(() => {
    if (!lessonId) return
    return () => persist(lessonId, draftRef.current)
  }, [lessonId])

  const setNote = useCallback((value: string) => {
    setDraft(value)
  }, [])

  const clearNote = useCallback(() => {
    setDraft("")
    persist(lessonId, "")
  }, [lessonId])

  const saveNote = useCallback(() => {
    persist(lessonId, draftRef.current)
  }, [lessonId])

  return {
    note: draft,
    setNote,
    clearNote,
    saveNote,
    hasNote: Boolean(draft.trim()),
  }
}
