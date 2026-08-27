import type { Metadata } from "next"

import { StudyStudio } from "@/components/study-studio"

export const metadata: Metadata = {
  title: "Study",
}

export default function StudyPage() {
  return <StudyStudio />
}
