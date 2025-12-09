import React from 'react';
import type { Task, TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = (props) => ({
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const taskStatus = event.target.value;
    props.onStatusChange(props.task.id, taskStatus)''
};

 return (
    <div className ="task">

       
    <label>Add Task:</label>
    <input
    type='text'
    id='task'
    />
    </form>



        <button>Delete</button>
    </div>

 )}
    


