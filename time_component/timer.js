const DEFAULT_OPTIONS = {
  timerTime: 6, 
  displayElement:null,
  showProgressBar: true,
  pauseOnHover: true,  
}


export default class Timer{

  #timerTime = 0
  #timeLeft
  #timerDiv
  #end = 0 // change this to stop the counter at a higher value
  #refresh = 1000 // Refresh rate in milli seconds
  #isPaused = false
  #progressInterval
  

  constructor(options) {
    this.update({ ...DEFAULT_OPTIONS, ...options })
    
  }

   /**
   * @param {HTMLElement} element - referens to a DIV-element to display the timer in.
   */
   set displayElement(element) {
    if (element.nodeName == 'DIV') {
      this.#timerDiv = element
    } else if (element === null) {
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute("id", "timerDiv")
    document.body.appendChild(this.#timerDiv)
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

  //this.#unpause = () => (this.#isPaused = false)
    //this.#pause = () => (this.#isPaused = true)
  set pauseOnHover(value) {
    if (value) {
      this.#timerDiv.addEventListener("mouseover", () => {
        this.#isPaused = true
        console.log('mouse over')
        console.log(this.#isPaused)
      })
      this.#timerDiv.addEventListener("mouseleave", () => {
        this.#isPaused = false
        console.log('mouse leave')
        console.log(this.#isPaused)
      })
    } else {
      this.#timerDiv.removeEventListener("mouseover", () => (console.log('mouse')))
      this.#timerDiv.removeEventListener("mouseleave", () => (console.log('mouse')))
    }
  }

  
  set showProgressBar(value) {
    this.#timerDiv.classList.toggle('progress', value)
  }

    #updateProgressBar (){
    // let timerTimeInSeconds = this.#timerTime * 60
    // this.#timerDiv.style.setProperty('--progress',
    // this.#timeLeft / timerTimeInSeconds)

    
      const func = () => {
        //console.log(this.#isPaused)
        if (!this.#isPaused) {
          let timerTimeInSeconds = this.#timerTime * 60
          this.#timerDiv.style.setProperty('--progress',
          this.#timeLeft / timerTimeInSeconds)
        }
        this.#progressInterval = requestAnimationFrame(func)
      }

      this.#progressInterval = requestAnimationFrame(func)
  }
  
  



  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
      
    })
  }

  #checkIfTimeIsUp(startTime) {
    this.#timeLeft = startTime

    if (this.#timeLeft >= this.#end) {
      setTimeout(() => { this.#displayTime() }, this.#refresh)
    }
    else { alert("Time is up! ") }
  }

  #displayTime() {
    if (!this.#isPaused) {
      console.log('display not pause')
    let configTime = this.#calculateTimeUnits()
    this.#timerDiv.textContent = configTime
    this.#timeLeft--
    this.#updateProgressBar()
    this.#checkIfTimeIsUp(this.#timeLeft)
    } else {
      console.log('display pause')
    this.#checkIfTimeIsUp(this.#timeLeft)
    }
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
      return ``
    } else {
      return `${days} Days `

    }
  }
}



// fixa vad som händer när tiden är ute.

// fixa default element, behövs kanske inte??

// 5 funktioner mot användaren :
//timerTime:  
//displayElement: 
//showProgressBar: 
//update:
//pause:

//alarm :
//timeWarning:







