import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasks,setTasks]=useState(    
    [
      {
        "title":"dupa",
        "description":"dupa dupa",
        "dueDate":new Date(),
        "tasks":["task1","task1"]
      },
      {
        "title":"dupa2",
        "description":"dupa2 dupa2",
        "dueDate":new Date(123123),
        "tasks":["task2","task2"]
      }
    ]
  )
  const [activeTask,setActiveTask]=useState();
  const [newProjectFlag,setNewProjectFlag]=useState(false);
  return (
    <div className="flex h-full">
      <Sidebar activeTask={activeTask} setActiveTask={setActiveTask} onAddClick={setNewProjectFlag} className={"w-1/5 h-full"} taskList={tasks}/>
      <Main newProjectFlag={newProjectFlag} setNewProjectFlag={setNewProjectFlag} tasks={tasks} setActiveTask={setActiveTask} setTasks={setTasks} activeTask={activeTask} className={"w-4/5 h-full"}/>
    </div>
  );
}

export default App;
