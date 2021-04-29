import React, { useState, useEffect } from "react"
import OwlIcon from "./OwlIcon"
import ErrorList from "./ErrorList"
import _ from "lodash"

const AnimalReviewForm = props => {
  const [errors, setErrors] = useState({})
  const [animalReview, setAnimalReview] = useState({
    title: "",
    description: "",
    rating: 0
  })

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title", "description"]
    requiredFields.forEach(field => {
      if (animalReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const clearForm = event => {
    event.preventDefault()
    setAnimalReview({
      title: "",
      description: "",
      rating: 0
    })
    setErrors({})
  }

  const handleInputChange = event => {
    setAnimalReview({
      ...animalReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    if (validFormSubmission()) {
      props.submittedHandler(animalReview)
      setAnimalReview({
        title: "",
        description: "",
        rating: 0
      })
    }
  }

  let owlIcons = []
  for (let i = 1; i <= 5; i++) {
    const handleSetRating = () => {
      setAnimalReview({
        ...animalReview,
        ["rating"]: i
      })
    }

    owlIcons.push(
      <OwlIcon
        key={i}
        id={i}
        handleSetRating={handleSetRating}
        className={i <= animalReview.rating ? "head selected" : "head"}
      />
    )
  }

  return (
    <div className="callout review-form">
      <h3>Write your Review</h3>
      <form className="form" onSubmit={onSubmitHandler}>
        <ErrorList errors={errors} />
        <div className="grid-container">
          <p>Give it an owl rating</p>
          <div className="grid-x">{owlIcons}</div>
        </div>

        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={animalReview.title}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            onChange={handleInputChange}
            value={animalReview.description}
          />
        </label>

        <div className="button-group">
          <button className="button" onClick={clearForm}>
            Clear
          </button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default AnimalReviewForm
