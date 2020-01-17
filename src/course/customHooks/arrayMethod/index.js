// 自定义hook是目前为止，解决逻辑片段复用的最佳方案。

// 这种思维和函数式编程思维有共通之处。

// 例如数组的forEach, map, filter等方法。在所有的for循环中，共同的逻辑是对每一个元素的遍历。我们可以将这个逻辑抽取出来。封装成为forEach

Array.prototype.forEach = function () {
  const arr = this
  const [callbackfn, thisArg] = [].slice.call(arguments) //[].slice.call(arguments)能将具有length属性的对象转成数组。
  if (typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + 'is not a function')
  }
  for (let i = 0; i < arr.lenght; i++) {
    callbackfn.call(thisArg, arr[i], i, arr)
  }
}

function map (arr, fn) {
  const res = []
  arr.forEach((item, i) => {
    res[i] = fn(item, i)
  })
  return res
}

function filter (arr, fn) {
  const res = []
  arr.forEach((item, i) => {
    const isOk = fn(item, i)
    if(isOk) {
      res.push(item)
    }
  })
  return res
}

let arr = [1, 2, 3]

let a = arr.map(item => item * 2)

let b = arr.filter(item => item === 2)

console.log('a', a)
console.log('b', b)