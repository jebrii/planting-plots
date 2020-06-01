export const initialValue = {
  planted: false,
  ready: false,
  fire: false
}

export const times = (n, iterator) => {
  let accum = Array(Math.max(0, n));
  for (let i = 0; i < n; i++) accum[i] = iterator.call();
  return accum;
}

export const makePlotGrid = (numRows, numCols, value) => {
  const plotGrid = Array(numRows)
  for (let i = 0; i < numRows; i++) {
    plotGrid[i] = Array(numCols)
    for (let j = 0; j < numCols; j++) {
      const spotVal = Array.isArray(value) ? value.splice :
        typeof value === 'object' && value !== null ? { ...value } :
        value
      plotGrid[i][j] = spotVal || { ...initialValue }
    }
  }
  return plotGrid
}

export const makeDuplicateTwoDimentionalArray = (array) => {
  return array.map(element => {
    if (Array.isArray(element)) return element.slice()
    return element
  }).slice()
}