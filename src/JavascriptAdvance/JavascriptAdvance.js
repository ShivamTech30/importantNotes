import React from 'react'

const JavascriptAdvance = () => {

    // --------------------- first class function start---------------------------

    // A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treats function as a first-class citizen.
    // let newFunc = () => {
    //     return "this function is passing as a argumrnt in side the  AclassFunction"
    // }

    // const AclassFunction = (takeNewFun) => {
    //     // console.log(takeNewFun)

    //     return takeNewFun
    // }
    // AclassFunction(newFunc())

    // console.log(AclassFunction(newFunc()))

    // --------------------- first class function end ---------------------------


    //---------------------- new keyword start ------------------------------------------

    // new keyword create's a blanck object 

    // function newKetWord() {

    //     this.name1 = "shivam"
    // }
    // console.log(new newKetWord())

        //---------------------- new keyword end ------------------------------------------


        //---------------------- iife start ------------------------------------------

        //  immediately  invoked  function expression

        //  const invokedFun =(()=>{
        // console.log("nmbjsvdchsd")
        // })() 

        (function () {

            console.log("nmbjsvdchsd1")
        })()

    //---------------------- iife end ------------------------------------------

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let arrayData=[20,5,7,9,43,5,7] 


// for(let i=0; i<arrayData.length; i++){  
//     for (let j = i+1; j < arrayData.length; j++) {
//         if(arrayData[i] > arrayData[j]){

//             arrayData[i] = arrayData[i] + arrayData[j];
//             arrayData[j] = arrayData[i] - arrayData[j];
//             arrayData[i] = arrayData[i] - arrayData[j];

//         }   
//     }
// }

console.log("jhgcfxgvh");



    return (
        <div>


        </div>
    )
}

export default JavascriptAdvance