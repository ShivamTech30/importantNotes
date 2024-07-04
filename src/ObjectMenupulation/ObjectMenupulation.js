import React from 'react'
import CardData from "../fakeData/cart.json"
import ProductDAta from "../fakeData/product.json"

const ObjectMenupulation = () => {

    const objectData={ }
    const objectData1={ }

 console.log()


 
    console.log("sbdvsds", CardData, ProductDAta)

    React.useEffect(() => {

        let data = []

        ProductDAta?.products?.forEach((ProductItems, id) => {
            let isFound = false
            CardData?.carts?.forEach((cartItems, id) => {
                if (ProductItems?.id === cartItems?.id) {
                    ProductItems["newKey"] = "SHIVAM";
                    isFound = true;
                    data.push(ProductItems);
                }
            })
            if (isFound == false) {
                ProductItems["test**********************"] = ProductItems?.id + 3
                data.push(ProductItems)
            } 

        })  
        console.log("nagschdada", data) 

    }, [])


    // React.useEffect(() => {

    //     // let dataa = CardData?.carts?.filter((cartItems, id) => {  
    //     //     let data = ProductDAta?.products?.map((ProductItems, id) => { 
    //     //         if (cartItems?.id == ProductItems?.id) {  
    //     //             return { ...ProductItems, "discountedPrice": ProductItems?.id * 2 }
    //     //         }
    //     //     }) 

    //     //     console.log("bndnsdsd",data)

    //     //     return data 

    //     // })

    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];

    //     }





    // //   let arrayDaa=  dataa?.map((items) => {
    // //         let lastdata=[]
    // //         let dataPush = [] 
    // //         items?.map((itemsss) => {
    // //             if (itemsss !== undefined) {
    // //                 dataPush.push(itemsss)
    // //             }  
    // //         })

    // //         lastdata.push(dataPush) 
    // //           return lastdata 

    // //     })

    // //     console.log("bndnsdsd",arrayDaa.flat(Infinity))



    // }, [])


    return (
        <div>
            ObjectMenupulation 


            <button>
                &times;
            </button>
        </div>
    )
}

export default ObjectMenupulation