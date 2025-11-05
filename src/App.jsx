import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Route from "react-router-dom"
import Routes from "react-router-dom"

function App() {

  

  return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
