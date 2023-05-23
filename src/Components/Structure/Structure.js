import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Structure() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='container mt-5'>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i)=>(
              <th key = {i}>{c}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i)=>(
              <tr key={i}>
                <td>{d.userId}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.completed ? 'Completed' : 'Pending'}</td>
                <td>Update/delete</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Structure