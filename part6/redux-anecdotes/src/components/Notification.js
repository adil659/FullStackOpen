import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
  const notificationMessage = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notificationView = () => (
    <div style={style}>
      {notificationMessage}
    </div> 
  )

  return (
    <div>
    {notificationMessage !== '' ? notificationView() : false }
    
    </div>
  )
}

export default Notification