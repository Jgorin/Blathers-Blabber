import React, { useState, useEffect } from "react"
import AnimalTile from "./AnimalTile"
import IndexBlathers from "../../../assets/images/index-blathers.png"
import NewAnimalTile from "./NewAnimalTile"

const AnimalIndex = props => {
  const [animals, setAnimals] = useState([])
  let audio = new Audio("/animalese.wav") 

  const fetchAnimals = async () => {
    try {
      const response = await fetch("/api/v1/animals")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAnimals(responseBody.animals)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  const animalList = animals.map(animal => {
    return (
      <AnimalTile
        key={animal.id}
        id={animal.id}
        name={animal.name}
        photo={animal.photo_path.url}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-6 medium-4">
          <img src={IndexBlathers} alt="blathers" className="index-blathers" onClick={() => audio.play()}/>
        </div>
        <div className="cell small-6 medium-8">
          <h1>Welcome to Blathers' Blabber!</h1>
          <h3>The best animal ratings in town.</h3>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <NewAnimalTile />
        {animalList}
      </div>
    </div>
  )
}

export default AnimalIndex
