import { useState } from 'react'
import Header from "../components/header"
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.jsx"
import Login from "./routes/login/login.jsx"


function App() {


  return (

    <div className="ventana">



      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      
     
    </div>
  )
}

export default App
