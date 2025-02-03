import { useState } from 'react'


const PersonForm = ({addPerson, handleNameChange, handleNumberChange, newName, newNumber}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const PersonList = ({persons}) => {
  return (
    <div>
      {persons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

const Person = ({name, number}) => {
  return (
    <p>
      {name}: {number}
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1112233'},
    { name: 'Testi Testinen', number: '050-4445566'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const duplicate = persons.find((person) => person.name === newName)
    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add a new contact</h2>
      <PersonForm addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}/>
      <h2>Numbers</h2>
      <PersonList persons={persons}/>
    </div>
  )
}

export default App
