import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
// import MyProfile from './components/pages/MyProfile';
import MyOrders from './components/pages/MyOrders';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/shop' element={<Shop/>}/>*/}
          <Route path='/my-profile' element={<MyOrders/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
