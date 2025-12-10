import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskItem } from './components/TaskItem/TaskItem' 
import {useState} from 'react'
 import {TaskList}  from './components/TaskList/TaskList' 
import { Task , TaskStatus } from './types'


export default function App(){
const [tasks, setTasks] = useState<Task>([
  {
    id: "P4-1",
    title: "Walk my fish",
    description:
     "It's sandwich day. Every Thursday, I take Pudge the fish a peanut butter sandwich. But today, we were out of peanut butter. So I asked my sister what to give him, and she said 'a tuna sandwich.' I can't give Pudge tuna! Do you know what tuna is..It's fish! If I give Pudge tuna, I'd be an abomination! I'm late because I had to go to the store and get peanut butter 'cause all we have is.. is.. is stinkin' tuna!",
    status: "pending",
    priority: "high",
    dueDate: "12/10/25"
  },
  {
    id: "P4-2",
    title: "Wallow in self pity",
    description: "4:00, wallow in self-pity; 4:30, stare into the abyss; 5:00, solve world hunger, tell no one; 5:30, jazzercize; 6:30, dinner with me—I can't cancel that again; 7:00, wrestle with my self-loathing. I'm booked!",
    status: "pending",
    priority: "low",
    dueDate: "12/25/25"
  },
  {
    id: "P4-3",
    title: "Hello Sweetie",
    description: "Save the tardis",
    status: "completed",
    priority: "medium",
    dueDate: "12/20/25"
  },

]);
//  Help from Eduart right here

// handle status
function handleStatusChange(taskId: string, newStatus: TaskStatus) {
  setTasks((prevTasks) => 
    prevTasks.map((task => 
      task.id === taskId ? {...task , status: newStatus} :task 

    )
  ) ;
}
// handle delete
function handleDelete(taskId: string){
  setTasks ((prevTasks) => prevTasks.filter((task) => task.id !==taskId));

}



}





  return (
   
    <div>
    

    </div>
  
   
  );
}
 



