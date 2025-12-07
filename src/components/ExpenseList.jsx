import React from 'react';
import { Trash2, List } from 'lucide-react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <div className="expense-list-container">
        <h2><List size={24} /> Expenses</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>No expenses recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <h2><List size={24} /> Expenses</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map((expense) => (
          <li key={expense.id} style={{
            backgroundColor: '#334155',
            marginBottom: '0.75rem',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #475569',
            transition: 'transform 0.2s ease',
          }}>
            <div>
              <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#f1f5f9' }}>{expense.title}</div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {expense.date} • <span style={{ textTransform: 'capitalize', color: '#2dd4bf' }}>{expense.category}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontWeight: '700', color: '#f1f5f9', fontSize: '1.1rem' }}>
                ₹{expense.amount.toFixed(2)}
              </div>
              <button
                onClick={() => onDeleteExpense(expense.id)}
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: 'auto',
                  marginTop: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'none'
                }}
                title="Delete Expense"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
