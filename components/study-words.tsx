"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { RememberUnitLink } from "@/components/remember-unit-link"
import { useStudyPrefs } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { getUnit } from "@/content/catalog"
import { useProgress } from "@/hooks/use-progress"
import {
  LIVE_UNIT_IDS,
  STUDY_WORDS,
  exampleLineFor,
  filterStudyWords,
  groupWordsByLesson,
  lessonsForFilter,
  wordStatus,
  type StudyWord,
  type UnitFilter,
  type WordStatus,
} from "@/lib/study"
import { cn } from "@/lib/utils"

const STATUS_LABEL: Record<WordStatus, string> = {
  new: "New",
  learning: "Learning",
  due: "Due",
  known: "Known",
}

const STATUS_FILTERS: { id: WordStatus | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "due", label: "Due" },
  { id: "learning", label: "Learning" },
  { id: "new", label: "New" },
  { id: "known", label: "Known" },
]

export function StudyWords({
  unit,
  lessonId,
  status,
  query,
  onUnit,
  onLesson,
  onStatus,
  onQuery,
  onStudyWord,
}: {
  unit: UnitFilter
  lessonId: string
  status: WordStatus | "all"
  query: string
  onUnit: (unit: UnitFilter) => void
  onLesson: (lessonId: string) => void
  onStatus: (status: WordStatus | "all") => void
  onQuery: (query: string) => void
  onStudyWord: (word: StudyWord) => void
}) {
  const { prefs } = useStudyPrefs()
  const { progress, toggleVocab, hydrateSrs } = useProgress()
  const [openKey, setOpenKey] = useState<string | null>(null)
  const now = Date.now()

  useEffect(() => {
    hydrateSrs()
  }, [hydrateSrs])

  const words = useMemo(
    () =>
      filterStudyWords(STUDY_WORDS, {
        unit,
        lessonId,
        status,
        query,
        srs: progress.srs,
        knownVocab: progress.knownVocab,
        now,
      }),
    [lessonId, now, progress.knownVocab, progress.srs, query, status, unit],
  )
  const groups = useMemo(() => groupWordsByLesson(words), [words])
  const outsideHits = useMemo(() => {
    if (!query.trim() || words.length > 0) return []
    return filterStudyWords(STUDY_WORDS, {
      unit: "all",
      lessonId: "all",
      status,
      query,
      srs: progress.srs,
      knownVocab: progress.knownVocab,
      now,
    })
  }, [now, progress.knownVocab, progress.srs, query, status, words.length])
  const lessons = lessonsForFilter(unit)
  const selected = words.find((item) => item.key === openKey) ?? null
  const example = selected ? exampleLineFor(selected) : undefined
  const selectedStatus = selected
    ? wordStatus(progress.srs, progress.knownVocab, selected.key, now)
    : null

  return (
    <div className="space-y-4 pt-4">
      <Input
        value={query}
        onChange={(event) => onQuery(event.target.value)}
        placeholder="Search hanzi, pinyin, English, or 2-1"
        aria-label="Search words"
        onFocus={() => hydrateSrs()}
      />
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
      </div>
      <div className="flex flex-wrap gap-1.5">
        {STATUS_FILTERS.map((item) => (
          <Button
            key={item.id}
            size="xs"
            variant={status === item.id ? "default" : "outline"}
            onClick={() => onStatus(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        {words.length} {words.length === 1 ? "word" : "words"}
        {query ? ` matching “${query.trim()}”` : ""}
      </p>

      {groups.length === 0 ? (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {outsideHits.length > 0
              ? `Nothing in this unit. ${outsideHits.length} ${outsideHits.length === 1 ? "match" : "matches"} in other units.`
              : "Nothing matches. Clear a filter or try another spelling."}
          </p>
          {outsideHits.length > 0 ? (
            <Button size="sm" variant="outline" onClick={() => onUnit("all")}>
              Show all units
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map((group) => (
            <section key={group.lessonId} className="space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl">
                  {group.lessonId} <MixedHanzi text={group.lessonTitle} />
                </h3>
                <RememberUnitLink
                  href={`/units/${group.unitId}/${group.lessonId}`}
                  unitId={group.unitId}
                  className="text-sm text-rose-800 hover:underline"
                >
                  Open lesson
                </RememberUnitLink>
              </div>
              <div className="grid gap-2">
                {group.items.map((item) => {
                  const state = wordStatus(progress.srs, progress.knownVocab, item.key, now)
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setOpenKey(item.key)}
                      className={cn(
                        "rounded-xl border bg-card px-3 py-3 text-left transition-colors hover:border-rose-400",
                        state === "due" && "border-rose-300",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <HanziText
                          hanzi={item.hanzi}
                          english={item.en}
                          showPinyin
                          showEnglish
                          ruby={prefs.ruby}
                          size="md"
                        />
                        <span className="shrink-0 text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                          {STATUS_LABEL[state]}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      <Sheet open={Boolean(selected)} onOpenChange={(open) => !open && setOpenKey(null)}>
        <SheetContent side="right" className="sm:max-w-md">
          {selected ? (
            <>
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">{selected.hanzi}</SheetTitle>
                <SheetDescription>{selected.en}</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4">
                <HanziText
                  hanzi={selected.hanzi}
                  english={selected.en}
                  showPinyin
                  showEnglish
                  ruby
                  size="xl"
                />
                <div className="flex flex-wrap items-center gap-2">
                  <SpeakButton text={selected.hanzi} />
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {selectedStatus ? STATUS_LABEL[selectedStatus] : ""}
                  </span>
                </div>
                {example ? (
                  <div className="space-y-1">
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">In the lesson</p>
                    <p className="font-serif text-lg">{example.hanzi}</p>
                    <p className="text-sm text-muted-foreground">{example.en}</p>
                  </div>
                ) : null}
                <p className="text-sm text-muted-foreground">
                  {selected.lessonId} <MixedHanzi text={selected.lessonTitle} />
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <RememberUnitLink
                      href={`/units/${selected.unitId}/${selected.lessonId}`}
                      unitId={selected.unitId}
                    >
                      Open lesson
                    </RememberUnitLink>
                  </Button>
                  <Button variant="secondary" onClick={() => onStudyWord(selected)}>
                    Study this word
                  </Button>
                  <Button variant="outline" onClick={() => toggleVocab(selected.key)}>
                    {progress.knownVocab.includes(selected.key) ? "Reset" : "I know this"}
                  </Button>
                </div>
                <Button asChild variant="ghost" className="px-0">
                  <Link href={`/study?tab=cards&lesson=${selected.lessonId}&session=10`}>
                    Drill this lesson
                  </Link>
                </Button>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  )
}
