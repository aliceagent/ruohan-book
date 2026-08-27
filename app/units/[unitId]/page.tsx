import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LessonIllustration } from "@/components/lesson-illustration"
import { getUnit } from "@/content/catalog"
import { UNIT_1, lessonVocabulary } from "@/content/unit-1"

export async function generateStaticParams() {
  return [{ unitId: "1" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ unitId: string }>
}): Promise<Metadata> {
  const { unitId } = await params
  const unit = getUnit(Number(unitId))
  if (!unit) return { title: "Unit" }
  return { title: `Unit ${unit.id} ${unit.title}` }
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unitId: string }>
}) {
  const { unitId } = await params
  const unit = getUnit(Number(unitId))
  if (!unit) notFound()

  const lessons = unit.id === 1 ? UNIT_1 : []

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">
          {unit.status === "ready" ? "Ready to study" : "Mapped, not yet built"}
        </p>
        <h1 className="font-serif text-4xl">
          Unit {unit.id} <MixedHanzi text={unit.title} />
        </h1>
        <p className="text-lg text-muted-foreground">{unit.titleEn}</p>
        <p className="max-w-2xl text-muted-foreground">
          <MixedHanzi text="Each lesson has a real-world scene, a model dialogue with audio, related words, a 10-question quiz drawn from a larger bank, and 20+ questions meant to be asked and answered — not just translated. On 休息睡觉, tap a dialogue line to open a mini lesson on that sentence." />
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {unit.topics.map((topic) => {
          const lesson = lessons.find((item) => item.id === topic.id)
          const href = lesson ? `/units/${unit.id}/${topic.id}` : undefined
          return (
            <Card key={topic.id} className={href ? "transition-colors hover:border-rose-400" : ""}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {lesson ? (
                    <Link href={href!} className="shrink-0">
                      <LessonIllustration
                        lessonId={lesson.id}
                        alt={`${topic.title} · ${topic.titleEn}`}
                      />
                    </Link>
                  ) : null}
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant={href ? "default" : "outline"}>{topic.id}</Badge>
                      {lesson ? (
                        <span className="text-xs text-muted-foreground">
                          {lesson.questions.length} prompts · {lessonVocabulary(lesson).length} words
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Coming later</span>
                      )}
                    </div>
                    {href ? (
                      <>
                        <Link href={href} className="block">
                          <CardTitle className="font-serif text-2xl">
                            <MixedHanzi text={topic.title} />
                          </CardTitle>
                          <CardDescription>{topic.titleEn}</CardDescription>
                        </Link>
                        <Link href={`/quiz/${topic.id}`} className="text-sm text-rose-800 hover:underline">
                          Lesson quiz
                        </Link>
                      </>
                    ) : (
                      <>
                        <CardTitle className="font-serif text-2xl">
                          <MixedHanzi text={topic.title} />
                        </CardTitle>
                        <CardDescription>{topic.titleEn}</CardDescription>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
