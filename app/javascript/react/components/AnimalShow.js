import React, { useState, useEffect } from "react"
const AnimalShow = (props) => {

  const [animal, setAnimal] = useState({})

  const fetchAnimal = async () => {
    try {
      let animalId = props.match.params.id
      const response = await fetch(`/api/v1/animals/${animalId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setAnimal(responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    fetchAnimal()
  }, [])
   
  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.rating}</p>
      <p>{animal.body}</p>
    </div>
  )
}

export default AnimalShow