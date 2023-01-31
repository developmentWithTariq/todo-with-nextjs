'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { createTypeReferenceDirectiveResolutionCache } from 'typescript'

async function addTodo(name, refresh) {
  await fetch('http://localhost:3000/api/todo/add',{
    method: "POST",
    body: JSON.stringify({name})
  })
  refresh()
}

const AddNewTodo = () => {
  const router = useRouter()
  let [name, setName] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=> setName(e.target.value)} />
        <button onClick={ async () => {
          await addTodo(name, router.refresh)
          setName("")
        }}>Add</button>
  </div>
  )
}

export default AddNewTodo