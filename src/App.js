import logo from './logo.svg';
import './App.css';
// import Loader from './Components/Loader/Loader';
// import { Logics } from './Components/Logics/Logics';
import useToggle from './useToggle';
import { useState } from 'react';
import MemoUse from './memoUse/MemoUse';

function App() {

  // const [state,stat,toggleFun]  =useToggle("sss")

  // console.log("jghjsdhvs",state, stat)

  const [CountValue,setCountValue]=useState(0)

  return (
    <div className="App">
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
<MemoUse state={CountValue}/>
   
</p>

<button onClick={()=>setCountValue(CountValue +1)}>

  count
</button>
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
