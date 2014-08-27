# clocktick
Clock-accurate timeout for Node.js and browser.
Basically it is identical to setTimeout, but it triggers callback function precisely on every second.

## accuracy
Accuracy should be around 1–2ms.

## installation

    npm install clocktick

## testing
Clone to desktop and then run following commands at clocktick folder

    npm install
    npm test

## usage
Usage is similar to setTimeout, but without delay parameter:

    var tick = require('clocktick')
    tick(callback, parameters...)

## repeat

You can repeat the tick by just calling it again:

    tick(callback)

    function callback () {
      console.log('tick')
      tick(callback)
    }

## cancel

You can cancel the tick by using clearTimeout:

    var timeout = tick(callback)

    clearTimeout(timeout)
