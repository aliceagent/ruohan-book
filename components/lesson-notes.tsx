"use client"

import { useEffect, useState } from "react"
import { Check, Download, NotebookPen, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useLessonNotes } from "@/hooks/use-lesson-notes"
import { formatLessonNoteExport, lessonNoteFilename } from "@/lib/lesson-notes"
import { mixedRuns } from "@/lib/pinyin"
import { cn } from "@/lib/utils"

function useWideScreen() {
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)")
    const update = () => setWide(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return wide
}

function NotePinyinPreview({ text }: { text: string }) {
  if (!text.trim()) {
    return <p className="text-muted-foreground">Pinyin appears here as you write Chinese.</p>
  }

  const lines = text.split("\n")
  return (
    <div className="font-serif text-2xl leading-[2.15] whitespace-pre-wrap">
      {lines.map((line, lineIndex) => (
        <p key={`line-${lineIndex}`} className={line ? undefined : "min-h-[1em]"}>
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
        </p>
      ))}
    </div>
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

export function LessonNotes({
  lessonId,
  title,
  titleEn,
}: {
  lessonId: string
  title: string
  titleEn: string
}) {
  const { note, setNote, hasNote } = useLessonNotes(lessonId)
  const [open, setOpen] = useState(false)
  const [exported, setExported] = useState(false)
  const wide = useWideScreen()

  async function exportNote() {
    const text = formatLessonNoteExport({ lessonId, title, titleEn, body: note })
    const filename = lessonNoteFilename(lessonId)

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare({ text }))) {
        await navigator.share({ title: `${title} notes`, text })
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
    <>
      <Button
        type="button"
        variant={hasNote ? "secondary" : "outline"}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <NotebookPen className="size-4" />
        Notes
      </Button>

      <button
        type="button"
        className={cn(
          "fixed right-4 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full border bg-card shadow-lg",
          "text-rose-800 hover:bg-rose-50 dark:text-rose-200 dark:hover:bg-rose-950/60",
          open && "hidden",
        )}
        aria-label="Open lesson notes"
        onClick={() => setOpen(true)}
      >
        <NotebookPen className="size-5" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={wide ? "right" : "bottom"}
          showCloseButton={false}
          className={cn(
            "gap-0 overflow-hidden bg-card p-0",
            wide
              ? "w-full sm:max-w-xl"
              : "h-[min(88dvh,44rem)] max-h-[88dvh] rounded-t-2xl border-x",
          )}
        >
          <SheetHeader className="border-b px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <SheetTitle className="font-serif text-xl">课堂笔记</SheetTitle>
                <SheetDescription>
                  {title} · {titleEn}. Write in Chinese or English. Pinyin is added for you.
                </SheetDescription>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Dismiss notes"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </SheetHeader>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-auto px-4 py-3">
            <label className="sr-only" htmlFor={`lesson-note-${lessonId}`}>
              Lesson notes
            </label>
            <textarea
              id={`lesson-note-${lessonId}`}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="写中文或英文…… Write Chinese or English…"
              spellCheck
              className={cn(
                "min-h-40 w-full flex-1 resize-y rounded-xl border border-input bg-background px-3 py-3",
                "font-serif text-2xl leading-relaxed",
                "outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              )}
            />
            <div
              data-note-preview
              className="rounded-xl border border-dashed bg-muted/40 px-3 py-3"
            >
              <p className="mb-2 text-xs tracking-wide text-muted-foreground uppercase">
                With pinyin
              </p>
              <NotePinyinPreview text={note} />
            </div>
          </div>

          <SheetFooter className="flex-row flex-wrap items-center justify-between gap-2 border-t">
            <p className="text-xs text-muted-foreground">Saved on this device for this lesson.</p>
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Dismiss
              </Button>
              <Button type="button" onClick={exportNote} disabled={!hasNote}>
                {exported ? <Check className="size-4" /> : <Download className="size-4" />}
                {exported ? "Exported" : "Export"}
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
