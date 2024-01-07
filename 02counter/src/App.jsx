
import './App.css'
import { useState } from 'react'

function App() {
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    console.log('clicked',counter);
    // counter=counter+1
    setCounter((preCounter)=>preCounter+1)
    setCounter((preCounter)=>preCounter+1)
    setCounter((preCounter)=>preCounter+1)
    setCounter((preCounter)=>preCounter+1)

  }

  const removeValue=()=>{
    console.log('clicked',counter);
    // counter=counter-1
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}
export default App
