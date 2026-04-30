const dot = document.getElementById("dot")
const speedvalue = document.getElementById("speed-value")
const speedslider = document.getElementById("speed")
const passCount = document.getElementById("pass-count")
const passesSlider = document.getElementById("passes")
const passesValue = document.getElementById("passes-value")
const startButton = document.getElementById("start-button")
const stopButton = document.getElementById("stop-button")
const track = document.querySelector(".track")
let running = false
let dotX = 0
let direction = 1
let passes = 0
let loop



function animate(){
    dotX += speedslider.value*direction*0.7
    dot.style.left = dotX + "px"
   
  if (dotX >= track.offsetWidth - dot.offsetWidth) {
direction = -1
    passes++
    passCount.textContent = passes
  }

  if (dotX <= 0) {
    direction = 1
    passes++
    passCount.textContent = passes
  }
  if (passes >= passesSlider.value) {
    stopSession()
    return
}
 loop =requestAnimationFrame(animate)
}

function startSession(){
    running = true
    dotX = 0
    direction = 1
    passes = 0
    passCount.textContent = passes
    animate()
}

function stopSession(){
    running = false
    cancelAnimationFrame(loop)
}

startButton.addEventListener("click", startSession)
stopButton.addEventListener("click", stopSession)

speedslider.addEventListener("input", () => speedvalue.textContent = speedslider.value)
passesSlider.addEventListener("input", () => passesValue.textContent = passesSlider.value)  

