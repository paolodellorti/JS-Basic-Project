let cursorTag = document.querySelector("div.cursors")
let ball = cursorTag.querySelector("div")
let cursorMessage = cursorTag.querySelector("div span")
let target = document.querySelectorAll("[data-hover]")


document.addEventListener("mousemove", function(event) {
  ball.style.left = event.pageX + "px"
  ball.style.top = event.pageY + "px"
})


target.forEach(element => {
  element.addEventListener("mouseover", ()=> {
    cursorMessage.classList.add("visible")
    cursorMessage.innerHTML = element.getAttribute("data-hover")
  })

  element.addEventListener("mouseout", ()=> {
    cursorMessage.classList.remove("visible")
  })
})
