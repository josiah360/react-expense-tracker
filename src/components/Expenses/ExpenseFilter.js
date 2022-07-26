
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const filterChangeHandler = (e) => {
        props.onChangeFilter(e.target.value)
    }

    return (
        <div className='expense-filter'>
            <label>Filter by year</label>
            <select onChange={filterChangeHandler} value={props.filterValue} >
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter