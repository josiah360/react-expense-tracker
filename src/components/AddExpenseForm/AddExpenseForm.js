import { useState } from 'react'

import Card from '../UI/Card'
import AddNewExpense from './AddNewExpense'
import './AddExpenseForm.css'

const AddExpenseForm = (props) => {


    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const [openForm, setOpenForm] = useState(false)

    const openFormHandler = () => {
        setOpenForm(true)
    }

    const closeFormHandler = () => {
        setOpenForm(false)
    }

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        const newExpense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: enteredDate,
            id: Math.random().toString()
        }

        props.onAddExpense(newExpense)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        closeFormHandler()
    }


    return (
        <Card className="">
            { !openForm && <AddNewExpense openForm={openFormHandler}  /> }

            { openForm && <form className="expense-form" onSubmit={ formSubmitHandler } >
                <div className='titleInput'>
                    <label htmlFor='title'>Enter title</label>
                    <input type='text' value={ enteredTitle }  id="title" onChange={titleChangeHandler} />
                </div>
                <div className='amountInput'>
                    <label htmlFor='amount'>Enter amount</label>
                    <input type='number' value={ enteredAmount }  id="amount" onChange={amountChangeHandler} />
                </div>
                <div className='dateInput'>
                    <label htmlFor='date'>Enter date</label>
                    <input type='date' value={ enteredDate }  id="date" onChange={dateChangeHandler}/>
                </div>
                <div className="formBtn">
                    <button type="button" onClick={ closeFormHandler }>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>}
        </Card>
    )
}

export default AddExpenseForm