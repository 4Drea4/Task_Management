import React, {useState} from 'react';
import type { Task, TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> =
const [task, setTask] = 
return(
    <form onSubmit={}>
        <label>Add Task:</label>
        <input
        type='text'
        id='task'
        />
        <button type="submit">Add</button>



    </form>
)