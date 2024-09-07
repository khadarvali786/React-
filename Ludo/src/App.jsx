import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Dice from './diceButton'
import ParentComponent from './parents'

function App() {
  
  return (
    <>
    {/* <h1>Game Begins </h1> 
    <ParentComponent color='Blue'/>
    <ParentComponent color='Red'/>
    <ParentComponent color='Green'/>
    <ParentComponent color='Yellow'/> */}
    <TodoList/>
    </>
  )
}

export default App
