import { useState, createContext} from 'react'
import Header from "../components/header"
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.jsx"
import Login from "./routes/login/login.jsx"
import Search from "./routes/search/search.jsx"


export const ContextGlobal = createContext()

function App() {



  const [isTokenValid,setIsTokenValid] = useState(null)



  return (

    <ContextGlobal.Provider value={{
      isTokenValid,
      setIsTokenValid
    }}>
      <div className="ventana">



        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>


      </div>
    </ContextGlobal.Provider>
  )
}

export default App
