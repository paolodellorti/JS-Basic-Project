let add = document.querySelector(".add")
let counter = document.querySelector(".counter")
let subtract = document.querySelector(".subtract")
let recordMax = document.querySelector(".max")
let recordMin = document.querySelector(".min")
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
    if (display == 42) {
      stop()
    }
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
    if (display == -42) {
      stop()
    }
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

resetButton.addEventListener('dblclick', ()=>{
  recordMax.innerHTML = ""
  recordMin.innerHTML = ""
  min = 0
  max = 0
})

function updateDisplay() {
  counter.innerHTML = display

  if (max < display) {
    max = display
    recordMax.innerHTML = max
  }

  if (min > display) {
    min = display
    recordMin.innerHTML = min
  }
}

function reset() {
  display = 0
  counter.innerHTML = display
}

function stop() {
  if (display == -42) {
    alert("Heeey you reach 42!! The answer to the ultimate question of Life, the universe, and everything... Better start again!")
    reset()
  }

  if (display == 42) {
    alert("Heeey you reach 42!! The answer to the ultimate question of Life, the universe, and everything... Better start again!")
    reset()
  }
}
