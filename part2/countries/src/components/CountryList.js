import React from 'react';
import DisplayCountry from './DisplayCountry';


const CountryList = (props) => {

    console.log("countrylist: ", props.clicked)

    if (props.matches.length == 1 || props.clicked.length != 0) {
        var details = props.matches[0]
        if (props.clicked.length != 0) {
            console.log("we clicked!")
          details = props.matches.filter((country) => !country.name.toLowerCase().localeCompare(props.clicked.toLowerCase()))[0]
        }
        

        return (
            <DisplayCountry newSearch={props.newSearch} handleSearchChange={props.handleSearchChange} details={details} />
        )
    }
    else if (props.matches.length < 15 && props.matches.length > 1) {
        return (
            <ul>
                {props.matches.map((country) => <li key={country.name}>{country.name} <button onClick={props.handleButtonClick} value={country.name}>show</button></li>)}
            </ul>
        )
    }
    else if (props.matches.length == 0) {
        return (
            <div>
                <p>No matches found</p>
            </div>
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