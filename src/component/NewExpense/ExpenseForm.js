import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // We can handle the useState in the bellow way. But both are same
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',

    // });

    const titleChangeHandler = (event) =>{
         setEnteredTitle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        
        // If updateing a state depanding on a previous state then we can't write 
        // set function on the top way... So, we need to writh the set(updating) function in the bellow way

        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

    };
    const dateChangeHandler = (event) =>{
         setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

    };
    const submitHandler = (event) =>{

        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        // Bellow Function Call Pass Data to the parent NewExpense
        props.onSaveExpeneData(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                    min="0.01" 
                    step= "0.01"
                    value={enteredAmount} 
                    onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  
                    min="2023-01-01" 
                    max="2024-12-31"
                    value={enteredDate} 
                    onChange={dateChangeHandler}/>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>

            </div>
        </form>
    );

};

export default ExpenseForm;