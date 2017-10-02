const patternHandlebars = function (patternName) {
  const patternHandlebarsTemplate = require('./templates/list-of-patterns.handlebars')
  const context = {
    'patternName': patternName
  }
  const patternTemplate = patternHandlebarsTemplate(context)
  $('#empty-pattern-list').append(patternTemplate)
}

module.exports = {
  patternHandlebars
}
