import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpenseFilter from "./ExpenseFilter"
import './ExpensesContainer.css'

const ExpensesContainer = (props) => {
    return (
        <Card className="expenses-container">
            <ExpenseFilter />
            <ExpensesList expenses={props.expenses} />
        </Card>
    )
}

export default ExpensesContainer