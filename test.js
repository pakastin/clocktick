
'use strict'

var test = require('tape')
var tick = require('clocktick')
var dateNow = require('date-now')
var totalOffset = 0

test('Testing a tick (without callback arguments)', function (t) {
  t.plan(1)

  tick(function () {
    var now = new Date()
    totalOffset += now % 1000
    t.pass('Tick at ' + printTimestamp(now))
  })
})

test('Testing two ticks (with callback arguments)', function (t) {
  t.plan(2)

  var ticked = 1

  tick(tickCallback, ticked)

  function tickCallback (a, b) {
    var now = new Date()
    totalOffset += now % 1000
    if (a < 2) {
      t.equal(a, 1, 'Tick at ' + printTimestamp(now))
      a++
      tick(tickCallback, a, 2)
      return
    }
    t.equal(b, 2, 'Tick at ' + printTimestamp(now))
  }
})

test('Testing canceling', function (t) {
  t.plan(1)

  var timeout = tick(function () {
    var now = new Date()
    t.fail("Tick at " + printTimestamp(now))
  })
  clearTimeout(timeout)
  t.pass("Tick canceled.")
})

function printTimestamp (now) {
  var hours = ('0' + now.getHours()).slice(-2)
  var minutes = ('0' + now.getMinutes()).slice(-2)
  var seconds = ('0' + now.getSeconds()).slice(-2)
  var milliseconds = ('00' + now.getMilliseconds()).slice(-3)

  return hours + ':' + minutes + ':' + seconds + ':' + milliseconds
}
