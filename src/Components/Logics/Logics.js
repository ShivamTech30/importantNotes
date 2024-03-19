// import { React } from "./React";

import useToggle from "../../useToggle"


const Logics = () => {

    const [state, toggleFun] = useToggle(false)

    // javascript  is a  synchronus single threaded language
    // single threaded  means it run a one task at a time it cont run multiple task at a time    


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
        //if you still did't understand this the just console.log(this), and then you will undeerstand 
    }
    console.log(newObject?.newfuntion())








    // JavaScript has 8 Datatypes
    // String.
    // Number.
    // Bigint.
    // Boolean.
    // Undefined.
    // Null.
    // Symbol.
    // Object.


    // what is truly and falsy in javascript
    // When non-boolean values are used in a boolean context, such as the condition of an if statement, they will be coerced into either true or false . Values that are coerced into true are called truthy and values that are coerced into false are called falsy.




    // JavaScript modules
    // what is method
    // function inside the object is called as method
    // JavaScript modules are a powerful tool for organizing and structuring code. They allow you to split your code into smaller, self-contained units that can be reused and maintained more easily. Modules also make your code more modular and reusable, which can make it easier for other developers to understand and use.


    // what is javascript execution context
    // When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code. During the context runtime, the parser parses the source code and allocates memory for the variables and functions.



    // Memoization in js
    // Memoization is a technique where the return value of a function is cached based on its input parameters. Subsequent calls to the function with the same parameters can then directly return the cached result, eliminating the need for repeated computation



    // What is design pattern JavaScript?
    // JavaScript (JS) is a lightweight, interpretive, object-oriented programming language with first-class functions widely used as web page scripting. Design patterns are reusable code that is applied to solving commonly occurring problems


    // 2500 + 1000 + 871 + 2010 + 4200 + 4500 + 1600 + 211 + 2000 + 4000 + 3500 + 1000 + 1500 + 500 =
    // 2500 + 1000 + 871 + 2010 + 4200 + 4500 + 1600 + 211 + 2000 + 4000 + 3500 + 1000 + 1500 + 500 =

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
        nyFun: function (val, bhi) {
            console.log(`my name is ${this.name1}   ${val} ${bhi}`)
            console.log(this)
        }


    }
    console.log(ba?.nyFun.call(ab, "nahi", "bhai"))
    console.log(ba?.nyFun.apply(ab, ["nahi", "bhai"])) //apply method takes argument inside the array
    let fun = ba?.nyFun.bind(ab, ["nahi", "bhai"]) //bind returns function
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
        nyFun() {
            console.log(`my name is ${this.name1} `)
            //  you can write function like this also

        }


    }

    const valuee = baa.nyFun.bind(baa)
    valuee()


    //proto prototype and class



    function hello() {
        console.log("nbavandnamd")
        console.log("dcsdfsdf", hello?.prototype)
    }
    hello.hey = "mynmae"

    //  console.log("dcsdfsdf",hello?.hey)
    hello.prototype.naa = "samm"
    hello()

        // console.log("dcsdfsdf",hello?.prototype)


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

    let arrayData = [20, 5, 7, 9, 43, 5, 7]


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

//     // suppose that there is a setTimeout function which waits for 3 secound and that will go on  ( call back queue) and this will wait .... 
// in event loop there is two queues callback queue and microTask queues

// suppose that in callStack there  is two task one is promise and second one is settimeout
// the promise will executed first becouse it will gose to microTask and settimeoiut will gose to eventLoop and enevnt loop give the priority to microtaks first 





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

// this key word is refering the on object 
// in arrow function this key world is not working
// call will take  func.call(thisObj, args1, args2, ...)
// func.apply(thisObj, [args1, args2, ...]);

// let data =func.bind(thisObj, arg1, arg2, ..., argN);


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
// in javascript there is defult object constructor with that constructor there is default object is created and that object is known as prototype 



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


// diff btwn if else and ternaory oprater 
// if else is a statment and ternaory oprator is a expresstion 
// let aa = 1==2?true:false -> this returen value happend in  expession and statement is not stored its value in varaible 


// difrance between deep copy and shelo copy


// this is the way to prevent to change the value of name 
// const object={
//     name:"sam",
//     fullname:"saha"
// }
// Object.defineProperties(object,{name:{writable:false}})

// object.name="shivam"
// console.log(object)