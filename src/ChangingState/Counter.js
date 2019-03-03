import React from 'react'
import Button from 'react-bootstrap/Button'


class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className='btn btn-success mr-1' onClick={this.increment}>Increment</button>
        <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
