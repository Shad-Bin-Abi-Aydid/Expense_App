import React, { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';


const Dummy_Expense = [
  {
    id : 'e1',
    date: new Date(2023,7,19),
    title: "Car Insurence",
    amount: 250.5
  },
  {
    id : 'e2',
    date: new Date(2023,7,19),
    title: "Book",
    amount: 45.79
  },
  {
    id : 'e3',
    date: new Date(2022,7,19),
    title: "Laptop",
    amount: 500.0
  }
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
