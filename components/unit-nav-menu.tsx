"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { RememberUnitLink } from "@/components/remember-unit-link"
import { getUnit } from "@/content/catalog"
import { getLesson } from "@/content/lessons"
import { cn } from "@/lib/utils"

function currentLessonId(pathname: string, unitId: number) {
  const match = pathname.match(new RegExp(`^/units/${unitId}/([^/#?]+)`))
  return match?.[1]
}

function isUnitHome(pathname: string, unitId: number) {
  return pathname === `/units/${unitId}`
}

export function UnitLessonLinks({
  unitId,
  pathname,
  onNavigate,
  compact = false,
}: {
  unitId: number
  pathname: string
  onNavigate?: () => void
  compact?: boolean
}) {
  const unit = getUnit(unitId)
  const activeLesson = currentLessonId(pathname, unitId)
  const overviewActive = isUnitHome(pathname, unitId)

  if (!unit) return null

  return (
    <div className={cn("grid", compact ? "gap-0.5" : "gap-1")}>
      <RememberUnitLink
        href={`/units/${unitId}`}
        unitId={unitId}
        role="menuitem"
        onClick={onNavigate}
        className={cn(
          "rounded-lg px-2.5 py-1.5 text-sm transition-colors",
          overviewActive
            ? "bg-rose-700 text-white"
            : "text-foreground hover:bg-accent",
        )}
      >
        <span className="font-medium">Unit {unitId} overview</span>
        <span
          className={cn(
            "mt-0.5 block text-xs",
            overviewActive ? "text-rose-50/85" : "text-muted-foreground",
          )}
        >
          <MixedHanzi text={unit.title} /> · {unit.titleEn}
        </span>
      </RememberUnitLink>
      {unit.topics.map((topic) => {
        const ready = Boolean(getLesson(topic.id))
        const active = activeLesson === topic.id
        const className = cn(
          "rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors",
          active
            ? "bg-rose-700 text-white"
            : ready
              ? "text-foreground hover:bg-accent"
              : "cursor-default text-muted-foreground",
        )
        const body = (
          <>
            <span className="flex items-baseline gap-2">
              <span className={cn("font-mono text-xs", active ? "text-rose-50/90" : "text-muted-foreground")}>
                {topic.id}
              </span>
              <span className="min-w-0 font-medium">
                <MixedHanzi text={topic.title} />
              </span>
            </span>
            <span
              className={cn(
                "mt-0.5 block text-xs",
                active ? "text-rose-50/85" : "text-muted-foreground",
              )}
            >
              {topic.titleEn}
              {ready ? null : " · Coming later"}
            </span>
          </>
        )

        if (!ready) {
          return (
            <span key={topic.id} role="menuitem" aria-disabled="true" className={className}>
              {body}
            </span>
          )
        }

        return (
          <RememberUnitLink
            key={topic.id}
            href={`/units/${unitId}/${topic.id}`}
            unitId={unitId}
            role="menuitem"
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
            className={className}
          >
            {body}
          </RememberUnitLink>
        )
      })}
    </div>
  )
}

export function UnitNavMenu({
  unitId,
  pathname,
}: {
  unitId: number
  pathname: string
}) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number>(0)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    return () => window.clearTimeout(closeTimer.current)
  }, [])

  const cancelClose = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 140)
  }

  const unitActive = pathname === `/units/${unitId}` || pathname.startsWith(`/units/${unitId}/`)

  return (
    <div className="relative" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
      <div
        className={cn(
          "flex items-center rounded-full",
          unitActive ? "bg-rose-700 text-white" : "text-muted-foreground hover:bg-accent",
        )}
      >
        <RememberUnitLink
          href={`/units/${unitId}`}
          unitId={unitId}
          data-nav-unit={unitId}
          aria-haspopup="menu"
          aria-expanded={open}
          className="rounded-full py-1.5 pr-1.5 pl-3 text-sm"
        >
          Unit {unitId}
        </RememberUnitLink>
        <button
          type="button"
          aria-label={`Lessons in unit ${unitId}`}
          aria-haspopup="menu"
          aria-expanded={open}
          className={cn(
            "rounded-full p-1.5 pr-2",
            unitActive ? "hover:bg-rose-800" : "hover:text-foreground",
          )}
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
        </button>
      </div>
      {open ? (
        <div
          role="menu"
          aria-label={`Unit ${unitId} lessons`}
          className="absolute top-full left-0 z-50 pt-1"
        >
          <div className="max-h-[min(28rem,70vh)] w-80 overflow-y-auto rounded-xl border bg-popover p-1.5 shadow-lg">
            <UnitLessonLinks unitId={unitId} pathname={pathname} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
