import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'


const AnecdoteFilter = (props) => {

    const dispatch = useDispatch()
    const filter = props.filter //useSelector(state => state.filter)


    const filterOnChange = (event) => {
        dispatch(setFilter(event.target.value))
    }


    return (
        <div>
            <input onChange={filterOnChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      filter: state.filter
    }
  }

  const ConnectedAnecdoteFilter = connect(mapStateToProps)(AnecdoteFilter)
  export default ConnectedAnecdoteFilter  