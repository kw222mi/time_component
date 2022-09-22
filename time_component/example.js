/**
 * This is an example of how to use the Timer class.
 * 
 * You need to create a <div> to put the timer in and pass a referens 
 * of the element to the class. All other arguments are optional (but have
 * a default value).
 * More information in the README-file.
 *
 */

import './style.css'
import Timer from './Timer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Example app</h1>
    <div id='timerDiv'></div>
  </div>
`
let timerElement = document.querySelector('#timerDiv')
let timer = new Timer ({
  displayElement: timerElement,
  timerTime: 30,
  showProgressBar: true,
  pauseOnHover: true,
  timeIsUpAction: 'alert',
  tenSecondsLeftWarning: true,
})

// setTimeout(() => { timer.update(timerTime: 60, timeIsUpAction: 'color') }, 5000)

// setTimeout(() => { timer.remove() }, 5000)


