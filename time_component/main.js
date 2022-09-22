import './style.css'

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
let timer = new Timer ({timerTime: 30, displayElement: timerElement, showProgressBar: true})

// setTimeout(() => { timer.update({timerTime: 5}) }, 3000)


