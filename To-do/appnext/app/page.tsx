"use client";

import { useState } from "react";
import Tlist from "@/components/tasklist";
import Inp from "@/components/Input";
import {Task} from  "../app/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTaskItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
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
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">TO DO APP</h1>
        <Inp addTask={addTask} />
        <Tlist tasks={tasks} updateComplete={updateComplete} removeTask={removeTask}/>
      </div>

    </main>
  );
}