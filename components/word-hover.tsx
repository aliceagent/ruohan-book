"use client"

import { useEffect, useRef, useState } from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { SpeakButton } from "@/components/speak-button"
import type { GlossToken } from "@/lib/gloss"
import { cn } from "@/lib/utils"

const HOVER_CLOSE_DELAY = 200

function prefersFineHover() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
}

export function WordHover({
  token,
  pinyin,
  children,
}: {
  token: GlossToken
  pinyin: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current)
    }
  }, [])

  if (token.kind !== "word") {
    return <>{children}</>
  }

  function cancelClose() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function scheduleClose() {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY)
  }

  function handleOpenChange(next: boolean) {
    cancelClose()
    setOpen(next)
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <PopoverPrimitive.Trigger asChild>
        <span
          className={cn(
            "cursor-help rounded-[0.35em] px-[0.06em] decoration-rose-400/80 decoration-dotted underline-offset-4",
            "touch-manipulation select-none [-webkit-touch-callout:none]",
            "[@media(hover:none)]:underline",
            "hover:bg-rose-200/80 hover:underline dark:hover:bg-rose-900/60",
            "data-[state=open]:bg-rose-200/80 data-[state=open]:underline dark:data-[state=open]:bg-rose-900/60",
          )}
          aria-label={`About ${token.hanzi}`}
          onClick={(event) => {
            event.stopPropagation()
            // Desktop already opened on hover; don't let the click toggle it shut.
            if (prefersFineHover()) event.preventDefault()
          }}
          onPointerDown={(event) => event.stopPropagation()}
          onContextMenu={(event) => event.preventDefault()}
          onMouseEnter={() => {
            if (!prefersFineHover()) return
            cancelClose()
            setOpen(true)
          }}
          onMouseLeave={() => {
            if (!prefersFineHover()) return
            scheduleClose()
          }}
        >
          {children}
        </span>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="bottom"
          align="center"
          sideOffset={8}
          collisionPadding={12}
          className="z-50 w-64 rounded-xl border bg-card p-3 text-left shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
          onMouseEnter={() => {
            if (!prefersFineHover()) return
            cancelClose()
          }}
          onMouseLeave={() => {
            if (!prefersFineHover()) return
            scheduleClose()
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-serif text-2xl leading-tight">{token.hanzi}</p>
              {pinyin ? (
                <p className="text-sm text-rose-800/80 dark:text-rose-200/80">{pinyin}</p>
              ) : null}
            </div>
            <SpeakButton text={token.hanzi} label="Listen" />
          </div>
          {token.en ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{token.en}</p>
          ) : (
            <p className="mt-2 text-xs text-muted-foreground">
              {Array.from(token.hanzi).length > 1 ? "Word" : "Character"} in this sentence
            </p>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
