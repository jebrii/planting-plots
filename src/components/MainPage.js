import React from 'react'

import '../styles/MainPage.css'

import {
  UnityTypography
} from '@bit/smartworks.unity-react.unity-core-react'

import Section from './Section'

const MainPage = () => {
  return (
    <div className='main-container'>
      <UnityTypography size='header1' weight='header1'>My Awesome Notifications App</UnityTypography>
      <div className='sections-container'>
        <div className='section-wrapper'>
          <Section
            name={'A'}
            plant={'Zucchini'}
            initialSeeds={10}
          />
        </div>
        <div className='section-wrapper'>
          <Section
            name={'B'}
            plant={'Eggplant'}
            initialSeeds={7}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage