"use client"

import { useMemo, useState } from "react"
import { Check, Eye, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { FillBlankItem } from "@/lib/types"
import { cn } from "@/lib/utils"

function normalize(value: string) {
  return value.trim().replace(/\s+/g, "").toLowerCase()
}

function isCorrect(item: FillBlankItem, value: string) {
  const guess = normalize(value)
  if (!guess) return false
  const answers = [item.answer, ...(item.accepted ?? [])].map(normalize)
  return answers.includes(guess)
}

export function FillBlankExercise({ items }: { items: FillBlankItem[] }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)
  const [checked, setChecked] = useState(false)

  const results = useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        correct: isCorrect(item, values[item.id] ?? ""),
        filled: Boolean((values[item.id] ?? "").trim()),
      })),
    [items, values],
  )

  const score = results.filter((item) => item.correct).length

  function reset() {
    setValues({})
    setRevealed(false)
    setChecked(false)
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setChecked(true)
        setRevealed(false)
      }}
    >
      <ol className="space-y-3">
        {items.map((item, index) => {
          const result = results[index]
          const showMark = checked || revealed
          return (
            <li key={item.id} className="rounded-2xl border bg-card p-4">
              <p className="mb-2 text-sm text-muted-foreground">
                {index + 1}. {item.promptEn}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                {item.prefix ? <span className="font-medium">{item.prefix}</span> : null}
                <Input
                  value={revealed ? item.answer : (values[item.id] ?? "")}
                  onChange={(event) => {
                    setChecked(false)
                    setRevealed(false)
                    setValues((current) => ({ ...current, [item.id]: event.target.value }))
                  }}
                  aria-label={`Blank ${index + 1}`}
                  autoComplete="off"
                  spellCheck={false}
                  className={cn(
                    "h-10 w-36 text-center text-lg",
                    showMark && result.correct && "border-emerald-500",
                    showMark && !result.correct && "border-destructive/60",
                  )}
                  disabled={revealed}
                />
                {item.suffix ? <span className="font-medium">{item.suffix}</span> : null}
                {showMark ? (
                  <span
                    className={cn(
                      "text-sm",
                      result.correct ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground",
                    )}
                  >
                    {result.correct ? (
                      <span className="inline-flex items-center gap-1">
                        <Check className="size-4" />
                        {item.answer}
                      </span>
                    ) : (
                      `Answer: ${item.answer}`
                    )}
                  </span>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="submit">
          Check answers
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setRevealed(true)
            setChecked(false)
          }}
        >
          <Eye className="size-4" />
          Show answers
        </Button>
        <Button type="button" variant="ghost" onClick={reset}>
          <RotateCcw className="size-4" />
          Reset
        </Button>
        {checked || revealed ? (
          <p className="text-sm text-muted-foreground">
            {score} / {items.length} correct
          </p>
        ) : null}
      </div>
    </form>
  )
}
