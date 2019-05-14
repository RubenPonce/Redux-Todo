import React from 'react'

export default function Todo(props) {
    console.log(props);
    console.log('h4llo');
    
  return (
    <div>
      <h1>{props.todo.value}</h1>
      
    </div>
  )
}
