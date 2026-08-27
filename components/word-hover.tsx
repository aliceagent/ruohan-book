"use client"

import { HoverCard as HoverCardPrimitive } from "radix-ui"

import { SpeakButton } from "@/components/speak-button"
import type { GlossToken } from "@/lib/gloss"
import { cn } from "@/lib/utils"

export function WordHover({
  token,
  pinyin,
  children,
}: {
  token: GlossToken
  pinyin: string
  children: React.ReactNode
}) {
  if (token.kind !== "word") {
    return <>{children}</>
  }

  return (
    <HoverCardPrimitive.Root openDelay={80} closeDelay={200}>
      <HoverCardPrimitive.Trigger asChild>
        <span
          className={cn(
            "cursor-help rounded-[0.35em] px-[0.06em] decoration-rose-400/80 decoration-dotted underline-offset-4",
            "hover:bg-rose-200/80 hover:underline dark:hover:bg-rose-900/60",
            "data-[state=open]:bg-rose-200/80 data-[state=open]:underline dark:data-[state=open]:bg-rose-900/60",
          )}
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          {children}
        </span>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          side="bottom"
          align="center"
          sideOffset={8}
          collisionPadding={12}
          className="z-50 w-64 rounded-xl border bg-card p-3 text-left shadow-lg outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
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
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}
