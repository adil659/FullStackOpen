import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CountryWeather from './CountryWeather';


const DisplayCountry = (props) => {
    const api_key = "a18905a22c04e9896f33606f46144316"
    const [weather, setWeather] = useState({})


    useEffect(() => {
        console.log('effect')
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.details.capital}`)
            .then(response => {
                console.log("weather", response.data)
                setWeather(response.data)
            })
    }, [])

    console.log("the waeragt", weather)
 
        return (
            <div>

                <h2>{props.details.name}</h2>
                <p>Capital: {props.details.capital}</p>
                <p>Population: {props.details.population}</p>

                <h4>Languages</h4>
                <ul>
                    {props.details.languages.map((language) => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={props.details.flag}></img>
                <br></br>
                
                <CountryWeather weather={weather} details={props.details}/>
            </div>
        )
    

}

export default DisplayCountry