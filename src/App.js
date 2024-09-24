import logo from './logo.svg';
import './App.css';
// import Loader from './Components/Loader/Loader';
// import { Logics } from './Components/Logics/Logics';
import useToggle from './useToggle';
import { useState } from 'react';
import MemoUse from './memoUse/MemoUse';
import JavascriptAdvance from './JavascriptAdvance/JavascriptAdvance';

function App() {

  // // const [state,stat,toggleFun]  =useToggle("sss")

  // // console.log("jghjsdhvs",state, stat)

  // const [CountValue, setCountValue] = useState(0)


  // const myObject = { oldKey: 'value' };

  // // Renaming the key from 'oldKey' to 'newKey' 
  // const { oldKey: newKey, ...rest } = myObject;
  // const updatedObject = { newKey, ...rest };

  // // console.log(updatedObject); // { newKey: 'value' }

  // // let arrt=2

  // // let arr2=5

  // // console.log(arrt ** arr2)

  // let functionS = (masks) => {
  //   const result = masks ?? "absent"
  //   // ?? this operter is called null coellcing opertaer 
  //   console.log(result)

  // }

  // functionS(2)
  // functionS(1)
  // functionS(0)

  // let array = [1, [2], [[4]], [[3], 4, [[[5]]]]];

  // // console.log("sdsfdfsdf1",array.length)

  // function flattenArray(arr) { 
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log("sdsfdfsdf", arr[i])
  //   } 
  //   let result = []; 
  //   for (let i = 0; i < arr.length; i++) { 
  //     if (Array.isArray(arr[i])) {
  //       result = result.concat(flattenArray(arr[i]));
  //       // console.log("sdsfdfsdf",result)
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   }

  //   return result;
  // }

  // let output = flattenArray(array);
  // console.log(output);


  // let array = [1, 2, 3, 1, 2, 3, 4, 3, 7, 9, 0,0,0]
  // let arrays = []


  // for (let i = 0; i < array.length; i++) {
  //   // let count = 0
  //   // for (let j = 0; j < array.length; j++) {

  //     if (array[i] > 3) {
  //       // count++
  //       arrays.push(array[i])
  //     }

  //   // }

  //   // if (count === 3) {

  //   // }






  //   // obje.array[i] = array[i]
  //   // newArra.push(obje) 



  // }

  // console.log("cdcncdcdc---------------", arrays)







  // ----start--- insert data in array without removing that index

  // let arraw = [1, 2, 3, 5, 6, 7]
  // let insert = 4
  // let postion = 3

  // for (let i = arraw.length - 1; i > 0; i--) {


  //   if (i >= postion) {

  //     arraw[i + 1] = arraw[i]

  //     if (i == postion) {
  //       arraw[i] = insert

  //     }
  //   }
  // }

  // note------this is the predefine function
  // arraw.splice(2, 0, 500)

  // console.log("dncbgdshsd", arraw)


  // ----end--- insert data in array without removing that index



  // // ----start--- deleted data in array without removing that index

  // let arraw = [1, 2, 3, 4, 9, 5, 6, 7]

  // let postionDelete = 4

  // for (let i = postionDelete; i < arraw.length - 1; i++) {
  //   arraw[i] = arraw[i + 1]
  // }

  // arraw.length = arraw.length - 1

  // // arraw.splice(4,1)  
  // // ----note---- this was the delete methof 
  // // 1st perameter was the index (that which index you want to delete),
  // //   2nd perameter definds the how any index you want to delete (if dont want to delete just put '0')

  // console.log("dncbgdshsd", arraw)


  // // ----end--- deleted data in array without removing that index


  //   // ----start--- Search data in array without removing that index

  //   let arraw = [7, 4, -3, 1, -2,  9, 5]






  //   for (let k = 0; k < arraw.length; k++) {
  //     arraw[k]=arraw[k]*arraw[k]

  //   }
  //   // console.log("dncbgdshs ", arraw)

  //   for (let i = 0; i < arraw.length; i++) {

  //     for (let j = 0; j < arraw.length; j++) { 

  //       // console.log("dncbgdshsd---------", arraw[j] , arraw[j + 1])
  //       let temp
  //       if (arraw[j] > arraw[j + 1]) { 
  //         temp = arraw[j]
  //         arraw[j]=arraw[j+1] 
  //         arraw[j+1]=temp  
  //       } 

  //     }

  //   }




  // console.log("dncbgdshsd", arraw)


  // // // ----end--- Search data in array without removing that index









  // // ----start--- marge Array data in array without removing that index

  // let arraw = [1, 2, 3, 4,]
  // let arraw1 = [5, 6, 7, 8,9,10,11,12]


  // let result = []

  // for (let i = 0; i < arraw1.length; i++) {
  //   result = arraw 
  //   result[arraw.length - 1 + 1] = arraw1[i]  
  // }



  // console.log("dncbgdshsd", result)


  // // ----end--- marge Array data in array without removing that index




  // // ----start--- Recursion data in array without removing that index


  // let arraw1 = 7

  // // let factorial = (factorialValue) => {
  // //   let data=1

  // //   for (let i = factorialValue; i > 0; i--) {

  // //     if (i !== undefined) {
  // //       data *= i 
  // //     } 
  // //   }
  // //   return data

  // // }


  // let factorial = (factorialValue) => {
  //   // console.log("dncbgdshsd-----------",)



  //   // if (factorialValue == 0) {
  //   //   return 1
  //   // }

  //   // return factorialValue * factorial(factorialValue - 1)



  // }


  // // ----start--- reverse String data in array without removing that index


  // let arraw1 = "hello"

  // let factorial = (factorialValue) => {

  //   // console.log("dncbgdshsdv", factorialValue.length- 1-1)


  //   if (factorialValue.length > 0) {
  //     factorial(factorialValue.length- 1-1)

  //   }
  //   console.log("dncbgdshsdv", factorialValue.length  )


  //   // return   factorial(factorialValue.length - 1) 
  // }


  // console.log("dncbgdshsd-----------", factorial(arraw1)) 

  // // ----end--- reverse String data in array without removing that index



  //   // ----start--- palendrom data in array without removing that index


  //   let arraw1 = "112343211"

  //   function palindromeCheck(num) {

  //     console.time( )
  //     let datt = []

  //     for (let i = num.length - 1; i >= 0; i--) {
  //       datt[datt.length - 1 + 1] = num[i]
  //     }
  //   let daatttaa=  console.timeEnd()


  //     console.time()
  //     let datt1 = []

  //     for (let i = num.length - 1; i >= 0; i--) {
  //       datt1.push(num[i])
  //     }
  //     let daatttaa1=  console.timeEnd()

  //     if(daatttaa>daatttaa1){
  //       console.log("nbsvdchsdjs-----------")
  //     }
  //     else{
  //       console.log("nbsvdchsdjs++++++++++++++")

  //     }

  // //  0.007080078125 ms,0.033935546875,0.012939453125 ms

  //   }

  //     palindromeCheck(arraw1); // true 

  //   // ----end--- palendrom data in array without removing that index





  // ----start--- anagram in array without removing that index

  let arraw = "hello"

  let arraw1 = "helol"





  const newfun = (arraws, arraw1) => {

    for (let i = 0; i < arraws.length; i++) {

      if (arraws.length == arraw1.length) {

        // console.log("nbsvdchsdjs++++++++++++++")

        for (let j = 0; j < arraw1.length; j++) {


          // console.log("nbsvdchsdjs-----------",arraws[i],arraw1[j])

          if (arraws[i] !== arraw1[j]) {
            // return false
          }




        }
      }
      else {
        return false
      }



    }
  }




  // console.log("nbsvdchsdjs", newfun(arraw, arraw1))


  // // ----end--- anagram in array without removing that index

  // let arrayss = [1, 2, 3, 4, 5, 1, 2]
  // let uniqe =[]

  // for (let i = 0; i < arrayss.length; i++) {

  //   let avilable =false
  //   for (let j = 0; j < uniqe.length; j++) { 
  //     if (arrayss[i] == uniqe[j]) {  
  //       avilable=true
  //       break 
  //     } 
  //   } 
  //   if(!avilable  ){
  //     uniqe.push(arrayss[i]) 
  //   }
  // }

  //   console.log("adfsdnsdf", uniqe)



  // let arrayss = [1, 5, 9, 2, 52, 3, 4,]

  // for (let i = 0; i < arrayss.length; i++) {

  //   for (let j = 0; j < arrayss.length; j++) {
  //     let temp
  //     if (arrayss[j] > arrayss[j + 1]) {
  //       temp = arrayss[j]
  //       arrayss[j] = arrayss[j+1 ]
  //       arrayss[j+1 ] = temp

  //     }



  //   }

  // }

  // console.log("adfsdnsdf", arrayss)

