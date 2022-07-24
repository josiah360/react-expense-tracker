import Expense from "./Expense"
import ExpenseChart from "./ExpenseChart"
import './ExpensesList.css'

const ExpensesList = (props) => {

    const filteredExpenses = props.expenses.filter(expense => new Date(expense.date).getFullYear() === +props.filterValue);
    let renderSwitch = <h2>No expense found.</h2>

    return <ul className="expenses-list">
        <ExpenseChart filteredData={filteredExpenses} />

        {filteredExpenses.length === 0 && renderSwitch}
        {filteredExpenses.length > 0 && filteredExpenses.map(expense => 
            <Expense 
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )}
    </ul>
}

export default ExpensesList