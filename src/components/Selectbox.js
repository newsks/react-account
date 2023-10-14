import React from "react";

const SelectBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.onChange(e);
  };
  return (
    <select value={props.value} onChange={handleChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
