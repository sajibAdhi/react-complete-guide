import './ExpenseItem.css';

function ExpenseItem() {
    const expenceDate = new Date(2020, 2, 1);
    const expenceTitle = 'Car Invoice';
    const expenceAmount = 100.64;

    return (
        <div className='expense-item'>
            <div>{expenceDate.toISOString}</div>
            <div className='expense-item__description'>
                <h2>{expenceTitle}</h2>
                <div className='expense-item__price'>${expenceAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;