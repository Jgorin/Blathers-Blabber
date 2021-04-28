import React, { useState, useEffect } from "react";
import AnimalReviewForm from "./AnimalReviewForm";
import ReviewList from "./reviews/ReviewList";
import _ from "lodash"

const AnimalShow = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    body: "",
    rating: 0,
    photo_path: "",
    reviews: []
  })
  const [userId, setUserId] = useState(null);

  const submittedHandler = (review) => {
    postReview(review);
  };

  const fetchAnimal = async () => {
    try {
      let animalId = props.match.params.id;
      const response = await fetch(`/api/v1/animals/${animalId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setAnimal({
        ...responseBody.animal,
        ["reviews"]: responseBody.reviews,
      });
      setUserId(responseBody.current_user_id);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const postReview = async (formPayload) => {
    try {
      let animalId = props.match.params.id;
      const response = await fetch(`/api/v1/animals/${animalId}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload)
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const newReview = await response.json();
      setAnimal({
        ...animal,
        ["reviews"]: animal.reviews.concat(newReview)
      });
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/v1/animals/${animal.id}/reviews/${reviewId}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      fetchAnimal()
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-6">
          <img className="animal-photo" src={animal.photo_path.url} alt="Photo"/>
          <h1>{animal.name}</h1>
          <p>{animal.body}</p>
          <div className="card ratings-container">
            <p>The Blabber average animal rating:</p>
            <p>{animal.rating}</p>
          </div>
          <AnimalReviewForm submittedHandler={submittedHandler} />
        </div>
        <div className="cell small-12 medium-6">
          <ReviewList reviews={animal.reviews} animal={animal.id} deleteReview={deleteReview}/>
        </div>
      </div>
    </div>
  );
};

export default AnimalShow;
