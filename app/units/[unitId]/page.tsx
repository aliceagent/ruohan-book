import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getUnit } from "@/content/catalog"
import { UNIT_1 } from "@/content/unit-1"

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
          Unit {unit.id} {unit.title}
        </h1>
        <p className="text-lg text-muted-foreground">{unit.titleEn}</p>
        <p className="max-w-2xl text-muted-foreground">
          Each lesson has a real-world scene, a model dialogue with audio slot {unit.id}-n, related
          words, and 20+ questions meant to be asked and answered — not just translated.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {unit.topics.map((topic) => {
          const lesson = lessons.find((item) => item.id === topic.id)
          const href = lesson ? `/units/${unit.id}/${topic.id}` : undefined
          return (
            <Card key={topic.id} className={href ? "transition-colors hover:border-rose-400" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant={href ? "default" : "outline"}>{topic.id}</Badge>
                  {lesson ? (
                    <span className="text-xs text-muted-foreground">
                      {lesson.questions.length} questions · {lesson.vocabulary.length} words
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">Coming later</span>
                  )}
                </div>
                {href ? (
                  <Link href={href} className="block">
                    <CardTitle className="font-serif text-2xl">{topic.title}</CardTitle>
                    <CardDescription>{topic.titleEn}</CardDescription>
                  </Link>
                ) : (
                  <>
                    <CardTitle className="font-serif text-2xl">{topic.title}</CardTitle>
                    <CardDescription>{topic.titleEn}</CardDescription>
                  </>
                )}
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
