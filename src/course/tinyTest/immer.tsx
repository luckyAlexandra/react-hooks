import React, { useState } from 'react';
import produce from 'immer'

interface State {
  title: string,
  list: Item[]
}

interface Item {
  id: number,
  name: string
}

export default function App () {
  const state = {
    title: 'zp',
    list: [
      {
        id: 1,
        name: 'hello'
      }, {
        id: 2,
        name: 'world'
      }
    ]
  }
  const nextState = produce(state, draftState => {
    draftState.list[1].name = 'world2'
    draftState.title = 'zt'
  })
  return [
    <div>
      title: {nextState.title}
      {nextState.list.map((item) => {
        return (
          <>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
          </>
        )
      })}
    </div>
  ]
}