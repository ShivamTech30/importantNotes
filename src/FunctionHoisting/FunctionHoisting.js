import React, { useEffect, useState } from 'react'

const FunctionHoisting = () => {


    const [value, setValue] = useState(false)



    useEffect(() => {

        console.log("cbbvgshdjksd")

    }, [value])





    const JustClickFun = () => {

        setValue(true)




    }





















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
    let persne = {
        name: "shivam",
        age: 27
    }

    let array = []

    let output = Object.entries(persne).map((items, id) => {
        array.push(items)

    })

    console.log("mdbvsjd", array)

    // -----------3 start----------


    let htmlData = `"<h1 className="demooo">this string will convert in jsx </h1>"`




    let reverseData = [1, 3, 5, [2], [[3]], [4, 5], 6]

    // for (let i = reverseData.length-1; i >= 0; i--) {

    //     console.log("sdjhvhsdhf", reverseData[i])
    // }

    function myShoredFun1(shortdData) {

        let arrayss = []
        for (let i = 0; i < shortdData.length; i++) {
            
            if (Array.isArray(shortdData[i])) {
                // myShoredFun1(shortdData[i])
                arrayss = arrayss.concat(myShoredFun1(shortdData[i]));
            }
            else {
                arrayss.push(reverseData[i])
            }



        }

        return arrayss

        // return shortdData.flat( Infinity)

    }
    // myShoredFun1
    console.log("sdnfksdf-------1", myShoredFun1(reverseData))






    function myShoredFun(shortdData) {


        for (let i = 0; i < shortdData.length; i++) {

            for (let j = 0; j < shortdData.length; j++) {

                if (shortdData[i] == shortdData[j]) {
                    console.log("dhfdfsdlf", shortdData[j])
                    // return 
                }
            }

        }

    }

    let shortdData2 = [1, 3, 1, 4, 1, 6, 3]
    let shortdData1 = [1, 3, 1, 4, 1, 6, 3]

    console.log("dhfdfsdlf", shortdData2.concat(shortdData1))
    console.log("dhfdfsdlf", [...shortdData1, ...shortdData2])
    console.log("dhfdfsdlf", [`${shortdData1} , ${shortdData2}`])

    // let output1 = new Set([...shortdData])
    // console.log("dhfdfsdlf", output1.values())










    function flattenArray(arr) {
        let flattened = [];
    
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flattened = flattened.concat(flattenArray(item));
            } else {
                flattened.push(item);
            }
        });
    
        return flattened;
    }
    
    // Example usage:
    let nestedArray = [1, 3, 5, [2], [[3]], [4, 5], 6];
    let flattenedArray = flattenArray(nestedArray);
    console.log("smdhvjsds",flattenedArray);

    return (
        <>


            <div className=''>
                <button onClick={(e) => JustClickFun(e)}>
                    view
                </button>

            </div>



            <div style={{ color: "red" }}>FunctionHoisting</div>

            <div dangerouslySetInnerHTML={{ __html: htmlData }} />



        </>
    )
}

export default FunctionHoisting