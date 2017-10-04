const patternHandlebars = function(patternName, dataId) {
  const patternHandlebarsTemplate = require('./templates/list-of-patterns.handlebars')
  const context = {
    'patternName': patternName,
    'dataId': dataId
  }
  const patternTemplate = patternHandlebarsTemplate(context)
  $('#empty-pattern-list').append(patternTemplate)
}

const chartHandlebars = function(dataObj) {
  const chartHandlebarsTemplate = require('./templates/chart.handlebars')
  const context = {
    'cellData': dataObj
  }
  const chartTemplate = chartHandlebarsTemplate(context)
  $('#chart').append(chartTemplate)
}

const chartLogic = function() {
  // chart constraints
  const height = 11
  const width = 11

  // generate default cell object
  const emptyCells = Array(width).fill('-')
  const dataObj = {}
  for (let row = 0; row < height; row++) {
    dataObj['row' + row] = emptyCells
  }

  // clear the chart
  $('#chart').empty()

  // set up the template
  chartHandlebars(dataObj)
}

(function() {
  function checkCondition(v1, operator, v2) {
    switch (operator) {
      case '==':
        return (v1 == v2)
      case '===':
        return (v1 === v2)
      case '!==':
        return (v1 !== v2)
      case '<':
        return (v1 < v2)
      case '<=':
        return (v1 <= v2)
      case '>':
        return (v1 > v2)
      case '>=':
        return (v1 >= v2)
      case '&&':
        return (v1 && v2)
      case '||':
        return (v1 || v2)
      default:
        return false;
    }
  }

  Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
    return checkCondition(v1, operator, v2) ?
      options.fn(this) :
      options.inverse(this)
  })
}())

module.exports = {
  patternHandlebars,
  chartHandlebars,
  chartLogic
}
