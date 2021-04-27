import React from 'react'
import Blathers from '../../../assets/images/blathers_icon.png'

const OwlIcon = (props) => {
  const { id, handleSetRating, className } = props

  return (
    <div>
      <img
        src={Blathers}
        className={className}
        onClick={handleSetRating}
      />
    </div>
  )
}

export default OwlIcon