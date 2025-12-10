import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import type { TaskListProps } from "../../types";


// TaskList is a react component that has a type of tasklistprops
// it takes the array of tasks and callback functions on status and ondelete as props
export const TaskList: React.FC<TaskListProps> = (props) => {
    //we are returning
    return (
        <div>
            
            {/* looping over the tasks array from the tasklist prop and renders one taskitem per task */}
            {props.tasks.map((taskObj) => {
            return (
                <div key={taskObj.id}>
                    <TaskItem
                    task={taskObj}
                    onStatusChange={props.onStatusChange}
                    onDelete={props.onDelete}
                    />
                    </div>
             );
            } )}
        </div>
 );
};


    
    
    