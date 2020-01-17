// 重点+难点：在hooks中是如何清除副作用的？
import React, { useState, useEffect } from 'react'

interface Props {
  value: number,
  onChange: (num: number) => any
}

function Counter({ value, onChange }: Props) {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    // 利用props，去修改内部的state
    value && setCount(value)
    console.log('use', value)
    return () => {
      console.log('clear', value)
    }
  }, [value])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => onChange(count + 1)}>点击+1</button>
    </div>
  )
}

export default function App() {
  const [value, setValue] = useState<number>(0)

  return (
    <Counter value={value} onChange={(val) => setValue(val)}></Counter>
  )
}