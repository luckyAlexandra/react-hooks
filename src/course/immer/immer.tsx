import React from 'react';
import produce from 'immer'

export default function Demo() {
  const baseState = [
    {
      todo: "Learn typescript",
      done: true
    },
    {
      todo: "Try immer",
      done: false
    }
  ]

  // @ts-ignore
  // const nextState = [].concat(baseState)
  // nextState.push({ todo: "Tweet about it" })
  // nextState[0].done = false
  // console.log('len', baseState.length, nextState.length) // 2 3
  // console.log('done', baseState[0].done, nextState[0].done) // false false

  const nextState = produce(baseState, draftState => {
      // @ts-ignore
      draftState.push({todo: "Tweet about it"})
      draftState[1].done = true
  })
  console.log('len', baseState.length, nextState.length) // 2 3
  console.log('done', baseState[1].done, nextState[1].done) // false true

  return [
    <div>
      {nextState.map((item) => {
        return (
          <>
          <div>{item.done}</div>
          <div>{item.todo}</div>
          </>
        )
      })}
    </div>
  ]
}