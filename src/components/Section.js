import React, { useState } from 'react'

import '../styles/Section.css'

import {
  makeBlankPlotGrid,
  makeDuplicateTwoDimentionalArray
} from '../utils'

import PlantingGrid from './PlantingGrid'

import {
  UnityButton,
  UnityTypography,
} from '@bit/smartworks.unity-react.unity-core-react'

const totalRows = 3
const spotsPerRow = 3
const totalSpots = totalRows * spotsPerRow

const blankPlotGrid = [ ...makeBlankPlotGrid(totalRows, spotsPerRow) ]


const Section = ({ name, plant, initialSeeds, setPlotFull }) => {
  const [seeds, setSeeds] = useState(initialSeeds)
  const [planted, setPlanted] = useState(0)
  const [rows, setRows] = useState(blankPlotGrid)
  const plotFull = planted >= totalSpots

  const buySeeds = () => {
    setSeeds(seeds + 2)

  }

  const plantSeed = () => {
    if (plotFull) {
      return false
    }
    const newRows = makeDuplicateTwoDimentionalArray(rows)
    let foundEmptySpot = false
    while (!foundEmptySpot) {
      const rowToPlant = Math.floor(Math.random() * totalRows)
      const spotToPlant = Math.floor(Math.random() * spotsPerRow)
      if (rows[rowToPlant][spotToPlant] === false) foundEmptySpot = true
      newRows[rowToPlant][spotToPlant] = true
    }
    setRows(newRows)
    setPlanted(planted + 1)
    setSeeds(seeds - 1)
    if (planted === totalSpots) setPlotFull(true)
  }

  const tillPlot = () => {
    setPlanted(0)
    setRows(blankPlotGrid)
    setPlotFull(false)
  }

  return (
    <div className='container'>
      <UnityTypography size='header2'>Planting Plot {name}</UnityTypography>
      <div className='current-values'>
        <div className='value-field'>
          <UnityTypography size='paragraph'>Seeds Remaining: {seeds}</UnityTypography>
        </div>
        <div className='value-field'>
          <UnityTypography size='paragraph'>Plants Planted: {planted}</UnityTypography>
        </div>
      </div>
      <div className='buttons-container'>
        <UnityButton
          label='Buy Some Seeds'
          type='solid'
          onClick={buySeeds}
          className='button'
        />
        <UnityButton
          label={`Plant ${plant}`}
          type='solid'
          disabled={seeds <= 0 || plotFull}
          onClick={plantSeed}
          className='button'
        />
        <UnityButton
          label={'Till the Plot'}
          type='solid'
          disabled={planted < 1}
          onClick={tillPlot}
          className='button'
        />
      </div>
      <PlantingGrid
        rows={rows}
      />
    </div>
  )
}

export default Section