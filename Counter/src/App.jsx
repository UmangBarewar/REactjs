import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
// let counter = 0
// let addValue = () =>{
//   if(counter<20){
//     console.log("Value added",counter+1);
//     setCounter(prevCounter=>prevCounter+1)
//     setCounter(prevCounter=>prevCounter+1)
//     setCounter(prevCounter=>prevCounter+1)
//     setCounter(prevCounter=>prevCounter+1)
//     setCounter(prevCounter=>prevCounter+1)
//     }
// } 
let addValue = () =>{
  if(counter<20){
    console.log("Value added",counter+1);
    setCounter(counter+1)
    }
} 
const removeValue = () =>{
  if(counter>0){
  console.log("Value removed",counter-1);
  setCounter(counter-1)
  }
} 


// interview question in react library is to create a counter function 
// if use state is used then even if you use the counter to add or subtract
//  several number of times , it will do the operation only once since the fiber  
//  sends the packets in batches.
//  therfore if needed to use the operation several times you will need to usecallback 
//  function to fetch the previous value of the counter function
  return (
    <>
      <h1>Hello this a Counter</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Counter={counter}</p>
    </>

  )
}

export default App


