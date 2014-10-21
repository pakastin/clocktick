
'use strict'

var dateNow = require('date-now')

module.exports = clocktick

function clocktick (callback, timeout) {
  var self, args, now, nowRounded, nextTick
  var timeout = timeout || 1

  self = this
  args = Array.prototype.slice.call(arguments, 1)
  now = dateNow()
  nowRounded = (now / timeout*1000 | 0) * timeout*1000
  nextTick = timeout*1000 - (now - nowRounded)

  return setTimeout(function () {
    callback && callback.apply(self, args)
  }, nextTick)
}
