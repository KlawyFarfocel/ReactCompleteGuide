
import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 194.12,
    date: new Date(2020, 4, 14),
  },
  { id: 'e2', title: 'Old TV', amount: 50.04, date: new Date(2021, 8, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { id: 'e5', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
];

function App() {

  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addToExpensesHandler=(enteredExpenseData)=>{
    console.log(enteredExpenseData)
    setExpenses( prevExpenses =>
      [...prevExpenses,
      enteredExpenseData]
    )
    
  }

  return (
    <div>
      <NewExpense addToExpenses={addToExpensesHandler}/>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

export default App;
