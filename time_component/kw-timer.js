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
/**
 *
 */
  class extends HTMLElement {
    #userInstructionDiv
    #timeInput
    #timeButton
    #userMessage

    #minutes = 0
    #seconds = 0

   #end = 0 // change this to stop the counter at a higher value
   #refresh=1000 // Refresh rate in milli seconds
   #timeLeft
   
    /**
     *
     */
    constructor () {
      super()

       /**
       * Attach a shadow DOM tree to this element and append the template to the shadow root.
       */
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#userMessage = this.shadowRoot.querySelector('#userMessage')

         this.#userInstructionDiv = this.shadowRoot.querySelector('#userInstructionDiv')
         this.#userInstructionDiv.textContent =  'Please enter the time in minutes.'

         this.#timeInput = this.shadowRoot.querySelector('#timeInput')
         this.#timeButton = this.shadowRoot.querySelector('#timeButton')
    }

    /**
     *
     */
    connectedCallback () {
      this.#timeButton.addEventListener('click', (event) => this.#getTime(event))
    }

     /**
     * 
     *
     * @param {Event} event -
     */

     //kolla om det går att göra int annars undantag
      #getTime (event) {
        event.preventDefault()
        let timerTime
        if (this.#timeInput.value === null) {
          timerTime = 0
        } else {
          timerTime = parseInt(this.#timeInput.value)
        }
        // clear input field
        this.#timeInput.value = ''
        this.#timeButton.setAttribute('disabled', true)

      }

   




  })
