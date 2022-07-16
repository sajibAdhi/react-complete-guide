// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e0', title: 'Car Invoice', amount: 100.64, date: new Date(2020, 2, 1) },
    { id: 'e1', title: 'Rent', amount: 500.64, date: new Date(2020, 2, 1) },
    { id: 'e2', title: 'Food', amount: 100.64, date: new Date(2020, 2, 1) },
    { id: 'e3', title: 'Truck', amount: 100.64, date: new Date(2020, 2, 1) },
    { id: 'e4', title: 'Pizza', amount: 500.64, date: new Date(2020, 2, 1) },
    { id: 'e5', title: 'Burger', amount: 100.64, date: new Date(2020, 2, 1) },
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's Learn React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {expenses.map(expence =>
        <ExpenseItem date={expence.date} title={expence.title} amount={expence.amount}></ExpenseItem>
      )}

    </div>

  );
}

export default App;
