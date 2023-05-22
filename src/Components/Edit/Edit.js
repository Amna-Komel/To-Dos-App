import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getTasksFromLocalStorage, updateTaskInLocalStorage } from '../API/API';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const tasksFromLocalStorage = getTasksFromLocalStorage();
    setTasks(tasksFromLocalStorage);

    const task = tasksFromLocalStorage.find((task) => task.id === parseInt(id));

    if (task) {
      setTitle(task.title);
      setCompleted(task.completed);
    }
  }, [id]);

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

    const updatedTask = {
      id: parseInt(id),
      title: title.trim(),
      completed,
    };

    updateTaskInLocalStorage(updatedTask);
    navigate('/');
    alert('Task updated successfully');
  };

  return (
    <div className="container mt-5">
      <h2>Edit Task</h2>
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
            Update Task
          </button>
          <Link to="/" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit;