import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasksFromLocalStorage, deleteTaskFromLocalStorage, fetchTasksFromAPI } from '../API/API';

export default function Structure() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    var task = getTasksFromLocalStorage();
    console.log(task)
    if(task.length === 0){
       fetchTasksFromAPI().then(res => setTasks(res));
    } else {
      setTasks(task);
    }
  }, []);

  const handleDelete = (taskId) => {
    deleteTaskFromLocalStorage(taskId);
    setTasks((prevTasks) => prevTasks?.filter((task) => task.id !== taskId));
    alert('Task deleted successfully');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setFilterOption('all');
  };

  const filterTasks = (task) => {
    if (filterOption === 'completed') {
      return task.completed;
    } else if (filterOption === 'incompleted') {
      return !task.completed;
    }
    return true; // Show all tasks when filterOption is 'all'
  };

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
            <select
              className="form-select"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="all">All Tasks</option>
              <option value="completed">Completed Tasks</option>
              <option value="incompleted">Incompleted Tasks</option>
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
              {tasks.length > 0 &&
                tasks
                  .filter(filterTasks)
                  .map((task) => (
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
