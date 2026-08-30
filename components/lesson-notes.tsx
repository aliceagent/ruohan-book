"use client"

import { createContext, useContext, useRef, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Check, Download, Eraser, NotebookPen, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getLesson } from "@/content/lessons"
import { useLessonNotes } from "@/hooks/use-lesson-notes"
import { formatLessonNoteExport, lessonNoteFilename } from "@/lib/lesson-notes"
import { mixedRuns } from "@/lib/pinyin"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils"

type NotesChrome = {
  lesson: Lesson
  note: string
  setNote: (value: string) => void
  clearNote: () => void
  saveNote: () => void
  hasNote: boolean
  open: boolean
  setOpen: (open: boolean) => void
}

const NotesChromeContext = createContext<NotesChrome | null>(null)

function lessonFromPath(pathname: string) {
  const match = pathname.match(/^\/units\/\d+\/([^/]+)$/)
  return match ? getLesson(match[1]) : undefined
}

const editorType = cn(
  "font-serif text-2xl leading-[2.15] break-words whitespace-pre-wrap",
)

function NoteRuby({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, lineIndex) => (
        <span key={`line-${lineIndex}`}>
          {lineIndex > 0 ? "\n" : null}
          {mixedRuns(line).map((run, index) => {
            if (run.kind !== "zh") {
              return <span key={`text-${lineIndex}-${index}`}>{run.text}</span>
            }
            return (
              <span key={`${run.hanzi}-${lineIndex}-${index}`}>
                {Array.from(run.hanzi).map((char, charIndex) => (
                  <ruby key={`${char}-${charIndex}`} className="ruby-pair">
                    {char}
                    <rt>{run.readings[charIndex]}</rt>
                  </ruby>
                ))}
              </span>
            )
          })}
        </span>
      ))}
    </>
  )
}

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function NoteEditor({
  lessonId,
  value,
  onChange,
}: {
  lessonId: string
  value: string
  onChange: (value: string) => void
}) {
  const areaRef = useRef<HTMLTextAreaElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  function syncScroll() {
    if (!areaRef.current || !layerRef.current) return
    layerRef.current.scrollTop = areaRef.current.scrollTop
    layerRef.current.scrollLeft = areaRef.current.scrollLeft
  }

  return (
    <div className="relative min-h-48 flex-1">
      <div
        ref={layerRef}
        aria-hidden
        data-note-preview
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden rounded-xl px-3 py-3",
          editorType,
        )}
      >
        {value ? (
          <NoteRuby text={value} />
        ) : (
          <span className="text-muted-foreground">写中文或英文…… Write Chinese or English…</span>
        )}
      </div>
      <textarea
        ref={areaRef}
        id={`lesson-note-${lessonId}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onScroll={syncScroll}
        spellCheck
        className={cn(
          "absolute inset-0 z-10 size-full resize-none rounded-xl border border-input bg-transparent px-3 py-3",
          editorType,
          "text-transparent caret-foreground [-webkit-text-fill-color:transparent]",
          "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        )}
      />
    </div>
  )
}

export function useNotesOpen() {
  return useContext(NotesChromeContext)?.open ?? false
}

export function LessonNotesPanel() {
  const chrome = useContext(NotesChromeContext)
  const [exported, setExported] = useState(false)
  if (!chrome) return null

  const { lesson, note, setNote, clearNote, saveNote, hasNote, open, setOpen } = chrome

  function close() {
    saveNote()
    setOpen(false)
  }

  async function exportNote() {
    const text = formatLessonNoteExport({
      lessonId: lesson.id,
      title: lesson.title,
      titleEn: lesson.titleEn,
      body: note,
    })
    const filename = lessonNoteFilename(lesson.id)

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare({ text }))) {
        await navigator.share({ title: `${lesson.title} notes`, text })
        setExported(true)
        window.setTimeout(() => setExported(false), 2000)
        return
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return
    }

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      /* download still happens */
    }
    downloadText(filename, text)
    setExported(true)
    window.setTimeout(() => setExported(false), 2000)
  }

  return (
    <aside
      id="lesson-notes-panel"
      role="complementary"
      aria-label="Lesson notes"
      aria-hidden={!open}
      className={cn(
        "flex min-h-0 min-w-0 shrink-0 flex-col overflow-hidden border-border bg-card transition-[width,height] duration-200 ease-out",
        "max-sm:border-t",
        "sm:border-l",
        open
          ? "h-[min(38dvh,20rem)] sm:h-auto sm:w-[min(20rem,34vw)]"
          : "pointer-events-none h-0 border-0 sm:h-auto sm:w-0",
      )}
    >
      <div className="flex h-full min-h-0 w-full flex-col sm:w-[min(20rem,34vw)]">
      <div className="flex items-start justify-between gap-3 border-b px-3 py-3">
        <div className="min-w-0">
          <p className="font-serif text-xl">课堂笔记</p>
          <p className="text-sm text-muted-foreground">
            {lesson.title} · {lesson.titleEn}
          </p>
        </div>
        <Button type="button" variant="ghost" size="icon" aria-label="Close notes" onClick={close}>
          <X className="size-4" />
        </Button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-3 py-3">
        <label className="sr-only" htmlFor={`lesson-note-${lesson.id}`}>
          Lesson notes
        </label>
        <NoteEditor lessonId={lesson.id} value={note} onChange={setNote} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t px-3 py-3">
        <Button type="button" variant="outline" onClick={clearNote} disabled={!hasNote}>
          <Eraser className="size-4" />
          Clear
        </Button>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" onClick={close}>
            Close
          </Button>
          <Button type="button" onClick={exportNote} disabled={!hasNote}>
            {exported ? <Check className="size-4" /> : <Download className="size-4" />}
            {exported ? "Exported" : "Export"}
          </Button>
        </div>
      </div>
      </div>
    </aside>
  )
}

export function LessonNotesProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const lesson = lessonFromPath(pathname)
  const notes = useLessonNotes(lesson?.id ?? "")
  const [open, setOpen] = useState(false)

  const value = lesson
    ? {
        lesson,
        ...notes,
        open,
        setOpen: (next: boolean) => {
          if (!next) notes.saveNote()
          setOpen(next)
        },
      }
    : null

  return <NotesChromeContext.Provider value={value}>{children}</NotesChromeContext.Provider>
}

export function LessonNotesHeaderButton() {
  const chrome = useContext(NotesChromeContext)
  if (!chrome) return null

  return (
    <Button
      type="button"
      variant={chrome.open || chrome.hasNote ? "secondary" : "outline"}
      size="sm"
      aria-expanded={chrome.open}
      aria-controls="lesson-notes-panel"
      onClick={() => chrome.setOpen(!chrome.open)}
    >
      <NotebookPen className="size-4" />
      Notes
    </Button>
  )
}
