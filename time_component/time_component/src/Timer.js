const DEFAULT_OPTIONS = {
  timerTime: 300,
  displayElement: null,
  showProgressBar: true,
  pauseOnHover: true,
  timeIsUpAction: 'color',
  tenSecondsLeftWarning: true
}

export default class Timer {

  #timerTime = 0
  #timeLeft
  #timerDiv
  #end = 0 // change this to stop the counter at a higher value
  #refresh = 1000 // Refresh rate in milli seconds
  #isPaused = false
  #progressBarInterval
  #timeIsUpAction
  #tenSecondsLeftWarning

  constructor(options) {
    this.update({ ...DEFAULT_OPTIONS, ...options })
  }

  /**
  * Default time set to 300s.
  *
  * @param {HTMLElement} element - referens to a DIV-element to display the timer.
  */
  set displayElement(element) {
    if (element == null) {
      this.#createtimerDiv()
    } else if (element.nodeName == 'DIV') {
      this.#timerDiv = element
    } else {
      this.#createtimerDiv()
    }
  }

  #createtimerDiv(){
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute("id", "timerDiv")
    document.body.appendChild(this.#timerDiv)
  }

  /**
   * @param {number} number  - the time in seconds.
   */

  set timerTime(number) {
    if (number === null) {
      this.#timerTime = 0
    } else {
      try {
        this.#timerTime = parseInt(number)
      } catch (NumberFormatException) {
      }
    }
    this.#checkIfTimeIsUp(this.#timerTime)
  }

  /**
   * True by default.
   *
   * @param {boolean} boolean
   */
  set pauseOnHover(boolean) {
    if (boolean) {
      this.#addEventlisteners()
    } else {
      this.#removeEventListeners()
    }
  }

  #addEventlisteners () {
    this.#timerDiv.addEventListener("mouseover", () => {
      this.#isPaused = true
    })
    this.#timerDiv.addEventListener("mouseleave", () => {
      this.#isPaused = false
    })
  }

  #removeEventListeners() {
    this.#timerDiv.removeEventListener("mouseover", () => {
      this.#isPaused = true
    })
    this.#timerDiv.removeEventListener("mouseleave", () => {
      this.#isPaused = false
    })
  }

  /**
   * Set the action for when time is up. 
   * color - change the background to red.
   * alert - (default) get an alert window with text "Time is up!"
   * sound - makes a carhorn sound when time is up.
   *
   * @param {String} string
   */
  set timeIsUpAction(string) {
    if (string == 'sound') {
      this.#setupSound()
    }
    this.#timeIsUpAction = string
  }

  #timeIsUp() {
    if (this.#timeIsUpAction === 'alert') {
      alert("Time is up! ")
    }
    if (this.#timeIsUpAction === 'sound') {
      this.#soundTimer()
    }
    if (this.#timeIsUpAction === 'color') {
      this.#timeUpColorChange()
    }
  }

  /**
   * User need to start the sound event because of restrictions in the
   * browser.
   */
  #setupSound() {
    this.#isPaused = true
    let soundButton = document.createElement('button')
    soundButton.setAttribute("id", "soundButton")
    soundButton.textContent = 'Start timer'
    this.#timerDiv.appendChild(soundButton)
    soundButton.addEventListener("click", () => this.#soundTimer())
  }

  #soundTimer() {
    this.#isPaused = false
    setTimeout(() => { this.#playSound() }, this.#timerTime * 1000)

  }

  #playSound() {
    const audio = new Audio('./src/sound/car-horn-6408.mp3')
    audio.play()
  }

  #timeUpColorChange() {
    this.#timerDiv.style.setProperty('background-color', 'red')
  }


  /**
   * Change the background color to orange when 10 s left.
   * True by default.
   *
   * @param {boolean} boolean
   */
  set tenSecondsLeftWarning(boolean) {
    this.#tenSecondsLeftWarning = boolean
  }

  #tenSecondsLeftColorChange() {
    this.#timerDiv.style.setProperty('background-color', 'orange')
  }

  /**
   * Default true.
   *
   * @param {boolean} boolean
   */
  set showProgressBar(boolean) {
    this.#timerDiv.classList.toggle('progress', boolean)
  }

  #updateProgressBar() {
    const func = () => {
      if (!this.#isPaused) {
        this.#timerDiv.style.setProperty('--progress',
          this.#timeLeft / this.#timerTime)
      }
      this.#progressBarInterval = requestAnimationFrame(func)
    }
    this.#progressBarInterval = requestAnimationFrame(func)
  }

  #checkIfTimeIsUp(startTime) {
    this.#timeLeft = startTime
    if (this.#tenSecondsLeftWarning && this.#timeLeft < 10) {
      this.#tenSecondsLeftColorChange()
    }
    if (this.#timeLeft >= this.#end) {
      setTimeout(() => { this.#displayTime() }, this.#refresh)
    }
    else {
      this.#timeIsUp()
    }
  }

  #displayTime() {
    if (!this.#isPaused) {
      let configTime = this.#calculateTimeUnits()
      this.#timerDiv.textContent = configTime
      this.#timeLeft--
      this.#updateProgressBar()
      this.#checkIfTimeIsUp(this.#timeLeft)
    } else {
      this.#checkIfTimeIsUp(this.#timeLeft)
    }
  }

  #calculateTimeUnits() {
    let days = Math.floor(this.#timeLeft / 86400)
    let hours = Math.floor((this.#timeLeft - (days * 86400)) / 3600)
    let minutes = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600)) / 60)
    let secs = Math.floor((this.#timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

    return this.#makeTimeString(days, hours, minutes, secs)
  }

  #makeTimeString(days, hours, minutes, secs) {
    return this.#checkForDays(days) + this.#timeFormat(hours) + ' : ' + this.#timeFormat(minutes) + ' : ' + this.#timeFormat(secs)
  }

  #timeFormat(timeUnit) {
    if (timeUnit == 0) {
      return `00`
    }
    if (timeUnit < 10) {
      return `0${timeUnit}`
    } else {
      return `${timeUnit}`
    }
  }

  #checkForDays(days) {
    if (days == 0) {
      return ``
    } else {
      return `${days} Days `
    }
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
    })
  }

  remove() {
    cancelAnimationFrame(this.#progressBarInterval)
    this.#timerDiv.remove()
    this.#timerDiv.removeEventListener("mouseover", () => {
      this.#isPaused = true
    })
    this.#timerDiv.removeEventListener("mouseleave", () => {
      this.#isPaused = false
    })
  }

}

