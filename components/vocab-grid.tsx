"use client"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { type TextSize, useStudyPrefs } from "@/components/study-prefs"
import { CONTENT_HANZI_SIZE, TextSizeToggle } from "@/components/text-size-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { vocabKey, useProgress } from "@/hooks/use-progress"
import type { VocabItem } from "@/lib/types"
import { cn } from "@/lib/utils"

export function VocabGrid({
  lessonId,
  items,
  size,
  onSizeChange,
  showSizeToggle = false,
  sizeLabel = "Vocabulary text size",
}: {
  lessonId: string
  items: VocabItem[]
  size: TextSize
  onSizeChange?: (size: TextSize) => void
  showSizeToggle?: boolean
  sizeLabel?: string
}) {
  const { prefs } = useStudyPrefs()
  const { progress, toggleVocab } = useProgress()

  return (
    <div className="space-y-3">
      {showSizeToggle && onSizeChange ? (
        <div className="flex justify-end">
          <TextSizeToggle value={size} onChange={onSizeChange} label={sizeLabel} />
        </div>
      ) : null}
      <div
        className={cn(
          "grid gap-3",
          size === "lg" ? "sm:grid-cols-1 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item) => {
          const key = vocabKey(lessonId, item.hanzi)
          const known = progress.knownVocab.includes(key)
          return (
            <Card key={item.hanzi} className={cn("overflow-visible", known && "border-rose-400")}>
              <CardContent className="flex items-start justify-between gap-2 pt-5">
                <HanziText
                  hanzi={item.hanzi}
                  english={item.en}
                  showPinyin={prefs.pinyin}
                  showEnglish={prefs.english}
                  ruby={prefs.ruby}
                  size={CONTENT_HANZI_SIZE[size]}
                />
                <div className="flex flex-col items-end gap-1">
                  <SpeakButton text={item.hanzi} />
                  <Button size="xs" variant={known ? "secondary" : "ghost"} onClick={() => toggleVocab(key)}>
                    {known ? "Known" : "Learn"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
