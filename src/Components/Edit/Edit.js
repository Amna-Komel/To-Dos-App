import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit({ tasks, updateTask }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const task = tasks.find((task) => task.id === parseInt(id));
    if (task) {
      setTitle(task.title);
      setCompleted(task.completed);
    }
  }, [id, tasks]);

  const navigate = useNavigate();
  const [updatedTasks, setUpdatedTasks] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { title, completed }
      );
      console.log("response",response.data,'respojse')
      const updatedTask = response.data;
      
      updateTask(updatedTask);
      setUpdatedTasks(response.data);
      alert('Data updated successfully');
      navigate('/',{state:updatedTask});
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='titleInput'>Title</label>
            <input
              type='text'
              className='form-control'
              id='titleInput'
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <input
              className='form-check-input'
              type='checkbox'
              id='completedCheckbox'
              checked={completed}
              onChange={handleCompletedChange}
            />
            <label className='form-check-label' htmlFor='completedCheckbox'>
              Completed
            </label>
          </div>
          <br />
          <button type='submit' className='btn btn-info'>
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
