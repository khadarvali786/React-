import React, { useState } from 'react';
import Dice from './diceButton';
import Display from './display';

const ParentComponent = ({color=''}) => {
  const [diceValue, setDiceValue] = useState(1);

  const handleRoll = (value) => {
    setDiceValue(value);
  };

  return (
    <div>
        <Display value={diceValue} color={color}/>
        <Dice color={color} onRoll={handleRoll} />
        
    </div>
  );
};

export default ParentComponent;
