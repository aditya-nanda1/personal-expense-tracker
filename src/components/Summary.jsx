import React from 'react';

const Summary = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="summary-container">
      <h3>Total Spending: <span style={{ color: '#2dd4bf' }}>₹{total.toFixed(2)}</span></h3>
    </div>
  );
};

export default Summary;
