import React, { useState, useEffect } from "react"
import AnimalReviewForm from "./AnimalReviewForm"
import ReviewList from "./reviews/ReviewList"

const AnimalShow = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    body: "",
    rating: 0,
    photo_path: "",
    reviews: [],
  })
  const [userId, setUserId] = useState(null)

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
      setAnimal({
        ...responseBody.animal,
        ["reviews"]: responseBody.animal.reviews,
      })
      setUserId(responseBody.animal.current_user.id)
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
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newReview = await response.json()
      setAnimal({ ...animal, ["reviews"]: animal.reviews.concat(newReview) })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAnimal()
  }, [])

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-6">
          <img
            className="animal-photo"
            src={animal.photo_path.url}
            alt="Photo"
          />
          <h1>{animal.name}</h1>
          <p>{animal.body}</p>
          <div className="card ratings-container">
            <p>The Blabber average animal rating:</p>
            <p>{animal.rating}</p>
          </div>
          <AnimalReviewForm submittedHandler={submittedHandler} />
        </div>
        <div className="cell small-12 medium-6">
          <ReviewList reviews={animal.reviews} animalId={animal.id} userId={userId}/>
        </div>
      </div>
    </div>
  )
}

export default AnimalShow
