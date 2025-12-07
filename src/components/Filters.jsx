import React from 'react';

const Filters = () => {
  return (
    <div className="filters-container">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Category:</label>
        <select>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
