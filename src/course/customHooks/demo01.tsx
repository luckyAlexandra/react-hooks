// 新的思维，当我们点击时，我们只关注数组A的变化！
// 数组变化之后会发生什么事情，全部都交给hook来处理。这些hook，可以是官方自定义的hook，如useEffect，也可以是我们自定义的hook，如此时的equalArr。
// 想想函数组件的一个特殊性：每次state改变，整个函数都会重新执行一次。
// 那么基于这个特殊性，在新的思维里，我们可以乘机将equalArr也重新执行一次，只要我们能够确保传入的两个比较值为最新值，那么就能够在每次执行时得到最新的比较结果。
// 这是一次思维方式的减负。利用这样的特性，当触发点击事件时，我们就不再关注额外的逻辑，而只需要关注数组A的变化即可。
// 在React Hooks中，这样的自定义方法，我们就可以称之为自定义Hooks。
import React, { useState } from 'react'
import {Button, Flex, Card} from 'antd-mobile'
import equalArr from './utils'
import './style.scss';

export default function App () {
  const [arrA, setArrA] = useState<number[]>([])
  const [arrB, setArrB] = useState<number[]>([])
  const isEqual = equalArr(arrA, arrB)

return (
    <div>
      <Flex className="queal_arr_container" justify="between" align="start">
        <Card className="inner left" title="左边数组arrA">
          <Button className="btn" onClick={() => setArrA([...arrA, 1])}>新增数字1到arrA</Button>
          {arrA.map((item, i) => (
            <div className="item" key={i}>{item}</div>
          ))}
          <Button className="btn" onClick={() => setArrA([...arrA, 2])}>新增数字2到arrA</Button>
        </Card>
        <Flex className="middle" justify="center" align="center">{isEqual.toString()}</Flex>
        <Card className="inner right" title="右边数组arrB">
          <Button className="btn" onClick={() => setArrB([...arrB, 1])}>新增数字1到arrB</Button>
          {arrB.map((item, i) => (
            <div className="item" key={i}>{item}</div>
          ))}        
          <Button className="btn" onClick={() => setArrB([...arrB, 2])}>新增数字2到arrB</Button>
        </Card>
      </Flex>
    </div>
  )
}