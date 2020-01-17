// 受控组件
// 从广义上来理解：组件外部能控制组件内部的状态，则表示该组件为受控组件。
// 外部想要控制内部的组件，就必须要往组件内部传入props。而通常情况下，受控组件内部又自己有维护自己的状态。例如input组件。
// 也就意味着，我们需要通过某种方式，要将外部进入的props与内部状态的state，转化为唯一数据源。这样才能没有冲突的控制状态变化。
// 换句话说，就是要利用props，去修改内部的state。
import React, { useState, useEffect } from 'react'

interface Props {
  value: number,
  onChange: (num: number) => any
}

 function Counter ({value, onChange}: Props) {
  const [count, setCount] = useState<number>(0)
  
  useEffect (() => {
    // 利用props，去修改内部的state
    value && setCount(value)
  }, [value])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => onChange(count + 1)}>点击+1</button>
    </div>
  )
}

export default function App () {
  const [value, setValue] = useState<number>(0)

  return (
    <Counter value={value} onChange={(val) => setValue(val)}></Counter>
  )
}