import React from 'react';


const Persons = (props) => {
    
    return (
        <div>
        <ul>
        {props.array.map((person) => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
        
        </div>
        )
    }
    
    export default Persons