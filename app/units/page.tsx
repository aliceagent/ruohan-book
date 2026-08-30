import type { Metadata } from "next"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { RememberUnitLink } from "@/components/remember-unit-link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UNITS } from "@/content/catalog"

export const metadata: Metadata = {
  title: "Units",
}

export default function UnitsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Catalog</p>
        <h1 className="font-serif text-4xl">All units</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The book has 22 units and 120 situations. Units 1 and 2 are fully built with pinyin,
          English, vocabulary, and questions. Later units are listed so the site can grow lesson by
          lesson.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {UNITS.map((unit) => {
          const href = unit.status === "ready" ? `/units/${unit.id}` : undefined
          const inner = (
            <Card className={href ? "h-full transition-colors hover:border-rose-400" : "h-full opacity-90"}>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={unit.status === "ready" ? "default" : "outline"}>
                    {unit.status === "ready" ? "Live" : "Coming next"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{unit.lessonCount} lessons</span>
                </div>
                <CardTitle className="font-serif text-2xl">
                  Unit {unit.id} <MixedHanzi text={unit.title} />
                </CardTitle>
                <CardDescription>{unit.titleEn}</CardDescription>
                <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
                  {unit.topics.slice(0, 6).map((topic) => (
                    <li key={topic.id}>
                      {topic.id} <MixedHanzi text={topic.title} /> · {topic.titleEn}
                    </li>
                  ))}
                  {unit.topics.length > 6 ? (
                    <li>+ {unit.topics.length - 6} more</li>
                  ) : null}
                </ul>
              </CardHeader>
            </Card>
          )
          return href ? (
            <RememberUnitLink key={unit.id} href={href} unitId={unit.id}>
              {inner}
            </RememberUnitLink>
          ) : (
            <div key={unit.id}>{inner}</div>
          )
        })}
      </div>
    </div>
  )
}
