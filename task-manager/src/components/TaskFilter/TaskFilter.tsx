import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";
import {TaskPriority} from  "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
    //set the status (pending, in progress and completed)
const [status, setStatus]  =  useState<TaskStatus>;
const [priority, setPriority] = useState<TaskPriority>

const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
};

//onfilterchange will need to take in an object of filters if i keep two use states.


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


