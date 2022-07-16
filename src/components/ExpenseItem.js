import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenceDate = new Date(2020, 2, 1);
    // const expenceTitle = 'Car Invoice';
    // const expenceAmount = 100.64;

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;