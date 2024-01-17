import { useState, useMemo } from 'react';

export default function useToggle(defaultValue) {

    const [state, setState] = useState(defaultValue)


    const toggleFun=(state)=>{

        setState(state )

    }
    
return[state,toggleFun]


    // const proxy = useMemo(() => {

    //     return new Proxy(initialState, {

    //         set(obj, prop, value) {

    //             obj[prop] = value

    //             setState(value)
    //         }
    //     })
    // }, [])
    // return proxy



}