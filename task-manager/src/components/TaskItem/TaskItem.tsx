import React from 'react';
import type { TaskItemProps, TaskStatus} from '../../types';


// creating TaskItem a react function component  
export const TaskItem: React.FC<TaskItemProps> = 
//this function expects props shaped like the taskitemprops interface 
//this function is what will receive the props giving the function an object
(props) => {
//i created a handleChange function that will wait for an event and
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//program knows according to index.ts that it will be a string so use as to let it know that TaskStatus is valid
   const taskStatus = event.target.value as TaskStatus;

   //calling the callback function from TaskItemProps and it takes the id from the task thats showing. and taskStatus is the new status of task that the user selects.
    props.onStatusChange(props.task.id, taskStatus);}
    //this runs when the delete button is clicked calling the parents callback on the task id
    const handleDelete = () =>{
        props.onDelete(props.task.id);   
 };
//returns on taks
//uese props.task to show the properties of the task object
 return (
    <div className ="task">
        <h4>{props.task.title}</h4>
        <p> Due Date {props.task.dueDate}</p>
        <span>{props.task.priority}</span>
       <p>{props.task.description}</p>

    <label>
       Task Status:
    <select value= {props.task.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
    </select>
    </label>
        <button onClick={handleDelete}>Delete</button>
    </div>

 );};



