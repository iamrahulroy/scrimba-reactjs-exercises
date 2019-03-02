import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Greeting from './Greeting'

class ClassBasedComponents extends React.Component {
  render() {
    return (
      <div>
        <Header username="Rahul" />
        <Greeting />
      </div>
    )
  }
}

export default ClassBasedComponents
