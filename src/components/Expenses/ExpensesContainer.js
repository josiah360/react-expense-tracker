import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import './ExpensesContainer.css'

const ExpensesContainer = (props) => {
    return (
        <Card className="expenses-container">
            <ExpensesList expenses={props.expenses} />
        </Card>
    )
}

export default ExpensesContainer