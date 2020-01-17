// 1.As the cursor moves around the screen, the component displays its (x, y) coordinates in a <p>.
import React from 'react'
interface S {
  x: number,
  y: number
}
export default class MouseTracker extends React.Component<{}, S> {
  constructor (props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {x: 0, y: 0}
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}