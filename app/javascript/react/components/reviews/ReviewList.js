import React from "react";
import ReviewTile from "./ReviewTile";

const ReviewList = (props) => {
  const { reviews, animal } = props;

  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/v1/animals/${animal}/reviews/${reviewId}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
    } catch(err) {
      console.error(err)
    }
  }

  let reviewList = reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        description={review.description}
        rating={review.rating}
        deleteReview={() => deleteReview(review.id)}
        user="placeholder person"
      />
    );
  });

  return (
    <div>
      <h2>Reviews:</h2>
      {reviewList}
    </div>
  );
};

export default ReviewList;
