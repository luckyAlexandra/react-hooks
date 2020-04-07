// 代码的实现思路来自于redux。

// 从代码中可以看出，该方法并非真正意义上合并了reduer，而是通过闭包的方式，执行所有的reducer，返回了一个合并之后的Store。

interface InterationOB {
  [key: string]: any
}

// 参数为一个对象，里面有所有的reducer
const combineReducer = (reducers: InterationOB) => {
  // 取得所有 key
  const reducerKeys = Object.keys(reducers);
  // 合并之后的State放在这里
  let objInitState: InterationOB = {};

  // 检查每一项是否有默认值
  reducerKeys.forEach(key => {
    // 传入空的type，获取默认值，这样写了之后，action的类型就只能是 { type: 'xxx', } 这种格式了
    const initState = reducers[key](undefined, {type: ''})
    if (initState === undefined) {
      throw new Error(`${key} does not return state.`)
    }
    objInitState[key] = initState;
  })

  // 返回的函数里执行每一项reducer，最终返回合并之后的state
  return (state?: any, action?: any) => {
    if (action) {
      reducerKeys.forEach(key => {
        const previousState = objInitState[key];
        objInitState[key] = reducers[key](previousState, action);
      })
    }
    return {...objInitState};
  }
}

export default combineReducer;