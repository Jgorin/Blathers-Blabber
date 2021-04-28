import React, { useState, useEffect } from "react";
import OwlIcon from "./OwlIcon";

const AnimalReviewForm = (props) => {
  const [animalReview, setAnimalReview] = useState({
    title: "",
    description: "",
    rating: 0,
  });

  const clearForm = (event) => {
    event.preventDefault();
    setAnimalReview({
      title: "",
      description: "",
      rating: 0,
    });
  };

  const handleInputChange = (event) => {
    setAnimalReview({
      ...animalReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.submittedHandler(animalReview);
    setAnimalReview({
      title: "",
      description: "",
      rating: 0,
    });
  };

  let owlIcons = [];
  for (let i = 1; i <= 5; i++) {
    const handleSetRating = () => {
      setAnimalReview({
        ...animalReview,
        ["rating"]: i,
      });
    };

    owlIcons.push(
      <OwlIcon
        key={i}
        id={i}
        handleSetRating={handleSetRating}
        className={i <= animalReview.rating ? "head selected" : "head"}
      />
    );
  }

  return (
    <div className="callout review-form">
      <h3>Write your Review</h3>
      <form className="form" onSubmit={onSubmitHandler}>
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
  );
};

export default AnimalReviewForm;
