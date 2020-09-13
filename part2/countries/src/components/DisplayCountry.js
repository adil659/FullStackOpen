import React, { useState, useEffect } from 'react'
import axios from 'axios';


const DisplayCountry = (props) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({})


    useEffect(() => {
        console.log('effect')
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.details.capital}`)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
    }, [])

    if (JSON.stringify(weather) === '{}') {
        return (
            <div></div>
        )
    }
    else {
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
                <h3>Weather in {props.details.capital} celsius</h3>
                <h4>Temperature: {weather.current.temperature}</h4>
                <div>
                    {weather.current.weather_icons.map((icon) => <img key={icon} src={icon}></img>)}
                </div>

                <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>


            </div>
        )
    }

}

export default DisplayCountry