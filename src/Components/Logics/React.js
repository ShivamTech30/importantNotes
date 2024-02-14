// browsr can not read moden javascript so we are using babel

//what is  babel 
//babel is a compiler which  suports modern javascript (like ES6 ) so  the browser can read is properly

//  what  is webpack 
// webpack make bundle of file and folder 
// in react babel and webpack is automatoclly installed (when we are imporing any thing we are getting directly)


// what is webpack analyzer in react
// Webpack Bundle Analyzer is a tool to visualize and analyze the size of JavaScript application bundles. You can use it to identify any large and redundant modules contributing to the overall bundle size.













//-----1-----///// Lifecycle Methods

// constructor()//
// "before render the page"

// render()
// "after render the page "
// componentDidUpdate() this method will render after the Render(). this method is use during the api call's


// componentDidUpdate
// " when you update the states then componentDidUpdate method will call or propes will come's after update "


// componentWillUnmount


// -----2-----///// Stateful and Stateless Components 
// "In React, a stateful component is a component that holds some state. Stateless components  by contrast, have no state"
// where, both Stateful and Stateless Components can use props.




// useMemo
// use memo is used for memorized value ,that means is will store your value untill your parameter will not change 


// ----3-----// controled and unControled Components


// "Uncontrolled Components: Uncontrolled Components are the components 
// that are not controlled by the React state and are handled by the DOM (Document Object Model). "

// Controlled Components: In React, Controlled Components are those in which form’s data is handled by the component’s state.





// reconcilation
//" Reconciliation is the process ,  Reconciliation is the process through which React updates the Browser DOM.
// or defing Algoridome "



// how vartual DOM is change in ui insted of real dom what is the process


//  localization in react  
// there is frame work name "i18next " which is use for localization (server side render)


// what is react Fragment 
// "<> </> this is react fragment , it is replacement of div "
// Java Script//



// how data is flow in react 
// data how is a une directional ,it flows from parant to child


// what is child props



// which component is batter class base or functional and why it is batter
// "when you create class base comonent , so the compiler conver class base to functional 
// and in functional component the compiler read directly in bundel file" 



// how to implement Lazy Loading in react routers with router DOM libraty
// fallback 
// The React.lazy() function takes a component definition as an argument and returns a new component that is loaded on demand. The Suspense component is used to handle the loading process and display a fallback UI while the component is loading.
// Here is an example of how to use lazy loading in React:
// import React, { Suspense } from 'react';

// const MyComponent = React.lazy(() => import('./MyComponent'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <MyComponent />
//     </Suspense>
//   );
// }




//  how to handel error in react and what is error boundary in react








// HOC 

// Concretely, a higher-order component is a function that takes a component and returns a new component.


// redux thunk  it is use to performe asyncronus task

// synthatic events

export const React = () => {

    const demo = () => {
        // return name1
    }








    
    return (
        <>
            <button onClick={demo}>
                hello
            </button>
        </>
    )

}