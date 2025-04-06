'use client'

import React, { createContext, useContext, useState } from 'react'

interface DropdownContextValue {
  openDropdownId: string | null
  setOpenDropdownId: (id: string | null) => void
}

const DropdownContext = createContext<DropdownContextValue>({
  openDropdownId: null,
  setOpenDropdownId: () => {},
})

export const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)

  return <DropdownContext.Provider value={{ openDropdownId, setOpenDropdownId }}>{children}</DropdownContext.Provider>
}

export const useDropdownContext = () => useContext(DropdownContext)
