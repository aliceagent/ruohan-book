import { getUnit } from "@/content/catalog"

export const LAST_UNIT_KEY = "ruohan-last-unit"
export const LAST_UNIT_EVENT = "ruohan-last-unit"
export const DEFAULT_LAST_UNIT = 1
export const LAST_UNIT_MAX_AGE = 60 * 60 * 24 * 365

export function parseLastUnitId(raw: string | null | undefined): number {
  const id = Number.parseInt(raw ?? "", 10)
  return Number.isInteger(id) && getUnit(id) ? id : DEFAULT_LAST_UNIT
}

export function unitIdFromPath(pathname: string): number | null {
  const match = pathname.match(/^\/units\/(\d+)(?:\/|$)/)
  if (!match) return null
  const id = Number.parseInt(match[1], 10)
  return Number.isInteger(id) && getUnit(id) ? id : null
}
