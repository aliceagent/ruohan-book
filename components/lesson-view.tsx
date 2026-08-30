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
import { ExpandableDialogue } from "@/components/expandable-dialogue"
import { FillBlankExercise } from "@/components/fill-blank-exercise"
import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { LessonIllustration } from "@/components/lesson-illustration"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { MiniLessonCard } from "@/components/mini-lesson"
import { QuizPlayer } from "@/components/quiz-player"
import { CONTENT_HANZI_SIZE, TextSizeToggle } from "@/components/text-size-toggle"
import { useStudyPrefs } from "@/components/study-prefs"
import { VocabGrid } from "@/components/vocab-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { questionKey, useProgress } from "@/hooks/use-progress"
import { adjacentLessons } from "@/content/unit-1"
import { collectLessonGlosses } from "@/lib/gloss"
import { getLessonQuiz } from "@/lib/quiz"
import type { Lesson } from "@/lib/types"

export function LessonView({ lesson }: { lesson: Lesson }) {
  const { prefs, setPrefs } = useStudyPrefs()
  const { progress, toggleLesson, toggleQuestion } = useProgress()
  const { prev, next } = adjacentLessons(lesson.id)
  const quiz = getLessonQuiz(lesson.id)
  const quizBest = progress.quizBest[lesson.id]
  const glosses = collectLessonGlosses(lesson)
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
        <ExpandableDialogue lines={lesson.dialogue} glossary={glosses} />
        {lesson.notes?.map((note) => (
          <p key={note.hanzi} className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              <MixedHanzi text={`注：${note.hanzi}`} />
            </span>{" "}
            {note.en}
          </p>
        ))}
      </section>

      {lesson.coreVocabulary && lesson.coreVocabulary.length > 0 ? (
        <section className="space-y-4">
          <SectionTitle
            title="对话词汇"
            en="Words from this dialogue — tap a sentence above for the mini lesson"
          />
          <VocabGrid lessonId={lesson.id} items={lesson.coreVocabulary} />
        </section>
      ) : null}

      {lesson.expressionFamily ? (
        <section className="space-y-4">
          <SectionTitle title={lesson.expressionFamily.title} en={lesson.expressionFamily.titleEn} />
          <VocabGrid lessonId={lesson.id} items={lesson.expressionFamily.items} />
        </section>
      ) : null}

      {lesson.chunks && lesson.chunks.length > 0 ? (
        <section className="space-y-4">
          <SectionTitle title="值得整句记的" en="Memorize these as complete chunks, not as loose words" />
          <VocabGrid lessonId={lesson.id} items={lesson.chunks} />
        </section>
      ) : null}

      {lesson.grammarFocus && lesson.grammarFocus.length > 0 ? (
        <section className="space-y-4">
          <SectionTitle
            title="五个优先句型"
            en="If you study this dialogue rather than everything, start here"
          />
          <div className="grid gap-3 lg:grid-cols-2">
            {lesson.grammarFocus.map((item) => (
              <MiniLessonCard key={`${item.title}-${item.pattern ?? ""}`} lesson={item} />
            ))}
          </div>
        </section>
      ) : null}

      {lesson.practiceSentences && lesson.practiceSentences.length > 0 ? (
        <section className="space-y-4">
          <SectionTitle
            title="练习句子"
            en="Personalized practice at about HSK 3 — say them out loud"
          />
          <ol className="space-y-3">
            {lesson.practiceSentences.map((item, index) => (
              <li key={item.hanzi} className="rounded-2xl border bg-card p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <SpeakButton text={item.hanzi} />
                </div>
                <HanziText
                  hanzi={item.hanzi}
                  english={item.en}
                  showPinyin={prefs.pinyin}
                  showEnglish={prefs.english}
                  ruby={prefs.ruby}
                  size="md"
                  inspectable
                  glossary={glosses}
                />
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {lesson.fillBlanks && lesson.fillBlanks.length > 0 ? (
        <section className="space-y-4">
          <SectionTitle title="填空练习" en="Tap a choice — you’ll see right away if it’s correct" />
          <FillBlankExercise items={lesson.fillBlanks} />
        </section>
      ) : null}

      <section className="space-y-4">
        <SectionTitle title="扩展联想词" en="Related words to stretch the conversation" />
        <VocabGrid lessonId={lesson.id} items={lesson.vocabulary} />
      </section>

      {quiz ? (
        <section id="quiz" className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionTitle
              title="测验"
              en={
                quiz
                  ? `Each try draws ${quiz.drawCount} from ${quiz.bank.length} questions on this lesson's words, lines, and scene`
                  : "Multiple-choice check on this lesson's words, lines, and scene"
              }
            />
            {quizBest ? (
              <Badge variant="secondary">
                Best {quizBest.correct}/{quizBest.total}
              </Badge>
            ) : null}
          </div>
          <QuizPlayer key={quiz.id} quiz={quiz} compact />
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
                  inspectable
                  glossary={glosses}
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
        <MixedHanzi text={title} />
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
    <Card className="overflow-visible">
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
          inspectable
        />
      </CardContent>
    </Card>
  )
}
