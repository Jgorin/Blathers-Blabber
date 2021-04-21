import React, {useState, useEffect} from 'react'
const AnimalIndex = (props) => {
  const [animals, setAnimals] = useState([])
  
  const fetchAnimals = async () => {
    try {
      const response = await fetch("/api/v1/animals")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
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
      <div key={animal.id}>
        {animal.name}
      </div>
    )
  })

  return (
    <>
    <h1>Animals</h1>
    {animalList}
    </>
  )
}

export default AnimalIndex