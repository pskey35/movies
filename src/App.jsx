import { useState } from 'react'
import Header from "../components/header"
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ventana">
      <Header></Header>
    </div>
  )
}

export default App
