import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user,setuser]=useState("")
    const [password,setpassword]=useState("")
    const login=()=>{
        const logindata=localStorage.getItem("data");
        foreach(data in logindata){
            if(data.username==user && data.password==password){
                useNavigate("/dashboard")
            }
        }
    }
    const =()=>{
        
    }

  return (
    <div>
        <input type="text" onChange={(event)=>setuser(event.target.value)}/>
        <input type="password" onChange={(event)=>setpassword(event.target.value)}/>
        <input type="submit" onChange={(event)=>setpassword(event.target.value)}/>
    </div>
  )
}

export default Login