import React, { useState, useEffect } from "react"
import OwlIcon from "./OwlIcon"
const AnimalReviewForm = (props) => {

  const [animalReview, setAnimalReview] = useState({
    title: "",
    description: ""
  })

  const [rating, setRating] = useState(null)

  const handleInputChange = event => {
    setAnimalReview({
      ...animalReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    props.submittedHandler(animalReview, rating)
  }

  return (
    <>
      <form className="form" onSubmit={onSubmitHandler} >
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
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
      <OwlIcon id='1' setRating={setRating} />
      <OwlIcon id='2' setRating={setRating} />
      <OwlIcon id='3' setRating={setRating} />
      <OwlIcon id='4' setRating={setRating} />
      <OwlIcon id='5' setRating={setRating} />
    </>
  )
}

export default AnimalReviewForm