import React, { useState } from 'react'

interface Item {
  id: number
}

function Row (props) {
  console.log('row')
  const {item} = props
  return (
    <tr>
      <td>{item.id}</td>
    </tr>
  )
}

// If your function component renders the same result given the same props, 
// you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.

const Table = React.memo(function Table (props: {list:Item[]}) {
  console.log('render Table', props)
  let {list} = props
  return (
    <table>
      <tbody>
        {list.map(item => <Row key={item.id} item={item}/>)}
      </tbody>
    </table>  
  )
})

export default function App () {
  let [otherState, setOtherState] = useState(0)
  let [list, setList] = useState(() => {
    return Array(10).fill(0).map((val, index) => ({id: index}))
  })
  return (
    <div>
      <button onClick={() => setOtherState(otherState + 1)}>change state!</button>
      otherState:{otherState}
      <Table list={list} />
  </div>
  )
}