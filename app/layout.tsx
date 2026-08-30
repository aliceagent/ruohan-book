import type { Metadata } from "next"
import { Noto_Sans, Noto_Sans_SC, Noto_Serif, Noto_Serif_SC } from "next/font/google"

import { LessonNotesProvider } from "@/components/lesson-notes"
import { AppShell } from "@/components/site-shell"
import { StickyDisplayProvider } from "@/components/sticky-display"
import { StudyPrefsProvider } from "@/components/study-prefs"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BOOK } from "@/content/catalog"
import { cn } from "@/lib/utils"

import "./globals.css"

const sansLatin = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
})

const sansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
})

const serifLatin = Noto_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
})

const serifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${BOOK.title} · ${BOOK.titleEn}`,
    template: `%s · ${BOOK.title}`,
  },
  description: `A comprehensive Mandarin conversation study site for ${BOOK.title}: pinyin, English, vocabulary, and speaking practice. Unit 1 is live.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-Hans"
      suppressHydrationWarning
      className={cn(
        sansLatin.variable,
        sansSC.variable,
        serifLatin.variable,
        serifSC.variable,
        "antialiased",
      )}
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        <ThemeProvider>
          <TooltipProvider>
            <StudyPrefsProvider>
              <StickyDisplayProvider>
                <LessonNotesProvider>
                  <AppShell>{children}</AppShell>
                </LessonNotesProvider>
              </StickyDisplayProvider>
            </StudyPrefsProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
