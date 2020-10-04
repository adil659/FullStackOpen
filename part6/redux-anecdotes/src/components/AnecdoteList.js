import React from 'react'
import { voteForQuote } from '../reducers/anecdoteReducer'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'
import { connect, useDispatch } from 'react-redux'


const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    const anecdotes = props.anecdotes //useSelector(state => state.anecdotes)
    const filter = props.filter //useSelector(state => state.filter)

    console.log("current anecdotes: ", anecdotes)


    const vote = (anecdote) => {

        dispatch(voteForQuote(anecdote))
        dispatch(voteNotification(anecdote.content, 3))
      }

    return (
        <div>
            {anecdotes
            .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => b.votes - a.votes)
            .map((anecdote, i) =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}

        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  }

  const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)
  export default ConnectedAnecdoteList  