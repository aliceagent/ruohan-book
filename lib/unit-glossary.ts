import { UNIT_1 } from "@/content/unit-1"
import { COMMON_GLOSSES, collectLessonGlosses, mergeGlosses } from "@/lib/gloss"
import type { VocabItem } from "@/lib/types"

let cached: Map<string, string> | null = null

export function unitGlossary() {
  if (!cached) {
    cached = mergeGlosses([COMMON_GLOSSES, UNIT_1.flatMap(collectLessonGlosses)])
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
