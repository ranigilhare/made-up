import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import MyAccount from './components/pages/MyAccount';

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
