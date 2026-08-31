"use client"

import { useMemo, useState, useSyncExternalStore } from "react"
import { Check, RotateCcw, X } from "lucide-react"

import { DisplayToggles } from "@/components/display-toggles"
import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { type TextSize, useSectionSize, useStudyPrefs } from "@/components/study-prefs"
import { TextSizeToggle, scaleHanziSize } from "@/components/text-size-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useProgress } from "@/hooks/use-progress"
import { dealQuizRound, type QuizItem, type QuizSet } from "@/lib/quiz"
import { cn } from "@/lib/utils"

const LETTERS = ["A", "B", "C", "D"]
const emptySubscribe = () => () => {}
const dealCache = new Map<string, QuizItem[]>()

function clientDeal(quiz: QuizSet, session: string, round: number) {
  const key = `${quiz.id}:${session}:${round}`
  const cached = dealCache.get(key)
  if (cached) return cached
  const dealt = dealQuizRound(quiz.bank, quiz.drawCount)
  dealCache.set(key, dealt)
  return dealt
}

export function QuizPlayer({
  quiz,
  compact = false,
  size,
}: {
  quiz: QuizSet
  compact?: boolean
  size?: TextSize
}) {
  const { prefs } = useStudyPrefs()
  const [quizSize, setQuizSize] = useSectionSize("quiz")
  const textSize = size ?? quizSize
  const { recordQuiz } = useProgress()
  const [session] = useState(() => Math.random().toString(36).slice(2))
  const [round, setRound] = useState(0)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const items = useSyncExternalStore(
    emptySubscribe,
    () => clientDeal(quiz, session, round),
    () => null,
  )

  const item = items?.[index]
  const finished = Boolean(items && items.length > 0 && index >= items.length)
  const revealed = Boolean(selected)
  const correctCount = useMemo(
    () => (items ?? []).filter((entry) => answers[entry.id] === entry.correctId).length,
    [answers, items],
  )

  function startRound() {
    setRound((current) => current + 1)
    setIndex(0)
    setSelected(null)
    setAnswers({})
  }

  function choose(choiceId: string) {
    if (!item || selected) return
    setSelected(choiceId)
    setAnswers((current) => ({ ...current, [item.id]: choiceId }))
  }

  function next() {
    if (!item || !items || !selected) return
    const upcoming = index + 1
    if (upcoming >= items.length) {
      const totalCorrect = items.filter((entry) => answers[entry.id] === entry.correctId).length
      recordQuiz(quiz.id, totalCorrect, items.length)
    }
    setIndex(upcoming)
    setSelected(null)
  }

  if (quiz.bank.length === 0) {
    return <p className="text-sm text-muted-foreground">No quiz items for this lesson yet.</p>
  }

  if (!items) {
    return (
      <div className="space-y-4">
        {!compact ? (
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Multiple choice</p>
              <h2 className="font-serif text-2xl">
                <MixedHanzi text={quiz.title} />
              </h2>
              <p className="text-sm text-muted-foreground">{quiz.titleEn}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <DisplayToggles compact />
              <TextSizeToggle
                value={quizSize}
                onChange={setQuizSize}
                label="Quiz text size"
              />
            </div>
          </div>
        ) : null}
        <p className="text-sm text-muted-foreground">
          {quiz.drawCount} questions, drawn at random from {quiz.bank.length}. Each try is a new
          set, so you can take it more than once.
        </p>
      </div>
    )
  }

  if (finished) {
    const missed = items.filter((entry) => answers[entry.id] !== entry.correctId)
    const percent = Math.round((correctCount / items.length) * 100)
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-rose-300/80 bg-rose-50/70 p-5 dark:border-rose-900 dark:bg-rose-950/30">
          <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Result</p>
          <p className="mt-1 font-serif text-3xl">
            {correctCount} / {items.length}
          </p>
          <p className="text-muted-foreground">
            {percent >= 80
              ? "Nice — this dialogue is sticking."
              : percent >= 50
                ? "Good start. Retry the ones you missed."
                : "Read the dialogue once more, then try again."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            This round was {items.length} of {quiz.bank.length} questions. Try again for a new draw.
          </p>
        </div>
        {missed.length > 0 ? (
          <div className="space-y-3">
            <h3 className="font-medium">Missed</h3>
            {missed.map((entry) => {
              const correct = entry.choices.find((choice) => choice.id === entry.correctId)
              const picked = entry.choices.find((choice) => choice.id === answers[entry.id])
              return (
                <Card key={entry.id}>
                  <CardContent className="space-y-2 pt-4">
                    <p className="text-xs text-muted-foreground">{entry.instructionEn}</p>
                    {entry.stemHanzi ? (
                      <HanziText
                        hanzi={entry.stemHanzi}
                        english={entry.stemEn}
                        showPinyin={prefs.pinyin}
                        showEnglish={prefs.english}
                        ruby={prefs.ruby}
                        size={scaleHanziSize("sm", textSize)}
                        inspectable
                      />
                    ) : (
                      <p>{entry.stemEn}</p>
                    )}
                    <p className="text-sm">
                      <span className="text-muted-foreground">Your answer: </span>
                      {picked?.hanzi ? <MixedHanzi text={picked.hanzi} inspectable /> : (picked?.en ?? "—")}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Correct: </span>
                      {correct?.hanzi ? (
                        <>
                          <MixedHanzi text={correct.hanzi} inspectable />
                          {correct.en ? ` · ${correct.en}` : null}
                        </>
                      ) : (
                        correct?.en
                      )}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : null}
        <Button onClick={startRound}>
          <RotateCcw className="size-4" />
          Try again
        </Button>
      </div>
    )
  }

  const progressValue = ((index + (revealed ? 1 : 0)) / items.length) * 100

  if (!item) return null

  return (
    <div className="space-y-5">
      {!compact ? (
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Multiple choice</p>
            <h2 className="font-serif text-2xl">
              <MixedHanzi text={quiz.title} />
            </h2>
            <p className="text-sm text-muted-foreground">{quiz.titleEn}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DisplayToggles compact />
            <TextSizeToggle
              value={quizSize}
              onChange={setQuizSize}
              label="Quiz text size"
            />
          </div>
        </div>
      ) : null}

      <p className="text-sm text-muted-foreground">
        {items.length} of {quiz.bank.length} this round · a new random set each try
      </p>

      <div className="flex items-center gap-3">
        <Progress value={progressValue} className="h-2" />
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {index + 1}/{items.length}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{item.kind.replace("-", " ")}</Badge>
          <p className="text-sm text-muted-foreground">
            <MixedHanzi text={item.instruction} inspectable />
            <span className="mx-1">·</span>
            {item.instructionEn}
          </p>
        </div>

        <div className="flex items-start justify-between gap-3 overflow-visible rounded-2xl border bg-card p-4">
          <div className="min-w-0">
            {item.stemHanzi ? (
              <HanziText
                hanzi={item.stemHanzi}
                english={item.kind === "scene" ? item.stemEn : undefined}
                showPinyin={prefs.pinyin}
                showEnglish={item.kind === "scene" && prefs.english}
                ruby={prefs.ruby}
                size={scaleHanziSize("lg", textSize)}
                inspectable
              />
            ) : (
              <p className="text-xl font-medium">{item.stemEn}</p>
            )}
          </div>
          {item.stemHanzi ? <SpeakButton text={item.stemHanzi} /> : null}
        </div>
      </div>

      <div className="grid gap-2" role="radiogroup" aria-label={item.instructionEn}>
        {item.choices.map((choice, choiceIndex) => {
          const isPicked = selected === choice.id
          const isCorrect = choice.id === item.correctId
          const showMark = revealed && (isPicked || isCorrect)
          return (
            <button
              key={choice.id}
              type="button"
              role="radio"
              aria-checked={isPicked}
              onClick={() => choose(choice.id)}
              disabled={revealed}
              className={cn(
                "flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                !revealed && "hover:border-rose-400 hover:bg-rose-50/60 dark:hover:bg-rose-950/20",
                revealed && isCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                revealed && isPicked && !isCorrect && "border-destructive bg-destructive/10",
                !revealed && "bg-card",
              )}
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium">
                {LETTERS[choiceIndex]}
              </span>
              <span className="min-w-0 flex-1">
                {choice.hanzi ? (
                  <HanziText
                    hanzi={choice.hanzi}
                    english={choice.en}
                    showPinyin={prefs.pinyin}
                    showEnglish={revealed}
                    ruby={prefs.ruby}
                    size={scaleHanziSize("sm", textSize)}
                    inspectable
                    tap={false}
                  />
                ) : (
                  <span className="text-sm leading-relaxed">{choice.en}</span>
                )}
              </span>
              {showMark ? (
                isCorrect ? (
                  <Check className="mt-1 size-4 shrink-0 text-emerald-600" />
                ) : (
                  <X className="mt-1 size-4 shrink-0 text-destructive" />
                )
              ) : null}
            </button>
          )
        })}
      </div>

      {revealed ? (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {selected === item.correctId ? "Correct." : "Not quite — the green option is the answer."}
          </p>
          <Button onClick={next}>{index + 1 === items.length ? "See score" : "Next"}</Button>
        </div>
      ) : null}
    </div>
  )
}
