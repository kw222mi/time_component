const DEFAULT_OPTIONS = {
  timerTime: 6, 
  //displayElement: timerElement,
  //showProgress: true,
  position: "center",
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

   set displayElement(element) {
    if (element) {
      this.#timerDiv = element
    } else {

    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute("id", "timerDiv")
    document.body.appendChild(this.#timerDiv)
    }
  }
  

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

  #showProgress() {
    //this.#timerDiv.classList.toggle('#timerDiv::after', true)
    this.#timerDiv.style.setProperty('--progress',
    1 - this.#timerTime / this.#timeLeft)
   

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

  #configureTime() {
    let days = Math.floor(this.#timeLeft / 86400)
    let hours = Math.floor((this.#timeLeft - (days * 86400)) / 3600)
    let minutes = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600)) / 60)
    let secs = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

    return  this.#timeLeft + "(" + days + " Days " + hours + " Hours " + minutes + " Minutes and " + secs + " Secondes " + ")"
  }

  #displayTime() {
    let configTime = this.#configureTime()
    this.#timerDiv.textContent = configTime
    this.#timeLeft--
    this.#checkIfTimeIsUp(this.#timeLeft)
    this.#showProgress()
  }


}

// fixa configure time, visar ej 0.

// fixa pause funktion.

// fixa valbar progressbar.

// fixa vad som händer när tiden är ute.



