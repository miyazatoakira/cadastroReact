import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import './App.css';

const App = () => {
  return (
    <div className='App container-fluid'>

      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/Cadastro' element={<Cadastro/>}></Route>
      </Routes>

    </div>
  )
}

export default App;
