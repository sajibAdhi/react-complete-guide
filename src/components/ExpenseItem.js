import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March, 29 2017</div>
            <div className='expense-item__description'>
                <h2>Jiggle Biggle Gum</h2>
                <div className='expense-item__price'>$50</div>
            </div>
        </div>
    );
}

export default ExpenseItem;