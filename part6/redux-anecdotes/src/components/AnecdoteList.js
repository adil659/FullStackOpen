import React from 'react'
import { voteForQuote } from '../reducers/anecdoteReducer'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

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

export default AnecdoteList