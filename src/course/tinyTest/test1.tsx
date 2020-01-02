import React, { useState } from 'react'

function Content () {
  console.log('render Content')
  return (
    <div>Content</div>
  )
}

export default function App () {
  console.log('render App')
  let [state, setState] = useState({})
  return (
    <div>
      <button onClick={() => setState({a: 1})}>setState</button>
      <Content/>
    </div>   
  )
}