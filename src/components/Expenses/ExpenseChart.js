import ChartItem from '../Chart/ChartItem';

import './ExpenseChart.css';


const ExpenseChart = (props) => {

    const dataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for(const expense of props.filteredData) {
        const expenseMonth = new Date(expense.date).getMonth()
        dataPoints[expenseMonth].value += expense.amount
    }

    // const valueArray = dataPoints.map(dataPoint => dataPoint.value)
    // const max = Math.max(...valueArray)

    const max =  dataPoints.reduce((total, dataPoint) => {
        return total + dataPoint.value
    }, 0)



    return (
        <div className='expense-chart'>
            {dataPoints.map(dataPoint => 
                <ChartItem value={dataPoint.value} 
                maxValue={max} 
                label={dataPoint.label} 
                key={dataPoint.label} 
                /> 
            )}
        </div>
    )
}

export default ExpenseChart