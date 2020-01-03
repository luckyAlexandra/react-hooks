// demo-immutable
import React, { useState } from 'react'
import { fromJS } from 'immutable'

export default function App() {
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
  const stateMap = fromJS(state)

  const newStateMap  = stateMap.updateIn(['list'], list => {
    return list.update(1, item => item.set('name', 'world2'))
  })

  let immutableObj = newStateMap.toJS()
  console.log(immutableObj)

  return (
    <div>
      <button onClick={() => setState(immutableObj)}>setState</button>
      title: {state.title}
      {state.list.map((item) => {
        return (
          <div key={item.id}>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
          </div >
        )
      })}
    </div>
  )
}