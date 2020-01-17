import React, { useState } from 'react';

// # 每一次渲染都有它自己的 Props and State
//  值得强调的是 —我们的组件函数每次渲染都会被调用，但是每一次调用中count值都是常量，并且它被赋予了当前渲染中的状态值。
// 在任意一次渲染中，**props和state是始终保持不变的**。
// 如果props和state在不同的渲染中是相互独立的，那么使用到它们的任何值也是独立的（包括事件处理函数）。它们都“属于”一次特定的渲染。
// 即便是事件处理中的异步函数调用“看到”的也是这次渲染中的count值。

// 备注：这里我将具体的count值直接内联到了handleAlertClick函数中。
// 这种心智上的替换是安全的因为count 值在某次特定渲染中不可能被改变。它被声明成了一个常量并且是一个数字。
// 这样去思考其他类型的值比如对象也同样是安全的，当然需要在我们都同意应该避免直接修改state这个前提下。
// 通过调用setSomething(newObj)的方式去生成一个新的对象而不是直接修改它是更好的选择，因为这样能保证之前渲染中的state不会被污染。
export default function Counter () {
  const [count, setCount] = useState(0)

  function handleAlertClick () {
    setTimeout(() => {
      alert('you clicked ' + count + ' times')
    }, 3000)
  }

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={handleAlertClick}>show alert</button>
    </div>
  )
}