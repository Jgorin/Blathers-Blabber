import React from 'react'
import Blather from '../../../assets/images/blathers_icon.png'
const OwlIcon = (props) => {

  let classContent
  let selectStatus

  const selectRating = () => {
    props.setRating(props.id)

    if (rating === props.id) {
      selectStatus = true
    } else {
      selectedStatus = false
    }
  }

  if (selectStatus === true) {
    classContent = 'selected'
  }

  return (
    <img
      src={Blather} 
      className={classContent}
      id={props.id}
      onClick={selectRating} 
    />
  )
}

export default OwlIcon