import { useState } from "react"

function Tasbiih(){

    const [count, num] = useState(0)
    const Increment = () =>{
        num (count +1)
    }
    const Decrement = ()=>{
       if(count > 0){
        num (count -1)
       }
    }
    const Reset = ()=>{
      num(0)
    }

    return <div>
       <div className='text-center mt-[200px]'>
      
        <h1 style={{color: count == 10 ? "red" : ""}} className="text-9xl "> {count} </h1>
      
        <button onClick={Increment} className="bg-blue-500  p-4 text-3xl m-3">+</button>
        <button onClick={Decrement} className="bg-blue-300 p-4 text-3xl m-3">-</button>
        <button onClick={Reset} className="bg-blue-500 p-4 text-3xl m-3">x</button>
      </div>
    </div>
    
  }

  export default Tasbiih