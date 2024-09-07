import { useState } from "react"
import TicketNum from "../TicketNum";

export default function Lottery({n,winCodition}){
    const [lottery,setlottery] = useState(0);
    const [sum,setsum] = useState();
    const lotteryGenerator=()=>{
        let lotteryNumber = Math.floor(Math.random() * (((10**n)-1) - 10**(n-1) + 1)) + 10**(n-1);
        var numbers= lotteryNumber.toString().split("").map(Number);
        setsum(numbers.reduce((acc, currValue) => acc + currValue, 0));
        setlottery(lotteryNumber);
    }
    var isWin = winCodition(sum)
    return(
        <>
        <h1>{isWin && "WOW you Win Lottery"}</h1>
         <TicketNum num={lottery}/>
        

            
            {/* <p style={(lottery)?{display:""}:{display:"None"}}>Your Lottery Number : {lottery}</p> */}
            <button onClick={lotteryGenerator}>Check you Luck</button>
            
      
        </>
    ) 
}