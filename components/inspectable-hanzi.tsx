"use client"

import { type ReactNode } from "react"

import { WordHover } from "@/components/word-hover"
import { tokenizeHanzi, type GlossToken } from "@/lib/gloss"
import { rubyToPhrase, rubyTokens, type RubyToken } from "@/lib/pinyin"
import { glossaryFor } from "@/lib/unit-glossary"
import type { VocabItem } from "@/lib/types"

export function InspectableHanzi({
  hanzi,
  ruby,
  glossary,
  tap = true,
}: {
  hanzi: string
  ruby: boolean
  glossary?: VocabItem[]
  tap?: boolean
}) {
  const tokens = tokenizeHanzi(hanzi, glossaryFor(glossary))
  const sentenceRuby = rubyTokens(hanzi)

  return tokens.reduce<{ nodes: ReactNode[]; offset: number }>(
    (state, token, index) => {
      const length = Array.from(token.hanzi).length
      const parts = sentenceRuby.slice(state.offset, state.offset + length)
      state.nodes.push(
        <InspectableChunk
          key={`${token.hanzi}-${index}`}
          token={token}
          ruby={ruby}
          parts={parts}
          tap={tap}
        />,
      )
      state.offset += length
      return state
    },
    { nodes: [], offset: 0 },
  ).nodes
}

function InspectableChunk({
  token,
  ruby,
  parts,
  tap,
}: {
  token: GlossToken
  ruby: boolean
  parts: RubyToken[]
  tap: boolean
}) {
  const body = ruby
    ? parts.map((part, index) =>
        part.pinyin ? (
          <ruby key={`${part.hanzi}-${index}`} className="ruby-pair">
            {part.hanzi}
            <rt>{part.pinyin}</rt>
          </ruby>
        ) : (
          <span key={`${part.hanzi}-${index}`}>{part.hanzi}</span>
        ),
      )
    : token.hanzi

  if (token.kind !== "word") return <>{body}</>

  return (
    <WordHover token={token} pinyin={rubyToPhrase(parts)} tap={tap}>
      {body}
    </WordHover>
  )
}
