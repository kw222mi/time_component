/**
 * This is an example of how to use the Timer class.
 * 
 * You need to create a <div> to put the timer in and pass a referens 
 * of the element to the class. All other arguments are optional (but have
 * a default value).
 * More information in the README-file.
 *
 */

import '/public/css/style.css'
import Timer from '/src/Timer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Example app</h1>
    <div id='timerDiv'></div>
    
  </div>
`
let timerDiv = document.querySelector('#timerDiv')

let timer = new Timer ({
  displayElement: timerDiv,
  timerTime: 30,
  showProgressBar: true,
  pauseOnHover: true,
  timeIsUpAction: 'sound',
  tenSecondsLeftWarning: true,
})

 //setTimeout(() => { timer.update({timerTime: 60, timeIsUpAction: 'color'}) }, 5000)

 //setTimeout(() => { timer.remove() }, 5000)


