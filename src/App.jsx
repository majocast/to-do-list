//front end complete

import React from 'react';
import NavBar from './comps/NavBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;