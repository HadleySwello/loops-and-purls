'use strict'

const getChartData = function () {
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

const getRowData = function (row) {
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
      const value = $('#row' + [i] + 'cell' + [j]).val()
      patternArray.push(value)
    }
  }
  console.log(patternArray)
  for (let h = 0; h < patternArray.length; h++) {
    if (patternArray[h] === '-') {
      patternArray[h] = 'Knit 1 '
      console.log('# [h] is ' + patternArray[h])
    } else if (patternArray[h] === '.') {
      patternArray[h] = 'Purl 1 '
    } else {
      patternArray[h] = patternArray[h] + ' '
    }
  }
  console.log(patternArray)
  const patternString = patternArray.toString()
  console.log(patternString)
  $('#empty-pattern-write-up').append(patternString)
}

module.exports = {
  getChartData,
  compilePattern
}
