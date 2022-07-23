import ExpensesDate from './ExpensesDate'
import './Expense.css'

const Expense = () => {
    return (
        <li className="expense">
            <ExpensesDate />
            <h2 className="title">New Car</h2>
            <div className="amount">$22.5</div>
        </li>
    )
}

export default Expense