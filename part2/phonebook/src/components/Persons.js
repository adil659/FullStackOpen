import React from 'react';


const Persons = (props) => {
    
    return (
        <div>
        <ul>
        {props.array.map((person, i) => <li key={i}>{person.name} {person.number} <button value={person.id} key={person.name} onClick={props.handleDeleteNumber}>delete</button></li>)}
        </ul>
        
        </div>
        )
    }
    
    export default Persons