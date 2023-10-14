// FilterForm.js
import React from "react";

const FilterForm = ({
  typeFilter,
  setTypeFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="form-filter">
      <h4>Filters:</h4>
      <label>유형:</label>
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="all">all</option>
        <option value="daily">daily</option>
        <option value="food">food</option>
        <option value="clothes">clothes</option>
      </select>

      <label>시작 날짜:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label>종료 날짜:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
};

export default FilterForm;
