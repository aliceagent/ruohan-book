"use client"

import { type TextSize } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const OPTIONS: { id: TextSize; label: string }[] = [
  { id: "sm", label: "Small" },
  { id: "md", label: "Medium" },
  { id: "lg", label: "Large" },
]

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
