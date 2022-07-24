import './AddNewExpense.css'

const AddNewExpense = (props) => {
    return (
        <div className='add-new-expense'>
            <button onClick={props.openForm}>Add New Expense</button>
        </div>
    )
}

export default AddNewExpense