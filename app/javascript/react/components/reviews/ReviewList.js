import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const { reviews, animal, deleteReview, currentUser, addVote } = props

  let reviewList = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        reviewId={review.id}
        description={review.description}
        rating={review.rating}
        deleteReview={() => deleteReview(review.id, animal.id)}
        postedUser={review.user}
        currentUser={currentUser}
        animalId={animal}
        addVote={addVote}
      />
    )
  })

  return (
    <div>
      <h2>Reviews:</h2>
      {reviewList}
    </div>
  )
}

export default ReviewList
