'use strict'

const getChartData = function() {
  const patternJson = {}
  patternJson['pattern'] = {}
  const rowData = $('#chart').find('tr:not(.headerRow)')
  patternJson.pattern['title'] = $('#title-input').val()
  patternJson.pattern['chart'] = {}
  for (let i = 0; i < rowData.length; i++) {
    patternJson.pattern.chart['row' + i] = getRowData(rowData[i])
  }
  console.log(patternJson)
  return (patternJson)
}

const getRowData = function(row) {
  const inputArray = $(row).find('td:not(.rowLabel) input')
  delete inputArray.prevObject
  // console.log($(row))
  const inputValue = inputArray.map((index, input) => {
    return $(input).val()
  })
  delete inputValue.prevObject
  delete inputValue['length']
  return inputValue
}

const compilePattern = function () {
  $('#empty-pattern-write-up').empty()
  const patternArray = []
  for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 10; j++) {
      const value = $('#row' + i + 'cell' + j).val()
      patternArray.push(value)
    }
  }
  for (let h = 0; h < patternArray.length; h++) {
    if (patternArray[h] === '-') {
      patternArray[h] = 'Knit 1 '
    } else if (patternArray[h] === '.') {
      patternArray[h] = 'Purl 1 '
    } else if (patternArray[h] === '/') {
      patternArray[h] = 'K2Tog '
    } else if (patternArray[h] === '\\') {
      patternArray[h] = 'SSK '
    } else if (patternArray[h] === 'O') {
      patternArray[h] = 'Yarn Over '
    } else if (patternArray[h] === '0') {
      patternArray[h] = 'Yarn Over '
    } else if (patternArray[h] === '^') {
      patternArray[h] = 'Sl1, K2Tog, PSSO '
    } else if (patternArray[h] === 'o') {
      patternArray[h] = 'Yarn Over '
    } else {
      patternArray[h] = patternArray[h] + ' '
    }
  }
  // we will accumulate values in a new array where "Knit x" and "Purl x" values will
  // be pushed if we get more than one "Knit 1" or 'Purl 1" in a row
  const compressedArr = []

  // counts consecutive "Knit 1" or "Purl 1" entires
  let acc = 1

  // this loop compares previous to current indcies in the input array, and pushes values
  // for previous indicies to compressedArr according to certain conditions. This means that
  // it will miss the last entry in the input array because it will never be 'previous index'.
  // In order to get around this, a dummy value "last entry" has been added to the input array
  // to accomodate this pattern. This value will not be pushed to compressedArr.
  patternArray.push('last entry')

  // loop through every entry in the input array
  for (let i = 0; i < patternArray.length; i++) {
    // there is not previous index value to compare to on the first index
    if (i === 0) {
      continue
    }

    // get the current and previous index values
    const prevVal = patternArray[i - 1]
    const currVal = patternArray[i]

    // previous index and current index are equal and are either "Knit 1 " or "Purl 1"
    if (prevVal === currVal && ['Knit 1 ', 'Purl 1 '].indexOf(prevVal) > -1) {
      acc++
      continue
      // previous index and current index are not equal, and previous index is either "Knit 1 " or "Purl 1"
    } else if (prevVal !== currVal && ['Knit 1 ', 'Purl 1 '].indexOf(prevVal) > -1) {
      const accVal = `${prevVal.split(' ')[0]} ${acc}`
      compressedArr.push(accVal)
      acc = 1
      continue
      // previous index was not "Knit 1" or "Purl 1"
    } else {
      compressedArr.push(prevVal)
    }
  }
  console.log('compressedArr is ' + compressedArr)
  $('#empty-pattern-write-up').append(compressedArr)
  return compressedArr
}

module.exports = {
  getChartData,
  compilePattern
}
