import React, { useState, useEffect } from 'react';

// # 每次渲染都有它自己的Effects
// 抛一个问题给你：effect是如何读取到最新的count 状态值的呢？
// 我们已经知道count是某个特定渲染中的常量。事件处理函数“看到”的是属于它那次特定渲染中的count状态值。对于effects也同样如此：
// 并不是count的值在“不变”的effect中发生了改变，而是effect 函数本身在每一次渲染中都不相同。
// 每一个effect版本“看到”的count值都来自于它属于的那次渲染：
// React会记住你提供的effect函数，并且会在每次更改作用于DOM并让浏览器绘制屏幕后去调用它。
// 所以虽然我们说的是一个 effect（这里指更新document的title），但其实每次渲染都是一个不同的函数 — 并且每个effect函数“看到”的props和state都来自于它属于的那次特定渲染。
//**概念上，你可以想象effects是渲染结果的一部分。** 严格地说，它们并不是。但是在我们构建的心智模型上，effect函数属于某个特定的渲染，就像事件处理函数一样。

export default function Counter () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log('you clicked ' + count + ' times')
      document.title =  count + ''
    }, 3000)
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

// 到目前为止，我们可以明确地喊出下面重要的事实：每一个组件内的函数（包括事件处理函数，effects，定时器或者API调用等等）会捕获某次渲染中定义的props和state。
// 在组件内什么时候去读取props或者state是无关紧要的。因为它们不会改变。在单次渲染的范围内，props和state始终保持不变。（解构赋值的props使得这一点更明显。）
// 当然，有时候你可能想在effect的回调函数里读取最新的值而不是捕获的值。最简单的实现方法是使用refs