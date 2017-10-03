'use strict'

const height = 10
const width = 10

for (let i = 0; i < height; i++) {
  let message = ''
  for (let j = 0; j < width; j++) {
    message += '|r' + i + 'c' + j + '|'
  }
  console.log(message)
}


const chartLogic = function () {
  $('#chart').empty()
  for (let i = 0; i < data.patterns.length; i++) {
    const patternName = data.patterns[i].title
    console.log(patternName)
    const dataId = data.patterns[i].id
    template.patternHandlebars(patternName, dataId)
  }
}




<form id="chart-form">
  <table>
    <tr class="row-header">
      <th>*</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
    </tr>
    <tr class="row1">
      <th>1</th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
      <th><input type="text" value="-" name="chart"></th>
    </tr>
    <tr class="row2">
      <th>2</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row3">
      <th>3</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row4">
      <th>4</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row5">
      <th>5</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row6">
      <th>6</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row7">
      <th>7</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row8">
      <th>8</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row9">
      <th>9</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
    <tr class="row10">
      <th>10</th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
      <th><input type="text" name="chart"></th>
    </tr>
  </table>
  <br></br>
  <input class="title-input" type="text" name="title" placeholder="Pattern Title">
  <button type="submit" name="submit">Save Pattern</button>
  <br></br>
  <br></br>
  <br></br>
</form>
