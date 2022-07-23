import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import './ExpensesContainer.css'

const ExpensesContainer = () => {
    return (
        <Card className="expenses-container">
            <ExpensesList />
        </Card>
    )
}

export default ExpensesContainer