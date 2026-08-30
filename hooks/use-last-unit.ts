"use client"

import { usePathname } from "next/navigation"
import { useLayoutEffect, useSyncExternalStore } from "react"

import {
  DEFAULT_LAST_UNIT,
  LAST_UNIT_EVENT,
  LAST_UNIT_KEY,
  LAST_UNIT_MAX_AGE,
  parseLastUnitId,
  unitIdFromPath,
} from "@/lib/last-unit"

function readCookie(): string | null {
  if (typeof document === "undefined") return null
  const parts = document.cookie.split("; ")
  const row = parts.find((part) => part.startsWith(`${LAST_UNIT_KEY}=`))
  return row ? decodeURIComponent(row.slice(LAST_UNIT_KEY.length + 1)) : null
}

function writeCookie(unitId: number) {
  document.cookie = `${LAST_UNIT_KEY}=${unitId}; Path=/; Max-Age=${LAST_UNIT_MAX_AGE}; SameSite=Lax`
}

function readRaw() {
  try {
    const stored = localStorage.getItem(LAST_UNIT_KEY)
    if (stored) return stored
  } catch {
    // ignore
  }
  return readCookie() ?? String(DEFAULT_LAST_UNIT)
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(LAST_UNIT_EVENT, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(LAST_UNIT_EVENT, onChange)
  }
}

export function rememberLastUnit(unitId: number) {
  const parsed = parseLastUnitId(String(unitId))
  if (parsed !== unitId) return
  const value = String(unitId)
  let changed = false
  try {
    if (localStorage.getItem(LAST_UNIT_KEY) !== value) {
      localStorage.setItem(LAST_UNIT_KEY, value)
      changed = true
    }
  } catch {
    // ignore
  }
  try {
    if (readCookie() !== value) {
      writeCookie(unitId)
      changed = true
    }
  } catch {
    // ignore
  }
  if (changed) window.dispatchEvent(new Event(LAST_UNIT_EVENT))
}

export function useLastUnit(initialLastUnit = DEFAULT_LAST_UNIT) {
  const pathname = usePathname()
  const raw = useSyncExternalStore(subscribe, readRaw, () => String(initialLastUnit))
  const fromPath = unitIdFromPath(pathname)

  useLayoutEffect(() => {
    if (fromPath) rememberLastUnit(fromPath)
  }, [fromPath])

  return fromPath ?? parseLastUnitId(raw)
}
