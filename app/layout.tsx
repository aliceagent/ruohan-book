import type { Metadata } from "next"
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google"

import { SiteFooter, SiteHeader } from "@/components/site-shell"
import { StudyPrefsProvider } from "@/components/study-prefs"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BOOK } from "@/content/catalog"
import { cn } from "@/lib/utils"

import "./globals.css"

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
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
      className={cn(sans.variable, serif.variable, "antialiased")}
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        <ThemeProvider>
          <TooltipProvider>
            <StudyPrefsProvider>
              <div className="flex min-h-svh flex-col">
                <SiteHeader />
                <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
                <SiteFooter />
              </div>
            </StudyPrefsProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
