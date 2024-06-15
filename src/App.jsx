import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className='App container-fluid'>

      <Routes>
        <Route path='/' element={<Home /> }></Route>
      </Routes>

    </div>
  )
}

export default App;
