import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import User_login from './Components/User_login';
import Categories from './Pages/Categories';
import ContactUs from './Components/ContactUs';
import Registration from './Components/Registration'
import Math from './Pages/Math'
import Music from './Pages/Music'
import Sports from './Pages/Sports'
import Theatre from './Pages/Theatre'


function App() {
  return (

    <>
    <Navbars />

    <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<Registration/>} />
          <Route path="/User_login" element={<User_login/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Categories" element ={<Categories />}/>
          <Route path="/Math" element={<Math />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Theatre" element ={<Theatre />}/>
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;










