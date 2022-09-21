const DEFAULT_OPTIONS = {
  timerTime: 6, 
  displayElement:null,
  //showProgressBar: true,
  
}


export default class Timer{

  #timerTime = 0
  #timeLeft
  #timerDiv
  #end = 0 // change this to stop the counter at a higher value
  #refresh = 1000 // Refresh rate in milli seconds
  #isPaused = false

  constructor(options) {
    this.update({ ...DEFAULT_OPTIONS, ...options })
    
  }

   /**
   * @param {HTMLElement} element - referens to a DIV-element to display the timer in.
   */
   set displayElement(element) {
    //console.log('element' + element.nodeName)
    if (element.nodeName == 'DIV') {
      this.#timerDiv = element
    
    } else if (element === null) {
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute("id", "timerDiv")
    document.body.appendChild(this.#timerDiv)
    console.log('element else' + element.nodeName)
    }
  }
  
  /**
   * @param {number} value  - the time in minutes.
   */

  set timerTime (value) {
    if (value === null) {
      this.#timerTime = 0
    } else {
      try{
      this.#timerTime = parseInt(value)
      console.log(this.#timerTime)
      } catch (NumberFormatException) {
    }
    }
    this.#checkIfTimeIsUp(this.#timerTime * 60)
  }

  #showProgressBar() {
    this.#timerDiv.classList.toggle('progress', true)
    
    let timerTimeInSeconds = this.#timerTime * 60
    this.#timerDiv.style.setProperty('--progress',
    this.#timeLeft / timerTimeInSeconds)

  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
      
    })
  }

  #createTimerDiv () {
    
  }

  #checkIfTimeIsUp(startTime) {
    this.#timeLeft = startTime

    if (this.#timeLeft >= this.#end) {
      setTimeout(() => { this.#displayTime() }, this.#refresh)
    }
    else { alert("Time is up! ") }
  }

  #displayTime() {
    let configTime = this.#calculateTimeUnits()
    this.#timerDiv.textContent = configTime
    this.#timeLeft--
    this.#showProgressBar()
    this.#checkIfTimeIsUp(this.#timeLeft)
  }

  #calculateTimeUnits() {
    let days = Math.floor(this.#timeLeft / 86400)
    let hours = Math.floor((this.#timeLeft - (days * 86400)) / 3600)
    let minutes = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600)) / 60)
    let secs = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

    
    return  'Total time: ' + this.#timeLeft + ' = ' + this.#checkForDays (days) + this.#timeFormat(hours) + ' : ' + this.#timeFormat(minutes) + ' : ' + this.#timeFormat(secs)
  }

  #timeFormat(timeUnit) {
    if(timeUnit == 0){
      return `00`
    }
    if(timeUnit < 10){
      return `0${timeUnit}`
    }else {
      return `${timeUnit}`
    }
  }
  
  #checkForDays (days) {
    if (days == 0){
      return `
            `
    } else {
      return `${days} Days `

    }
  }
}

// fixa pause funktion.

// fixa valbar progressbar.

// fixa vad som händer när tiden är ute.

// fixa default element

// 5 funktioner mot användaren :
//timerTime:  
//displayElement: 
//showProgressBar: 
//update:
//alarm :
//timeWarning:
//pause:






