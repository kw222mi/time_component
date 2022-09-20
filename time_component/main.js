import './style.css'
import './kw-timer.js'
import Timer from './Timer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Example app</h1>
  
    <div>
     
    
    </div>
    <kw-timer></kw-timer>
    </div>
  
  </div>
`

let timer = new Timer ({timerTime: 6})


