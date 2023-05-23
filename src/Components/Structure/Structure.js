import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Structure({ tasks }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setRecords([...tasks, ...res.data]); // Prepend tasks to existing records
      })
      .catch((error) => console.log(error));
  }, [tasks]);

  return (
    <>
      <div className="container mt-5">
        <div className="text-end">
          <Link to="./create" className="btn btn-primary">Add +</Link>
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
            {records.reverse().map((d, i) => (
              <tr key={i}>
                <td>{d.title}</td>
                <td>{d.completed ? (<input type="checkbox" checked />) : (<input type="checkbox" />)}</td>
                <td>
                  <Link to= {`/update/${d.id}`} className='btn btn-sm btn-success'>Update</Link>
                  <Link to='/delete' className='btn btn-sm ms-1 btn-danger'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Structure;
