import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Structure({ tasks }) {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  // Function to handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter option change
  const handleFilterOptionChange = (e) => {
    setFilterOption(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setRecords([...tasks, ...res.data]); // Prepend tasks to existing records
      })
      .catch((error) => console.log(error));
  }, [tasks]);

  // Filter tasks based on the search query and filter option
  const filteredTasks = records.filter((task) => {
    const titleMatches = task.title.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterOption === 'all') {
      return titleMatches;
    } else if (filterOption === 'completed') {
      return titleMatches && task.completed;
    } else if (filterOption === 'activate') {
      return titleMatches && !task.completed;
    }

    return titleMatches;
  });

  return (
    <>
      <div className="container mt-5">
        <div className="text-end">
          <Link to="./create" className="btn btn-primary">
            Add +
          </Link>
        </div>
        {/* Search bar */}
        <div className="mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        {/* Filter dropdown */}
        <div className="mt-3">
          <select
            className="form-select"
            value={filterOption}
            onChange={handleFilterOptionChange}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed Tasks</option>
            <option value="activate">Activate Tasks</option>
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.reverse().map((d, i) => (
              <tr key={i}>
                <td>{d.title}</td>
                <td>
                  {d.completed ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                </td>
                <td>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-success"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.id)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  function handleSubmit(id) {
    const confirm = window.confirm('Do you really want to delete this task?');
    if (confirm) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          alert('Record has been deleted');
          navigate('/');
        })
        .catch((error) => console.log(error));
    }
  }
}

export default Structure;
