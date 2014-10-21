
'use strict'

var dateNow = require('date-now')

module.exports = clocktick

function clocktick (callback, timeout) {
  var self, args, now, nowRounded, nextTick
  var timeout = timeout * 1000 || 1000

  self = this
  args = Array.prototype.slice.call(arguments, 2)
  now = dateNow()
  nowRounded = (now / timeout | 0) * timeout
  nextTick = timeout - (now - nowRounded)

  return setTimeout(function () {
    callback && callback.apply(self, args)
  }, nextTick)
}
