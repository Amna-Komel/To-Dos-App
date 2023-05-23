import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addTaskToLocalStorage } from '../API/API';
import './Add.css'

let taskId = 0;

function Add() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    const newTask = {
      id: taskId++,
      title: title.trim(),
      completed,
    };

    addTaskToLocalStorage(newTask);
    setTitle('');
    setCompleted(false);
    navigate('/');
    alert('Task added successfully');
  };

  return (
      <div className="container pb-5 mt-5">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mt-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="completed"
              checked={completed}
              onChange={handleCompletedChange}
            />
            <label htmlFor="completed" className="form-check-label">
              Completed
            </label>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary me-2">
              Add Task
            </button>
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
  );
}

export default Add;
