import { useState } from "react";
import "./styles/ExpenseForm.css"
export default function ExpenseForm(props){
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState(0.00)
    const [date,setDate]=useState(new Date())

    //Handlers
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
    } 
    //Submit form
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: +title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setTitle("")
        setAmount("")
        setDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(event)=>titleChangeHandler(event)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={(event)=>amountChangeHandler(event)} min={0.01} step={0.01} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min={"2019-01-01"} max={"2022-12-31"} onChange={(event)=>dateChangeHandler(event)}/>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"end"}}>
                <div className="new-expense__action">
                    <button onClick={props.hideFormHandler}>Cancel</button>
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>

        </form>
    );
}