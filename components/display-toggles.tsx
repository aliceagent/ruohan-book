"use client"

import { useId } from "react"
import { Languages, Sparkles, Type } from "lucide-react"

import { useDisplayToggleSentinel } from "@/components/sticky-display"
import { useStudyPrefs } from "@/components/study-prefs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export function DisplayToggles({
  compact = false,
  placement = "inline",
}: {
  compact?: boolean
  placement?: "inline" | "header"
}) {
  const { prefs, setPrefs } = useStudyPrefs()
  const inHeader = placement === "header"
  const sentinelRef = useDisplayToggleSentinel<HTMLDivElement>(!inHeader)

  return (
    <div
      ref={inHeader ? undefined : sentinelRef}
      className={cn(
        "flex flex-nowrap items-center",
        inHeader ? "gap-2 sm:gap-3" : compact ? "flex-wrap gap-4" : "flex-wrap gap-5 rounded-xl border bg-card px-4 py-3",
      )}
    >
      <Toggle
        icon={<Type className="size-3.5" />}
        label="Pinyin"
        checked={prefs.pinyin}
        compact={inHeader}
        onChange={(pinyin) => setPrefs({ pinyin })}
      />
      <Toggle
        icon={<Languages className="size-3.5" />}
        label="English"
        checked={prefs.english}
        compact={inHeader}
        onChange={(english) => setPrefs({ english })}
      />
      <Toggle
        icon={<Sparkles className="size-3.5" />}
        label="Ruby"
        checked={prefs.ruby}
        compact={inHeader}
        onChange={(ruby) => setPrefs({ ruby })}
      />
    </div>
  )
}

function Toggle({
  icon,
  label,
  checked,
  compact,
  onChange,
}: {
  icon: React.ReactNode
  label: string
  checked: boolean
  compact?: boolean
  onChange: (value: boolean) => void
}) {
  const reactId = useId()
  const id = `toggle-${label.toLowerCase()}-${reactId}`

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Switch
        id={id}
        size={compact ? "sm" : "default"}
        checked={checked}
        onCheckedChange={onChange}
        aria-label={label}
      />
      <Label
        htmlFor={id}
        className={cn("flex items-center gap-1.5 font-normal", compact ? "text-xs" : "text-sm")}
      >
        {icon}
        <span className={cn(compact && "hidden lg:inline")}>{label}</span>
      </Label>
    </div>
  )
}
