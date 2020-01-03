// demo-immer
import React, { useState } from 'react';
import produce from 'immer'

export default function App () {
  const [state, setState] = useState(() => {
    return {
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
  })

  const nextState = produce(state, draftState => {
    draftState.list[1].name = 'world2'
    draftState.title = 'zt'
  })
  return [
    <div key='a'>
      <button onClick={() => setState(nextState)}>setState</button>
      title: {state.title}
      {state.list.map((item) => {
        return (
          <div key={item.id}>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
          </div>
        )
      })}
    </div>
  ]
}