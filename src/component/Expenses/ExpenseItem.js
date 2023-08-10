import React,{ useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) =>{

const [title, setTitle] = useState(props.title);


const clickHandling = () => {
  setTitle('Updated!');
  console.log(title);
  };
    
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandling}>Click Me</button>
    </Card>
  );
}
export default ExpenseItem;
