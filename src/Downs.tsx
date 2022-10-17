import React, { useState } from 'react'
import './downs.css'
import { ITask } from './interfaces'


interface props{
  task:ITask;
  completeTask(taskNameToDelete :string) :void
}

function Downs({task,completeTask}:props) {
  
  

    return (
    <div className='downs'>
        
        <div className='content'>
            <span> {task.taskName}</span>
            
            <span>{task.deadLine} days</span>
            <p></p>
        </div>
        <button onClick={()=>{completeTask(task.taskName)}} className='del-btn'>X</button>
    </div>
  )
}

export default Downs