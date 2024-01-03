import classes from "./TodoItem.module.css"
const TodoItem:React.FC<{text:string,onRemoveTodo:()=>void}>=(props)=>{
    return(
        <li className={classes.item}>
            <span>{props.text}</span>
            <button onClick={props.onRemoveTodo}>X</button>
        </li>
    )
}
export default TodoItem;