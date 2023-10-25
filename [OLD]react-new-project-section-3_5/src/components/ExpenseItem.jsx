import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./styles/ExpenseItem.css";
function ExpenseItem(props) {

    const [title,setTitle]=useState(props.title);

    const btnPressHandler=()=>{
        setTitle("Updated");
    }
    
    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2 className="fs-1">{title}</h2>
                </div>
                <button onClick={btnPressHandler}>Change title</button>
            </div>
        </li>
    );
}
export default ExpenseItem;