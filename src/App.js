import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

function App() {
  const expence = [
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
      date: new Date(2023,7,19),
      title: "Laptop",
      amount: 500.0
    }
  ];

  const addExpenseHandler = (expense) =>{

    console.log("Hey...I'm from App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item ={expence} />
    </div>
  );
}

export default App;
