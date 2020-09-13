import React from 'react';
import DisplayCountry from './DisplayCountry';


const CountryList = (props) => {

    
    if (props.matches.length < 10 && props.matches.length > 1) {
        return (
            <ul>
                {props.matches.map((country) => <li key={country.name}>{country.name} <button onClick={props.handleButtonClick} value={country.name}>show</button></li>)}
            </ul>
        )
    }
    else if (props.matches.length == 1 || props.clicked.length != 0) {
        const details = props.matches[0]
        if (props.clicked.length != 0) {
          details = props.countries.filter((country) => !country.name.localeCompare(props.clicked))[0]
        }

        return (
            <DisplayCountry newSearch={props.newSearch} handleSearchChange={props.handleSearchChange} details={details} />
        )
    }
    else {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }


}

export default CountryList