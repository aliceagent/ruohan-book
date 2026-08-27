import type { Metadata } from "next"
import Link from "next/link"

import { LessonAudio, PlaybackSpeedControl } from "@/components/playback-speed"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOK } from "@/content/catalog"
import { UNIT_1 } from "@/content/unit-1"
import { lessonAudioFileName, lessonAudioSrc } from "@/lib/audio"

export const metadata: Metadata = {
  title: "Audio",
}

export default function AudioPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Listening</p>
        <h1 className="font-serif text-4xl">Unit 1 audio</h1>
        <p className="max-w-2xl text-muted-foreground">
          The ten official dialogue tracks for Unit 1 are on every lesson page and here as a
          playlist. Narrators: <MixedHanzi text={BOOK.narrators.join(" and ")} />. Slow a track to
          0.7× or 0.5× when you want to catch every syllable.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Play Unit 1</CardTitle>
          <CardDescription>
            Files are stored as 01-01.mp3 … 01-10.mp3, matching the headphone numbers in the book.
          </CardDescription>
          <PlaybackSpeedControl className="pt-1" />
        </CardHeader>
        <CardContent className="grid gap-4">
          {UNIT_1.map((lesson) => (
            <div key={lesson.id} className="rounded-xl border p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <Link href={`/units/1/${lesson.id}`} className="hover:underline">
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
            </div>
          ))}
        </CardContent>
      </Card>

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
