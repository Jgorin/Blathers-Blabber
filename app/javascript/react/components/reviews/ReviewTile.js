import React from "react"
import Vote from "./Vote"
import Villager from "../../../../assets/images/villager.png"

const ReviewTile = props => {
  const { title, description, rating, postedUser, deleteReview, currentUser, addVote, reviewId, animalId } = props

  const clickHandler = (event) => {
    event.preventDefault()
    deleteReview()
  }

  let deleteButton
  if (currentUser.role === "admin"){
    deleteButton = <button className="button alert" onClick={clickHandler} >Delete</button>
  }

  let reviewAvatar
  if(postedUser.profile_photo.url === null){
    reviewAvatar = <img className="review-avatar" src={Villager}/>
  } else {
    reviewAvatar = <img className="review-avatar" src={postedUser.profile_photo.url}/>
  }

  return(
    <div className="callout">
      <span>
          {reviewAvatar}
          <span>{postedUser.username}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Do you like this review?</p>
      <Vote isUpVote={true} reviewId={reviewId} animalId={animalId} userId={currentUser.id} addVote={addVote}/>
      <Vote isUpVote={false} reviewId={reviewId} animalId={animalId} userId={currentUser.id} addVote={addVote}/>
      {deleteButton}
    </div>
  )
}

export default ReviewTile;
