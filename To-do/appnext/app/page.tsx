"use client";

import { link } from "fs";
import { useState } from "react";
import { text } from "stream/consumers";
import Tlist from "@/components/tasklist";
import Inp from "@/components/Input";
import {Task} from  "../app/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

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
    <main>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1>TO DO APP</h1>
        <Inp addTask={addTask} />
        <Tlist tasks={tasks} updateComplete={updateComplete} removeTask={removeTask}/>
      </div>

    </main>
  );
}