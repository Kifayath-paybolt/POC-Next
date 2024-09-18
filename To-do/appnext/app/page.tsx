"use client";

import { link } from "fs";
import { useState } from "react";
import { text } from "stream/consumers";

interface Task{
  id : number;
  text : string;
  completed : boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () =>{
    if(newTask.trim() != ""){
      const newTaskItem = {
        id: Date.now(),
        text: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("")
    }
  };

  const updateComplete = (id: number)=>{
    const updatedTasks = tasks.map((task) =>
    task.id ===id?{...task, completed: !task.completed}:task
  );
  setTasks(updatedTasks);
  };

  const removeTask = (id : number) =>{
    const updatedTasks = tasks.filter((tasks)=> tasks.id != id);
    setTasks(updatedTasks);
  }

  return (
    <main>
      <div>
        <div>
          <h1>TO DO APP</h1>
          <div className="create">
            <input type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new task"/>
            <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add</button>
          </div>
          <ul className="space-y-2 mt-9">
            {tasks.map((task)=>
            (<li key={task.id}
            className={"flex-auto"}>
              <span className = {"flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}"}
              onClick={()=>updateComplete(task.id)}>{task.text}</span>
              <button onClick={()=>removeTask(task.id)}
                className="ml-4 text-red-500 hover:text-red-700">Remove</button>
            </li>
          ))}
          </ul>
        </div>
      </div>

    </main>
  );
}