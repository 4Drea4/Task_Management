import React from 'react';
import type { Task, TaskItemProps, TaskStatus} from '../../types';

export const TaskItem: React.FC<TaskItemProps> = (props) => {
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  
   const value = event.target.value;
    props.onStatusChange(props.task.id, taskStatus);}


 return (
    <div className ="task">
        <h4>{props.task.title}</h4>
        <p> Due Date {props.task.dueDate}</p>
        <span>{props.task.priority}</span>
       <p>{props.task.description}</p>

 
   


        <button>Delete</button>
    </div>

 );};



