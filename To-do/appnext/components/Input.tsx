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
            className="justify-center text-xl font-bold  mb-8 text-gray-800 bg-slate-500"
            placeholder="Enter new task"/>
            <button
            onClick={handleAddTask}
            className="text-xl font-bold text-center mb-8 text-gray-800">
                Add
            </button>
          </div>
    )
};

export default Inp;