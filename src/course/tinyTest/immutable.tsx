import React from 'react'
import { fromJS } from 'immutable'

interface State {
  title: string,
  list: Item[]
}

interface Item {
  id: number,
  name: string
}

export default function App() {
  const stateMap = fromJS({
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
  })


  const newStateMap  = stateMap.updateIn(['list'], list => {
    return list.update(1, item => item.set('name', 'world2'))
  })

  let immutableObj = newStateMap.toJS()
  console.log(immutableObj)

  return [
    <div>
      title: {immutableObj.title}
      {immutableObj.list.map((item) => {
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