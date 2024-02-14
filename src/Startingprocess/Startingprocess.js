import React from 'react'
import useDebounceCoustomeHook from '../CoustomeHooks/DebounceCoustomeHook/useDebounceCoustomeHook'

const Startingprocess = () => {

    const  {debounceValue,setDbounceValue,setDbounceValue1,debounceValue1} =useDebounceCoustomeHook( )


    

const helloFiun=()=>{
    console.log("mdbnvcnsd")
    setDbounceValue1( "hello")

}


console.log("snbvdnsdsd",debounceValue,debounceValue1)
    return (
        <div  >
            <button onClick={(w)=>helloFiun(w)}>
                please click me
            </button>

            5 round of interview

            1 verify your resume
            2 techniqual testing round(screening round)
            3 main teachnical round
            4 manager round
            5 hr round

        </div>
    )
}

export default Startingprocess