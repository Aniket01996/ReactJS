import React from 'react'
import { useReducer } from 'react';

const UseReducer = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Counter Reducer : {count}</p>
            <button onMouseOver={()=>{dispatch({type:'increment'})}}>Increment !</button>
            <button onMouseOver={()=>{dispatch({type:'decrement'})}}>Decrement !</button>
        </div>
    )
}

export default UseReducer
