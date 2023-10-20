// function getData() {
// //     console.log("hi");
// //     fetch(`https://randomuser.me/api/`)
// //    .then((raw) => {
// //         return raw.json()
// //    })
// //    .then((data) => {
// //     console.log(data);
// //    })
// }

// if we use async await: 
// one await replaces one then:

async function getData() {
    let raw = await fetch(`https://randomuser.me/api/`) // get the data from api
    // here we need to use await to this data as well
    // we need to get raw value to get data
    // if we do not make this async it will be in the main stack and will
    // run before getting the raw value. 

    //since we need the data only after we get the raw value,
    // we use await again
    let data = await raw.json()
    console.log(data);
}


getData()