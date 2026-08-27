import Link from "next/link"
import { ArrowRight, Headphones, Languages, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOK, UNITS, totalTopics } from "@/content/catalog"
import { unitStats } from "@/content/unit-1"

export default function HomePage() {
  const stats = unitStats()
  const unit1 = UNITS[0]

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Badge variant="secondary">{BOOK.edition} · {BOOK.year}</Badge>
          <div>
            <p className="text-sm tracking-[0.2em] text-rose-800 uppercase dark:text-rose-300">
              Mandarin conversation lab
            </p>
            <h1 className="mt-2 font-serif text-5xl leading-tight font-semibold tracking-tight md:text-6xl">
              {BOOK.title}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{BOOK.titleEn}</p>
            <p className="mt-2 text-lg">{BOOK.subtitle}</p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            A study companion for Shelley Hsieh&apos;s conversation-topic book: every prompt with
            pinyin, English, speaking practice, and room for the official lesson audio. Unit 1
            家庭生活 is complete. The other 21 units are mapped and waiting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/units/1">
                Start Unit 1 <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/audio">Find the MP3s</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/plan">Website plan</Link>
            </Button>
          </div>
        </div>
        <Card className="bg-rose-50/70 dark:bg-rose-950/20">
          <CardHeader>
            <CardTitle>Unit 1 is ready</CardTitle>
            <CardDescription>
              {unit1.title} · {unit1.titleEn}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm">
            <Stat label="Lessons" value={String(stats.lessons)} />
            <Stat label="Dialogue lines" value={String(stats.dialogueLines)} />
            <Stat label="Vocabulary" value={String(stats.vocabulary)} />
            <Stat label="Questions" value={String(stats.questions)} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature
          icon={<Languages className="size-5" />}
          title="Hanzi + pinyin + English"
          body="Toggle ruby pinyin over each character, a pinyin line, and English. Built for learners who can read some Chinese but still need a net."
        />
        <Feature
          icon={<Sparkles className="size-5" />}
          title="Speak, don’t just decode"
          body="The book’s real job is turn-taking. Practice the model dialogue, then answer the 互动问答 out loud. Mark what you’ve actually said."
        />
        <Feature
          icon={<Headphones className="size-5" />}
          title="Audio when you have it"
          body="Official tracks were recorded by 欧喜强 and 胡砚涵. We looked for public MP3s and did not find a legal dump. Drop your files in, or use browser speech in the meantime."
        />
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl">All {UNITS.length} units</h2>
            <p className="text-muted-foreground">{totalTopics()} conversation situations across the book.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/units">Browse catalog</Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.slice(0, 6).map((unit) => (
            <Link key={unit.id} href={unit.status === "ready" ? `/units/${unit.id}` : "/units"}>
              <Card className="h-full transition-colors hover:border-rose-400">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={unit.status === "ready" ? "default" : "outline"}>
                      {unit.status === "ready" ? "Live" : "Planned"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{unit.lessonCount} lessons</span>
                  </div>
                  <CardTitle className="font-serif text-xl">
                    Unit {unit.id} {unit.title}
                  </CardTitle>
                  <CardDescription>{unit.titleEn}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-3xl font-semibold">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{body}</CardDescription>
      </CardHeader>
    </Card>
  )
}
