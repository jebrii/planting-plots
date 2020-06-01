import React from 'react'

import '../styles/PlantingGrid.css'

import PlantingSpot from './PlantingSpot'

const PlantingGrid = ({ rows }) => {
  return (
    <div>
      {rows.map((spots, rowIndex) => (
        <div className='row' key={rowIndex}>
          {spots.map((planted, spotIndex) => (
            <PlantingSpot
              key={spotIndex}
              planted={planted}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default PlantingGrid