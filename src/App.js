import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header'
import Structure from './Components/Structure/Structure';
import Add from './Components/Add/Add';
import Edit from './Components/Edit/Edit';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"element={<Structure tasks={tasks} />}/>
          <Route path="/create" element={<Add addTask={addTask} />}/>
          <Route path="update/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
