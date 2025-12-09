export type TaskStatus ='pending' | 'in-progress' | 'completed';


//task list component that manages and display a list of tasks

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}
//parent must pass in 
export interface TaskListProps {
    //must be a prop called tasks and it must be an array of objects
    //has to be a task object from task interface
    tasks : Task [];
    //function prop, the parent that has to give tasklist a function with these requirements so when status changes call on this function 
    onStatusChange : (taskId: string, newStatus: TaskStatus) => void;
    //function prop: when task is deleted call the function using task id
    onDelete: (taskId: string) => void;
}

//component that displays individual task information.
    //props for a taskitem component

export interface TaskItemProps {
    task: Task;//task will receive one item 

    // this function will be passed down from the parent
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;

    onDelete: (taskId:string) => void;
}

// create a TaskFilter component that allows filtering tasks by status and TaskPriorityChangeEvent

export interface TaskFilterProps{
    onFilterChange: (filters:{
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high' ;
    }) => void;
}