import React from "react"
import VillagerIcon from "../../../../assets/images/villager.png"

const ReviewTile = props => {
  const {title, description, rating, user, deleteReview } = props

  const clickHandler = (event) => {
    event.preventDefault()
    deleteReview()
  }

  const deleteButton = () => {
    if (user === "placeholder person"){
      return <button className="button alert" onClick={clickHandler} >Delete</button>
    }
  }

  return(
    <div className="callout">
      <span>
        <img className="review-avatar" src={VillagerIcon}/>
        <span>{user}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      {deleteButton()}
    </div>
  )
}

export default ReviewTile;
