type Todo = {
  text: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
type DeleteTodo = (selectedTodo: string) => void;