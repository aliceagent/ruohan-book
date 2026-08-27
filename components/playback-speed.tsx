"use client"

import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { useStudyPrefs } from "@/components/study-prefs"
import { formatPlaybackRate, PLAYBACK_RATES, type PlaybackRate } from "@/lib/playback-rate"
import { cn } from "@/lib/utils"

export function PlaybackSpeedControl({ className }: { className?: string }) {
  const { prefs, setPrefs } = useStudyPrefs()

  return (
    <div
      role="group"
      aria-label="Playback speed"
      className={cn("flex items-center gap-1", className)}
    >
      <span className="mr-1 text-xs text-muted-foreground">Speed</span>
      {PLAYBACK_RATES.map((rate) => (
        <SpeedButton
          key={rate}
          rate={rate}
          selected={prefs.playbackRate === rate}
          onSelect={() => setPrefs({ playbackRate: rate })}
        />
      ))}
    </div>
  )
}

function SpeedButton({
  rate,
  selected,
  onSelect,
}: {
  rate: PlaybackRate
  selected: boolean
  onSelect: () => void
}) {
  return (
    <Button
      type="button"
      size="xs"
      variant={selected ? "secondary" : "ghost"}
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(selected && "border border-rose-300 bg-white dark:border-rose-800")}
    >
      {formatPlaybackRate(rate)}
    </Button>
  )
}

export function LessonAudio({
  src,
  preload = "metadata",
}: {
  src: string
  preload?: "none" | "metadata" | "auto"
}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { prefs } = useStudyPrefs()

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.playbackRate = prefs.playbackRate
  }, [prefs.playbackRate])

  function applyRate(audio: HTMLAudioElement) {
    audio.playbackRate = prefs.playbackRate
  }

  return (
    <audio
      ref={audioRef}
      controls
      className="w-full"
      src={src}
      preload={preload}
      onLoadedMetadata={(event) => applyRate(event.currentTarget)}
      onPlay={(event) => applyRate(event.currentTarget)}
    >
      Your browser does not support audio.
    </audio>
  )
}
