import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-red-500">TO DO</h1>
      const [tasks, setTasks] = useState<Task[]>([]);
      const [newTask, setNewTask] = useState<string>('');
      
      const addTask = () =>{
        if (newTask.trim() !== ''){
          setTasks([...tasks, {text  : newTask, completed: false}]);        
          setNewTask('');
        }
      };
    </main>
  );
}