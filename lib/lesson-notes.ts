export function formatLessonNoteExport({
  lessonId,
  title,
  titleEn,
  body,
}: {
  lessonId: string
  title: string
  titleEn: string
  body: string
}) {
  const note = body.replace(/\s+$/g, "")
  return [`${title}`, titleEn, `Lesson ${lessonId}`, "", note].join("\n")
}

export function lessonNoteFilename(lessonId: string) {
  return `lesson-${lessonId}-notes.txt`
}
