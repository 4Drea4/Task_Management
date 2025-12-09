import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
const [filter, setFilter] = useState<TaskStatus>('Medium');
const handleFilterChange = (event: React.ChangeEvent<>)
}


    return(
    <div className="filter"> 
    <label>Select Status:</label>
        <select className="StatusDropdown">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
        </select>
        <p>Selected: {}</p>

    </div>
    
)


