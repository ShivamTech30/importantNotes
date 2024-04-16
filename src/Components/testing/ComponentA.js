import React, { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {

    const [count, setCount] = useState(0)

    const Counter =()=>{
        setCount(count+1)
    }

    return (
        <>  
            <div>
                {count}
            </div>
            
                <ComponentB 
                Counter={Counter}
                />
             
        </>
    )
}

export default ComponentA