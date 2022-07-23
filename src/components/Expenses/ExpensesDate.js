import './ExpensesDate.css'

const ExpensesDate = (props) => {
    return (
        <div className="date">
            <span className="month">{ new Date(props.date).toLocaleString('en-US', {month: 'long'}) }</span>
            <span className="year">{ new Date(props.date).toLocaleString('en-US', {year: 'numeric'}) }</span>
            <span className="day">{ new Date(props.date).toLocaleString('en-US', {day: '2-digit'}) }</span>
        </div>
    )
}

export default ExpensesDate