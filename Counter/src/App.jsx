import { useState } from 'react';
import './App.css'
function App() {
  let [count,setCount] = useState(0);
  let increment = ()=>{
    setCount(count+1)
  }
  let decrement = ()=>{
    setCount(count-1);
    if(count<=0){
      setCount(0)
    }
  }
  let resetCount = ()=>{
    setCount(0);
  }
  return (
    <>
     <h1>Counter : {count}</h1>
     <button onClick={increment} >Increase</button>
     &emsp;
     <button onClick={decrement}>Decrease</button><br /><br />
     <button onClick={resetCount} >Reset</button>
    </>
  )
}

export default App
