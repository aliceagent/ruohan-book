export function lessonAudioFileName(audioId: string) {
  const [unit, lesson] = audioId.split("-")
  return `${unit.padStart(2, "0")}-${lesson.padStart(2, "0")}.mp3`
}

export function lessonAudioSrc(audioId: string) {
  const unit = audioId.split("-")[0]
  return `/audio/unit-${unit}/${lessonAudioFileName(audioId)}`
}

/** Optional hour-long teaching track, next to the short official dialogue. */
export function lessonFullAudioFileName(audioId: string) {
  const [unit, lesson] = audioId.split("-")
  return `${unit.padStart(2, "0")}-${lesson.padStart(2, "0")}-full.mp3`
}

export function lessonFullAudioSrc(audioId: string) {
  const unit = audioId.split("-")[0]
  return `/audio/unit-${unit}/${lessonFullAudioFileName(audioId)}`
}
