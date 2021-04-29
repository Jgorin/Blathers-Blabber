import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const { reviews, animal, deleteReview, currentUser } = props

  let reviewList = reviews.map(review => {
    const handleDeleteReview = () => {
      deleteReview(review.id)
    }

    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        description={review.description}
        rating={review.rating}
        deleteReview={handleDeleteReview}
        postedUser={review.user}
        currentUser={currentUser}
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
