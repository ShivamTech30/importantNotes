

//  for (let i = 0; i <= 100; i++) {

//     if(i%2!==0){
//         console.log("hellon",i)
//     }

//  }

// let redomeValue = 23
// let promptValue
// //  = prompt("enter your value")

// let countValue = 0
// for (let i = 0; i < countValue; i++) {
//     // promptValue = prompt("enter your value") 
//     if (promptValue == redomeValue) {
//         countValue = 0
//     }
//     else {
//         countValue++
//     }


// }

// let promptValue = prompt("enter your full name")

// console.log("fullname" ,`@${promptValue.trim()}${promptValue.length}`)

console.time()
let arrayss = [20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,20, 30, 40, 60,]

let newArray = []
let total = 0
for (let i = 0; i < arrayss.length; i++) {
    //    agrave = total /length 
     
    total += arrayss[i]  
    newArray.push(total / (newArray.length + 1)) 

}

console.log("sdhgvhsjdh", newArray)
console.timeEnd()