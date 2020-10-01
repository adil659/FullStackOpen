import anecdoteService from '../services/anecdote'


const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteForQuote = (anecdote) => {
  return async dispatch => {
    anecdote.votes +=1
    const votedAnecdote = await anecdoteService.update(anecdote)
    console.log("after adding", votedAnecdote)
    dispatch ({
      type: 'VOTE',
      data: { 
        votedAnecdote 
        }
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    console.log("new anecdote after created: ", newAnecdote)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data: { 
        newAnecdote
     }
    })
  }
}

export const initAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch ({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}


const reducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const newState = state.map((anecdote) => anecdote.id !== action.data.id ? anecdote : action.data.votedAnecdote)
      console.log("newstate: ", newState)
      return newState
    case 'NEW_ANECDOTE':
      //const anecdoteObject = asObject(action.data.anecdote)
      const newAnecdotes = [...state, action.data.newAnecdote]
      return newAnecdotes
    case 'INIT_ANECDOTES':
      return action.data

  }

  return state
}

export default reducer