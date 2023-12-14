
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=5
  const addValue=()=>{
    console.log("value added",Math.random());
    if (counter<20){
      setCounter(counter+1)
    }

    console.log(counter);
    
  }
  const removeValue=()=>{
    console.log("value added",Math.random());
    if (counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}>Remove value</button>
    </>
  )
}


export default App
