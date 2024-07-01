import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserContextProvider>
          <h1> Hi, this is Umang</h1>
        <h2 style={{ backgroundColor: 'lightblue', color: 'black', padding: '10px' }}>
                Well, This is a demo for useContext
            </h2>
        <Login />
        <Profile />
        </UserContextProvider>
      </div>
    </>
  )
}

export default App
