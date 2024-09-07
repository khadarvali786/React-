import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
    var {countVal} = useSelector(store =>store.counter)
    console.log(countVal);
    
  return (
    <div><h2>{countVal}</h2></div>
  )
}

export default DisplayCounter