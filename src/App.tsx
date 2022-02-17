import Todolist from "./components/Todolist";
import { useState } from "react";
import Form from "./components/Form";
import './App.css'

const initialTodos:Todo[] = [
  { text: 'walking the dog', complete: true },
  {text:'writing the app', complete:false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodo = todos.map((todo) => {
      if (selectedTodo === todo) {
        return {
          ...todo, complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodo)
  }; 

    const deleteTodo: DeleteTodo = (selectedTodo:string) => {
    setTodos(todos.filter((todo)=> todo.text !== selectedTodo))

  };

  const addTodo:AddTodo = newTodo => {
   newTodo.trimEnd() !== '' && setTodos([...todos, {text:newTodo, complete:false}])
  }
  return (
    <div className = "App">
      <Form addTodo = {addTodo} />
        <Todolist todos = {todos} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo}/>
    </div>
  );
}

export default App;