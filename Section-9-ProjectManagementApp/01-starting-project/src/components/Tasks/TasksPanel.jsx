import { useRef, useState } from "react"
import TasksList from "./TasksList"

export default function TasksPanel({tasks, activeTask, setTasks}){
    const inputRef=useRef()
    function handleFormSubmit(event){
        event.preventDefault();
       
        if(inputRef.current.value.trim().length>0){
            const updatedTasks = [...tasks];
            updatedTasks[activeTask] = {
                ...updatedTasks[activeTask],
                tasks: [...updatedTasks[activeTask].tasks, inputRef.current.value]
              };
            setTasks(updatedTasks)
        }
    }
    return(
        <div className="mt-5">
            <h2 className="text-3xl font-bold text-zinc-600">Tasks</h2>
            <form onSubmit={handleFormSubmit} className="flex my-5">
                <input ref={inputRef} type="text" className="bg-zinc-200 w-1/3 p-3" />
                <button type="submit" onClick={handleFormSubmit} className=" hover:text-red-600 text-zinc-700 text-xl font-bold ml-5">Add Task</button>
            </form>
            {
               tasks[activeTask] && <TasksList tasks={tasks} activeTask={activeTask} setTasks={setTasks}/>
            }
        </div>
    )
}