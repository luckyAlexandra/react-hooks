import React, { useState } from "react";

export default function Counter () {
  
  interface Counter {
    a?: number,
    b: number
  }

  const [counter, setCounter] = useState<Counter>({ a: 1, b: 2 });
  counter.b = 4 // {a: 1, b: 4}
  // setCounter({ b: 4 }) 
  // {a: 1, b: 2}   {b: 4 }...  
  // 无论是在class中，还是hooks中，state的改变，都是异步的。
  // 状态异步，也就意味着，当你想要在setCounter之后立即去使用它时，你无法拿到状态最新的值，而之后到下一个事件循环周期执行时，状态才是最新的值。
  // 也就是先{a: 1, b: 2}，下次才是{b: 4 }...  
  console.log(counter)
  
  return [
    <div key="c">{counter.b}</div>
  ]
}