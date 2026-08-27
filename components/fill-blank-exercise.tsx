"use client"

import { useMemo, useState } from "react"
import { Check, Eye, RotateCcw, X } from "lucide-react"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { useStudyPrefs } from "@/components/study-prefs"
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
  const { prefs } = useStudyPrefs()
  const [values, setValues] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)

  const choiceLists = useMemo(
    () => Object.fromEntries(items.map((item) => [item.id, shuffle(item.choices, item.id)])),
    [items],
  )

  const answered = items.filter((item) => Boolean(values[item.id])).length
  const score = items.filter((item) => values[item.id] === item.answer).length

  function reset() {
    setValues({})
    setRevealed(false)
  }

  function pick(item: FillBlankItem, choice: string) {
    if (revealed || values[item.id]) return
    setValues((current) => ({ ...current, [item.id]: choice }))
  }

  return (
    <div className="space-y-4">
      <ol className="space-y-3">
        {items.map((item, index) => {
          const picked = values[item.id] ?? ""
          const locked = Boolean(picked) || revealed
          const correct = picked === item.answer
          const shown = revealed && !picked ? item.answer : picked
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
                    prefs.pinyin && prefs.ruby && "min-h-12 overflow-visible pt-3 leading-[2.15]",
                    prefs.pinyin && !prefs.ruby && "min-h-12 overflow-visible py-2",
                    !shown && "border-dashed text-muted-foreground",
                    shown && !locked && "border-rose-300 bg-rose-50/70 dark:bg-rose-950/20",
                    locked && (correct || (revealed && !picked)) && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                    locked && picked && !correct && "border-destructive/60 bg-destructive/10",
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
                      disabled={locked}
                      onClick={() => pick(item, choice)}
                      className={cn(
                        "rounded-xl border bg-background px-3 py-1.5 text-base font-medium transition-colors",
                        prefs.pinyin && prefs.ruby && "overflow-visible pt-3 pb-1.5 leading-[2.15]",
                        prefs.pinyin && !prefs.ruby && "overflow-visible py-2",
                        !locked && "hover:border-rose-400 hover:bg-rose-50/60 dark:hover:bg-rose-950/20",
                        locked && isAnswer && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                        locked && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                      )}
                    >
                      <MixedHanzi text={choice} />
                    </button>
                  )
                })}
              </div>
              {picked ? (
                <p
                  className={cn(
                    "mt-2 flex items-center gap-1.5 text-sm",
                    correct ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground",
                  )}
                  aria-live="polite"
                >
                  {correct ? (
                    <>
                      <Check className="size-4" />
                      Correct.
                    </>
                  ) : (
                    <>
                      <X className="size-4 text-destructive" />
                      Not quite — the answer is <MixedHanzi text={item.answer} />.
                    </>
                  )}
                </p>
              ) : revealed ? (
                <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
                  Answer: <MixedHanzi text={item.answer} />
                </p>
              ) : null}
            </li>
          )
        })}
      </ol>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setRevealed(true)}
          disabled={revealed || answered === items.length}
        >
          <Eye className="size-4" />
          Show remaining answers
        </Button>
        <Button type="button" variant="ghost" onClick={reset}>
          <RotateCcw className="size-4" />
          Reset
        </Button>
        {answered > 0 || revealed ? (
          <p className="text-sm text-muted-foreground">
            {score} / {items.length} correct
          </p>
        ) : null}
      </div>
    </div>
  )
}
