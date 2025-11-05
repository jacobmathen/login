import React from 'react'

function Register() {
    const [user,setuser]=useState("")
    const [password,setpassword]=useState("")
    const Register=()=>{
        const getData=localStorage.getItem("data")
        foreach(data in getData){
            
        }
    }

  return (
    <div>
        <input type="text" placeholder="Username" onChange={(event)=>setuser(event.target.value)}/>
        <input type="password" placeholder="Password" onChange={(event)=>setpassword(event.target.value)}/>
        <input type="submit" onChange={(event)=>setpassword(event.target.value)} value="Create Account"/>
    </div>
  )
}

export default Register