import { Fragment, useState  } from 'react'

import ExpensesContainer from './components/Expenses/ExpensesContainer';
import AddExpenseForm from './components/AddExpenseForm/AddExpenseForm';
import './App.css'


const DUMMY_EXPENSES = [
  {title: 'New Car', amount: 2.22, date: "2015-03-25", id: 'e1'},
  {title: 'Grossary', amount: 5.00, date: "2015-03-25", id:'e2'},
  {title: 'Home Maintenance', amount: 2.45, date: "2015-03-25", id:'e3'},
  {title: 'Transport', amount: 6.65, date: "2015-03-25", id:'e4'},
]


function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (newExpense) => {
    setExpenses([...newExpense ,expenses])
  }

  return (
    <Fragment>
      <AddExpenseForm onAddExpense={addExpenseHandler} />

      <div className="container">
        <ExpensesContainer expenses={expenses} />
      </div>
    </Fragment>
  );
}

export default App;
