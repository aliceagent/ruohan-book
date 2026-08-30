"use client"

import { usePathname } from "next/navigation"
import { useEffect, useSyncExternalStore } from "react"

import { getUnit } from "@/content/catalog"

const STORAGE_KEY = "ruohan-last-unit"
const CHANGE_EVENT = "ruohan-last-unit"
const DEFAULT_UNIT = 1

function parseUnitId(raw: string | null): number {
  const id = Number.parseInt(raw ?? "", 10)
  return Number.isInteger(id) && getUnit(id) ? id : DEFAULT_UNIT
}

function readStoredUnit(): number {
  if (typeof window === "undefined") return DEFAULT_UNIT
  try {
    return parseUnitId(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return DEFAULT_UNIT
  }
}

function writeUnit(id: number) {
  if (typeof window === "undefined" || !getUnit(id)) return
  if (readStoredUnit() === id) return
  try {
    window.localStorage.setItem(STORAGE_KEY, String(id))
  } catch {
    return
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener(CHANGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener(CHANGE_EVENT, onStoreChange)
  }
}

function unitFromPath(pathname: string): number | null {
  const match = pathname.match(/^\/units\/(\d+)(?:\/|$)/)
  if (!match) return null
  const id = Number.parseInt(match[1], 10)
  return Number.isInteger(id) && getUnit(id) ? id : null
}

export function useLastUnit() {
  const pathname = usePathname()
  const stored = useSyncExternalStore(subscribe, readStoredUnit, () => DEFAULT_UNIT)
  const fromPath = unitFromPath(pathname)

  useEffect(() => {
    if (fromPath) writeUnit(fromPath)
  }, [fromPath])

  return fromPath ?? stored
}
