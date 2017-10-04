const Handlebars = require('handlebars')

const patternHandlebars = function (patternName, dataId) {
  const patternHandlebarsTemplate = require('./templates/list-of-patterns.handlebars')
  const context = {
    'patternName': patternName,
    'dataId': dataId
  }
  const patternTemplate = patternHandlebarsTemplate(context)
  $('#empty-pattern-list').append(patternTemplate)
}

// Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
//   switch (operator) {
//     case '==':
//       return (v1 == v2) ? options.fn(this) : options.inverse(this)
//     case '===':
//       return (v1 === v2) ? options.fn(this) : options.inverse(this)
//     case '!==':
//       return (v1 !== v2) ? options.fn(this) : options.inverse(this)
//     case '<':
//       return (v1 < v2) ? options.fn(this) : options.inverse(this)
//     case '<=':
//       return (v1 <= v2) ? options.fn(this) : options.inverse(this)
//     case '>':
//       return (v1 > v2) ? options.fn(this) : options.inverse(this)
//     case '>=':
//       return (v1 >= v2) ? options.fn(this) : options.inverse(this)
//     case '&&':
//       return (v1 && v2) ? options.fn(this) : options.inverse(this)
//     case '||':
//       return (v1 || v2) ? options.fn(this) : options.inverse(this)
//     default:
//       return options.inverse(this)
//   }
// })

const chartHandlebars = function (dataObj, headerRow) {
  const chartHandlebarsTemplate = require('./templates/chart.handlebars')
  const context = {
    'cellData': dataObj,
    'headerRow': headerRow
  }
  const chartTemplate = chartHandlebarsTemplate(context)
  $('#chart').append(chartTemplate)
}

const chartLogic = function () {
  // chart constraints
  const height = 10
  const width = 10

  // generate default cell object
  const emptyCells = Array(width).fill('-')
  emptyCells.unshift(' ')
  const dataObj = {}
  const headerRow = Array(width + 1).fill().map((value, i) => i)
  // dataObj['topHeader'] = Array(width + 1).fill().map((value, i) => i)
  for (let row = 0; row < height; row++) {
    dataObj['row' + row] = emptyCells
  }

  // clear the chart
  $('#chart').empty()

  // set up the template
  chartHandlebars(dataObj, headerRow)
}

module.exports = {
  patternHandlebars,
  chartHandlebars,
  chartLogic
}
