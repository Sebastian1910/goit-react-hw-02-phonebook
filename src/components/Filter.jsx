import React from "react";

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
