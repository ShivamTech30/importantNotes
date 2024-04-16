import React, { useEffect } from 'react'

const ComponentB = ({Counter}) => {
     

    useEffect(()=>{

        let callApiFun =()=>{

       let response=  fetch("url",{
        method:"get"

       }).then((value)=>{


       }).catch((err)=>{

       })

        }
        callApiFun()

    },[])
  return (
    <div> 
        <button onClick={(e)=>Counter(e)}>
            counter
        </button>
    </div>
  )
}

export default ComponentB