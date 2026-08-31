"use client"

import { InspectableHanzi } from "@/components/inspectable-hanzi"
import { useStudyPrefs } from "@/components/study-prefs"
import { mixedRuns } from "@/lib/pinyin"
import type { VocabItem } from "@/lib/types"
import { cn } from "@/lib/utils"

/**
 * Renders any string so Chinese characters get pinyin when that display toggle
 * is on — including mixed English explanations like “拖 = drag / delay.”
 * Pass inspectable to get the same hover / tap gloss as dialogue words.
 */
export function MixedHanzi({
  text,
  className,
  inspectable = false,
  glossary,
  tap = true,
}: {
  text: string
  className?: string
  inspectable?: boolean
  glossary?: VocabItem[]
  tap?: boolean
}) {
  const { prefs } = useStudyPrefs()
  const rubyOn = Boolean(prefs.pinyin && prefs.ruby)

  if (inspectable) {
    return (
      <span
        data-pinyin={rubyOn ? "ruby" : prefs.pinyin ? "stack" : "off"}
        className={cn(
          rubyOn && "leading-[2.15]",
          "overflow-visible select-none [-webkit-touch-callout:none] [@media(hover:hover)]:select-text",
          className,
        )}
      >
        <InspectableHanzi hanzi={text} ruby={rubyOn} glossary={glossary} tap={tap} />
      </span>
    )
  }

  const runs = mixedRuns(text)
  const hasZh = runs.some((run) => run.kind === "zh")

  if (!prefs.pinyin || !hasZh) {
    return <span className={className}>{text}</span>
  }

  return (
    <span
      data-pinyin={prefs.ruby ? "ruby" : "stack"}
      className={cn(prefs.ruby && "leading-[2.15]", className)}
    >
      {runs.map((run, index) => {
        if (run.kind !== "zh") {
          return <span key={`text-${index}`}>{run.text}</span>
        }

        if (prefs.ruby) {
          const chars = Array.from(run.hanzi)
          return (
            <span key={`${run.hanzi}-${index}`}>
              {chars.map((char, charIndex) => (
                <ruby key={`${char}-${charIndex}`} className="ruby-pair">
                  {char}
                  <rt>{run.readings[charIndex]}</rt>
                </ruby>
              ))}
            </span>
          )
        }

        return (
          <span
            key={`${run.hanzi}-${index}`}
            className="inline-flex flex-col items-center px-[0.04em] align-baseline"
          >
            <span>{run.hanzi}</span>
            <span className="text-[0.65em] font-normal leading-none text-rose-800/80 dark:text-rose-200/80">
              {run.readings.join(" ")}
            </span>
          </span>
        )
      })}
    </span>
  )
}
