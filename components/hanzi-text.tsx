"use client"

import { SpeakButton } from "@/components/speak-button"
import { WordHover } from "@/components/word-hover"
import { tokenizeHanzi, type GlossToken } from "@/lib/gloss"
import { rubyTokens } from "@/lib/pinyin"
import { glossaryFor } from "@/lib/unit-glossary"
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
}: {
  hanzi: string
  english?: string
  showPinyin: boolean
  showEnglish: boolean
  ruby: boolean
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  inspectable?: boolean
  glossary?: VocabItem[]
}) {
  const sizeClass = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-4xl",
  }[size]
  const pinyinClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  }[size]
  const englishClass = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  }[size]

  const tokens = inspectable ? tokenizeHanzi(hanzi, glossaryFor(glossary)) : null
  const rubyOn = showPinyin && ruby

  return (
    <div className={cn("space-y-1", className)}>
      <p className={cn("font-medium tracking-wide", rubyOn ? "leading-loose" : "leading-relaxed", sizeClass)}>
        {tokens ? (
          tokens.map((token, index) => (
            <InspectableChunk
              key={`${token.hanzi}-${index}`}
              token={token}
              ruby={rubyOn}
            />
          ))
        ) : rubyOn ? (
          rubyTokens(hanzi).map((token, index) =>
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
          {rubyTokens(hanzi)
            .map((token) => token.pinyin ?? token.hanzi)
            .join(" ")}
        </p>
      ) : null}
      {showEnglish && english ? (
        <p className={cn("leading-relaxed text-muted-foreground", englishClass)}>{english}</p>
      ) : null}
    </div>
  )
}

function InspectableChunk({
  token,
  ruby,
}: {
  token: GlossToken
  ruby: boolean
}) {
  const body = ruby
    ? rubyTokens(token.hanzi).map((part, index) =>
        part.pinyin ? (
          <ruby key={`${part.hanzi}-${index}`} className="ruby-pair">
            {part.hanzi}
            <rt>{part.pinyin}</rt>
          </ruby>
        ) : (
          <span key={`${part.hanzi}-${index}`}>{part.hanzi}</span>
        ),
      )
    : token.hanzi

  if (token.kind !== "word") return <>{body}</>

  return <WordHover token={token}>{body}</WordHover>
}
