import type { Metadata } from "next"
import { Suspense } from "react"

import { StudyStudio } from "@/components/study-studio"

export const metadata: Metadata = {
  title: "Study",
}

export default function StudyPage() {
  return (
    <Suspense fallback={<p className="text-muted-foreground">Loading study…</p>}>
      <StudyStudio />
    </Suspense>
  )
}
