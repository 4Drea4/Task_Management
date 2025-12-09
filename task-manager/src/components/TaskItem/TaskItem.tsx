import React from 'react';
import type { Task, TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = (props) => ({
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const taskStatus = event.target.value;
}

})
 return (

    <div className = "tasks">

        <form onSubmit={}>
    <label>Add Task:</label>
    <input
    type='text'
    id='task'
    />
    </form>



        <button>Delete</button>
    </div>


    




)


 )
   