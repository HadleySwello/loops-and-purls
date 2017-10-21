const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const concat = require('../concat-logic')
// const handlebars = require('../handlebars-data')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(getFormFields(this))
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onGetChartList = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  api.getChartList()
    .then(ui.getChartListSuccess)
    .catch(ui.getChartListfailure)
}

const onDeleteChart = function (event) {
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deleteChart(dataId)
    .then(ui.deleteChartSuccess)
    .catch(ui.deleteChartFailure)
}

const onCreateChart = function (event) {
  event.preventDefault()
  const data = concat.getChartData()
  const pattern = JSON.stringify(data.pattern.chart)
  const paragraph = $('#empty-pattern-write-up').html()
  console.log(paragraph)
  api.createChart(data, paragraph, pattern)
    .then(ui.createChartSuccess)
    .catch(ui.createChartFailure)
}

const onUpdateChart = function (event) {
  event.preventDefault()
  const dataId = this.getAttribute('data-id')
  const title = getFormFields(this).title
  console.log('update dataId = ' + dataId)
  api.updateChart(dataId, title)
    .then(ui.updateChartSuccess)
    .catch(ui.updateChartFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetChartList,
  onDeleteChart,
  onCreateChart,
  onUpdateChart
}
