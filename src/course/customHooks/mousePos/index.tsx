import React from 'react'
import usePointer from './usePointer'

export default function MousePos () {
  const {position, handleMouseMove} = usePointer()
  return (
    <div onMouseMove={handleMouseMove} style={{width: 500, height: 500}}>
      <div>x: {position.x}, y: {position.y}</div>
    </div>
  )
}