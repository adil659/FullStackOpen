const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteForQuote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: { 
      anecdote
     }
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  console.log("newstate: helo")


  switch (action.type) {
    case 'VOTE':
      var votedAnecdote = state.find((anecdote) => anecdote.id === action.data.id)
      votedAnecdote.votes +=1
      const newState = state.map((anecdote) => anecdote.id !== action.data.id ? anecdote : votedAnecdote)
      console.log("newstate: ", newState)
      return newState
    case 'NEW_ANECDOTE':
      const anecdoteObject = asObject(action.data.anecdote)
      return [...state, anecdoteObject]

  }

  return state
}

export default reducer