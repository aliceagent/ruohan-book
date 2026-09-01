import type { Metadata } from "next"
import Link from "next/link"

import { LessonAudio, PlaybackSpeedControl } from "@/components/playback-speed"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOK, getUnit } from "@/content/catalog"
import { lessonsForUnit } from "@/content/lessons"
import { lessonAudioFileName, lessonAudioSrc, lessonFullAudioSrc, lessonHasFullAudio } from "@/lib/audio"
import { builtUnitIds } from "@/lib/quiz"

export const metadata: Metadata = {
  title: "Audio",
}

export default function AudioPage() {
  const unitIds = builtUnitIds()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Listening</p>
        <h1 className="font-serif text-4xl">Lesson audio</h1>
        <p className="max-w-2xl text-muted-foreground">
          Official dialogue tracks sit on every live lesson and here as a playlist. Narrators:{" "}
          <MixedHanzi text={BOOK.narrators.join(" and ")} />. Slow a track to 0.7× or 0.5× when you
          want to catch every syllable.
        </p>
      </div>

      {unitIds.map((unitId) => {
        const unit = getUnit(unitId)
        const lessons = lessonsForUnit(unitId)
        return (
          <Card key={unitId}>
            <CardHeader>
              <CardTitle>
                Play Unit {unitId}
                {unit ? (
                  <>
                    {" "}
                    <MixedHanzi text={unit.title} />
                  </>
                ) : null}
              </CardTitle>
              <CardDescription>
                Files are stored as {String(unitId).padStart(2, "0")}-01.mp3 … matching the
                headphone numbers in the book.
              </CardDescription>
              <PlaybackSpeedControl className="pt-1" />
            </CardHeader>
            <CardContent className="grid gap-4">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="rounded-xl border p-4">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <Link href={`/units/${lesson.unitId}/${lesson.id}`} className="hover:underline">
                      <Badge variant="outline" className="mr-2">
                        {lesson.audioId}
                      </Badge>
                      <MixedHanzi text={lesson.title} />
                      <span className="ml-2 text-muted-foreground">· {lesson.titleEn}</span>
                    </Link>
                    <code className="text-xs text-muted-foreground">
                      {lessonAudioFileName(lesson.audioId)}
                    </code>
                  </div>
                  <LessonAudio src={lessonAudioSrc(lesson.audioId)} preload="none" />
                  {lessonHasFullAudio(lesson.audioId) ? (
                    <div className="mt-3 space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        Full lesson · about 60 minutes
                      </p>
                      <LessonAudio src={lessonFullAudioSrc(lesson.audioId)} preload="none" />
                    </div>
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        )
      })}

      <Card>
        <CardHeader>
          <CardTitle>Later units</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>
            Drop additional purchased tracks in <code>public/audio/unit-N/</code> as{" "}
            <code>0N-01.mp3</code>. This companion keeps publisher audio in the repo only when you
            supply the files you own.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
