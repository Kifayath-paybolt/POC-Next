import React, { useState } from "react";

interface inputProps{
    addTask: (text: string) =>void;
}

const Inp: React.FC<inputProps> = ({addTask})=>{
    const [newTask, setNewTask] = useState<string>("");

    const handleAddTask = () =>{
        if (newTask.trim() !== "") {
            addTask(newTask);
            setNewTask("");
        }
    }
    return(
        <div className="flex items-center justify-center gap-4 mt-8">
            <input type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="focus:border-red-500 border rounded px-3 py-2 text-gray-700 focus:outline-blue-300 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new task"/>
            <button
            onClick={handleAddTask}
            className="px-6 py-3 bg-blue-500 text-red rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                Add
            </button>
          </div>
    )
};

export default Inp;