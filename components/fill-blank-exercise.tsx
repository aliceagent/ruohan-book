"use client"

import { useMemo, useState } from "react"
import { Check, Eye, RotateCcw } from "lucide-react"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { Button } from "@/components/ui/button"
import type { FillBlankItem } from "@/lib/types"
import { cn } from "@/lib/utils"

function shuffle<T>(items: T[], seed: string) {
  const next = [...items]
  let hash = 2166136261
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  let t = hash >>> 0
  const random = () => {
    t += 0x6d2b79f5
    let n = Math.imul(t ^ (t >>> 15), 1 | t)
    n ^= n + Math.imul(n ^ (n >>> 7), 61 | n)
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296
  }
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

export function FillBlankExercise({ items }: { items: FillBlankItem[] }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)
  const [checked, setChecked] = useState(false)

  const choiceLists = useMemo(
    () => Object.fromEntries(items.map((item) => [item.id, shuffle(item.choices, item.id)])),
    [items],
  )

  const results = useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        correct: (values[item.id] ?? "") === item.answer,
        filled: Boolean(values[item.id]),
      })),
    [items, values],
  )

  const score = results.filter((item) => item.correct).length
  const showMarks = checked || revealed

  function reset() {
    setValues({})
    setRevealed(false)
    setChecked(false)
  }

  function pick(item: FillBlankItem, choice: string) {
    if (showMarks) return
    setValues((current) => ({ ...current, [item.id]: choice }))
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
          const picked = values[item.id] ?? ""
          const shown = revealed ? item.answer : picked
          return (
            <li key={item.id} className="rounded-2xl border bg-card p-4">
              <p className="mb-2 text-sm text-muted-foreground">
                {index + 1}. {item.promptEn}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 text-lg">
                {item.prefix ? (
                  <span className="font-medium">
                    <MixedHanzi text={item.prefix} />
                  </span>
                ) : null}
                <span
                  className={cn(
                    "inline-flex min-h-10 min-w-[4.5rem] items-center justify-center rounded-lg border px-2.5 text-center text-lg font-medium",
                    !shown && "border-dashed text-muted-foreground",
                    shown && !showMarks && "border-rose-300 bg-rose-50/70 dark:bg-rose-950/20",
                    showMarks && (result.correct || revealed) && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                    showMarks && !result.correct && !revealed && "border-destructive/60 bg-destructive/10",
                  )}
                  aria-hidden="true"
                >
                  {shown ? <MixedHanzi text={shown} /> : "—"}
                </span>
                {item.suffix ? (
                  <span className="font-medium">
                    <MixedHanzi text={item.suffix} />
                  </span>
                ) : null}
                {showMarks && !result.correct ? (
                  <span className="text-sm text-muted-foreground">
                    Answer: <MixedHanzi text={item.answer} />
                  </span>
                ) : null}
                {showMarks && result.correct ? (
                  <Check className="size-4 text-emerald-700 dark:text-emerald-400" />
                ) : null}
              </div>
              <div
                className="mt-3 flex flex-wrap gap-2"
                role="radiogroup"
                aria-label={`${item.promptEn} choices`}
              >
                {choiceLists[item.id]!.map((choice) => {
                  const isPicked = picked === choice
                  const isAnswer = choice === item.answer
                  return (
                    <button
                      key={choice}
                      type="button"
                      role="radio"
                      aria-checked={isPicked}
                      disabled={showMarks}
                      onClick={() => pick(item, choice)}
                      className={cn(
                        "rounded-xl border bg-background px-3 py-1.5 text-base font-medium transition-colors",
                        !showMarks && "hover:border-rose-400 hover:bg-rose-50/60 dark:hover:bg-rose-950/20",
                        !showMarks && isPicked && "border-rose-400 bg-rose-50/80 dark:bg-rose-950/30",
                        showMarks && isAnswer && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                        showMarks && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                      )}
                    >
                      <MixedHanzi text={choice} />
                    </button>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ol>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="submit">Check answers</Button>
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
        {showMarks ? (
          <p className="text-sm text-muted-foreground">
            {score} / {items.length} correct
          </p>
        ) : null}
      </div>
    </form>
  )
}
