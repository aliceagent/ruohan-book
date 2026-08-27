"use client"

import { Headphones } from "lucide-react"

import { SpeakButton } from "@/components/hanzi-text"
import { lessonAudioSrc } from "@/lib/audio"
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
  const src = lessonAudioSrc(audioId)

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-rose-300/80 bg-rose-50/70 p-4 dark:border-rose-900 dark:bg-rose-950/30",
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
      <audio controls className="w-full" src={src} preload="metadata">
        Your browser does not support audio.
      </audio>
    </div>
  )
}
