"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

type StickyDisplayActions = {
  register: (id: string) => void
  unregister: (id: string) => void
  setVisible: (id: string, visible: boolean) => void
}

const StickyDisplayActionsContext = createContext<StickyDisplayActions | null>(null)
const StickyDisplayShowContext = createContext(false)

export function StickyDisplayProvider({ children }: { children: ReactNode }) {
  const [sources, setSources] = useState<Record<string, boolean>>({})

  const register = useCallback((id: string) => {
    setSources((current) => (id in current ? current : { ...current, [id]: true }))
  }, [])

  const unregister = useCallback((id: string) => {
    setSources((current) => {
      if (!(id in current)) return current
      const next = { ...current }
      delete next[id]
      return next
    })
  }, [])

  const setVisible = useCallback((id: string, visible: boolean) => {
    setSources((current) => {
      if (!(id in current) || current[id] === visible) return current
      return { ...current, [id]: visible }
    })
  }, [])

  const actions = useMemo(
    () => ({ register, unregister, setVisible }),
    [register, unregister, setVisible],
  )

  const ids = Object.keys(sources)
  const showInHeader = ids.length > 0 && ids.every((id) => !sources[id])

  return (
    <StickyDisplayActionsContext.Provider value={actions}>
      <StickyDisplayShowContext.Provider value={showInHeader}>{children}</StickyDisplayShowContext.Provider>
    </StickyDisplayActionsContext.Provider>
  )
}

export function useShowDisplayTogglesInHeader() {
  return useContext(StickyDisplayShowContext)
}

/** Marks in-page display toggles; when they leave the header band, copies appear in the nav. */
export function useDisplayToggleSentinel<T extends HTMLElement>(enabled = true) {
  const idRef = useRef(`display-toggles-${Math.random().toString(36).slice(2)}`)
  const nodeRef = useRef<T>(null)
  const actions = useContext(StickyDisplayActionsContext)

  useEffect(() => {
    if (!actions || !enabled) return
    const id = idRef.current
    actions.register(id)
    return () => actions.unregister(id)
  }, [actions, enabled])

  useEffect(() => {
    if (!actions || !enabled) return
    const node = nodeRef.current
    if (!node) return
    const id = idRef.current
    const observer = new IntersectionObserver(
      ([entry]) => actions.setVisible(id, entry.isIntersecting),
      // Header is h-16; treat coverage by the sticky bar as “out of reach”.
      { root: null, rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [actions, enabled])

  return nodeRef
}
