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
//handleChange function with a target on the select elements for both priority and status
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   const {name, value} = event.target ;//name can be either status or priority and the value is what they choose

   //take the object and update the part that changes
   const updateFilters: Filters = {
    ...filters,
    [name] : value
   };
   setFilters(updateFilters);
   onFilterChange(updateFilters);

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

}
