import React, {useReducer} from 'react';

const countReducer =(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+action.payload};
        case 'DECREMENT':
            return  {...state,count:state.count-action.payload};
        case 'RESET':
            return {count:action.payload};
        default:
            return state
    }
}
const Counter=()=>{
    const [state,dispatch]=useReducer(countReducer, {count :0,something:'some value'})
    return(
        <>
        <div className='Count'>Counter:{state.count}</div>
        <div className='inc'><button onClick ={()=>dispatch({type:'INCREMENT', payload:1})}>Increment</button></div>   
        <div className='dec'><button onClick ={()=>dispatch({type:'DECREMENT', payload:1})}>Decrement</button>  </div> 
        <div className='reset'><button onClick ={()=>dispatch({type:'RESET',payload:0})}>Reset</button>   
        </div></>
    )
};
export default Counter;



