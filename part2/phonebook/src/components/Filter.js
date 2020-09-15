import React from 'react';


const Filter = (props) => {

    return (
        <div>
          Filter Shown With: <input value={props.newSearch} onChange={props.handleSearchOnChange}/>
        </div>
    )
}

export default Filter