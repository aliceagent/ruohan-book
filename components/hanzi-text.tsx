"use client"

import { SpeakButton } from "@/components/speak-button"
import { rubyTokens } from "@/lib/pinyin"
import { cn } from "@/lib/utils"

export { SpeakButton }

export function HanziText({
  hanzi,
  english,
  showPinyin,
  showEnglish,
  ruby,
  size = "lg",
  className,
}: {
  hanzi: string
  english?: string
  showPinyin: boolean
  showEnglish: boolean
  ruby: boolean
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}) {
  const sizeClass = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl md:text-4xl",
  }[size]

  const tokens = showPinyin && ruby ? rubyTokens(hanzi) : null

  return (
    <div className={cn("space-y-1", className)}>
      {tokens ? (
        <p className={cn("font-medium leading-loose tracking-wide", sizeClass)}>
          {tokens.map((token, index) =>
            token.pinyin ? (
              <ruby key={`${token.hanzi}-${index}`} className="ruby-pair">
                {token.hanzi}
                <rt>{token.pinyin}</rt>
              </ruby>
            ) : (
              <span key={`${token.hanzi}-${index}`}>{token.hanzi}</span>
            ),
          )}
        </p>
      ) : (
        <p className={cn("font-medium leading-relaxed tracking-wide", sizeClass)}>{hanzi}</p>
      )}
      {showPinyin && !ruby ? (
        <p className="text-sm text-rose-800/80 dark:text-rose-200/80">
          {rubyTokens(hanzi)
            .map((token) => token.pinyin ?? token.hanzi)
            .join(" ")}
        </p>
      ) : null}
      {showEnglish && english ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{english}</p>
      ) : null}
    </div>
  )
}
