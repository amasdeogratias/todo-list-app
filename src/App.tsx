import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo: AddTodo = newTodo => {
    if(newTodo !== "") {
      console.log("New Todo:", newTodo)
      setTodos([...todos, newTodo])
    }
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className='mt-4 bg-black rounded-md'>
        <TodoList todos={todos} setTodos={setTodos}  />
      </div>
    </div>
  )
}

export default App
