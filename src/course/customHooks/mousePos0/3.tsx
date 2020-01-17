// As a first pass, you might try rendering the <Cat> inside <Mouse>’s render method, like this

// This approach will work for our specific use case, but we haven’t achieved the objective of truly encapsulating the behavior in a reusable way.
import React from 'react'

interface S {
  x: number,
  y: number
}

interface P {
  mouse: S
}

class Cat extends React.Component<P, S> {
  render() {
    const mouse = this.props.mouse;
    return (
      // <img src="./cat.JPG" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="cat"/>
      <div style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 10, height: 10, background: 'red'}}></div>
    );
  }
}

class MouseWithCat extends React.Component<{}, S> {
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
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <Cat mouse={this.state} />
      </div>
    )
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    );
  }
}