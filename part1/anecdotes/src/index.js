import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
  const [highestVoted, setHighestVoted] = useState(0)


  const nextAnecdote = () => {
    setSelected(Math.floor((Math.random() * 5)))
  }

  const vote = () => {
    const copy = { ...points }
    copy[selected] += 1 
   
    for (var key in copy) {
      //console.log(copy[key])
      if (copy[key] > copy[highestVoted]) {
        setHighestVoted(key)
      }
    }
    //console.log(num)
    setPoints(copy)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <div>
      <p>has {points[selected]} votes</p>
      </div>
      <div>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      </div>

      <h2>Anecdote with most votes</h2>
      <h4>{anecdotes[highestVoted]}</h4>
      <p>has {points[highestVoted]} votes</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)