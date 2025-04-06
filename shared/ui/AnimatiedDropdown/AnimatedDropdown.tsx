'use client'

import { useDropdownContext } from '@/shared/context/DropdownContext'

import { useEffect, useRef, useState } from 'react'

export interface IAnimatedDropdownProps {
  id: string
  content: React.ReactNode
  className?: string
  animationDuration?: number // ms
}

export const AnimatedDropdown = ({ id, content, className = '', animationDuration = 200 }: IAnimatedDropdownProps) => {
  const { openDropdownId } = useDropdownContext()
  const isOpen = openDropdownId === id
  const [height, setHeight] = useState<number | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen, content])

  return (
    <div
      ref={contentRef}
      style={{
        maxHeight: height === null ? 0 : `${height}px`,
        transition: `max-height ${animationDuration}ms ease`,
        overflow: 'hidden',
      }}
      className={`transition-all ${className}`}
    >
      {content}
    </div>
  )
}
