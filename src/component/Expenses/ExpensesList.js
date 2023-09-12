import './ExpensesList';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) =>{
    // showing the data depends on filter (Showing the paragraph or the filtered data)
    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }
    return <ul className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
};

export default ExpensesList;