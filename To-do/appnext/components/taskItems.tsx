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
            className={`flex-auto w-full items-center p-2 rounded ${
              task.completed ? 'bg-green-200' : 'bg-gray-200'
            }`}
          >
              <span className = {`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ""}`}
              onClick={()=>updateComplete(task.id)}>{task.text}</span>
              <button onClick={()=>removeTask(task.id)}
                className="ml-4 text-red-500 hover:text-red-700">Remove</button>
            </li>
    );
};

export default Titem;