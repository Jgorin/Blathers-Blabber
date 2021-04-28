import React from "react";
import ReviewTile from "./ReviewTile";

const ReviewList = (props) => {
  const { reviews, animal, deleteReview } = props;

  let reviewList = reviews.map((review) => {
    debugger
    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        description={review.description}
        rating={review.rating}
        deleteReview={() => deleteReview(review.id, animal.id)}
        user={review.user_id}
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
