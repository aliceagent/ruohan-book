"use client"

import { type TextSize } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const OPTIONS: { id: TextSize; label: "Small" | "Medium" | "Large" }[] = [
  { id: "sm", label: "Small" },
  { id: "md", label: "Medium" },
  { id: "lg", label: "Large" },
]

export type HanziSize = "sm" | "md" | "lg" | "xl" | "2xl"

const HANZI_STEPS: HanziSize[] = ["sm", "md", "lg", "xl", "2xl"]

/** Small keeps the section’s current size; medium and large step up from there. */
export function scaleHanziSize(base: HanziSize, size: TextSize): HanziSize {
  const bump = size === "sm" ? 0 : size === "md" ? 1 : 2
  const index = Math.max(0, HANZI_STEPS.indexOf(base))
  return HANZI_STEPS[Math.min(index + bump, HANZI_STEPS.length - 1)] ?? base
}

export const CONTENT_HANZI_SIZE = {
  sm: "md",
  md: "lg",
  lg: "xl",
} as const

export function TextSizeToggle({
  value,
  onChange,
  label = "Text size",
  className,
}: {
  value: TextSize
  onChange: (size: TextSize) => void
  label?: string
  className?: string
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn("flex rounded-lg border bg-card p-0.5", className)}
    >
      {OPTIONS.map((option) => {
        const selected = value === option.id
        return (
          <Button
            key={option.id}
            type="button"
            size="xs"
            variant={selected ? "default" : "ghost"}
            role="radio"
            aria-checked={selected}
            className={cn(!selected && "text-muted-foreground")}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}
