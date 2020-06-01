import React, { useState } from 'react'

import '../styles/MainPage.css'

import {
  UnityTypography,
  UnityButton
} from '@bit/smartworks.unity-react.unity-core-react'

import Section from './Section'

const sectionNameA = 'A'
const sectionNameB = 'B'

const MainPage = () => {
  const [onFire, setOnFire] = useState({ plotA: false, plotB: false })
  return (
    <div className='main-container'>
      <UnityTypography size='header1' weight='header1'>My Awesome Seed Planting App</UnityTypography>
      <div className='sections-container'>
        <div className='section-wrapper'>
          <Section
            name={sectionNameA}
            plant={'Tomato'}
            timeToGrow={10}
            initialSeeds={10}
            onFire={onFire.plotA}
            setOnFire={(newOnFire) => setOnFire({
              ...onFire,
              plotA: newOnFire
            })}
          />
        </div>
        <div className='section-wrapper'>
          <Section
            name={sectionNameB}
            plant={'Melon'}
            timeToGrow={15}
            initialSeeds={7}
            onFire={onFire.plotB}
            setOnFire={(newOnFire) => {
              setOnFire({
                ...onFire,
                plotB: newOnFire
              })
            }}
          />
        </div>
      </div>
      <UnityButton
        label={'Fire!'}
        type={'solid'}
        onClick={() => {
          const plotToBurn = Math.random() > 0.5 ? 'plotA' : 'plotB'
          setOnFire({
            ...onFire,
            [plotToBurn]: true
          })
        }}
      />
    </div>
  )
}

export default MainPage