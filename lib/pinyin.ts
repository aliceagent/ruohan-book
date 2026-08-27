import { pinyin } from "pinyin-pro"

export function phrasePinyin(hanzi: string) {
  return pinyin(hanzi, {
    toneType: "symbol",
    nonZh: "consecutive",
    type: "string",
  })
}

export type RubyToken = {
  hanzi: string
  pinyin: string | null
}

export function rubyTokens(hanzi: string): RubyToken[] {
  const tokens: RubyToken[] = []
  const chars = Array.from(hanzi)

  for (const char of chars) {
    if (/\s/.test(char)) {
      tokens.push({ hanzi: char, pinyin: null })
      continue
    }

    const reading = pinyin(char, {
      toneType: "symbol",
      type: "string",
      nonZh: "consecutive",
    })

    if (!reading || reading === char) {
      tokens.push({ hanzi: char, pinyin: null })
    } else {
      tokens.push({ hanzi: char, pinyin: reading })
    }
  }

  return tokens
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
