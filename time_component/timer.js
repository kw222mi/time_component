export default class Timer{

  #timerTime = 0

  constructor(options) {
    Object.entries(options).forEach(([key, value]) =>{ this[key] = value})
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
    
  }
}


