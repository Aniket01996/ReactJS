import React from 'react'
import HOCComponent from './HOCComponent'

const HoverCounter = (props) => {
    console.log(props) 
    return (
        <div>
            <p>Handle Hover : {props.counter}</p>
            <button onMouseOver={props.updateCounter}>Hover !</button>
        </div>
    )
}
export default HOCComponent(HoverCounter) 
