import React, { useState, useEffect } from "react"
import AnimalReviewForm from "./AnimalReviewForm"

const AnimalShow = (props) => {

  const [animal, setAnimal] = useState({})
  const [reviews, setReviews] = useState([])

  const submittedHandler = (review) => {
    postReview(review)
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

  const postReview = async (formPayload) => {
    try {
      let animalId = props.match.params.id
      const response = await fetch(`/api/v1/animals/${animalId}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newReview = await response.json()
      setAnimalReviews(
        animalReviews.concat(newReview)
      )
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