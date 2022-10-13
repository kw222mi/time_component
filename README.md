# Timer component

A simple timer component with a countdown and an optional progressbar.

![bild1](/time_component/public/test_img/1.png)


Functions:

- Progressbar.

- When time is up: change color, alert or sound.

- Optional warning (change color) when 10s left.

- Optional pause on hover.


## How to use 

Create a Timer object and pass the pararmeters

    let timerDiv = document.querySelector('#timerDiv')
    let timer = new Timer ({
        displayElement: timerDiv,
        timerTime: 30,
        showProgressBar: true,
        pauseOnHover: true,
        timeIsUpAction: 'sound',
        tenSecondsLeftWarning: true,
    })


| Parameters name               | type     |  detail |
| ------------------------------------------|----------|---------|
|    displayElement            |HTML-element |          referens to a HTML-element     |
|     timerTime                |number   |            The time in seconds     |
|     showProgressBar          | boolean |               |
|    pauseOnHover              |boolean |                |
|    timeIsUpAction            |String |   color, alert or sound            |
|    tenSecondsLeftWarning     |boolean |              |

Functions to use:

| Function name               | Arguments     |  detail |
| ------------------------------------------|----------|---------|
|  pause()     |  ---     | Pause the timer.       |
|   start()   |   ---   |  Start the timer again.      |
|  remove()    |  ---    |   Remove the timer from the DOM.     |
|  update()    | parameters     |  Use the update to pass one or more parameters      |
| setdisplayElement()     |  HTML-element    |  referens to a HTML-element       |
|   settimerTime()   |  number     |   The time in seconds      |
| setshowProgressBar()     |  boolean    |        |
|  setpauseOnHover()    |   boolean   |        |
|  settimeIsUpAction()    |   String   |    color, alert or sound     |
|  settenSecondsLeftWarning()    |   boolean   |        |


See example.js for more information

## License

Copyright (c) 2022 Therese Weidenstedt Released under the [MIT license](http://opensource.org/licenses/mit-license.php)


