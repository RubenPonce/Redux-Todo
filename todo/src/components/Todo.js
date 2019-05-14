import React from 'react'

export default function Todo(props) {
    console.log(props.todo.value)
    
  return (
    <div className="todo-container">
      <h1 onClick={(e)=>props.toggleCompleted(e,props.todo)}>{props.todo.value}</h1>
     {console.log(props.todo.completed)}
    {props.todo.completed ? <p>Nice Work!</p> : null}
    </div>
  )
}

