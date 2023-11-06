import { useState } from "react"
import Output from "./Output"

export default function Greeting(){
    const[changedText,setChangedText]=useState(false)
    const changeTextHandler=()=>{
        setChangedText(true)
    }
    return(
        <div>
            <h2>Hello world!</h2>
            {changedText && <p>Changed!</p>}
            {!changedText && <Output>It's good to see you!</Output>}
            <button onClick={changeTextHandler}>Change Text</button>

        </div>
    )
}