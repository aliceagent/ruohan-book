"use client"

import { Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { rubyTokens } from "@/lib/pinyin"
import { cn } from "@/lib/utils"

export function speakChinese(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "zh-CN"
  utterance.rate = 0.92
  const voices = window.speechSynthesis.getVoices()
  const chinese =
    voices.find((voice) => voice.lang.startsWith("zh") && /CN|TW|HK/i.test(voice.lang)) ||
    voices.find((voice) => voice.lang.startsWith("zh"))
  if (chinese) utterance.voice = chinese
  window.speechSynthesis.speak(utterance)
}

export function SpeakButton({
  text,
  label = "Listen",
}: {
  text: string
  label?: string
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant="ghost"
      className="h-8 gap-1.5 px-2 text-muted-foreground"
      onClick={() => speakChinese(text.replace(/[〔〕【】\[\]（）()]/g, ""))}
      aria-label={label}
    >
      <Volume2 className="size-3.5" />
      <span className="sr-only sm:not-sr-only sm:text-xs">{label}</span>
    </Button>
  )
}

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
