import './App.css';
import Expenses from './component/Expenses/Expenses';

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
  ]
  return (
    <div className="App">
      <h1>Hello, Aydid</h1>
      <Expenses item ={expence} />
    </div>
  );
}

export default App;
