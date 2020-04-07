import React, { createContext, Dispatch, ReactNode, useState } from 'react'

interface Injected {
  unreadHome: number,
  unreadHot: number,
  setUnreadHome: Dispatch<any>,
  setUnreadHot: Dispatch<any>
}

export const context = createContext<Injected>({} as Injected)

interface Props {
  children?: ReactNode
}

export function AppProvider ({ children }: Props) {
  const [unreadHome, setUnreadHome] = useState(0)
  const [unreadHot, setUnreadHot] = useState(0)
  console.log('----? provider')

  const value = {
    unreadHome,
    unreadHot,
    setUnreadHome,
    setUnreadHot
  }

  return (
    <context.Provider value={value}>{children}</context.Provider>
  )
}