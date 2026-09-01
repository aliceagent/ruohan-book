import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LessonView } from "@/components/lesson-view"
import { ALL_LESSONS, getLesson } from "@/content/lessons"
import { lessonHasFullAudio } from "@/lib/audio-server"

export function generateStaticParams() {
  return ALL_LESSONS.map((lesson) => ({
    unitId: String(lesson.unitId),
    lessonId: lesson.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ unitId: string; lessonId: string }>
}): Promise<Metadata> {
  const { lessonId } = await params
  const lesson = getLesson(lessonId)
  if (!lesson) return { title: "Lesson" }
  return { title: `${lesson.id} ${lesson.title}` }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ unitId: string; lessonId: string }>
}) {
  const { lessonId } = await params
  const lesson = getLesson(lessonId)
  if (!lesson) notFound()
  return <LessonView lesson={lesson} hasFullAudio={lessonHasFullAudio(lesson.audioId)} />
}
