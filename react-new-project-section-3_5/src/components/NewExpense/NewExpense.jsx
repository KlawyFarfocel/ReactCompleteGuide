import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css"
export default function NewExpense(props){

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.addToExpenses(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}