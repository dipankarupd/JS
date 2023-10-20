var isKnown = document.querySelector('h4')

var friends = document.querySelector("#friends")

var flag = 0

friends.addEventListener("click", function() {

    if(flag == 0) {
        isKnown.innerHTML = "Friends"
        isKnown.style.color = "green"
        friends.innerHTML = "Remove Friends"
        flag = 1
    } else {
        isKnown.innerHTML = "Strangers"
        isKnown.style.color = "red"
        friends.innerHTML = "Add Friends"
        flag = 0
    }
})
