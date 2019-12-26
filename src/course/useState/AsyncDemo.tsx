// setParam({ ...param, name });
// 改变param之后立即执行请求数据的代码
// 这里的问题是，因为异步的原因，param并不会马上发生变化，
// 此时直接发送请求无法拿到最新的参数

// 函数内定义为同步变量
// let param: Param = {}
// param = { ...param, name }
// 每次状态改变，函数都会重新执行一次，那么此时param也就被重置了。状态无法得到缓存。


// 模块中定义一个变量，并且在函数组件中访问，那么闭包就有了。
// let param: Param = {}
// param = { ...param, name }
// 善后工作还没有做，因为这个闭包中的变量，即使在组件被销毁了，它的值还会存在。
// 当新的组件实例被渲染，param就无法得到初始值了。因此这样的方式，我们必须在每一个组件被销毁时，做好善后工作。

// 我们知道useState其实也是利用闭包缓存了状态，并且即使函数多次执行，也只会初始化一次。
// 之前的问题在于我们使用了setParam去改变它的值，如果我们换一种思路呢？
// param.name = name;
import React, { useState } from 'react'

const listApi = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: [1, 2, 3]
      })
    }, 300)
  })
}

interface ListItem {
  name: string,
  id: number,
  thumb: string
}

interface Param {
  current?: number,
  pageSize?: number,
  name?: string,
  id?: number,
  time?: string
}

// let param: Param = {}

export default function AsyncDemo () {
  const [listData, setListData] = useState<ListItem[]>([])
  const [param, setParam] = useState<Param>({})
  // let param: Param = {}
  
  function fetchListData () {
    // @ts-ignore
    listApi(param).then(res => {
      setListData(res.data)
    })
  }

  function searchByName (name: string) {
    console.log('before change name')
    // param = {...param, name}
    // setParam({ ...param, name })
    param.name = name
    console.log('param', param)
    fetchListData()
  }

  function searchById (id: number) {
    console.log('before change id')
    // param = {...param, id}
    param.id = id
    console.log('param', param)
    fetchListData()
  }

  return [
    <div key="a">{listData.map(item => item)}/{listData.length}</div>,
    <button key="b" onClick={() => searchByName('Jone')}>search by Name Jone</button>,
    <button key="c" onClick={() => searchById(1)}>search by Id</button>,
    <button key="d" onClick={() => searchByName('Zp')}>search by Name Zp</button>,
  ]
}