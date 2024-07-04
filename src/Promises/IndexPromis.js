

document.getElementById("button").addEventListener("click", (() => {

    let a = new Promise((resolved, reject) => {
        setTimeout(() => {
            reject({ "sadas": "rejected" })
        }, 4000)

    })
    // console.log("outside", a)

    a.then((value) => {
        console.log("sdasads",value)

    }).catch((error)=>{
        console.log(error)
    })
}))