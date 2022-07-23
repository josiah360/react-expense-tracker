import ExpensesDate from './ExpensesDate'
import './Expense.css'

const Expense = (props) => {
    return (
        <li className="expense">
            <ExpensesDate date={props.date} />
            <h2 className="title">{props.title}</h2>
            <div className="amount">{`$${props.amount.toFixed(2)}`}</div>
        </li>
    )
}

export default Expense