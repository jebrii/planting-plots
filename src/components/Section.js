import React, { useState } from 'react'

import '../styles/Section.css'

import {
  makePlotGrid,
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

const Section = ({ name, plant, initialSeeds, onFire, setOnFire, timeToGrow=5 }) => {
  const [harvestTimeouts, setHarvestTimeouts] = useState([])
  const [seeds, setSeeds] = useState(initialSeeds)
  const [planted, setPlanted] = useState(0)
  const [rows, setRows] = useState(makePlotGrid(totalRows, spotsPerRow))
  const plotFull = planted >= totalSpots
  const type = plant.toLowerCase()

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
      const thisSpot = newRows[rowToPlant][spotToPlant]
      if (!!thisSpot && thisSpot.planted === false) {
        foundEmptySpot = true
        thisSpot.planted = true
        thisSpot.type = type
        setHarvest(rowToPlant, spotToPlant)
      }
      console.log("plantSeed -> foundEmptySpot", foundEmptySpot)
    }
    setRows(newRows)
    setPlanted(planted + 1)
    setSeeds(seeds - 1)
  }

  const tillPlot = () => {
    setPlanted(0)
    setRows(makePlotGrid(totalRows, spotsPerRow))
    setOnFire(false)
    harvestTimeouts.forEach(timeout => clearTimeout(timeout))
    setHarvestTimeouts([])
  }

  const setHarvest = (rowToPlant, spotToPlant) => {
    const newHarvestTimeout = setTimeout(() => {
      const newRows = makeDuplicateTwoDimentionalArray(rows)
      const thisSpot = newRows[rowToPlant][spotToPlant]
      thisSpot.ready = true
      setRows(newRows)
    }, timeToGrow * 1000)
    setHarvestTimeouts([ ...harvestTimeouts, newHarvestTimeout])
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
          disabled={!onFire && planted < 1}
          onClick={tillPlot}
          className='button'
        />
      </div>
      <PlantingGrid
        rows={rows}
        onFire={onFire}
      />
    </div>
  )
}

export default Section