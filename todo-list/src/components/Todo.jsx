import React from 'react'
import { FiEdit3 } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className='symbols'>
            <FiEdit3 id='edit' onClick={() => editTodo(task.id)}/>
            <MdOutlineDelete id='delete' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo
