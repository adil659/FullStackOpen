

  export const voteNotification = (message) => {
    const messageDisplay = `you voted '${message}'`
    return {
      type: 'VOTE_NOTIFICATION',
      data: { 
        messageDisplay
       }
    }
  }

  export const createQuoteNotification = (message) => {
    const messageDisplay = `'${message}' has been created`
    return {
      type: 'CREATE_NOTIFICATION',
      data: { 
        messageDisplay
       }
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