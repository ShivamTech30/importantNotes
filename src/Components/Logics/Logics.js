// import { React } from "./React";

import useToggle from "../../useToggle"


const Logics = () => {

    const [state, toggleFun] = useToggle(false)




    // what is method
    // function inside the object is called as method

    const newObject = {
        firstName: "shivam",
        lastNme: "sharma",
        age: "26",
        newfuntion: function () {
            console.log(` my name is ${this.firstName} and my last name is  ${this.lastNme}  `)
        }
        // ${this.firstName} , this means that newObject 
        //if you still did't understand this the just console.log(this), and how you will undeerstand 
    }
    console.log(newObject?.newfuntion())













    // let a = {

    //     name: "shivam",
    //     Lname: "shivamS",

    // }

    // let b = {

    //     name1: "shivam",
    //     Lname: "shivamS",
    //     nyFun: function () {
    //         console.log(`my name is ${this.name1} `)
    //         console.log(this)
    //     }


    // }
    // console.log(b?.nyFun())


    // {
    //     let a="sam"


    // }


    let ab = {

        name1: "shivam",
        Lname: "shivamS",

    }

    let ba = {

        name1: "shivam1",
        Lname: "shivamS1",
        nyFun: function (val,bhi) {
            console.log(`my name is ${this.name1}   ${val} ${bhi}`)
            console.log(this)
        }


    }
    console.log(ba?.nyFun.call(ab,"nahi","bhai"))
    console.log(ba?.nyFun.apply(ab,["nahi","bhai"])) //apply method takes argument inside the array
let fun=ba?.nyFun.bind(ab,["nahi","bhai"]) //bind returns function
console.log(fun())
    // console.log(ba?.nyFun.apply(ab,["nahi","bhai"]))

 

    let baa = {

        name1: "shivam1",
        Lname: "shivamS1",
        // nyFun: function (val,bhi) {
        //     console.log(`my name is ${this.name1} `)
        //     // console.log(this)
        // }
        // nyFun:  ( )=> {
        //     console.log(`my name is ${this.name1} `)
        //     //  this key word is not working inside the arraw function
        // }
        nyFun( ) {
            console.log(`my name is ${this.name1} `)
            //  you can write function like this also

        }


    }

    const valuee=baa.nyFun.bind(baa)
     valuee()


     //proto prototype and class



     function hello () {
        console.log("nbavandnamd")
        console.log("dcsdfsdf",hello?.prototype)
     }
     hello.hey="mynmae"

    //  console.log("dcsdfsdf",hello?.hey)
hello.prototype.naa="samm"
hello()

// console.log("dcsdfsdf",hello?.prototype)


    return (
        <>
            <h1>{state}</h1>
            <button className='flexBox' onClick={() => toggleFun("value")}>1</button>

        </>

    )
}

export default Logics

// export const Logics = () => {


//     function alphabetSort(arr) {
//         return arr?.sort((a, b) =>
//             console.log("kdfjbkd", a, b)
//             //   a.localeCompare(b)
//         );

//     }
//     let array = ["d", "c", "b", "a"]
//     console.log(alphabetSort(array)) // ["a", "b", "c", "d"]


//     const sam = (s) => {
//         alphabetSort()
//         return s
//     }

//     console.log(sam(

//         "3"


//     ))

//     // hoisting

//     // hoisting is like if we declare the function at any of the line or any ware  ,what will we happent ,with the default
//     // behaviour of javascript the hosting  will call that function  at the top of the scope , 

//     // Example 

//     // const demoSam = demo()
//     // const demo =()=>{
//     //     console.log(" just demo")
//     // }
//     //  demo()
//     //   in that case the demo, which is line number 11 this demo() is called as declaration

//     // And 

//     // if we initalize  with the use of variable  , like "const demoSam =demo()"  this wil give error


//     // In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.




//     // what are the scops => block,functional,globle





//     // 11111111111111111
//     // event Loop

//     // the event loop pushes tasks  from the task queue to the call stack

//     // suppose that there is a setTimeout function which waits for 3 secound and that will go on (queue) and this will wait .... 


//     // 222222222222222222222



//     // 3333333333333333333
//     // mircro task


//     // 44444444444444444444444
//     // critical rendering path



//     // 55555555555555555555555
//     // closure   
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. 
//     // function foo() {
//     //     let b = 1;
//     //     function inner() {
//     //         return b;
//     //     }
//     //     return inner;
//     // }
//     // let get_func_inner = foo();

//     // console.log(get_func_inner());


//     // 666666666666666666666 
//     // pure function

// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.


//     //     let tax = 20;
//     // function calculateGST(productPrice) {
//     //     return productPrice * (tax / 100) + productPrice;
//     // }
//     // console.log(calculateGST(15))

//     // 7777777777777777777777777

//     // this , call bind , apply



//     // higher order Function 
//     // One such technique is using higher order functions. Higher order functions are functions that take one or more functions as arguments, or return a function as their result.
//     // map,reduce ,forEach ,filter

//     // 88888888888888888888888888888888888
//     // reconcilation
//     // Reconciliation is the process through which React updates the Browser DOM.



//     // 9999999999999999999999999999
//     // promis async await callback



//     // 1000000000000000000000000000000
//     // debounce vs throttle

// // what is prototype 



//     let k = 1
//     let array1 = [1, 1, 3, 3]

//     const finC = (k, array) => {
//         let value = array.map((items, id) => {

//             return items + k
//         })

//         let value1 = array.map((items, id) => {

//             return items - k
//         })
//         console.log("dmhsgvdj", value, value1)


//         // let value2 = value.map((items, id) => {

//         //     return items + value1[id]
//         // })
//         // console.log("dmhsgvdj", value2)
//         let concat = value1.concat(value)
//         console.log("dmhsgvdj", concat)

//         let concat1 = concat.splice(0, array1.length).map((item, id) => {
//             return item
//             console.log("jhdj", item)

//         })


//         let value11 = concat1.map((items, id) => {

//             return items + k
//         })

//         console.log("jhdj", value11)



//     }

//     // finC(k, array1)


//     return (





//         <>
//             <React />
//         </>
//     )
// } 



// const func =(a)=>{

//     return func2=(b)=>{
//         const sum = a+b
//         return sum
//     }
// // fun2()
// }

// let result = func(2)(3)
