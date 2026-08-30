import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { LAST_UNIT_KEY, LAST_UNIT_MAX_AGE, unitIdFromPath } from "@/lib/last-unit"

export function proxy(request: NextRequest) {
  const unitId = unitIdFromPath(request.nextUrl.pathname)
  if (!unitId) return NextResponse.next()

  const current = request.cookies.get(LAST_UNIT_KEY)?.value
  if (current === String(unitId)) return NextResponse.next()

  const response = NextResponse.next()
  response.cookies.set({
    name: LAST_UNIT_KEY,
    value: String(unitId),
    path: "/",
    maxAge: LAST_UNIT_MAX_AGE,
    sameSite: "lax",
  })
  return response
}

export const config = {
  matcher: ["/units/:unitId", "/units/:unitId/:lessonId"],
}
