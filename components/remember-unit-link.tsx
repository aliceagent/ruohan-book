"use client"

import Link from "next/link"
import type { ComponentProps } from "react"

import { rememberLastUnit } from "@/hooks/use-last-unit"

type RememberUnitLinkProps = ComponentProps<typeof Link> & {
  unitId: number
}

export function RememberUnitLink({ unitId, onClick, ...props }: RememberUnitLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        rememberLastUnit(unitId)
        onClick?.(event)
      }}
    />
  )
}
