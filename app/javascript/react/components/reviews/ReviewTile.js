import React from "react"
import VillagerIcon from "../../../../assets/images/villager.png"
import Vote from "../Vote"

const ReviewTile = props => {
  const { animalId, reviewId, title, description, rating, user } = props

  return(
    <div className="callout">
      <span>
        <img className="review-avatar" src={VillagerIcon}/>
        <span>{user}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Vote isPositive="true" reviewId={reviewId} animalId={animalId} userId={user.id}/>
    </div>
  )
}

export default ReviewTile;
