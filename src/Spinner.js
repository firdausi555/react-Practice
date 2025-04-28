// src/Spinner.js
import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '8px solid lightgray',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '50px auto',
  };

  return (
    <div style={spinnerStyle}></div>
  );
};

export default Spinner;
