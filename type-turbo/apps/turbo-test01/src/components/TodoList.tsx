import React from 'react'
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: Todo[]
  toggleTodo: ToggleTodo
  deleteTodo:DeleteTodo
}
 
const TodoList:React.FC <TodoListProps>= ({todos,toggleTodo, deleteTodo}) => {
  return (
    <div>
      {todos.map(todo => <TodoItem todo={todo} toggleTodo={toggleTodo}
      deleteTodo = {deleteTodo}/>)}
    </div>
  )
}

export default TodoList