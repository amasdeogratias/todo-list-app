import { useState } from 'react'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Todo App</h1>
      <TodoForm  />
    </div>
  )
}

export default App
