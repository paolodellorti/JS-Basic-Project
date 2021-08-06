let add = document.querySelector(".add")
let counter = document.querySelector(".counter")
let subtract = document.querySelector(".subtract")
let recordMax = document.querySelector(".recordMax")
let recordMin = document.querySelector(".recordMin")
let resetButton = document.querySelector(".resetButton")


let display = 0
let max = 0
let min = 0

updateDisplay()

add.addEventListener('click', ()=>{
  ++display
  updateDisplay()
  stop()
})

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
    ++display
    updateDisplay()
    stop()
  }
})

subtract.addEventListener('click', ()=>{
  --display
  updateDisplay()
  stop()
})

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    --display
    updateDisplay()
    stop()
  }
})

resetButton.addEventListener('click', ()=>{
  reset()
})

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyM' && (event.ctrlKey || event.metaKey)) {
    reset()
  }
})

function updateDisplay() {
  counter.innerHTML = display

  if (max <= display) {
    max = display
    recordMax.innerHTML = "Max value reached:<br>" + max
  }

  if (min >= display) {
    min = display
    recordMin.innerHTML = "Min value reached:<br>" + min
  }
}

function reset() {
  display = 0
  counter.innerHTML = display
}

function stop() {
  if (display == -42) {
    alert("-42!! Heeey you reach the answer to the ultimate question of Life, the universe, and everything... Better start again!")
    reset()
  }

  if (display == 42) {
    alert("42!! Heeey you reach the answer to the ultimate question of Life, the universe, and everything... Better start again!")
    reset()
  }
}
