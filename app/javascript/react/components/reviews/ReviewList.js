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
        user="placeholder person"
      />
    )
  })

  return(
    <div>
      <h2>Reviews:</h2>
      {reviewList}
    </div>
  )
}

export default ReviewList