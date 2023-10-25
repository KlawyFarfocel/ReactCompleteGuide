import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css"
export default function NewExpense(props){

    const [showForm,setShowForm]=useState(false)

    const showFormHandler=()=>{
        setShowForm(true)
    }
    const hideFormHandler=()=>{setShowForm(false)}
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.addToExpenses(expenseData)
    }

    return (
        <div className="new-expense">
            {!showForm
            ?
                <button onClick={showFormHandler}>Add New Expense</button>
            :
                <ExpenseForm hideFormHandler={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>
            }
            
        </div>
    );
}