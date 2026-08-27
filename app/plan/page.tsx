import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plan",
}

export default function PlanPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl space-y-8">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-rose-800 uppercase dark:text-rose-300">Roadmap</p>
        <h1 className="font-serif text-4xl font-semibold">Website plan</h1>
        <p className="text-lg text-muted-foreground">
          A conversation gym for 《聊天聊不完》, not a PDF viewer. Unit 1 is the template every later
          unit will copy.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">What this is</h2>
        <p className="leading-relaxed text-muted-foreground">
          The book is 120 situations and about 3,600 prompts. Each situation already has a scene
          (time, place, people, topic), a model dialogue, stretch vocabulary, and a long Q&A list.
          The website adds what the print page cannot: pinyin over every character, English, a
          listen button, flashcards, search, and the official lesson recordings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Now (this launch)</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>All 22 units catalogued so the map of the book is visible.</li>
          <li>Unit 1 家庭生活: 10 lessons, dialogues, notes, vocabulary, and every 互动问答 item.</li>
          <li>Toggles for ruby pinyin, inline pinyin, and English.</li>
          <li>Official Unit 1 MP3s (01-01 … 01-10) on every lesson and the audio playlist.</li>
          <li>Study desk: search, flashcards, glossary, local progress.</li>
          <li>Browser speech as a line-by-line fallback.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Next units</h2>
        <p className="leading-relaxed text-muted-foreground">
          Same data shape, one unit at a time: 学校生活, 职场, 自我认识, then the rest of the 22.
          Each new PDF gets transcribed into typed lesson files (hanzi + English). Pinyin stays
          generated so we do not maintain two spellings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Learning features to add</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Shadowing mode: play a dialogue line, pause, record yourself, compare.</li>
          <li>Question packs by difficulty / HSK-ish banding, not just book order.</li>
          <li>Suggested answers and model replies — optional, hidden by default so you speak first.</li>
          <li>Traditional-character toggle (the book already notes some variants in brackets).</li>
          <li>SRS spaced repetition that uses the same vocabulary graph.</li>
          <li>Pair-practice view: A/B roles on two phones.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Audio plan</h2>
        <p className="leading-relaxed text-muted-foreground">
          Official Unit 1 files are in the repo as <code>01-01.mp3</code>…<code>01-10.mp3</code> and
          play on each lesson. Later units follow the same naming. Browser speech remains as a
          line-by-line fallback. Details live on the <Link href="/audio">audio page</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Stack</h2>
        <p className="leading-relaxed text-muted-foreground">
          Next.js App Router on Vercel, typed lesson content in the repo, shadcn/ui, pinyin-pro,
          no database yet. Progress is local. If we later want sync across devices, add a small
          store then — not before the remaining units exist.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Credit</h2>
        <p className="leading-relaxed text-muted-foreground">
          Source text is from 解丽琪 / Shelley Hsieh, 新学林, 2023. This site is a learner
          companion with added pinyin and English, not a replacement for the book.
        </p>
      </section>
    </article>
  )
}
