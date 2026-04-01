import React, { useState } from "react";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const deleteTodoItem = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const startEditingTodo = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingText(todo.text);
  };

  const saveEditedTodo = (id: string) => {
    const trimmedText = editingText.trim();

    if (trimmedText === "") {
      return;
    }

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo,
      ),
    );
    setEditingTodoId(null);
    setEditingText("");
  };

  const cancelEditingTodo = () => {
    setEditingTodoId(null);
    setEditingText("");
  };

  return (
    <div className="mt-6">
      {todos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
          <p className="text-lg font-semibold text-slate-700">No tasks yet</p>
          <p className="mt-2 text-sm text-slate-500">
            Add your first todo above to start organizing your work.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoCompletion(todo.id)}
                  className="h-5 w-5 shrink-0 accent-green-600"
                />
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={editingText}
                    className="ml-3 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEditedTodo(todo.id);
                      }

                      if (e.key === "Escape") {
                        cancelEditingTodo();
                      }
                    }}
                  />
                ) : (
                  <span
                    className={`ml-3 break-words pr-2 text-base font-medium ${todo.completed ? "text-slate-400 line-through" : "text-slate-800"}`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {editingTodoId === todo.id ? (
                  <button
                    className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                    onClick={() => saveEditedTodo(todo.id)}
                    type="button"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900"
                    onClick={() => startEditingTodo(todo)}
                    type="button"
                  >
                    Edit
                  </button>
                )}
                <button
                  className="rounded-xl bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
                  onClick={() => deleteTodoItem(todo.id)}
                  type="button"
                  aria-label="Delete todo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
