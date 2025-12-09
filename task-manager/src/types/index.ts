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
    tasks : Task [];
    //function prop,
    onStatusChange : (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

//taskitem component 

export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId:string) => void;
}