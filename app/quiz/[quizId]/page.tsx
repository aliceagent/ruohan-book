import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { QuizPlayer } from "@/components/quiz-player"
import { Button } from "@/components/ui/button"
import { UNIT_1 } from "@/content/unit-1"
import { getQuiz } from "@/lib/quiz"

export function generateStaticParams() {
  return [{ quizId: "unit-1" }, ...UNIT_1.map((lesson) => ({ quizId: lesson.id }))]
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
            <Link href={`/units/1/${quiz.lessonId}`}>Back to lesson</Link>
          </Button>
        ) : null}
      </div>
      <QuizPlayer quiz={quiz} />
    </div>
  )
}
