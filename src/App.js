import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Structure from './Components/Structure/Structure';
import Add from './Components/Add/Add';
import Edit from './Components/Edit/Edit';
import './App.css';

function App() {
  return (
    <div className='back'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"element={<Structure/>}/>
          <Route path="/add" element={<Add/>} />
          <Route path="/edit/:id"element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;