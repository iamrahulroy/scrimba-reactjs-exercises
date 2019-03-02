import React from 'react'

import TodoItem from "./TodoItem"
import todosData from "../TodoAppPhase3/todosData"

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todosItems = this.state.todos.map(item => <TodoItem key={item.id} todo={item} />)

    return (
      <div className="todo-list">
        {todosItems}
      </div>
    )
  }
}

export default TodoApp
