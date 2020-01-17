// #那Effect中的清理又是怎样的呢？
// React只会在浏览器绘制后运行effects。这使得你的应用更流畅因为大多数effects并不会阻塞屏幕的更新。
// Effect的清除同样被延迟了。**上一次的effect会在重新渲染后被清除**：

// React 渲染{ id: 20 } 的UI。
// 浏览器绘制。我们在屏幕上看到{ id: 20 } 的UI。
// React 清除{ id: 10 } 的effect。
// React 运行{ id: 20 } 的effect。

// React会根据我们当前的props和state同步到DOM。“mount”和“update”之于渲染并没有什么区别。
// 你应该以相同的方式去思考effects。useEffect使你能够根据props和state同步React tree之外的东西。

// 这就是和大家熟知的mount / update / unmount心智模型之间细微的区别。 理解和内化这种区别是非常重要的。
// 如果你试图写一个effect会根据是否第一次渲染而表现不一致，你正在逆潮而动。

// 不过话说回来，在每一次渲染后都去运行所有的effects可能并不高效。（并且在某些场景下，它可能会导致无限循环。）
// 所以我们该怎么解决这个问题？