import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasksFromLocalStorage, deleteTaskFromLocalStorage } from '../API/API';

function Structure() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    const tasksFromLocalStorage = getTasksFromLocalStorage();
    setTasks(tasksFromLocalStorage);
  }, []);

  const handleDelete = (taskId) => {
    deleteTaskFromLocalStorage(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    alert('Task deleted successfully');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((task) => {
    if (filterOption === 'completed') {
      return task.completed;
    } else if (filterOption === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <>
      <div className="container mt-5">
        <h2>Tasks</h2>
        <div className="mt-3">
          <Link to="/add" className="btn btn-primary">Add Task</Link>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search tasks"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="filter" className="form-label">Filter:</label>
            <select
              className="form-select"
              id="filter"
              value={filterOption}
              onChange={handleFilter}
            >
              <option value="all">All Tasks</option>
              <option value="completed">Completed Tasks</option>
              <option value="incomplete">Incomplete Tasks</option>
            </select>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Completed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.completed ? 'Yes' : 'No'}</td>
                  <td>
                    <Link to={`/edit/${task.id}`} className="btn btn-sm btn-primary me-1">
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Structure;
