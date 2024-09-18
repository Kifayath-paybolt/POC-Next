import React from "react";
import Titem from "./taskItems";
import { Task } from "@/app/types";

interface TaskListProps {
    tasks: Task[];
    updateComplete: (id: number)=> void;
    removeTask :(id: number) => void;
}

const Tlist = ({tasks, updateComplete, removeTask} : TaskListProps) => {
    return(
        <ul className="space-y-4 mt-5 max-w-xl mx-auto">
      {tasks.map((task) => (
        <Titem key={task.id} task={task} updateComplete={updateComplete} removeTask={removeTask} />
      ))}
    </ul>
    )
}

export default Tlist;