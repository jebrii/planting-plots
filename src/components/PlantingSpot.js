import React from 'react'

import '../styles/PlantingSpot.css'

const types = {
  melon: '🍈',
  watermelon: '🍉',
  pineapple: '🍍',
  strawberry: '🍓',
  tomato: '🍅',
  avocado: '🥑',
  eggplant: '🍆',
  potato: '🥔',
  carrot: '🥕',
  corn: '🌽',
  pepper: '🌶',
  broccoli: '🥦',
  garlic: '🧄',
  onion: '🧅',
  mushroom: '🍄',
  hamburger: '🍔'
}

const PlantingGrid = ({ planted, ready, onFire, type='hamburger' }) => {
  return (
    <div className='spot'>
      {
        !!onFire ? `🔥` :
        !!ready ? types[type] :
        !!planted ? `🌱` : ''
      }
    </div>
  )
}

export default PlantingGrid