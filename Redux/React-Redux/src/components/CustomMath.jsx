import React, { useRef } from "react";
import "../App.css";
import { useDispatch } from "react-redux";

function CustomMath() {
    const dispatch = useDispatch()
  const inputElement = useRef();

  const handleAdd=()=>{
    dispatch({type:"ADD",payload:{
        num:inputElement.current.value,
    }})
  }
  const handleDel=()=>{
    dispatch({type:"DEL",payload:{
        num:inputElement.current.value,
    }})
  }
  return (
    <div className="inputdata">
      <center>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter Number"
          className="input-number"
          ref={inputElement}
          required
        />
        <button className="input-buttons btn btn-success" onClick={handleAdd}>Add</button>
        <button className="input-buttons btn btn-danger"onClick={handleDel}>Subtract</button>
      </center>
    </div>
  );
}

export default CustomMath;
