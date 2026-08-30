"use client"

import { useCallback, useEffect, useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"

import { getUnit } from "@/content/catalog"

const STORAGE_KEY = "ruohan-last-unit"
const EVENT = "ruohan-last-unit"
const DEFAULT_UNIT = 1

function parseUnitId(raw: string | null) {
  const id = Number(raw)
  return getUnit(id) ? id : DEFAULT_UNIT
}

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? String(DEFAULT_UNIT)
  } catch {
    return String(DEFAULT_UNIT)
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

function writeUnit(unitId: number) {
  if (!getUnit(unitId)) return
  try {
    if (localStorage.getItem(STORAGE_KEY) === String(unitId)) return
    localStorage.setItem(STORAGE_KEY, String(unitId))
  } catch {
    return
  }
  window.dispatchEvent(new Event(EVENT))
}

export function useLastUnit() {
  const raw = useSyncExternalStore(subscribe, readRaw, () => String(DEFAULT_UNIT))
  return parseUnitId(raw)
}

export function useRememberLastUnit() {
  const pathname = usePathname()
  const setLastUnit = useCallback((unitId: number) => writeUnit(unitId), [])

  useEffect(() => {
    const match = pathname.match(/^\/units\/(\d+)(?:\/|$)/)
    if (!match) return
    setLastUnit(Number(match[1]))
  }, [pathname, setLastUnit])
}
