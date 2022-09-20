import './style.css'
import './kw-timer.js'
import Timer from './Timer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Example app</h1>
  
    <div id= 'timerDiv'>
    
    </div>
    
    </div>
  
  </div>
`
let timerElement = document.querySelector('#timerDiv')
let timer = new Timer ({timerTime: 6, displayElement: timerElement})


