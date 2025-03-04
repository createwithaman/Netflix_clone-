import React, { useEffect } from 'react'
import Home from "../src/Pages/Home/Home"
import { Routes, Route, useNavigate  } from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        navigate("/")
        console.log("Logged In");
      } else {
        console.log("Logged Out");
        navigate("/login")
      }
    })
  },[])

  return (
    <>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/player/:id" element={<Player/>} />
    </Routes>
    
    </>
  )
}

export default App