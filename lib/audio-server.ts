import { existsSync } from "node:fs"
import path from "node:path"

import { lessonFullAudioFileName } from "@/lib/audio"

/** Server-only: client components must not import this file. */
export function lessonHasFullAudio(audioId: string) {
  const unit = audioId.split("-")[0]
  return existsSync(
    path.join(process.cwd(), "public", "audio", `unit-${unit}`, lessonFullAudioFileName(audioId)),
  )
}
