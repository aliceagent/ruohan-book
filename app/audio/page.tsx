import type { Metadata } from "next"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOK } from "@/content/catalog"
import { UNIT_1 } from "@/content/unit-1"

export const metadata: Metadata = {
  title: "Audio",
}

export default function AudioPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Listening</p>
        <h1 className="font-serif text-4xl">Where the MP3s are</h1>
        <p className="max-w-2xl text-muted-foreground">
          Yes, this book has official conversation recordings. No, they are not sitting in a public
          folder we can legally ship with the site. Here is exactly what we found and how this
          website will play them once you have them.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What exists</CardTitle>
          <CardDescription>
            In the author&apos;s preface, {BOOK.author} thanks the narrators {BOOK.narrators.join(" and ")}{" "}
            for “the most realistic Chinese conversation teaching recordings.” Each lesson page in
            Unit 1 has a headphone icon labeled with the track id: 1-1 through 1-10.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Publisher: {BOOK.publisher}. Print ISBN (simplified edition): {BOOK.isbnSimplified}. The
            tracks are a companion to the paper book / ebook, not a free podcast.
          </p>
          <p>
            We searched publisher pages on sharing.com.tw, books.com.tw, and related listings. There
            is no public MP3 zip. Access is expected to be via QR codes in the physical book, the
            Sharing ebook shelf after purchase, or a publisher resource page that is not indexed.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How to get the files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-relaxed">
            <ol className="list-decimal space-y-2 pl-4">
              <li>Scan the QR codes printed with the dialogues in your copy of the book.</li>
              <li>
                If you bought the ebook, open it from the Sharing bookstore bookshelf and look for
                the audio player / QR there.
              </li>
              <li>
                Ask 新学林: editorial Tracy Wang (
                <a className="underline" href="mailto:tracywang@sharing.com.tw">
                  tracywang@sharing.com.tw
                </a>
                ) or bookstore support (
                <a className="underline" href="mailto:law@sharing.com.tw">
                  law@sharing.com.tw
                </a>
                , +886-2-2700-1808).
              </li>
            </ol>
            <p className="text-muted-foreground">
              Do not pirate a dump. This site will never host redistributed publisher audio.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How this site uses them</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-relaxed">
            <p>
              Put purchased files in <code>public/audio/unit-1/</code> using the book&apos;s track
              numbers:
            </p>
            <ul className="grid grid-cols-2 gap-1 font-mono text-xs">
              {UNIT_1.map((lesson) => (
                <li key={lesson.id}>
                  {lesson.audioId}.mp3 → {lesson.title}
                </li>
              ))}
            </ul>
            <p>
              Each lesson already looks for that path. If the file is missing, the player stays
              hidden and the browser&apos;s Chinese voice reads the line instead.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Track map for Unit 1</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2">
          {UNIT_1.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/units/1/${lesson.id}`}
              className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm hover:border-rose-400"
            >
              <span>
                <Badge variant="outline" className="mr-2">
                  {lesson.audioId}
                </Badge>
                {lesson.title}
              </span>
              <span className="text-muted-foreground">{lesson.titleEn}</span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
