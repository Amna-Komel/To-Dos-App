import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Structure from './Components/Structure/Structure';
import Add from './Components/Add/Add';
import Edit from './Components/Edit/Edit';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Structure tasks={tasks} updateTask={updateTask} />}
          />
          <Route path="/create" element={<Add addTask={addTask} />} />
          <Route
            path="/update/:id"
            element={<Edit tasks={tasks} updateTask={updateTask} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
