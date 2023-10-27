import { useState } from "react";
import SidebarTask from "./SidebarTask";

export default function SidebarTasksList({setNewProjectFlag,className,taskList, setActiveTask, activeTask}){
    function handleTaskClick(index){
        if(activeTask===index){
            setActiveTask(null)
        }
        else{
            setActiveTask(index)
            setNewProjectFlag(false)
        }
        
    }
    return(
        <ul className={className}>
            {
                taskList.map((value,index)=>(
                    <SidebarTask onClick={()=>handleTaskClick(index)} key={index} className={`text-white py-2 mb-3 ${index===activeTask?"bg-zinc-900":"hover:bg-zinc-900"}`} title={value.title}/>
                ))
            }
        </ul>
    )
}