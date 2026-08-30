import Link from "next/link"
import { ArrowRight, CircleHelp, Headphones, Languages, Sparkles } from "lucide-react"

import { MixedHanzi } from "@/components/mixed-hanzi"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOK, UNITS, totalTopics } from "@/content/catalog"
import { unitStats } from "@/content/lessons"

export default function HomePage() {
  const stats = unitStats(1)
  const unit2Stats = unitStats(2)
  const unit1 = UNITS[0]
  const unit2 = UNITS[1]

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Badge variant="secondary">
            <MixedHanzi text={BOOK.edition} /> · {BOOK.year}
          </Badge>
          <div>
            <p className="text-sm tracking-[0.2em] text-rose-800 uppercase dark:text-rose-300">
              Mandarin conversation lab
            </p>
            <h1 className="mt-2 font-serif text-5xl leading-tight font-semibold tracking-tight md:text-6xl">
              <MixedHanzi text={BOOK.title} />
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{BOOK.titleEn}</p>
            <p className="mt-2 text-lg">
              <MixedHanzi text={BOOK.subtitle} />
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            <MixedHanzi text="A study companion for Shelley Hsieh's conversation-topic book: every prompt with pinyin, English, speaking practice, multiple-choice quizzes, and the official lesson audio. Units 1 and 2 are complete. The other 20 units are mapped and waiting." />
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/units/1">
                Start Unit 1 <ArrowRight />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/units/2">
                Open Unit 2 <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/quiz">Take a quiz</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/audio">Listen to the audio</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/plan">Website plan</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4">
          <Card className="bg-rose-50/70 dark:bg-rose-950/20">
            <CardHeader>
              <CardTitle>Unit 1 is ready</CardTitle>
              <CardDescription>
                <MixedHanzi text={unit1.title} /> · {unit1.titleEn}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <Stat label="Lessons" value={String(stats.lessons)} />
              <Stat label="Dialogue lines" value={String(stats.dialogueLines)} />
              <Stat label="Vocabulary" value={String(stats.vocabulary)} />
              <Stat label="Questions" value={String(stats.questions)} />
            </CardContent>
          </Card>
          <Card className="bg-rose-50/70 dark:bg-rose-950/20">
            <CardHeader>
              <CardTitle>Unit 2 is ready</CardTitle>
              <CardDescription>
                <MixedHanzi text={unit2.title} /> · {unit2.titleEn}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <Stat label="Lessons" value={String(unit2Stats.lessons)} />
              <Stat label="Dialogue lines" value={String(unit2Stats.dialogueLines)} />
              <Stat label="Vocabulary" value={String(unit2Stats.vocabulary)} />
              <Stat label="Questions" value={String(unit2Stats.questions)} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          icon={<CircleHelp className="size-5" />}
          title="Multiple-choice quizzes"
          body="Each try draws 10 questions at random from a larger bank of vocabulary, dialogue lines, and the scene. Retake for a new set; missed items show up at the end."
        />
        <Feature
          icon={<Headphones className="size-5" />}
          title="Official dialogue audio"
          body="Official tracks play on every live lesson — Unit 1 as 01-01…01-10, Unit 2 as 02-01…02-06, recorded by 欧喜强 and 胡砚涵. Browser speech is still there for single lines."
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
                    Unit {unit.id} <MixedHanzi text={unit.title} />
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
        <CardDescription className="text-sm leading-relaxed">
          <MixedHanzi text={body} />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
