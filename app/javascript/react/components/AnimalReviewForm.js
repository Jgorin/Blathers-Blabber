import React, { useState, useEffect } from "react"
import OwlIcon from "./OwlIcon"

const AnimalReviewForm = (props) => {

  const [animalReview, setAnimalReview] = useState({
    title: "",
    description: ""
  })

  const clearForm = event => {
    event.preventDefault()
    setAnimalReview({
      title: "",
      description: ""  
    })
  }

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

  let owlIcons = []
  for(let i = 1; i <= 5; i++){

    const handleSetRating = () => {
      setRating(i)
    }

    owlIcons.push(<OwlIcon 
      id={i} 
      keyNumber={i} 
      handleSetRating={handleSetRating} 
      className={i <= rating ? "head selected" : "head"}
    />)
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
      // const newReview = await response.json()
    } catch (error) {
        console.error(`Error in Fetch: ${error.message}`)
      }
  }

  return (
    <>
      <form className="form" onSubmit={onSubmitHandler} >

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