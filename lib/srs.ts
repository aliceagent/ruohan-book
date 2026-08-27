export const DAY_MS = 86_400_000
export const NEW_PER_DAY = 20
export const STARTING_EASE = 2.5
export const MIN_EASE = 1.3
export const GRADUATING_INTERVAL = 1
export const EASY_INTERVAL = 4
export const EASY_BONUS = 1.3
export const LEARNING_AGAIN_MIN = 1
export const LEARNING_HARD_MIN = 10
/** Pull a just-failed card back into the session instead of waiting a full minute. */
export const LEARNING_GRACE_MS = 90_000

export type SrsGrade = "again" | "hard" | "good" | "easy"
export type SrsKind = "new" | "learn" | "review"

export type SrsCard = {
  due: number
  interval: number
  ease: number
  reps: number
  lapses: number
  firstReviewed?: number
}

export const GRADES: { grade: SrsGrade; label: string; shortcut: string }[] = [
  { grade: "again", label: "Again", shortcut: "1" },
  { grade: "hard", label: "Hard", shortcut: "2" },
  { grade: "good", label: "Good", shortcut: "3" },
  { grade: "easy", label: "Easy", shortcut: "4" },
]

const MINUTE_DAYS = 1 / (24 * 60)

export function dayKey(now: number) {
  const date = new Date(now)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export function isLearning(card: SrsCard | undefined) {
  return !card || card.reps === 0
}

export function kindOf(card: SrsCard | undefined): SrsKind {
  if (!card) return "new"
  if (card.reps === 0) return "learn"
  return "review"
}

export function review(card: SrsCard | undefined, grade: SrsGrade, now = Date.now()): SrsCard {
  const current: SrsCard = card ?? {
    due: now,
    interval: 0,
    ease: STARTING_EASE,
    reps: 0,
    lapses: 0,
  }
  const learning = current.reps === 0
  let { interval, ease, reps, lapses } = current
  const firstReviewed = current.firstReviewed ?? now

  if (learning) {
    if (grade === "again") {
      interval = LEARNING_AGAIN_MIN * MINUTE_DAYS
    } else if (grade === "hard") {
      interval = LEARNING_HARD_MIN * MINUTE_DAYS
    } else if (grade === "good") {
      reps = 1
      interval = GRADUATING_INTERVAL
    } else {
      reps = 1
      interval = EASY_INTERVAL
      ease += 0.15
    }
  } else if (grade === "again") {
    lapses += 1
    reps = 0
    ease = Math.max(MIN_EASE, ease - 0.2)
    interval = LEARNING_AGAIN_MIN * MINUTE_DAYS
  } else if (grade === "hard") {
    ease = Math.max(MIN_EASE, ease - 0.15)
    interval = Math.max(GRADUATING_INTERVAL, current.interval * 1.2)
    reps += 1
  } else if (grade === "good") {
    interval = current.interval * ease
    reps += 1
  } else {
    ease += 0.15
    interval = current.interval * ease * EASY_BONUS
    reps += 1
  }

  return {
    due: now + interval * DAY_MS,
    interval,
    ease,
    reps,
    lapses,
    firstReviewed,
  }
}

export function formatInterval(days: number) {
  const minutes = days * 24 * 60
  if (minutes < 60) return `${Math.max(1, Math.round(minutes))}m`
  const hours = days * 24
  if (hours < 24) return `${Math.max(1, Math.round(hours))}h`
  if (days < 30) {
    const rounded = days >= 10 ? Math.round(days) : Math.round(days * 10) / 10
    return `${rounded}d`
  }
  if (days < 365) {
    const months = days / 30
    return `${months >= 10 ? Math.round(months) : Math.round(months * 10) / 10}mo`
  }
  const years = days / 365
  return `${years >= 10 ? Math.round(years) : Math.round(years * 10) / 10}y`
}

export function previewInterval(card: SrsCard | undefined, grade: SrsGrade, now = Date.now()) {
  return formatInterval(review(card, grade, now).interval)
}

export function introducedToday(srs: Record<string, SrsCard>, now: number) {
  const today = dayKey(now)
  return Object.values(srs).filter(
    (card) => card.firstReviewed != null && dayKey(card.firstReviewed) === today,
  ).length
}

function hashString(value: string) {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

/** Words already marked Known skip the new-card pile and come back as reviews. */
export function seedKnown(
  srs: Record<string, SrsCard>,
  knownIds: string[],
  now: number,
): Record<string, SrsCard> {
  let changed = false
  const next = { ...srs }
  for (const id of knownIds) {
    if (next[id]) continue
    const spreadDays = 2 + (hashString(id) % 6)
    next[id] = {
      due: now + spreadDays * DAY_MS,
      interval: spreadDays,
      ease: STARTING_EASE,
      reps: 2,
      lapses: 0,
      firstReviewed: now - 7 * DAY_MS,
    }
    changed = true
  }
  return changed ? next : srs
}

export function nextDueAt(srs: Record<string, SrsCard>, keys: Set<string> | null, now: number) {
  let soonest: number | undefined
  for (const [id, card] of Object.entries(srs)) {
    if (keys && !keys.has(id)) continue
    if (card.due <= now) continue
    if (soonest == null || card.due < soonest) soonest = card.due
  }
  return soonest
}

export function formatDueIn(due: number, now: number) {
  const delta = Math.max(0, due - now)
  if (delta < 60_000) return "less than a minute"
  if (delta < 3_600_000) return `${Math.round(delta / 60_000)}m`
  if (delta < DAY_MS) return `${Math.round(delta / 3_600_000)}h`
  return formatInterval(delta / DAY_MS)
}

export type QueueCounts = {
  due: number
  learn: number
  review: number
  newLeft: number
  unseen: number
}

export function queueFor<T extends { key: string }>(
  deck: T[],
  srs: Record<string, SrsCard>,
  now: number,
  newCap: number,
): { cards: T[]; counts: QueueCounts } {
  const learn: T[] = []
  const reviews: T[] = []
  const unseen: T[] = []

  for (const item of deck) {
    const card = srs[item.key]
    if (!card) {
      unseen.push(item)
      continue
    }
    const learning = isLearning(card)
    const cutoff = now + (learning ? LEARNING_GRACE_MS : 0)
    if (card.due > cutoff) continue
    if (learning) learn.push(item)
    else reviews.push(item)
  }

  const dueOrder = (items: T[]) =>
    [...items].sort((a, b) => (srs[a.key]?.due ?? 0) - (srs[b.key]?.due ?? 0))

  const newLeft = Math.max(0, newCap - introducedToday(srs, now))
  const fresh = unseen.slice(0, newLeft)
  return {
    cards: [...dueOrder(learn), ...dueOrder(reviews), ...fresh],
    counts: {
      due: learn.length + reviews.length,
      learn: learn.length,
      review: reviews.length,
      newLeft,
      unseen: unseen.length,
    },
  }
}
