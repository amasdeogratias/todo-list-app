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
    <form className='flex flex-col gap-3 sm:flex-row' onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="todo" 
            id="todo"
            placeholder='Add a new task'
            value={newTodo}
            className='flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100'
            onChange={(e) => setNewTodo(e.target.value)} 
        />
        <button type="submit" className='cursor-pointer rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700'>Add Todo</button>
    </form>
  )
}

export default TodoForm
