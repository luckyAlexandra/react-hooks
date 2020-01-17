import React from 'react'

interface Props {
  render: (props: {x: number, y: number}) => any
}

export default class Mouse extends React.Component<Props> {
  state = {x: 0, y: 0}

  handleMouseMove = (ev: any) => {
    this.setState({
      x: ev.clientX,
      y: ev.clientY
    })
  }

  render () {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}