// Here’s where the render prop comes in: Instead of hard-coding a <Cat> inside a <Mouse> component, and effectively changing its rendered output, we can provide <Mouse> with a function prop that it uses to dynamically determine what to render–a render prop.

// More concretely, a render prop is a function prop that a component uses to know what to render.

import React from 'react'

interface S {
  x: number,
  y: number
}

interface PCat {
  mouse: S,
}

interface PMouse {
  render: (mouse: S) => JSX.Element
}

class Cat extends React.Component<PCat, S> {
  render () {
    const mouse = this.props.mouse
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 10, height: 10, background: 'red'}}></div>
    )
  }
}

class Mouse extends React.Component<PMouse, S> {
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
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>      
    )
  }
}

export default class MouseTracker extends React.Component {
  render () {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    ) 
  }
}