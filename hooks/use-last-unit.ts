"use client"

import { usePathname } from "next/navigation"
import { useEffect, useSyncExternalStore } from "react"

import { getUnit } from "@/content/catalog"

const STORAGE_KEY = "ruohan-last-unit"
const EVENT = "ruohan-last-unit"
const DEFAULT_UNIT = 1

function parseUnitId(raw: string | null): number {
  const id = Number.parseInt(raw ?? "", 10)
  return Number.isInteger(id) && getUnit(id) ? id : DEFAULT_UNIT
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

export function rememberLastUnit(unitId: number) {
  if (!getUnit(unitId)) return
  try {
    if (localStorage.getItem(STORAGE_KEY) === String(unitId)) return
    localStorage.setItem(STORAGE_KEY, String(unitId))
  } catch {
    return
  }
  window.dispatchEvent(new Event(EVENT))
}

function unitFromPath(pathname: string): number | null {
  const match = pathname.match(/^\/units\/(\d+)(?:\/|$)/)
  if (!match) return null
  const id = Number.parseInt(match[1], 10)
  return Number.isInteger(id) && getUnit(id) ? id : null
}

export function useLastUnit() {
  const pathname = usePathname()
  const raw = useSyncExternalStore(subscribe, readRaw, () => String(DEFAULT_UNIT))
  const stored = parseUnitId(raw)
  const fromPath = unitFromPath(pathname)

  useEffect(() => {
    if (fromPath) rememberLastUnit(fromPath)
  }, [fromPath])

  return fromPath ?? stored
}
