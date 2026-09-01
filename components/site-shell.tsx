"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, type ReactNode } from "react"

import { DisplayToggles } from "@/components/display-toggles"
import { LessonNotesHeaderButton, LessonNotesPanel, useNotesOpen } from "@/components/lesson-notes"
import { MixedHanzi } from "@/components/mixed-hanzi"
import { useShowDisplayTogglesInHeader } from "@/components/sticky-display"
import { UnitLessonLinks, UnitNavMenu } from "@/components/unit-nav-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BOOK } from "@/content/catalog"
import { useLastUnit } from "@/hooks/use-last-unit"
import { cn } from "@/lib/utils"

const STATIC_LINKS = [
  { href: "/", label: "Home" },
  { href: "/units", label: "Units" },
  { href: "/study", label: "Study" },
  { href: "/quiz", label: "Quiz" },
  { href: "/audio", label: "Audio" },
  { href: "/plan", label: "Plan" },
] as const

function navLinks(lastUnitId: number) {
  return [
    STATIC_LINKS[0],
    STATIC_LINKS[1],
    { href: `/units/${lastUnitId}`, label: `Unit ${lastUnitId}` },
    ...STATIC_LINKS.slice(2),
  ]
}

function linkIsActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  if (href === "/units") return pathname === "/units"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function AppShell({
  children,
  lastUnitId,
}: {
  children: ReactNode
  lastUnitId?: number
}) {
  const notesOpen = useNotesOpen()

  return (
    <div
      data-notes-open={notesOpen ? "true" : "false"}
      className={cn("flex flex-col", notesOpen ? "h-svh overflow-hidden" : "min-h-svh")}
    >
      <SiteHeader compact={notesOpen} initialLastUnit={lastUnitId} />
      <div
        className={cn(
          "flex min-h-0 flex-1",
          notesOpen ? "flex-col sm:flex-row" : "flex-col",
        )}
      >
        <div
          className={cn(
            "flex min-w-0 flex-1 flex-col",
            notesOpen && "min-h-0 overflow-y-auto",
          )}
        >
          <main
            className={cn(
              "w-full flex-1",
              notesOpen ? "px-2 py-5 sm:px-3" : "mx-auto max-w-6xl px-4 py-8",
            )}
          >
            {children}
          </main>
          <SiteFooter compact={notesOpen} />
        </div>
        <LessonNotesPanel />
      </div>
    </div>
  )
}

export function SiteHeader({
  compact = false,
  initialLastUnit,
}: {
  compact?: boolean
  initialLastUnit?: number
}) {
  const pathname = usePathname()
  const showToggles = useShowDisplayTogglesInHeader()
  const lastUnitId = useLastUnit(initialLastUnit)
  const links = navLinks(lastUnitId)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 shrink-0 border-b bg-background/85 backdrop-blur">
      <div
        className={cn(
          "mx-auto flex min-h-16 items-center justify-between gap-3 py-2",
          compact ? "max-w-none px-2 sm:px-3" : "max-w-6xl px-4",
        )}
      >
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose-700 text-white">
            <BookOpen className="size-4" />
          </span>
          <span className={cn("leading-tight", showToggles && "hidden sm:block")}>
            <span className="block truncate font-serif text-lg font-semibold tracking-tight">
              <MixedHanzi text={BOOK.title} />
            </span>
            <span className={cn("hidden text-xs text-muted-foreground", !showToggles && "sm:block")}>
              {BOOK.titleEn}
            </span>
          </span>
        </Link>
        <nav className={cn("hidden items-center gap-1", showToggles ? "xl:flex" : "md:flex")}>
          {links.map((link) =>
            /^\/units\/\d+$/.test(link.href) ? (
              <UnitNavMenu key={link.href} unitId={lastUnitId} pathname={pathname} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-accent",
                  linkIsActive(link.href, pathname)
                    ? "bg-rose-700 text-white hover:bg-rose-700"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LessonNotesHeaderButton />
          {showToggles ? (
            <div className="shrink-0">
              <DisplayToggles compact placement="header" />
            </div>
          ) : null}
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={showToggles ? "xl:hidden" : "md:hidden"}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                <MixedHanzi text={BOOK.title} />
              </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-2">
                {links.map((link) =>
                  /^\/units\/\d+$/.test(link.href) ? (
                    <div key={link.href} className="rounded-xl border bg-card p-2">
                      <p className="px-2.5 pt-1 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        Unit {lastUnitId}
                      </p>
                      <UnitLessonLinks
                        unitId={lastUnitId}
                        pathname={pathname}
                        onNavigate={() => setMenuOpen(false)}
                      />
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2 text-base hover:bg-accent"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </Button>
  )
}

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={cn("border-t text-sm text-muted-foreground", compact ? "py-5" : "py-8")}>
      <div
        className={cn(
          "mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
          compact ? "max-w-none px-2 sm:px-3" : "max-w-6xl px-4",
        )}
      >
        <p>
          Study companion for <MixedHanzi text={BOOK.title} /> by <MixedHanzi text={BOOK.author} /> (
          {BOOK.authorEn}). <MixedHanzi text={BOOK.publisher} />, {BOOK.year}.
        </p>
        <p>Pinyin and English added for learners. Original book remains the source.</p>
      </div>
    </footer>
  )
}
