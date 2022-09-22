const DEFAULT_OPTIONS = {
  timerTime: 300,
  displayElement: null,
  showProgressBar: true,
  pauseOnHover: true,
  timeIsUpAction: 'color',
  tenSecondsLeftWarning: true,
 
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

  set timerTime(value) {
    if (value === null) {
      this.#timerTime = 0
    } else {
      try {
        this.#timerTime = parseInt(value)
        console.log(this.#timerTime)
      } catch (NumberFormatException) {
      }
    }
    this.#checkIfTimeIsUp(this.#timerTime)
  }

  /**
   * @param {boolean} value
   */
  set pauseOnHover(value) {
    if (value) {
      this.#timerDiv.addEventListener("mouseover", () => {
        this.#isPaused = true
      })
      this.#timerDiv.addEventListener("mouseleave", () => {
        this.#isPaused = false
      })
    } else {
      this.#timerDiv.removeEventListener("mouseover", () => {
        this.#isPaused = true
      })
      this.#timerDiv.removeEventListener("mouseleave", () => {
        this.#isPaused = false
      })
    }
  }

  /**
   * @param {String} value
   */
  set timeIsUpAction(value) {
    this.#timeIsUpAction = value
  }

  /**
   * @param {boolean} value
   */
  set tenSecondsLeftWarning(value) {
    this.#tenSecondsLeftWarning = value
  }

  /**
   * @param {boolean} value
   */
  set showProgressBar(value) {
    this.#timerDiv.classList.toggle('progress', value)
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

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
    })
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

    return this.#makeTimeString (days, hours, minutes, secs)
  }

  #makeTimeString (days, hours, minutes, secs) {
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

  #timeIsUp() {
    if (this.#timeIsUpAction === 'alert') {
      alert("Time is up! ")
    }
    if (this.#timeIsUpAction === 'sound') {
      this.#playSound()
    }
    if (this.#timeIsUpAction === 'color') {
      this.#timeUpColorChange()
    }
  }

  #playSound() {
    let soundButton = document.createElement('button')
    //soundButton.setAttribute("id", "soundButton")
    document.body.appendChild(soundButton)
    soundButton.addEventListener("click", () => (this.#play()))
  }

  #play() {
    const audio = new Audio('./sound/car-horn-6408.mp3')
    audio.play()
  }

  #timeUpColorChange() {
    this.#timerDiv.style.setProperty('background-color', 'red')
  }

  #tenSecondsLeftColorChange() {
    this.#timerDiv.style.setProperty('background-color', 'orange')
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

// fixa default element, behövs kanske inte??

// ta beslut om ljud

// utseende
