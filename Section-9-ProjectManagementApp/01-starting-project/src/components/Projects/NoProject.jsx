export default function NoProject({setNewProjectFlag}){
    function handleCreateClick(){
        setNewProjectFlag(true)
    }
    return(
        <div className="w-5/6 ml-20 flex justify-center h-[calc(100%-45%)]">
                <div className="my-auto w-full">
                    <h1 className="font-extrabold text-center text-3xl text-zinc-600 mb-10">No project selected</h1>
                    <p className="text-center text-zinc-600 text-lg mb-10">Select a project or get started with a new one</p>
                    <div className="text-center">
                        <button onClick={handleCreateClick} className=" py-2 px-5 rounded-md bg-zinc-800 text-zinc-400">Create new project</button>
                    </div>
                </div>
        </div>
    )
}