import { useEffect } from 'react'

type EventType = MouseEvent | TouchEvent

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: EventType) => void,
  active: boolean = true,
) {
  useEffect(() => {
    if (!active) return

    const listener = (event: EventType) => {
      const el = ref?.current
      if (!el || el.contains(event.target as Node)) return
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, active])
}
