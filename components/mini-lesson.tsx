"use client"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { useStudyPrefs } from "@/components/study-prefs"
import { Badge } from "@/components/ui/badge"
import type { MiniLesson } from "@/lib/types"

export function MiniLessonCard({ lesson }: { lesson: MiniLesson }) {
  const { prefs } = useStudyPrefs()

  return (
    <article className="space-y-3 rounded-xl border bg-background/90 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-serif text-lg leading-snug">
            <MixedHanzi text={lesson.title} />
          </h3>
          {prefs.english ? (
            <p className="text-sm text-muted-foreground">{lesson.titleEn}</p>
          ) : null}
        </div>
        {lesson.pattern ? (
          <Badge
            variant="outline"
            className="h-auto max-w-full overflow-visible font-normal whitespace-normal"
          >
            <MixedHanzi text={lesson.pattern} />
          </Badge>
        ) : null}
      </div>
      {lesson.body.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 24)}`} className="text-sm leading-relaxed text-foreground/90">
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
                size="sm"
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
              className={
                prefs.pinyin && prefs.ruby
                  ? "flex items-start justify-between gap-2 rounded-lg border border-dashed px-3 py-2 pt-4"
                  : "flex items-start justify-between gap-2 rounded-lg border border-dashed px-3 py-2"
              }
            >
              <HanziText
                hanzi={example.hanzi}
                english={example.en}
                showPinyin={prefs.pinyin}
                showEnglish={prefs.english}
                ruby={prefs.ruby}
                size="sm"
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
