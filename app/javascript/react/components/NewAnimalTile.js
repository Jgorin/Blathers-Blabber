import React from 'react'
import Animals from '../../../assets/images/animals.png'

const NewAnimalTile = () => {
  return (
    <div className="cell small-6 medium-4">
      <a href="/animals/new">
        <div className="card animal-card">
          <img className="new-animals" src={Animals} alt="animal image"/>
          <div className="card-section animal-card-section">
            <h3>Your New Animal</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default NewAnimalTile
