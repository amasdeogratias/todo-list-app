import React, { useState } from 'react'
interface TodoFormProps {
    addTodo: (newTodo: string) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodo !== "") {
            addTodo(newTodo);
            setNewTodo("");
        }
    }
  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="todo" 
            id="todo"
            value={newTodo}
            className='border border-gray-300 rounded px-2 py-1 flex-1'
            onChange={(e) => setNewTodo(e.target.value)} 
        />
        <button type="submit" className='bg-green-500 text-white rounded px-4 py-2 cursor-pointer'>Add Todo</button>
    </form>
  )
}

export default TodoForm
