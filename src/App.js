
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
 
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
