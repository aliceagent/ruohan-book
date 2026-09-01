"use client"

import Link from "next/link"
import { useLayoutEffect, useState } from "react"
import {
  BookMarked,
  BookOpen,
  Check,
  Clock3,
  Hash,
  Layers,
  ListChecks,
  ListTodo,
  MapPin,
  MessageCircle,
  MessagesSquare,
  PenLine,
  Quote,
  Sparkles,
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
import { CONTENT_HANZI_SIZE, TextSizeToggle, scaleHanziSize } from "@/components/text-size-toggle"
import { type TextSize, useSectionSize, useStudyPrefs } from "@/components/study-prefs"
import { VocabGrid } from "@/components/vocab-grid"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { questionKey, useProgress } from "@/hooks/use-progress"
import { adjacentLessons } from "@/content/lessons"
import { collectLessonGlosses } from "@/lib/gloss"
import { getLessonQuiz } from "@/lib/quiz"
import type { Lesson } from "@/lib/types"

export function LessonView({ lesson }: { lesson: Lesson }) {
  const { prefs } = useStudyPrefs()
  const [scenarioSize, setScenarioSize] = useSectionSize("scenario")
  const [dialogueSize, setDialogueSize] = useSectionSize("dialogue")
  const [coreVocabSize, setCoreVocabSize] = useSectionSize("coreVocab")
  const [familySize, setFamilySize] = useSectionSize("family")
  const [chunksSize, setChunksSize] = useSectionSize("chunks")
  const [grammarSize, setGrammarSize] = useSectionSize("grammar")
  const [practiceSize, setPracticeSize] = useSectionSize("practice")
  const [fillBlankSize, setFillBlankSize] = useSectionSize("fillBlanks")
  const [stretchVocabSize, setStretchVocabSize] = useSectionSize("stretchVocab")
  const [quizSize, setQuizSize] = useSectionSize("quiz")
  const [questionSize, setQuestionSize] = useSectionSize("questions")
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
  const [openSections, setOpenSections] = useState<string[]>(["scenario"])

  useLayoutEffect(() => {
    const openQuizFromHash = (resetOthers: boolean) => {
      if (window.location.hash === "#quiz" && quiz) {
        setOpenSections((current) => {
          if (resetOthers) return ["quiz"]
          return current.includes("quiz") ? current : [...current, "quiz"]
        })
        document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "start" })
        return true
      }
      return false
    }

    if (!openQuizFromHash(true)) {
      setOpenSections(["scenario"])
    }

    const onHashChange = () => {
      openQuizFromHash(false)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [lesson.id, quiz])

  return (
    <div className="space-y-8">
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
              inspectable
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

      <Accordion
        type="multiple"
        value={openSections}
        onValueChange={setOpenSections}
        className="gap-4"
      >
        <LessonSection
          value="scenario"
          icon={<MapPin className="size-6" />}
          title="情境"
          en="Time, place, people, and topic"
          size={scenarioSize}
          onSizeChange={setScenarioSize}
          sizeLabel="Scene text size"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ScenarioChip icon={<Clock3 className="size-4" />} label="Time" hanzi={lesson.scenario.time} en={lesson.scenario.timeEn} size={scenarioSize} />
            <ScenarioChip icon={<MapPin className="size-4" />} label="Place" hanzi={lesson.scenario.location} en={lesson.scenario.locationEn} size={scenarioSize} />
            <ScenarioChip icon={<Users className="size-4" />} label="People" hanzi={lesson.scenario.participants} en={lesson.scenario.participantsEn} size={scenarioSize} />
            <ScenarioChip icon={<Hash className="size-4" />} label="Topic" hanzi={lesson.scenario.topic} en={lesson.scenario.topicEn} size={scenarioSize} />
          </div>
        </LessonSection>

        <LessonSection
          value="dialogue"
          icon={<MessageCircle className="size-6" />}
          title="情境对话"
          en="Situational dialogue"
          size={dialogueSize}
          onSizeChange={setDialogueSize}
          sizeLabel="Dialogue text size"
        >
          <ExpandableDialogue lines={lesson.dialogue} glossary={glosses} size={dialogueSize} />
          {lesson.notes?.map((note) => (
            <p key={note.hanzi} className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                <MixedHanzi text={`注：${note.hanzi}`} inspectable />
              </span>{" "}
              {note.en}
            </p>
          ))}
        </LessonSection>

        {lesson.coreVocabulary && lesson.coreVocabulary.length > 0 ? (
          <LessonSection
            value="core-vocab"
            icon={<BookOpen className="size-6" />}
            title="对话词汇"
            en="Words from this dialogue — tap a sentence above for the mini lesson"
            size={coreVocabSize}
            onSizeChange={setCoreVocabSize}
            sizeLabel="Dialogue vocabulary text size"
          >
            <VocabGrid lessonId={lesson.id} items={lesson.coreVocabulary} size={coreVocabSize} />
          </LessonSection>
        ) : null}

        {lesson.expressionFamily ? (
          <LessonSection
            value="family"
            icon={<Layers className="size-6" />}
            title={lesson.expressionFamily.title}
            en={lesson.expressionFamily.titleEn}
            size={familySize}
            onSizeChange={setFamilySize}
            sizeLabel="Expression family text size"
          >
            <VocabGrid lessonId={lesson.id} items={lesson.expressionFamily.items} size={familySize} />
          </LessonSection>
        ) : null}

        {lesson.chunks && lesson.chunks.length > 0 ? (
          <LessonSection
            value="chunks"
            icon={<Quote className="size-6" />}
            title="值得整句记的"
            en="Memorize these as complete chunks, not as loose words"
            size={chunksSize}
            onSizeChange={setChunksSize}
            sizeLabel="Chunk text size"
          >
            <VocabGrid lessonId={lesson.id} items={lesson.chunks} size={chunksSize} />
          </LessonSection>
        ) : null}

        {lesson.grammarFocus && lesson.grammarFocus.length > 0 ? (
          <LessonSection
            value="grammar"
            icon={<BookMarked className="size-6" />}
            title="五个优先句型"
            en="If you study this dialogue rather than everything, start here"
            size={grammarSize}
            onSizeChange={setGrammarSize}
            sizeLabel="Grammar text size"
          >
            <div className={grammarSize === "lg" ? "grid gap-3" : "grid gap-3 lg:grid-cols-2"}>
              {lesson.grammarFocus.map((item) => (
                <MiniLessonCard key={`${item.title}-${item.pattern ?? ""}`} lesson={item} size={grammarSize} />
              ))}
            </div>
          </LessonSection>
        ) : null}

        {lesson.practiceSentences && lesson.practiceSentences.length > 0 ? (
          <LessonSection
            value="practice"
            icon={<PenLine className="size-6" />}
            title="练习句子"
            en="Personalized practice at about HSK 3 — say them out loud"
            size={practiceSize}
            onSizeChange={setPracticeSize}
            sizeLabel="Practice sentence text size"
          >
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
                    size={CONTENT_HANZI_SIZE[practiceSize]}
                    inspectable
                    glossary={glosses}
                  />
                </li>
              ))}
            </ol>
          </LessonSection>
        ) : null}

        {lesson.fillBlanks && lesson.fillBlanks.length > 0 ? (
          <LessonSection
            value="fill-blanks"
            icon={<ListTodo className="size-6" />}
            title="填空练习"
            en="Tap a choice — you’ll see right away if it’s correct"
            size={fillBlankSize}
            onSizeChange={setFillBlankSize}
            sizeLabel="Fill-in text size"
          >
            <FillBlankExercise items={lesson.fillBlanks} size={fillBlankSize} />
          </LessonSection>
        ) : null}

        <LessonSection
          value="stretch-vocab"
          icon={<Sparkles className="size-6" />}
          title="扩展联想词"
          en="Related words to stretch the conversation"
          size={stretchVocabSize}
          onSizeChange={setStretchVocabSize}
          sizeLabel="Stretch vocabulary text size"
        >
          <VocabGrid lessonId={lesson.id} items={lesson.vocabulary} size={stretchVocabSize} />
        </LessonSection>

        {quiz ? (
          <LessonSection
            value="quiz"
            id="quiz"
            icon={<ListChecks className="size-6" />}
            title="测验"
            en={`Each try draws ${quiz.drawCount} from ${quiz.bank.length} questions on this lesson's words, lines, and scene`}
            size={quizSize}
            onSizeChange={setQuizSize}
            sizeLabel="Quiz text size"
            extra={
              quizBest ? (
                <Badge variant="secondary">
                  Best {quizBest.correct}/{quizBest.total}
                </Badge>
              ) : null
            }
          >
            <QuizPlayer key={quiz.id} quiz={quiz} compact size={quizSize} />
          </LessonSection>
        ) : null}

        <LessonSection
          value="questions"
          icon={<MessagesSquare className="size-6" />}
          title="互动问答"
          en="Interactive questions — answer out loud"
          size={questionSize}
          onSizeChange={setQuestionSize}
          sizeLabel="Question text size"
        >
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
                    size={CONTENT_HANZI_SIZE[questionSize]}
                    inspectable
                    glossary={glosses}
                  />
                </li>
              )
            })}
          </ol>
        </LessonSection>
      </Accordion>

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
            <Link href={`/units/${lesson.unitId}`}>Back to Unit {lesson.unitId}</Link>
          </Button>
        )}
      </nav>
    </div>
  )
}

