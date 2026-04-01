interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type AddTodo = (newTodo: string) => void;
