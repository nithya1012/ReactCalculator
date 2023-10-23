// // import React, {createContext} from 'react';
// // import {NameCard} from './component/name-card';
// // export const ReusableFunctions=createContext();
// // const App=()=>{
// //     const sharedSpace={
// //         getFullName : (firstName,LastName ='')=>{
// //             return `${firstName} ${lastName}`;
// //               },
// //             somethingCommon : 'somethingCommon'      
// //     }
// //     return<>
// //     {
// //         <ReusableFunctions.Provider value={sharedSpace}>
// //             <NameCard firstName={'Nithi'} lastName={'Crazy'}/>
// //             <NameCard firstName={'Nisanto'} lastName={'Janani'}/>

// //         </ReusableFunctions.Provider>
// //     </>
// // }
// // export default App;

// import Counter from './Counter';
// import counter from './Counter.css';
import Calculator from "./calculator";
import calculator from './Calculator.css';
function App(){
    return(
        <div className='App'>
        <Calculator></Calculator>
        </div>
    );
}
export default App;