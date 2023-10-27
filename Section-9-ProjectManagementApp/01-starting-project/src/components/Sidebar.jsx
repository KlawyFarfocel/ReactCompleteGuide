import SidebarTasksList from "./SidebarTasks/SidebarTasksList";

export default function Sidebar({className,taskList,onAddClick, activeTask,setActiveTask}){
    function handleAddProject(){
        onAddClick(true)
        setActiveTask()
    }
    return(
        <div className={className}>
            <div className= "h-full flex">
                <div className="mt-12 flex-grow bg-black rounded-tr-[18px]">
                    <div className="mt-20 max-h-full">
                        <div className="px-10">
                            <p className="font-sans text-2xl uppercase text-white font-bold">Your projects</p>
                            <button onClick={handleAddProject} className="bg-stone-800 hover:bg-stone-900 px-8 py-3 mt-10 rounded-lg text-neutral-400">+ Add Project</button>
                            <div className="overflow-y-auto mt-10 h-[calc(100vh-350px)]">
                                <SidebarTasksList setNewProjectFlag={onAddClick} activeTask={activeTask} setActiveTask={setActiveTask} taskList={taskList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}