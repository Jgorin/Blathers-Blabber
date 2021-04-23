import React, { useState, useEffect } from "react"
import AnimalReviewForm from "./AnimalReviewForm"

const AnimalShow = (props) => {

  const [animal, setAnimal] = useState({})
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(null)

  const submittedHandler = (review, rating) => {
    setReviews([...reviews, review])
    setRating(rating)
  }

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
      <AnimalReviewForm submittedHandler={submittedHandler}/>
    </div>
  )
}

export default AnimalShow