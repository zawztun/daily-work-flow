interface TodoItemListsProps{
  todo: Todo;
  toggleTodo: ToggleTodo
  deleteTodo:DeleteTodo
 
}


const TodoItemLists: React.FC<TodoItemListsProps> = ({ todo, toggleTodo, deleteTodo }) => {

  return (
    <div>
      <label style = {{textDecoration: todo.complete ? 'line-through' : undefined}} >
        <input type="checkbox" checked={todo.complete} onChange = {() =>{toggleTodo(todo)}} />
       {todo.text}
      </label>
       <button type = 'submit' onClick = {()=>deleteTodo(todo.text)}>X</button>
    </div>
  );
}

export default TodoItemLists;