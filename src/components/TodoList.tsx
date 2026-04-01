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
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
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
                todo.id === id ? { ...todo, text: trimmedText } : todo
            )
        );
        setEditingTodoId(null);
        setEditingText("");
    };

    const cancelEditingTodo = () => {
        setEditingTodoId(null);
        setEditingText("");
    };

  return (
    <div className="mt-4">
      <ul className="text-white">
            {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoCompletion(todo.id)}
                    className="form-checkbox h-5 w-5 text-green-500 accent-green-500 focus:ring-2 focus:ring-green-400 transition-all"
                />
                {editingTodoId === todo.id ? (
                    <input
                        type="text"
                        value={editingText}
                        className="ml-3 px-2 py-1 text-lg text-black border border-gray-300 rounded"
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
                    <span className={`ml-3 px-2 text-lg ${todo.completed ? "line-through text-gray-400" : ""}`}>
                        {todo.text}
                    </span>
                )}
                </div>
                <div className="flex items-center">
                    {editingTodoId === todo.id ? (
                        <button
                            className="ml-4 p-1 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => saveEditedTodo(todo.id)}
                            type="button"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="ml-4 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => startEditingTodo(todo)}
                            type="button"
                        >
                            Edit
                        </button>
                    )}
                    <button className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deleteTodoItem(todo.id)} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
