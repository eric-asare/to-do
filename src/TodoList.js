import React from 'react'
import Todo from './Todo'

function TodoList({ list , toggleTodo }) {
    return (
    
             list.map(todo => {
               return <Todo key = {todo.id} task = {todo} toggleTask = {toggleTodo}/>
            })
    
    )
}

export default TodoList
