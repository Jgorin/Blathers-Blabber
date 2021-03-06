import React, { useState, useEffect } from "react"
import AnimalReviewForm from "./AnimalReviewForm"
import ReviewList from "./reviews/ReviewList"
import _ from "lodash"
import MysteryAnimal from "../../../assets/images/mystery-animal.jpg"

const AnimalShow = props => {
  const [animal, setAnimal] = useState({
    name: "",
    body: "",
    rating: 0,
    photo_path: "",
    reviews: []
  })

  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: "",
    profile_photo: "",
    role: ""
  })

  const submittedHandler = review => {
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
        ["reviews"]: responseBody.animal.reviews
      })
      setCurrentUser({
        id: responseBody.animal.current_user.id,
        username: responseBody.animal.current_user.username,
        profile_photo: responseBody.animal.current_user.profile_photo,
        role: responseBody.animal.current_user.role
      })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAnimal()
  }, [])

  const postReview = async formPayload => {
    try {
      let animalId = props.match.params.id
      const response = await fetch(`/api/v1/animals/${animalId}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newReview = await response.json()
      let animalReviewsList = animal.reviews
      animalReviewsList = animalReviewsList.concat(newReview.review)
      setAnimal({
        ...animal,
        ["reviews"]: animalReviewsList
      })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const deleteReview = async reviewId => {
    try {
      const response = await fetch(
        `/api/v1/animals/${animal.id}/reviews/${reviewId}`,
        {
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setAnimal({
        ...animal,
        ["reviews"]: responseBody.reviews
      })

    } catch (err) {
      console.error(err)
    }
  }

  const addVote = (vote) => {
    let reviews = animal.reviews
    let review = reviews.filter(review => review.id == vote.review.id)
    review = review[0]
    review.votes.push(vote)
    setAnimal({
      ...animal,
      ["reviews"]: reviews
    })
  }

  let animalImg
  if(animal.photo_path.url === null){
    animalImg = <img className="animal-photo" src={MysteryAnimal}/>
  } else {
    animalImg = <img className="animal-photo" src={animal.photo_path.url}/>
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-6">
          {animalImg}
          <h1>{animal.name}</h1>
          <p>{animal.body}</p>
          <AnimalReviewForm submittedHandler={submittedHandler} />
        </div>
        <div className="cell small-12 medium-6">
          <ReviewList
            reviews={animal.reviews}
            animal={animal.id}
            deleteReview={deleteReview}
            currentUser={currentUser}
            addVote={addVote}
          />
        </div>
      </div>
    </div>
  )
}

export default AnimalShow
