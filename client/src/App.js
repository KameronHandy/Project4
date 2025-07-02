import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimport from './Components/Testimport';
import Navbars from './Components/Navbars';
import User_login from './Components/User_login';
import Categories from './Components/Categories';

function App() {
  return (

    <>
    <Navbars />
    <Testimport />
    <User_login/>
    <Categories />
    </>

  );
}

export default App;
