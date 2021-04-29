import React from "react"
import UpVote from "../../../../assets/images/up_vote.png"
import DownVote from "../../../../assets/images/down_vote.png"

const Vote = props => {
  const { isUpVote, className, postVote } = props

  let image
  
  if(isUpVote){
    image = UpVote
  }
  else {
    image = DownVote
  }

  const postVoteWrapper = () => {
    if (postVote != null) {
    postVote(isUpVote)
    }
  }

  return(
    <img
      src={image}
      className={className}
      onClick={postVoteWrapper}
      alt="button"
    />
  )
}

export default Vote