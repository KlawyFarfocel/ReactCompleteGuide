import CurrentProject from "./Projects/CurrentProject";
import NewProject from "./Projects/NewProject";
import NoProject from "./Projects/NoProject";

export default function Main({newProjectFlag,setNewProjectFlag,setActiveTask,className, tasks,activeTask,setTasks}){
    return (
        <div className={className}>
            <div className="h-full flex">
                <div className="flex-grow mt-12 ">
                    <div className="mt-20"></div>
                    {
                        newProjectFlag
                        ?
                           <NewProject setNewProjectFlag={setNewProjectFlag} setActiveTask={setActiveTask} tasks={tasks} setTasks={setTasks}/>
                        :
                        (activeTask!=null ?
                            <CurrentProject setActiveTask={setActiveTask} activeTask={activeTask} setTasks={setTasks} tasks={tasks}/>
                            :
                            <NoProject setNewProjectFlag={setNewProjectFlag} />
                        )
                    }

                </div>
            </div>
        </div>
    );
}