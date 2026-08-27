"use client"

import { type TextSize, useStudyPrefs } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const OPTIONS: { id: TextSize; label: string }[] = [
  { id: "sm", label: "Small" },
  { id: "md", label: "Medium" },
  { id: "lg", label: "Large" },
]

export const VOCAB_HANZI_SIZE = {
  sm: "md",
  md: "lg",
  lg: "xl",
} as const

export function TextSizeToggle({ className }: { className?: string }) {
  const { prefs, setPrefs } = useStudyPrefs()

  return (
    <div
      role="radiogroup"
      aria-label="Text size"
      className={cn("flex rounded-lg border bg-card p-0.5", className)}
    >
      {OPTIONS.map((option) => {
        const selected = prefs.textSize === option.id
        return (
          <Button
            key={option.id}
            type="button"
            size="xs"
            variant={selected ? "default" : "ghost"}
            role="radio"
            aria-checked={selected}
            className={cn(!selected && "text-muted-foreground")}
            onClick={() => setPrefs({ textSize: option.id })}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}
