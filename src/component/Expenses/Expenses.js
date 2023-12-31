import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilte";
import ExpensesChart from "./ExpensesChart";  

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <ExpensesChart expenses= {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
      </li>
    </div>
  );
};

export default Expenses;
