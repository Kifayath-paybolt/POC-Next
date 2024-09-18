import React from "react";
import {Task} from  "../app/types";

interface TaskItemProps {
    task: Task
    updateComplete: (id: number) => void;
    removeTask: (id: number) => void;
}

const Titem : React.FC<TaskItemProps> = ({task, updateComplete, removeTask}) =>{
    return(
        <li key={task.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md transition duration-200 ${
                task.completed ? "bg-green-100 border-green-400" : "bg-white border-gray-300"
                } border-2 hover:shadow-lg`}
          >
            <span className={`text-lg font-medium flex-1 cursor-pointer transition-colors ${
            task.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
            onClick={()=>updateComplete(task.id)}>{task.text}</span>
            <button onClick={()=>removeTask(task.id)}
            className="ml-4 text-red-500 hover:text-red-700">
                Remove
                </button>
        </li>
    );
};

export default Titem;