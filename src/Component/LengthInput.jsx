import React from 'react';

const LengthInput = ({ len, setLen }) => {
  return (
    <div className="flex items-center">
      <label className="flex-grow">Password Length:</label>
      <input
        type="range"
        min={6}
        max={18}
        value={len}
        className="flex-grow"
        onChange={(e) => {
          setLen(e.target.value);
        }}
      />
      <span className="ml-2">{len}</span>
    </div>
  );
};

export default LengthInput;
