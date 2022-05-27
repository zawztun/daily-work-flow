import React from 'react'

interface TodoItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
  deleteTodo:DeleteTodo
}

const TodoItem:React.FC<TodoItemProps> = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <div style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      <input type="checkbox"  checked = {todo.completed} onChange = {()=>toggleTodo(todo)}/>
      <span>{todo.text}</span>
      <button onClick = {()=>deleteTodo(todo.text)}>X</button>
    </div>
  )
}

export default TodoItem