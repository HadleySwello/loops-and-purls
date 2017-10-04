'use strict'

const getChartData = function (event) {
  alert('STOP IT')
  event.preventDefault()
  const pattern = {}
  const rowData = $('#chart').find('tr:not(.headerRow)')
  pattern['title'] = $('#title-input').val()
  for (let i = 0; i < rowData.length; i++) {
    pattern['row' + i] = getRowData(rowData[i])
  }
  console.log(JSON.stringify(pattern))
  return JSON.stringify(pattern)
}

const getRowData = function (row) {
  const inputArray = $(row).find('td:not(.rowLabel) input')
  delete inputArray.prevObject
  // console.log($(row))
  const inputValue = inputArray.map((index, input) => {
    return $(input).val()
  })
  delete inputValue.prevObject
  return inputValue
}

module.exports = {
  getChartData
}
