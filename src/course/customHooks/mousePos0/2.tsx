// 2. try refactoring the code a bit to use a <Mouse> component that encapsulates the behavior we need to reuse elsewhere.

// The <Mouse> component encapsulates the behavior we need...

// Now the <Mouse> component encapsulates all behavior associated with listening for mousemove events and storing the (x, y) position of the cursor, but it’s not yet truly reusable.
import React from 'react'

interface S {
  x: number,
  y: number
}

class Mouse extends React.Component<{}, S> {
  constructor (props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {x: 0, y: 0}
  }

  handleMouseMove (ev) {
    this.setState({
      x: ev.clientX,
      y: ev.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/* ...but how do we render something other than a <p>? */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse />
        <Mouse />
      </div>
    );
  }
}