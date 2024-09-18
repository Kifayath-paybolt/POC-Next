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

  const updateComplete = (index: number)=>{
    const updatedTasks = tasks.map((task, i) =>
      i == index ? {...task, completed: !task.completed} : task
  );
  setTasks(updatedTasks);
  };

  const removeTask = (index : number) =>{
    const updatedTasks = tasks.filter((_, i)=> i != index);
    setTasks(updatedTasks);
  }

  return (
    <main>
      <h1 className="text-center text-red-500">TO DO</h1>
    </main>
  );
}