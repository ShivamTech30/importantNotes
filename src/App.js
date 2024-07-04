import logo from './logo.svg';
import './App.css';
// import Loader from './Components/Loader/Loader';
// import { Logics } from './Components/Logics/Logics';
import useToggle from './useToggle';
import { useState } from 'react';
import MemoUse from './memoUse/MemoUse';
import JavascriptAdvance from './JavascriptAdvance/JavascriptAdvance';

function App() {

  // const [state,stat,toggleFun]  =useToggle("sss")

  // console.log("jghjsdhvs",state, stat)

  const [CountValue, setCountValue] = useState(0)


  const myObject = { oldKey: 'value' };

  // Renaming the key from 'oldKey' to 'newKey' 
  const { oldKey: newKey, ...rest } = myObject;
  const updatedObject = { newKey, ...rest };

  // console.log(updatedObject); // { newKey: 'value' }

  // let arrt=2

  // let arr2=5

  // console.log(arrt ** arr2)

  let functionS = (masks) => {
    const result = masks ?? "absent"
    // ?? this operter is called null coellcing opertaer 
    console.log(result)

  }

  functionS(2)
  functionS(1)
  functionS(0)

  let array = [1, [2], [[4]], [[3], 4, [[[5]]]]];

  // console.log("sdsfdfsdf1",array.length)

  function flattenArray(arr) { 
    for (let i = 0; i < arr.length; i++) {
      console.log("sdsfdfsdf", arr[i])
    } 
    let result = []; 
    for (let i = 0; i < arr.length; i++) { 
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
        // console.log("sdsfdfsdf",result)
      } else {
        result.push(arr[i]);
      }
    }

    return result;
  }

  let output = flattenArray(array);
  console.log(output);


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


    </div>
  );
}

export default App;

// HTML
// symatic tag
//  section ,header,footer ,artical


// CSS

// sudo class as there is 1 colen ":" and sudo element has 2 coloen "::" 
