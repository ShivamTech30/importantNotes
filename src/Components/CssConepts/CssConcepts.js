import React from 'react'
import "./cssconcepts.css"

const CssConcepts = () => {


  let cssProperies =`
  .items {
    height: 252px;
    width: 252px;
    background-color: blueviolet;
    /* margin: 10px; */
    border: 4px solid black;
}


.main-flex {
    height: 80vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    /* make horizontal center  note :- this property we will use when we have one line if we have for the 2 lines of item the its good practice to use align-content:"center"  ^ */
    justify-content: end;
    /* make horizontal end ^ */
    justify-content: start;
    /* make horizontal start ^ */
    justify-content: space-between;
    /* make horizontal space-between   make horizontal space-around  note:-this property will take space from the starting and ending also but space-between will take the space between the 2 divs not from the starting ^ */
    justify-content: space-around;
    /* make horizontal space-around ^ */


    /* vartical */

    align-items: center;
    /* make vartical center  */

    align-items: start;
    /* make vartical start  */

    align-items: end;
    /* make vartical end  */


    /* now we have flex-direction */

    flex-direction: column;
    /* make horizontal column ^ */

    flex-direction: column-reverse;
    /* make horizontal column  will reverse^ */

    flex-direction: row;
    /* make vartical row ^ */

    flex-direction: row-reverse;
    /* make vartical row ^ */



    /* wrap */
    /* note:- when we have more items then the  item will overfloww so we use flex-wrap proprty 
     with the help for flex-wrap the items will not overflow it will brack and to down 
     */
    flex-wrap: wrap;


    /* make horizontal center  note :- this property we will use when we have one line if we have for the 2 lines of item the its good practice to use align-content:"center"  ^ */

    align-content: center;



    /* gap property */
    gap: 30px;

    /*  first gap is for row  20px  and column 30px */
    gap:20px 30px;
    column-gap: 20px;
    row-gap: 20px;


    /* align-self this property is use to align the itesm not the conatiner */
    
}


// ---------------  postions  ------------------

in Position is't default property is "static"


This <div> element has position: relative; "parent div"

This <div> element has position: absolute; "child div this div we can move any where with respect to the parent div"

/*  */`

  return (
    <>
      <div>
        <h4>
          Flex Box
        </h4>
        <p>
          Flex box was interduces in css3
        </p>

      </div>
      <div className='main-flex'>

        <div className='items'>
          1        </div>
        <div className='items'>
          2       </div>
        <div className='items'>
          3       </div>

        <div className='items'>
          4       </div>
        <div className='items'>
          5        </div>


        <div className='items'>
          1 1    </div>
        <div className='items'>
          21    </div>
        <div className='items'>
          31    </div>

        <div className='items'>
          41    </div>
        <div className='items'>
          5 1    </div>

      </div>
      <div >

      </div>
      <pre> 
      {cssProperies}
      </pre>
    </>
  )
}

export default CssConcepts