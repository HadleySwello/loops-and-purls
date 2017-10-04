'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const views = require('./views')
const events = require('./auth/events.js')
const handlebars = require('./handlebars-data')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // /////views///// //
  $('#landingPageBtn').click(function () {
    views.openTab(event, 'landingPage')
  })
  $('#aboutPageBtn').click(function () {
    views.openTab(event, 'aboutPage')
  })
  $('#chartPageBtn').click(function () {
    views.openTab(event, 'chartPage')
  })
  $('#myPatternsPageBtn').click(function () {
    views.openTab(event, 'myPatternsPage')
  })
  // ////functionality//// //
  $('#chartPageBtn').on('click', handlebars.chartLogic)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('.sign-out').on('click', events.onSignOut)
  $('#chart-form').on('submit', events.onCreateChart)
  $('#myPatternsPageBtn').on('click', events.onGetChartList)
})

$(document).on('click', '.patternDeleteButton', events.onDeleteChart)
