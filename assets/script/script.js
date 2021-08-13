//chiamo la funz. che crea gli elementi counter, + e - tramite manipolazione del DOM
createElements()

let container = document.querySelector(".container")
let subtract = document.querySelector(".subtract")
let counterContainer = document.querySelector(".counterContainer")
let counter = document.querySelector(".counter")
let add = document.querySelector(".add")
let recordMin = document.querySelector(".recordMin")
let min = document.querySelector(".min")
let memos = document.querySelectorAll(".memo")
let recordMax = document.querySelector(".recordMax")
let max = document.querySelector(".max")

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
