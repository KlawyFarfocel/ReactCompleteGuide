import TasksPanel from "../Tasks/TasksPanel";

export default function CurrentProject({setActiveTask,tasks,activeTask,setTasks}){
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    const userDate=tasks[activeTask].dueDate;
    const formattedDate=`${months[userDate.getMonth()]} ${userDate.getDate()}, ${userDate.getFullYear()}`

    function handleDelete(){
        const newTasks=tasks.filter((_,index)=>index!=activeTask)
        setTasks(newTasks)
        (activeTask>0 && setActiveTask(prevActiveTask => prevActiveTask-1))
    }
    return(
        <div className="w-5/6 ml-20">
            <div id="textHeader" className="flex">
                <h2 className="text-4xl font-bold text-zinc-600">{tasks[activeTask].title}</h2>
                <button onClick={handleDelete} className="ml-auto hover:text-red-600 font-bold">Delete</button>
            </div>
            <div id="taskDate">
                <p className="my-5">{formattedDate}</p>
            </div>
            <div id="taskDesc">
                <p className="my-5 whitespace-pre">{tasks[activeTask].description}</p>
            </div>
            <hr className="h-1 bg-zinc-300" />
            <TasksPanel tasks={tasks} activeTask={activeTask} setTasks={setTasks}/>
        </div>
    )
}