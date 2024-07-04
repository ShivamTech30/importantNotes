import React from 'react'

const FunctionHoisting = () => {


    // ------1 start--------
    mynewFun()
    // ThisIsArrowFun() // we get refrance error

    function mynewFun(params) {
        console.log("---------not Arrow Function")
    }

    const ThisIsArrowFun = () => {
        console.log("---------this Arrow Function")
    }

    ThisIsArrowFun()

    // note:- the morel of the story is arrow funtion doesnot have hosting


    // ------1 start--------


    // generator funtion


    //----------2 start--------- for returning multiple returns in a function we are using generator function  and inside the function we are using "yield" 

    function* getmultipleRettuen() {
        yield 1
        yield 3
    }
    let genratoreVariable = getmultipleRettuen()

    console.log("genratoreVariable", genratoreVariable.next().value)
    console.log("genratoreVariable", genratoreVariable.next().value)

    //----------2 end---------

// -----------3 start----------
    let  persne={
        name:"shivam",
        age:27
    }

    let array =[]

    let output = Object.entries(persne).map((items,id)=>{ 
        array.push(items)

    })

    console.log("mdbvsjd",array)

    // -----------3 start----------
 

    let htmlData=`"<h1 className="demooo">this string will convert in jsx </h1>"`

    return (
        <>  
        <div style={{color:"red"}}>FunctionHoisting</div>

        <div dangerouslySetInnerHTML={{__html:htmlData}} />
               
         

        </>
    )
}

export default FunctionHoisting