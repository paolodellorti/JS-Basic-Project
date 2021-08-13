
let container = document.querySelector(".container")
//chiamo la funz. che crea gli elementi counter, + e - tramite manipolazione del DOM
createElements()

let recordMax = document.querySelector(".recordMax")
let recordMin = document.querySelector(".recordMin")
let max = document.querySelector(".max")
let min = document.querySelector(".min")
let memos = document.querySelectorAll(".memo")
let subtract = document.querySelector(".subtract")
let counterContainer = document.querySelector(".counterContainer")
let add = document.querySelector(".add")
let counter = document.querySelector(".counter")

let display = 0
let displayMax = 0
let displayMin = 0





//chiamo subito la funzione per mostrare lo 0 appena caricata la pagina
updateDisplay()

//creo gli eventi per aggiungere e sottrarre 1 con un click e 10 con due click
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

//creo tasto reset (R)
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyR') {
    display = 0
    counter.innerHTML = display
    displayMax = 0
    max.innerHTML = ""
    displayMin = 0
    min.innerHTML = ""
    memos.forEach(m => {
        resetMemo(m)
        m.style.color = "#404040"
    })
  }
})

//creo i reset dei singoli elementi con doppio click
counterContainer.addEventListener('dblclick', ()=>{
  display = 0
  counter.innerHTML = display
})

recordMax.addEventListener('dblclick', ()=>{
  display = displayMax
  counter.innerHTML = display
})

recordMin.addEventListener('dblclick', ()=>{
  display = displayMin
  counter.innerHTML = display
})

memos.forEach(m => {
  m.addEventListener('click', ()=>{
    memo(m)
  })
})

memos.forEach(m => {
  m.addEventListener('dblclick', ()=>{
    resetMemo(m)
  })
})

//risolvo un problema del colore del testo delle singole celle di storaggio
memos.forEach(m => {
  m.addEventListener('mouseover', ()=>{
    if (m.innerHTML == "S" || m.innerHTML == "T" || m.innerHTML == "O" || m.innerHTML == "R" || m.innerHTML == "E") {
      m.style.color = "#363636"
    }
  })

  m.addEventListener('mouseout', ()=>{
    if (m.innerHTML == "S" || m.innerHTML == "T" || m.innerHTML == "O" || m.innerHTML == "R" || m.innerHTML == "E") {
      m.style.color = "#404040"
    }
  })
});

//tolgo la possibilità di selezione del testo
window.addEventListener('selectstart', function(e){ e.preventDefault() })

//funzione principale che aggiorna il counter
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

//creo gli elementi tramite manipolazione DOM
function createElements() {
  container.innerHTML = '<div class="subtract"></div><div class="counterContainer"></div><div class="add"></div>'

  document.querySelector(".subtract").innerHTML = '<span data-hover="double click -10"> - </span>'
  document.querySelector(".counterContainer").innerHTML = '<span class="counter"  data-hover="double click to reset"></span><span class="info" data-hover="press R to reset all">R</span>'
  document.querySelector(".add").innerHTML = '<span data-hover="double click +10"> + </span>'
}

//funzione che memorizza il numero attuale
function memo(m) {
  m.style.color = "#f3f1e9"
  m.innerHTML = display
}

//funzione che resetta la singola cella di memoria, riportandola allo stato originale
function resetMemo(m) {
  m.style.color = "#363636"

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
