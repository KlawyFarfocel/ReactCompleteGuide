import { useRef } from "react"

export default function NewProject({tasks,activeTask,setActiveTask,setTasks, setNewProjectFlag}){
    const titleRef=useRef();
    const descRef=useRef();
    const dateRef=useRef();
    function handleAddTask(event){
        event.preventDefault()
        setTasks(prevTasks=>[
            ...prevTasks,
            {
                "title":titleRef.current.value,
                "description":descRef.current.value,
                "dueDate":new Date(dateRef.current.value),
                "tasks":[]
            }
        ])
        setActiveTask(tasks.length)
        setNewProjectFlag(false)
    }
    function handleCancel(){
        setNewProjectFlag(false)
    }
    return(
        <div className="w-4/6 ml-20 flex flex-col">
            <form onSubmit={handleAddTask}>
                <div className="ml-auto mb-10 flex justify-end">
                    <button onClick={handleCancel} className="py-2 px-8 text-zinc-800 rounded-lg hover:text-red-600">Cancel</button>
                    <button type="submit" className="bg-black py-2 px-8 text-white hover:text-zinc-200 rounded-lg ml-5">Save</button>
                </div>
            
                <div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input ref={titleRef} required className="py-2 bg-neutral-200 mb-2 border-0 border-b-4 focus:outline-none focus:border-stone-500" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm font-bold text-stone-600 mb-1">Description</label>
                        <textarea ref={descRef} required className="py-2 mb-2 bg-neutral-200 border-0 border-b-4 focus:outline-none focus:border-stone-500" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm font-bold text-stone-600 mb-1">Due Date</label>
                        <input ref={dateRef} required className="py-3 bg-neutral-200 border-0 border-b-4 focus:outline-none focus:border-stone-500" type="date"/>
                    </div>
                
                </div>
            </form>
        </div>
    )
}