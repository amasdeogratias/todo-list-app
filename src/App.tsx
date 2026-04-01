import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: AddTodo = (newTodo) => {
    const trimmedTodo = newTodo.trim();

    if (trimmedTodo !== "") {
      setTodos((currentTodos) => [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          text: trimmedTodo,
          completed: false,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Task Manager
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Todo App</h1>
          <p className="mt-2 text-base text-slate-600">
            Track your tasks, update them quickly, and keep completed work easy
            to spot.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
