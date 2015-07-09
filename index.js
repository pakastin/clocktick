
'use strict'

var slice = Array.prototype.slice
var dateNow = require('date-now')

module.exports = clocktick

function clocktick (callback, timeout, offset) {
  var self = this
  var args = slice.call(arguments, 2)

  timeout = (timeout * 1000) || 1000
  offset = (offset * 1000) || 0

  var now = dateNow()
  var nowRounded = (now / timeout | 0) * timeout
  var nextTick = timeout - (now - nowRounded) + offset

  return setTimeout(function () {
    callback && callback.apply(self, args)
  }, nextTick)
}
