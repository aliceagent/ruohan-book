export function lessonAudioFileName(audioId: string) {
  const [unit, lesson] = audioId.split("-")
  return `${unit.padStart(2, "0")}-${lesson.padStart(2, "0")}.mp3`
}

export function lessonAudioSrc(audioId: string) {
  const unit = audioId.split("-")[0]
  return `/audio/unit-${unit}/${lessonAudioFileName(audioId)}`
}
