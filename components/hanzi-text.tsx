"use client"

import { SpeakButton } from "@/components/speak-button"
import { InspectableHanzi } from "@/components/inspectable-hanzi"
import { rubyTokens } from "@/lib/pinyin"
import type { VocabItem } from "@/lib/types"
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
  inspectable = false,
  glossary,
  tap = true,
}: {
  hanzi: string
  english?: string
  showPinyin: boolean
  showEnglish: boolean
  ruby: boolean
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  className?: string
  inspectable?: boolean
  glossary?: VocabItem[]
  tap?: boolean
}) {
  const sizeClass = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
  }[size]
  const pinyinClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl",
  }[size]
  const englishClass = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl",
  }[size]

  const rubyOn = showPinyin && ruby
  const sentenceRuby = rubyOn || (showPinyin && !ruby) ? rubyTokens(hanzi) : []

  return (
    <div className={cn("space-y-1", className)}>
      <p
        className={cn(
          "font-medium tracking-wide",
          rubyOn ? (inspectable ? "leading-[2.35]" : "leading-loose") : "leading-relaxed",
          sizeClass,
          inspectable && "overflow-visible select-none [-webkit-touch-callout:none] [@media(hover:hover)]:select-text",
        )}
      >
        {inspectable ? (
          <InspectableHanzi hanzi={hanzi} ruby={rubyOn} glossary={glossary} tap={tap} />
        ) : rubyOn ? (
          sentenceRuby.map((token, index) =>
            token.pinyin ? (
              <ruby key={`${token.hanzi}-${index}`} className="ruby-pair">
                {token.hanzi}
                <rt>{token.pinyin}</rt>
              </ruby>
            ) : (
              <span key={`${token.hanzi}-${index}`}>{token.hanzi}</span>
            ),
          )
        ) : (
          hanzi
        )}
      </p>
      {showPinyin && !ruby ? (
        <p className={cn("text-rose-800/80 dark:text-rose-200/80", pinyinClass)}>
          {sentenceRuby.map((token) => token.pinyin ?? token.hanzi).join(" ")}
        </p>
      ) : null}
      {showEnglish && english ? (
        <p className={cn("leading-relaxed text-muted-foreground", englishClass)}>{english}</p>
      ) : null}
    </div>
  )
}
