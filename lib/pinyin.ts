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
