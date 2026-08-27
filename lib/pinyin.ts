import { pinyin } from "pinyin-pro"

const HANZI_RE = /\p{Script=Han}/u

const PINYIN_OPTIONS = {
  toneType: "symbol" as const,
  type: "all" as const,
  nonZh: "consecutive" as const,
  /** Max-probability segmentation — better 了/le vs 了/liǎo in full sentences. */
  segmentit: 2,
}

type PinyinPiece = {
  origin: string
  pinyin: string
  isZh: boolean
}

function pieces(hanzi: string): PinyinPiece[] {
  if (!hanzi) return []
  const result = pinyin(hanzi, PINYIN_OPTIONS)
  return (Array.isArray(result) ? result : [result]) as PinyinPiece[]
}

export type RubyToken = {
  hanzi: string
  pinyin: string | null
}

/**
 * Isolated 了 is the dictionary headword liǎo (“to finish”). In this book it is
 * almost always the particle le. Keep liǎo when another Chinese character sits
 * next to it (了解, 吃不了, 不得了) so the phrase model can decide.
 */
function maybeParticleLe(tokens: RubyToken[]) {
  return tokens.map((token, index) => {
    if (token.hanzi !== "了") return token
    if (tokens[index - 1]?.hanzi === "为") {
      return { ...token, pinyin: "le" }
    }
    if (token.pinyin !== "liǎo") return token
    const prev = tokens[index - 1]?.hanzi
    const next = tokens[index + 1]?.hanzi
    const prevHan = Boolean(prev && HANZI_RE.test(prev))
    const nextHan = Boolean(next && HANZI_RE.test(next))
    if (prevHan || nextHan) return token
    return { ...token, pinyin: "le" }
  })
}

export function phrasePinyin(hanzi: string) {
  return rubyToPhrase(rubyTokens(hanzi))
}

export function rubyTokens(hanzi: string): RubyToken[] {
  const tokens: RubyToken[] = []

  for (const piece of pieces(hanzi)) {
    const origin = piece.origin || ""
    if (piece.isZh && origin) {
      const chars = Array.from(origin)
      const readings = (piece.pinyin || "").split(/\s+/).filter(Boolean)
      for (let i = 0; i < chars.length; i += 1) {
        const reading = readings[i] || piece.pinyin || ""
        tokens.push({
          hanzi: chars[i]!,
          pinyin: reading || null,
        })
      }
    } else {
      for (const char of Array.from(origin)) {
        tokens.push({ hanzi: char, pinyin: null })
      }
    }
  }

  return maybeParticleLe(tokens)
}

export type MixedRun =
  | { kind: "zh"; hanzi: string; readings: string[] }
  | { kind: "text"; text: string }

/** Groups a mixed English/Chinese string into pinyin-bearing runs and plain text. */
export function mixedRuns(text: string): MixedRun[] {
  const runs: MixedRun[] = []

  for (const token of rubyTokens(text)) {
    const last = runs[runs.length - 1]
    if (token.pinyin) {
      if (last?.kind === "zh") {
        last.hanzi += token.hanzi
        last.readings.push(token.pinyin)
      } else {
        runs.push({ kind: "zh", hanzi: token.hanzi, readings: [token.pinyin] })
      }
    } else if (last?.kind === "text") {
      last.text += token.hanzi
    } else {
      runs.push({ kind: "text", text: token.hanzi })
    }
  }

  return runs
}

export function rubyToPhrase(tokens: RubyToken[]) {
  return tokens
    .map((token) => token.pinyin)
    .filter((reading): reading is string => Boolean(reading))
    .join(" ")
}
