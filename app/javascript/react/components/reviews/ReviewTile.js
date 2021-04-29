import React from "react"
import VillagerIcon from "../../../../assets/images/villager.png"

const ReviewTile = props => {
  const {title, description, rating, postedUser, deleteReview, currentUser } = props

  const clickHandler = (event) => {
    event.preventDefault()
    deleteReview()
  }

  // const checkPostedUser = () => {
  //   if (postedUser != null) {
  //     return (

  //     )
  //   } else {
  //     return null
  //   }
  // }

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
      {/* {deleteButton()} */}
    </div>
  )
}

export default ReviewTile;
