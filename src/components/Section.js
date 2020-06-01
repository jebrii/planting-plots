import React, { useState } from 'react'

import '../styles/Section.css'

import { times } from '../utils'

import {
  UnityButton,
  UnityTypography
} from '@bit/smartworks.unity-react.unity-core-react'

const Section = ({ name, plant, initialSeeds }) => {
  const [seeds, setSeeds] = useState(initialSeeds)
  const [planted, setPlanted] = useState(0)

  return (
    <div className='container'>
      <UnityTypography size='header2' className='section-header'>Planting Plot {name}</UnityTypography>
      <UnityTypography size='paragraph'>Seeds Remaining: {seeds}</UnityTypography>
      <UnityTypography size='paragraph'>Plants Planted: {planted}</UnityTypography>
      <div className='buttons-container'>
        <UnityButton
          label='Buy Some Seeds'
          type='solid'
          onClick={() => {
            setSeeds(seeds + 2)
          }}
          className='button'
        />
        <UnityButton
          label={`Plant a ${plant}`}
          type='solid'
          disabled={seeds <= 0}
          onClick={() => {
            setSeeds(seeds - 1)
            setPlanted(planted + 1)

          }}
          className='button'
        />
        <UnityButton
          label={'Till the Plot'}
          type='solid'
          disabled={planted < 1}
          onClick={() => {
            setPlanted(0)

          }}
          className='button'
        />
      </div>
    </div>
  )
}

export default Section