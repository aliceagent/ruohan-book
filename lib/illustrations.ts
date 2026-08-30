export function lessonIllustrationSrc(lessonId: string) {
  const unit = lessonId.split("-")[0]
  return `/illustrations/unit-${unit}/${lessonId}.jpg`
}
