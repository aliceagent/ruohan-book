"use client"

import { useStudyPrefs } from "@/components/study-prefs"
import { mixedRuns } from "@/lib/pinyin"
import { cn } from "@/lib/utils"

/**
 * Renders any string so Chinese characters get pinyin when that display toggle
 * is on — including mixed English explanations like “拖 = drag / delay.”
 */
export function MixedHanzi({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const { prefs } = useStudyPrefs()
  const runs = mixedRuns(text)
  const hasZh = runs.some((run) => run.kind === "zh")

  if (!prefs.pinyin || !hasZh) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={cn(prefs.ruby && "leading-[2.15]", className)}>
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
