import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises 
    + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))