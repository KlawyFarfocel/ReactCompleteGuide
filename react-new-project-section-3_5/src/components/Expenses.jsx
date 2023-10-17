import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import React from "react";



function Expenses(props){
    const [expenseYearPicked,setExpenseYearPicked]=useState("2020");

    const yearPickerHandler=(pickedYear)=>{
        setExpenseYearPicked(pickedYear)
    }
    return(
            
            <div className="expenses">
            <ExpensesFilter yearStart={expenseYearPicked} onYearPick={yearPickerHandler}/>
            {
                props.expenses.map((expense)=>{
                    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                })
            }
            </div>

    );
}
export default Expenses;