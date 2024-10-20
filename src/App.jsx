import { useState } from 'react'
import Header from "../components/header"
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Footer from "../components/footer"
import Home from "./routes/home/home.jsx"



function App() {


  return (

    <div className="ventana">

      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>}>

        </Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  )
}

export default App
