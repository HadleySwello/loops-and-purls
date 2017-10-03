const patternHandlebars = function (patternName, dataId) {
  const patternHandlebarsTemplate = require('./templates/list-of-patterns.handlebars')
  const context = {
    'patternName': patternName,
    'dataId': dataId
  }
  const patternTemplate = patternHandlebarsTemplate(context)
  $('#empty-pattern-list').append(patternTemplate)
}

const chartHandlebars = function (id) {
  const chartHandlebarsTemplate = require('./templates/chart.handlebars')
  const context = {
    'id': id
  }
  const chartTemplate = chartHandlebarsTemplate(context)
  $('#chart').append(chartTemplate)
}

module.exports = {
  patternHandlebars,
  chartHandlebars
}
