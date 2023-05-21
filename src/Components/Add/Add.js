import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add({ addTask }) {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ title: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: inputData.title,
      completed: inputData.completed
    };
    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      .then((response) => {
        const createdTask = {
          ...newTask,
          id: response.data.id,
          userId: 1
        };
        addTask(createdTask); // Update the task list
        alert('Data Added Successfully');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const handleTitleChange = (e) => {
    setInputData({ ...inputData, title: e.target.value });
  };

  const handleCompletedChange = (e) => {
    setInputData({ ...inputData, completed: e.target.checked });
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titleInput">Title</label>
            <input type="text"className="form-control"id="titleInput"value={inputData.title}
            onChange={handleTitleChange}/>
          </div>
          <div>
            <input className="form-check-input"type="checkbox" id="completedCheckbox"checked={inputData.completed}
            onChange={handleCompletedChange}/>
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>
          <button type="submit" className="btn btn-info">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
