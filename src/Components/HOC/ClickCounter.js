import React from 'react'
import HOCComponent from './HOCComponent'

const ClickCounter = (props) => {
    console.log(props)
  return (
    <div>
      <p>Click Counetr : {props.counter}</p>
      <button onClick={props.updateCounter}>Click !</button>
    </div>
  )
}
export default HOCComponent(ClickCounter) 
