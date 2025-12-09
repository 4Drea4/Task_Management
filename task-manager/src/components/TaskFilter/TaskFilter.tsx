import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import type {Filters} from  "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
    //set the status (pending, in progress and completed)

const [filters, setFilters]  =  useState<Filters>({});
//start on blank filter selection ^
//handleChange function with a target on the select elements for both priority and status
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   const {name, value} = event.target ;//name can be either status or priority and the value is what they choose

   //take the object and update the part that changes
   const updateFilters: Filters = {
    ...filters,
    [name] : value
   };
   setFilters(updateFilters); //update state
   onFilterChange(updateFilters); //gives to my parent 

};

    return(
    <div className="filter"> 
{/* select status */}
    <label>Select Status:</label>
        <select name="status" className="status" value={filters.status} onChange={handleChange}>

                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
        </select>
{/* select priority  */}
        <label>Select Priority:</label>
        <select name="priority" className="priority" value={filters.priority} onChange={handleChange}>

                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
        </select>

    </div>
    
)

}
