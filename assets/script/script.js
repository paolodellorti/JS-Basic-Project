//chiamo la funz. che crea gli elementi counter, + e - tramite manipolazione del DOM
createElements()

const container = document.querySelector(".container")
const subtract = document.querySelector(".subtract")
const counterContainer = document.querySelector(".counterContainer")
const counter = document.querySelector(".counter")
const add = document.querySelector(".add")
const recordMin = document.querySelector(".recordMin")
const min = document.querySelector(".min")
const memos = document.querySelectorAll(".memo")
const recordMax = document.querySelector(".recordMax")
const max = document.querySelector(".max")

let displayCounter = 0
let displayMax = 0
let displayMin = 0





//chiamo subito la funzione per mostrare lo 0 appena caricata la pagina
updateDisplay()

//creo gli eventi per aggiungere e sottrarre 1 con un click e 10 con due click
add.addEventListener('click', ()=>{
  ++displayCounter
  updateDisplay()
})

add.addEventListener('dblclick', ()=>{
  displayCounter += 8
  updateDisplay()
})

subtract.addEventListener('click', ()=>{
  --displayCounter
  updateDisplay()
})

subtract.addEventListener('dblclick', ()=>{
  displayCounter -= 8
  updateDisplay()
})

//creo tasto reset (R)
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyR') {
    displayCounter = 0
    counter.innerHTML = displayCounter
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
  displayCounter = 0
  counter.innerHTML = displayCounter
})

recordMax.addEventListener('dblclick', ()=>{
  displayCounter = displayMax
  counter.innerHTML = displayCounter
})

recordMin.addEventListener('dblclick', ()=>{
  displayCounter = displayMin
  counter.innerHTML = displayCounter
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
  counter.innerHTML = displayCounter

  if (displayMax < displayCounter) {
    displayMax = displayCounter
    max.innerHTML = displayMax
    }

  if (displayMin > displayCounter) {
    displayMin = displayCounter
    min.innerHTML = displayMin
  }
}

//creo gli elementi tramite manipolazione DOM +++++ Funzione aggiunta dopo correzione coach
//non avevo capito correttamente la richiesta, grazie per l'aiuto :)
function createElements() {

  let container = document.createElement('div')
  container.className = "container"
  document.body.prepend(container)

  let sub = document.createElement('div')
  sub.className = "subtract"
  container.append(sub)

  let cc = document.createElement('div')
  cc.className = "counterContainer"
  container.append(cc)

  let add = document.createElement('div')
  add.className = "add"
  container.append(add)


  sub.innerHTML = '<span data-hover="double click -10"> - </span>'
  cc.innerHTML = '<span class="counter"  data-hover="double click to reset"></span><span class="info" data-hover="press R to reset all">R</span>'
  add.innerHTML = '<span data-hover="double click +10"> + </span>'
}

//funzione che memorizza il numero attuale
function memo(m) {
  m.style.color = "#f3f1e9"
  m.innerHTML = displayCounter
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
