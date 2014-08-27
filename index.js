
'use strict'

var dateNow = require('date-now')

module.exports = clocktick

function clocktick (callback) {
  var self, args, now, nowRounded, nextTick

  self = this
  args = Array.prototype.slice.call(arguments, 1)
  now = dateNow()
  nowRounded = (now / 1000 | 0) * 1000
  nextTick = 1000 - (now - nowRounded)

  return setTimeout(function () {
    callback && callback.apply(self, args)
  }, nextTick)
}
