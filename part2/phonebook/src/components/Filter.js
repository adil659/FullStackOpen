import React from 'react';


const Filter = (props) => {

    return (
        <div>
          filter shown with: <input value={props.newSearch} onChange={props.handleSearchOnChange}/>
        </div>
    )
}

export default Filter