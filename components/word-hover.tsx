"use client"

import { useState, useSyncExternalStore } from "react"
import { HoverCard as HoverCardPrimitive, Popover as PopoverPrimitive } from "radix-ui"

import { SpeakButton } from "@/components/speak-button"
import type { GlossToken } from "@/lib/gloss"
import { cn } from "@/lib/utils"

const FINE_HOVER = "(hover: hover) and (pointer: fine)"

const triggerClass = cn(
  "cursor-help rounded-[0.35em] px-[0.08em]",
  // Extend the highlight up over ruby so the rounded box doesn't clip pinyin.
  "box-decoration-clone py-[0.85em] -my-[0.85em] [-webkit-box-decoration-break:clone]",
  "touch-manipulation select-none [-webkit-touch-callout:none]",
  "hover:bg-rose-200/80 dark:hover:bg-rose-900/60",
  "data-[state=open]:bg-rose-200/80 dark:data-[state=open]:bg-rose-900/60",
)

const contentClass =
  "z-50 w-64 rounded-xl border bg-card p-3 text-left shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"

function subscribeFineHover(onStoreChange: () => void) {
  const media = window.matchMedia(FINE_HOVER)
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function useFineHover() {
  return useSyncExternalStore(subscribeFineHover, () => window.matchMedia(FINE_HOVER).matches, () => false)
}

function WordCard({ token, pinyin }: { token: GlossToken; pinyin: string }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-serif text-2xl leading-tight">{token.hanzi}</p>
          {pinyin ? <p className="text-sm text-rose-800/80 dark:text-rose-200/80">{pinyin}</p> : null}
        </div>
        <SpeakButton text={token.hanzi} label="Listen" />
      </div>
      {token.en ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{token.en}</p>
      ) : null}
    </>
  )
}

export function WordHover({
  token,
  pinyin,
  children,
  tap = true,
  block = false,
}: {
  token: GlossToken
  pinyin: string
  children: React.ReactNode
  /** On phones, tap opens the gloss. Turn off inside buttons that already use tap. */
  tap?: boolean
  /** Use a div trigger so the whole vocab card (hanzi + stacked pinyin) is the hit area. */
  block?: boolean
}) {
  const fineHover = useFineHover()

  const [open, setOpen] = useState(false)

  if (token.kind !== "word") {
    return <>{children}</>
  }

  const Trigger = block ? "div" : "span"

  const trigger = (
    <Trigger
      className={cn(triggerClass, block && "block min-w-0")}
      aria-label={`About ${token.hanzi}`}
      onClick={(event) => {
        if (!tap) return
        event.stopPropagation()
        setOpen((current) => !current)
      }}
      onPointerDown={(event) => {
        if (tap) event.stopPropagation()
      }}
      onContextMenu={(event) => event.preventDefault()}
    >
      {children}
    </Trigger>
  )

  const card = <WordCard token={token} pinyin={pinyin} />

  if (fineHover) {
    return (
      <HoverCardPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        openDelay={80}
        closeDelay={200}
      >
        <HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
        <HoverCardPrimitive.Portal>
          <HoverCardPrimitive.Content
            side="bottom"
            align="center"
            sideOffset={8}
            collisionPadding={12}
            className={contentClass}
            data-word-gloss
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            {card}
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Portal>
      </HoverCardPrimitive.Root>
    )
  }

  if (!tap) {
    return <>{children}</>
  }

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="bottom"
          align="center"
          sideOffset={8}
          collisionPadding={12}
          className={contentClass}
          data-word-gloss
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          {card}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
