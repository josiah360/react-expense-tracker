import Expense from "./Expense"
import './ExpensesList.css'

const ExpensesList = (props) => {
    return <ul className="expenses-list">
        {props.expenses.map(expense => 
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