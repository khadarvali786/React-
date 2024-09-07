import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time,setTime] = useState(new Date())
  useEffect(()=>{
    var IntervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return ()=>{
      console.log("Timer stoped");
      clearInterval(IntervalId)
    }
  },[])

  return (
    <>
    <h1>Bharath Clock</h1>
    <div className="clock">
      <h1>{time.toLocaleDateString() }- {time.toLocaleTimeString()}</h1>
    </div>
    </>
  )
}

export default App
