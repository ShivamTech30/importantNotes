import React, { useState } from 'react'
import ComponentB from './ComponentB'
import "./componentA.css"


const ComponentA = () => {

    const [count, setCount] = useState(0)

    const Counter = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                {count}
            </div>

            <div className='main-container'>

                <div className='main1'>

                </div>

                <div className='main2'>

                </div>
                <div className='main3'>

                </div>
               
            </div>

            <ComponentB
                Counter={Counter}
            />

        </>
    )
}

export default ComponentA