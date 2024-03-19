import React, { useEffect, useMemo, useState } from 'react'

export default function MemoUse({ state }) {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // const doubleNumber = useMemo (()=>{
    //  return   slowFunction(number)
    // },[number])
    const doubleNumber = slowFunction(number)

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "back"
    }


    // const anyFun = () => {
    //     console.log("sdvjvsdsd")
    // }

    // coustome hook  use case : is use to store data from diffrent diffrent (get data from diffrent diffrent  component) component and use it on   perticular  component,


    let sam = "122"
    let sam1 = "221"
    sam = sam1
    console.log("bhcbczc", sam)
    console.log("bhcbczc1", sam1)

    const promis = new Promise(res => res(2));
    promis.then(v => {
        console.log(v)
        return v * 2
    }).then(v => {
        console.log(v)
        return v * 2
    }).finally(v => {
        console.log(v)
        return v * 2
    }).then(v => {
        console.log(v)

    })


    var a = 5
    console.log(1< 3 <5 )
    // console.log(a+1)
    console.log(true + 1)
    


    let aa = 5
    let av = 5



    useEffect(() => {

        if (aa == av == 5) {
            console.log({ "run": "" })
        }
        else {
            console.log({ "eror": "" })
        }

    }, [])




    return (

        <>
            <div>
                <spamaa>
                    dsns,dm
                </spamaa>
            </div>

            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />


            <button onClick={() => setDark(prev => !prev)}>
                change theme

            </button>

            <div style={themeStyle}>
                {doubleNumber}

            </div>




            {/* <div> count value = {state}</div>

            <button onClick={(e) => anyFun(e)}>
                any other fun
            </button> */}



        </>

    )
}


function slowFunction(num) {
    for (let index = 0; index <= 1000000000; index++) { }
    return num * 2
}