// 这是一次思维方式的减负。利用这样的特性，当触发点击事件时，我们就不再关注额外的逻辑，而只需要关注数组A的变化即可。
// 在React Hooks中，这样的自定义方法，我们就可以称之为自定义Hooks。
import React, { useState } from 'react'
import { Button, Flex, Card } from 'antd-mobile'
import equalArr from './utils'
import './style.scss';

function useEqualArr () {
  const [arrA, setArrA] = useState<number[]>([])
  const [arrB, setArrB] = useState<number[]>([])
  const isEqual = equalArr(arrA, arrB)

  return {
    arrA,
    arrB,
    setArrA,
    setArrB,
    isEqual
  }
}

export default function App () {
  const {arrA, arrB, setArrA, setArrB, isEqual} = useEqualArr()
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