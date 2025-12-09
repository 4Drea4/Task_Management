import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import {Filters} from  "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
    //set the status (pending, in progress and completed)

const [filters, setFilters]  =  useState<Filters>({
    status: "",
    priority: ""
});
//start on blank filter selection ^

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   const {name, value} = event.target //name can be either status or priority
   const updateFilters: Filters = {
    ...filters,
    [name] : value
   };

};

}



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


