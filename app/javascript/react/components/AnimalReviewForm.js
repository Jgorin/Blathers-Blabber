import React, { useState, useEffect } from "react"
import OwlIcon from "./OwlIcon"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const AnimalReviewForm = (props) => {
  const [animalReview, setAnimalReview] = useState({
    title: "",
    description: "",
    rating: 0
  })

  const [errors, setErrors] = useState({})

  const clearForm = event => {
    event.preventDefault()
    setAnimalReview({
      title: "",
      description: "",
      rating: 0
    })
    setErrors({})
  }

  const validForSubmission = () => {
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

  const handleInputChange = event => {
    setAnimalReview({
      ...animalReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    props.submittedHandler(animalReview)
  }

  let owlIcons = []
  for(let i = 1; i <= 5; i++){

    const handleSetRating = () => {
      setAnimalReview({
        ...animalReview,
        ["rating"]: i
      })
    }

    owlIcons.push(<OwlIcon
      id={i}
      keyNumber={i}
      handleSetRating={handleSetRating}
      className={i <= animalReview.rating ? "head selected" : "head"}
    />)
  }

  return (
    <>
      <form className="form" onSubmit={onSubmitHandler} >
        <ErrorList errors={errors} />
        <div className="grid-container">
          <div className="grid-x">
            {owlIcons}
          </div>
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
          <button className="button" onClick={clearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default AnimalReviewForm