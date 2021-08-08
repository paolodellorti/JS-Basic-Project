let add = document.querySelector(".add")
let counter = document.querySelector(".counter")
let subtract = document.querySelector(".subtract")
let counterContainer = document.querySelector(".counterContainer")
let recordMax = document.querySelector(".recordMax")
let recordMin = document.querySelector(".recordMin")
let max = document.querySelector(".max")
let min = document.querySelector(".min")
let m1 = document.querySelector("#m1")
let m2 = document.querySelector("#m2")
let m3 = document.querySelector("#m3")
let m4 = document.querySelector("#m4")
let m5 = document.querySelector("#m5")

let display = 0
let displayMax = 0
let displayMin = 0

//chiamo subito la funzione per mostrare lo 0 appena caricata la pagina
updateDisplay()

add.addEventListener('click', ()=>{
  ++display
  updateDisplay()
})

add.addEventListener('dblclick', ()=>{
  display += 8
  updateDisplay()
})

subtract.addEventListener('click', ()=>{
  --display
  updateDisplay()
})

subtract.addEventListener('dblclick', ()=>{
  display -= 8
  updateDisplay()
})

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyR') {
    display = 0
    counter.innerHTML = display
    displayMax = 0
    max.innerHTML = ""
    displayMin = 0
    min.innerHTML = ""
  }
})

counterContainer.addEventListener('dblclick', ()=>{
  display = 0
  counter.innerHTML = display
})

recordMax.addEventListener('dblclick', ()=>{
  displayMax = 0
  max.innerHTML = ""
})

recordMin.addEventListener('dblclick', ()=>{
  displayMin = 0
  min.innerHTML = ""
})

//Click su store => stora il numero
m1.addEventListener('click', ()=>{
  memo(m1)
})

//Double Click => resetta, lo faccio per tutti i 5 tasti m
m1.addEventListener('dblclick', ()=>{
  resetMemo(m1)
})

m2.addEventListener('click', ()=>{
  memo(m2)
})

m2.addEventListener('dblclick', ()=>{
  resetMemo(m2)
})

m3.addEventListener('click', ()=>{
  memo(m3)
})

m3.addEventListener('dblclick', ()=>{
  resetMemo(m3)
})

m4.addEventListener('click', ()=>{
  memo(m4)
})

m4.addEventListener('dblclick', ()=>{
  resetMemo(m4)
})

m5.addEventListener('click', ()=>{
  memo(m5)
})

m5.addEventListener('dblclick', ()=>{
  resetMemo(m5)
})

//tolgo la selezione del testo
window.addEventListener('selectstart', function(e){ e.preventDefault(); });


function updateDisplay() {
  counter.innerHTML = display

  if (displayMax < display) {
    displayMax = display
    max.innerHTML = displayMax
  }

  if (displayMin > display) {
    displayMin = display
    min.innerHTML = displayMin
  }
}

function memo(m) {
  m.style.color = "#f3f1e9"
  m.innerHTML = display
}

function resetMemo(m) {
  m.style.color = "#404040"

  switch (m) {
    case m1:
    m.innerHTML = "S"
      break;
    case m2:
    m.innerHTML = "T"
      break;
    case m3:
    m.innerHTML = "O"
      break;
    case m4:
    m.innerHTML = "R"
      break;
    case m5:
    m.innerHTML = "E"
      break;
  }
}
