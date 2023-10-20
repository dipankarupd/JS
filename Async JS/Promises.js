
var ans = new Promise((res, rej) => {
    let num = Math.floor(Math.random() * 10)

    if (num < 5) {

        return res();
    } else {
        return rej()
    }
})

ans
.then(() => {

    console.log("Below 5");
})
.catch(() => {
    console.log("Above 5");
})
 


