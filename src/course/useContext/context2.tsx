import React, {createContext, ReactNode, useState, Dispatch} from 'react'

interface Injected{
  counter: number,
  setCounter: Dispatch<any>,
  increment: () => any,
  decrement: () => any
}

// 因为在别的组件中使用useContext时，
// 需要用到这个context对象，因此对外抛出

// export const context = createContext({})
export const context = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function CounterProvider ({ children }: Props) {
  const [counter, setCounter] = useState(0)
  
  const value = {
    counter,
    setCounter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1)
  }

  return (
    < context.Provider value={value}>{children}</context.Provider>
  )
}