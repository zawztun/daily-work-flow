import React,{useState,ChangeEvent,FormEvent} from 'react'

interface TodoFormProps {
  addTodo:AddTodo
}

const Form:React.FC<TodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState('')
  
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
  setNewTodo(e.target.value)
  }
  const onFormSubmit = (e:FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo)
  }
  return (
    <div>
      <input type="text"  value = {newTodo} onChange = {onChangeHandler}/>
      <button type = 'submit' onClick={onFormSubmit}>Add</button>
    </div>
  )
}

export default Form