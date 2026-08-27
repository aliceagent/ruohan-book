"use client"

import { BookOpen } from "lucide-react"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MiniLessonCard } from "@/components/mini-lesson"
import { useStudyPrefs } from "@/components/study-prefs"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { DialogueLine } from "@/lib/types"
import { cn } from "@/lib/utils"

export function ExpandableDialogue({ lines }: { lines: DialogueLine[] }) {
  const expandableCount = lines.filter((line) => (line.miniLessons?.length ?? 0) > 0).length

  return (
    <div className="space-y-3">
      {expandableCount > 0 ? (
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <BookOpen className="mt-0.5 size-4 shrink-0" />
          Open a line with a mini-lesson badge to see the important words and patterns on that
          sentence.
        </p>
      ) : null}
      {lines.map((line, index) => (
        <DialogueLineCard key={`${line.speaker}-${index}`} line={line} />
      ))}
    </div>
  )
}

function DialogueLineCard({ line }: { line: DialogueLine }) {
  const { prefs } = useStudyPrefs()
  const miniLessons = line.miniLessons ?? []
  const expandable = miniLessons.length > 0

  return (
    <div
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
        <div className="flex items-center gap-2">
          {expandable ? (
            <Badge variant="outline" className="gap-1 font-normal">
              <BookOpen className="size-3" />
              Mini lesson
              {miniLessons.length > 1 ? ` · ${miniLessons.length}` : ""}
            </Badge>
          ) : null}
          {line.speaker !== "stage" ? (
            <div
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => event.stopPropagation()}
            >
              <SpeakButton text={line.hanzi} />
            </div>
          ) : null}
        </div>
      </div>
      {expandable ? (
        <Accordion type="single" collapsible>
          <AccordionItem value="lesson" className="border-0">
            <AccordionTrigger className="items-start py-1 hover:no-underline">
              <HanziText
                hanzi={line.hanzi}
                english={line.en}
                showPinyin={prefs.pinyin}
                showEnglish={prefs.english}
                ruby={prefs.ruby}
                size="lg"
                className="flex-1 pr-2 text-left not-italic"
              />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="space-y-3 pt-3">
                {miniLessons.map((lesson) => (
                  <MiniLessonCard key={lesson.title} lesson={lesson} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <HanziText
          hanzi={line.hanzi}
          english={line.en}
          showPinyin={prefs.pinyin}
          showEnglish={prefs.english}
          ruby={prefs.ruby}
          size="lg"
        />
      )}
    </div>
  )
}
