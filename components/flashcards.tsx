"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { useStudyPrefs } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getUnit } from "@/content/catalog"
import { useProgress } from "@/hooks/use-progress"
import {
  GRADES,
  NEW_PER_DAY,
  formatDueIn,
  kindOf,
  nextDueAt,
  previewInterval,
  queueFor,
  type SrsGrade,
} from "@/lib/srs"
import {
  LIVE_UNIT_IDS,
  STUDY_WORDS,
  lessonsForFilter,
  type SessionSize,
  type UnitFilter,
} from "@/lib/study"
import { cn } from "@/lib/utils"

const KIND_LABEL: Record<string, string> = {
  new: "New",
  learn: "Learning",
  review: "Review",
}

export function Flashcards({
  unit,
  lessonId,
  session,
  onUnit,
  onLesson,
  onSession,
}: {
  unit: UnitFilter
  lessonId: string
  session: SessionSize
  onUnit: (unit: UnitFilter) => void
  onLesson: (lessonId: string) => void
  onSession: (session: SessionSize) => void
}) {
  const { prefs } = useStudyPrefs()
  const { progress, hydrateSrs, reviewSrs } = useProgress()
  const [revealed, setRevealed] = useState(false)
  const [extraNew, setExtraNew] = useState(0)
  const [sessionCount, setSessionCount] = useState(0)
  const [skipKey, setSkipKey] = useState<string | null>(null)
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    hydrateSrs()
  }, [hydrateSrs])

  useEffect(() => {
    setSessionCount(0)
    setSkipKey(null)
    setRevealed(false)
    setExtraNew(0)
  }, [unit, lessonId, session])

  const deck = useMemo(() => {
    return STUDY_WORDS.filter((item) => {
      if (unit !== "all" && item.unitId !== unit) return false
      if (lessonId !== "all" && item.lessonId !== lessonId) return false
      return true
    })
  }, [lessonId, unit])

  const newCap = session === 0 ? NEW_PER_DAY + extraNew : Math.max(session, extraNew)
  const { cards, counts } = useMemo(
    () => queueFor(deck, progress.srs, now, newCap),
    [deck, newCap, now, progress.srs],
  )

  const sessionLimit = session === 0 ? Number.POSITIVE_INFINITY : session
  const sessionDone = sessionCount >= sessionLimit
  const card = sessionDone ? undefined : (cards.find((item) => item.key !== skipKey) ?? cards[0])
  const srsCard = card ? progress.srs[card.key] : undefined
  const kind = kindOf(srsCard)
  const keys = useMemo(() => new Set(deck.map((item) => item.key)), [deck])
  const upcoming = nextDueAt(progress.srs, unit === "all" && lessonId === "all" ? null : keys, now)
  const lessons = lessonsForFilter(unit)

  const cardRef = useRef(card)
  const revealedRef = useRef(revealed)
  cardRef.current = card
  revealedRef.current = revealed

  function grade(next: SrsGrade) {
    const current = cardRef.current
    if (!current) return
    reviewSrs(current.key, next)
    setRevealed(false)
    setSkipKey(current.key)
    setSessionCount((count) => count + 1)
    setNow(Date.now())
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target
      if (target instanceof HTMLElement) {
        const tag = target.tagName
        if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || target.isContentEditable) {
          return
        }
      }
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault()
        if (!revealedRef.current) setRevealed(true)
        return
      }
      if (!revealedRef.current) return
      const match = GRADES.find((item) => item.shortcut === event.key)
      if (match) {
        event.preventDefault()
        grade(match.grade)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [reviewSrs])

  return (
    <div className="mx-auto max-w-xl space-y-4 pt-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {counts.due} due · {counts.learn} learning · {counts.newLeft} new left
          {sessionCount ? ` · ${sessionCount}${session ? `/${session}` : ""} this session` : ""}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Unit</span>
          <select
            className="h-8 rounded-lg border bg-background px-2 text-sm"
            value={unit === "all" ? "all" : String(unit)}
            onChange={(event) => {
              const value = event.target.value
              onUnit(value === "all" ? "all" : Number(value))
            }}
          >
            <option value="all">All units</option>
            {LIVE_UNIT_IDS.map((id) => {
              const meta = getUnit(id)
              return (
                <option key={id} value={id}>
                  Unit {id}
                  {meta ? ` ${meta.title}` : ""}
                </option>
              )
            })}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Lesson</span>
          <select
            className="h-8 rounded-lg border bg-background px-2 text-sm"
            value={lessonId}
            onChange={(event) => onLesson(event.target.value)}
          >
            <option value="all">All lessons</option>
            {lessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                {lesson.id} {lesson.title}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Pile</span>
          <select
            className="h-8 rounded-lg border bg-background px-2 text-sm"
            value={session === 0 ? "all" : String(session)}
            onChange={(event) => {
              const value = event.target.value
              onSession(value === "all" ? 0 : value === "20" ? 20 : 10)
            }}
          >
            <option value="10">10 cards</option>
            <option value="20">20 cards</option>
            <option value="all">No cap</option>
          </select>
        </label>
      </div>

      {!card ? (
        <Card>
          <CardContent className="space-y-3 py-10 text-center">
            <p className="font-serif text-2xl">{sessionDone ? "Pile finished" : "You’re caught up"}</p>
            <p className="text-sm text-muted-foreground">
              {sessionDone
                ? `${sessionCount} cards this sit. Start another pile or browse the words.`
                : upcoming
                  ? `Next review in ${formatDueIn(upcoming, now)}.`
                  : counts.unseen === 0
                    ? "Every word in this deck is scheduled."
                    : `${counts.unseen} new cards are waiting behind today’s cap.`}
            </p>
            {sessionDone ? (
              <Button
                onClick={() => {
                  setSessionCount(0)
                  setSkipKey(null)
                  setNow(Date.now())
                }}
              >
                Study another {session || 10}
              </Button>
            ) : counts.unseen > 0 ? (
              <Button
                onClick={() => {
                  setExtraNew((value) => value + 10)
                  setNow(Date.now())
                }}
              >
                Study 10 more new
              </Button>
            ) : null}
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            <span className="mr-2 inline-flex rounded-full border px-2 py-0.5 text-xs tracking-wide uppercase">
              {KIND_LABEL[kind]}
            </span>
            {card.lessonId} <MixedHanzi text={card.lessonTitle} />
          </p>
          <Card className="min-h-64">
            <CardContent className="flex min-h-64 flex-col items-center justify-center gap-4 py-10 text-center">
              <HanziText
                hanzi={card.hanzi}
                english={revealed ? card.en : undefined}
                showPinyin={prefs.pinyin}
                showEnglish={revealed}
                ruby={prefs.ruby}
                size="xl"
              />
              {!revealed ? (
                <p className="text-sm text-muted-foreground">Recall the English, then reveal.</p>
              ) : null}
              <SpeakButton text={card.hanzi} />
            </CardContent>
          </Card>
          {!revealed ? (
            <div className="flex flex-wrap justify-center gap-2">
              <Button onClick={() => setRevealed(true)}>Reveal</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {GRADES.map((item) => (
                <Button
                  key={item.grade}
                  type="button"
                  variant={
                    item.grade === "again"
                      ? "destructive"
                      : item.grade === "hard"
                        ? "outline"
                        : item.grade === "good"
                          ? "default"
                          : "secondary"
                  }
                  className={cn("h-auto flex-col gap-0.5 py-2", item.grade === "easy" && "border-rose-300")}
                  onClick={() => grade(item.grade)}
                >
                  <span>{item.label}</span>
                  <span className="text-[0.7rem] font-normal opacity-80">
                    {item.shortcut} · {previewInterval(srsCard, item.grade, now)}
                  </span>
                </Button>
              ))}
            </div>
          )}
          <p className="text-center text-xs text-muted-foreground">
            Space to reveal · 1–4 to grade. Harder ratings come back sooner.
          </p>
        </>
      )}
    </div>
  )
}
