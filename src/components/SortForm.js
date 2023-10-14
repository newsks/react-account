// SortForm.js
import React from "react";
import "./filterform.css";
const SortForm = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="form-filter">
      <h4>Sort :</h4>
      <label>정렬 순서:</label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
    </div>
  );
};

export default SortForm;
