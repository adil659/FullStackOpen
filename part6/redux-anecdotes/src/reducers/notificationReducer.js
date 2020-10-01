

  export const voteNotification = (message, time) => {
    const messageDisplay = `you voted '${message}'`
    return async dispatch => {
      dispatch ({
        type: 'VOTE_NOTIFICATION',
        data: { 
        messageDisplay
       }
      })
      setTimeout(() => {
        dispatch(removeNotification())
      }, time*1000);
    }
  }

  export const createQuoteNotification = (message, time) => {
    const messageDisplay = `'${message}' has been created`
    return async dispatch => {
      dispatch ({
        type: 'CREATE_NOTIFICATION',
        data: { 
        messageDisplay
       }
      })
      setTimeout(() => {
        dispatch(removeNotification())
      }, time*1000);
    }
  }

  export const removeNotification = () => {
          const messageDisplay = ''
    return {
      type: 'REMOVE_NOTIFICATION',
      data: {
          messageDisplay
      }
    }
  }
    
  const reducer = (state = "", action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
      case 'VOTE_NOTIFICATION':
        return action.data.messageDisplay
      case 'CREATE_NOTIFICATION':
        return action.data.messageDisplay
      case 'REMOVE_NOTIFICATION':
        return action.data.messageDisplay
      default: 
        return state
  
    }
  
    return state
  }
  
  export default reducer