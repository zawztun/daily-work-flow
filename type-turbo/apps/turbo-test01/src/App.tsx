
// import { useState } from 'react';
// import './App.css';
// import Form from './test/Form';
// import TodoList from "./test/TodoList";



// const initialTodos:Todo[] = [
  
// ]

// const App: React.FC = () => {

//   const [todos, setTodos] = useState(initialTodos);
  
//   const toggleTodo:ToggleTodo = (selectedTodo) => {
//     const newTodos = todos.map(todo => {
//       if (todo === selectedTodo) {
//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       }
//       return todo;
//     });
//     setTodos(newTodos)
//   }
  
//   const deleteTodo:DeleteTodo = selectTodo => {
//     setTodos(todos.filter(todo=> todo.text !== selectTodo))
//   }
  
//   const addTodo:AddTodo = (newTodo) => {
//     setTodos([...todos, {text:newTodo, completed:false}])
//   }
    
//   return (
//     <div className ="App">
//       <h1>TodoList </h1>
//       <Form  addTodo = {addTodo}/>
//       <TodoList todos={todos}
//         toggleTodo={toggleTodo}
//         deleteTodo = {deleteTodo}
//        />
//    </div>
    
//  ) 
// }

// export default App;



import './App.css'
import React, { useState } from 'react'

import TodoList from "./components/TodoList";
import Form from './components/Form';

const initialTodos:Todo[] = [{ text: 'Learn TypeScript', completed: true}, { text: 'Learn React', completed: false }, { text: 'Learn Redux', completed: false }];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo:ToggleTodo = (selectedTodo) => {
    const item = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo, completed:!todo.completed
        }
      }
      return todo;
    })
    setTodos(item)  
  }
  const addTodo: AddTodo = (newTodo) => {
   setTodos([...todos,{text:newTodo, completed:false}])
  }

  const deleteTodo:DeleteTodo = (selectTodo) => {
    setTodos(todos.filter(todo => todo.text !== selectTodo))
  }
  return (
    <div className='App'>
      <h1>TodoList Typscript</h1>
      <Form addTodo = {addTodo}/>
      <TodoList todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo = {deleteTodo}/>
    </div>

  )
}

export default App


