"use client"

import { useMemo, useState } from "react"

import { DisplayToggles } from "@/components/display-toggles"
import { Flashcards } from "@/components/flashcards"
import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { useStudyPrefs } from "@/components/study-prefs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allQuestions, allVocabulary } from "@/content/lessons"
import { useProgress, vocabKey } from "@/hooks/use-progress"

const VOCAB = allVocabulary()
const QUESTIONS = allQuestions()

export function StudyStudio() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Practice</p>
          <h1 className="font-serif text-4xl">Study desk</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Search Units 1–5, drill vocabulary with spaced repetition, or skim every question. Mark
            words you know — progress stays in this browser.
          </p>
        </div>
        <DisplayToggles />
      </div>
      <Tabs defaultValue="search">
        <TabsList>
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="cards">Flashcards</TabsTrigger>
          <TabsTrigger value="glossary">Glossary</TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <SearchPanel />
        </TabsContent>
        <TabsContent value="cards">
          <Flashcards />
        </TabsContent>
        <TabsContent value="glossary">
          <Glossary />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SearchPanel() {
  const { prefs } = useStudyPrefs()
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()
  const vocabHits = useMemo(
    () =>
      q
        ? VOCAB.filter(
            (item) =>
              item.hanzi.includes(query.trim()) ||
              item.en.toLowerCase().includes(q) ||
              item.lessonId.includes(q),
          )
        : [],
    [q, query],
  )
  const questionHits = useMemo(
    () =>
      q
        ? QUESTIONS.filter(
            (item) =>
              item.hanzi.includes(query.trim()) ||
              item.en.toLowerCase().includes(q) ||
              item.lessonId.includes(q),
          )
        : [],
    [q, query],
  )

  return (
    <div className="space-y-6 pt-4">
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search hanzi, English, or a lesson id like 1-4"
      />
      {!q ? (
        <p className="text-sm text-muted-foreground">
          Try <MixedHanzi text="失眠" />, marriage, barbecue, or 1-8.
        </p>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            {vocabHits.length} words · {questionHits.length} questions
          </p>
          <div className="grid gap-3">
            {vocabHits.slice(0, 12).map((item) => (
              <Card key={`${item.lessonId}-${item.hanzi}`}>
                <CardContent className="flex items-start justify-between gap-3 pt-5">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.lessonId} <MixedHanzi text={item.lessonTitle} /> · word
                    </p>
                    <HanziText
                      hanzi={item.hanzi}
                      english={item.en}
                      showPinyin={prefs.pinyin}
                      showEnglish={prefs.english}
                      ruby={prefs.ruby}
                      size="md"
                    />
                  </div>
                  <SpeakButton text={item.hanzi} />
                </CardContent>
              </Card>
            ))}
            {questionHits.slice(0, 12).map((item) => (
              <Card key={`${item.lessonId}-${item.n}`}>
                <CardContent className="pt-5">
                  <p className="text-xs text-muted-foreground">
                    {item.lessonId} <MixedHanzi text={item.lessonTitle} /> · Q{item.n}
                  </p>
                  <HanziText
                    hanzi={item.hanzi}
                    english={item.en}
                    showPinyin={prefs.pinyin}
                    showEnglish={prefs.english}
                    ruby={prefs.ruby}
                    size="md"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Glossary() {
  const { prefs } = useStudyPrefs()
  const { progress, toggleVocab } = useProgress()
  const items = VOCAB

  return (
    <div className="grid gap-3 pt-4 sm:grid-cols-2">
      {items.map((item) => {
        const key = vocabKey(item.lessonId, item.hanzi)
        const known = progress.knownVocab.includes(key)
        return (
          <Card key={key} className={known ? "border-rose-400" : undefined}>
            <CardContent className="flex items-start justify-between gap-3 pt-5">
              <div>
                <p className="text-xs text-muted-foreground">
                  {item.lessonId} <MixedHanzi text={item.lessonTitle} />
                </p>
                <HanziText
                  hanzi={item.hanzi}
                  english={item.en}
                  showPinyin={prefs.pinyin}
                  showEnglish={prefs.english}
                  ruby={prefs.ruby}
                  size="md"
                />
              </div>
              <Button size="xs" variant={known ? "secondary" : "ghost"} onClick={() => toggleVocab(key)}>
                {known ? "Known" : "Learn"}
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
