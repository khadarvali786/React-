import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
    var counter = useSelector(store =>store.count)
    console.log(counter);
    
  return (
    <div><h2>{counter}</h2></div>
  )
}

export default DisplayCounter