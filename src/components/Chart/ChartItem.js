import './ChartItem.css';

const ChartItem = (props) => {

    let barFillHeight = '0%'

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }

    return (
        <div className='chart-item'>
            <div className='chart__outer'>
                <div className='chart__inner' style={{height: barFillHeight}}></div>
            </div>
            <label>{props.label}</label>
        </div>
    )
}

export default ChartItem