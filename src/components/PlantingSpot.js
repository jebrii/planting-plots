import React from 'react'

import '../styles/PlantingSpot.css'

const PlantingGrid = ({ planted }) => {
  return (
    <div className='spot'>
      {!!planted && `🌱`}
    </div>
  )
}

export default PlantingGrid