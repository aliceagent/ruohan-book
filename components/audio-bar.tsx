"use client"

import { Clock3, Headphones } from "lucide-react"

import { SpeakButton } from "@/components/hanzi-text"
import { LessonAudio, PlaybackSpeedControl } from "@/components/playback-speed"
import { lessonAudioSrc, lessonFullAudioSrc } from "@/lib/audio"
import { cn } from "@/lib/utils"

export function AudioBar({
  audioId,
  speakText,
  className,
  hasFullAudio = false,
}: {
  audioId: string
  speakText: string
  className?: string
  hasFullAudio?: boolean
}) {
  const src = lessonAudioSrc(audioId)
  const fullSrc = lessonFullAudioSrc(audioId)

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-rose-300/80 bg-rose-50/70 p-4 dark:border-rose-900 dark:bg-rose-950/30",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Headphones className="size-4 text-rose-700" />
          Lesson audio {audioId}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <PlaybackSpeedControl />
          <SpeakButton text={speakText} label="Read aloud" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Official dialogue</p>
        <LessonAudio src={src} preload="metadata" />
      </div>
      {hasFullAudio ? (
        <div className="space-y-1 border-t border-rose-200/80 pt-3 dark:border-rose-900/60">
          <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Clock3 className="size-3.5" />
            Full lesson · about 60 minutes
          </p>
          <LessonAudio src={fullSrc} preload="none" />
        </div>
      ) : null}
    </div>
  )
}
