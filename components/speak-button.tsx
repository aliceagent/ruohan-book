"use client"

import { useEffect, useSyncExternalStore } from "react"
import { Loader2, Square, Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useStudyPrefs } from "@/components/study-prefs"
import { speakBrowserChinese } from "@/lib/browser-speech"
import { speakableHanzi } from "@/lib/speakable"

const blobCache = new Map<string, string>()
const listeners = new Set<() => void>()

let playingKey = ""
let currentAudio: HTMLAudioElement | null = null
let generation = 0

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function stopAll() {
  generation += 1
  currentAudio?.pause()
  currentAudio = null
  playingKey = ""
  if (typeof window !== "undefined") window.speechSynthesis?.cancel()
  emit()
}

async function playNeural(text: string, requestId: number, playbackRate: number) {
  let url = blobCache.get(text)
  if (!url) {
    const response = await fetch(`/api/speak?text=${encodeURIComponent(text)}`)
    if (requestId !== generation) return false
    if (!response.ok) return false
    const blob = await response.blob()
    if (!blob.size || blob.type.startsWith("text")) return false
    url = URL.createObjectURL(blob)
    blobCache.set(text, url)
  }

  if (requestId !== generation) return false
  currentAudio?.pause()
  const audio = new Audio(url)
  audio.playbackRate = playbackRate
  currentAudio = audio
  playingKey = text
  emit()
  audio.onended = () => {
    if (currentAudio === audio) {
      currentAudio = null
      playingKey = ""
      emit()
    }
  }
  audio.onerror = () => {
    if (currentAudio === audio) {
      currentAudio = null
      playingKey = ""
      emit()
    }
  }
  await audio.play()
  return true
}

export function SpeakButton({
  text,
  label = "Listen",
}: {
  text: string
  label?: string
}) {
  const { prefs } = useStudyPrefs()
  const cleaned = speakableHanzi(text)
  const snapshot = useSyncExternalStore(
    subscribe,
    () => playingKey,
    () => "",
  )
  const playing = snapshot === cleaned && Boolean(cleaned)
  const loading = snapshot === `loading:${cleaned}`

  useEffect(() => {
    if (currentAudio) currentAudio.playbackRate = prefs.playbackRate
  }, [prefs.playbackRate])

  async function toggle() {
    if (!cleaned) return
    if (playing || loading) {
      stopAll()
      return
    }
    stopAll()
    const requestId = generation
    playingKey = `loading:${cleaned}`
    emit()
    try {
      const ok = await playNeural(cleaned, requestId, prefs.playbackRate)
      if (requestId !== generation) return
      if (!ok) {
        playingKey = ""
        emit()
        await speakBrowserChinese(cleaned, prefs.playbackRate)
      }
    } catch {
      if (requestId !== generation) return
      playingKey = ""
      emit()
      await speakBrowserChinese(cleaned, prefs.playbackRate)
    }
  }

  return (
    <Button
      type="button"
      size="sm"
      variant="ghost"
      className="h-8 gap-1.5 px-2 text-muted-foreground"
      onClick={() => void toggle()}
      aria-label={playing ? "Stop" : label}
      aria-pressed={playing}
    >
      {loading ? (
        <Loader2 className="size-3.5 animate-spin" />
      ) : playing ? (
        <Square className="size-3.5" />
      ) : (
        <Volume2 className="size-3.5" />
      )}
      <span className="sr-only sm:not-sr-only sm:text-xs">{playing ? "Stop" : label}</span>
    </Button>
  )
}
