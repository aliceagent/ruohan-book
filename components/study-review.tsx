"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getUnit } from "@/content/catalog"
import { useProgress, vocabKey } from "@/hooks/use-progress"
import { formatDueIn, nextDueAt, queueFor } from "@/lib/srs"
import {
  STUDY_WORDS,
  lessonsForFilter,
  type SessionSize,
  type UnitFilter,
} from "@/lib/study"

export function StudyReview({
  unit,
  onStartCards,
  onBrowseWords,
}: {
  unit: UnitFilter
  onStartCards: (session: SessionSize) => void
  onBrowseWords: () => void
}) {
  const { progress, hydrateSrs } = useProgress()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    hydrateSrs()
  }, [hydrateSrs])

  const deck = useMemo(() => {
    const scoped = unit === "all" ? STUDY_WORDS : STUDY_WORDS.filter((item) => item.unitId === unit)
    return scoped.map((item) => ({
      ...item,
      key: item.key || vocabKey(item.lessonId, item.hanzi),
    }))
  }, [unit])

  const { cards, counts } = useMemo(
    () => queueFor(deck, progress.srs, now, 20),
    [deck, now, progress.srs],
  )

  const keys = useMemo(() => new Set(deck.map((item) => item.key)), [deck])
  const upcoming = nextDueAt(progress.srs, unit === "all" ? null : keys, now)
  const unitMeta = unit === "all" ? null : getUnit(unit)
  const lessonCount = lessonsForFilter(unit).length
  const preview = cards.slice(0, 5)
  const dueNow = counts.due + Math.min(counts.newLeft, counts.unseen)

  return (
    <div className="space-y-6 pt-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          {unit === "all" ? (
            "All live units"
          ) : (
            <>
              Unit {unit} {unitMeta ? <MixedHanzi text={unitMeta.title} /> : null}
              {unitMeta ? ` · ${unitMeta.titleEn}` : null} · {lessonCount} lessons · {deck.length}{" "}
              words
            </>
          )}
        </p>
        <h2 className="font-serif text-3xl">
          {counts.due > 0
            ? `${counts.due} due now`
            : counts.unseen > 0
              ? `${Math.min(10, counts.unseen)} new words ready`
              : "You’re caught up"}
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          {counts.due > 0
            ? `${counts.learn} learning · ${counts.review} reviews. Do a short pile, then stop.`
            : upcoming
              ? `Next review in ${formatDueIn(upcoming, now)}.`
              : counts.unseen > 0
                ? `${counts.unseen} new cards are waiting. Start a ten-word pile from this unit.`
                : "Every word in this scope is scheduled."}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => onStartCards(10)} disabled={dueNow === 0 && counts.unseen === 0}>
          Study 10 cards
        </Button>
        <Button variant="secondary" onClick={() => onStartCards(20)} disabled={dueNow === 0 && counts.unseen === 0}>
          Study 20
        </Button>
        <Button variant="outline" onClick={onBrowseWords}>
          Browse words
        </Button>
      </div>

      {preview.length > 0 ? (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Up next</p>
          <div className="grid gap-2">
            {preview.map((item) => (
              <Card key={item.key}>
                <CardContent className="flex items-baseline justify-between gap-3 py-4">
                  <div>
                    <p className="font-serif text-xl">{item.hanzi}</p>
                    <p className="text-sm text-muted-foreground">{item.en}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.lessonId} <MixedHanzi text={item.lessonTitle} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="space-y-2 py-8 text-center">
            <p className="font-serif text-2xl">Nothing in the pile</p>
            <p className="text-sm text-muted-foreground">
              Browse the word list, or open a lesson and come back after you read.
            </p>
            <Button asChild variant="outline">
              <Link href={unit === "all" ? "/units" : `/units/${unit}`}>Open the unit</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
