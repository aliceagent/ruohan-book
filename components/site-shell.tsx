"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { DisplayToggles } from "@/components/display-toggles"
import { useShowDisplayTogglesInHeader } from "@/components/sticky-display"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BOOK } from "@/content/catalog"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/units", label: "Units" },
  { href: "/units/1", label: "Unit 1" },
  { href: "/study", label: "Study" },
  { href: "/quiz", label: "Quiz" },
  { href: "/audio", label: "Audio" },
  { href: "/plan", label: "Plan" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const showToggles = useShowDisplayTogglesInHeader()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose-700 text-white">
            <BookOpen className="size-4" />
          </span>
          <span className={cn("leading-tight", showToggles && "hidden sm:block")}>
            <span className="block truncate font-serif text-lg font-semibold tracking-tight">
              {BOOK.title}
            </span>
            <span className={cn("hidden text-xs text-muted-foreground", !showToggles && "sm:block")}>
              {BOOK.titleEn}
            </span>
          </span>
        </Link>
        <nav className={cn("hidden items-center gap-1", showToggles ? "xl:flex" : "md:flex")}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-accent",
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "bg-rose-700 text-white hover:bg-rose-700"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          {showToggles ? (
            <div className="shrink-0">
              <DisplayToggles compact placement="header" />
            </div>
          ) : null}
          <ThemeToggle />
          <Sheet>
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
                <SheetTitle>{BOOK.title}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-2">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-base hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                ))}
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

export function SiteFooter() {
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Study companion for {BOOK.title} by {BOOK.author} ({BOOK.authorEn}). {BOOK.publisher}, {BOOK.year}.
        </p>
        <p>Pinyin and English added for learners. Original book remains the source.</p>
      </div>
    </footer>
  )
}
