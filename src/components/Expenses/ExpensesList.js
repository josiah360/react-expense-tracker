import Expense from "./Expense"
import './ExpensesList.css'

const ExpensesList = () => {
    return <ul className="expenses-list">
        <Expense />
        <Expense />
        <Expense />
        <Expense />
    </ul>
}

export default ExpensesList