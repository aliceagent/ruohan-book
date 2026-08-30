"use client"

import { DisplayToggles } from "@/components/display-toggles"
import { Flashcards } from "@/components/flashcards"
import { StudyReview } from "@/components/study-review"
import { StudyWords } from "@/components/study-words"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useStudyParams } from "@/hooks/use-study-params"
import type { StudyTab } from "@/lib/study"

export function StudyStudio() {
  const { tab, query, unit, lessonId, status, session, update } = useStudyParams()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Practice</p>
          <h1 className="font-serif text-4xl">Study</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Review due cards from the unit you last opened, look up a word, or run a short pile.
            Progress stays in this browser.
          </p>
        </div>
        <DisplayToggles />
      </div>
      <Tabs
        value={tab}
        onValueChange={(value) => update({ tab: value as StudyTab })}
      >
        <TabsList>
          <TabsTrigger value="review">Review</TabsTrigger>
          <TabsTrigger value="words">Words</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="review">
          <StudyReview
            unit={unit}
            onStartCards={(nextSession) => update({ tab: "cards", session: nextSession, lesson: "all" })}
            onBrowseWords={() => update({ tab: "words" })}
          />
        </TabsContent>
        <TabsContent value="words">
          <StudyWords
            unit={unit}
            lessonId={lessonId}
            status={status}
            query={query}
            onUnit={(next) => update({ unit: next, lesson: "all" })}
            onLesson={(next) => update({ lesson: next })}
            onStatus={(next) => update({ status: next })}
            onQuery={(next) => update({ q: next })}
            onStudyWord={(word) =>
              update({ tab: "cards", unit: word.unitId, lesson: word.lessonId, session: 10 })
            }
          />
        </TabsContent>
        <TabsContent value="cards">
          <Flashcards
            unit={unit}
            lessonId={lessonId}
            session={session}
            onUnit={(next) => update({ unit: next, lesson: "all" })}
            onLesson={(next) => update({ lesson: next })}
            onSession={(next) => update({ session: next })}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
