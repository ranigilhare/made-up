import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/shop' element={<Shop/>}/>
          <Route path='/product' element={<Product/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
