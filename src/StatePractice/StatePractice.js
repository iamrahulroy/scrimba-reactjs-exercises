import React, {Component} from 'react'

class StatePractice extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Rahul',
      age: 26,
      isLoggedIn: true
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
        <p>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}!</p> 
      </div>
    )
  }
}

export default StatePractice
