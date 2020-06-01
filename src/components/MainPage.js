import React, { useState } from 'react'

import '../styles/MainPage.css'

import {
  UnityTypography
} from '@bit/smartworks.unity-react.unity-core-react'

import Section from './Section'

const MainPage = () => {
  const [plotsFull, setPlotsFull] = useState({ plotA: false, plotB: false })
  return (
    <div className='main-container'>
      <UnityTypography size='header1' weight='header1'>My Awesome Seed Planting App</UnityTypography>
      <div className='sections-container'>
        <div className='section-wrapper'>
          <Section
            name={'A'}
            plant={'Watermelon'}
            initialSeeds={10}
            setPlotFull={(plotFull) => setPlotsFull({
              plotA: plotFull,
              ...plotsFull
            })}
          />
        </div>
        <div className='section-wrapper'>
          <Section
            name={'B'}
            plant={'Eggplant'}
            initialSeeds={7}
            setPlotFull={(plotFull) => setPlotsFull({
              plotB: plotFull,
              ...plotsFull
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage