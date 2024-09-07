import { useState } from "react";
import Dice from "./diceButton";

function init() {
  return { blue: 1, green: 0, red: 0, yellow: 0 };
}

export default function LudoBoard() {
  const [diceValue, setDiceValue] = useState(1);

  const handleRoll = (value) => {
    setDiceValue(value);
  };

  let [moves, setMoves] = useState(init);
  // let dice=()=>{
  //     let num=Math.floor(Math.random() * 6) + 1
  //     return num;
  // }
  let blueDice = () => {
    setMoves((moves) => {
      console.log((moves.blue = diceValue));

      return { ...moves };
    });
  };
  let redDice = () => {
    setMoves((prevMove) => {
      return { ...prevMove, red: newMove };
    });
  };
  let yellowDice = () => {
    setMoves((prevMove) => {
      let newMove = prevMove.yellow + dice();
      return { ...prevMove, yellow: newMove };
    });
  };
  let greenDice = () => {
    setMoves((prevMove) => {
      let newMove = prevMove.green + dice();
      return { ...prevMove, green: newMove };
    });
  };
  let reset = () => {
    setMoves(init);
  };

  return (
    <>
      <div className="board">
        <h1>Blue :{moves.blue} </h1>
        <button
          style={{ backgroundColor: "blue", padding: 0 }}
          onClick={blueDice}
        >
          <Dice onRoll={handleRoll} />
        </button>
        <h1>Red : {diceValue}</h1>
        <button
          style={{ backgroundColor: "red", padding: 0 }}
          onClick={redDice}
        >
          <Dice onRoll={handleRoll} />
        </button>
        <h1>Green : {moves.green}</h1>
        <button
          style={{ backgroundColor: "green", padding: 0 }}
          onClick={greenDice}
        >
          <Dice />
        </button>
        <h1>yellow :{moves.yellow} </h1>
        <button
          style={{ backgroundColor: "yellow", padding: 0 }}
          onClick={yellowDice}
        >
          <Dice />
        </button>
      </div>
      <button onClick={reset}>GameReset</button>
    </>
  );
}
