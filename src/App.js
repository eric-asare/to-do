import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'storeKey'
function App() {
  const [todos, setTodos]= useState([])
  const todoNameRef =  useRef()

  // load from local storage once page reload
  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  //save to local storage
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])


 function toggleTodo(id){
   const newTodos = [...todos]
   const  taskToToggle =  newTodos.find(todo => todo.id === id)
   taskToToggle.isComplete = !taskToToggle.isComplete

   setTodos(newTodos)

 }


  function addTask(e){
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos =>{
      return [...prevTodos,{id: uuidv4(), name: name , isComplete: false}]
    }
      
    )
    todoNameRef.current.value = null
  }


  function handleClearComplete(e){
    const newTodos = todos.filter(task => !task.isComplete)
    setTodos(newTodos)
  }

  return (
    //fragment
    <>
       <TodoList list = {todos} toggleTodo = {toggleTodo}/>
       <input ref = {todoNameRef} type = 'text' />
       <button onClick = {addTask}>Add To</button>
       <button onClick = {handleClearComplete} >Clear Complete</button>
       <div> {todos.filter((task)=> !task.isComplete).length} left to do </div>
    </>
 
  )
}

export default App;
