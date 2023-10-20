
var mouse = document.querySelector(".mouse")
var scrn = document.querySelector(".main")

scrn.addEventListener("mousemove", (d) => {
    mouse.style.left = d.x + "px"
    mouse.style.top = d.y + "px"
})