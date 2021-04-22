import React from 'react'
import Bunny from '../../../assets/images/bunny.jpg'
import {Link} from 'react-router-dom'

const AnimalTile = (props) => {
  return (
    <Link to={`/animals/${props.id}`}>
      <div className="card animal-card">
        <img src={Bunny} alt="animal image"/>
        <div className="card-section animal-card-section">
          <h3>{props.name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default AnimalTile
