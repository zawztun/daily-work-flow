
import TodoItemLists from "./TodoItemLists";

interface TodolistProp{
  todos: Todo[]
  toggleTodo: ToggleTodo
  deleteTodo: DeleteTodo
}

const Todolist:React.FC <TodolistProp>= ({todos,toggleTodo,deleteTodo}) => {
  return (
    <ul>
      {
        todos.map(todo => <TodoItemLists key={todo.text} todo={todo}
          toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
      }    
    </ul>
  
  );
}

export default Todolist;
