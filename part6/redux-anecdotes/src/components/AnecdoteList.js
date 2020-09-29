import React from 'react'
import { voteForQuote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteForQuote(id))
      }

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AnecdoteList