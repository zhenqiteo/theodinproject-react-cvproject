import React from 'react'

export default function TodoList() {
  let todos = [
    'go to the gym',
    'eat veg', 
    'develop photos'
  ]
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <li className="todoItem" key={index}>{todo}</li>
        )
      })}
    </ul>
  )
}
