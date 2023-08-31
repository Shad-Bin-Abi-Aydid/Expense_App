import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  // Receive data from child (ExpenseForm)
  const saveExpenseDataHandler = (enteredExpenseData) =>{

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpeneData = {saveExpenseDataHandler}/>

    </div>
  )
};

export default NewExpense;

