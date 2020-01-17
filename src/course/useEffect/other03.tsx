import React, {useState, useEffect, useRef} from 'react'

//下面这个计数器版本 模拟了class中的行为：
// 在React中去直接修改值看上去有点怪异。然而，在class组件中React正是这样去修改this.state的。
// 不像捕获的props和state，你没法保证在任意一个回调函数中读取的latestCount.current是不变的。
// 根据定义，你可以随时修改它。这就是为什么它不是默认行为，而是需要你主动选择这样做。
export default function Counter() {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)

  useEffect(() => {
    latestCount.current = count
    setTimeout(() => {
      console.log('you clicked ' + latestCount.current + ' times')
      document.title = latestCount.current + ''
    }, 3000)
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}