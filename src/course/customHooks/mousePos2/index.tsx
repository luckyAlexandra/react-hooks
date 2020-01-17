import React from 'react'
import Mouse from './Mouse'

export default function MousePos () {
  return (
    <div>
      <Mouse
        render={({x, y}) => (
          <div>x: {x}, y: {y}</div>
        )}
      />
    </div>
  )
}