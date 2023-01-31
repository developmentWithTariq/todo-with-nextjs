import React from 'react'
import Todo from './todo'

const getTodos = async () => {
    let todos = await fetch('http://localhost:3000/api/todo/list');
    return todos.json()
}

const TodoList = async () => {
    const {todos}  = await getTodos()
  return (
    <div>
        <ul style={{ listStyleType: "none" , padding: 0}}>
            {todos.map((t)=> (
                 <li key={t.id} style={{padding: "5px 0"}}>                 
                    <Todo todo = {t} />
                </li>         
            )                          
            )}
        </ul>
   </div>
  )
}

export default TodoList