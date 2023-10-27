export default function Task({value,index,handleClear}){
    return(
        <div className="flex mb-5">
            <p className="text-lg font-medium ">{value}</p>
            <button onClick={()=>handleClear(index)} className="ml-auto hover:text-red-600 text-zinc-700 text-xl font-bold">Clear</button>
        </div>
    )
}