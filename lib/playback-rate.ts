export const PLAYBACK_RATES = [1, 0.7, 0.5] as const

export type PlaybackRate = (typeof PLAYBACK_RATES)[number]

export function parsePlaybackRate(value: unknown): PlaybackRate {
  if (value === 0.5 || value === "0.5") return 0.5
  if (value === 0.7 || value === "0.7") return 0.7
  return 1
}

export function formatPlaybackRate(rate: PlaybackRate) {
  return `${rate}×`
}
