import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";
import {Task} from  "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
    //set the status (pending, in progress and completed)
const [status, setStatus]  =  useState<TaskStatus>;
const [priority, setPriority] = useState<{Task.priority}>

const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
};


    return(
    <div className="filter"> 
    <label>Select Status:</label>
        <select className="Priorityropdown">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
        </select>
        <p>Selected: {}</p>

    </div>
    
)


