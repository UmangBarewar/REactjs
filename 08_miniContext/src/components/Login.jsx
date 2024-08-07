import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,setUsername ]=useState('')// Initialize username state
    const [password,setPassword] =useState('')
    const {setUser} = useContext(UserContext) // Retrieve setUser function from context
    const handleSubmit= (e) =>{
        e.preventDefault()
        setUser({username, password})

    }
    
    return (
        <div>
            <h2/>Login
            <input type="text"
            value ={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="username" />
            <input type="text"
            value ={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="password" />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
      
}
export default Login