import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  
  return (
    <button onClick={props.handleClick}>{props.name}</button>
    )
  }
  
  const Statistic = (props) => {
    
    return (
      <>
      <td>{props.stat}</td>
      <td>{props.value}</td>
      </>
      )
    }
    
    const Statistics = (props) => {
      const good = props.good
      const neutral = props.neutral
      const bad = props.bad
      
      const all = props.good + props.neutral + props.bad
      const avg = (props.good - props.bad) / all;
      
      if (good == 0 && neutral == 0 && bad == 0){
        return (
          <p>No feedback given</p>
          )
        }
        else {
          return (
            <div>
            <table>
              <tbody>
            <tr>
            <Statistic stat="good" value={props.good}/>
            </tr>
            <tr>
            <Statistic stat="neutral" value={props.neutral}/>
            </tr>
            
            <tr>
            <Statistic stat="bad" value={props.bad}/>
            </tr>
            <tr>
            <Statistic stat="all" value={all}/>
            </tr>
            <tr>
            <Statistic stat="average" value={avg}/>
            </tr>
            </tbody>
            </table> 
            </div>
            )
          }
          
        }
        
        const App = () => {
          // save clicks of each button to own state
          const [good, setGood] = useState(0)
          const [neutral, setNeutral] = useState(0)
          const [bad, setBad] = useState(0)
          
          const goodVote = () => setGood(good + 1)
          const neutralVote = () => setNeutral(neutral + 1)
          const badVote = () => setBad(bad + 1)
          
          
          return (
            <div>
            <h2>give feedback</h2>
            <Button handleClick={goodVote} name="good" />
            <Button handleClick={neutralVote} name="neutral"/>
            <Button handleClick={badVote} name="bad"/>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
            </div>
            )
          }
          
          ReactDOM.render(<App />, 
            document.getElementById('root')
            )