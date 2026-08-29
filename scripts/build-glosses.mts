/**
 * Build lib/generated-glosses.ts from CC-CEDICT for every character and
 * every 2–4-character word that appears in Unit 1.
 *
 *   curl -fsSL https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz \
 *     | gunzip > /tmp/cedict.txt
 *   npx tsx scripts/build-glosses.mts /tmp/cedict.txt
 */
import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

import { UNIT_1 } from "../content/unit-1"
import type { Lesson, MiniLesson } from "../lib/types"

const HANZI_RE = /\p{Script=Han}/u
const LINE_RE = /^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+\/(.+)\/\s*$/

function miniHanzi(mini: MiniLesson) {
  return [
    mini.title,
    mini.pattern ?? "",
    ...mini.body,
    ...(mini.examples ?? []).map((item) => item.hanzi),
    ...(mini.compare ?? []).map((item) => item.hanzi),
  ]
}

function lessonHanzi(lesson: Lesson) {
  const out = [
    lesson.title,
    lesson.scenario.time,
    lesson.scenario.location,
    lesson.scenario.participants,
    lesson.scenario.topic,
  ]
  for (const line of lesson.dialogue) {
    out.push(line.hanzi)
    for (const mini of line.miniLessons ?? []) out.push(...miniHanzi(mini))
  }
  for (const mini of lesson.grammarFocus ?? []) out.push(...miniHanzi(mini))
  for (const item of lesson.coreVocabulary ?? []) out.push(item.hanzi)
  for (const item of lesson.vocabulary) out.push(item.hanzi)
  for (const item of lesson.chunks ?? []) out.push(item.hanzi)
  for (const item of lesson.expressionFamily?.items ?? []) out.push(item.hanzi)
  for (const item of lesson.practiceSentences ?? []) out.push(item.hanzi)
  for (const item of lesson.questions) out.push(item.hanzi)
  for (const blank of lesson.fillBlanks ?? []) {
    out.push(blank.prefix, blank.suffix, blank.answer, ...blank.choices)
  }
  for (const note of lesson.notes ?? []) out.push(note.hanzi)
  return out
}

function hanziRuns(text: string) {
  const chars = Array.from(text)
  const runs: string[] = []
  let current: string[] = []
  for (const char of chars) {
    if (HANZI_RE.test(char)) {
      current.push(char)
    } else if (current.length) {
      runs.push(current.join(""))
      current = []
    }
  }
  if (current.length) runs.push(current.join(""))
  return runs
}

function isWeakGloss(gloss: string) {
  return /^(surname |variant of |old variant of |see also )/i.test(gloss)
}

function tidyGloss(raw: string) {
  const defs = raw
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => !item.startsWith("CL:"))
    .filter((item) => !isWeakGloss(item))
    .map((item) =>
      item
        .replace(/\s*\(CL:[^)]*\)/g, "")
        .replace(/\s*\(.*?radical.*?\)/gi, "")
        .trim(),
    )
    .filter((item) => item && item.length < 60)

  const picked = (defs.length ? defs : raw.split("/").filter(Boolean)).slice(0, 2)
  let gloss = picked.join("; ").replace(/\s+/g, " ").trim()
  if (gloss.length > 88) {
    const cut = gloss.slice(0, 88)
    const semi = cut.lastIndexOf(";")
    gloss = (semi > 36 ? cut.slice(0, semi) : cut).trim()
  }
  return gloss
}

const cedictPath = process.argv[2]
if (!cedictPath) {
  console.error("Usage: npx tsx scripts/build-glosses.mts /path/to/cedict.txt")
  process.exit(1)
}

const { readFileSync } = await import("node:fs")
const source = readFileSync(cedictPath, "utf8")
const dictionary = new Map<string, string>()

for (const line of source.split("\n")) {
  if (!line || line.startsWith("#")) continue
  const match = LINE_RE.exec(line)
  if (!match) continue
  const simplified = match[2]
  const gloss = tidyGloss(match[4])
  if (!gloss) continue
  if (!Array.from(simplified).every((char) => HANZI_RE.test(char))) continue
  const len = Array.from(simplified).length
  if (len < 1 || len > 4) continue
  const current = dictionary.get(simplified)
  if (!current || (isWeakGloss(current) && !isWeakGloss(gloss))) {
    dictionary.set(simplified, gloss)
  }
}

const texts = UNIT_1.flatMap(lessonHanzi)
const characters = new Set<string>()
const wanted = new Set<string>()

for (const text of texts) {
  for (const run of hanziRuns(text)) {
    const chars = Array.from(run)
    for (const char of chars) {
      characters.add(char)
      wanted.add(char)
    }
    for (let start = 0; start < chars.length; start += 1) {
      for (let len = 2; len <= 4 && start + len <= chars.length; len += 1) {
        const word = chars.slice(start, start + len).join("")
        if (dictionary.has(word)) wanted.add(word)
      }
    }
  }
}

const items = [...wanted]
  .filter((hanzi) => dictionary.has(hanzi))
  .sort((a, b) => {
    const len = Array.from(a).length - Array.from(b).length
    return len !== 0 ? len : a.localeCompare(b, "zh-Hans")
  })
  .map((hanzi) => ({ hanzi, en: dictionary.get(hanzi)! }))

const missingChars = [...characters].filter((char) => !dictionary.has(char)).sort()

const rows = items
  .map((item) => `  { hanzi: ${JSON.stringify(item.hanzi)}, en: ${JSON.stringify(item.en)} },`)
  .join("\n")

const file = `import type { VocabItem } from "@/lib/types"

/**
 * Learner glosses for every character and every 2–4-character word that
 * appears in Unit 1. Generated from CC-CEDICT
 * (https://www.mdbg.net/chinese/dictionary?page=cc-cedict),
 * licensed CC BY-SA 4.0.
 *
 * Curated lists in lib/gloss.ts win when the same headword appears there.
 * Regenerate with: npx tsx scripts/build-glosses.mts /tmp/cedict.txt
 */
export const GENERATED_GLOSSES: VocabItem[] = [
${rows}
]
`

writeFileSync(resolve("lib/generated-glosses.ts"), file)
console.log(`wrote ${items.length} glosses (${characters.size} unique characters, ${missingChars.length} missing from CEDICT)`)
if (missingChars.length) console.log(`missing chars: ${missingChars.join(" ")}`)
