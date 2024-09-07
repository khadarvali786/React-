import React from 'react';

const Display = ({ value,color='' }) => {
  return (
    <div>
      <h2>{color} Dice Value: {value}</h2>
    </div>
  );
};

export default Display;
