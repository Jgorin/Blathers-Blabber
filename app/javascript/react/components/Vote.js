import React from "react"

const Vote = props => {
  const { isPositive, animalId, reviewId, userId } = props

  const postVote = async() => {
    try{
      debugger
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
    }
    catch(err){
      console.log("error in fetch")
      console.log(err)
    }
  }

  let label = null
  if(isPositive){
    label = "Up Vote"
  }
  else{
    label = "Down Vote"
  }

  return(
    <p className="button" onClick={postVote}>{label}</p>
  )
}

export default Vote