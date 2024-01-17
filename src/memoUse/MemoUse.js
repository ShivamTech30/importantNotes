import React from 'react'

const MemoUse = ({ state }) => {


    const anyFun = () => {
        console.log("sdvjvsdsd")
    }

    // coustome hook  use case : is use to store data from diffrent diffrent (get data from diffrent diffrent  component) component and use it on   perticular  component,


    return (

        <>
            <div> count value = {state}</div>

            <button onClick={(e) => anyFun(e)}>
                any other fun
            </button>

        </>

    )
}

export default MemoUse