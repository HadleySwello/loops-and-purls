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
  for (let h = 0; h < patternArray.length; h++) {
    if (patternArray[h] === '-') {
      patternArray[h] = ' Knit 1'
    } else if (patternArray[h] === '.') {
      patternArray[h] = ' Purl 1'
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
  // convert Array to Object
  const obj = patternArray.reduce((acc, cur, i) => {
    acc[i] = cur
    return acc
  }, {})
  // console.log('obj original is ' + obj)
  // look Through each key/value
  for (const key in obj) {
    if (obj[key] === 'knit 1' && obj[key - 1] !== undefined) {
      // if first four character match
      if (obj[key].substring(0, 4) === obj[key - 1].substring(0, 4)) {
        obj[key] = 'knit ' +
          (Number(obj[key].substring(5)) + Number(obj[key - 1].substring(5)))
        // creates empty value instead of deleteing
        obj[key[0] - 1] = ''
      }
    }
    if (obj[key] === 'purl 1') {
      if (obj[key] === obj[key - 1]) {
        obj[key] = 'purl ' +
          (Number(obj[key].substring(5)) + Number(obj[key - 1].substring(5)))
        obj[key[0] - 1] = ''
      }
    } if (obj[key] !== 'Purl 1' || 'Knit 1') {
      obj[key] = obj[key]
    }
  }
  // console.log('obj after is ' + obj)
  // convert to array
  const result = Object.keys(obj).map(function (key) {
    // console.log([obj[key]])
    return [obj[key]]
  })
  // console.log('result original is ' + result)
  // flattens array
  const flattened = result.reduce((a, b) => {
    return a.concat(b)
  })
  // console.log('result flattened is ' + flattened)
  // filters out '' values
  const final = flattened.filter((item) => {
    if (item !== '') return true
  })
  console.log('final is ' + final)
  $('#empty-pattern-write-up').append(final)
  return final
}

module.exports = {
  getChartData,
  compilePattern
}
