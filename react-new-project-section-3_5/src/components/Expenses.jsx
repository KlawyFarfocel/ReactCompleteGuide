import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import React from "react";

const results=[];

function Expenses(props){
    return(
        <div className="expenses">
        {
            props.expenses.map((expense)=>{
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            })
        }
        </div>
    );
}
export default Expenses;