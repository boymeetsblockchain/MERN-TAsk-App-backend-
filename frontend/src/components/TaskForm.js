import React from 'react'

function TaskForm({createTask,name, handleinputChange}) {
  return (
    <form className='task-form'  onSubmit={createTask}>
        <input type="text" placeholder='Add a Task' name="name" value={name} onChange={handleinputChange}/>
        <button type='submit'>
            Add 
        </button>
    </form> 
  )
}

export default TaskForm