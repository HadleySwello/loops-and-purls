const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
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
  const data = getFormFields(this)
  event.preventDefault()
  api.createChart(data)
    .then(ui.createChartSuccess)
    .catch(ui.createChartFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetChartList,
  onDeleteChart,
  onCreateChart
}
