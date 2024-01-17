import React, { useEffect } from 'react'

const Devops = () => {


    // array.map((items, id) => {

    //     if (array[id] > items) {
    //       return  arrays.push(items)
    //     }

    // })

    // console.log("dnbjsdd", array)


    useEffect(() => {

        let array = [4, 8, 1, 2, 3, 3, 5, 9]
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] < array[j + 1]) {
                    let tepVar = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = tepVar
                }
            }

        }

        // console.log("mhdsbsd", array)

    }, [])


    const factorial = (item) => {

        if (item == 0) {
            return 1
        }

        // return item *  factorial(item-1)
    }




   
    useEffect(() => {
        let dataaa = 5
        factorial(dataaa)
        console.log("mnhvjcas", factorial(dataaa))
        // (function demo (){
        //     console.log("bsdhgsd")
        // })()

        // let arrayOfData=[0,3,5,2,1,9,4,333,4,6]

        // for (let i = 0; i < arrayOfData.length; i++) {  
        //     for (let j = 0; j < arrayOfData.length; j++) { 

        //         if(arrayOfData[i]< arrayOfData[i+1]){
        //             console.log("nsbdsd",arrayOfData[i])

        //             let tempDatt= arrayOfData[i]
        //             arrayOfData[i]=arrayOfData[i+1]
        //             arrayOfData[i+1]=tempDatt 

        //         }




        //     }

        // }

        // console.log("nsbdsd",arrayOfData)

    }, [])


    // import axios from "axios";

    // let headersList = {
    //  "Accept": "*/*",
    //  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0MTU1ODQzLCJpYXQiOjE3MDI2MTk4NDMsImp0aSI6IjQ4MjQwYjEzYWMwMjRiMDM5Nzc4YWEyOGYzYWQ0Y2MxIiwidXNlcl9pZCI6MjkyfQ.za7j7WOtp4PX9EY60LpG2xKBBV8OGyjR4H3c4lqofZY" 
    // }
    
    // let reqOptions = {
    //   url: "http://13.233.131.50/payment/price/",
    //   method: "GET",
    //   headers: headersList,
    // }
    
    // let response = await axios.request(reqOptions);

    // console.log(response.data);
    

//     let headerLists ={
//         Accept:"*/*",
//         Autherization: "Bearer tooken"
//     }

//     let resposeObject={
// url:"your url",
// method:"any method like get post patch",
// headers:headerLists,
//     }
    
//     let axiosResponse = axios.request(resposeObject)



    return (
        <div>Devops
            <h1>
                what to learn  on cloude service

            </h1>
            <ul>
                <li>aws</li>

                <li>azure</li>


                <p>
                    points you have to know

                    <ul>
                        <li>route 53</li>
                        <li>ec2, s3, efs (elastic file system) , cloud watch </li>
                    </ul>
                </p>
            </ul>


            <h2>
                learn terraform
            </h2>


        </div>
    )
}

export default Devops