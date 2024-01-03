import { useContext, useRef } from "react"
import classes from "./NewTodo.module.css"
import { TodosContext } from "../store/todos-context"
const NewTodo:React.FC=(props)=>{
    const todoCtx=useContext(TodosContext)
    function handleFormSubmit(event:React.FormEvent){
        event.preventDefault()

        const enteredText=todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //nothing was entered - throw an error
            return;
        }

        todoCtx.addTodo(enteredText);
    }
    const todoTextInputRef=useRef<HTMLInputElement>(null)
    return(
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <label htmlFor="text">Todo Text</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo