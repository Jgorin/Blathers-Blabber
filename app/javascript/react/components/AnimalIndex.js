import React, { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'
const AnimalIndex = (props) => {
  const [animals, setAnimals] = useState([])

  const fetchAnimals = async () => {
    try {
      const response = await fetch("/api/v1/animals")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setAnimals(responseBody)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  const animalList = animals.map((animal) => {
    return (
      <AnimalTile key={animal.id} id={animal.id} name={animal.name} />
    )
  })

  return (
    <div className="grid-container">
      <h1>Animals</h1>
      <div className="grid-x grid-margin-x">
        {animalList}
      </div>
    </div>
  )
}

export default AnimalIndex