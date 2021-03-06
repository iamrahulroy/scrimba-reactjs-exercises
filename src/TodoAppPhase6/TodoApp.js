import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todosItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleChange} todo={item} />)

    return (
      <div className="todo-list">
        {todosItems}
      </div>
    )
  }
}

export default TodoApp
