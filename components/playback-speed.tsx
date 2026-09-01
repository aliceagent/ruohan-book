"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useStudyPrefs } from "@/components/study-prefs"
import { formatPlaybackRate, PLAYBACK_RATES, type PlaybackRate } from "@/lib/playback-rate"
import { cn } from "@/lib/utils"

let activeLessonAudio: HTMLAudioElement | null = null

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

function formatClock(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const whole = Math.floor(seconds)
  const hours = Math.floor(whole / 3600)
  const minutes = Math.floor((whole % 3600) / 60)
  const rest = whole % 60
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`
  }
  return `${minutes}:${String(rest).padStart(2, "0")}`
}

export function LessonAudio({
  src,
  preload = "metadata",
}: {
  src: string
  preload?: "none" | "metadata" | "auto"
}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const dragging = useRef(false)
  const { prefs } = useStudyPrefs()
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.playbackRate = prefs.playbackRate
  }, [prefs.playbackRate])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const syncDuration = () => {
      const next = audio.duration
      if (Number.isFinite(next) && next > 0) setDuration(next)
    }
    const syncTime = () => {
      syncDuration()
      if (!dragging.current) setCurrent(audio.currentTime)
    }
    const onPlay = () => {
      if (activeLessonAudio && activeLessonAudio !== audio) activeLessonAudio.pause()
      activeLessonAudio = audio
      audio.playbackRate = prefs.playbackRate
      setPlaying(true)
      syncDuration()
    }
    const onPause = () => {
      if (activeLessonAudio === audio) activeLessonAudio = null
      setPlaying(false)
    }

    audio.addEventListener("timeupdate", syncTime)
    audio.addEventListener("durationchange", syncDuration)
    audio.addEventListener("loadedmetadata", syncDuration)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", onPause)
    syncDuration()
    syncTime()

    return () => {
      audio.removeEventListener("timeupdate", syncTime)
      audio.removeEventListener("durationchange", syncDuration)
      audio.removeEventListener("loadedmetadata", syncDuration)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("ended", onPause)
      if (activeLessonAudio === audio) activeLessonAudio = null
    }
  }, [src, prefs.playbackRate])

  const max = duration > 0 ? duration : 0
  const percent = max > 0 ? Math.min(100, Math.max(0, (current / max) * 100)) : 0

  function seek(value: number) {
    const audio = audioRef.current
    const next = Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0
    setCurrent(next)
    if (audio) audio.currentTime = next
  }

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.playbackRate = prefs.playbackRate
      await audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <div className="relative flex w-full items-center gap-2 rounded-full bg-background/80 px-2 py-1 ring-1 ring-rose-200/90 dark:ring-rose-900">
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={() => void togglePlayback()}
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
      >
        {playing ? (
          <Pause className="size-3.5 fill-current" />
        ) : (
          <Play className="size-3.5 fill-current" />
        )}
      </button>
      <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
        {formatClock(current)} / {formatClock(duration)}
      </p>
      <input
        type="range"
        className="audio-seek min-w-0 flex-1"
        min={0}
        max={max > 0 ? max : 1}
        step="any"
        value={max > 0 ? Math.min(current, max) : 0}
        disabled={max <= 0}
        aria-label="Audio position"
        aria-valuetext={`${formatClock(current)} of ${formatClock(duration)}`}
        style={{ ["--seek" as string]: `${percent}%` }}
        onPointerDown={(event) => {
          dragging.current = true
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerUp={() => {
          dragging.current = false
        }}
        onPointerCancel={() => {
          dragging.current = false
        }}
        onInput={(event) => seek(Number(event.currentTarget.value))}
      />
      <audio
        ref={audioRef}
        src={src}
        preload={preload}
        className="pointer-events-none absolute size-px overflow-hidden opacity-0"
        onLoadedMetadata={(event) => {
          const next = event.currentTarget.duration
          if (Number.isFinite(next) && next > 0) setDuration(next)
        }}
      >
        Your browser does not support audio.
      </audio>
    </div>
  )
}
