
import './App.css'
import Lottery from './Lottery'


function App() {
  let winCodition = (sum) =>{
    return sum == 15;
  }

  return (
    <>

     <Lottery n={3} winCodition={winCodition}/>

    </>
  )
}

export default App
