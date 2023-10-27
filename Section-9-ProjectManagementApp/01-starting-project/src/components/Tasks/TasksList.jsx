import Task from "./Task";

export default function TasksList({setTasks,tasks,activeTask}){
    function handleClear(index){
        const updatedTasks = [...tasks];
        const updatedtaskList=tasks[activeTask].tasks.filter((_,taskIndex)=>taskIndex!=index)
        updatedTasks[activeTask] = {
            ...updatedTasks[activeTask],
            tasks: updatedtaskList
          };
        setTasks(updatedTasks)
        console.log(updatedTasks)
    }
    return(
        (
            (tasks[activeTask].tasks.length > 0 &&
            <div className="py-5 bg-gray-200 rounded-xl">
                <div className="mx-5">
                    {
                        (tasks &&
                            tasks[activeTask].tasks.map((value,key)=>(
                                <Task key={key} value={value} index={key} handleClear={handleClear}/>
                            ))
                        )
                    }
                </div>
            </div>
            )
        )
    )
}