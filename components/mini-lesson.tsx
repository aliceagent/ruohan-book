"use client"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { type TextSize, useStudyPrefs } from "@/components/study-prefs"
import { scaleHanziSize } from "@/components/text-size-toggle"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { MiniLesson } from "@/lib/types"

export function MiniLessonCard({
  lesson,
  size = "sm",
}: {
  lesson: MiniLesson
  size?: TextSize
}) {
  const { prefs } = useStudyPrefs()
  const hanziSize = scaleHanziSize("sm", size)

  return (
    <article
      className={cn(
        "space-y-3 rounded-xl border bg-background/90",
        size === "lg" ? "p-6" : size === "md" ? "p-5" : "p-4",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3
            className={cn(
              "font-serif leading-snug",
              size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-lg",
            )}
          >
            <MixedHanzi text={lesson.title} />
          </h3>
          {prefs.english ? (
            <p
              className={cn(
                "text-muted-foreground",
                size === "lg" ? "text-base" : "text-sm",
              )}
            >
              {lesson.titleEn}
            </p>
          ) : null}
        </div>
        {lesson.pattern ? (
          <Badge
            variant="outline"
            className={cn(
              "h-auto max-w-full overflow-visible font-normal whitespace-normal",
              size === "lg" && "text-base",
            )}
          >
            <MixedHanzi text={lesson.pattern} />
          </Badge>
        ) : null}
      </div>
      {lesson.body.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 24)}`}
          className={cn(
            "leading-relaxed text-foreground/90",
            size === "lg" ? "text-lg" : size === "md" ? "text-base" : "text-sm",
          )}
        >
          <MixedHanzi text={paragraph} />
        </p>
      ))}
      {lesson.compare && lesson.compare.length > 0 ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {lesson.compare.map((item) => (
            <div key={`${item.label}-${item.hanzi}`} className="rounded-lg bg-muted/60 p-3">
              <p className="mb-1 text-xs tracking-wide text-muted-foreground uppercase">
                <MixedHanzi text={item.label} />
              </p>
              <HanziText
                hanzi={item.hanzi}
                english={item.en}
                showPinyin={prefs.pinyin}
                showEnglish={prefs.english}
                ruby={prefs.ruby}
                size={hanziSize}
                inspectable
              />
            </div>
          ))}
        </div>
      ) : null}
      {lesson.examples && lesson.examples.length > 0 ? (
        <ul className="space-y-2">
          {lesson.examples.map((example, index) => (
            <li
              key={`${example.hanzi}-${index}`}
              className={cn(
                "flex items-start justify-between gap-2 rounded-lg border border-dashed px-3 py-2",
                prefs.pinyin && prefs.ruby && "overflow-visible pt-4",
              )}
            >
              <HanziText
                hanzi={example.hanzi}
                english={example.en}
                showPinyin={prefs.pinyin}
                showEnglish={prefs.english}
                ruby={prefs.ruby}
                size={hanziSize}
                inspectable
              />
              <SpeakButton text={example.hanzi} />
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
