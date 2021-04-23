import React from 'react'
import Blathers from '../../../assets/images/blathers_icon.png'

const OwlIcon = (props) => {
  const { id, keyNumber, handleSetRating, className } = props
  
  return (
    <div key={keyNumber}>
      <img
        src={Blathers} 
        className={className}
        id={id}
        onClick={handleSetRating} 
      />
    </div>
  )
}

export default OwlIcon