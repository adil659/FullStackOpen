import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import axios from 'axios';
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notification, setNotification] = useState(null)



  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)

        setPersons(response.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const match = persons.filter((person) => person.name == newName)

    if (match.length == 0) {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setNotification(
            `Could not add`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })

      setNotification("Successfully added!")
      setTimeout(() => {
        setNotification(null)
      }, 5000)

    }
    else {
      const result = window.confirm(newName + " is already added to phonebook would you like to update?")
      if (result) {
        personService
          .update(match[0].id, newPerson)
          .then(response => {
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNotification(
              `Could not update`
            )
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })

        setNotification("Successfully updated!")
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      }
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

    if ((event.target.value).length == 0) {
      setShowAll(true)
    }
    else {
      setShowAll(false)
    }
  }

  const handleDeleteNumber = (event) => {
    //console.log("deleting", event.target.value)
    const result = window.confirm("would you like to delete?")
    if (result) {
      personService
        .deletePerson(event.target.value)
        .then(response => {

        })
    }
  }

  const array = showAll ? persons : persons.filter((person) => person.name.includes(newSearch))

  console.log(array)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearchOnChange={handleSearchOnChange} />

      <br></br>

      <Notification message={notification} />


      <PersonForm addPerson={addPerson} handleNameOnChange={handleNameOnChange} handleNumberOnChange={handleNumberOnChange} newName={newName} newNumber={newNumber} />

      <h2>Numbers</h2>
      ...

      <Persons array={array} handleDeleteNumber={handleDeleteNumber} />
    </div>
  )
}

export default App