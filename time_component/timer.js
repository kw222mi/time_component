export function setupTimer(elementInput) {
  let counter = 0
  const setTimer = (count) => {
    counter = count
    elementInput.textContent = `count is ${counter}`
  }
  elementInput.addEventListener('click', () => setTimer(++counter))
  setTimer(0)
}

/*
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
*/