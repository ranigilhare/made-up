import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
// import MyProfile from './components/pages/MyProfile';
import MyOrders from './components/pages/MyOrders';
import MyProfile from './components/pages/MyProfile';
import MyAccount from './components/pages/MyAccount';
import Sidebar from './components/common/Sidebar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/shop' element={<Shop/>}/>*/}
          <Route path='/my-profile' element={<MyAccount/>} /> 
          <Route path='/my-orders' element={<MyAccount/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
