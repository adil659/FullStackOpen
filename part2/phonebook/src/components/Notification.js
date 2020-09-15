import React from 'react';


const Notification = (props) => {
    if (props.message === null) {
        return null
      }
    return (
        <div className="notify">
            {props.message}
        </div>
    )
}

export default Notification