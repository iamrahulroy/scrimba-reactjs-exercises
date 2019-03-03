import React from 'react'
import ReactDOM from 'react-dom'

import TodoItem from "./TodoItem"
import todosData from "./todosData"

function TodoApp() {
  const todoComponents = todosData.map(item => <TodoItem key={item.id} todo={item} />)
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  )
}

export default TodoApp
