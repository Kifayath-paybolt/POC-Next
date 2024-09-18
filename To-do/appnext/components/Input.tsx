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
        <div className="mb-4 text-center my-5 mr-5 gap-64">
            <input type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new task"/>
            <button
            onClick={handleAddTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add</button>
          </div>
    )
};

export default Inp;