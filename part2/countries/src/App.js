import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchCountry from './components/SearchCountry';
import CountryList from './components/CountryList';


function App() {
  const [newSearch, setNewSearch] = useState('')
  const [countries, setCounties] = useState([])
  const [clicked, setClicked] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)

        setCounties(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setClicked('')
  }

  const handleButtonClick = (event) => {
    console.log("button clicked: ", event.target.value)
    const details = countries.filter((country) => !country.name.localeCompare(event.target.value))[0]
    console.log('handlebuttonclick', details)
    setClicked(event.target.value)
  }

  const matches = countries.filter((country) => country.name.includes(newSearch))
  
  return (
    <div>
      <SearchCountry newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <CountryList matches={matches} clicked={clicked} handleButtonClick={handleButtonClick}/>
    </div>

  );
}

export default App;
