import React, { useState } from "react";


export const TodoList = () => {
  const [ task, setTask ] = useState('');
  const [ list, setList ] = useState([]);


  const handleSumbit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setList([...list, task]);
      setTask('');
    } else {
      setTask('');
    }
  }

  const deleteTask = (item) => {
    setList(list.filter((element) => element !== item))
  }

  return (
    <div className="container col-10 col-sm-8 col-md-6">
      <h1 className="text-primary">todos</h1>
      <div className="mt-2">
        <form onSubmit={handleSumbit}>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              />
        </form>
        <ul className="list-group">
          {list.length === 0 ? <li className="list-group-item d-flex justify-content-between hidden-icon">No hay tareas, añadir tareas</li>:''}
          {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
            {item}
            <span onClick={() => deleteTask(item)}>
              <i className="fas fa-trash text-danger"></i>
            </span>
            </li>)}
          <li className="list-group-item text-end bg-light fw-lighter">
            {list.length} items
          </li>
        </ul>
      </div>

    </div>
  )
}