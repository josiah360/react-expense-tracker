import { useState } from "react"

import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpenseFilter from "./ExpenseFilter"
import './ExpensesContainer.css'

const ExpensesContainer = (props) => {

    const [filterValue, setFilterValue] = useState('2021')

    const filterValueHandler = (value) => {
        setFilterValue(value)
    }

    return (
        <Card className="expenses-container">
            <ExpenseFilter onChangeFilter={filterValueHandler} filterValue={filterValue}/>
            <ExpensesList expenses={props.expenses} filterValue={filterValue} />
        </Card>
    )
}

export default ExpensesContainer