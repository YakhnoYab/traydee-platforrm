'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { HelpCircle } from 'lucide-react'

interface HintOverlayProps {
  title?: string
  content: string | React.ReactNode
  icon?: React.ReactNode // optional custom trigger icon
  className?: string // for styling trigger
}

export const HintOverlay: React.FC<HintOverlayProps> = ({ title, content, icon, className }) => {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useClickOutside(overlayRef, () => setOpen(false), open)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <>
      <button
        type='button'
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label='Show hint'
        className={className ?? 'text-muted-foreground hover:text-primary'}
      >
        {icon ?? <HelpCircle size={18} />}
      </button>

      {open && (
        <div
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'
        >
          <div
            ref={overlayRef}
            className='relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl'
          >
            <button
              onClick={() => setOpen(false)}
              aria-label='Close'
              className='absolute right-4 top-4 text-gray-500 hover:text-black'
            >
              ✖
            </button>
            {title && <h2 className='mb-2 text-lg font-semibold'>{title}</h2>}
            <div className='text-sm text-gray-700'>{content}</div>
          </div>
        </div>
      )}
    </>
  )
}
