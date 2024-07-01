import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'
function App() {
  let myobj={
    username:'Umang Barewar',
    age:21
  }
  let newArr=[1,2,3,4]
  
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
      Tailwind Testing
    </h1>
    {/* <Cards channel='chai' someobj={myobj} anotherobj={newArr} /> */}
    <Cards username="Umang" btnText="This is my profile"/>
    <Cards username="Akshit"btnText="This is his profile"/>
    </>
  )
}

export default App
