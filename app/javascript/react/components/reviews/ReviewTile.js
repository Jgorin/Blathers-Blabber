import React from "react"
import Vote from "./Vote"

const ReviewTile = props => {
  const {
    title,
    description,
    rating,
    postedUser,
    deleteReview,
    currentUser,
    addVote,
    reviewId,
    animalId,
    votes
  } = props

  const clickHandler = event => {
    event.preventDefault()
    deleteReview()
  }

  let deleteButton
  if (currentUser.role === "admin") {
    deleteButton = (
      <button className="button alert" onClick={clickHandler}>
        Delete
      </button>
    )
  }

  const postVote = async (isUpVote) => {
    try{
      const response = await fetch(`/api/v1/animals/${animalId}/reviews/${reviewId}/votes`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify( { isUpVote: isUpVote, userId: currentUser.id, reviewId: reviewId } )
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const parsedResponse = await response.json()
      addVote(parsedResponse.vote)
    }
    catch(err){
      console.log("error in fetch")
      console.log(err)
    }
  }

  let classNameUpVote = "voteIcon"

  let classNameDownVote = "voteIcon"

  let interactFunction = postVote


  if (votes != null) {
    for(let i = 0; i < votes.length; i++) {
      if (votes[i].user_id == currentUser.id) {
        interactFunction = null
        if (votes[i].isUpVote) {
          classNameUpVote = "voteIcon selected"
        } else {
          classNameDownVote = "voteIcon selected"
        }
        break 
      }
    }
  }

  let upVoteCount = 0
  let downVoteCount = 0

  votes.forEach((vote) => {
    if (vote.isUpVote) {
      upVoteCount++
    } else {
      downVoteCount++
    }
  })

  return (
    <div className="callout">
      <span>
        <img className="review-avatar" src={postedUser.profile_photo.url} />
        <span>{postedUser.username}</span>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Did you like this review?</p>
      <span>      
        <Vote
          isUpVote={true}
          className={classNameUpVote}
          postVote={interactFunction}
        />
        {upVoteCount}
        <Vote
          isUpVote={false}
          className={classNameDownVote}
          postVote={interactFunction}
        />
        {downVoteCount}
      </span>
      {deleteButton}
    </div>
  )
}

export default ReviewTile