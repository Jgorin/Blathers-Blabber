import React from "react"
import VillagerIcon from "../../../../assets/images/villager.png"

const ReviewTile = props => {
  const { title, description, rating, user } = props

  return(
    <div className="callout">
      <span>
        <img className="review-avatar" src={VillagerIcon}/>
        <span>{user}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default ReviewTile