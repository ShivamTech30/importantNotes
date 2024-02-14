import React, { useState } from 'react'
import useDebounceCoustomeHook from '../../CoustomeHooks/DebounceCoustomeHook/useDebounceCoustomeHook'

const DebounceComponent = () => {

    const [changedata,setChangeData]=useState("hello")

    const {debounceValue,setDbounceValue} =useDebounceCoustomeHook(changedata)

    const changeValue=(e)=>{
        setChangeData(e.target.value)
        setDbounceValue( e.target.value)
        // useDebounceCoustomeHook()
    }

    console.log("jhvjhdsvd111", debounceValue)

    return (
        <>
            <input type='text' placeholder='search Some thing' 
            onChange={(e)=>changeValue(e)}
            />

            <div>DebounceComponent</div>

        </>
    )
}

export default DebounceComponent