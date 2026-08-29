import { UNIT_1 } from "@/content/unit-1"
import { GENERATED_GLOSSES } from "@/lib/generated-glosses"
import {
  COMMON_GLOSSES,
  collectLessonGlosses,
  inspectableHanzi,
  mergeGlosses,
  tokenizeHanzi,
} from "@/lib/gloss"
import type { VocabItem } from "@/lib/types"

let cached: Map<string, string> | null = null

function assertEveryTapHasAGloss(glossary: Map<string, string>) {
  for (const lesson of UNIT_1) {
    for (const hanzi of inspectableHanzi(lesson)) {
      for (const token of tokenizeHanzi(hanzi, glossary)) {
        if (token.kind === "word" && !token.en) {
          throw new Error(
            `Lesson ${lesson.id} is missing a tap translation for ${token.hanzi} in: ${hanzi}`,
          )
        }
      }
    }
  }
}

export function unitGlossary() {
  if (!cached) {
    cached = mergeGlosses([
      COMMON_GLOSSES,
      UNIT_1.flatMap(collectLessonGlosses),
      GENERATED_GLOSSES,
    ])
    assertEveryTapHasAGloss(cached)
  }
  return cached
}

export function glossaryFor(extra: VocabItem[] = []) {
  const base = unitGlossary()
  if (extra.length === 0) return base
  const map = new Map(base)
  for (const item of extra) {
    map.set(item.hanzi, item.en)
  }
  return map
}