function LessonSection({
  value,
  id,
  title,
  en,
  icon,
  size,
  onSizeChange,
  sizeLabel,
  extra,
  children,
}: {
  value: string
  id?: string
  title: string
  en: string
  icon: React.ReactNode
  size?: TextSize
  onSizeChange?: (size: TextSize) => void
  sizeLabel?: string
  extra?: React.ReactNode
  children: React.ReactNode
}) {
  const actions =
    extra || (size && onSizeChange) ? (
      <div className="flex flex-wrap items-center justify-end gap-2 px-3 pb-3 sm:px-0 sm:pb-0 sm:pr-4">
        {extra}
        {size && onSizeChange ? (
          <TextSizeToggle value={size} onChange={onSizeChange} label={sizeLabel ?? "Text size"} />
        ) : null}
      </div>
    ) : null

  return (
    <AccordionItem
      value={value}
      id={id}
      className="overflow-hidden rounded-2xl border-2 border-rose-200/90 bg-card shadow-sm not-last:border-b-2 data-open:border-rose-400 data-open:shadow-md dark:border-rose-900/70 dark:data-open:border-rose-600"
    >
      <AccordionTrigger
        actions={actions}
        headerClassName="bg-rose-50/80 dark:bg-rose-950/35 **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-rose-800 dark:**:data-[slot=accordion-trigger-icon]:text-rose-300"
        className="items-center gap-3 rounded-none px-3 py-4 text-left hover:bg-rose-100/70 hover:no-underline focus-visible:rounded-xl sm:gap-4 sm:px-5 sm:py-5 dark:hover:bg-rose-950/50"
      >
        <span className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">
          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-800 text-rose-50 shadow-sm sm:size-12 dark:bg-rose-700">
            {icon}
          </span>
          <span className="min-w-0">
            <h2 className="font-serif text-2xl font-semibold tracking-tight wrap-break-word sm:text-3xl">
              <MixedHanzi text={title} />
            </h2>
            <span className="mt-0.5 block text-sm text-muted-foreground sm:text-base">{en}</span>
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-rose-100 px-3 pt-4 pb-5 text-base sm:px-5 dark:border-rose-900/50">
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}

function ScenarioChip({
  icon,
  label,
  hanzi,
  en,
  size,
}: {
  icon: React.ReactNode
  label: string
  hanzi: string
  en: string
  size: TextSize
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
          size={scaleHanziSize("sm", size)}
          inspectable
        />
      </CardContent>
    </Card>
  )
}
