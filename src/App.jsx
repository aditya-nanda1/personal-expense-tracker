import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Date.now().toString() },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Personal Expense Tracker</h1>
      </header>
      <main>
        <section className="left-column">
          <ExpenseForm onAddExpense={addExpense} />
        </section>
        <section className="right-column">
          <Summary expenses={expenses} />
          <Filters />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </section>
      </main>
    </div>
  );
}

export default App;
