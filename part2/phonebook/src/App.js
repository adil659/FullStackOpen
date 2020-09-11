import React, { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567' 
    }
  ]) 
 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ showAll, setShowAll ] = useState(true)




  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const match = persons.filter((person) => person.name == newName)

    if (match.length == 0) {
      setPersons(persons.concat(newPerson))

      setNewName('')
      setNewNumber('')

    }
    else {
      alert(newName + " is already added to phonebook")
    }

    
  }

  const handleNameOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchOnChange = (event) => {
    setNewSearch(event.target.value)

    if((event.target.value).length == 0) {
      setShowAll(true)
    }
    else {
      setShowAll(false)
    }
  }

  const array = showAll ? persons : persons.filter((person) => person.name.includes(newSearch))



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearchOnChange={handleSearchOnChange}/>

      <br></br>
      

      <PersonForm addPerson={addPerson} handleNameOnChange={handleNameOnChange} handleNumberOnChange={handleNumberOnChange} newName={newName} newNumber={newNumber}/>

      <h2>Numbers</h2>
      ...

      <Persons array={array} />
    </div>
  )
}

export default App