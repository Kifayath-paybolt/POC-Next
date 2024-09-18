"use client";

import { useState } from "react";

interface Task{
  text : string;
  completed : boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
      const [newTask, setNewTask] = useState<string>('');
      
      const addTask = () =>{
        if (newTask.trim() !== ''){
          setTasks([...tasks, {text  : newTask, completed: false}]);        
          setNewTask('');
        }
      };
  return (
    <main>
      <h1 className="text-center text-red-500">TO DO</h1>
    </main>
  );
}