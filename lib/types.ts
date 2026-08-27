export type QuestionKind = "question" | "roleplay" | "debate" | "reading"

export type DialogueLine = {
  speaker: "A" | "B" | "stage"
  hanzi: string
  en: string
}

export type VocabItem = {
  hanzi: string
  en: string
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
  vocabulary: VocabItem[]
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
