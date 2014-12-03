# clocktick
Clock-accurate timeout for Node.js and browser.
Basically it is identical to setTimeout, but it triggers callback function precisely on the next second.

## example
See an example [here](http://pakastin.github.io/clocktick)

## accuracy
Accuracy should be around 1–2ms.

## installation

    npm install clocktick

## usage
Usage is similar to setTimeout, but without delay parameter:

    var tick = require('clocktick')
    tick(callback) // Ticks every second

You can use the delay parameter, but it is in seconds:

    tick(callback, 2) // Ticks on 2nd second (00, 02, 04, 06, 08, 10,...)
    
You can also offset seconds:

    tick(callback, 3) // Ticks on 3rd second (03, 06, 9, 12, 15, 18, ...)
    tick(callback, 3, 1) // Ticks on 3rd+1 second (04, 07, 10, 13, 16, 19, ...)
    tick(callback, 3, 2) // Ticks on 3rd+2 second (05, 08, 11, 14, 17, 20, ...)

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

## testing
Clone to desktop and then run following commands at clocktick folder:

    npm install
    npm test

## building

    npm install
    npm run build
