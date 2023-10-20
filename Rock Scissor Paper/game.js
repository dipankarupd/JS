function operate(userchoice) {
    choice = choose();

    if (userchoice === choice) {
        alert("Game Drawn")
    }

    else {
        if(userchoice === 1) {
            if(choice === 2) {
                alert("Computer Won")
            }
            else {
                alert("You Won")
            }
        }


        if (userchoice === 2) {
            if(choice === 1) {
                alert("You Won")
            } else {
                alert("Computer Won")
            }
        }

        if(userchoice === 3) {
            if(choice === 1) {
                alert("Computer Won")
            }
            else {
                alert("You Won")
            }
        }
    }
}

function choose() {

    let num = Math.floor(Math.random() * (3-1+1)) + 1
    return num
}

alert('Hello World')

let score = {
    
}