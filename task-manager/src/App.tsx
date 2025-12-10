import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskItem } from './components/TaskItem/TaskItem' 
import {useState} from 'react'
  // import {TaskList} from 
import { Task , TaskStatus } from './types'


export default function App(){





  return (
    <>
    <div>
   

    <div>
      <TaskItem/>

    </div>
    
    <TaskFilter/>


    </div>
    </>
   
  );


}
 



