import React, { useState } from 'react';

function Add({ history }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== '') {
      // Add logic for saving task to local storage or making API call here
      // For example, you can use axios or fetch to send a POST request to an API

      setTask('');
      history.push('/list');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
