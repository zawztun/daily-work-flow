import { useState, ChangeEvent ,FormEvent} from "react";

interface FormProp{
  addTodo: AddTodo
}
const Form:React.FC <FormProp>= ({addTodo}) => {
  const [newTodo, setNewTodo] = useState('');

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value)
  }

  const addhandleSubmit = (e:FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }
 
  return (
    <div>
      <input type="text" value={newTodo} onChange = {onChangeHandler}/>
      <button type='submit' onClick={addhandleSubmit}>Add Todo</button>
      
    </div>
  );
}

export default Form;