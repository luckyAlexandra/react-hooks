import React, {Component, PureComponent} from 'react'

class Row extends Component {
  render () {
    console.log('render row')
    const {item, style} = this.props;
    return (
      <tr style={style}>
        <td>{item.id}</td>
      </tr>
    )
  }
}

class Table extends Component {
  render() {
    console.log('render table')
    const {list} = this.props;
    const itemStyle = {
      color: 'red'
    }
    return (
      <table>
        <tbody>
          {list.map(item => <Row key={item.id} item={item} style={itemStyle} />)}
        </tbody>
      </table>
    )
  }
}

// class Table extends PureComponent {
//   render() {
//     const {list} = this.props;
//     const itemStyle = {
//       color: 'red'
//     }
//     return (
//       <table>
//         <tbody>
//           {list.map(item => <Row key={item.id} item={item} style={itemStyle} />)}
//         </tbody>
//       </table>
//     )
//   }
// }

export default class App extends Component {
  state = {
    list: Array(10).fill(0).map((val, index) => ({id: index}))
  }

  handleClick = () => {
    this.setState({
      otherState: 1
    })
  }

  render() {
    const {list} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>change state!</button>
        <Table list={list} />
      </div>
    );
  }
}