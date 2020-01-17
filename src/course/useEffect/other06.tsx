import React, {useState, useEffect} from 'react'
//# 关于依赖项不要对React撒谎
// function SearchResults() {
//   async function fetchData() {
//     // ...
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // Is this okay? Not always -- and there's a better way to write it.

//   // ...
// }

// “但我只是想在挂载的时候运行它！”，你可能会说。
// 现在只需要记住：如果你设置了依赖项，effect中用到的所有组件内的值都要包含在依赖中。这包括props，state，函数 — 组件内的任何东西。
// 有时候你是这样做了，但可能会引起一个问题。比如，你可能会遇到无限请求的问题，或者socket被频繁创建的问题。
// 解决问题的方法不是移除依赖项。我们会很快了解具体的解决方案。
// 不过在我们深入解决方案之前，我们先尝试更好地理解问题。

// # 如果设置了错误的依赖会怎么样呢？
export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('real', count)

  useEffect(() => {
    console.log('count', count)
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

// 这个例子只会递增一次。天了噜。

// 如果你知道依赖是我们给React的暗示，告诉它effect所有需要使用的渲染中的值，你就不会吃惊了。
// effect中使用了count但我们撒谎说它没有依赖。如果我们这样做迟早会出幺蛾子。

// 在第一次渲染中，count是0。因此，setCount(count + 1)在第一次渲染中等价于setCount(0 + 1) 。
// 既然我们设置了[]依赖，effect不会再重新运行，它后面每一秒都会调用setCount(0 + 1) ：

// # 两种诚实告知依赖的方法
// 第一种策略是在依赖中包含所有effect中用到的组件内的值。让我们在依赖中包含count：
// 第二种策略是修改effect内部的代码以确保它包含的值只会在需要的时候发生变更。我们不想告知错误的依赖 - 我们只是修改effect使得依赖更少。

// #让Effects自给自足
// 当我们想要根据前一个状态更新状态的时候，我们可以使用setState的函数形式：
// setCount(count + 1)改成setCount(c => c + 1)

// useEffect(() => {
//   const id = setInterval(() => {
//     setCount(c => c + 1);
//   }, 1000);
//   return () => clearInterval(id);
// }, []);