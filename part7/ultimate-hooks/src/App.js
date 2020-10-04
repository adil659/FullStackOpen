  
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const setField = (val) => {
    setValue(val)
  }
  return [{
    type,
    value,
    onChange
  },
  setField
]
}

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  const url = baseUrl
  // ...

  const create = (resource) => {
    // ...
    const newNote = {
      ...resource,
      id: (Math.random() * 10000).toFixed(0)

    }
    console.log('new note: ', newNote)
    axios
    .post(url, newNote)
    .then(response => {
      setResources([...resources, response.data])
    })
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}

const App = () => {
  const [content, setContent] = useField('text')
  const [name, setName] = useField('text')
  const [number, setNumber] = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    setContent('')
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
    setName('')
    setNumber('')
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App