"use client"

import Link from "next/link"
import {
  Check,
  Clock3,
  Hash,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react"

import { AudioBar } from "@/components/audio-bar"
import { DisplayToggles } from "@/components/display-toggles"
import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { LessonIllustration } from "@/components/lesson-illustration"
import { QuizPlayer } from "@/components/quiz-player"
import { CONTENT_HANZI_SIZE, TextSizeToggle } from "@/components/text-size-toggle"
import { useStudyPrefs } from "@/components/study-prefs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { questionKey, useProgress, vocabKey } from "@/hooks/use-progress"
import { adjacentLessons } from "@/content/unit-1"
import { getLessonQuiz } from "@/lib/quiz"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils"

export function LessonView({ lesson }: { lesson: Lesson }) {
  const { prefs, setPrefs } = useStudyPrefs()
  const { progress, toggleLesson, toggleQuestion, toggleVocab } = useProgress()
  const { prev, next } = adjacentLessons(lesson.id)
  const quiz = getLessonQuiz(lesson.id)
  const quizBest = progress.quizBest[lesson.id]
  const dialogueText = lesson.dialogue
    .filter((line) => line.speaker !== "stage")
    .map((line) => line.hanzi)
    .join("。")
  const done = progress.completedLessons.includes(lesson.id)

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <LessonIllustration
          lessonId={lesson.id}
          alt={`${lesson.title} · ${lesson.titleEn}`}
          variant="hero"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">
              Unit {lesson.unitId} · Lesson {lesson.id}
            </p>
            <HanziText
              hanzi={lesson.title}
              english={lesson.titleEn}
              showPinyin={prefs.pinyin}
              showEnglish={prefs.english}
              ruby={prefs.ruby}
              size="xl"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DisplayToggles compact />
            <Button
              variant={done ? "secondary" : "default"}
              onClick={() => toggleLesson(lesson.id)}
            >
              <Check className="size-4" />
              {done ? "Completed" : "Mark complete"}
            </Button>
          </div>
        </div>
      </div>

      <AudioBar audioId={lesson.audioId} speakText={dialogueText} />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ScenarioChip icon={<Clock3 className="size-4" />} label="Time" hanzi={lesson.scenario.time} en={lesson.scenario.timeEn} />
        <ScenarioChip icon={<MapPin className="size-4" />} label="Place" hanzi={lesson.scenario.location} en={lesson.scenario.locationEn} />
        <ScenarioChip icon={<Users className="size-4" />} label="People" hanzi={lesson.scenario.participants} en={lesson.scenario.participantsEn} />
        <ScenarioChip icon={<Hash className="size-4" />} label="Topic" hanzi={lesson.scenario.topic} en={lesson.scenario.topicEn} />
      </section>

      <section className="space-y-4">
        <SectionTitle icon={<MessageCircle className="size-4" />} title="情境对话" en="Situational dialogue" />
        <div className="space-y-3">
          {lesson.dialogue.map((line, index) => (
            <div
              key={`${line.speaker}-${index}`}
              className={cn(
                "rounded-2xl border p-4",
                line.speaker === "A" && "bg-rose-50/80 dark:bg-rose-950/20",
                line.speaker === "B" && "bg-card",
                line.speaker === "stage" && "border-dashed bg-muted/40 italic",
              )}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <Badge variant={line.speaker === "stage" ? "outline" : "secondary"}>
                  {line.speaker === "stage" ? "Scene" : line.speaker}
                </Badge>
                {line.speaker !== "stage" ? <SpeakButton text={line.hanzi} /> : null}
              </div>
              <HanziText
                hanzi={line.hanzi}
                english={line.en}
                showPinyin={prefs.pinyin}
                showEnglish={prefs.english}
                ruby={prefs.ruby}
                size="lg"
              />
            </div>
          ))}
        </div>
        {lesson.notes?.map((note) => (
          <p key={note.hanzi} className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">注：{note.hanzi}</span> {note.en}
          </p>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle title="扩展联想词" en="Related words to stretch the conversation" />
          <TextSizeToggle
            value={prefs.textSize}
            onChange={(textSize) => setPrefs({ textSize })}
            label="Vocabulary text size"
          />
        </div>
        <div
          className={cn(
            "grid gap-3",
            prefs.textSize === "lg" ? "sm:grid-cols-1 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {lesson.vocabulary.map((item) => {
            const key = vocabKey(lesson.id, item.hanzi)
            const known = progress.knownVocab.includes(key)
            return (
              <Card key={item.hanzi} className={cn(known && "border-rose-400")}>
                <CardContent className="flex items-start justify-between gap-2 pt-5">
                  <HanziText
                    hanzi={item.hanzi}
                    english={item.en}
                    showPinyin={prefs.pinyin}
                    showEnglish={prefs.english}
                    ruby={prefs.ruby}
                    size={CONTENT_HANZI_SIZE[prefs.textSize]}
                  />
                  <div className="flex flex-col items-end gap-1">
                    <SpeakButton text={item.hanzi} />
                    <Button size="xs" variant={known ? "secondary" : "ghost"} onClick={() => toggleVocab(key)}>
                      {known ? "Known" : "Learn"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {quiz ? (
        <section id="quiz" className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionTitle title="测验" en="Multiple-choice check on this lesson's words, lines, and scene" />
            {quizBest ? (
              <Badge variant="secondary">
                Best {quizBest.correct}/{quizBest.total}
              </Badge>
            ) : null}
          </div>
          <QuizPlayer quiz={quiz} compact />
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle title="互动问答" en="Interactive questions — answer out loud" />
          <TextSizeToggle
            value={prefs.questionSize}
            onChange={(questionSize) => setPrefs({ questionSize })}
            label="Question text size"
          />
        </div>
        <ol className="space-y-3">
          {lesson.questions.map((item) => {
            const key = questionKey(lesson.id, item.n)
            const practiced = progress.practicedQuestions.includes(key)
            return (
              <li key={item.n} className="rounded-2xl border bg-card p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{String(item.n).padStart(2, "0")}</span>
                    {item.kind ? (
                      <Badge variant="outline" className="capitalize">
                        {item.kind}
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-1">
                    <SpeakButton text={item.hanzi} />
                    <Button size="xs" variant={practiced ? "secondary" : "ghost"} onClick={() => toggleQuestion(key)}>
                      {practiced ? "Practiced" : "I practiced"}
                    </Button>
                  </div>
                </div>
                <HanziText
                  hanzi={item.hanzi}
                  english={item.en}
                  showPinyin={prefs.pinyin}
                  showEnglish={prefs.english}
                  ruby={prefs.ruby}
                  size={CONTENT_HANZI_SIZE[prefs.questionSize]}
                />
              </li>
            )
          })}
        </ol>
      </section>

      <nav className="flex items-center justify-between gap-3 border-t pt-6">
        {prev ? (
          <Button variant="outline" asChild>
            <Link href={`/units/${prev.unitId}/${prev.id}`}>
              ← {prev.id} {prev.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild>
            <Link href={`/units/${next.unitId}/${next.id}`}>
              {next.id} {next.title} →
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/units/1">Back to Unit 1</Link>
          </Button>
        )}
      </nav>
    </div>
  )
}

function SectionTitle({
  title,
  en,
  icon,
}: {
  title: string
  en: string
  icon?: React.ReactNode
}) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl">
        {icon}
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{en}</p>
    </div>
  )
}

function ScenarioChip({
  icon,
  label,
  hanzi,
  en,
}: {
  icon: React.ReactNode
  label: string
  hanzi: string
  en: string
}) {
  const { prefs } = useStudyPrefs()
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          {icon}
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <HanziText
          hanzi={hanzi}
          english={en}
          showPinyin={prefs.pinyin}
          showEnglish={prefs.english}
          ruby={prefs.ruby}
          size="sm"
        />
      </CardContent>
    </Card>
  )
}
