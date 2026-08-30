import type { Metadata } from "next"
import Link from "next/link"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LessonIllustration } from "@/components/lesson-illustration"
import { getUnit } from "@/content/catalog"
import { ALL_LESSONS, lessonsForUnit } from "@/content/lessons"
import { allLessonQuizzes, builtUnitIds, getUnitQuiz } from "@/lib/quiz"

export const metadata: Metadata = {
  title: "Quiz",
}

export default function QuizIndexPage() {
  const quizzes = allLessonQuizzes()
  const unitIds = builtUnitIds()

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Check yourself</p>
        <h1 className="font-serif text-4xl">Quizzes</h1>
        <p className="max-w-2xl text-muted-foreground">
          <MixedHanzi text="Each try draws 10 questions at random from a larger bank — vocabulary, model-dialogue lines, and the scene — so you can retake without seeing the same set. The book’s 互动问答 stay open speaking prompts — this is the closed-answer check after you read." />
        </p>
        <div className="flex flex-wrap gap-3">
          {unitIds.map((unitId) => {
            const unitQuiz = getUnitQuiz(unitId)
            const unit = getUnit(unitId)
            return (
              <Button key={unitId} asChild>
                <Link href={`/quiz/unit-${unitId}`}>
                  Mixed Unit {unitId} quiz
                  {unit ? ` · ${unit.titleEn}` : ""} · {unitQuiz.drawCount} of {unitQuiz.bank.length}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>

      {unitIds.map((unitId) => {
        const unit = getUnit(unitId)
        const unitLessons = lessonsForUnit(unitId)
        const unitQuizzes = quizzes.filter((quiz) =>
          unitLessons.some((lesson) => lesson.id === quiz.lessonId),
        )
        return (
          <section key={unitId} className="space-y-4">
            <h2 className="font-serif text-2xl">
              Unit {unitId} {unit ? <MixedHanzi text={unit.title} /> : null}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {unitQuizzes.map((quiz) => {
                const lesson = ALL_LESSONS.find((item) => item.id === quiz.lessonId)
                return (
                  <Card key={quiz.id} className="transition-colors hover:border-rose-400">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        {lesson ? (
                          <Link href={`/quiz/${quiz.id}`} className="shrink-0">
                            <LessonIllustration
                              lessonId={lesson.id}
                              alt={`${quiz.title} · ${quiz.titleEn}`}
                            />
                          </Link>
                        ) : null}
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <Badge variant="outline">
                              {quiz.drawCount} of {quiz.bank.length}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{lesson?.audioId}</span>
                          </div>
                          <Link href={`/quiz/${quiz.id}`} className="block">
                            <CardTitle className="font-serif text-2xl">
                              <MixedHanzi text={quiz.title} />
                            </CardTitle>
                            <CardDescription>{quiz.titleEn}</CardDescription>
                          </Link>
                          {lesson ? (
                            <Link
                              href={`/units/${lesson.unitId}/${lesson.id}#quiz`}
                              className="text-sm text-rose-800 hover:underline"
                            >
                              Open in the lesson
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
