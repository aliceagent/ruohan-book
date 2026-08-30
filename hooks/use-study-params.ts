"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import { useLastUnit } from "@/hooks/use-last-unit"
import {
  parseSessionSize,
  parseStudyTab,
  parseUnitFilter,
  parseWordStatus,
  type SessionSize,
  type StudyTab,
  type UnitFilter,
  type WordStatus,
} from "@/lib/study"

export function useStudyParams() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lastUnit = useLastUnit()

  const tab = parseStudyTab(searchParams.get("tab"))
  const query = searchParams.get("q") ?? ""
  const unit = parseUnitFilter(searchParams.get("unit"), lastUnit)
  const lessonId = searchParams.get("lesson") ?? "all"
  const status = parseWordStatus(searchParams.get("status"))
  const session = parseSessionSize(searchParams.get("session"))

  const update = useCallback(
    (
      patch: Partial<{
        tab: StudyTab
        q: string
        unit: UnitFilter
        lesson: string
        status: WordStatus | "all"
        session: SessionSize
      }>,
    ) => {
      const next = new URLSearchParams(searchParams.toString())
      if (patch.tab !== undefined) {
        if (patch.tab === "review") next.delete("tab")
        else next.set("tab", patch.tab)
      }
      if (patch.q !== undefined) {
        if (!patch.q.trim()) next.delete("q")
        else next.set("q", patch.q)
      }
      if (patch.unit !== undefined) {
        if (patch.unit === "all") next.set("unit", "all")
        else next.set("unit", String(patch.unit))
      }
      if (patch.lesson !== undefined) {
        if (patch.lesson === "all") next.delete("lesson")
        else next.set("lesson", patch.lesson)
      }
      if (patch.status !== undefined) {
        if (patch.status === "all") next.delete("status")
        else next.set("status", patch.status)
      }
      if (patch.session !== undefined) {
        if (patch.session === 10) next.delete("session")
        else next.set("session", patch.session === 0 ? "all" : String(patch.session))
      }
      const qs = next.toString()
      router.replace(qs ? `/study?${qs}` : "/study", { scroll: false })
    },
    [router, searchParams],
  )

  return { tab, query, unit, lessonId, status, session, lastUnit, update }
}
