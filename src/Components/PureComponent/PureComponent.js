import React, { useMemo, useState } from 'react'

const PureComponent = () => {

    const [CountValue, setCountValue] = useState(0)
    const [CountValueMulti, setCountValueMulti] = useState(10)


    const myMemoFun=useMemo(()=>{
        console.log("smnbjhsjdh")
        return CountValue*5
    },[])
    

    return (
        <div>PureComponent
            <h1>Add count value {CountValue}</h1>
            <h1>Multi count value {CountValueMulti}</h1>

            <button
            //  onClick={ myFuntionn}
            >
                {myMemoFun}
            </button>
            <br /><br />
            <button onClick={() => setCountValue(CountValue + 1)} >
                Add number
            </button>
            <br />

            <br />
            <button onClick={() => setCountValueMulti(CountValueMulti * 2)} >
                Multi number
            </button>
        </div>
    )
}

export default PureComponent