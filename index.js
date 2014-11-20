
'use strict'

var dateNow = require('date-now')

module.exports = clocktick

function clocktick (callback, timeout, offset) {
  var self, args, now, nowRounded, nextTick
  var timeout = (timeout * 1000) || 1000
  var offset = (offset * 1000) || 0

  self = this
  args = Array.prototype.slice.call(arguments, 2)
  now = dateNow()
  nowRounded = (now / timeout | 0) * timeout
  nextTick = timeout - (now - nowRounded) + offset

  return setTimeout(function () {
    callback && callback.apply(self, args)
  }, nextTick)
}
