"use client"

import { useState } from "react"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react"

import { HanziText, SpeakButton } from "@/components/hanzi-text"
import { MiniLessonCard } from "@/components/mini-lesson"
import { useStudyPrefs } from "@/components/study-prefs"
import { Badge } from "@/components/ui/badge"
import type { DialogueLine } from "@/lib/types"
import { cn } from "@/lib/utils"

export function ExpandableDialogue({ lines }: { lines: DialogueLine[] }) {
  const expandableCount = lines.filter((line) => (line.miniLessons?.length ?? 0) > 0).length

  return (
    <div className="space-y-3">
      {expandableCount > 0 ? (
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <BookOpen className="mt-0.5 size-4 shrink-0" />
          Open a sentence, or the Mini lesson control, to see the important words and patterns on
          that line.
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
  const [open, setOpen] = useState(false)

  function toggle() {
    if (!expandable) return
    setOpen((value) => !value)
  }

  return (
    <div
      className={cn(
        "rounded-2xl border p-4",
        line.speaker === "A" && "bg-rose-50/80 dark:bg-rose-950/20",
        line.speaker === "B" && "bg-card",
        line.speaker === "stage" && "border-dashed bg-muted/40 italic",
        expandable && "cursor-pointer",
        open && "ring-1 ring-rose-300 dark:ring-rose-800",
      )}
      onClick={toggle}
      role={expandable ? "group" : undefined}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <Badge variant={line.speaker === "stage" ? "outline" : "secondary"}>
          {line.speaker === "stage" ? "Scene" : line.speaker}
        </Badge>
        <div className="flex items-center gap-2">
          {expandable ? (
            <button
              type="button"
              aria-expanded={open}
              className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs hover:bg-muted"
              onClick={(event) => {
                event.stopPropagation()
                toggle()
              }}
            >
              <BookOpen className="size-3" />
              {open ? "Hide lesson" : "Mini lesson"}
              {!open && miniLessons.length > 1 ? ` · ${miniLessons.length}` : ""}
              {open ? (
                <ChevronUp className="size-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown className="size-3.5 text-muted-foreground" />
              )}
            </button>
          ) : null}
          {line.speaker !== "stage" ? (
            <div
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
            >
              <SpeakButton text={line.hanzi} />
            </div>
          ) : null}
        </div>
      </div>
      <HanziText
        hanzi={line.hanzi}
        english={line.en}
        showPinyin={prefs.pinyin}
        showEnglish={prefs.english}
        ruby={prefs.ruby}
        size="lg"
        className="not-italic"
      />
      {open ? (
        <div
          className="space-y-3 pt-4 not-italic"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {miniLessons.map((lesson) => (
            <MiniLessonCard key={lesson.title} lesson={lesson} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
