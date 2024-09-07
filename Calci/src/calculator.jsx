import Buttons from "./Buttons";
import Input from "./input";
import "./calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [calval, setCalVal] = useState("");
  const onButtonClick = (e) => {
    var buttontext = e.target.firstChild.data;
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      setCalVal(calval + buttontext);
    }
  };
  return (
    <>
      <div class="calculator">
        <h1>Calculator</h1>
        <Input calval={calval} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}
