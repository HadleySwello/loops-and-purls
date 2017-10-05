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

module.exports = {
  getChartData
}
