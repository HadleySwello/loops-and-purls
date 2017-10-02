'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const views = require('./views')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
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
})

// onclick="openTab(event, 'landingPage')"
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
