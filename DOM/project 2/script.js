var  photo = document.querySelector("#container")
var like = document.querySelector("i")

photo.addEventListener("dblclick", () => {
    console.log('hi');
    like.style.transform = 'translate(-50%, -50%) scale(1.4)'

    like.style.opacity = 0.8
    like.style.color = "red"

    setTimeout(
        () => {
    
            like.style.opacity = 0        
        },
        1000
    )

    setTimeout(
        () => {
    
            like.style.transform = 'translate(-50%, -50%) scale(0)'
        },
        2000
    )
})

