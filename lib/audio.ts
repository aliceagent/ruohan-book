export function lessonAudioFileName(audioId: string) {
  const [unit, lesson] = audioId.split("-")
  return `${unit.padStart(2, "0")}-${lesson.padStart(2, "0")}.mp3`
}

export function lessonAudioSrc(audioId: string) {
  return `/audio/unit-1/${lessonAudioFileName(audioId)}`
}
