import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./styles/Expenses.css";
import React,{useState} from "react";



function Expenses(props){
    const [expenseYearPicked,setExpenseYearPicked]=useState("2020");
    const filteredExpenses=props.expenses.filter((expense)=> expense.date.getFullYear().toString()===expenseYearPicked)
    console.log(filteredExpenses)
    const yearPickerHandler=(pickedYear)=>{
        setExpenseYearPicked(pickedYear)
    }
    return(
            
            <div className="expenses">
            <ExpensesFilter yearStart={expenseYearPicked} onYearPick={yearPickerHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
            </div>

    );
}
export default Expenses;