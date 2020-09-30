import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'


const AnecdoteFilter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)


    const filterOnChange = (event) => {
        dispatch(setFilter(event.target.value))
    }


    return (
        <div>
            <input onChange={filterOnChange} />
        </div>
    )
}

export default AnecdoteFilter