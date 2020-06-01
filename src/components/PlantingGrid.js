import React from 'react'

import '../styles/PlantingGrid.css'

import PlantingSpot from './PlantingSpot'

const PlantingGrid = ({ rows, onFire }) => {
  return (
    <div>
      {rows.map((spots, rowIndex) => (
        <div className='row' key={rowIndex}>
          {spots.map((props, spotIndex) => (
            <PlantingSpot
              key={spotIndex}
              onFire={onFire}
              {...props}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default PlantingGrid