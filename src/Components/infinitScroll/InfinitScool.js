import React, { useEffect, useState } from 'react'

const InfinitScool = () => {


    const [FakeData, setFakeData] = useState([]);
    const [PageData, setPageData] = useState(1);


    useEffect(() => {  
        let ApiCallFun = (async () => { 
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${PageData}`, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setFakeData((prev)=>[...prev, ...data]);

        })() 

    }, [PageData])

    const handelInfinitScroll =async()=>{

        console.log("scrollbar",document.documentElement.scrollHeight)
        console.log("scrollinerHeight",window.innerHeight) 
        console.log("scrollTop",document.documentElement.scrollTop)

        try{

       if( window.innerHeight+document.documentElement.scrollTop+1>document.documentElement.scrollHeight)
       {
        setPageData((perv)=>perv+1)

       }

        }catch(error){

            console.log(error)

        }

    }


    useEffect(()=>{
window.addEventListener("scroll",handelInfinitScroll)
return ()=>window.removeEventListener("scroll",handelInfinitScroll)
    },[])


    return (
        <div>

            <div class="row m-5 ">
                {FakeData?.map((items, id) => {
                    return <div class="col-sm-6 p-2 ">
                        <div class="card">
                            <div class="card-body">
                                <h2>{id + 1}</h2>
                                <h5 class="card-title">{items?.title}</h5>
                                <p class="card-text">{items?.body}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>


        </div>
    )
}

export default InfinitScool