let value =`  const [state,stat,toggleFun]  =useToggle("sss")

    console.log("jghjsdhvs",state, stat)

   const [CountValue, setCountValue] = useState(0)


   const myObject = { oldKey: 'value' };

    Renaming the key from 'oldKey' to 'newKey' 
   const { oldKey: newKey, ...rest } = myObject;
   const updatedObject = { newKey, ...rest };

    console.log(updatedObject);  { newKey: 'value' }

    let arrt=2

    let arr2=5

    console.log(arrt ** arr2)

   let functionS = (masks) => {
     const result = masks ?? "absent"
      ?? this operter is called null coellcing opertaer 
     console.log(result)

   }

   functionS(2)
   functionS(1)
   functionS(0)

   let array = [1, [2], [[4]], [[3], 4, [[[5]]]]];

    console.log("sdsfdfsdf1",array.length)

   function flattenArray(arr) { 
     for (let i = 0; i < arr.length; i++) {
       console.log("sdsfdfsdf", arr[i])
     } 
     let result = []; 
     for (let i = 0; i < arr.length; i++) { 
       if (Array.isArray(arr[i])) {
         result = result.concat(flattenArray(arr[i]));
          console.log("sdsfdfsdf",result)
       } else {
         result.push(arr[i]);
       }
     }

     return result;
   }

   let output = flattenArray(array);
   console.log(output);


   let array = [1, 2, 3, 1, 2, 3, 4, 3, 7, 9, 0,0,0]
   let arrays = []


   for (let i = 0; i < array.length; i++) {
      let count = 0
      for (let j = 0; j < array.length; j++) {

       if (array[i] > 3) {
          count++
         arrays.push(array[i])
       }

      }

      if (count === 3) {

      }






      obje.array[i] = array[i]
      newArra.push(obje) 



   }

   console.log("cdcncdcdc---------------", arrays)







   ----start--- insert data in array without removing that index

   let arraw = [1, 2, 3, 5, 6, 7]
   let insert = 4
   let postion = 3

   for (let i = arraw.length - 1; i > 0; i--) {


     if (i >= postion) {

       arraw[i + 1] = arraw[i]

       if (i == postion) {
         arraw[i] = insert

       }
     }
   }

   note------this is the predefine function
   arraw.splice(2, 0, 500)

   console.log("dncbgdshsd", arraw)


   ----end--- insert data in array without removing that index



    ----start--- deleted data in array without removing that index

   let arraw = [1, 2, 3, 4, 9, 5, 6, 7]

   let postionDelete = 4

   for (let i = postionDelete; i < arraw.length - 1; i++) {
     arraw[i] = arraw[i + 1]
   }

   arraw.length = arraw.length - 1

    arraw.splice(4,1)  
    ----note---- this was the delete methof 
    1st perameter was the index (that which index you want to delete),
      2nd perameter definds the how any index you want to delete (if dont want to delete just put '0')

   console.log("dncbgdshsd", arraw)


    ----end--- deleted data in array without removing that index


      ----start--- Search data in array without removing that index

     let arraw = [7, 4, -3, 1, -2,  9, 5]






     for (let k = 0; k < arraw.length; k++) {
       arraw[k]=arraw[k]*arraw[k]

     }
      console.log("dncbgdshs ", arraw)

     for (let i = 0; i < arraw.length; i++) {

       for (let j = 0; j < arraw.length; j++) { 

          console.log("dncbgdshsd---------", arraw[j] , arraw[j + 1])
         let temp
         if (arraw[j] > arraw[j + 1]) { 
           temp = arraw[j]
           arraw[j]=arraw[j+1] 
           arraw[j+1]=temp  
         } 

       }

     }




   console.log("dncbgdshsd", arraw)


     ----end--- Search data in array without removing that index









    ----start--- marge Array data in array without removing that index

   let arraw = [1, 2, 3, 4,]
   let arraw1 = [5, 6, 7, 8,9,10,11,12]


   let result = []

   for (let i = 0; i < arraw1.length; i++) {
     result = arraw 
     result[arraw.length - 1 + 1] = arraw1[i]  
   }



   console.log("dncbgdshsd", result)


    ----end--- marge Array data in array without removing that index




    ----start--- Recursion data in array without removing that index


   let arraw1 = 7

    let factorial = (factorialValue) => {
      let data=1

      for (let i = factorialValue; i > 0; i--) {

        if (i !== undefined) {
          data *= i 
        } 
      }
      return data

    }


   let factorial = (factorialValue) => {
      console.log("dncbgdshsd-----------",)



      if (factorialValue == 0) {
        return 1
      }

      return factorialValue * factorial(factorialValue - 1)



   }


    ----start--- reverse String data in array without removing that index


   let arraw1 = "hello"

   let factorial = (factorialValue) => {

      console.log("dncbgdshsdv", factorialValue.length- 1-1)


     if (factorialValue.length > 0) {
       factorial(factorialValue.length- 1-1)

     }
     console.log("dncbgdshsdv", factorialValue.length  )


      return   factorial(factorialValue.length - 1) 
   }


   console.log("dncbgdshsd-----------", factorial(arraw1)) 

    ----end--- reverse String data in array without removing that index



      ----start--- palendrom data in array without removing that index


     let arraw1 = "112343211"

     function palindromeCheck(num) {

       console.time( )
       let datt = []

       for (let i = num.length - 1; i >= 0; i--) {
         datt[datt.length - 1 + 1] = num[i]
       }
     let daatttaa=  console.timeEnd()


       console.time()
       let datt1 = []

       for (let i = num.length - 1; i >= 0; i--) {
         datt1.push(num[i])
       }
       let daatttaa1=  console.timeEnd()

       if(daatttaa>daatttaa1){
         console.log("nbsvdchsdjs-----------")
       }
       else{
         console.log("nbsvdchsdjs++++++++++++++")

       }

     0.007080078125 ms,0.033935546875,0.012939453125 ms

     }

       palindromeCheck(arraw1);  true 

      ----end--- palendrom data in array without removing that index





   ----start--- anagram in array without removing that index

  let arraw = "hello"

  let arraw1 = "helol"





  const newfun = (arraws, arraw1) => {

    for (let i = 0; i < arraws.length; i++) {

      if (arraws.length == arraw1.length) {

         console.log("nbsvdchsdjs++++++++++++++")

        for (let j = 0; j < arraw1.length; j++) {


           console.log("nbsvdchsdjs-----------",arraws[i],arraw1[j])

          if (arraws[i] !== arraw1[j]) {
             return false
          }




        }
      }
      else {
        return false
      }



    }
  }




   console.log("nbsvdchsdjs", newfun(arraw, arraw1))


    ----end--- anagram in array without removing that index

   let arrayss = [1, 2, 3, 4, 5, 1, 2]
   let uniqe =[]

   for (let i = 0; i < arrayss.length; i++) {

     let avilable =false
     for (let j = 0; j < uniqe.length; j++) { 
       if (arrayss[i] == uniqe[j]) {  
         avilable=true
         break 
       } 
     } 
     if(!avilable  ){
       uniqe.push(arrayss[i]) 
     }
   }

     console.log("adfsdnsdf", uniqe)



   let arrayss = [1, 5, 9, 2, 52, 3, 4,]
  
   for (let i = 0; i < arrayss.length; i++) {

     for (let j = 0; j < arrayss.length; j++) {
       let temp
       if (arrayss[j] > arrayss[j + 1]) {
         temp = arrayss[j]
         arrayss[j] = arrayss[j+1 ]
         arrayss[j+1 ] = temp

       }



     }

   }

   console.log("adfsdnsdf", arrayss)

  




`




  return (
    <div className="App">


      {/* <JavascriptAdvance/> */}

      {/* <Loader/> */}
      {/* <Logics/> */}

      {/* <h1>{state }</h1> */}
      {/* <button className='flexBox' onClick={()=>toggleFun("value")}>1</button> */}


      {/* <div className='flexboxConatainer'  > 
        <div className='flexBox'>2</div>
        <div className='flexBox'>3</div>
        <div className='flexBox'>4</div>
        <div className='flexBox'>5</div> 
       </div> */}


      {/* memo hook start */}
      <div>
        <p>
          {/* <MemoUse state={CountValue} /> */}
          <MemoUse />

        </p>
        {/* 
        <button onClick={() => setCountValue(CountValue + 1)}>

          count
        </button> */}
      </div>
      {/* memo hook end */}

<pre>
{value}
</pre>
    
    </div>
  );
}

export default App;

// HTML
// symatic tag
//  section ,header,footer ,artical


// CSS

// sudo class as there is 1 colen ":" and sudo element has 2 coloen "::" 
