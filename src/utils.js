export const times = (n, iterator) => {
  let accum = Array(Math.max(0, n));
  for (let i = 0; i < n; i++) accum[i] = iterator.call();
  return accum;
}

export const makeBlankPlotGrid = (numRows, numCols) => {
  const blankPlotGrid = Array(numRows)
  for (let i = 0; i < numRows; i++) {
    blankPlotGrid[i] = Array(numCols)
    for (let j = 0; j < numCols; j++) {
      blankPlotGrid[i][j] = false
    }
  }
  return blankPlotGrid
}

export const makeDuplicateTwoDimentionalArray = (array) => {
  return array.map(element => {
    if (Array.isArray(element)) return element.slice()
    return element
  }).slice()
}