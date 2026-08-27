"use client"

import { Languages, Sparkles, Type } from "lucide-react"

import { useStudyPrefs } from "@/components/study-prefs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function DisplayToggles({ compact = false }: { compact?: boolean }) {
  const { prefs, setPrefs } = useStudyPrefs()

  return (
    <div
      className={
        compact
          ? "flex flex-wrap items-center gap-4"
          : "flex flex-wrap items-center gap-5 rounded-xl border bg-card px-4 py-3"
      }
    >
      <Toggle
        icon={<Type className="size-3.5" />}
        label="Pinyin"
        checked={prefs.pinyin}
        onChange={(pinyin) => setPrefs({ pinyin })}
      />
      <Toggle
        icon={<Languages className="size-3.5" />}
        label="English"
        checked={prefs.english}
        onChange={(english) => setPrefs({ english })}
      />
      <Toggle
        icon={<Sparkles className="size-3.5" />}
        label="Ruby"
        checked={prefs.ruby}
        onChange={(ruby) => setPrefs({ ruby })}
      />
    </div>
  )
}

function Toggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  const id = `toggle-${label.toLowerCase()}`
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={id} className="flex items-center gap-1.5 text-sm font-normal">
        {icon}
        {label}
      </Label>
    </div>
  )
}
