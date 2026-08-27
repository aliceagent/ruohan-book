export type QuestionKind = "question" | "roleplay" | "debate" | "reading"

export type MiniLessonExample = {
  hanzi: string
  en: string
}

export type MiniLessonCompare = {
  label: string
  hanzi: string
  en: string
}

export type MiniLesson = {
  title: string
  titleEn: string
  pattern?: string
  body: string[]
  examples?: MiniLessonExample[]
  compare?: MiniLessonCompare[]
}

export type DialogueLine = {
  speaker: "A" | "B" | "stage"
  hanzi: string
  en: string
  miniLessons?: MiniLesson[]
}

export type VocabItem = {
  hanzi: string
  en: string
}

export type FillBlankItem = {
  id: string
  promptEn: string
  prefix: string
  suffix: string
  answer: string
  accepted?: string[]
}

export type Question = {
  n: number
  hanzi: string
  en: string
  kind?: QuestionKind
}

export type Scenario = {
  time: string
  timeEn: string
  location: string
  locationEn: string
  participants: string
  participantsEn: string
  topic: string
  topicEn: string
}

export type Lesson = {
  id: string
  unitId: number
  title: string
  titleEn: string
  pageStart: number
  audioId: string
  scenario: Scenario
  dialogue: DialogueLine[]
  notes?: { hanzi: string; en: string }[]
  coreVocabulary?: VocabItem[]
  vocabulary: VocabItem[]
  chunks?: VocabItem[]
  expressionFamily?: {
    title: string
    titleEn: string
    items: VocabItem[]
  }
  grammarFocus?: MiniLesson[]
  practiceSentences?: MiniLessonExample[]
  fillBlanks?: FillBlankItem[]
  questions: Question[]
}

export type UnitSummary = {
  id: number
  title: string
  titleEn: string
  status: "ready" | "planned"
  lessonCount: number
  topics: { id: string; title: string; titleEn: string }[]
}
