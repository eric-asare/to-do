import React from 'react'

function Todo({task , toggleTask}) {

    function handleToggleTaskOnClick(){
        toggleTask(task.id)
    }

    return (
        <div>
            <label>
            <input type = "checkbox" checked = {task.isComplete} onChange = {handleToggleTaskOnClick}></input>
            {task.name}
            </label>
           
        </div>
    )
}

export default Todo
