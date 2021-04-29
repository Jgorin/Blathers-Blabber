import React from "react"
import VillagerIcon from "../../../../assets/images/villager.png"
import Vote from "./Vote"

const ReviewTile = props => {
  const { reviewId, title, description, rating, postedUser, deleteReview, currentUser, animalId, addVote } = props

  const clickHandler = (event) => {
    event.preventDefault()
    deleteReview()
  }
  
  const deleteButton = () => {
    if (currentUser.role === "admin"){
      return <button className="button alert" onClick={clickHandler} >Delete</button>
    }
  }

  return(
    <div className="callout">
      <span>
          <img className="review-avatar" src={postedUser.profile_photo.url}/>
          <span>{postedUser.username}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Do you like this review?</p>
      <Vote isUpVote={true} reviewId={reviewId} animalId={animalId} userId={currentUser.id} addVote={addVote}/>
      <Vote isUpVote={false} reviewId={reviewId} animalId={animalId} userId={currentUser.id} addVote={addVote}/>
    </div>
  )
}

export default ReviewTile;
