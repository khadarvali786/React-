import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./dice.css";

const Dice = ({ onRoll, color = "" }) => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return; // Prevent multiple clicks
    setIsRolling(true);

    // const audio = new Audio(`/dice-roll-sound.mp3`);
    // audio.play();

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      onRoll(newValue);
      setDiceValue(newValue);
      setIsRolling(false);
    }, 500); // Animation duration
  };

  return (
    <div className="dice-button" style={{ fontSize: 50 }}>
      <i
        onClick={rollDice}
        className={`fas fa-dice-${
          ["one", "two", "three", "four", "five", "six"][diceValue - 1]
        } ${isRolling ? "rolling" : ""}`}
        style={{ color: color }}
      ></i>
    </div>
  );
};

export default Dice;
