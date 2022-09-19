import './style.css'
import { setupTimer } from './timer.js'
import './kw-timer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Example app</h1>
  
    <div>
    
    <input type='text' id='timeInput'/>
    <button type='submit' id= 'timeButton' > Submit </button>
    
    </div>
    <div id='timeOutput' >
    </div>

    <kw-timer></kw-timer>
   
  </div>
`
setupTimer(document.querySelector('#timeInput', '#timeOutput'))
