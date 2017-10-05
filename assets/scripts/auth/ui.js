'use strict'
const app = require('./app.js')
const template = require('../handlebars-data')
// const template = require('../handlebars-data')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('signed up Successfully')
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: signUp')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log('signed in!')
  console.log(app.user)
  $('#message').html('You Have Signed In!')
}

const signInFailure = (error) => {
  console.log(error)
  $('#message').html('Nice Try Dude: Invalid password')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('#message').html('Successfully changed password!')
}

const changePasswordfailure = (error) => {
  console.log(error)
  $('#message').html('Nice Try Dude: Invalid OLD password.')
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded in logOutSuccess')
  $('#message').html('You are now logged out.')
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: logOutFailure')
}

const getChartListSuccess = (data) => {
  console.log(data)
  console.log('Succeded in getChartListSuccess')
  console.log(data.patterns.length)
  $('#empty-pattern-list').empty()
  for (let i = 0; i < data.patterns.length; i++) {
    const patternName = data.patterns[i].title
    console.log(patternName)
    const dataId = data.patterns[i].id
    template.patternHandlebars(patternName, dataId)
  }
}

const getChartListFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: getChartListFailure')
}

const deleteChartSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deleteChartSuccess')
}

const deleteChartFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: deleteChartFailure')
}

const createChartSuccess = (data) => {
  console.log(data)
  console.log('Succeded in createChartSuccess')
}

const createChartFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: createChartFailure')
}

const updateChartSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updateChartSuccess')
}

const updateChartFailure = (error) => {
  console.log(error)
  console.log('Nice Try Dude: updateChartFailure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordfailure,
  logOutSuccess,
  logOutFailure,
  getChartListSuccess,
  getChartListFailure,
  deleteChartSuccess,
  deleteChartFailure,
  createChartSuccess,
  createChartFailure,
  updateChartSuccess,
  updateChartFailure
}
