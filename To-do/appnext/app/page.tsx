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
        </div>
      </div>

    </main>
  );
}