import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    console.log(task,'task')

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type="text" placeholder=" Update Add todo..." value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button className='todo-btn' type='submit'> Update</button>
      </form>
    </div>
  )
}

export default EditTodoForm
