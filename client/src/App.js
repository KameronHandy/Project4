import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import user_login from './Components/user_login';
import categories from './Components/categories';
import j from './Components/j';

function App() {
  return (

    <>
    <Navbars />
    <user_login/>
    <j />
    </>

  );
}

export default App;
