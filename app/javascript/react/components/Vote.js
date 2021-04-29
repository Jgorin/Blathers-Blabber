import React from "react"
import UpVote from '../../../assets/images/up_vote.png'
import DownVote from '../../../assets/images/down_vote.png'

const Vote = props => {
  const { isPositive, animalId, reviewId, userId, addVote } = props

  const postVote = async() => {
    try{
      const response = await fetch(`/api/v1/animals/${animalId}/reviews/${reviewId}/votes`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify( { isPositive: isPositive, userId: userId, reviewId: reviewId } )
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const parsedResponse = await response.json()
      debugger
      addVote(parsedResponse.vote)
    }
    catch(err){
      console.log("error in fetch")
      console.log(err)
    }
  }

  let image = null
  
  if(isPositive){
    image = UpVote
  }
  else {
    image = DownVote
  }

  return(
    <img
      src={image}
      className="voteIcon"
      onClick={postVote}
    />
  )
}

export default Vote