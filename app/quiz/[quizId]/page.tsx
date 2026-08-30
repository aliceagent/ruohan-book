import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { QuizPlayer } from "@/components/quiz-player"
import { Button } from "@/components/ui/button"
import { ALL_LESSONS, getLesson } from "@/content/lessons"
import { builtUnitIds, getQuiz } from "@/lib/quiz"

export function generateStaticParams() {
  return [
    ...builtUnitIds().map((unitId) => ({ quizId: `unit-${unitId}` })),
    ...ALL_LESSONS.map((lesson) => ({ quizId: lesson.id })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ quizId: string }>
}): Promise<Metadata> {
  const { quizId } = await params
  const quiz = getQuiz(quizId)
  if (!quiz) return { title: "Quiz" }
  return { title: `Quiz · ${quiz.title}` }
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ quizId: string }>
}) {
  const { quizId } = await params
  const quiz = getQuiz(quizId)
  if (!quiz) notFound()

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="outline" asChild>
          <Link href="/quiz">All quizzes</Link>
        </Button>
        {quiz.lessonId ? (
          <Button variant="ghost" asChild>
            <Link href={`/units/${getLesson(quiz.lessonId)?.unitId ?? 1}/${quiz.lessonId}`}>
              Back to lesson
            </Link>
          </Button>
        ) : null}
      </div>
      <QuizPlayer key={quiz.id} quiz={quiz} />
    </div>
  )
}
