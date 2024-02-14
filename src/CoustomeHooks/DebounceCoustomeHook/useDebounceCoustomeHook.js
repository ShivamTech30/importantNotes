import React, { useEffect, useState } from 'react'

function useDebounceCoustomeHook(  changedata, timeIntrval = 500 ) {


    const [debounceValue, setDbounceValue] = useState()
    const [debounceValue1, setDbounceValue1] = useState()

    // console.log("sdnmbvjsd",debounceValue)

    useEffect(() => {

        const timeout = setTimeout(() => {

            setDbounceValue(changedata )

        }, timeIntrval)

        return ()=>clearTimeout(timeout)

    }, [changedata , timeIntrval])

    return  {debounceValue,setDbounceValue,setDbounceValue1,debounceValue1}
}

export default useDebounceCoustomeHook