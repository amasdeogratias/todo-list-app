import React from "react";

interface TodoListProps {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    const deleteTodoItem = (index: number) => {
        // Logic to delete the todo item
        console.log("Delete Todo at index:", index);
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };
  return (
    <div className="mt-4">
      <ul className="text-white">
            {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500 accent-green-500 focus:ring-2 focus:ring-green-400 transition-all"
                />
                <span className="ml-3 px-2 text-lg">{todo}</span>
                </div>
                <button className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deleteTodoItem(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
