"use client"

import { useEffect, useState } from "react"
import { Headphones } from "lucide-react"

import { SpeakButton } from "@/components/hanzi-text"
import { cn } from "@/lib/utils"

export function AudioBar({
  audioId,
  speakText,
  className,
}: {
  audioId: string
  speakText: string
  className?: string
}) {
  const src = `/audio/unit-1/${audioId}.mp3`
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) setAvailable(response.ok)
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-dashed border-rose-300/80 bg-rose-50/70 p-4 dark:border-rose-900 dark:bg-rose-950/30",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Headphones className="size-4 text-rose-700" />
          Lesson audio {audioId}
        </div>
        <SpeakButton text={speakText} label="Browser voice" />
      </div>
      {available ? (
        <audio controls className="w-full" src={src} preload="metadata">
          Your browser does not support audio.
        </audio>
      ) : (
        <p className="text-sm text-muted-foreground">
          Official MP3s are not bundled. Drop a file at{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">{src}</code> or use the
          browser voice. See the{" "}
          <a className="underline underline-offset-2" href="/audio">
            audio page
          </a>
          .
        </p>
      )}
    </div>
  )
}
