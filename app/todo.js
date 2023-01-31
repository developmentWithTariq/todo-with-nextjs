'use client'
import { METHODS } from 'http';
import { useRouter } from 'next/navigation';
import React from 'react'

async function update(id, isDone, refresh) {
    await fetch('http://localhost:3000/api/todo/update',{
        method: 'POST',
        body: JSON.stringify({id, isDone}),
    });
    refresh()
    
}

async function deleteTodo(id, refresh) {
  await fetch(`http://localhost:3000/api/todo/delete?id=${id}`,{
    method: "DELETE"
    }
  ) 
  refresh()
}

function Todo({todo}) {
  const router = useRouter();
  return (
    <>
        <input type="checkbox" onChange={(e) => update(todo.id,e.target.checked, router.refresh)} />
        {todo.name}
        <button onClick={(e)=> deleteTodo(todo.id, router.refresh)}>Delete</button>
    </>
  )
}

export default Todo