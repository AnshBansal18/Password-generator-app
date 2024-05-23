import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
