import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ConfCadastro from './pages/ConfCadastro';
import './App.css';

const App = () => {
  return (
    <div className='App container-fluid'>
        <Routes>
          <Route path='/' element={<Home /> }></Route>
          <Route path='/Cadastro' element={<Cadastro/>}></Route>
          <Route path='/ConfCadastro' element={<ConfCadastro/>}></Route>
        </Routes>
    </div>
  )
}

export default App;
