import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewList = props => {
  const{ reviews } = props

  let reviewList = reviews.map((review) => {
    return(
      <ReviewTile 
        key={review.id} 
        title={review.title} 
        description={review.description} 
        rating={review.rating}
      />
    )
  })

  return(
    <ul>
      <h2>Reviews:</h2>
      {reviewList}
    </ul>
  )
}

export default ReviewList