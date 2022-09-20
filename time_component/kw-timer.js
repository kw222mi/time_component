const template = document.createElement('template')
template.innerHTML = `
<div>
  <h1 id= 'userMessage' >My Timer</h1>
    <div id= 'userInstructionDiv'>
    </div>
    <form>
      <input type='text' id='timeInput'/>
      <button type='submit' id= 'timeButton' > Submit </button>
    </form>
</div>
`
customElements.define('kw-timer',

  class extends HTMLElement {
    #userInstructionDiv
    #timeInput
    #timeButton
    #userMessage

    #end = 0 // change this to stop the counter at a higher value
    #refresh = 1000 // Refresh rate in milli seconds
    #timeLeft

    constructor() {
      super()

      // Attach a shadow DOM tree to this element and append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      
      // Get elements in shadowRoot
      this.#userMessage = this.shadowRoot.querySelector('#userMessage')
      this.#userInstructionDiv = this.shadowRoot.querySelector('#userInstructionDiv')
      this.#userInstructionDiv.textContent = 'Please enter the time in minutes.'
      this.#timeInput = this.shadowRoot.querySelector('#timeInput')
      this.#timeButton = this.shadowRoot.querySelector('#timeButton')
    }

    connectedCallback() {
      this.#timeButton.addEventListener('click', (event) => this.#getTime(event))
    }

    //kolla om det går att göra till int annars undantag
    #getTime(event) {
      event.preventDefault()
      let timerTime
      if (this.#timeInput.value === null) {
        timerTime = 0
      } else {
        timerTime = parseInt(this.#timeInput.value)
      }
      /*
      // clear input field
      this.#timeInput.value = ''
      this.#timeButton.setAttribute('disabled', true)
      */
      this.#checkIfTimeIsUp(timerTime * 60)
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

      this.#userMessage.textContent = configTime
      this.#timeLeft--
      this.#checkIfTimeIsUp(this.#timeLeft)
    }

    //TODO: when time  is up

    //TODO fix time, if 0 dont show.
    
    //TODO stop timer, pause timer
  })

/*
  #displayTime(minutes, seconds) {
    if (minutes < 10 && seconds < 10)
      return `0${minutes}:0${seconds}`
    if (minutes == 0 && seconds < 10)
      return `00:0${seconds}`
    if (minutes == 0 && seconds == 0)
      return `00:00`
    if (minutes < 10)
      return `0${minutes}:${seconds}`
    if (seconds < 10)
      return `${minutes}:0${seconds}`
    if (minutes == 0)
      return `00:${seconds}`
    return `${minutes}:${seconds}`
  }
  */
