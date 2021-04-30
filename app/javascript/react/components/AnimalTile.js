import React from 'react'
import MysteryAnimal from '../../../assets/images/mystery-animal.jpg'
import {Link} from 'react-router-dom'

const AnimalTile = (props) => {
  let animalImg
  if(props.photo === null){
    animalImg = <img className="animal-card-image" src={MysteryAnimal}/>
  } else {
    animalImg = <img className="animal-card-image" src={props.photo}/>
  }

  return (
    <div className="cell small-6 medium-4">
      <Link to={`/animals/${props.id}`}>
        <div className="card animal-card">
          {animalImg}
          <div className="card-section animal-card-section">
            <h3>{props.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AnimalTile